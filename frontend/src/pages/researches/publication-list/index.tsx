import { getAllPublications, getContactInformation, getHomePage, getLayout } from '@/clientApi'
import Layout from '@/components/Layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from './index.module.css'

export default function  PublicationList(props: any){
  const [data, setData] = useState<any>()

  const publicationList = data?.publicationList
  useEffect(() => {
    ;(async () => {
      const information = await getContactInformation()
      const publicationList = await getAllPublications()
      setData({
        information: information.data,
        publicationList: publicationList,
      })
    })()
  }, [])
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Publication List Archives - BKAI - The International Research Center for Artificial Intelligence</title>
      </Head>
      <Layout 
        information={data.information}>
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

export async function getServerSideProps(context: any) {
  return {
    props: {}
  }
}