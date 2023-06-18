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
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost } from '@/clientApi'
import { useRouter } from 'next/router'

export default function News(props: any) {
  const newsList = props.newsList.data
  const numberPage = props.newsList.meta.pagination.pageCount
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
        <title>News Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item sm={8} lg={9} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    newsList && newsList.map((item: any, index: number) => {
                      return (
                        <Grid item key={index} sm={6} lg={4}>
                          <Card item={item} onClick={() => {handleClick(item)}}/>
                        </Grid>
                      )
                    })
                  }
                </Grid>
                {numberPage > 1 && <div className={styles.pagination}>
                  <Stack spacing={2}>
                    <Pagination count={numberPage} variant='outlined' size='large' onChange={handleChangePage} page={1}/>
                  </Stack>
                </div>}
              </Grid>
              <Grid item sm={4} lg={3} style={{padding: "0 15px"}}>
                <PostSidebar recentPostList={props.latestList}/>
              </Grid>
            </Grid>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage() 
  const newsList = await getPaginatedSortedNews()
  const latestList = await getLatestPost()
  return {
    props: {
      layout: homePage,
      newsList: newsList,
      latestList: latestList.data
    },
    revalidate: 20
  }
}
