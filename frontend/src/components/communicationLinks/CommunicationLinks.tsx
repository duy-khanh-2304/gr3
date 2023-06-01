import axiosInstance from "@/axiosConfig";
import React, { useLayoutEffect, useState } from "react";

export default function CommunicationLinks (props: any){
  const [list, setList] = useState<Array<any>>([])
  useLayoutEffect(() => {
    ;(async() => {
      const linkList = (await axiosInstance.get("/api/communication?populate=deep")).data
      console.log("Link list: ", linkList)
      setList(linkList.data.link)
    })()
  }, [])
  return(
    <div>
      {
        list.map((link: any, index: number) => {
          return (
            <div key={index}>

            </div>
          )
        })
      }
    </div>
  )
}