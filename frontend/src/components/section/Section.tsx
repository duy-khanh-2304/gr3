import React, { useEffect } from "react";
import styles from './section.module.css'
import { Grid } from "@mui/material";
import Card from "../card/Card";
import FlickityComponent from "../flickityComponent/FlickityComponent";

export default function Section(props: any){
  const dataList = props.sectionsData[props.data.entity]
  const handleClick = (item: any) => {

  }
  return (
    <div className={props.data.background_effect ? `${styles.backgroundEffect} ${styles.main}` : `${styles.main}`}>
      <div className={styles.container}>
        <h2 className={props.data.background_effect ? `${styles.title} ${styles.title_effect}` : `${styles.title}`}>{props.data.title}</h2>
        {
          props.data.entity === "Partners" ? (
            <div style={{width: "100%"}}>
              <Grid container>
                {
                  dataList && dataList.map((item: any, index: number) => {
                    return (
                      <Grid item key={index} sm={6} md={4} lg={3} style={{display: "flex", alignItems: "center"}}>
                        <a href={item.url ? item.url : "#"} style={{margin: "0 15px 30px"}}>
                          <img src={item.image.url} alt={item.image.name} style={{width: "100%", height: "auto"}}/>
                        </a>
                      </Grid>
                    )
                  })
                }
              </Grid>
            </div>
          ) : (
            <div style={{width: "100%"}}>
              {
                props.data.flickity ? (
                  <>
                    <FlickityComponent dataList={dataList}/>
                  </>
                ): (
                  <div style={{width: "100%"}}>
                    <Grid container>
                      {
                        dataList && dataList.map((item: any, index: number) => {
                          return (
                            <Grid item key={index} sm={6} md={4} lg={3}>
                              <Card item={item} onClick={() => {handleClick(item)}}/>
                            </Grid>
                          )
                        })
                      }
                    </Grid>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  )
}

// function listData(data: any, sectionData: any){
//   switch(data.)
// }