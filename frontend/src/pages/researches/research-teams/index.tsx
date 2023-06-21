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
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getPaginatedProjects, getPaginatedTeams } from '@/clientApi'
import { useRouter } from 'next/router'

export default function ResearchTeams(props: any) {
  const teamList = props.teamList.data
  const numberPage = props.teamList.meta.pagination.pageCount
  const layout = props.layout.data.attributes
  const router = useRouter()

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/researches/research-teams/page/${value}`)
  }

  const handleClick = (item: any) => {
    router.push(`/researches/research-teams/${item.attributes.slug}`)
  }
  return (
    <div>
      <Head>
        <title>Research Teams Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item lg={12} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    teamList && teamList.map((item: any, index: number) => {
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
  const teamList = await getPaginatedTeams()
  return {
    props: {
      layout: homePage,
      teamList: teamList,
    },
    revalidate: 20
  }
}