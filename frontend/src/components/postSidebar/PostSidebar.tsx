import { TextField } from "@mui/material";
import React from "react";
import styles from './postSidebar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostSidebar(props: any){
  const recentPostList = props.recentPostList

  const handleClick = (tag: string, slug: string) => {
    window.location.href = `/${tag}/${slug}`
  }
  return(
    <div>
      <div className={styles.container}>
        <div className={styles.search_container}>
          <input type="text" name="search" id="search" placeholder="Search" className={styles.input_search}/>
          <div className={styles.search_icon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className={styles.recent_post}>
          <span className={styles.recent_post_title}>RECENT POSTS</span>
          <div className={styles.small_divider}></div>
          <div className={styles.recent_post_list}>
            {
              recentPostList && recentPostList.map((item: any, index: number) => {
                let tag = item.tag[0]
                return(
                  <div className={styles.recent_post_item} key={index}>
                    <div className={styles.post_time}>
                      <div className={styles.date_day}>{(new Date(item.publishAt)).getDate()}</div>
                      <div className={styles.date_month}>{(new Date(item.publishAt)).toLocaleString('default', { month: 'short' })}</div>
                    </div>
                    <div className={styles.right_content}>
                      <div className={styles.title} onClick={() => {handleClick(item.tag, item.slug)}}>
                        {item.title}
                      </div>
                      <div style={{marginTop: "10px", fontSize: "12px", color: "#666666D9"}}>
                        Comments {item.showCommentBox ? 'on' : 'off'}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div style={{margin: "30px 0 15px"}}>
          <h3>Related Posts</h3>
          <span style={{paddingLeft: "15px"}}>No related posts.</span>
        </div>
        <div style={{margin: "30px 0 15px"}}>
          <h3>Common tags</h3>
        </div>
      </div>
    </div>
  )
}