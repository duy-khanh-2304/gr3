/*
 *
 * HomePage
 *
 */

// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { request } from '@strapi/helper-plugin';
import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Layout, BaseHeaderLayout, ContentLayout, SingleSelect, SingleSelectOption, MultiSelect, MultiSelectOption, Avatar, Flex, IconButton, Table, Tbody, Td, Th, Thead, Tr, VisuallyHidden } from '@strapi/design-system';
import { Eye, Pencil, Trash } from '@strapi/icons';
import styles from './index.module.css'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import NumberPostsChart from '../../components/NumberPostsChart/NumberPostChart';
import NumberSeensChart from '../../components/NumberSeensChart/NumberSeensChart'
import { Chip, CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MostSeensTable from '../../components/MostSeensTable/MostSeensTable';
import { calculateRangeTime, customDateFormat, formatDateToCustomFormat, getFormatDateChart, handleFullScreenAction } from '../../utils/helper';
import MostCommentsTable from '../../components/MostCommentsTable.jsx/MostCommentsTable';
import { BASE_URL, CONTENT_TYPES } from '../../utils/constants';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Typography>{children}</Typography>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
}));


const Statistics = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
  )
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window
    return { innerWidth, innerHeight }
  }
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [isZoomNumberPostsChart, setIsZoomNumberPostsChart] = useState([])
  const [isZoomNumberSeensChart, setIsZoomnumberSeensChart] = useState([])
  const [zoomMostSeensTable, setZoomMostSeensTable] = useState(false)
  const [zoomMostCommentsTable, setZoomMostCommentsTable] = useState(false)
  const [dataPosts, setDataPosts] = useState()
  const [dataSeens, setDataSeens] = useState()
  const [mostSeens, setMostSeens] = useState([])
  const [mostComments, setMostComments] = useState([])
  const [statisticTeam, setStatisticTeam] = useState([])
  const [loadingChart, setLoadingChart] = useState(true)
  const [loadingResearchTeams, setLoadingResearchTeams] = useState(true)
  const [duration, setDuration] = React.useState('last1Month');
  const [types, setTypes] = useState(['News and Events'])

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = async (event, newValue) => {
    setValue(newValue);
    setZoomMostCommentsTable(false)
    setZoomMostSeensTable(false)
    setIsZoomNumberPostsChart(prev => {
      const newPrev = prev.map(_ => ({
        ..._,
        isZoom: false
      }))

      return newPrev
    })
    setIsZoomnumberSeensChart(prev => {
      const newPrev = prev.map(_ => ({
        ..._,
        isZoom: false
      }))

      return newPrev
    })
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };


  const handleZoomChart = (typeChart, contentType) => {
    if (typeChart === 'numberPostsChart') {
      setIsZoomNumberPostsChart(prev => {
        const isZoom = prev.find(_ => _.contentType === contentType)?.isZoom
        prev = prev.filter(_ => _.contentType !== contentType)
        return [
          ...prev,
          {
            contentType: contentType,
            isZoom: !isZoom
          }
        ]
      })
    } else {
      setIsZoomnumberSeensChart(prev => {
        const isZoom = prev.find(_ => _.contentType === contentType)?.isZoom
        prev = prev.filter(_ => _.contentType !== contentType)
        return [
          ...prev,
          {
            contentType: contentType,
            isZoom: !isZoom
          }
        ]
      })
    }
  }

  const getTimeChart = () => {
    const timeBefore = calculateRangeTime(duration)
    const d = new Date()
    d.setMonth(d.getMonth() - timeBefore + 1)
    const time = getFormatDateChart(d)
    return time
  }

  const labels = useMemo(() => {
    let count = calculateRangeTime(duration)
    const arr = []
    while (count > 0) {
      const d = new Date()
      d.setMonth(d.getMonth() - count + 1)
      arr.push(getFormatDateChart(d))
      count -= 1
    }
    getTimeChart()
    return arr
  }, [duration])

  const createNumberPostsDataset = (labels, data) => {
    const datasets = []
    data.map((type) => {
      const dataset = {
        label: 'Number of posts',
        borderRadius: 3,
        data: labels.map((date) => {
          const startDate = date
          const month = (new Date(date)).getMonth() + 1
          const year = (new Date(date)).getFullYear()
          let endMonth
          let endYear
          if(month == 11){
            endMonth = 1
            endYear = year + 1
          }else{
            endMonth = month + 1
            endYear = year
          }
          const endDate = `${endYear}-${endMonth}`
          const filter = type.data.filter(post => {
            return (new Date(post.createdAt) >= new Date(startDate)) && (new Date(post.createdAt) <= new Date(endDate))
          })
          return filter.length
        }),
        stack: 'number posts'
      }
      datasets.push({
        contentType: type.contentType,
        dataset: dataset
      })
    })
    setDataPosts(datasets)
  }

  const createNumberSeensDataset = (labels, data) => {
    const datasets = []
    data.map((type) => {
      const dataset = {
        label: 'Number of views',
        borderRadius: 3,
        data: labels.map((date) => {
          const startDate = date
          const month = (new Date(date)).getMonth() + 1
          const year = (new Date(date)).getFullYear()
          let endMonth
          let endYear
          if(month == 11){
            endMonth = 1
            endYear = year + 1
          }else{
            endMonth = month + 1
            endYear = year
          }
          const endDate = `${endYear}-${endMonth}`
          let numberSeen = 0
          type.data.forEach(post => {
            const filterSeens = post.seen_time_array.filter(_ => {
              return (new Date(_.time) >= new Date(startDate)) && (new Date(_.time) <= new Date(endDate))
            })
            numberSeen += filterSeens.length
          })
          return numberSeen
        }),
        stack: 'number views'
      }
      datasets.push({
        contentType: type.contentType,
        dataset: dataset
      })
    })
    setDataSeens([...datasets])
  }

  const createResearchTeamStatistics = (data) => {
    const timeBefore = getTimeChart()
    const statistics = data.map((team) => {
      const filteredProjects = team.projects.filter(_ => new Date(_.createdAt) > new Date(timeBefore))
      const filteredSolutions = team.solutions.filter(_ => new Date(_.createdAt) > new Date(timeBefore))
      const filteredToolAndResources = team.tool_and_resources.filter(_ => new Date(_.createdAt) > new Date(timeBefore))
      const numberOfPosts = [...filteredProjects, ...filteredSolutions, ...filteredToolAndResources].length

      //get view of team
      const numberOfViews = team.seen_time_array.filter(_ => (new Date(_.time) >= new Date(timeBefore))).length

      //get view of each type
      let numberViewsOfProject = 0
      team.projects.forEach(project => {
        const views = project.seen_time_array.filter(_ => (new Date(_.time) >= new Date(timeBefore))).length
        numberViewsOfProject += views
      })

      let numberViewsOfToolAndResource = 0
      team.tool_and_resources.forEach(tool => {
        const views = tool.seen_time_array.filter(_ => (new Date(_.time) >= new Date(timeBefore))).length
        numberViewsOfToolAndResource += views
      })

      let numberViewsOfSolution = 0
      team.solutions.forEach(solution => {
        const views = solution.seen_time_array.filter(_ => (new Date(_.time) >= new Date(timeBefore))).length
        numberViewsOfSolution += views
      })

      return {
        ...team,
        numberPosts: numberOfPosts,
        numberViews: numberOfViews,
        numberViewsOfPost: numberViewsOfProject + numberViewsOfSolution + numberViewsOfToolAndResource
      }
    })
    console.log('STATTISTIC: ', statistics)
    setStatisticTeam([...statistics])
  }

  useEffect(() => {
    ;(async() => {
      setLoadingChart(true)
      const timeBefore = getTimeChart()
      const allData = []
      const countedViews = []
      const countedComments = []
      await Promise.all(
        types.map( async (type) => {
          const apiType = CONTENT_TYPES.find(_ => _.label === type)?.value
          const data = await request(`/statistics/${apiType}`, {
            method: "GET",
            "Content-Type": "application/json",
          })
          // GET most views
          data.forEach(post => {
            const numberViewsPost = (post.seen_time_array.filter(view => {
              return new Date(view.time) >= new Date(timeBefore)
            })).length
            countedViews.push({
              post: post,
              contentType: type,
              views: numberViewsPost
            })
          })
          const sortedViews = countedViews.sort((a,b) => b.views - a.views)
          setMostSeens(sortedViews.slice(0, 5).filter(_ => _.views !== 0))

          // GET most comments
          data.forEach(post => {
            const numberCommentsPost = (post.comment.filter(comment => {
              return new Date(comment.commentedAt) >= new Date(timeBefore)
            })).length
            countedComments.push({
              post: post,
              contentType: type,
              comments: numberCommentsPost
            })
          })
          const sortedComments = countedComments.sort((a,b) => b.comments - a.comments)
          setMostComments(sortedComments.slice(0, 5).filter(_ => _.comments !== 0))

          allData.push({
            contentType: type,
            data: [...data]
          })

          setIsZoomnumberSeensChart(prev => {
            return [
              ...prev,
              {
                contentType: type,
                isZoom: false
              }
            ]
          })
          setIsZoomNumberPostsChart(prev => {
            return [
              ...prev,
              {
                contentType: type,
                isZoom: false
              }
            ]
          })
        })
      )
      createNumberSeensDataset(labels, [...allData])
      const filteredData = allData.map((type) => {
        const filtered = type.data.filter(_ => new Date(_.createdAt) > new Date(timeBefore))
        return {
          ...type,
          data: [...filtered]
        }
      })
      createNumberPostsDataset(labels, [...filteredData])
      setLoadingChart(false)
    })()
  }, [duration, types])

  useEffect(() => {
    ;(async() => {
      if(value === 2){
        setLoadingResearchTeams(true)
        const researchTeams = await request(`/statistics/research-teams`, {
          method: "GET",
          "Content-Type": "application/json",
        })
        createResearchTeamStatistics(researchTeams)
        setLoadingResearchTeams(false)
      }
    })()
  }, [value, duration])

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])
  return (
    <Layout>
      <BaseHeaderLayout
        title="Statistics"
        subtitle=""
        as="h2"
      />
      <div className={classes.root}>
      <AppBar position="static" color="default" style={{width: '100%'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Number of Posts and Views" {...a11yProps(0)} />
          <Tab label="Ranking table" {...a11yProps(1)} />
          <Tab label="Research Teams Statistic" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        {
          loadingChart ? <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
          }}>
            <CircularProgress style={{fontSize: '24px'}}/>
          </div> : (
            <div>
              <ContentLayout>
          <div style={{marginTop: '15px'}}>
            <div className={styles.single_select}>
              <h5 style={{width: "150px"}}>Duration: </h5>
              <SingleSelect 
                placeholder="Choose duration ..." 
                onClear={() => {
                  setDuration(undefined);
                }} 
                value={duration} 
                onChange={setDuration}
              >
                <SingleSelectOption value="last1Month">Last Month</SingleSelectOption>
                <SingleSelectOption value="last3Months">Last 3 months</SingleSelectOption>
                <SingleSelectOption value="last6Months">Last 6 months</SingleSelectOption>
                <SingleSelectOption value="last9Months">Last 9 months</SingleSelectOption>
                <SingleSelectOption value="last1Years">Last 1 years</SingleSelectOption>
                <SingleSelectOption value="last2Years">Last 2 years</SingleSelectOption>
              </SingleSelect>
            </div>
            <div className={styles.multi_select}>
              <h5 style={{width: "150px"}}>Content Type: </h5>
              <MultiSelect
                placeholder="Choose some types ..." 
                onClear={() => {
                  setTypes(['news-and-events']);
                }} 
                value={types} 
                onChange={(values) => {
                  if(values.length === 0 && types.length === 1){
                    return
                  }else{
                    setTypes([...values])
                  }
                }} 
                withTags
              >
                {
                  CONTENT_TYPES.map((type, index) => {
                    return (
                      <MultiSelectOption
                        style={{fontWeight: "500 !important"}}
                        key={index} value={type.label}>{type.label}</MultiSelectOption>
                    )
                  })
                }
              </MultiSelect>
            </div>
          </div>
        </ContentLayout>
        {
          dataSeens && dataPosts && (dataSeens.length === dataPosts.length) && (dataSeens.length === types.length) && 
          types.map((type) => {
            const indexSeens = dataSeens.find(_ => _.contentType === type)
            const datasetSeensNumber = indexSeens?.dataset
            const indexPosts = dataPosts.find(_ => _.contentType === type)
            const datasetPostsNumber = indexPosts?.dataset
            return (
              <div
                className={styles.section}
              >
                <div style={{margin: "16px 12px", color: "#45526c", fontSize: "14px"}}>
                  <h3 style={{fontWeight: "600", fontSize: "18px", color: '#4945ff'}}>{type}</h3>
                  <div>Information from <span style={{fontSize: '16px'}}>{customDateFormat(getTimeChart())}</span> to <span style={{fontSize: "16px"}}>{formatDateToCustomFormat()}</span> is displayed.</div>
                </div>
                <div 
                  style={{
                    display: 'flex',
                    flexDirection: windowSize.innerWidth > 1360 ? 'row' : 'column',
                  }}
                >
                  {
                    !isZoomNumberSeensChart.find(_ => _.contentType === type)?.isZoom && (
                      <NumberPostsChart
                        windowSize={windowSize}
                        isZoomNumberPostsChart={isZoomNumberPostsChart.find(_ => _.contentType === type)?.isZoom ?? false}
                        setIsZoomNumberPostsChart={() => handleZoomChart('numberPostsChart', type)}
                        labels={labels}
                        loadingChart={loadingChart}
                        datasets={datasetPostsNumber}
                      />
                    )
                  }
                  {
                    !isZoomNumberPostsChart.find(_ => _.contentType === type)?.isZoom && (
                      <NumberSeensChart
                        windowSize={windowSize}
                        isZoomNumberSeensChart={isZoomNumberSeensChart.find(_ => _.contentType === type)?.isZoom ?? false}
                        setIsZoomNumberSeensChart={() => handleZoomChart('numberSeensChart', type)}
                        labels={labels}
                        loadingChart={loadingChart}
                        datasets={datasetSeensNumber}
                      />
                    )
                  }
                </div>
              </div>
            )
          })
        }
            </div>
          )
        }
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <ContentLayout>
          <div style={{marginTop: '15px'}}>
            <div className={styles.single_select}>
              <h5 style={{width: "150px"}}>Duration: </h5>
              <SingleSelect 
                placeholder="Choose duration ..." 
                onClear={() => {
                  setDuration(undefined);
                }} 
                value={duration} 
                onChange={setDuration}
              >
                <SingleSelectOption value="last1Month">Last Month</SingleSelectOption>
                <SingleSelectOption value="last3Months">Last 3 months</SingleSelectOption>
                <SingleSelectOption value="last6Months">Last 6 months</SingleSelectOption>
                <SingleSelectOption value="last9Months">Last 9 months</SingleSelectOption>
                <SingleSelectOption value="last1Years">Last 1 years</SingleSelectOption>
                <SingleSelectOption value="last2Years">Last 2 years</SingleSelectOption>
              </SingleSelect>
            </div>
            <div className={styles.multi_select}>
              <h5 style={{width: "150px"}}>Content Type: </h5>
              <MultiSelect
                placeholder="Choose some types ..." 
                onClear={() => {
                  setTypes(['news-and-events']);
                }} 
                value={types} 
                onChange={(values) => {
                  if(values.length === 0 && types.length === 1){
                    return
                  }else{
                    setTypes([...values])
                  }
                }} 
                withTags
              >
                {
                  CONTENT_TYPES.map((type, index) => {
                    return (
                      <MultiSelectOption
                        style={{fontWeight: "500 !important"}}
                        key={index} value={type.label}>{type.label}</MultiSelectOption>
                    )
                  })
                }
              </MultiSelect>
            </div>
          </div>
        </ContentLayout>
        {
          !zoomMostCommentsTable && (
            <MostSeensTable
              onViewFullScreen={() => {
                handleFullScreenAction({
                  el: document.querySelector('#mostSeensPosts'),
                  open: true,
                  setState: setZoomMostSeensTable,
                })
              }}
              onExitFullScreen={() => {
                handleFullScreenAction({
                  el: document.querySelector('#mostSeensPosts'),
                  open: false,
                  setState: setZoomMostSeensTable,
                })
              }}
              duration={getTimeChart()}
              loading={loadingChart}
              types={types}
              data={mostSeens}
              zoomMostSeensTable={zoomMostSeensTable}
            />
          )
        }
        {
          !zoomMostSeensTable && (
            <MostCommentsTable
              onViewFullScreen={() => {
                handleFullScreenAction({
                  el: document.getElementById('mostCommentsPosts'),
                  open: true,
                  setState: setZoomMostCommentsTable,
                })
              }}
              onExitFullScreen={() => {
                handleFullScreenAction({
                  el: document.getElementById('mostCommentsPosts'),
                  open: false,
                  setState: setZoomMostCommentsTable,
                })
              }}
              duration={getTimeChart()}
              loading={loadingChart}
              types={types}
              data={mostComments}
              zoomMostCommentsTable={zoomMostCommentsTable}
            />
          )
        }
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        {
          loadingResearchTeams ? <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
          }}>
            <CircularProgress style={{fontSize: '24px'}}/>
          </div> : (
            <div style={{paddingBottom: '30px'}}>
              <ContentLayout>
                <div style={{marginTop: '15px'}}>
                  <div className={styles.single_select}>
                    <h5 style={{width: "150px"}}>Duration: </h5>
                    <SingleSelect 
                      placeholder="Choose duration ..." 
                      onClear={() => {
                        setDuration(undefined);
                      }} 
                      value={duration} 
                      onChange={setDuration}
                    >
                      <SingleSelectOption value="last1Month">Last Month</SingleSelectOption>
                      <SingleSelectOption value="last3Months">Last 3 months</SingleSelectOption>
                      <SingleSelectOption value="last6Months">Last 6 months</SingleSelectOption>
                      <SingleSelectOption value="last9Months">Last 9 months</SingleSelectOption>
                      <SingleSelectOption value="last1Years">Last 1 years</SingleSelectOption>
                      <SingleSelectOption value="last2Years">Last 2 years</SingleSelectOption>
                    </SingleSelect>
                  </div>
                </div>
              </ContentLayout>
              <ContentLayout style={{fontSize: '16px'}}>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>
                        <Typography variant="sigma">Name</Typography>
                      </Th>
                      <Th>
                        <Typography variant="sigma">Image</Typography>
                      </Th>
                      <Th>
                        <Typography variant="sigma"># of Members</Typography>
                      </Th>
                      <Th>
                        <Typography variant="sigma"># of Publications</Typography>
                      </Th>
                      <Th>
                        <Typography variant="sigma"># of Team visits</Typography>
                      </Th>
                      <Th>
                        <Typography variant="sigma"># of Created Posts</Typography>
                      </Th>
                      <Th>
                        <Typography variant="sigma"># of Posts view</Typography>
                      </Th>
                      <Th>
                        <VisuallyHidden>Actions</VisuallyHidden>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {statisticTeam.map((entry, index) => (
                      <Tr key={index}>
                        <Td>
                          <Typography textColor="neutral800">{entry.title}</Typography>
                        </Td>
                        <Td>
                          <Avatar src={entry.post_image.url} alt={entry.post_image.alternativeText} />
                        </Td>
                        <Td>
                          <Typography textColor="neutral800" style={{fontWeight: 600, marginLeft: '30px'}}>{entry.members.length}</Typography>
                        </Td>
                        <Td>
                          <Typography textColor="neutral800" style={{fontWeight: 600, marginLeft: '30px'}}>{entry.publications.length}</Typography>
                        </Td>
                        <Td>
                          <Typography textColor="primary600" style={{fontWeight: 600, marginLeft: '30px'}}>{entry.numberViews}</Typography>
                        </Td>
                        <Td>
                          <Typography textColor="primary600" style={{fontWeight: 600, marginLeft: '30px'}}>{entry.numberPosts}</Typography>
                        </Td>
                        <Td>
                          <Typography textColor="primary600" style={{fontWeight: 600, marginLeft: '30px'}}>{entry.numberViewsOfPost}</Typography>
                        </Td>
                        <Td>
                          <Flex>
                            <IconButton 
                              onClick={
                                () => {
                                  const id = entry.id
                                  history.push(`/content-manager/collectionType/api::research-team.research-team/${id}`)
                                }
                              } 
                              label="Edit" 
                              noBorder 
                              icon={<Pencil />} 
                            />
                            <Box paddingLeft={1}>
                            <IconButton 
                                onClick={
                                  () => {
                                    const slug = entry.slug
                                    window.open(`${BASE_URL}/researches/research-teams/${slug}`, '_blank')
                                  }
                                } 
                                label="See" 
                                noBorder 
                                icon={<Eye />} 
                              />
                            </Box>
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </ContentLayout>
            </div>
          )
        }
      </TabPanel>
      </div>
    </Layout>
  );
};

export default Statistics;
