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
  console.log('Props: ', props)
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
    router.push(`/researches/research-teams/${item.attributes.slug}`)
  }

  const handleClickProject = (item: any) => {
    router.push(`/researches/projects/${item.attributes.slug}`)
  }

  const handleClickToolAndResource = (item: any) => {
    router.push(`/researches/tool-and-resources/${item.attributes.slug}`)
  }

  const handleClickSolution = (item: any) => {
    router.push(`/researches/solutions/${item.attributes.slug}`)
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
        <title>{item.attributes.Name}</title>
      </Head>
      <Layout data={props.layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.entry_content}>
              <Grid container>
                <Grid item lg={9} sm={8} style={{ padding: "0 15px" }}>
                  {
                    item.attributes.Introduction && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Introduction</h2>
                        {parse(item.attributes.Introduction)}
                      </div>
                    )
                  }
                  {
                    item.attributes.ResearchDirections && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Research Directions</h2>
                        {parse(item.attributes.ResearchDirections)}
                      </div>
                    )
                  }
                  {
                    item.attributes.ResearchProblems && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Research Problems</h2>
                        {parse(item.attributes.ResearchProblems)}
                      </div>
                    )
                  }
                  {
                    item.attributes.Collaborations && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Collaborations</h2>
                        {parse(item.attributes.Collaborations)}
                      </div>
                    )
                  }
                  {
                    item.attributes.Members.data.length > 0 && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Members</h2>
                        <Grid container>
                          {
                            item.attributes.Members.data.map((item: any, index: number) => {
                              return (
                                <Grid key={index} lg={4} md={6} sm={12}>
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
                    (item.attributes.Projects.data.length > 0 || item.attributes.Solutions.data.length > 0) && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Projects and Solutions</h2>
                        <Grid container>
                          {
                            item.attributes.Projects.data.map((item: any, index: number) => {
                              return (
                                <Grid key={index} lg={6} sm={12}>
                                  <div 
                                    className={`${styles.item} ${styles.card}`}
                                    onClick={() => {handleClickProject(item)}}
                                  >
                                    <div className={styles.content}>
                                      <img 
                                        src={item.attributes.post_image.data.attributes.url} 
                                        alt={item.attributes.post_image.data.attributes.name}
                                        className={styles.post_image} 
                                      />
                                      <div className={styles.text}>
                                        <div className={styles.title}>
                                          <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.attributes.title}</h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Grid>
                              )
                            })
                          }
                          {
                            item.attributes.Solutions.data.map((item: any, index: number) => {
                              return (
                                <Grid key={index} lg={6} sm={12}>
                                  <div 
                                    className={`${styles.item} ${styles.card}`}
                                    onClick={() => {handleClickSolution(item)}}
                                  >
                                    <div className={styles.content}>
                                      <img 
                                        src={item.attributes.post_image.data.attributes.url} 
                                        alt={item.attributes.post_image.data.attributes.name}
                                        className={styles.post_image} 
                                      />
                                      <div className={styles.text}>
                                        <div className={styles.title}>
                                          <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.attributes.title}</h5>
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
                    item.attributes.ToolAndResources.data.length > 0 && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Tool And Resources</h2>
                        <Grid container>
                          {
                            item.attributes.ToolAndResources.data.map((item: any, index: number) => {
                              return (
                                <Grid key={index} lg={6} sm={12}>
                                  <div 
                                    className={`${styles.item} ${styles.card}`}
                                    onClick={() => {handleClickToolAndResource(item)}}
                                  >
                                    <div className={styles.content}>
                                      <img 
                                        src={item.attributes.post_image.data.attributes.url} 
                                        alt={item.attributes.post_image.data.attributes.name}
                                        className={styles.post_image} 
                                      />
                                      <div className={styles.text}>
                                        <div className={styles.title}>
                                          <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{item.attributes.title}</h5>
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
                              <div onClick={() => {handleClickTeam(item)}}>
                                <Grid container key={index} 
                                  className={styles.latest_projects_item}
                                >
                                  <Grid item lg={3} style={{display: "flex", justifyContent: "center"}}>
                                    <img 
                                      src={item.attributes.post_image.data.attributes.url} 
                                      alt={item.attributes.post_image.data.attributes.name} 
                                      className={styles.image_item}
                                    />
                                  </Grid>
                                  <Grid item lg={9}>
                                    <div className={styles.right_content}>
                                      <span>{item.attributes.Name}</span>
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
  const teamItem = await getOneTeamBySlug(params.slug) 
  const allTeams = await getAllTeams()
  return {
    props: {
      layout: response.data.attributes,
      teamItem: teamItem.data[0],
      allTeams: allTeams
    },
    revalidate: 20
  }
}