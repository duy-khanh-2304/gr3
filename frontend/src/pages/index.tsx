import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styles from './index.module.css'
import parse from "html-react-parser"
import {FaYoutube} from "@react-icons/all-files/fa/FaYoutube"
import {IoMdClose}from "@react-icons/all-files/io/IoMdClose"
import Section from "@/components/section/Section";
import { getAllPartners, getAllProjects, getAllTeams, getLatestPost, getLatestProjects, getPaginatedSolutions, getPaginatedSortedAiTechBlogs, getPaginatedToolAndResources } from "@/clientApi";

export default function Home(props: any) {
  const [isShowOverlay, setIsShowOverlay] = useState(false)

  const banner = props.data.body.find((component: any) => component.__component === "page.banner")
  const background = JSON.parse(banner.background)
  const src = (parse(background.rawData.html) as any).props.src

  const sections = props.data.body.filter((component: any) => component.__component === "page.section")
  
  const openOverlay = () => {
    setIsShowOverlay(true)
  }
  const closeOverlay = () => {
    setIsShowOverlay(false)
  }

  useEffect(() => {
    const banner = document.getElementById('banner-video')
    banner?.click()
  }, [])
  return(
    <div>
      <Head>
        <title>Home Page - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={props.data}>
        <div className={styles.banner}>
          <iframe 
            id='banner-video'
            width="100%" 
            height="1080px" 
            src={`${src}&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&showinfo=0&fs=0&loop=1&el=0&enablejsapi=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            data-gtm-yt-inspected-4="true"
            data-audio="0"
            style={{border: 'none', outline: 'none', objectFit: 'cover', marginTop:'-100px', marginBottom: "-80px"}}
          ></iframe>
          <div className={styles.overlay}></div>
          <div className={styles.container}>
            <div className={styles.description}>
              {parse(banner.description)}
            </div>
            <div 
              className={styles.buttonBanner}
              onClick={openOverlay}
            >
              WATCH VIDEO <FaYoutube style={{marginLeft: '10px', fontSize: "16px"}}/>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {
            sections.map((section: any, index: number) => {
              return <Section data={section} key={index} sectionsData={props.sectionsData}/>
            })
          }
        </div>
      </Layout>
      <div 
        onClick={closeOverlay}
        className={`${styles.full_overlay} ${!isShowOverlay ? `${styles.hidden_overlay}` : ''}`}
      >
        <div className={styles.iframe_video}>
          <div className={styles.buttonExit} onClick={closeOverlay}>
            <IoMdClose/>
          </div>
          <iframe 
            src={src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            data-gtm-yt-inspected-4="true"
            data-audio="0"
            className={styles.video}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = (await axiosInstance.get("/api/home-page?populate=deep")).data
  const sections = response.data.body.filter((component: any) => component.__component === "page.section")
  const sectionsData = {
    'News and Events': [],
    'AI Tech Blogs': [],
    'Solutions': [],
    'Research Teams': [],
    'Projects': [],
    'Tool and Resources': [],
    'Partners': []
  }

  if(sections.find((_: any) => _.entity === "News and Events")){
    const fetchData = (await getLatestPost(8)).data as []
    sectionsData['News and Events'].push(...fetchData)
  }

  if(sections.find((_: any) => _.entity === "AI Tech Blogs")){
    const fetchData = (await getPaginatedSortedAiTechBlogs()).data as []
    sectionsData['AI Tech Blogs'].push(...fetchData)
  }

  if(sections.find((_: any) => _.entity === "Solutions")){
    const fetchData = (await getPaginatedSolutions()).data as []
    sectionsData['Solutions'].push(...fetchData)
  }

  if(sections.find((_: any) => _.entity === "Projects")){
    const fetchData = (await getLatestProjects(8)).data as []
    sectionsData['Projects'].push(...fetchData)
  }

  if(sections.find((_: any) => _.entity === "Research Teams")){
    const fetchData = (await getAllTeams()) as []
    sectionsData['Research Teams'].push(...fetchData)
  }

  if(sections.find((_: any) => _.entity === "Tool and Resources")){
    const fetchData = (await getPaginatedToolAndResources()).data as []
    sectionsData['Tool and Resources'].push(...fetchData)
  }

  if(sections.find((_: any) => _.entity === "Partners")){
    const fetchData = (await getAllPartners()).data as []
    sectionsData['Partners'].push(...fetchData)
  }
  return {
    props: {
      sectionsData: sectionsData,
      data: response.data
    },
    revalidate: 10
  }
}