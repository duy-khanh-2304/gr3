import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import styles from './detail.module.css'
import { CircularProgress, Grid } from "@mui/material";
import parse from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { addComment, getAllNews, getAllProjects, getContactInformation, getHomePage, getLatestPost, getLatestProjects, getLayout, getOneNewsBySlug, getOneProjectBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import LatestProject from "@/components/latestProjects/LatestProject";
import CommentEntry from "@/components/commentEntry/CommentEntry";
import Content from "@/components/content/Content";

export default function DetailPage(props: any) {
  const [data, setData] = useState<any>()

  const item = data?.projectItem
  const [commentList, setCommentList] = useState<Array<any>>([])
  const [statusComment, setStatusComment] = useState<any>()
  const [url, setUrl] = useState<string>("")

  const information = item?.content.find((_: any) => _.__component === "content.information")
  const imageHeader = information?.image_header
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
    setStatusComment(null)
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
      setStatusComment(true)
      setTimeout(() => {
        setStatusComment(null)
      }, 3000)
    }catch(error){
      setStatusComment(false)
      setTimeout(() => {
        setStatusComment(null)
      }, 3000)
    }
  }

  const router = useRouter()

  useEffect(() => {
    ;(async() => {
      const information = await getContactInformation()
      const {slug} = router.query
      const projectItem = await getOneProjectBySlug(slug as string ?? "")
      const latestProjects = await getLatestProjects(10)
      setData({
        information: information.data,
        projectItem: projectItem.data,
        latestProjects: latestProjects.data
      })
      setCommentList(projectItem.data.comment)
    })()
    document.body.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    const currentUrl = window.location.href
    setUrl(currentUrl)
  }, [])


  if(!data || router.isFallback){
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress color='success'/>
      </div>
    )
  }
  return (
    <Suspense fallback={<p>Loading information...</p>}>
      <div>
        <Head>
          <title>{item.title}</title>
        </Head>
        <Layout 
        information={data.information}>
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
                      {
                        item?.content.length > 0 && <Content content={item.content} style={{marginBottom: '20px'}}/>
                      }
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
                        {item.showCommentBox && <CommentBox onPostComment={handlePostComment} statusComment={statusComment}/>}
                      </div>
                    </Grid>
                    <Grid item lg={3} sm={4} style={{ padding: "0 15px" }}>
                      <LatestProject latestProjects={data.latestProjects}/>
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

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}