import { Grid } from '@mui/material'
import React from 'react'
import styles from './teamList.module.css'

export default function TeamCard(props: any){
  const teams = props.teams
  const handleClickTeam = (item: any) => {
    window.location.href = `/researches/research-teams/${item.slug}`
  }
  return (
    <Grid container spacing={2}>
      {
        teams.length > 0 && teams.map((team: any, index: number) => {
          return (
            <Grid item lg={3} md={4} key={index}>
              <div 
                className={`${styles.item} ${styles.card}`}
                onClick={() => {handleClickTeam(team)}}
              >
                <div className={styles.content}>
                  <div className={styles.post_image} >
                    <img 
                      src={team.post_image.url} 
                      alt={team.post_image.name}
                    />
                  </div>
                  <div className={styles.text}>
                    <div className={styles.title}>
                      <h5 style={{fontFamily: 'Nunito, sans-serif !important'}}>{team.title}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          )
        })
      }
    </Grid>
  )
}