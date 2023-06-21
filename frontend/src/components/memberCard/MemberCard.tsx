import React from 'react'
import styles from './memberCard.module.css'
export default function MemberCard(props: any){
  const item = props.member
  return (
    <div 
      className={`${styles.item} ${styles.card}`}
    >
      <div className={styles.content}>
        <a href={item.attributes.PI_link ? item.attributes.PI_link : '#'}>
          <img 
            src={item.attributes.avatar.data.attributes.url} 
            alt={item.attributes.avatar.data.attributes.name}
            className={styles.avatar_image} 
          />
        </a>
        <div className={styles.text}>
          <div>
            <h4 className={styles.name}>{item.attributes.name}</h4>
          </div>
          <div className={styles.position}><span>{item.attributes.position}</span></div>
        </div>
      </div>
    </div>
  )
}