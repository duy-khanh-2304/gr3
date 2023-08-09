import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { CircularProgress, Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import {getContactInformation, getHomePage, getLayout, getPaginatedCourses, getPaginatedEvents, getPaginatedSortedEvents } from '@/clientApi'
import { useRouter } from 'next/router'

export default function CoursesPage(props: any) {
  const router = useRouter()

  const [data, setData] = useState<any>()

  useEffect(() => {
    ;(async() => {
      const information = await getContactInformation()
      const layout = await getLayout() 
      const {pageNumber} = router.query 
      const courseList = await getPaginatedCourses(Number(pageNumber as string ?? ""))
      setData({
        information: information.data,
        layout: layout.data,
        currentPage: Number(pageNumber),
        courseList: courseList,
      })
    })()
  }, [])

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
  if(!data){
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
  const courseList = data.courseList.data
  const numberPage = data.courseList.meta.pagination.pageCount

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if(value === 1){
      router.replace(`/courses`)
    }else{
      window.location.href = `/courses/page/${value}`
    }
  }

  const handleClick = (item: any) => {
    router.push(`/courses/${item.slug}`)
  }

  const headTitle = `Courses Archives - Page ${data.currentPage} of ${numberPage} - BKAI - The International Research Center for Artificial Intelligence`
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Layout layout={data.layout}
        information={data.information}>
        <div className={styles.main}>
          <div className={styles.container}>
              <Grid container style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    courseList && courseList.map((item: any, index: number) => {
                      return (
                        <Grid item key={index} sm={6} md={4} lg={3}>
                          <Card item={item} onClickItem={handleClick}/>
                        </Grid>
                      )
                    })
                  }
                </Grid>
                {numberPage > 1 && <div className={styles.pagination}>
                  <Stack spacing={2}>
                    <Pagination count={numberPage} variant='outlined' size='large' onChange={handleChangePage} page={data.currentPage}/>
                  </Stack>
                </div>}
              </Grid>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {}
  }
}
