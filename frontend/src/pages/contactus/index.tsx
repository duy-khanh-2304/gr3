import axiosInstance from '@/axiosConfig'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './contactus.module.css'
import { NextPage } from 'next'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { getContactInformation, getLayout, sendMessage } from '@/clientApi'
import { formattedPhoneNumber } from '@/utils'
import emailjs, {EmailJSResponseStatus} from 'emailjs-com'

export default function ContactUs(props: any){
  const {
    email,
    phone_number,
    address
  } = props.information
  const {
    contact_info,
    location_google_map,
  } = props.contactUs

  const {
    input,
    image
  } = props.contactUs.form

  const [message, setMessage] = useState({})

  const handleSubmit = async (event: any) => {

    event.preventDefault();
    (document.getElementById("form-contact") as any).reset()
    const templateParams = {
      to_name: 'Recipient Name',
      from_name: 'Your Name',
      to_email: 'khanh.ngo@dssolution.jp',
      from_email: 'ngokhanh357@gmail.com',
      message: 'Hello, Minh duong!',
    };
  
    try {
      const response: EmailJSResponseStatus = await emailjs.send(
        'service_4rkurx5',
        'template_mm12o4v',
        templateParams,
        '5Eu4kYruvoheDxz4e'
      );
  
      console.log('Email sent successfully!', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
    // await sendMessage(JSON.stringify(message))
  }

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout
        layout={props.layout}
        information={props.information}
      >
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.contact_info_list}>
              <div className={styles.contact_info}>
                <img 
                  src={email.image.url} 
                  alt={email.image.name} 
                  width="80px"
                  height="80px"
                />
                <h2 className={styles.info_text}>{email.value}</h2>
              </div>
              <div className={styles.contact_info}>
                <img 
                  src={phone_number.image.url} 
                  alt={phone_number.image.name} 
                  width="80px"
                  height="80px"
                />
                <h2 className={styles.info_text}>{formattedPhoneNumber(phone_number.value)}</h2>
              </div>
              <div className={styles.contact_info}>
                <img 
                  src={address.image.url} 
                  alt={address.image.name} 
                  width="80px"
                  height="80px"
                />
                <h2 className={styles.info_text}>{address.value}</h2>
              </div>
            </div>
            <div className={styles.map}>
              <Map/>
            </div>
            <div className={styles.map}>

            </div>
            <div className={styles.form}>
              <div className={styles.img}>
                <img 
                  src={image.url} 
                  alt={image.name} 
                  width="100%"
                  height="auto"
                />
              </div>
              <div className={styles.form_input}>
                <form onSubmit={(event) => handleSubmit(event)} id="form-contact">
                  {
                    input.map((item: any, index: number) => {
                      return(
                        <div key={index} className={styles.form_item}>
                          <label htmlFor={item.name}>
                            <h3>{item.label} {item.required ? (<span style={{color: 'red'}}>*</span>) : ''}</h3>
                          </label>
                          {
                            item.type === "textarea" &&
                            <textarea 
                              className={styles.textarea}
                              id={item.name} 
                              name={item.name} 
                              placeholder={item.placeholder ? item.placeholder : ''}
                              required={item.required}
                              onChange={(event) => {
                                setMessage(prev => {
                                  (prev as any)[item.name] = event.target.value
                                  return prev
                                })
                              }}
                            ></textarea>
                          }
                          {
                            item.type !== "textarea" && 
                            <input 
                              className={styles.input}
                              type={item.type}
                              name={item.name} 
                              id={item.name} 
                              placeholder={item.placeholder ? item.placeholder : ''}
                              required={item.required}
                              onChange={(event) => {
                                setMessage(prev => {
                                  (prev as any)[item.name] = event.target.value
                                  return prev
                                })
                              }}
                            />
                          }
                        </div>
                      )
                    })
                  }
                    <button type='submit' className={styles.button}>
                      SUBMIT
                    </button>
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
      {/* <GoogleMap
        options={mapOptions}
        zoom={15}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: '100%', height: '400px'}}
        onLoad={() => console.log('Map Component Loaded...')}
      >
        <MarkerF position={mapCenter} onLoad={() => console.log('Marker Loaded')} />
      </GoogleMap> */}
    </div>
  )
}

export async function getStaticProps() {
  const information = await getContactInformation()
  const layout = await getLayout()
  const contactUsResponse = (await axiosInstance.get("/api/contact-us-page?populate=deep")).data
  return {
    props: {
      layout: layout.data,
      information: information.data,
      contactUs: contactUsResponse.data
    },
    revalidate: 1,
  }
}

export const revalidate = 0