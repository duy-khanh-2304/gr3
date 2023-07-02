/*
 *
 * HomePage
 *
 */

import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { request } from '@strapi/helper-plugin';

const HomePage = () => {
  useEffect(() => {
    ;(async () => {
     const data = await request("/comments", {
       method: "GET",
       "Content-Type": "application/json",
     })
     console.log('Data: ', data)
    })()
  })
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
    </div>
  );
};

export default HomePage;
