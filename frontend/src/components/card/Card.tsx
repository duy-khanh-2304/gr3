import parse, { domToReact } from 'html-react-parser'
import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Card(props: any){
  const router = useRouter()

  const item = props.item
  const option = {
    replace: (domNode: any) => {
      // if(domNode.name === "oe")
      return (
        <div>
          <span style={{fontSize: "14px !important"}}>
            {domToReact(domNode.children)}
          </span>
        </div>
      )
    }
  }
  const onClick = () => {
    // router.push(`/news/${item.attributes.slug}`)
    window.location.href = `http://localhost:3000/news/${item.attributes.slug}`
  }
  const sub_title = parse(item.attributes.content, option)
  return (
    <div>
      <div 
        className={`${styles.item} ${styles.card}`}
        onClick={onClick}
      >
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
            <div className={styles.date_day}>{(new Date(item.attributes.publishAt)).getDate()}</div>
            <div className={styles.date_month}>{(new Date(item.attributes.publishAt)).toLocaleString('default', { month: 'short' })}</div>
          </div>
        </div>
      </div>
    </div>
  )
}