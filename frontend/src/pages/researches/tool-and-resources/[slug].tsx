import Layout from "@/components/Layout";
import Head from "next/head";
import React, { Suspense } from "react";
import styles from './detail.module.css'
import { Grid } from "@mui/material";
import parse from 'html-react-parser'
import CommunicationLinks from "@/components/communicationLinks/CommunicationLinks";
import CommentBox from "@/components/commentBox/CommentBox";
import Link from 'next/link'
import { getAllNews, getAllProjects, getAllToolAndResources, getHomePage, getLatestPost, getLatestProjects, getOneNewsBySlug, getOneProjectBySlug, getOneToolAndResourceBySlug } from "@/clientApi";
import { useRouter } from "next/router";
import RelatedToolAndResource from "@/components/relatedToolAndResources/RelatedToolAndResources";

export default function DetailPage(props: any) {
  const item = props.toolAndResourceItem
  const relatedToolAndResources = item.attributes.related.data.map((item: any) => {
    return {
      post_image: item.attributes.post_image,
      title: item.attributes.title
    }
  })
  const optionParse = {
    replace: (domNode: any) => {
      if (domNode.name === 'oembed') {
        return (
          <iframe 
            width="100%" 
            height="438px" 
            src={domNode.attribs.url}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        )
      }
    }
  }
  
  const router = useRouter()
  if(router.isFallback){
    return (
      <div>Loading information...</div>
    )
  }
  return (
    <Suspense fallback={<p>Loading information...</p>}>
      <div>
        <Head>
          <title>{item.attributes.title}</title>
        </Head>
        <Layout data={props.layout}>
          <div className={styles.main}>
            <div className={styles.container}>
              <div className={styles.entry_content}>
                <Grid container>
                  <Grid container style={{ padding: "0 15px" }}>
                    <Grid item lg={9} sm={8}>
                      <div className={styles.entry_header}>
                        {
                          item.attributes.url ? (
                            <a href={item.attributes.url} className={styles.title_link}>
                              <h1 style={{ fontSize: "1.7rem" }}>{item.attributes.title}</h1>
                            </a>
                          ) : <h1 style={{ fontSize: "1.7rem" }}>{item.attributes.title}</h1>
                        }
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item lg={9} sm={8} style={{ padding: "0 15px" }}>
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
                    </Grid>
                    <Grid item lg={3} sm={4} style={{ padding: "0 15px" }}>
                      <RelatedToolAndResource relatedList={relatedToolAndResources}/>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </Suspense>
  )
}

export async function getStaticPaths() {
  const toolAndResourceList = await getAllToolAndResources()
  const paths = toolAndResourceList.map((_: any) => {
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
  const toolAndResourceItem = await getOneToolAndResourceBySlug(params.slug) 
  return {
    props: {
      layout: response.data.attributes,
      toolAndResourceItem: toolAndResourceItem.data[0],
    },
    revalidate: 20
  }
}