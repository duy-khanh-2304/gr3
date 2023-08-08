import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress'
import parse from 'html-react-parser'
import {getAllTeams, getContactInformation, getHomePage, getLatestPost, getLatestProjects, getLayout, getOneNewsBySlug, getOneProjectBySlug, getOneTeamBySlug } from "@/clientApi";
import { useRouter } from "next/router";
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
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress/>
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>{item.title}</title>
      </Head>
      <Layout layout={props.layout}
        information={props.information}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.entry_content}>
              <Grid container>
                <Grid item lg={9} sm={8} style={{ padding: "0 15px" }}>
                  {
                    item.introduction && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Introduction</h2>
                        {parse(item.introduction)}
                      </div>
                    )
                  }
                  {
                    item.research_directions && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Research Directions</h2>
                        {parse(item.research_directions)}
                      </div>
                    )
                  }
                  {
                    item.research_problems && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Research Problems</h2>
                        {parse(item.research_problems)}
                      </div>
                    )
                  }
                  {
                    item.collaborations && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Collaborations</h2>
                        {parse(item.collaborations)}
                      </div>
                    )
                  }
                  {
                    item.publications.length > 0 && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Latest Publications</h2>
                        <Grid container>
                          {
                            item.publications.map((item: any, index: number) => {
                              return (
                                <div key={index} className={styles.publication}>
                                  <span>{index + 1}. </span>
                                  <span className={styles.titlePublication}>{item.title} : </span>
                                  <span>{item.cite}</span>
                                </div>
                              )
                            })
                          }
                        </Grid>
                      </div>
                    )
                  }
                  {
                    item.members.length > 0 && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Members</h2>
                        <Grid container>
                          {
                            item.members.map((item: any, index: number) => {
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
                    (item.projects.length > 0 || item.solutions.length > 0) && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Projects and Solutions</h2>
                        <Grid container>
                          {
                            item.projects.map((item: any, index: number) => {
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
                            item.solutions.map((item: any, index: number) => {
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
                    item.tool_and_resources.length > 0 && (
                      <div className={styles.section}>
                        <h2 className={styles.titleSection}>Tool And Resources</h2>
                        <Grid container>
                          {
                            item.tool_and_resources.map((item: any, index: number) => {
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
  const information = await getContactInformation()
  const layout = await getLayout()
  const teamItem = await getOneTeamBySlug(params.slug) 
  const allTeams = await getAllTeams()
  return {
    props: {
      information: information.data,
      layout: layout.data,
      teamItem: teamItem.data,
      allTeams: allTeams
    },
    revalidate: 1,
  }
}

export const revalidate = 0