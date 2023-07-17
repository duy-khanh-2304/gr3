import axiosInstance from '@/axiosConfig'
import React, { useEffect, useState } from 'react'
import styles from './commentBox.module.css'
import parse from'html-react-parser'
import { CircularProgress, Grid } from '@mui/material'

export default function CommentBox(props: any){
  const data = props.data
  const [commentData, setCommentData] = useState({
    name: null,
    email: null,
    website: null,
    comment: null
  })
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = async (event: any) => {
    const {name, value} = event.target
    setCommentData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setIsLoading(true)
    await props.onPostComment(commentData)
    setCommentData({
      name: null,
      email: null,
      website: null,
      comment: null
    });
    (document.getElementById("form_comment") as any).reset()
    setIsLoading(false)
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {parse(data.text)}
      </div>
      <form 
        id="form_comment"
        onSubmit={handleSubmit}
      >
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
          {
            props.isError ?? <div style={{color: '#b20400', marginBottom: "10px"}}>
              Post comment is fail. Can you check and post again
            </div>
          }
          {
            props.isSuccess ?? <div style={{color: '#7a9c59', marginBottom: "10px"}}>
              Post comment is success
            </div>
          }
        <button 
          type='submit'
          className={styles.button_post_comment}
        >
          {isLoading ? <CircularProgress style={{color: "#ffffff", fontWeight: "700"}} size={20}/> : 'POST COMMENT'}
        </button>
        </form>
    </div>
  )
}