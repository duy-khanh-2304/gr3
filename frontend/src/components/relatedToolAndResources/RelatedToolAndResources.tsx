import React from "react"
import styles from "./relatedToolAndResources.module.css"
import { Grid } from "@mui/material"
import { useRouter } from "next/router"

export default function RelatedToolAndResource(props: any){
  const router = useRouter()
  const handleClick = (item: any) => {
    router.push(`/researches/tool-and-resources/${item.slug}`)
  }
  return (
    <div className={styles.container}>
      <div className={styles.latest_projects}>
        <span className={styles.latest_projects_title}>RELATED TOOL AND RESOURCES</span>
        <div className={styles.small_divider}></div>
        <div className={styles.latest_projects_list}>
          {
            props.relatedList && props.relatedList.map((item: any, index: number) => {
              return(
                <div key={index} onClick={() => {handleClick(item)}}>
                  <Grid container className={styles.latest_projects_item}>
                    <Grid item lg={3} style={{display: "flex", justifyContent: "center"}}>
                      <img 
                        src={item.post_image.url} 
                        alt={item.post_image.name} 
                        className={styles.leftImage}
                      />
                    </Grid>
                    <Grid item lg={9}>
                      <div className={styles.right_content}>
                        <span style={{fontSize: "16px", fontWeight: "500"}}>{item.title}</span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                
              )
            })
          }
        </div>
      </div>
    </div>
  )
}