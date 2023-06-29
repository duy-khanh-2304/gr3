/*
 *
 * HomePage
 *
 */

// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { request } from '@strapi/helper-plugin';
import React, { useEffect } from 'react';
import { Box, Typography } from '@strapi/design-system';
import styles from './index.module.css'

const Statistics = () => {
  useEffect(() => {
   ;(async () => {
    const data = await request("/statistics/news-and-events", {
      method: "GET",
      "Content-Type": "application/json",
    })
    console.log('Data: ', data)
   })()
  })
  return (
    <div className={styles.header}>
      <Typography variant="alpha">Statistics</Typography>
    </div>
  );
};

export default Statistics;
