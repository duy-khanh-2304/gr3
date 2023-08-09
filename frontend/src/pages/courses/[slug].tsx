import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Suspense, useEffect, useState } from "react";
import styles from './detail.module.css'
import { CircularProgress, Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse, { domToReact } from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { addComment, getAllCourses, getAllEvents, getAllNews, getContactInformation, getHomePage, getLatestPost, getLayout, getOneCoursesBySlug, getOneEventBySlug } from "@/clientApi";
import CommentEntry from "@/components/commentEntry/CommentEntry";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DetailPage(props: any) {
  const [data, setData] = useState<any>()
  const item = data?.courseItem

  const [commentList, setCommentList] = useState<Array<any>>(item?.comment ?? [])
  const [statusComment, setStatusComment] = useState<any>()
  const [url, setUrl] = useState<string>("")
  
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
    window.location.href = `/courses/${item.slug}`
  }

  const handlePostComment = async (commentData: any) => {
    setStatusComment(null)
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
      setStatusComment(true)
    }catch(error){
      setStatusComment(false)
    }
  }

  const router = useRouter()

  useEffect(() => {
    ;(async() => {
      const information = await getContactInformation()
      const layout = await getLayout() 
      const {slug} = router.query
      const courseItem = await getOneCoursesBySlug(slug as string ?? "") 
      const courseList = await getAllCourses()
      setData({
        information: information.data,
        layout: layout.data,
        courseItem: courseItem.data,
        courseList: courseList,
      })
    })()
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const currentUrl = window.location.href
    setUrl(currentUrl)
  }, [])

  if(router.isFallback){
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress/>
      </div>
    )
  }
  if(!data){
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress/>
      </div>
    )
  }

  return (
    <Suspense fallback={<p>Loading information...</p>}>
      <div>
        <Head>
          <title>{item.title}</title>
        </Head>
        <Layout layout={data.layout}
        information={data.information}>
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
                    <h3>Slides và video các bài giảng</h3>
                    {
                      item?.lesson.length > 0 && item?.lesson.map((lesson: any, index: number) => {
                        const video = lesson.video ? JSON.parse(lesson.video) : null
                        const src = video ? (parse(video.rawData.html) as any).props.src : null
                        return (
                          <Accordion key={index}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography style={{fontSize: "18px"}}>Bài {index + 1}: {lesson.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              {parse(lesson?.content, optionParse)}
                              {
                                !!lesson.video && (
                                  <iframe 
                                    id={`lesson-video-${index}`}
                                    width="100%" 
                                    height="1080px" 
                                    src={`${src}&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&showinfo=0&fs=0&loop=1&el=0&enablejsapi=1`}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    data-gtm-yt-inspected-4="true"
                                    data-audio="0"
                                    style={{border: 'none', outline: 'none', height: "480px"}}
                                  ></iframe>
                                )
                              }
                            </AccordionDetails>
                          </Accordion>
                        )
                      })
                    }
                  </div>
                  <div>
                    {item.showCommunicationLink && <CommunicationLinks url={url}/>}
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
                    {item.showCommentBox && <CommentBox onPostComment={handlePostComment} statusComment={statusComment}/>}
                  </div>
                </Grid>
                <Grid item sm={4} lg={3} style={{ padding: "0 15px" }}>
                  <div className={styles.all_courses}>
                    <span className={styles.all_courses_title}>ALL COURSES</span>
                    <div className={styles.small_divider}></div>
                    <div className={styles.list}>
                      {
                        data?.courseList.length > 0 && data.courseList.map((item: any, index: number) => {
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

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}