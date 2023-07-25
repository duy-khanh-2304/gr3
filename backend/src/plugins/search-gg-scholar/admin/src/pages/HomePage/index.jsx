/*
 *
 * HomePage
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import axios from 'axios'
import { useEffect } from 'react';
import { request } from '@strapi/helper-plugin';
import { Alert, BaseHeaderLayout, Button, ContentLayout, Layout, MenuItem, SingleSelect, SingleSelectOption } from '@strapi/design-system';
import {ClickAwayListener, FormControl, Grid, Grow, Menu, MenuList, Paper, Popper, Select, TextField} from '@material-ui/core'
import styles from './index.module.css'
const HomePage = () => {
  const [organicResults, setOrganicResults] = useState([])
  const [query, setQuery] = useState("")
  const [quote, setQuote] = useState("")
  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  const handleChooseOrganic = async (result) => {
    console.log("RESULT: ", result)
    const data = await request('/search-gg-scholar/searchScholarCite', {
      method: "POST",
      "Content-Type": "application/json",
      body: {
        query: result.result_id
      }
    })
    console.log("DATA CITE : ", data)
    const cite = data.citations.find(_ => _.title === "MLA")
    setQuote(cite.snippet)
    setAnchorEl(null)
  }
  useEffect(() => {
    let mounted = true
    if (query !== undefined) {
      const waitingUserType = setTimeout(() => {
        ;(async () => {
          if(query.length > 0){
            const data = await request('/search-gg-scholar/searchScholar', {
              method: "POST",
              "Content-Type": "application/json",
              body: {
                query: query
              }
            })
            console.log("DATA RESPONE : ", data)
            setOrganicResults(data.organic_results)
            const el = document.getElementById("search")
            setAnchorEl(el);
          }
        })()
      }, 1000)
      return () => {
        mounted = false
        clearTimeout(waitingUserType)
      }
    }
    return () => {
      mounted = false
    }
  }, [query])

  useEffect(() => {
    ;(async () => {
      const teamList = await request('/search-gg-scholar/getResearchTeams', {
        method: 'GET'
      })
      setTeams([...teamList])
    })()
  }, [])

  return (
    <div>
      <Layout>
        <BaseHeaderLayout
          title="Search Google Scholar"
          subtitle="Find articles in Google Scholar and add to team"
          as="h2"
        />
        <ContentLayout>
          <div
            className={styles.container}
          >
            <form noValidate autoComplete="off"
              className={styles.form}
            >
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <label htmlFor="search">Search Google Scholar: </label>
                </Grid>
                <Grid item xs={8}>
                  <input 
                    id="search" name="search" placeholder='Enter query ...' className={styles.input}
                    onChange={handleChangeQuery}
                  />
                  <div>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                      style={{position: "absolute", top: "40px", overflowY: "scroll", overflowX: "scroll"}}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                    >
                      {
                        organicResults.map((item, index) => {
                          return (
                            <MenuItem onClick={() => {handleChooseOrganic(item)}}>
                              <h4>{item.title}</h4>
                              <span style={{color: "#888888", fontSize: "12px"}}>{item.publication_info.summary}</span>
                            </MenuItem>
                          )
                        })
                      }
                    </Menu>
                  </div>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <label htmlFor="search">Quote: </label>
                </Grid>
                <Grid item xs={8}>
                  <textarea id="quote" name="quote" className={styles.input_textarea} value={quote}/>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <label htmlFor="search">Research Teams: </label>
                </Grid>
                <Grid item xs={8}>
                  <SingleSelect 
                    placeholder="Choose reasearch team ..." 
                    onClear={() => {
                      setSelectedTeam(undefined);
                    }} 
                    value={selectedTeam} 
                    onChange={setSelectedTeam}
                  >
                    {
                      teams.map((item, index) => {
                        return (
                          <SingleSelectOption key={index} value={item.slug}>{item.title}</SingleSelectOption>
                        )
                      })  
                    }
                  </SingleSelect>
                </Grid>
              </Grid>
              <Button style={{
                width: "120px",
                marginLeft: "auto",
                display: "flex",
                justifyContent: "center",
              }}><span>Add to team</span></Button>
            </form>
          </div>
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default HomePage;
