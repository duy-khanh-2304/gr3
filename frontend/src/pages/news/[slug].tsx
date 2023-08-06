import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { addComment, getAllNews, getHomePage, getLatestPost, getOneNewsBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import CommentEntry from "@/components/commentEntry/CommentEntry";

export default function DetailPage(props: any) {
  const item = props.newsItem
  const [commentList, setCommentList] = useState<Array<any>>(item?.comment ?? [])
  const [isError, setIsError] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
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
    setIsError(false)
    setIsSuccess(false)
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
      setIsSuccess(true)
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
          <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        </Head>
        <Layout data={props.layout.data}>
          <div className={styles.main}>
            <div className={styles.container}>
              <Grid container>
                <Grid item sm={8} lg={9} style={{ padding: "0 15px" }}>
                  <div className={styles.entry_header}>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      {
                        item.tag.map((tag: any, index: number) => {
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
                    {item.showCommunicationLink && <CommunicationLinks url={url} />}
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
                  <PostSidebar recentPostList={props.latestList} />
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
  const newsList = await getAllNews()
  const paths = newsList.map((_: any) => {
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
  const homePage = await getHomePage()
  const newsItem = await getOneNewsBySlug(params.slug)
  const commentBox = (await axiosInstance.get("/api/comment-box?populate=deep")).data
  const latestList = await getLatestPost()
  return {
    props: {
      layout: homePage,
      newsItem: newsItem.data,
      commentBox: commentBox.data,
      latestList: latestList.data
    },
    revalidate: 20
  }
}