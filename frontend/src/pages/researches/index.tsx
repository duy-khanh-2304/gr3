import axiosInstance from '@/axiosConfig'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { CircularProgress, Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getOurTeamPage, getAllTeams, getPaginatedProjects, getPaginatedToolAndResources, getLatestProjects, getLatestToolAndResources, getContactInformation, getLayout } from '@/clientApi'
import { useRouter } from 'next/router'
import MemberCard from '@/components/memberCard/MemberCard'

export default function OurTeam(props: any) {
  const [data, setData] = useState<any>()

  useEffect(() => {
    ;(async () => {
      const information = await getContactInformation()
      const layout = await getLayout()
      const projects = await getLatestProjects()
      const toolAndResources = await getLatestToolAndResources()
      setData({
        information: information.data,
        layout: layout.data,
        projects: projects,
        toolAndResources: toolAndResources
      })
    })()
  }, [])

  const router = useRouter()
  const handleClickProject = (item: any) => {
    router.push(`/researches/projects/${item.slug}`)
  }
  const handleClickToolAndResource = (item: any) => {
    router.push(`/researches/toolAndResources/${item.slug}`)
  }

  if(!data){
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
    <div>
      <Head>
        <title>Researches Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout
        layout={data.layout}
        information={data.information}
      >
      <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.entry_content}>
              <Grid container>
                <Grid item lg={12} style={{ padding: "0 15px" }}>
                  {data.projects.data.length > 0 && (
                    <div className={styles.section}>
                      <h2 className={styles.titleSection}>Recent Projects</h2>
                      <Grid container>
                        {
                          data.projects.data.map((item: any, index: number) => {
                            return (
                              <Grid item key={index} lg={3} md={4} sm={6}>
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
                      </Grid>
                    </div>
                  )}
                  {data.toolAndResources.data.length > 0 && (
                    <div className={styles.section}>
                      <h2 className={styles.titleSection}>Tool and Resources</h2>
                      <Grid container>
                        {
                          data.toolAndResources.data.map((item: any, index: number) => {
                            return (
                              <Grid item key={index} lg={3} md={4} sm={6}>
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
export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
