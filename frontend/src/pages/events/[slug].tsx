import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import PostSidebar from "@/components/postSidebar/PostSidebar";
import parse, { domToReact } from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { getAllEvents, getAllNews, getHomePage, getLatestPost, getOneEventBySlug, getOneNewsBySlug } from "@/clientApi";

export default function DetailPage(props: any) {
  const item = props.newsItem
  const optionParse = {
    replace: (domNode: any) => {
      if (domNode.name === 'oembed') {
        return (
          <iframe 
            width="100%" 
            height="438px" 
            src={domNode.attribs.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >{domNode.children}</iframe>
        )
      }
    }
  };
  return (
    <Suspense fallback={<p>Loading information...</p>}>
      <div>
        <Head>
          <title>{item.attributes.title}</title>
        </Head>
        <Layout data={props.layout}>
          <div className={styles.main}>
            <div className={styles.container}>
              <Grid container>
                <Grid item sm={8} lg={9} style={{ padding: "0 15px" }}>
                  <div className={styles.entry_header}>
                    <div style={{ display: "flex", marginBottom: "10px" }}>
                      {
                        item.attributes.tag.map((tag: any, index: number) => {
                          return <div className={styles.entry_header_tag} key={index}>
                            <Link href={`/${tag}`}>
                              {tag.toUpperCase()}
                            </Link>
                          </div>
                        })
                      }
                    </div>
                    <h1 style={{ fontSize: "1.7rem" }}>
                      {item.attributes.title}
                    </h1>
                  </div>
                  <div className={styles.entry_content}>
                    {
                      item.attributes.content.map((component: any, index: number) => {
                        if(component.__component === "content.paragraph"){
                          return (
                            <div key={index}>
                              {parse(component.content, optionParse)}
                            </div>
                          )
                        }else if(component.__component === "content.intro-team"){
                          return(
                            <div key={index}>
                              {parse(component.content, optionParse)}
                            </div>
                          )
                        }else if(component.__component === "content.pre-formatted-paragraph"){
                          return(
                            <div key={index}>
                              <pre className={styles.preformatted}>
                                {parse(component.content, optionParse)}
                              </pre>
                            </div>
                          )
                        }
                      })
                    }
                  </div>
                  <div>
                    {item.attributes.showCommunicationLink && <CommunicationLinks />}
                  </div>
                  <div>
                    {!item.attributes.showCommentBox && <CommentBox data={props.commentBox} />}
                  </div>
                </Grid>
                <Grid item sm={4} lg={3} style={{ padding: "0 15px" }}>
                  <PostSidebar recentPostList={props.latestList} />
                </Grid>
              </Grid>
            </div>
          </div>
        </Layout>
      </div>
    </Suspense>
  )
}

export async function getStaticPaths() {
  const eventList = await getAllEvents()
  const paths = eventList.map((_: any) => {
    return ({
      params: {
        slug: _.attributes.slug
      }
    })
  })
  return {
    paths: paths,
    fallback: true,
  }
}

export async function getStaticProps({ params }: any) {
  const response = await getHomePage()
  const eventItem = await getOneEventBySlug(params.slug) 
  const commentBox = (await axiosInstance.get("/api/comment-box?populate=deep")).data
  const latestList = await getLatestPost()
  return {
    props: {
      layout: response.data.attributes,
      newsItem: eventItem.data[0],
      commentBox: commentBox.data,
      latestList: latestList.data
    },
    revalidate: 20
  }
}