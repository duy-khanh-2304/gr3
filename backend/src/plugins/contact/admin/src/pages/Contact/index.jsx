/*
 *
 * HomePage
 *
 */

import React, { useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { request } from '@strapi/helper-plugin';
import { BaseHeaderLayout, ContentLayout, Layout, Box, Alert, Loader, EmptyStateLayout, ModalLayout, ModalBody, ModalHeader, ModalFooter, Typography, TextInput, Textarea } from '@strapi/design-system';
import styles from './index.module.css'
import {List, Skeleton, Button} from 'antd'
import { Col, Divider, Row } from 'antd';
import {Resend} from 'resend'

const resend = new Resend('re_6aepVydP_Bu4mM3aG4GdkgbbkiKfPD5a1')

const COUNT = 1

const Contact = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([])
  const [list, setList] = useState([])
  const [currentIndex, setCurrentIndex] = useState()
 
  const onLoadMore = () => {
    setLoading(true)
    const nextList = messages.slice(currentIndex, currentIndex + COUNT)
    setCurrentIndex(prev => prev + COUNT)
    setList(prev => [...prev, ...nextList])
    setLoading(false)
    window.dispatchEvent(new Event('resize'));
  }

  const loadMore =
    !initLoading && !loading && (messages.length !== 0 && list.length !== messages.length) ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button loading={loading} onClick={onLoadMore}>Loading more</Button>
      </div>
    ) : null;

  useEffect(() => {
    ;(async () => {
     const data = await request("/contact", {
       method: "GET",
       "Content-Type": "application/json",
     })
     const sortedData = data.sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
     setInitLoading(false)
     setMessages([...sortedData])
     const initList = sortedData.slice(0, COUNT)
     setList([...initList])
     setCurrentIndex(COUNT)
    })()
  }, [])
  return (
    <div>
      <Layout>
        <BaseHeaderLayout
          title="Messages"
          subtitle="All current messages"
          as="h2"
        />
        <ContentLayout>
          {
            !messages && <Loader className={styles.spinner}>Loading data ... </Loader>
          }
          {
            messages && (messages.length === 0 ? (
              <Box background="neutral100">
                <EmptyStateLayout content="You don't have any comments to moderate" />
              </Box>
            ) : (
              <Box background="neutral100">
                <div style={{backgroundColor: "#ffffff", padding: "10px", color: "#4945fe", borderBottom: "1px solid #eeeeee"}}>
                  Number: {list.length} / {messages.length}
                </div>
                <List
                  className=""
                  loading={initLoading}
                  itemLayout="horizontal"
                  loadMore={loadMore}
                  dataSource={list}
                  renderItem={(item) => {
                    console.log("item : ", item)
                    return (
                      <List.Item
                        className={styles.item}
                        actions={[<Button className={styles.replyButton}><a href={`mailto:${item.message.email ? item.message.email : ''}`}>Reply</a></Button>]}
                      >
                        <Skeleton avatar title={false} loading={item.loading} active>
                          <div style={{width: "70%", padding: "10px"}}>
                            <div className={styles.subject}>{item.subject}</div>
                            <div>
                              <span>From: {item.name}</span><span className={styles.email}>{"<"}{item.email}{">"}</span>
                            </div>
                            <div>
                              <div className={styles.message}>{item.message}</div>
                            </div>
                          </div>
                        </Skeleton>
                      </List.Item>
                    )
                  }}
                />
              </Box>
            ))
          }
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default Contact;
