import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from './page.module.css'
import { Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getPaginatedProjects, getPaginatedToolAndResources } from '@/clientApi'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'

export default function ToolAndResourcePage(props: any) {
  const router = useRouter()

  if(router.isFallback){
    return (
      <div>Loading information...</div>
    )
  }
  const toolAndResourceList = props.toolAndResourceList.data
  const numberPage = props.toolAndResourceList.meta.pagination.pageCount
  const layout = props.layout.data.attributes

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if(value === 1){
      router.replace(`/researches/tool-and-resources`)
    }else{
      router.push(`/researches/tool-and-resources/page/${value}`)
    }
  }

  const handleClick = (item: any) => {
    router.push(`/researches/tool-and-resources/${item.attributes.slug}`)
  }

  const headTitle = `Tool and Resources Archives - Page ${props.currentPage} of ${numberPage} - BKAI - The International Research Center for Artificial Intelligence`
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
                    toolAndResourceList && toolAndResourceList.map((item: any, index: number) => {
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
  const toolAndResourceList = await getPaginatedToolAndResources()
  let pageCount = toolAndResourceList.meta.pagination.pageCount
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

  const toolAndResourceList = await getPaginatedToolAndResources(pageNumber)
  return {
    props: {
      layout: homePage,
      currentPage: pageNumber,
      toolAndResourceList: toolAndResourceList,
    },
    revalidate: 20
  }
}