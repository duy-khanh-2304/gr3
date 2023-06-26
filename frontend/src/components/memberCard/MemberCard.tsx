import React from 'react'
import styles from './memberCard.module.css'
export default function MemberCard(props: any){
  const item = props.member
  return (
    <div 
      className={`${styles.item} ${styles.card}`}
    >
      <div className={styles.content}>
        <a href={item.PI_link ? item.PI_link : '#'}>
          <img 
            src={item.avatar.url} 
            alt={item.avatar.name}
            className={styles.avatar_image} 
          />
        </a>
        <div className={styles.text}>
          <div>
            <h4 className={styles.name}>{item.name}</h4>
          </div>
          <div className={styles.position}><span>{item.position}</span></div>
        </div>
      </div>
    </div>
  )
}