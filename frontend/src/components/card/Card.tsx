import parse from 'html-react-parser'
import React from 'react'
import styles from './card.module.css'

export default function Card(props: any){
  const item = props.item
  
  return (
    <div>
      <div 
        className={`${styles.item} ${styles.card}`}
        onClick={props.onClick}
      >
        <div className={styles.content}>
          <img 
            src={item.post_image.url} 
            alt={item.post_image.name}
            className={styles.post_image} 
          />
          <div className={styles.text}>
            <div className={styles.title}>
              <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.title}</h5>
            </div>
            <div>
              <div className={styles.sub_title} style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.post_subtitle ? parse(item.post_subtitle) : '...'}</div>
            </div>
          </div>
          {
            item.publishAt && (
              <div className={styles.post_time}>
                <div className={styles.date_day}>{(new Date(item.publishAt)).getDate()}</div>
                <div className={styles.date_month}>{(new Date(item.publishAt)).toLocaleString('default', { month: 'short' })}</div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}