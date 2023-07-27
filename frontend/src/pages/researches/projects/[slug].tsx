import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import parse from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { addComment, getAllNews, getAllProjects, getHomePage, getLatestPost, getLatestProjects, getOneNewsBySlug, getOneProjectBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import LatestProject from "@/components/latestProjects/LatestProject";
import CommentEntry from "@/components/commentEntry/CommentEntry";

export default function DetailPage(props: any) {
  const item = props.projectItem

  const [commentList, setCommentList] = useState<Array<any>>(item?.comment ?? [])
  const [isError, setIsError] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("")

  const information = item?.content.find((_: any) => _.__component === "content.information")
  const imageHeader = item?.content.find((_: any) => _.__component === "content.image-header").image
  const paragraph = item?.content.find((_: any) => _.__component === "content.paragraph")
  const optionParse = {
    replace: (domNode: any) => {
      if (domNode.name === 'oembed') {
        return (
          <iframe 
            width="100%" 
            height="438px" 
            src={domNode.attribs.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )
      }
    }
  }

  const formatDate = (dateString: string) => {
    const [month, day, year] = dateString.split('-');
  
    const formattedDate = `${month}/${year}`;
  
    return formattedDate;
  };
  
  const handlePostComment = async (commentData: any) => {
    setIsError(false)
    const now = new Date()
    try{
      await addComment(
        'projects',
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

  useEffect(() => {
    const currentUrl = window.location.href
    setUrl(currentUrl)
  }, [])

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
              <div className={styles.entry_content}>
                <Grid container>
                  <Grid container style={{ padding: "0 15px" }}>
                    <Grid item lg={9} sm={8}>
                      <div className={styles.entry_header}>
                        {
                          item.url ? (
                            <a href={item.url} className={styles.title_link}>
                              <h1 style={{ fontSize: "1.7rem" }}>{item.title}</h1>
                            </a>
                          ) : <h1 style={{ fontSize: "1.7rem" }}>{item.title}</h1>
                        }
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item lg={9} sm={8} style={{ padding: "0 15px" }}>
                      <Grid container>
                        <Grid item lg={4}>
                          <div className={styles.entry_information}>
                            <h2>Information</h2>
                            <ul>
                              <li><span className={styles.heading}>PI:</span>{" "}{information.persional_information}</li>
                              <li><span className={styles.heading}>Time:</span>{" "}{formatDate(information.start_time)} - {formatDate(information.start_time)}</li>
                              {
                                information.code && <li><span className={styles.heading}>Code:</span>{" "}{information.code}</li>
                              }
                              <li><span className={styles.heading}>Funding:</span>{" "}{information.funding}</li>
                              <li><span className={styles.heading}>Main areas:</span>{" "}{information.main_areas}</li>
                            </ul>
                          </div>
                        </Grid>
                        <Grid item lg={8}>
                          <div className={styles.entry_image_header}>
                            <img 
                              src={imageHeader.url} 
                              alt={imageHeader.name}
                              style={{width: "100%", height: "inherit"}}
                            />
                          </div>
                        </Grid>
                        <div style={{marginTop: "40px"}}>
                          {parse(paragraph.content, optionParse)}
                        </div>
                      </Grid>
                      {
                        item.url && <div className={styles.button}>
                          <a href={item.url}>MORE DETAIL</a>
                        </div>
                      }
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
                        {item.showCommentBox && <CommentBox data={props.commentBox} onPostComment={handlePostComment} isError={isError}/>}
                      </div>
                    </Grid>
                    <Grid item lg={3} sm={4} style={{ padding: "0 15px" }}>
                      <LatestProject latestProjects={props.latestProjects}/>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </Suspense>
  )
}

export async function getStaticPaths() {
  const projectList = await getAllProjects()
  const paths = projectList.map((_: any) => {
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
  const projectItem = await getOneProjectBySlug(params.slug) 
  const commentBox = (await axiosInstance.get("/api/comment-box?populate=deep")).data
  const latestProjects = await getLatestProjects(10)
  return {
    props: {
      layout: response.data,
      projectItem: projectItem.data,
      commentBox: commentBox.data,
      latestProjects: latestProjects.data
    },
    revalidate: 20
  }
}