import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { CircularProgress, Grid, Pagination, Stack } from '@mui/material'
import Card from '@/components/card/Card'
import { getContactInformation, getHomePage, getLayout, getPaginatedCourses } from '@/clientApi'
import { useRouter } from 'next/router'

export default function Events(props: any) {
  const [data, setData] = useState<any>()

  const courseList = data?.courseList.data
  const numberPage = data?.courseList.meta.pagination.pageCount
  useEffect(() => {
    ;(async () => {
      const information = await getContactInformation()
      const layout = await getLayout() 
      const courseList = await getPaginatedCourses()
      setData({
        information: information.data,
        layout: layout.data,
        courseList: courseList,
      })
    })()
  }, [])
  const router = useRouter()

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/courses/page/${value}`)
  }

  const handleClick = (item: any) => {
    router.push(`/courses/${item.slug}`)
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
        <title>Courses Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout layout={data.layout}
        information={data.information}
      >
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

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
