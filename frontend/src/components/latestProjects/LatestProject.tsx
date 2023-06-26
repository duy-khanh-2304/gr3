import React from "react"
import styles from "./latestProject.module.css"
import { Grid } from "@mui/material"
import { useRouter } from "next/router"

export default function LatestProject(props: any){
  const router = useRouter()
  const handleClick = (item : any) => {
    router.push(`/researches/projects/${item.slug}`)
  }
  return (
    <div className={styles.container}>
      <div className={styles.latest_projects}>
        <span className={styles.latest_projects_title}>LATEST PROJECTS</span>
        <div className={styles.small_divider}></div>
        <div className={styles.latest_projects_list}>
          {
            props.latestProjects && props.latestProjects.map((item: any, index: number) => {
              return(
                <div
                  key={index}
                  onClick={() => {handleClick(item)}}
                >
                  <Grid 
                    container 
                    key={index} 
                    className={styles.latest_projects_item}
                  >
                    <Grid item lg={3} style={{display: "flex", justifyContent: "center", height: "inherit"}}>
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