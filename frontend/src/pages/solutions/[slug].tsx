import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense, useState } from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { getAllNews, getAllSolutions, getHomePage, getLatestPost, getOneNewsBySlug, getOneSolutionBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import { ArrowLeftOutlined, ArrowRightOutlined, FullscreenExitOutlined } from "@ant-design/icons";

export default function DetailPage(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const item = props.solutionItem
  const imageUrls = item.attributes.content
    .find((component: any) => component.__component === "content.light-box")?.images.data
    .map((image: any) => {
      return image.attributes.url
    })

  const openLightbox = (index: any) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    if (currentImageIndex === 0) return;
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const goToNext = () => {
    if (currentImageIndex === imageUrls.length - 1) return;
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
          <title>{item.attributes.title}</title>
        </Head>
        <Layout data={props.layout}>
          <div className={styles.main}>
            <div className={styles.container}>
              <Grid container>
                <Grid item  lg={12} style={{ padding: "0 15px" }}>
                  <div className={styles.entry_header}>
                    <h1 style={{ fontSize: "1.7rem" }}>
                      {item.attributes.title}
                    </h1>
                  </div>
                  <div className={styles.entry_content}>
                    {
                      item.attributes.content.map((component: any, index: number) => {
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
        slug: _.attributes.slug
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
  return {
    props: {
      layout: response.data.attributes,
      solutionItem: solutionItem.data[0],
    },
    revalidate: 20
  }
}