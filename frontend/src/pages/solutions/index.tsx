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
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getPaginatedSolutions } from '@/clientApi'
import { useRouter } from 'next/router'

export default function Solutions(props: any) {
  const solutionList = props.solutionList.data
  const numberPage = props.solutionList.meta.pagination.pageCount
  const layout = props.layout.data.attributes
  const router = useRouter()

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/solutions/page/${value}`)
  }

  const handleClick = (item: any) => {
    router.push(`/solutions/${item.attributes.slug}`)
  }
  return (
    <div>
      <Head>
        <title>Solutions Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item lg={12} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    solutionList && solutionList.map((item: any, index: number) => {
                      return (
                        <Grid item key={index} sm={4} lg={3}>
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
            </Grid>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const homePage = await getHomePage() 
  const solutionList = await getPaginatedSolutions()
  return {
    props: {
      layout: homePage,
      solutionList: solutionList,
    },
    revalidate: 20
  }
}
