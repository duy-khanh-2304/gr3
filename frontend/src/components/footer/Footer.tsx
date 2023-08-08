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
              {
                props.footerNavigation.map((item: any, index: number) => {
                  return (
                    <Grid item xs={4} key={index}>
                      <div className={styles.item_container}>
                        <h3 className={styles.item_title}>{item.title}</h3>
                        {
                          item.links && (
                            <div className={styles.list_link}>
                              {item.links.map((link: any, index: number) => {
                                return <Link key={index} href={link.url} className={styles.link}>
                                    {link.text}
                                  </Link>
                              })}
                            </div>
                          )
                        }
                      </div>
                    </Grid>
                  )
                })
              }
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
