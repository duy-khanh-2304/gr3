import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { CircularProgress, Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getPaginatedProjects, getPaginatedToolAndResources, getContactInformation, getLayout } from '@/clientApi'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'

export default function ToolAndResourcePage(props: any) {
  const router = useRouter()

  const [data, setData] = useState<any>()

  useEffect(() => {
    ;(async() => {
      const information = await getContactInformation()
      const {pageNumber} = router.query 
      const toolAndResourceList = await getPaginatedToolAndResources(Number(pageNumber as string ?? ""))
      setData({
        information: information.data,
        
        currentPage: Number(pageNumber),
        toolAndResourceList: toolAndResourceList,
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
  const toolAndResourceList = data?.toolAndResourceList.data
  const numberPage = data?.toolAndResourceList.meta.pagination.pageCount

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if(value === 1){
      router.replace(`/researches/tool-and-resources`)
    }else{
      window.location.href = `/researches/tool-and-resources/page/${value}`
    }
  }

  const handleClick = (item: any) => {
    router.push(`/researches/tool-and-resources/${item.slug}`)
  }

  const headTitle = `Tool and Resources Archives - Page ${data.currentPage} of ${numberPage} - BKAI - The International Research Center for Artificial Intelligence`
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Layout 
        information={data.information}>
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item lg={12} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    toolAndResourceList && toolAndResourceList.map((item: any, index: number) => {
                      return (
                        <Grid item key={index} sm={6} md={4} lg={3}>
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
