import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import styles from './detail.module.css'
import { CircularProgress, Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse, { domToReact } from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { addComment, getAllAiTechBlogs, getAllNews, getContactInformation, getHomePage, getLatestPost, getLayout, getOneAiTechBlogBySlug, getOneNewsBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import CommentEntry from "@/components/commentEntry/CommentEntry";
import Content from "@/components/content/Content";
import { createId } from "@/utils";

export default function DetailPage(props: any) {
  const [data, setData] = useState<any>()

  const item = data?.aiTechBlog
  const [commentList, setCommentList] = useState<Array<any>>([])
  const [statusComment, setStatusComment] = useState<any>()
  const [url, setUrl] = useState<string>("")

  const sections = item?.content
    .filter((component: any) => component.__component === "content.paragraph-with-title")
    .map((component: any) => {
      if(component.sub_section){
        return {
          title: component.title,
          sub_titles: component.sub_section.map((section: any) => section.title)
        }
      }
      return {
        title: component.title
      }
    })

  const handlePostComment = async (commentData: any) => {
    setStatusComment(null)
    const now = new Date()
    try{
      await addComment(
        'ai-tech-blogs',
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
      const aiTechBlog = await getOneAiTechBlogBySlug(slug as string ?? "")
      const latestList = await getLatestPost()
      setData({
        information: information.data,
        aiTechBlog: aiTechBlog.data,
        latestList: latestList.data,
      })
      setCommentList(aiTechBlog.data.comment)
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
          
          information={data.information}
        >
          <div className={styles.main}>
            <div className={styles.container}>
              <Grid container>
                <Grid item sm={8} lg={9} style={{ padding: "0 15px" }}>
                  <div className={styles.entry_header}>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      <div className={styles.entry_header_tag}>
                        <Link href='/ai-tech-blogs'>
                          AI TECH BLOGS
                        </Link>
                      </div>
                    </div>
                    <h1 style={{ fontSize: "1.7rem" }}>
                      {item.title}
                    </h1>
                    {
                      sections.length > 0 && 
                      <div className={styles.tableOfContent}>
                        <h3>Content</h3>
                        {
                          sections.length > 0 && sections.map((section: any, index: number) => {
                            const url = `#${index + 1}_${createId(section.title)}`
                            const sub_urls = section.sub_titles ?
                              section.sub_titles.map((subTitle: any, subIndex: number) => {
                                return `#${index + 1}_${subIndex + 1}_${createId(subTitle)}`
                              }) : []
                            return(
                              <div key={index}>
                                <a 
                                  href={url} 
                                  onClick={(event) => {
                                    event.preventDefault();
                                    document.getElementById(`${index + 1}_${createId(section.title)}`)?.scrollIntoView({
                                      behavior: "smooth"
                                    });
                                  }}
                                >{`${index + 1}. `}{section.title}</a>
                                <div style={{marginLeft: "20px"}}>
                                  {section.sub_titles && section.sub_titles.map((subTitle: any, subIndex: number) => {
                                    return(
                                      <div key={subIndex}>
                                        <a 
                                          href={sub_urls[subIndex]} 
                                          onClick={(event) => {
                                            event.preventDefault();
                                            document.getElementById(`${index + 1}_${subIndex + 1}_${createId(subTitle)}`)?.scrollIntoView({
                                              behavior: "smooth"
                                            });
                                          }}
                                        >
                                          {`${index + 1}.${subIndex + 1}. `}{subTitle}
                                        </a>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    }
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