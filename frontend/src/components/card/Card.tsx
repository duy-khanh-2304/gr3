import parse, { domToReact } from 'html-react-parser'
import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'

export default function Card(props: any){
  const item = props.item
  const option = {
    replace: ({attribs, children}: any) => {
      return (
        <div>
          <span style={{fontSize: "14px !important"}}>
            {domToReact(children)}
          </span>
        </div>
      )
    }
  }
  const sub_title = parse(item.attributes.content, option)
  return (
    <div>
      <div className={`${styles.item} ${styles.card}`}>
        <div className={styles.content}>
          <img 
            src={item.attributes.post_image.data.attributes.url} 
            alt={item.attributes.post_image.data.attributes.name}
            className={styles.post_image} 
          />
          <div className={styles.text}>
            <div className={styles.title}>
              <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.attributes.title}</h5>
            </div>
            <div>
              <div className={styles.sub_title} style={{fontFamily: 'Nunito, sans-serif !important'}}>{sub_title}</div>
            </div>
          </div>
          <div className={styles.post_time}>
            <div className={styles.date_day}>29</div>
            <div className={styles.date_month}>Aug</div>
          </div>
        </div>
      </div>
    </div>
  )
}