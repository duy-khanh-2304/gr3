import axiosInstance from '@/axiosConfig'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { CircularProgress, Grid, Pagination, Stack } from '@mui/material'
import Link from 'next/link'
import PostSidebar from '@/components/postSidebar/PostSidebar'
import Card from '@/components/card/Card'
import parse from 'html-react-parser'
import { getPaginatedSortedNews, getHomePage, getPaginatedNews, getLatestPost, getOurTeamPage, getAllTeams, getLayout, getContactInformation } from '@/clientApi'
import { useRouter } from 'next/router'
import MemberCard from '@/components/memberCard/MemberCard'
import TeamCard from '@/components/teamCard/TeamList'

export default function OurTeam(props: any) {
  const [data, setData] = useState<any>()

  const ourTeamPage = data?.ourTeamPage
  const boardOfDirectors = ourTeamPage?.data.boardOfDirectors
  const teams = data?.teams

  useEffect(() => {
    ;(async () => {
      const information = await getContactInformation()
      const ourTeamPage = await getOurTeamPage()
      const teams = await getAllTeams()
      setData({
        information: information.data,
        ourTeamPage: ourTeamPage,
        teams: teams
      })
    })()
  }, [])

  const router = useRouter()

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
  return (
    <div>
      <Head>
        <title>Our Team - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout
        
        information={data.information}
      >
        <div className={styles.main}>
          <div className={styles.directorSection}>
            <div className={styles.container}>
              <h2 className={styles.directorTitle}>Board of Directors</h2>
              <Grid container>
                {
                  boardOfDirectors.map((item: any, index: number) => {
                    return (
                      <Grid item lg={3} key={index}>
                        <MemberCard member={item}/>
                      </Grid>
                    )
                  })
                }
              </Grid>
            </div>
          </div>
        </div>
        <div className={styles.teamSection}>
          <div className={styles.container}>
            <div style={{padding: "0 15px"}}>
              <div className={styles.entry_content}>
                <h2 style={{textAlign: 'center'}}>Research Teams</h2>
                { !!ourTeamPage.data.content && parse(ourTeamPage.data.content)}
              </div>
              <TeamCard teams={teams}/>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
