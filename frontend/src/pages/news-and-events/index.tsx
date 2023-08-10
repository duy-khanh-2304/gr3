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

export default function NewsAndEvents(props: any) {
  const [data, setData] = useState<any>()
  const postList = data?.postList.data

  useEffect(() => {
    ;(async () => {
      const information = await getContactInformation()
      const postList = await getLatestPost(8)
      setData({
        information: information.data,
        postList: postList
      })
    })()
  }, [])
  const router = useRouter()

  const handleClick = (item: any) => {
    router.push(`/${item.tag[0]}/${item.slug}`)
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
        <title>News and Events - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout 
        
        information={data.information}
      >
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
            {
              postList && postList.map((item: any, index: number) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card item={item} onClickItem={handleClick}/>
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

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
