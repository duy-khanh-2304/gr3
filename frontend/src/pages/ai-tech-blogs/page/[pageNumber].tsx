import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect } from 'react'
import styles from './page.module.css'
import { Grid, Pagination, Stack } from '@mui/material'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import { getHomePage, getLatestPost, getPaginatedAiTechBlogs, getPaginatedSortedAiTechBlogs } from '@/clientApi'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'

export default function AiTechBlogsPage(props: any) {
  const aiTechBlogs = props.aiTechBlogs.data
  const numberPage = props.aiTechBlogs.meta.pagination.pageCount
  const layout = props.layout.data

  const router = useRouter()


  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if(value === 1){
      router.replace(`/ai-tech-blogs`)
    }else{
      router.push(`/ai-tech-blogs/page/${value}`)
    }
  }

  const handleClick = (item: any) => {
    router.push(`/ai-tech-blogs/${item.slug}`)
  }

  if(router.isFallback){
    return (
      <div>Loading information...</div>
    )
  }
  const headTitle = `AI Tech Blogs Archives - Page ${props.currentPage} of ${numberPage} - BKAI - The International Research Center for Artificial Intelligence`
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Layout data={layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item sm={8} lg={9} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    aiTechBlogs && aiTechBlogs.map((item: any, index: number) => {
                      return (
                        <Grid item key={index} sm={6} lg={4}>
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
              <Grid item sm={4} lg={3} style={{padding: "0 15px"}}>
                <PostSidebar recentPostList={props.latestList}/>
              </Grid>
            </Grid>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticPaths(){
  const aiTechBlogs = await getPaginatedAiTechBlogs()
  let pageCount = aiTechBlogs.meta.pagination.pageCount
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

  const aiTechBlogs = await getPaginatedSortedAiTechBlogs(pageNumber)

  const latestList = await getLatestPost()
  return {
    props: {
      layout: homePage,
      currentPage: pageNumber,
      aiTechBlogs: aiTechBlogs,
      latestList: latestList.data
    },
    revalidate: 20
  }
}
