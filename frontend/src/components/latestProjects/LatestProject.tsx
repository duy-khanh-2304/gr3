import React from "react"
import styles from "./latestProject.module.css"
import { Grid } from "@mui/material"

export default function LatestProject(props: any){
  return (
    <div className={styles.container}>
      <div className={styles.latest_projects}>
        <span className={styles.latest_projects_title}>LATEST PROJECTS</span>
        <div className={styles.small_divider}></div>
        <div className={styles.latest_projects_list}>
          {
            props.latestProjects && props.latestProjects.map((item: any, index: number) => {
              return(
                <Grid container key={index} className={styles.latest_projects_item}>
                  <Grid item lg={3} style={{display: "flex", justifyContent: "center", padding: "4px"}}>
                    <img 
                      src={item.attributes.post_image.data.attributes.url} 
                      alt={item.attributes.post_image.data.attributes.name} 
                      style={{objectFit: 'contain', margin: "auto"}}
                    />
                  </Grid>
                  <Grid item lg={9}>
                    <div className={styles.right_content}>
                      <span style={{fontSize: "16px", fontWeight: "500"}}>{item.attributes.title}</span>
                    </div>
                  </Grid>
                </Grid>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}