import React, { useEffect, useState } from "react";
import styles from './footer.module.css'
import parse, { domToReact } from 'html-react-parser'
import Link from "next/link";

export default function Footer(props: any) {

  const {absoluteFooter, footerSection} = props

  const logo = footerSection.find((_: any) => _.__component.indexOf('logo-navigation') !== -1)
  const list = footerSection.filter((_: any) => _.__component.indexOf('logo-navigation') === -1)
  const optionsAbsoluteFooter = {
    replace: ({attribs, children}: any) => {
      return (
        <div style={{  color: "#ffffffcc"}}>
          {domToReact(children)}
        </div>
      )
    }
  }

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
              <Link href={logo.url}>
                <img 
                  src={logo.image.data.attributes.url} 
                  alt={logo.image.data.attributes.name}
                  width="230p"
                  height="auto"
                />
              </Link>
            </div>
          )
        }
        <div className={styles.list_footerSection}>
          <div className={styles.list_container}>
            {
              list.map((item: any, index: number) => {
                return (
                  <div className={styles.item_container} key={index}>
                    <h3 className={styles.item_title}>{item.title}</h3>
                    {
                      item.text && <div className={styles.item_text}>{parse(item.text, optionsFooter)}</div>
                    }
                    {
                      item.links && (
                        <div className={styles.list_link}>
                          {item.links.map((link: any, index: number) => {
                            return <Link key={index} href="/news" className={styles.link}>
                                {link.text}
                              </Link>
                          })}
                        </div>
                      )
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className={styles.absoluteFooter}>
        <div className={styles.absoluteFooter_container}>
          {parse(absoluteFooter.primary, optionsAbsoluteFooter)}
          {parse(absoluteFooter.secondary, optionsAbsoluteFooter)}
        </div>
      </div>
    </div>
  )
}
