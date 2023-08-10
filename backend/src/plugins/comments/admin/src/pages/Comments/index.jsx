/*
 *
 * HomePage
 *
 */

import React, {useEffect, useState} from 'react';
import pluginId from '../../pluginId';
import { request } from '@strapi/helper-plugin';
import { BaseHeaderLayout, ContentLayout, Layout, Box, Alert, Loader } from '@strapi/design-system';
import CommentTable from '../../components/CommentTable';
import {EmptyStateLayout} from '@strapi/design-system'
import styles from './index.module.css'
const Comments = () => {
  const [comments, setComments] = useState()
  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false)
  
  const updateCommentListAfterEvent = (commentList) => {
    setComments([...commentList])
    setIsShowSuccessMessage(true)
    setTimeout(() => {
      setIsShowSuccessMessage(false)
    }, 4000)
  }

  const handleReFetchData = async () => {
    const data = await request("/comments", {
      method: "GET",
      "Content-Type": "application/json",
    })
    setComments([...data])
  }

  useEffect(() => {
    ;(async () => {
      const data = await request("/comments", {
        method: "GET",
        "Content-Type": "application/json",
      })
      setComments([...data])
    })()
  }, [])
  return (
    <div>
      <Layout>
        {
          isShowSuccessMessage && 
            <Alert 
              onClose={() => {
                setIsShowSuccessMessage(false)
              }}
              closeLabel="Close alert" 
              title="Success" 
              variant="success"
              style={{position: "absolute", top: "40px", width: "200px", left: "50%"}}
            >.
            </Alert>
        }
        <BaseHeaderLayout
          title="Comments"
          subtitle="All current comments need to be moderated"
          as="h2"
        />
        <ContentLayout>
          {
            !comments && <Loader className={styles.spinner}>Loading data ... </Loader>
          }
          {
            comments && (comments.length === 0 ? (
              <Box background="neutral100">
                <EmptyStateLayout content="You don't have any comments to moderate" />
              </Box>
            ) : (
              <CommentTable commentList={comments} update={updateCommentListAfterEvent} handleReFetchData={handleReFetchData}/>
            ))
          }
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default Comments;
