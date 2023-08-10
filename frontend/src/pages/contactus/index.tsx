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
import { CircularProgress } from '@mui/material'

export default function ContactUs(props: any){
  const [data, setData] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState<any>()
  const email = data?.information.email
  const phone_number = data?.information.phone_number
  const address = data?.information.address
  const image = data?.contactUs.form.image

  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    ;(async () => {
      const information = await getContactInformation()
      const contactUsResponse = (await axiosInstance.get("/api/contact-us-page?populate=deep")).data
      setData({
        information: information.data,
        contactUs: contactUsResponse.data
      })
    })()
  }, [])

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setIsSuccess(null);
    (document.getElementById("form-contact") as any).reset()
    const templateParams = {
      from_name: message.name,
      from_email: message.email,
      subject: message.subject,
      message: message.message,
    };
    try {
      const response: EmailJSResponseStatus = await emailjs.send(
        'service_4rkurx5',
        'template_mm12o4v',
        templateParams,
        '5Eu4kYruvoheDxz4e'
      );
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(null)
      }, 3000)
    } catch (error) {
      setIsSuccess(false)
      setTimeout(() => {
        setIsSuccess(null)
      }, 3000)
    }
    setIsLoading(false)
  }

  if(!data){
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <CircularProgress color='success'/>
      </div>
    )
  }
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Layout
        
        information={data.information}
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
            <div className={styles.form}>
              <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Send message</h1>
              <div style={{display: 'flex'}}>
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
                    <input 
                      className={styles.input}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                      required={true}
                      onChange={(event) => {
                        setMessage(prev => {
                          const name = event.target.value
                          return {
                            ...prev,
                            name
                          }
                        })
                      }}
                    />
                    <input 
                      className={styles.input}
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      required={true}
                      onChange={(event) => {
                        setMessage(prev => {
                          const email = event.target.value
                          return {
                            ...prev,
                            email
                          }
                        })
                      }}
                    />
                    <input 
                      className={styles.input}
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter subject of message "
                      required={false}
                      onChange={(event) => {
                        setMessage(prev => {
                          const subject = event.target.value
                          return {
                            ...prev,
                            subject
                          }
                        })
                      }}
                    />
                    <textarea 
                      className={styles.textarea}
                      id="message" 
                      name="message" 
                      placeholder="Write some words ..."
                      required={false}
                      onChange={(event) => {
                        setMessage(prev => {
                          const message = event.target.value
                          return {
                            ...prev,
                            message
                          }
                        })
                      }}
                    ></textarea>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                      <button type='submit' className={styles.button}>
                        {isLoading ? <CircularProgress style={{color: "#ffffff", fontWeight: "700"}} size={16}/> : 'Send'}
                      </button>
                      <div>
                        {isSuccess===false && <span style={{color: '#b20400', marginLeft: "20px", fontSize: '16px'}}>Sending email is fail.</span>}
                        {isSuccess===true && <span style={{color: '#7a9c59', marginLeft: "20px"}}>Sending email is success.</span>}
                      </div>
                    </div>
                  </form>
                </div>
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

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}