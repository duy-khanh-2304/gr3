import axiosInstance from '@/axiosConfig'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import styles from './contactus.module.css'

export default function ContactUs(props: any){
  const data = props.data
  console.log("Data: ", data)

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout data={props.layout}>
        <div className={styles.main}>
          <div className={styles.container}>

          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const response = (await axiosInstance.get("/api/home-page?populate=deep")).data
  return {
    props: {
      layout: response.data.attributes
    },
    revalidate: 10
  }
}