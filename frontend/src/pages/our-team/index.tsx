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
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getAllDirectors } from '@/clientApi'
import { useRouter } from 'next/router'

export default function OurTeam(props: any) {
  const directorList = props.directorList
  const layout = props.layout.data.attributes

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/news/page/${value}`)
  }

  const router = useRouter()
  const handleClick = (item: any) => {
    router.push(`/news/${item.attributes.slug}`)
  }
  return (
    <div>
      <Head>
        <title>Our Team - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={layout}>
        <div className={styles.main}>
          <div className={styles.directorSection}>
            <div className={styles.container}>
              <h2 className={styles.directorTitle}>Board of Directors</h2>
              <Grid container>
              {
                directorList.map((item: any, index: number) => {
                  return (
                    <Grid item lg={3} key={index}>
                      <div 
                        className={`${styles.item} ${styles.card}`}
                      >
                        <div className={styles.content}>
                          <a href={item.attributes.pi_link ? item.attributes.pi_link : '#'}>
                            <img 
                              src={item.attributes.avatar.data.attributes.url} 
                              alt={item.attributes.avatar.data.attributes.name}
                              className={styles.avatar_image} 
                            />
                          </a>
                          <div className={styles.text}>
                            <div className={styles.name}>
                              <h4>{item.attributes.name}</h4>
                            </div>
                            <div>
                              <div className={styles.position}>{item.attributes.position}</div>
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
          </div>
          <div className={styles.container}>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage() 
  const directorList = await getAllDirectors()
  return {
    props: {
      layout: homePage,
      directorList: directorList,
    },
    revalidate: 20
  }
}
