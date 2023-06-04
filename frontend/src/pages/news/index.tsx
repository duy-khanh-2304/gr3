import axiosInstance from '@/axiosConfig'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import styles from './newsList.module.css'
import { Grid } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import sortByPublishedDate from '@/utils/sortByPublishedDate'

export default function News(props: any) {
  const newsList = props.newsList
  return (
    <div>
      <Head>
        <title>News Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={props.layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item sm={8} lg={9} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    newsList && newsList.map((item: any, index: number) => {
                      const sub_title = parse(item.attributes.content)
                      return (
                        <Grid item key={index} sm={6} lg={4}>
                          <Card item={item}/>
                        </Grid>
                      )
                    })
                  }
                </Grid>
              </Grid>
              <Grid item sm={4} lg={3} style={{padding: "0 15px"}}>
                <PostSidebar recentPostList={newsList}/>
              </Grid>
            </Grid>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const layout = (await axiosInstance.get("/api/home-page?populate=deep")).data
  const newsList = (await axiosInstance.get("/api/newses?populate=deep")).data
  const sortedNewsList = sortByPublishedDate(newsList)
  return {
    props: {
      layout: layout.data.attributes,
      newsList: sortedNewsList.data
    },
    revalidate: 10
  }
}
