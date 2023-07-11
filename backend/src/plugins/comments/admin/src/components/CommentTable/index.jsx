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
import { VisuallyHidden } from "@strapi/design-system/VisuallyHidden";
import {RxCross2} from 'react-icons/rx'
import {BsCheckLg} from 'react-icons/bs'
import {Popover, Tag} from 'antd'
import {Dialog, DialogBody, DialogFooter, Button, BaseCheckbox, Grid, MultiSelect, MultiSelectOption, Alert} from '@strapi/design-system'
import {ExclamationMarkCircle, Trash, Check} from '@strapi/icons'
import styles from './index.module.css'
import styled, {keyframes} from 'styled-components';
import {Loader as LoadingIcon} from '@strapi/icons'
import {DatePicker} from 'antd'

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

  useEffect(() => {
    if(checkedList.length === props.commentList.length){
      setIsAllChecked(true)
    }

    if(isAllChecked && checkedList.length !== props.commentList.length){
      setIsAllChecked(false)
    }
  }, [checkedList.length])

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
        console.log("Start Date: ", startDate)
        console.log("End date: ", endDayOfEnd)
        return new Date(_.commentedAt) >= startDate && new Date(_.commentedAt) <= endDayOfEnd
      }
    })
  }

  return (
    <div>
      <Box
        hasRadius={true}
        style={{ marginTop: "10px" }}
      >
        <div style={{display: "flex"}}>
        <div style={{margin: "0 10px 10px 0", width: "30%"}}>
          <MultiSelect 
            placeholder="Filter..." 
            onClear={() => {
              setSelected([]);
            }} 
            value={selected} 
            onChange={(value) => {
              setSelected([...value])
            }}
            withTags
            style={{minWidth: "200px"}}
          >
            <MultiSelectOption value="news-and-event">News and Event</MultiSelectOption>
            <MultiSelectOption value="project">Project</MultiSelectOption>
            <MultiSelectOption value="ai-tech-blog">AI Tech Blog</MultiSelectOption>
            <MultiSelectOption value="solution">Solution</MultiSelectOption>
            <MultiSelectOption value="tool-and-resource">Tool and Resource</MultiSelectOption>
          </MultiSelect>
        </div>
        <div>
            <RangePicker onChange={handleDatePicker} style={{height: "40px", marginTop: "5px"}}/>
        </div>
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
        </div>
        <Table
          colCount={4}
          rowCount={10}
        >
          <Thead>
            <Tr>
              <Th>
                <BaseCheckbox 
                  aria-label="Select all entries" 
                  onClick={() => {
                    if(isAllChecked){
                      setCheckedList([])
                    }else{
                      setCheckedList([...props.commentList])
                    }
                    setIsAllChecked(prev => !prev)
                  }}
                  checked={isAllChecked}
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
              commentList && commentList.map((comment, index) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <BaseCheckbox 
                        aria-label={`Select ${comment.id}`} 
                        checked={checkedList.find(_ => _.id === comment.id)}
                        onClick={() => {
                          const checked = checkedList.find(_ => _.id === comment.id)
                          if(checked){
                            setCheckedList(prev => {
                              const newPrev = prev.filter(_ => _.id !== checked.id)
                              return newPrev
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
      </Box>
    </div>
  )
}