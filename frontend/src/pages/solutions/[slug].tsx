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
import { addComment, getAllNews, getAllSolutions, getHomePage, getLatestPost, getOneNewsBySlug, getOneSolutionBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import { ArrowLeftOutlined, ArrowRightOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import CommentEntry from "@/components/commentEntry/CommentEntry";

export default function DetailPage(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const item = props.solutionItem

  const [commentList, setCommentList] = useState<Array<any>>(item.comment)
  const [isError, setIsError] = useState<boolean>(false)
  const [url, setUrl] = useState<string>("")


  const imageUrls = item.content
    .find((component: any) => component.__component === "content.light-box")?.images
    .map((image: any) => {
      return image.url
    })

  const openLightbox = (index: any) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(imageUrls.length - 1)
      return
    };
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const goToNext = () => {
    if (currentImageIndex === imageUrls.length - 1) {
      setCurrentImageIndex(0)
      return
    };
    setCurrentImageIndex(currentImageIndex + 1);
  };
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
    const now = new Date()
    try{
      await addComment(
        'solutions',
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
                <Grid item  lg={12} style={{ padding: "0 15px" }}>
                  <div className={styles.entry_header}>
                  {
                    item.url ? (
                      <a href={item.url} className={styles.title_link}>
                        <h1 style={{ fontSize: "1.7rem" }}>{item.title}</h1>
                      </a>
                    ) : <h1 style={{ fontSize: "1.7rem" }}>{item.title}</h1>
                  }
                  </div>
                  <div className={styles.entry_content}>
                    {
                      item.content.map((component: any, index: number) => {
                        if(component.__component === "content.paragraph"){
                          return (
                            <div key={index}>
                              {parse(component.content, optionParse)}
                            </div>
                          )
                        }else if(component.__component === "content.button"){
                          return(
                            <div key={index}>
                              <a href={component.url} className={styles.button}>{component.text}</a>
                            </div>
                          )
                        }else if(component.__component === "content.light-box"){
                          return (
                            <div key={index}>
                              {isOpen && (
                                <div className={styles.lightbox_overlay}>
                                  <div className={styles.lightbox_exitButton} onClick={closeLightbox}>
                                    <FullscreenExitOutlined />
                                  </div>
                                  <div className={styles.lightbox_container}>
                                    <button className={styles.lightbox_btn_left} onClick={goToPrevious}>
                                      <ArrowLeftOutlined />
                                    </button>
                                    <img
                                      className={styles.lightbox_image}
                                      src={imageUrls[currentImageIndex]}
                                      alt="Lightbox Image"
                                    />
                                    <button className={styles.lightbox_btn_right} onClick={goToNext}>
                                      <ArrowRightOutlined />
                                    </button>
                                  </div>
                                </div>
                              )}

                              <div className={styles.image_gallery}>
                                {imageUrls.map((imageUrl: any, index: number) => (
                                  <img
                                    key={index}
                                    className={styles.gallery_image}
                                    src={imageUrl}
                                    alt={`Gallery Image ${index}`}
                                    onClick={() => openLightbox(index)}
                                  />
                                ))}
                              </div>
                            </div>
                          )
                        }
                      })
                    }
                  </div>
                  <Grid container>
                    <Grid item sm={8} lg={9}>
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
                  </Grid>
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
  const solutionList = await getAllSolutions()
  const paths = solutionList.map((_: any) => {
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
  const solutionItem = await getOneSolutionBySlug(params.slug)  
  const commentBox = (await axiosInstance.get("/api/comment-box?populate=deep")).data
  return {
    props: {
      layout: response.data,
      solutionItem: solutionItem.data,
      commentBox: commentBox.data,
    },
    revalidate: 20
  }
}