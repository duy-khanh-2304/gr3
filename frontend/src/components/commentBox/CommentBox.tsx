import axiosInstance from '@/axiosConfig'
import React, { useState } from 'react'
import styles from './commentBox.module.css'
import parse from'html-react-parser'
import { Grid } from '@mui/material'
import { addCommentNewsAndEvent } from '@/clientApi'

export default function CommentBox(props: any){
  const data = props.data

  const [commentData, setCommentData] = useState({
    name: null,
    email: null,
    website: null,
    comment: null
  })

  const handleChange = async (event: any) => {
    const {name, value} = event.target
    setCommentData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {parse(data.text)}
      </div>
      <form onSubmit={(event) => {
        console.log("Event: ", event)
      }}>
        <Grid container spacing={2}>
          {
            data.inputList.map((item: any, index: number) => {
              if(item.type === "textarea"){
                return (
                  <Grid item md={12} key={index}>
                    <div key={index} className={`${styles.item} ${styles.textarea}`}>
                      <label htmlFor={item.name}><h4>{item.label}{item.required ? ' *' : ''}</h4></label>
                      <textarea 
                        name={item.name} 
                        id={item.name} 
                        style={{height: "80px"}}
                        className={styles.input_container}
                        onChange={handleChange}
                        required={item.required}
                      ></textarea>
                    </div>
                  </Grid>
                )
              }else{
                return (
                  <Grid item md={4} key={index}>
                    <div key={index} className={`${styles.item} ${styles.input}`}>
                      <label htmlFor={item.name}><h4>{item.label}</h4></label>
                      <input 
                        name={item.name} 
                        id={item.name}
                        type={item.type}
                        className={styles.input_container}
                        onChange={handleChange}
                        required={item.required}
                      ></input>
                    </div>
                  </Grid>
                )
              }
            })
          }
        </Grid>
      </form>
      <button 
        type='submit'
        onClick={(event: any) => {
          event.preventDefault()
          props.onPostComment(commentData)
        }}
        className={styles.button_post_comment}
      >POST COMMENT</button>
    </div>
  )
}