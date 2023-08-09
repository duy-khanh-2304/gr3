import axiosInstance from '@/axiosConfig'
import React, { useEffect, useState } from 'react'
import styles from './commentBox.module.css'
import parse from'html-react-parser'
import { CircularProgress, Grid } from '@mui/material'

export default function CommentBox(props: any){
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
        <h3>Create a comment</h3>
        <p>Please leave a few comments below this post. Required fields are marked *</p>
      </div>
      <form 
        id="form_comment"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2}>
          <Grid item md={12}>
            <div className={`${styles.item} ${styles.textarea}`}>
              <label htmlFor="comment"><h4>Comment<span style={{color: 'red'}}>*</span></h4></label>
              <textarea 
                name="comment"
                id="comment"
                style={{height: "80px"}}
                className={styles.text_container}
                onChange={handleChange}
                required={true}
                placeholder='Write some comments here ...'
              ></textarea>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={`${styles.item} ${styles.input}`}>
              <label htmlFor="name"><h4>Name<span style={{color: 'red'}}>*</span></h4></label>
              <input 
                name="name"
                id="name"
                type="text"
                className={styles.input_container}
                onChange={handleChange}
                required={true}
                placeholder='Enter your name'
              ></input>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={`${styles.item} ${styles.input}`}>
              <label htmlFor="email"><h4>Email</h4></label>
              <input 
                name="email"
                id="email"
                type="text"
                className={styles.input_container}
                onChange={handleChange}
                required={false}
                placeholder='Enter your email'
              ></input>
            </div>
          </Grid>
          <Grid item md={4}>
            <div className={`${styles.item} ${styles.input}`}>
              <label htmlFor="website"><h4>Website</h4></label>
              <input 
                name="website"
                id="website"
                type="text"
                className={styles.input_container}
                onChange={handleChange}
                required={false}
                placeholder='Enter your website'
              ></input>
            </div>
          </Grid>
        </Grid>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <button 
            type='submit'
            className={styles.button_post_comment}
          >
            {isLoading ? <CircularProgress style={{color: "#ffffff", fontWeight: "700"}} size={20}/> : 'Comment'}
          </button>
          {
            props.statusComment === false && <div style={{color: '#b20400', marginLeft: "20px"}}>
              Post comment is fail. Can you check and post again ?
            </div>
          }
          {
            props.statusComment && <div style={{color: '#7a9c59', marginLeft: "20px"}}>
              Post comment is success.
            </div>
          }
        </div>
        </form>
    </div>
  )
}