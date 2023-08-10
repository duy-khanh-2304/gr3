import React, { useEffect, useState } from "react";
import styles from './footer.module.css'
import parse, { domToReact } from 'html-react-parser'
import Link from "next/link";
import Grid from '@mui/material/Grid'
import { formattedPhoneNumber } from "@/utils";
export default function Footer(props: any) {
  const{
    name,
    copy_right,
    logo,
    email,
    phone_number,
    address
  } = props.information

  const optionsFooter = {
    replace: ({attribs, children}: any) => {
      return (
        <div style={{fontWeight: 350}}>
          {domToReact(children)}
        </div>
      )
    }
  }

  return (
    <div className={styles.footer}>
      <div className={styles.footerSection}>
        {
          logo && (
            <div className={styles.logo_footerSection}>
              <Link href={"/"}>
                <img 
                  src={logo.url} 
                  alt={logo.name}
                  width="230p"
                  height="auto"
                />
              </Link>
            </div>
          )
        }
        <div className={styles.list_footerSection}>
          <div className={styles.list_container}>
            <Grid container>
              <Grid item xs={4}>
                <div className={styles.item_container}>
                  <h3 className={styles.item_title}>News and Events</h3>
                  <div className={styles.list_link}>
                    <a href="/news" className={styles.link}>
                      News
                    </a>
                    <a href="/events" className={styles.link}>
                      Events
                    </a>
                    <a href="/seminars" className={styles.link}>
                      Seminars
                    </a>
                    <a href="/ai-tech-blogs" className={styles.link}>
                      AI Tech Blogs
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={styles.item_container}>
                  <h3 className={styles.item_title}>R & D</h3>
                  <div className={styles.list_link}>
                    <a href="/our-team" className={styles.link}>
                      Research Teams
                    </a>
                    <a href="/researches" className={styles.link}>
                      Projects/Publications
                    </a>
                    <a href="/courses" className={styles.link}>
                      Training Courses
                    </a>
                    <a href="/solutions" className={styles.link}>
                      Solutions
                    </a>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={styles.item_container}>
                  <h3 className={styles.item_title}>Information</h3>
                  <div className={styles.item_infor}>
                    <b>Email: </b> {email.value}
                  </div>
                  <div className={styles.item_infor}>
                    <b>Tel: </b> {formattedPhoneNumber(phone_number.value)}
                  </div>
                  <div className={styles.item_infor}>
                    <b>Address: </b> {address.value}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <div className={styles.absoluteFooter}>
        <div className={styles.absoluteFooter_container}>
          <span>Copy Right {new Date().getFullYear()} © <b>{copy_right}</b></span>
          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}
