import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from './page.module.css'
import { Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getPaginatedProjects } from '@/clientApi'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'

export default function ProjectPage(props: any) {
  const router = useRouter()

  if(router.isFallback){
    return (
      <div>Loading information...</div>
    )
  }
  const projectList = props.projectList.data
  const numberPage = props.projectList.meta.pagination.pageCount
  const layout = props.layout.data

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if(value === 1){
      router.replace(`/researches/projects`)
    }else{
      router.push(`/researches/projects/page/${value}`)
    }
  }

  const handleClick = (item: any) => {
    router.push(`/researches/projects/${item.slug}`)
  }

  const headTitle = `Projects Archives - Page ${props.currentPage} of ${numberPage} - BKAI - The International Research Center for Artificial Intelligence`
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Layout data={layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item lg={12} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    projectList && projectList.map((item: any, index: number) => {
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
            </Grid>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticPaths(){
  const newsList = await getPaginatedProjects()
  let pageCount = newsList.meta.pagination.pageCount
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

  const projectList = await getPaginatedProjects(pageNumber)
  return {
    props: {
      layout: homePage,
      currentPage: pageNumber,
      projectList: projectList,
    },
    revalidate: 20
  }
}
