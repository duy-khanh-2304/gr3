import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import styles from './index.module.css'
import { Grid, Pagination, Stack } from '@mui/material'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import { getContactInformation, getHomePage, getLatestPost, getLayout, getPaginatedSortedAiTechBlogs } from '@/clientApi'
import { useRouter } from 'next/router'

export default function AiTechBlog(props: any) {
  const aiTechBlogs = props.aiTechBlogs.data
  const numberPage = props.aiTechBlogs.meta.pagination.pageCount
  const layout = props.layout.data

  const router = useRouter()

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    router.push(`/ai-tech-blogs/page/${value}`)
  }

  const handleClick = (item: any) => {
    router.push(`/ai-tech-blogs/${item.slug}`)
  }
  return (
    <div>
      <Head>
        <title>AI Tech Blogs Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout 
        layout={props.layout}
        information={props.information}
      >
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item sm={8} lg={9} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    aiTechBlogs && aiTechBlogs.map((item: any, index: number) => {
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
                <PostSidebar recentPostList={props.latestList}/>
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
  const aiTechBlogs = await getPaginatedSortedAiTechBlogs()
  const latestList = await getLatestPost()
  return {
    props: {
      information: information.data,
      layout: layout.data,
      aiTechBlogs: aiTechBlogs,
      latestList: latestList.data
    },
    revalidate: 1,
  }
}

export const revalidate = 0
