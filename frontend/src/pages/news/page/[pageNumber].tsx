import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { CircularProgress, Grid, Pagination, Stack } from '@mui/material'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getContactInformation, getLayout } from '@/clientApi'
import { useRouter } from 'next/router'

export default function NewsPage(props: any) {
  const router = useRouter()

  const [data, setData] = useState<any>()

  useEffect(() => {
    ;(async() => {
      const information = await getContactInformation()
      const {pageNumber} = router.query 
      const newsList = await getPaginatedSortedNews(Number(pageNumber as string ?? ""))
      const latestList = await getLatestPost()
      setData({
        information: information.data,
        
        currentPage: Number(pageNumber),
        newsList: newsList,
        latestList: latestList.data
      })
    })()
  }, [])

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
  const newsList = data.newsList.data
  const numberPage = data.newsList.meta.pagination.pageCount

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if(value === 1){
      router.replace(`/news`)
    }else{
      window.location.href = `/news/page/${value}`
    }
  }

  const handleClick = (item: any) => {
    router.push(`/news/${item.slug}`)
  }
  const headTitle = `News Archives - Page ${data.currentPage} of ${numberPage} - BKAI - The International Research Center for Artificial Intelligence`
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
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
                    newsList && newsList.map((item: any, index: number) => {
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
                    <Pagination count={numberPage} variant='outlined' size='large' onChange={handleChangePage} page={data.currentPage}/>
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
    props: {}
  }
}
