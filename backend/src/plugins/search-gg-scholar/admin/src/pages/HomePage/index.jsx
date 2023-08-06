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
import {ClickAwayListener, FormControl, FormControlLabel, Grid, Grow, Menu, MenuList, Paper, Popper, Radio, RadioGroup, Select, TextField} from '@material-ui/core'
import styles from './index.module.css'
const HomePage = () => {
  const [organicResults, setOrganicResults] = useState([])
  const [organicChecked, setOrganicChecked] = useState()
  const [citeList, setCiteList] = useState([])
  const [selectedTitle, setSelectedTitle] = useState()
  const [query, setQuery] = useState("")
  const [quote, setQuote] = useState("")
  const [teams, setTeams] = useState([])
  const [selectedTeam, setSelectedTeam] = useState()
  const [anchorEl, setAnchorEl] = useState(null)
  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false)
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeQuery = (e) => {
    setQuery(e.target.value)
  }

  const handleChooseOrganic = async (result) => {
    const data = await request('/search-gg-scholar/searchScholarCite', {
      method: "POST",
      "Content-Type": "application/json",
      body: {
        query: result.result_id
      }
    })
    setOrganicChecked(result)
    const citeList = data.citations.map(_ => ({
      title: _.title,
      text: _.snippet
    }))
    setCiteList([...citeList])
    setSelectedTitle(citeList[0].title)
    setQuote(citeList[0].text)
    setAnchorEl(null)
  }

  const handleChangeQuote = (e) => {
    setQuote(e.target.value)
  }

  const handleClickButton = async () => {
    const title = organicChecked.title
    const data = await request('/search-gg-scholar/addPublication', {
      method: "POST",
      "Content-Type": "application/json",
      body: {
        query: {
          research_team_id: selectedTeam,
          quote: quote,
          title: title
        }
      }
    })
    setQuery(""),
    setSelectedTeam()
    setQuote("")
    setSelectedTitle("")
    setCiteList([])
    setIsShowSuccessMessage(true)
    setTimeout(() => {
      setIsShowSuccessMessage(false)
    }, 4000)
  }

  const handleChangeTitle = (e) => {
    const cite = citeList.find(_ => _.title === e.target.value)
    setSelectedTitle(e.target.value)
    if(cite){
      setQuote(cite.text)
    }
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
        {
          isShowSuccessMessage && 
            <Alert 
              onClose={() => {
                setIsShowSuccessMessage(false)
              }}
              closeLabel="Close alert" 
              title="Add publication to team successfully !" 
              variant="success"
              style={{position: "absolute", top: "40px", width: "400px", left: "50%"}}
            >.
            </Alert>
        }
        <BaseHeaderLayout
          title="Search Publication"
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
                    value={query}
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
                        organicResults.length > 0 && organicResults.map((item, index) => {
                          return (
                            <MenuItem key={index} onClick={() => {handleChooseOrganic(item)}}>
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
                  <textarea id="quote" name="quote" className={styles.input_textarea} value={quote} onChange={handleChangeQuote}/>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={8}>
                  {
                    citeList.length > 0 ? (
                      <RadioGroup aria-label="gender" name="gender1" row onChange={handleChangeTitle}>
                          {
                            citeList.map((item, index) => {
                              return (
                                <FormControlLabel 
                                  checked={selectedTitle === item.title}
                                  key={index}
                                  value={item.title} 
                                  control={<Radio style={{color: "#4945ff", fontSize: "12px"}} size='small' color='secondary'/>} 
                                  label={item.title} 
                                />
                              )
                            })
                          }
                      </RadioGroup>
                    ) : <div></div>
                  }
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
                          <SingleSelectOption key={index} value={item.id}>{item.title}</SingleSelectOption>
                        )
                      })  
                    }
                  </SingleSelect>
                </Grid>
              </Grid>
              <Button 
                style={{
                  width: "120px",
                  marginLeft: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={handleClickButton}
              ><span>Add to team</span></Button>
            </form>
          </div>
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default HomePage;
