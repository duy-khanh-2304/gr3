import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import styles from './detail.module.css'
import { CircularProgress, Grid } from "@mui/material";
import parse from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { addComment, getAllNews, getAllProjects, getAllToolAndResources, getContactInformation, getHomePage, getLatestPost, getLatestProjects, getLayout, getOneNewsBySlug, getOneProjectBySlug, getOneToolAndResourceBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import RelatedToolAndResource from "@/components/relatedToolAndResources/RelatedToolAndResources";
import axiosInstance from "@/axiosConfig";
import CommentEntry from "@/components/commentEntry/CommentEntry";

export default function DetailPage(props: any) {
  const [data, setData] = useState<any>()
  const item = data?.toolAndResourceItem
  const [commentList, setCommentList] = useState<Array<any>>(item?.comment ?? [])
  const [statusComment, setStatusComment] = useState<any>()
  const [url, setUrl] = useState<string>("")

  const relatedToolAndResources = item?.related.length > 0 && item.related.map((item: any) => {
    return {
      post_image: item.post_image,
      title: item.title,
      slug: item.slug
    }
  })
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
  
  const handlePostComment = async (commentData: any) => {
    setStatusComment(null)
    const now = new Date()
    try{
      await addComment(
        'tool-and-resources',
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
      const toolAndResourceItem = await getOneToolAndResourceBySlug(slug as string ?? "")
      setData({
        information: information.data,
        
        toolAndResourceItem: toolAndResourceItem.data,
      })
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
                            <a href={item.attributes.url} className={styles.title_link}>
                              <h1 style={{ fontSize: "1.7rem" }}>{item.title}</h1>
                            </a>
                          ) : <h1 style={{ fontSize: "1.7rem" }}>{item.title}</h1>
                        }
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item lg={9} sm={8} style={{ padding: "0 15px" }}>
                      <div className={styles.entry_content}>
                        {
                          item?.content.length > 0 && item.content.map((component: any, index: number) => {
                            if(component.__component === "content.paragraph"){
                              return (
                                <div key={index}>
                                  {parse(component.content, optionParse)}
                                </div>
                              )
                            }else if(component.__component === "content.intro-team"){
                              return(
                                <div key={index}>
                                  {parse(component.content, optionParse)}
                                </div>
                              )
                            }else if(component.__component === "content.pre-formatted-paragraph"){
                              return(
                                <div key={index}>
                                  <pre className={styles.preformatted}>
                                    {parse(component.content, optionParse)}
                                  </pre>
                                </div>
                              )
                            }
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
                    <Grid item lg={3} sm={4} style={{ padding: "0 15px" }}>
                      <RelatedToolAndResource relatedList={relatedToolAndResources}/>
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