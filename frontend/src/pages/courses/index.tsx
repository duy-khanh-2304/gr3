import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import styles from './index.module.css'
import { Grid, Pagination, Stack } from '@mui/material'
import Card from '@/components/card/Card'
import { getHomePage, getPaginatedCourses } from '@/clientApi'
import { useRouter } from 'next/router'

export default function Events(props: any) {
  const courseList = props.courseList.data
  const numberPage = props.courseList.meta.pagination.pageCount
  const layout = props.layout.data

  const router = useRouter()

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/courses/page/${value}`)
  }

  const handleClick = (item: any) => {
    router.push(`/courses/${item.slug}`)
  }
  return (
    <div>
      <Head>
        <title>Courses Archives - BKAI - The International Research Center for Artificial Intelligence</title>
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
                  <Pagination count={numberPage} size='large' variant='outlined' onChange={handleChangePage} page={1}/>
                </Stack>
              </div>}
            </Grid>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage() 
  const courseList = await getPaginatedCourses()
  return {
    props: {
      layout: homePage,
      courseList: courseList,
    },
    revalidate: 20
  }
}
