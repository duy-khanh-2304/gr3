import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Suspense, useState } from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse, { domToReact } from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { addComment, getAllCourses, getAllEvents, getAllNews, getHomePage, getLatestPost, getOneCoursesBySlug, getOneEventBySlug } from "@/clientApi";
import CommentEntry from "@/components/commentEntry/CommentEntry";

export default function DetailPage(props: any) {
  const item = props.courseItem

  console.log("Item: ", item)

  console.log("Course list: ", props.courseList)

  const [commentList, setCommentList] = useState<Array<any>>(item.comment)
  const [isError, setIsError] = useState<boolean>(false)
  
  const optionParse = {
    replace: (domNode: any) => {
      if (domNode.name === 'oembed') {
        return (
          <iframe 
            width="100%" 
            height="438px" 
            src={domNode.attribs.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >{domNode.children}</iframe>
        )
      }
    }
  }

  const handleClick = (item: any) => {
    router.push(`/courses/${item.slug}`)
  }

  const handlePostComment = async (commentData: any) => {
    setIsError(false)
    const now = new Date()
    try{
      await addComment(
        'courses',
        item.slug, 
        {
          ...commentData,
          commentedAt: now,
          isModerated: false
        }
      )
      setCommentList(prev => {
        return [...prev, {
          ...commentData,
          commentedAt: now,
          isModerated: false
        }]
      })
    }catch(error){
      setIsError(true)
    }
  }

  const router = useRouter()
  if(router.isFallback){
    return (
      <div>Loading information...</div>
    )
  }

  return (
    <Suspense fallback={<p>Loading information...</p>}>
      <div>
        <Head>
          <title>{item.title}</title>
        </Head>
        <Layout data={props.layout}>
          <div className={styles.main}>
            <div className={styles.container}>
              <Grid container>
                <Grid item sm={8} lg={9} style={{ padding: "0 15px" }}>
                  <div className={styles.entry_header}>
                    <h1 style={{ fontSize: "1.7rem" }}>
                      {item.title}
                    </h1>
                  </div>
                  <div className={styles.entry_content}>
                    {parse(item.introduction, optionParse)}
                  </div>
                  <div>
                    {item.showCommunicationLink && <CommunicationLinks />}
                  </div>
                  {
                    commentList.length > 0 && commentList.map((item: any, index: number) => {
                      return (
                        <div key={index}>
                          <CommentEntry item={item}/>
                        </div>
                      )
                    })
                  }
                  <div>
                    {item.showCommentBox && <CommentBox data={props.commentBox} onPostComment={handlePostComment} isError={isError}/>}
                  </div>
                </Grid>
                <Grid item sm={4} lg={3} style={{ padding: "0 15px" }}>
                  <div className={styles.all_courses}>
                    <span className={styles.all_courses_title}>ALL COURSES</span>
                    <div className={styles.small_divider}></div>
                    <div className={styles.list}>
                      {
                        props.courseList && props.courseList.map((item: any, index: number) => {
                          return(
                            <div key={index} onClick={() => {handleClick(item)}}>
                              <Grid container className={styles.course_item}>
                                <Grid item lg={3} style={{display: "flex", justifyContent: "center", height: "inherit"}}>
                                  <img 
                                    src={item.post_image.url} 
                                    alt={item.post_image.name} 
                                    className={styles.leftImage}
                                  />
                                </Grid>
                                <Grid item lg={9}>
                                  <div className={styles.right_content}>
                                    {item.title}
                                  </div>
                                </Grid>
                              </Grid>
                            </div>
                            
                          )
                        })
                      }
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Layout>
      </div>
    </Suspense>
  )
}

export async function getStaticPaths() {
  const courseList = await getAllCourses()
  const paths = courseList.map((_: any) => {
    return ({
      params: {
        slug: _.slug
      }
    })
  })
  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: any) {
  const response = await getHomePage()
  const courseItem = await getOneCoursesBySlug(params.slug) 
  const courseList = await getAllCourses()
  const commentBox = (await axiosInstance.get("/api/comment-box?populate=deep")).data
  return {
    props: {
      layout: response.data,
      courseItem: courseItem.data,
      courseList: courseList,
      commentBox: commentBox.data,
    },
    revalidate: 20
  }
}