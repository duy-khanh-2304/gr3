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
import {getContactInformation, getHomePage, getLatestPost, getLayout, getPaginatedSortedSeminars } from '@/clientApi'
import { useRouter } from 'next/router'

export default function Seminars(props: any) {
  const [data, setData] = useState<any>()
  const seminarList = data?.seminarList.data
  const numberPage = data?.seminarList.meta.pagination.pageCount

  useEffect(() => {
    ;(async () => {
      const information = await getContactInformation()
      const seminarList = await getPaginatedSortedSeminars()
      const latestList = await getLatestPost()
      setData({
        information: information.data,
        
        seminarList: seminarList,
        latestList: latestList.data
      })
    })()
  }, [])
  const router = useRouter()

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/seminars/page/${value}`)
  }

  const handleClick = (item: any) => {
    router.push(`/seminars/${item.slug}`)
  }

  if(!data || router.isFallback){
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
        <title>Seminars Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout 
        
        information={data.information}
      >
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item sm={8} lg={9} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    seminarList && seminarList.map((item: any, index: number) => {
                      return (
                        <Grid item key={index} sm={6} lg={4}>
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
              <Grid item sm={4} lg={3} style={{padding: "0 15px"}}>
                <PostSidebar recentPostList={data.latestList}/>
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
