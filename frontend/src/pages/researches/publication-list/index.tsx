import { getAllPublications, getContactInformation, getHomePage, getLayout } from '@/clientApi'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './index.module.css'

export default function  PublicationList(props: any){
  const publicationList = props.publicationList
  const layout = props.layout.data
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Publication List Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout layout={props.layout}
        information={props.information}>
        <div className={styles.main}>
          <div className={styles.container}>
            {
              publicationList.map((item: any, index: any) => {
                return (
                  <div key={index} className={styles.publication}>
                    <span>{index + 1}. </span>
                    <span className={styles.title}>{item.title} : </span>
                    <span>{item.cite}</span>
                  </div>
                )
              })
            }
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const information = await getContactInformation()
  const layout = await getLayout()  
  const publicationList = await getAllPublications()
  return {
    props: {
      information: information.data,
      layout: layout.data,
      publicationList: publicationList,
    },
    revalidate: 1,
  }
}

export const revalidate = 0