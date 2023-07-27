import React from 'react'
import styles from './commentEntry.module.css'

export default function CommentEntry(props: any){
  const formatTime = (commentedAt: any) => {
    const time = new Date(commentedAt)
    const date = time.getDate().toString().padStart(2, '0')
    const month = (time.getMonth() + 1).toString().padStart(2, '0')
    const year = time.getFullYear().toString().padStart(2, '0')
    const hour = time.getHours().toString().padStart(2, '0')
    const min = time.getMinutes().toString().padStart(2, '0')
    return `${date}/${month}/${year} ${hour}:${min}`
  }

  return (
    <div className={styles.container}>
      <div style={{display: "flex", justifyContent: "space-between", marginBottom: "8px"}}>
        <div>
          <span style={{fontWeight: "bold"}}>{props.item.name}</span>
          {props.item.email && <span style={{color: "#555555"}}>{"("}{props.item.email}{")"}</span>}
        </div>
        {
          !props.item.isModerated && (
            <div style={{fontStyle: "italic"}}>Your comment is awaiting moderation</div>
          )
        }
      </div>
      <div style={{marginBottom: "15px"}}>
        <cite>
          {
            `"${props.item.comment}"`
          } 
        </cite>
      </div>
      <div>
        <span style={{fontSize: "12px", color: "#1E73BE"}}>{formatTime(props.item.commentedAt)}</span>
      </div>
    </div>
  )
}