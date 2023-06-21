import axiosInstance from '@/axiosConfig'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import styles from './index.module.css'
import { Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getOurTeamPage, getAllTeams, getPaginatedProjects, getPaginatedToolAndResources, getLatestProjects, getLatestToolAndResources } from '@/clientApi'
import { useRouter } from 'next/router'
import MemberCard from '@/components/memberCard/MemberCard'

export default function OurTeam(props: any) {
  const layout = props.layout.data.attributes

  const router = useRouter()
  const handleClickProject = (item: any) => {
    router.push(`/researches/projects/${item.attributes.slug}`)
  }
  const handleClickToolAndResource = (item: any) => {
    router.push(`/researches/toolAndResources/${item.attributes.slug}`)
  }
  return (
    <div>
      <Head>
        <title>Researches Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={layout}>
      <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.entry_content}>
              <Grid container>
                <Grid item lg={12} style={{ padding: "0 15px" }}>
                  {props.projects.data.length > 0 && (
                    <div className={styles.section}>
                      <h2 className={styles.titleSection}>Recent Projects</h2>
                      <Grid container>
                        {
                          props.projects.data.map((item: any, index: number) => {
                            return (
                              <Grid key={index} lg={3} md={4} sm={6}>
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
                      </Grid>
                    </div>
                  )}
                  {props.toolAndResources.data.length > 0 && (
                    <div className={styles.section}>
                      <h2 className={styles.titleSection}>Tool and Resources</h2>
                      <Grid container>
                        {
                          props.toolAndResources.data.map((item: any, index: number) => {
                            return (
                              <Grid key={index} lg={3} md={4} sm={6}>
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
                  )}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage() 
  const projects = await getLatestProjects()
  const toolAndResources = await getLatestToolAndResources()
  return {
    props: {
      layout: homePage,
      projects: projects,
      toolAndResources: toolAndResources
    },
    revalidate: 20
  }
}