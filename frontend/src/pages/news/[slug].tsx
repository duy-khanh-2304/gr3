import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import styles from './detail.module.css'
import { CircularProgress, Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { addComment, getAllNews, getContactInformation, getHomePage, getLatestPost, getLayout, getOneNewsBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import CommentEntry from "@/components/commentEntry/CommentEntry";
import Content from "@/components/content/Content";

export default function DetailPage(props: any) {
  const [data, setData] = useState<any>()
  const item = data?.newsItem
  const [commentList, setCommentList] = useState<Array<any>>([])
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
        'news-and-events',
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
      const newsItem = await getOneNewsBySlug(slug as string ?? "")
      const latestList = await getLatestPost()
      setData({
        information: information.data,
        newsItem: newsItem.data,
        latestList: latestList.data
      })
      setCommentList(newsItem.data.comment)
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
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        </Head>
        <Layout 
          
          information={data.information}
        >
          <div className={styles.main}>
            <div className={styles.container}>
              <Grid container>
                <Grid item sm={8} lg={9} style={{ padding: "0 15px" }}>
                  <div className={styles.entry_header}>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      {
                        item.tag && item.tag.map((tag: any, index: number) => {
                          return <div className={styles.entry_header_tag} key={index}>
                            <Link href={`/${tag}`}>
                              {tag.toUpperCase()}
                            </Link>
                          </div>
                        })
                      }
                    </div>
                    <h1 style={{ fontSize: "1.7rem" }}>
                      {item.title}
                    </h1>
                  </div>
                  <div className={styles.entry_content}>
                    {
                      item?.content.length > 0 && <Content content={item.content}/>
                    }
                  </div>
                  <div>
                    {item.showCommunicationLink && <CommunicationLinks url={url} />}
                  </div>
                  {
                    commentList?.length > 0 && commentList.map((item: any, index: number) => {
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
                  <PostSidebar recentPostList={data.latestList} />
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