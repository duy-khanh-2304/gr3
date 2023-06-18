import React from 'react'
import styles from './memberCard.module.css'
export default function MemberCard(){
  return (
    <div 
      className={`${styles.item} ${styles.card}`}
    >
      <div className={styles.content}>
        <a href={item.attributes.pi_link ? item.attributes.pi_link : '#'}>
          <img 
            src={item.attributes.avatar.data.attributes.url} 
            alt={item.attributes.avatar.data.attributes.name}
            className={styles.avatar_image} 
          />
        </a>
        <div className={styles.text}>
          <div className={styles.name}>
            <h4>{item.attributes.name}</h4>
          </div>
          <div>
            <div className={styles.position}>{item.attributes.position}</div>
          </div>
        </div>
      </div>
    </div>
  )
}