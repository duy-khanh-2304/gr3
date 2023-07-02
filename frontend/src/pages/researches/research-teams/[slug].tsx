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
import { getAllNews, getAllProjects, getAllTeams, getHomePage, getLatestPost, getLatestProjects, getOneNewsBySlug, getOneProjectBySlug, getOneTeamBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import LatestProject from "@/components/latestProjects/LatestProject";
import MemberCard from "@/components/memberCard/MemberCard";

export default function DetailPage(props: any) {
  const item = props.teamItem
  const allTeams = props.allTeams
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
  
  const handleClickTeam = (item: any) => {
    router.push(`/researches/research-teams/${item.slug}`)
  }

  const handleClickProject = (item: any) => {
    router.push(`/researches/projects/${item.slug}`)
  }

  const handleClickToolAndResource = (item: any) => {
    router.push(`/researches/tool-and-resources/${item.slug}`)
  }

  const handleClickSolution = (item: any) => {
    router.push(`/researches/solutions/${item.slug}`)
  }

  const router = useRouter()
  if(router.isFallback){
    return (
      <div>Loading information...</div>
    )
  }
  return (
    <div>
      <Head>
        <title>{item.title}</title>
      </Head>
      <Layout data={props.layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.entry_content}>
              <Grid container>
                <Grid item lg={9} sm={8} style={{ padding: "0 15px" }}>
                  {
                    item.Introduction && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Introduction</h2>
                        {parse(item.Introduction)}
                      </div>
                    )
                  }
                  {
                    item.ResearchDirections && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Research Directions</h2>
                        {parse(item.ResearchDirections)}
                      </div>
                    )
                  }
                  {
                    item.ResearchProblems && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Research Problems</h2>
                        {parse(item.ResearchProblems)}
                      </div>
                    )
                  }
                  {
                    item.Collaborations && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Collaborations</h2>
                        {parse(item.Collaborations)}
                      </div>
                    )
                  }
                  {
                    item.Members.length > 0 && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Members</h2>
                        <Grid container>
                          {
                            item.Members.map((item: any, index: number) => {
                              return (
                                <Grid item key={index} lg={4} md={6} sm={12}>
                                  <MemberCard member={item}/>
                                </Grid>
                              )
                            })
                          }
                        </Grid>
                      </div>
                    )
                  }
                  {
                    (item.Projects.length > 0 || item.Solutions.length > 0) && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Projects and Solutions</h2>
                        <Grid container>
                          {
                            item.Projects.map((item: any, index: number) => {
                              return (
                                <Grid item key={index} lg={6} sm={12}>
                                  <div 
                                    className={`${styles.item} ${styles.card}`}
                                    onClick={() => {handleClickProject(item)}}
                                  >
                                    <div className={styles.content}>
                                      <img 
                                        src={item.post_image.url} 
                                        alt={item.post_image.name}
                                        className={styles.post_image} 
                                      />
                                      <div className={styles.text}>
                                        <div className={styles.title}>
                                          <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.title}</h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              )
                            })
                          }
                          {
                            item.Solutions.map((item: any, index: number) => {
                              return (
                                <Grid item key={index} lg={6} sm={12}>
                                  <div 
                                    className={`${styles.item} ${styles.card}`}
                                    onClick={() => {handleClickSolution(item)}}
                                  >
                                    <div className={styles.content}>
                                      <img 
                                        src={item.post_image.url} 
                                        alt={item.post_image.name}
                                        className={styles.post_image} 
                                      />
                                      <div className={styles.text}>
                                        <div className={styles.title}>
                                          <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.title}</h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              )
                            })
                          }
                        </Grid>
                      </div>
                    )
                  }
                  {
                    item.ToolAndResources.length > 0 && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Tool And Resources</h2>
                        <Grid container>
                          {
                            item.ToolAndResources.map((item: any, index: number) => {
                              return (
                                <Grid item key={index} lg={6} sm={12}>
                                  <div 
                                    className={`${styles.item} ${styles.card}`}
                                    onClick={() => {handleClickToolAndResource(item)}}
                                  >
                                    <div className={styles.content}>
                                      <img 
                                        src={item.post_image.url} 
                                        alt={item.post_image.name}
                                        className={styles.post_image} 
                                      />
                                      <div className={styles.text}>
                                        <div className={styles.title}>
                                          <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.title}</h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              )
                            })
                          }
                        </Grid>
                      </div>
                    )
                  }
                </Grid>
                <Grid item lg={3} sm={4} style={{ padding: "0 15px" }}>
                  <div className={styles.container}>
                    <div className={styles.latest_projects}>
                      <span className={styles.latest_projects_title}>RESEARCH TEAM</span>
                      <div className={styles.small_divider}></div>
                      <div className={styles.latest_projects_list}>
                        {
                          allTeams && allTeams.map((item: any, index: number) => {
                            return(
                              <div key={index} onClick={() => {handleClickTeam(item)}}>
                                <Grid container
                                  className={styles.latest_projects_item}
                                >
                                  <Grid item lg={3} style={{display: "flex", justifyContent: "center"}}>
                                    <img 
                                      src={item.post_image.url} 
                                      alt={item.post_image.name} 
                                      className={styles.image_item}
                                    />
                                  </Grid>
                                  <Grid item lg={9}>
                                    <div className={styles.right_content}>
                                      <span>{item.title}</span>
                                    </div>
                                  </Grid>
                                </Grid>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticPaths() {
  const teamList = await getAllTeams()
  const paths = teamList.map((_: any) => {
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
  const teamItem = await getOneTeamBySlug(params.slug) 
  const allTeams = await getAllTeams()
  return {
    props: {
      layout: response.data,
      teamItem: teamItem.data,
      allTeams: allTeams
    },
    revalidate: 20
  }
}