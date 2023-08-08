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
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getPaginatedSolutions, getContactInformation, getLayout } from '@/clientApi'
import { useRouter } from 'next/router'

export default function Solutions(props: any) {
  const solutionList = props.solutionList.data
  const numberPage = props.solutionList.meta.pagination.pageCount
  const layout = props.layout.data
  const router = useRouter()

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/solutions/page/${value}`)
  }

  const handleClick = (item: any) => {
    router.push(`/solutions/${item.slug}`)
  }
  return (
    <div>
      <Head>
        <title>Solutions Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout
        layout={props.layout}
        information={props.information}
      >
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item lg={12} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    solutionList && solutionList.map((item: any, index: number) => {
                      return (
                        <Grid item key={index} sm={4} lg={3}>
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

export async function getStaticProps() {
  const information = await getContactInformation()
  const layout = await getLayout() 
  const solutionList = await getPaginatedSolutions()
  return {
    props: {
      information: information.data,
      layout: layout.data,
      solutionList: solutionList,
    },
    revalidate: 1,
  }
}

export const revalidate = 0
