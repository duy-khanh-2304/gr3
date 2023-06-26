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
import {getHomePage, getLatestPost, getPaginatedSortedSeminars } from '@/clientApi'
import { useRouter } from 'next/router'

export default function NewsAndEvents(props: any) {
  const postList = props.postList.data
  const layout = props.layout.data
  const router = useRouter()

  const handleClick = (item: any) => {
    router.push(`/${item.tag[0]}/${item.slug}`)
  }
  return (
    <div>
      <Head>
        <title>News and Events - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
            {
              postList && postList.map((item: any, index: number) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card item={item} onClick={() => {handleClick(item)}}/>
                  </Grid>
                )
              })
            }
            </Grid>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage() 
  const postList = await getLatestPost(8)
  return {
    props: {
      layout: homePage,
      postList: postList
    },
    revalidate: 10
  }
}
