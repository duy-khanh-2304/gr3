import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import { CircularProgress, Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getPaginatedSolutions, getContactInformation, getLayout } from '@/clientApi'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'

export default function SolutionsPage(props: any) {
  const router = useRouter()

  const [data, setData] = useState<any>()

  useEffect(() => {
    ;(async() => {
      const information = await getContactInformation()
      const layout = await getLayout() 
      const {pageNumber} = router.query 
      const solutionList = await getPaginatedSolutions(Number(pageNumber as string ?? ""))
      setData({
        information: information.data,
        layout: layout.data,
        currentPage: Number(pageNumber),
        solutionList: solutionList,
      })
    })()
  }, [])
  if(router.isFallback){
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress/>
      </div>
    )
  }
  if(!data){
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress/>
      </div>
    )
  }
  const solutionList = data?.solutionList.data
  const numberPage = data?.solutionList.meta.pagination.pageCount

  const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    if(value === 1){
      router.replace(`/solutions`)
    }else{
      window.location.href = `/solutions/page/${value}`
    }
  }

  const handleClick = (item: any) => {
    router.push(`/solutions/${item.slug}`)
  }
  const headTitle = `Solutions Archives - Page ${data.currentPage} of ${numberPage} - BKAI - The International Research Center for Artificial Intelligence`
  return (
    <div>
      <Head>
        <title>{headTitle}</title>
      </Head>
      <Layout
        layout={data.layout}
        information={data.information}
      >
        <div className={styles.main}>
          <div className={styles.container}>
            <Grid container>
              <Grid item lg={12} style={{padding: "0 15px"}}>
                <Grid container style={{margin: "0 -15px"}}>
                  {
                    solutionList && solutionList.map((item: any, index: number) => {
                      return (
                        <Grid item key={index} sm={6} lg={3}>
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
