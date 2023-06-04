import axiosInstance from "@/axiosConfig";
import { Tooltip } from "antd";
import React, { useState } from "react";
import styles from './communicationLinks.module.css'
import {TiSocialFacebook} from '@react-icons/all-files/ti/TiSocialFacebook'
import {AiOutlineTwitter} from '@react-icons/all-files/ai/AiOutlineTwitter'
import {BsEnvelope} from '@react-icons/all-files/bs/BsEnvelope'
import {FaPinterest} from '@react-icons/all-files/fa/FaPinterest'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'

export default function CommunicationLinks (props: any){
  return(
    <div className={styles.container}>
      <Tooltip placement="top" title="Share on Facebook">
        <a href="/" className={styles.item}>
          <TiSocialFacebook/>
        </a>
      </Tooltip>
      <Tooltip placement="top" title="Share on Facebook">
        <a href="/" className={styles.item}>
          <AiOutlineTwitter/>
        </a>
      </Tooltip>
      <Tooltip placement="top" title="Share on Facebook">
        <a href="/" className={styles.item}>
          <BsEnvelope />
        </a>
      </Tooltip>
      <Tooltip placement="top" title="Share on Facebook">
        <a href="/" className={styles.item}>
          <FaPinterest/>
        </a>
      </Tooltip>
      <Tooltip placement="top" title="Share on Facebook">
        <a href="/" className={styles.item}>
          <FaLinkedin/>
        </a>
      </Tooltip>
    </div>
  )
}