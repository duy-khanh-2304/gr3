import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from './page.module.css'
import { Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import {getHomePage, getPaginatedCourses, getPaginatedEvents, getPaginatedSortedEvents } from '@/clientApi'
import { useRouter } from 'next/router'

export default function EventsPage(props: any) {
  const router = useRouter()

  if(router.isFallback){
    return (
      <div>Loading information...</div>
    )
  }
  const courseList = props.courseList.data
  const numberPage = props.courseList.meta.pagination.pageCount
  const layout = props.layout.data

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if(value === 1){
      router.replace(`/courses`)
    }else{
      router.push(`/courses/page/${value}`)
    }
  }

  const handleClick = (item: any) => {
    router.push(`/courses/${item.slug}`)
  }

  const headTitle = `Courses Archives - Page ${props.currentPage} of ${numberPage} - BKAI - The International Research Center for Artificial Intelligence`
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Layout data={layout}>
        <div className={styles.main}>
          <div className={styles.container}>
              <Grid container style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    courseList && courseList.map((item: any, index: number) => {
                      return (
                        <Grid item key={index} sm={6} md={4} lg={3}>
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
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticPaths(){
  const courseList = await getPaginatedCourses()
  let pageCount = courseList.meta.pagination.pageCount
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
  const courseList = await getPaginatedCourses(pageNumber)
  return {
    props: {
      layout: homePage,
      currentPage: pageNumber,
      courseList: courseList,
    },
    revalidate: 20
  }
}
