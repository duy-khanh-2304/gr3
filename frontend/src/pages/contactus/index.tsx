import axiosInstance from '@/axiosConfig'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useMemo, useRef } from 'react'
import styles from './contactus.module.css'
import { NextPage } from 'next'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'

export default function ContactUs(props: any){
  const {
    contact_info,
    location_google_map,
  } = props.contactUs

  const {
    input,
    image,
    button
  } = props.contactUs.form

  const handleSubmit = () => {

  }

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout data={props.layout}>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.contact_info_list}>
              {
                contact_info.map((item: any, index: number) => {
                  return (
                    <div key={index} className={styles.contact_info}>
                      <img 
                        src={item.image.data.attributes.url} 
                        alt={item.image.data.attributes.name} 
                        width="80px"
                        height="auto"
                      />
                      <h2 className={styles.info_text}>{item.text}</h2>
                    </div>
                  )
                })
              }
            </div>
            <div className={styles.map}>
              <Map/>
            </div>
            <div className={styles.map}>

            </div>
            <div className={styles.form}>
              <div className={styles.img}>
                <img 
                  src={image.data.attributes.url} 
                  alt={image.data.attributes.name} 
                  width="100%"
                  height="auto"
                />
              </div>
              <div className={styles.form_input}>
                <form onSubmit={handleSubmit}>
                  {
                    input.map((item: any, index: number) => {
                      return(
                        <div key={index} className={styles.form_item}>
                          <label htmlFor={item.name}>
                            <h3>{item.label}</h3>
                          </label>
                          {
                            item.type === "textarea" &&
                            <textarea 
                              className={styles.textarea}
                              id={item.name} 
                              name={item.name} 
                              placeholder={item.placeholder ? item.placeholder : ''}
                            ></textarea>
                          }
                          {
                            item.type !== "textarea" && 
                            <input 
                              className={styles.input}
                              name={item.name} 
                              id={item.name} 
                              placeholder={item.placeholder ? item.placeholder : ''}
                            />
                          }
                        </div>
                      )
                    })
                  }
                   <div onClick={handleSubmit} className={styles.button}>
                      {button}
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

function Map(props: any){
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(
    () => ({ lat: 21.004940, lng: 105.845816 }),
    []
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <GoogleMap
        options={mapOptions}
        zoom={15}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100%', height: '400px'}}
        onLoad={() => console.log('Map Component Loaded...')}
      >
        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap>
    </div>
  )
}

export async function getStaticProps() {
  const layoutResponse = (await axiosInstance.get("/api/home-page?populate=deep")).data
  const contactUsResponse = (await axiosInstance.get("/api/contact-us-page?populate=deep")).data
  return {
    props: {
      layout: layoutResponse.data.attributes,
      contactUs: contactUsResponse.data.attributes
    },
    revalidate: 10
  }
}