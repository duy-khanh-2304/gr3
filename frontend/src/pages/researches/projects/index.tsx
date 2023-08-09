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
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getPaginatedProjects, getContactInformation, getLayout } from '@/clientApi'
import { useRouter } from 'next/router'

export default function Projects(props: any) {
  const [data, setData] = useState<any>()
  const projectList = data?.projectList.data
  const numberPage = data?.projectList.meta.pagination.pageCount

  useEffect(() => {
    ;(async () => {
      const information = await getContactInformation()
      const layout = await getLayout()  
      const projectList = await getPaginatedProjects()
      setData({
        information: information.data,
        layout: layout.data,
        projectList: projectList,
      })
    })()
  }, [])
  const router = useRouter()

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/researches/projects/page/${value}`)
  }

  const handleClick = (item: any) => {
    router.push(`/researches/projects/${item.slug}`)
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
        <title>Projects Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout layout={data.layout}
        information={data.information}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item lg={12} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    projectList && projectList.map((item: any, index: number) => {
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
                    <Pagination count={numberPage} variant='outlined' size='large' onChange={handleChangePage} page={1}/>
                  </Stack>
                </div>}
              </Grid>
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
