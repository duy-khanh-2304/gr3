import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from './eventList.module.css'
import { Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import {getHomePage, getLatestPost, getPaginatedEvents, getPaginatedSortedEvents } from '@/clientApi'
import { useRouter } from 'next/router'

export default function PageNews(props: any) {
  const router = useRouter()
  useEffect(() => {
    if(Number(router.query.pageNumber) === 1){
      router.push("/events")
    }
  }, [])

  if(router.isFallback){
    return (
      <div>Loading information...</div>
    )
  }
  const eventList = props.eventList.data
  const numberPage = props.eventList.meta.pagination.pageCount
  const layout = props.layout.data.attributes

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    window.location.href = `http://localhost:3000/events/page/${value}`
  }

  const handleClick = (item: any) => {
    window.location.href = `http://localhost:3000/events/${item.attributes.slug}`
  }
  return (
    <div>
      <Head>
        <title>Events Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item sm={8} lg={9} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    eventList && eventList.map((item: any, index: number) => {
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
                    <Pagination count={numberPage} variant='outlined' size='large' onChange={handleChangePage} page={props.currentPage}/>
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

export async function getStaticPaths(){
  const eventList = await getPaginatedEvents()
  let pageCount = eventList.meta.pagination.pageCount
  let paths = []
  while(pageCount > 0){
    paths.push({
      params: {
        pageNumber: pageCount.toString()
      }
    })
    pageCount = pageCount - 1
  }
  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps({params}:any) {
  const pageNumber = Number(params.pageNumber)

  const homePage = await getHomePage() 

  const eventList = await getPaginatedSortedEvents(pageNumber)
  console.log("Event list: ", eventList)
  const latestList = await getLatestPost()
  return {
    props: {
      layout: homePage,
      currentPage: pageNumber,
      eventList: eventList,
      latestList: latestList.data
    },
    revalidate: 20
  }
}
