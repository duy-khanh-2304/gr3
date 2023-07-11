/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { request } from '@strapi/helper-plugin';
import { BaseHeaderLayout, ContentLayout, Layout, Box, Alert, Loader, EmptyStateLayout } from '@strapi/design-system';
import styles from './index.module.css'

const Contact = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    ;(async () => {
     const data = await request("/contact", {
       method: "GET",
       "Content-Type": "application/json",
     })
     setMessages([...data])
     console.log("DATA: ", data)
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
              <div>Duy khanh</div>
            ))
          }
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default Contact;
