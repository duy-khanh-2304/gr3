import axiosInstance from "@/axiosConfig";
import React, { useState } from "react";
import styles from './communicationLinks.module.css'
import {TiSocialFacebook} from '@react-icons/all-files/ti/TiSocialFacebook'
import {AiOutlineTwitter} from '@react-icons/all-files/ai/AiOutlineTwitter'
import {BsEnvelope} from '@react-icons/all-files/bs/BsEnvelope'
import {FaPinterest} from '@react-icons/all-files/fa/FaPinterest'
import {FaLinkedin} from '@react-icons/all-files/fa/FaLinkedin'
import Link from "next/link";
import { FacebookIcon, FacebookShareButton, EmailIcon, TwitterIcon, TwitterShareButton, PinterestShareButton, PinterestIcon, LinkedinShareButton, LinkedinIcon } from 'react-share';
import { Tooltip } from "@mui/material";

export default function CommunicationLinks (props: any){
  return(
    <div className={styles.container}>
      <div style={{margin: "3px"}}>
        <Tooltip placement="top" title="Share on Facebook" arrow>
          <FacebookShareButton url={props.url}>
            <FacebookIcon size={30} round={true}/>
          </FacebookShareButton>
        </Tooltip>
      </div>
      <div style={{margin: "3px"}}>
        <Tooltip placement="top" title="Share on Twitter" arrow>
          <TwitterShareButton url={props.url}>
              <TwitterIcon size={30} round={true}/>
          </TwitterShareButton>
        </Tooltip>
      </div>
      <div style={{margin: "3px"}}>
        <Tooltip placement="top" title="Email to another" arrow>
          <a href={`mailto:someone@gmail.com?body=Check it out: ${props.url}`}>
            <EmailIcon size={30} round={true}/>
          </a>
        </Tooltip>
      </div>
      <div style={{margin: "3px"}}>
        <Tooltip placement="top" title="Share on Pinterest" arrow>
          <PinterestShareButton url={props.url} media={""}>
            <PinterestIcon size={30} round={true}/>
          </PinterestShareButton>
        </Tooltip>
      </div>
      <div style={{margin: "3px"}}>
        <Tooltip placement="top" title="Share on Linkedin" arrow>
          <LinkedinShareButton url={props.url}>
            <LinkedinIcon size={30} round={true}/>
          </LinkedinShareButton> 
        </Tooltip>
      </div>
    </div>
  )
}