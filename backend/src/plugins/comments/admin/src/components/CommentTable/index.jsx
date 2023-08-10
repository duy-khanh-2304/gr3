import React, { useState, useRef, useEffect } from 'react'
import {
  Table,
  Thead,
  TFooter,
  Tbody,
  Tr,
  Td,
  Th,
} from "@strapi/design-system/Table";
import {request} from '@strapi/helper-plugin'
import { Box } from "@strapi/design-system/Box";
import { Flex } from "@strapi/design-system/Flex";
import { Typography } from "@strapi/design-system/Typography";
import {BsCheckLg} from 'react-icons/bs'
import {TbReload} from 'react-icons/tb'
import {Popover, Tag} from 'antd'
import {Dialog, DialogBody, DialogFooter, Button, BaseCheckbox, Grid, MultiSelect, MultiSelectOption, Alert} from '@strapi/design-system'
import {ExclamationMarkCircle, Trash, Check} from '@strapi/icons'
import styles from './index.module.css'
import styled, {keyframes} from 'styled-components';
import { Loader as LoaderComponent } from '@strapi/design-system';
import {Loader as LoadingIcon} from '@strapi/icons'
import {DatePicker, Pagination} from 'antd'

const COUNT_ONE_PAGE = 20

export default function CommentTable(props){
  const [isVisibleAccept, setIsVisibleAccept] = useState(false)
  const [isVisibleDecline, setIsVisibleDecline] = useState(false)
  const [isVisibleAcceptChecked, setIsVisibleAcceptChecked] = useState(false)
  const [isVisibleDeclineChecked, setIsVisibleDeclineChecked] = useState(false)
  const [isAllChecked, setIsAllChecked] = useState(false)
  const [checkedList, setCheckedList] = useState([])
  const [selected, setSelected] = useState([])
  const [rangeDate, setRangerDate] = useState({
    start: null,
    end: null
  })
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [isFetching, setIsFetching] = useState(false)

  const {RangePicker} = DatePicker

  const rotation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  `;

  const LoadingWrapper = styled.div`
    animation: ${rotation} 2s infinite linear;
  `;

  const Loader = () => (
    <LoadingWrapper>
      <LoadingIcon />
    </LoadingWrapper>
  );

  const formatComment = (string) => {
    if(string.length < 30){
      return string
    }
    return `${string.slice(0, 30)} ...`
  }

  function formatDateTime(date) {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Asia/Ho_Chi_Minh'
    };
  
    return date.toLocaleString('en-US', options);
  }

  const handleClickAccept = async (comment) => {
    setIsLoading(true)
    const data = await request("/comments/accept", {
      method: "PUT",
      "Content-Type": "application/json",
      body: [comment]
    })
    const newCommentList = props.commentList.filter(_ => _.uuid !== comment.uuid)
    props.update([...newCommentList])
    setIsLoading(false)
    setIsVisibleAccept(false)
  }

  const handleClickAcceptAllChecked = async () => {
    setIsLoading(true)
    const data = await request("/comments/accept", {
      method: "PUT",
      "Content-Type": "application/json",
      body: [...checkedList]
    })
    const newCommentList = props.commentList.filter(comment => {
      return !checkedList.some(_ => _.uuid === comment.uuid)
    })
    props.update([...newCommentList])
    setCheckedList([])
    setIsLoading(false)
    setIsVisibleAcceptChecked(false)
  }

  const handleClickDecline = async (comment) => {
    setIsLoading(true)
    const data = await request("/comments/decline", {
      method: "PUT",
      "Content-Type": "application/json",
      body: [comment]
    })
    const newCommentList = props.commentList.filter(_ => _.uuid !== comment.uuid)
    props.update([...newCommentList])
    setIsLoading(false)
    setIsVisibleDecline(false)
  }

  const handleClickDeclineAllChecked = async () => {
    setIsLoading(true)
    const data = await request("/comments/decline", {
      method: "PUT",
      "Content-Type": "application/json",
      body: [...checkedList]
    })
    const newCommentList = props.commentList.filter(comment => {
      return !checkedList.some(_ => _.uuid === comment.uuid)
    })
    props.update([...newCommentList])
    setCheckedList([])
    setIsLoading(false)
    setIsVisibleDeclineChecked(false)
  }

  const handleDatePicker = (value) => {
    if(value === null){
      setRangerDate({
        start: null,
        end: null
      })
      return
    }
    const startDate = new Date(value[0].$d).toDateString()
    const endDate = new Date(value[1].$d).toDateString()
    setRangerDate({
      start: startDate,
      end: endDate
    })
  }

  const handleChangePage = (page) => {
    setCurrentPage(page)
  }

  const handleReFetchData = async () => {
    setIsFetching(true)
    await props.handleReFetchData()
    setIsFetching(false)
  }

  //Filter
  let commentList

  if(selected.length === 0){
    commentList = props.commentList
  }else{
    commentList = props.commentList.filter(_ => selected.some(type => type === _.contentType))
  }

  if(rangeDate.start && rangeDate.end){
    commentList = commentList.filter(_ => {
      if(rangeDate.start === rangeDate.end){
        return new Date(_.commentedAt).toDateString() === rangeDate.start 
      }else{
        const startDate = new Date(rangeDate.start)
        const endDayOfEnd = new Date(
          new Date(rangeDate.end).getFullYear(),
          new Date(rangeDate.end).getMonth(),
          new Date(rangeDate.end).getDate(),
          23,59,59,999
        )
        return new Date(_.commentedAt) >= startDate && new Date(_.commentedAt) <= endDayOfEnd
      }
    })
  }

  //Paginated
  const paginatedComment = commentList.slice((currentPage-1)*COUNT_ONE_PAGE, currentPage*COUNT_ONE_PAGE)
  return (
    <div>
      {
        !!isFetching ? (<div style={{
          width: '100',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <LoaderComponent>Fetching data ...</LoaderComponent>
        </div>) : (
          <div>
            <Box
              hasRadius={true}
              style={{ marginTop: "10px" }}
            >
              <div style={{display: "flex"}}>
                <div className={styles.button_reload}>
                  <TbReload onClick={handleReFetchData}/>
                </div>
                <div style={{margin: "0 10px 10px 0", width: "30%"}}>
                  <MultiSelect 
                    placeholder="Filter ..." 
                    onClear={() => {
                      setSelected([]);
                    }} 
                    value={selected} 
                    onChange={(value) => {
                      setSelected([...value])
                    }}
                    withTags
                    style={{minWidth: "120px"}}
                  >
                    <MultiSelectOption value="news-and-event">News and Event</MultiSelectOption>
                    <MultiSelectOption value="project">Project</MultiSelectOption>
                    <MultiSelectOption value="ai-tech-blog">AI Tech Blog</MultiSelectOption>
                    <MultiSelectOption value="solution">Solution</MultiSelectOption>
                    <MultiSelectOption value="tool-and-resource">Tool and Resource</MultiSelectOption>
                  </MultiSelect>
                </div>
                <div style={{margin: "0 10px 0 0"}}>
                    <RangePicker onChange={handleDatePicker} style={{height: "40px", marginTop: "5px"}}/>
                </div>
                <div style={{display: "flex", alignItems: "center"}}>
                  <BaseCheckbox 
                    style={{marginRight: "5px"}}
                    aria-label="Select all entries after filter" 
                    onClick={() => {
                      if(commentList.every((comment) => checkedList.some(_ => _.uuid === comment.uuid))){
                        setCheckedList([])
                      }else{
                        setCheckedList([...commentList])
                      }
                    }}
                    checked={commentList.every((comment) => checkedList.some(_ => _.uuid === comment.uuid))}
                  />
                  All
                </div>
              </div>
              <div style={{display: "flex"}}>
                {
                  checkedList.length > 0 && (
                    <div style={{display: "flex", alignItems: "end"}}>
                      <Button 
                        variant="danger-light" 
                        style={{margin: "0 10px 10px 0", height: "40px"}}
                        startIcon={
                          <Trash
                            style={{color: '#3e7251', fontSize: '24px', fontWeight: 700}}
                          />
                        }
                        onClick={() => {setIsVisibleDeclineChecked(true)}}
                      >
                        Decline
                      </Button>
                      <Button 
                        variant="success-light" 
                        style={{margin: "0 0 10px 0", height: "40px"}}
                        startIcon={
                          <BsCheckLg
                            style={{color: '#3e7251', fontSize: '24px', fontWeight: 700}}
                          />
                        }
                        onClick={() => {setIsVisibleAcceptChecked(true)}}
                      >
                        Accept
                      </Button>
                    </div>
                  )
                }
                {
                  checkedList.length > 0 && (<div style={{marginLeft: "auto", display: "flex", alignItems:"center", alignContent: "center"}}>Selected: {checkedList.length}</div>)
                }
              </div>
              <Table
                colCount={4}
                rowCount={10}
              >
                <Thead>
                  <Tr>
                    <Th>
                      <BaseCheckbox 
                        aria-label="Select all entries of a page" 
                        onClick={() => {
                          if(paginatedComment.every((comment) => checkedList.some(_ => _.uuid === comment.uuid))){
                            setCheckedList(prev => {
                              const newList = prev.filter(comment => !paginatedComment.some(_ => _.uuid === comment.uuid))
                              return [...newList]
                            })
                          }else{
                            setCheckedList(prev => {
                              const isNotChecked = paginatedComment.filter(comment => !prev.some(_ => _.uuid === comment.uuid))
                              return [...prev, ...isNotChecked]
                            })
                          }
                        }}
                        checked={paginatedComment.every((comment) => checkedList.some(_ => _.uuid === comment.uuid))}
                      />
                    </Th>
                    <Th>
                      <Typography variant="sigma">Name</Typography>
                    </Th>
                    <Th>
                      <Typography variant="sigma">Comment</Typography>
                    </Th>
                    <Th>
                      <Typography variant="sigma">Title</Typography>
                    </Th>
                    <Th>
                      <Typography variant="sigma">Content type</Typography>
                    </Th>
                    <Th>
                      <Typography variant="sigma">Commented At</Typography>
                    </Th>
                    <Th>
                      <Typography variant="sigma">Action</Typography>
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {
                    paginatedComment && paginatedComment.map((comment, index) => {
                      return (
                        <Tr key={index}>
                          <Td>
                            <BaseCheckbox 
                              aria-label={`Select ${comment.id}`} 
                              checked={checkedList.find(_ => _.uuid === comment.uuid)}
                              onClick={() => {
                                const checked = checkedList.find(_ => _.uuid === comment.uuid)
                                if(checked){
                                  setCheckedList(prev => {
                                    const newPrev = prev.filter(_ => _.uuid !== checked.uuid)
                                    return [...newPrev]
                                  })
                                }else {
                                  setCheckedList(prev => [...prev, comment])
                                }
                              }}
                            />
                          </Td>
                          <Td>
                            <Typography textColor="neutral800">{comment.name}</Typography>
                          </Td>
                          <Td>
                            <Typography textColor="neutral800">
                              <Popover content={(
                                <div style={{maxWidth: "400px"}}>
                                  {comment.comment}
                                </div>
                              )}
                              placement="bottomLeft"
                              >
                                <div 
                                  style={{fontStyle: "italic"}} 
                                >" {formatComment(comment.comment)} "</div>
                              </Popover>
                            </Typography>
                          </Td>
                          <Td>
                            <Typography textColor="neutral800">{comment.title}</Typography>
                          </Td>
                          <Td>
                            <Typography textColor="neutral800"><Tag color="geekblue">{comment.contentType}</Tag></Typography>
                          </Td>
                          <Td>
                            <Typography textColor="neutral800">{formatDateTime(new Date(comment.commentedAt))}</Typography>
                          </Td>
                          <Td>
                            <Flex style={{ justifyContent: "end" }}>
                              <Button 
                                style={{marginRight: "15px"}}
                                variant='success-light' 
                                onClick={() => {setIsVisibleAccept(true)}} 
                              >Accept</Button>
                              <Button variant='danger-light' onClick={() => {setIsVisibleDecline(true)}}>Decline</Button>
                              <Dialog title="Decline" isOpen={isVisibleDecline}>
                                <DialogBody icon={<ExclamationMarkCircle />}>
                                  <Flex direction="column" alignItems="center" gap={2}>
                                    <Flex justifyContent="center">
                                      <Typography id="confirm-description" style={{textAlign: "center"}}>Are you sure you want to decline this?</Typography>
                                    </Flex>
                                  </Flex>
                                </DialogBody>
                                <DialogFooter 
                                  startAction={
                                    <Button onClick={() => setIsVisibleDecline(false)} variant="tertiary">
                                      Cancel
                                    </Button>
                                  } 
                                  endAction={
                                    isLoading ? 
                                    <Button
                                      variant="danger-light"
                                    >
                                      <Loader/>
                                    </Button> : 
                                    <Button 
                                      variant="danger-light" 
                                      startIcon={<Trash />}
                                      onClick={async (e) => {await handleClickDecline(comment)}}
                                    >
                                      Confirm
                                    </Button>
                                  } 
                                />
                              </Dialog>
                              <Dialog title="Accept" isOpen={isVisibleAccept}>
                                <DialogBody>
                                  <Flex direction="column" alignItems="center" gap={2}>
                                      <BsCheckLg
                                        style={{color: '#3e7251', fontSize: '30px', fontWeight: 700}}
                                      />
                                    <Flex justifyContent="center">
                                      <Typography id="confirm-description" style={{textAlign: "center"}}>Are you sure you want to accept this?</Typography>
                                    </Flex>
                                  </Flex>
                                </DialogBody>
                                <DialogFooter 
                                  startAction={
                                    <Button onClick={() => {
                                      setIsVisibleAccept(false)
                                    }} variant="tertiary">
                                      Cancel
                                    </Button>
                                  } 
                                  endAction={
                                    isLoading ? (
                                      <Button
                                        variant="success-light"
                                      >
                                        <Loader/>
                                      </Button>
                                    ) : (
                                      <Button 
                                        onClick={async (e) => {await handleClickAccept(comment)}}
                                        variant="success-light" 
                                        startIcon={<Check />} 
                                      >
                                        Confirm
                                      </Button>
                                    )
                                  } 
                                />
                              </Dialog>
                              <Dialog title="Decline" isOpen={isVisibleDeclineChecked}>
                                <DialogBody icon={<ExclamationMarkCircle />}>
                                  <Flex direction="column" gap={2}>
                                    <Flex justifyContent="center">
                                      <Typography id="confirm-description" style={{textAlign: "center"}}>Are you sure you want to decline all checked comments?</Typography>
                                    </Flex>
                                  </Flex>
                                </DialogBody>
                                <DialogFooter 
                                  startAction={
                                    <Button onClick={() => setIsVisibleDeclineChecked(false)} variant="tertiary">
                                      Cancel
                                    </Button>
                                  } 
                                  endAction={
                                    isLoading ? (
                                      <Button
                                        variant="danger-light"
                                      >
                                        <Loader/>
                                      </Button>
                                    ) : (
                                      <Button variant="danger-light" startIcon={<Trash />}
                                      onClick={async (e) => {await handleClickDeclineAllChecked()}}
                                    >
                                      Confirm
                                    </Button>
                                    )
                                  } 
                                />
                              </Dialog>
                              <Dialog title="Accept" isOpen={isVisibleAcceptChecked}>
                                <DialogBody>
                                  <Flex direction="column" alignItems="center" gap={2}>
                                      <BsCheckLg
                                        style={{color: '#3e7251', fontSize: '30px', fontWeight: 700}}
                                      />
                                    <Flex justifyContent="center">
                                      <Typography id="confirm-description" style={{textAlign: "center"}}>Are you sure you want to accept all checked comments?</Typography>
                                    </Flex>
                                  </Flex>
                                </DialogBody>
                                <DialogFooter 
                                  startAction={
                                    <Button onClick={() => setIsVisibleAcceptChecked(false)} variant="tertiary">
                                      Cancel
                                    </Button>
                                  } 
                                  endAction={
                                    isLoading ? (
                                      <Button
                                        variant="success-light"
                                      >
                                        <Loader/>
                                      </Button>
                                    ) : (
                                      <Button variant="success-light" startIcon={<Check />}
                                      onClick={async (e) => {await handleClickAcceptAllChecked()}}
                                    >
                                      Confirm
                                    </Button>
                                    )
                                  } 
                                />
                              </Dialog>
                            </Flex>
                          </Td>
                        </Tr>
                      )
                    })
                  }
                </Tbody>
              </Table>
              <Pagination current={currentPage} onChange={handleChangePage} total={commentList.length} defaultPageSize={COUNT_ONE_PAGE} 
                style={{display: "flex", justifyContent: "center", marginTop: "10px"}}
              />
            </Box>
          </div>
        )
      }
    </div>
  )
}