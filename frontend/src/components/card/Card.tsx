import parse from 'html-react-parser'
import React from 'react'
import styles from './card.module.css'

export default function Card(props: any){
  const item = props.item
  const sub_title = item.attributes.post_subtitle ? parse(item.attributes.post_subtitle) : '...'
  return (
    <div>
      <div 
        className={`${styles.item} ${styles.card}`}
        onClick={props.onClick}
      >
        <div className={styles.content}>
          <img 
            src={item.attributes.post_image.data.attributes.url} 
            alt={item.attributes.post_image.data.attributes.name}
            className={styles.post_image} 
          />
          <div className={styles.text}>
            <div className={styles.title}>
              <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.attributes.title || item.attributes.Name}</h5>
            </div>
            <div>
              <div className={styles.sub_title} style={{fontFamily: 'Nunito, sans-serif !important'}}>{sub_title}</div>
            </div>
          </div>
          {
            item.attributes.publishAt && (
              <div className={styles.post_time}>
                <div className={styles.date_day}>{(new Date(item.attributes.publishAt)).getDate()}</div>
                <div className={styles.date_month}>{(new Date(item.attributes.publishAt)).toLocaleString('default', { month: 'short' })}</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}