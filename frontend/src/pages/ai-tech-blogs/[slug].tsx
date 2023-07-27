import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense, useEffect, useState } from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse, { domToReact } from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { addComment, getAllAiTechBlogs, getAllNews, getHomePage, getLatestPost, getOneAiTechBlogBySlug, getOneNewsBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import CommentEntry from "@/components/commentEntry/CommentEntry";

export default function DetailPage(props: any) {
  const item = props.aiTechBlog
  const [commentList, setCommentList] = useState<Array<any>>(item?.comment ?? [])
  const [isError, setIsError] = useState<boolean>(false)
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

  const optionTitle = {
    replace: (domNode: any) => {
      if (domNode.name === 'h3') {
        return (
          <span>
            {domToReact(domNode.children)}
          </span>
        )
      }
    }
  }

  const createId = (str: string) => {
    str = str.toLowerCase().trim();
    const from = 'àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ';
    const to = 'aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd';
    for (let i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    return str.replace(/[^a-z0-9]/g, '_').replace(/-+/g, '_').replace(/^-|-$/g, '');
  };

  const handlePostComment = async (commentData: any) => {
    setIsError(false)
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
                          sections.map((section: any, index: number) => {
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
                        }else if(component.__component === "content.paragraph-with-title"){
                          const indexSection = sections.findIndex((_: any) => _.title === component.title)
                          const idString = `${indexSection + 1}_${createId(component.title)}`
                          const subIdString = sections[indexSection].sub_titles.map((subTitle: any, subIndex: number) => {
                            return `${indexSection + 1}_${subIndex + 1}_${createId(subTitle)}`
                          })
                          return (
                            <div key={index} id={idString}>
                              <div className={styles.titleSection}>{`${indexSection + 1}. `}{component.title}</div>
                              {
                                component.content && <div>{parse(component.content, optionParse)}</div>  
                              }
                              {
                                component.sub_section.length > 0 && component.sub_section.map((section: any, index: number) => {
                                  return (
                                    <div key={index} id={subIdString[index]}>
                                      <div className={styles.subTitleSection}>{`${indexSection + 1}.${index + 1}. `}{section.title}</div>
                                      <div>
                                        {parse(section.content, optionParse)}
                                      </div>
                                    </div>
                                  )
                                })
                              }
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
  const aiTechBlogs = await getAllAiTechBlogs()
  const paths = aiTechBlogs.map((_: any) => {
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
  const aiTechBlog = await getOneAiTechBlogBySlug(params.slug) 
  const commentBox = (await axiosInstance.get("/api/comment-box?populate=deep")).data
  const latestList = await getLatestPost()
  return {
    props: {
      layout: response.data,
      aiTechBlog: aiTechBlog.data,
      commentBox: commentBox.data,
      latestList: latestList.data,
    },
    revalidate: 20
  }
}