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
import {Checkbox, CircularProgress, ClickAwayListener, FormControl, FormControlLabel, Grid, Grow, Menu, MenuList, Paper, Popper, Radio, RadioGroup, Select, TextField} from '@material-ui/core'
import styles from './index.module.css'
const HomePage = () => {
  const [organicResults, setOrganicResults] = useState()
  const [organicChecked, setOrganicChecked] = useState([])
  const [teams, setTeams] = useState([])
  const [members, setMembers] = useState([])
  const [selectedTeam, setSelectedTeam] = useState()
  const [selectedMember, setSelectedMember] = useState()
  const [isShowSuccessMessage, setIsShowSuccessMessage] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
          member_id: selectedMember,
          org_checked: organicChecked
        }
      }
    })
    setSelectedTeam()
    setSelectedMember()
    setOrganicResults()
    setIsShowSuccessMessage(true)
    setTimeout(() => {
      setIsShowSuccessMessage(false)
    }, 4000)
  }

  useEffect(() => {
    if(selectedTeam !== undefined){
      const members = teams.find(_ => _.id === Number(selectedTeam))?.members ?? []
      setMembers([...members])
    }
  }, [selectedTeam])

  useEffect(() => {
    let mounted = true
    setIsLoading(true)
    setOrganicResults()
    if (selectedMember !== undefined) {
      const name = members.find(_ => _.id === Number(selectedMember))?.name ?? ""
      const waitingUserType = setTimeout(() => {
        ;(async () => {
          const data = await request('/search-gg-scholar/searchScholar', {
            method: "POST",
            "Content-Type": "application/json",
            body: {
              query: name
            }
          })
          setOrganicResults(data.organic_results)
        })()
      }, 1200)
      return () => {
        mounted = false
        clearTimeout(waitingUserType)
      }
    }
    return () => {
      mounted = false
    }
  }, [selectedMember])

  useEffect(() => {
    ;(async () => {
      const teamList = await request('/search-gg-scholar/getResearchTeams', {
        method: 'GET'
      })
      console.log('TEAM; ', teamList)
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
          subtitle="Find publications in Google Scholar and add to team"
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
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <label htmlFor="search">Members: </label>
                </Grid>
                <Grid item xs={8}>
                  <SingleSelect 
                    placeholder="Choose members ..." 
                    onClear={() => {
                      setSelectedMember(undefined);
                    }} 
                    value={selectedMember} 
                    onChange={setSelectedMember}
                  >
                    {
                      members.map((item, index) => {
                        return (
                          <SingleSelectOption key={index} value={item.id}>{item.name}</SingleSelectOption>
                        )
                      })  
                    }
                  </SingleSelect>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <label htmlFor="search">Publications: </label>
                </Grid>
                <Grid item xs={8}>
                  {
                    !organicResults && !!selectedMember && <CircularProgress style={{fontSize: '24px'}}/>
                  }
                  {
                    organicResults && organicResults.map((result) => {
                      return (
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '8px'}}>
                          <Checkbox onClick={() => {
                            setOrganicChecked(prev => {
                              return [
                                ...prev,
                                result
                              ]
                            })
                          }}/>
                          <div>
                            <h5>{result.title}</h5>
                            <span style={{color: "#888888", fontSize: "12px"}}>{result.publication_info.summary}</span>
                          </div>
                        </div>
                      )
                    })
                  }
                </Grid>
              </Grid>
              <Button 
                style={{
                  width: "50px",
                  marginLeft: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={handleClickButton}
              ><span>ADD</span></Button>
            </form>
          </div>
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default HomePage;
