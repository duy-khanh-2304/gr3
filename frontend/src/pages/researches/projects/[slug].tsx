import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense } from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { getAllNews, getAllProjects, getHomePage, getLatestPost, getLatestProjects, getOneNewsBySlug, getOneProjectBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import LatestProject from "@/components/latestProjects/LatestProject";

export default function DetailPage(props: any) {
  const item = props.projectItem
  const information = item.content.find((_: any) => _.__component === "content.information")
  const imageHeader = item.content.find((_: any) => _.__component === "content.image-header").image
  const paragraph = item.content.find((_: any) => _.__component === "content.paragraph")
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
  const latestProjects = await getLatestProjects(10)
  return {
    props: {
      layout: response.data,
      projectItem: projectItem.data,
      latestProjects: latestProjects.data
    },
    revalidate: 20
  }
}