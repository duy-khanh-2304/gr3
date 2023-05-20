import axios from 'axios'
import React from 'react'

export default function News(props: any) {
  console.log("Data: ", props.data)
  return (
    <div>
      Duy Khanh
    </div>
  )
}

export async function getStaticProps(){
  const response = await axios.get('http://localhost:1337/api/newses?populate=deep')
  return {
    props: {
      data: response.data
    }
  }
}
