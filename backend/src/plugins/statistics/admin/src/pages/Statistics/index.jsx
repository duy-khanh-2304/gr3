/*
 *
 * HomePage
 *
 */

// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { request } from '@strapi/helper-plugin';
import React, { useEffect, useMemo, useState } from 'react';
import { Box, Typography, Layout, BaseHeaderLayout, ContentLayout, SingleSelect, SingleSelectOption, MultiSelect, MultiSelectOption, Tag } from '@strapi/design-system';
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
import { Chip } from '@material-ui/core';
import MostSeensTable from '../../components/MostSeensTable/MostSeensTable';
import { calculateRangeTime, customDateFormat, formatDateToCustomFormat, getFormatDateChart, handleFullScreenAction } from '../../utils/helper';
import MostCommentsTable from '../../components/MostCommentsTable.jsx/MostCommentsTable';
import { CONTENT_TYPES } from '../../utils/constants';


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
  const [isZoomNumberPostsChart, setIsZoomNumberPostsChart] = useState(false)
  const [isZoomNumberSeensChart, setIsZoomnumberSeensChart] = useState(false)
  const [zoomMostSeensTable, setZoomMostSeensTable] = useState(false)
  const [zoomMostCommentsTable, setZoomMostCommentsTable] = useState(false)
  const [dataPosts, setDataPosts] = useState()
  const [dataSeens, setDataSeens] = useState()
  const [mostSeens, setMostSeens] = useState([])
  const [mostComments, setMostComments] = useState([])
  const [loadingChart, setLoadingChart] = useState(true)
  const [duration, setDuration] = React.useState('last1Month');
  const [types, setTypes] = useState(['News and Events'])

  const handleZoomChart = (type) => {
    if (type === 'numberPostsChart') {
      setIsZoomNumberPostsChart(!isZoomNumberPostsChart)
    } else {
      setIsZoomnumberSeensChart(!isZoomNumberSeensChart)
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
    const dataset = {
      label: 'Number of post',
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
        const filter = data.filter(post => {
          return (new Date(post.createdAt) >= new Date(startDate)) && (new Date(post.createdAt) <= new Date(endDate))
        })
        return filter.length
      }),
      stack: 'number posts'
    }
    setDataPosts(dataset)
  }

  const createNumberSeensDataset = (labels, data) => {
    const dataset = {
      label: 'Number of post',
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
        data.forEach(post => {
          const filterSeens = post.seen_time_array.filter(_ => {
            return (new Date(_.time) >= new Date(startDate)) && (new Date(_.time) <= new Date(endDate))
          })
          numberSeen += filterSeens.length
        })
        return numberSeen
      }),
      stack: 'number seens'
    }
    setDataSeens(dataset)
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

          allData.push(...data)
        })
      )
      createNumberSeensDataset(labels, [...allData])
      const filteredData = allData.filter(_ => new Date(_.createdAt) > new Date(timeBefore))
      createNumberPostsDataset(labels, [...filteredData])
      setLoadingChart(false)
    })()
  }, [duration, types])

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
      {
        !zoomMostSeensTable && !zoomMostCommentsTable && (
          <ContentLayout>
            <div>
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
                  <SingleSelectOption value="thisWeek">This week</SingleSelectOption>
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
            <div>
            </div>
          </ContentLayout>
        ) 
      }
      {
        !zoomMostSeensTable && !zoomMostCommentsTable && (
          <div
            className={styles.section}
          >
            <div style={{margin: "16px 12px", color: "#45526c", fontSize: "14px"}}>
              <div>Information from <span style={{fontSize: '16px'}}>{customDateFormat(getTimeChart())}</span> to <span style={{fontSize: "16px"}}>{formatDateToCustomFormat()}</span> is displayed.</div>
              <div style={{display: "flex", alignItems: "center", margin: "8px 0"}}>
                <span>Content Type: </span>
                {
                  types.length > 0 && types.map((_, index) => {
                    return (
                      <Chip key={index} label={_} 
                        style={{
                          margin: '0 4px', 
                          color: "#4945ff", 
                          backgroundColor: "#f0f0ff", 
                          fontSize: "12px",
                          overflow: "visible"
                        }}/>
                    )
                  })
                }
              </div>
            </div>
            <div 
              style={{
                display: 'flex',
                flexDirection: windowSize.innerWidth > 1360 ? 'row' : 'column',
              }}
            >
              {
                !isZoomNumberSeensChart && (
                  <NumberPostsChart
                    windowSize={windowSize}
                    isZoomNumberPostsChart={isZoomNumberPostsChart}
                    setIsZoomNumberPostsChart={() => handleZoomChart('numberPostsChart')}
                    labels={labels}
                    loadingChart={loadingChart}
                    datasets={dataPosts}
                  />
                )
              }
              {
                !isZoomNumberPostsChart && (
                  <NumberSeensChart
                    windowSize={windowSize}
                    isZoomNumberSeensChart={isZoomNumberSeensChart}
                    setIsZoomNumberSeensChart={() => handleZoomChart('numberSeensChart')}
                    labels={labels}
                    loadingChart={loadingChart}
                    datasets={dataSeens}
                  />
                )
              }
            </div>
          </div>
        )
      }
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
    </Layout>
  );
};

export default Statistics;
