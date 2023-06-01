import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";

export default function DetailPage(props: any){
  const router = useRouter()
  const item = props.newsList.find((_: any) => _.attributes.slug === router.query.slug)
  console.log("Item: ", item)
  return (
    <div>
      <Head>
        <title>{item.attributes.title}</title>
      </Head>
      <Layout data={props.layout}>
        <div className={styles.main}>
            <div className={styles.container}>
              <Grid container>
                <Grid item sm={6} lg={9} style={{padding: "0 15px"}}>
                  <div className={styles.entry_header}>
                    <div style={{display: "flex", marginBottom: "10px"}}>
                      {
                        item.attributes.tag.map((tag: any, index: number) => {
                          return <div className={styles.entry_header_tag} key={index}>
                            {tag.toUpperCase()}
                          </div>
                        })
                      }
                    </div>
                    <h1 style={{fontSize: "1.7rem"}}>
                      {item.attributes.title}
                    </h1>
                  </div>
                  <div className={styles.entry_content}>
                    {parse(item.attributes.content)}
                  </div>
                  <div>
                      <CommunicationLinks/>
                  </div>
                </Grid>
                <Grid item sm={6} lg={3} style={{padding: "0 15px"}}>
                  <PostSidebar recentPostList={props.newsList}/>
                </Grid>
              </Grid>
            </div>
          </div>
      </Layout>
  </div>
  )
}

export async function getStaticPaths(){
  const newsList = (await axiosInstance.get("/api/newses?populate=deep")).data
  const paths = newsList.data.map((_: any) => {
    return ({
      params: {
        slug: _.attributes.slug
      }
    })
  })
  return {
    paths: paths,
    fallback: true
  }
}

export async function getStaticProps() {
  const response = (await axiosInstance.get("/api/home-page?populate=deep")).data
  const newsList = (await axiosInstance.get("/api/newses?populate=deep")).data
  return {
    props: {
      layout: response.data.attributes,
      newsList: newsList.data
    },
    revalidate: 10
  }
}