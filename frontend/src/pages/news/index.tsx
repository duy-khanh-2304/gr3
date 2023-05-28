import axiosInstance from '@/axiosConfig'
import Layout from '@/components/Layout'
import axios from 'axios'
import Head from 'next/head'
import React from 'react'

export default function News(props: any) {
  return (
    <div>
      <Head>
        <title>News Page</title>
      </Head>
      <Layout data={props.data}>
        <div>
          News Page
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const response = (await axiosInstance.get("/api/home-page?populate=deep")).data
  return {
    props: {
      data: response.data.attributes
    },
    revalidate: 10
  }
}
