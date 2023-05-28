import axiosInstance from "@/axiosConfig";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

export default function Home(props: any) {
  return(
    <div>
      <Head>
        <title>Home Page - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout data={props.data}>
        <div>
          Home page
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