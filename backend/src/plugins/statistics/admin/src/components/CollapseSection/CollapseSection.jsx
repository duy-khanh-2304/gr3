import React, {useState, useEffect} from 'react'
import styles from './collapseSection.module.css'
import {BsFullscreen} from 'react-icons/bs' 
import {MdCloseFullscreen, MdOutlineFullscreen} from 'react-icons/md'
import {AiOutlineBarChart, AiOutlineLineChart} from 'react-icons/ai'
import {IoChevronUpCircleSharp, IoChevronDownCircleSharp} from 'react-icons/io5'
import IconButton from '@material-ui/core/IconButton'
import { Collapse, Tooltip } from '@material-ui/core'

const CollapseSection = ({
  children,
  title,
  id,
  onViewFullScreen,
  onExitFullScreen,
  onViewLineChart,
  isShowLineChart,
  defaultOpen = false,
  onBarLineChart = false
}) => {
  const [expanded, setExpanded] = React.useState(defaultOpen || false)
  const [fullScreen, setFullScreen] = React.useState(false)

  const handleViewFullScreen = () => {
    setFullScreen(!fullScreen)
    if (onViewFullScreen) onViewFullScreen()
  }

  const handleExitFullScreen = () => {
    setFullScreen(!fullScreen)
    onExitFullScreen()
  }

  const handleViewLineChart = () => {
    onViewLineChart()
  }

  const handleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={styles.root} id={id}>
      <div className={styles.collapseHeader}>
        <h4 style={{fontWeight: "600", fontSize: "16px"}}>{title}</h4>
        <div>
          {onViewFullScreen && (
            <Tooltip 
              title={!fullScreen
                ? 'Maximize'
                : 'Single Column'}
            >
              <>
                {!fullScreen ? (
                  <IconButton style={{width: "32px"}} size="small" onClick={handleViewFullScreen} >
                    <MdOutlineFullscreen size={24}/>
                  </IconButton>
                ) : (
                  <IconButton style={{width: "32px"}} size="small" onClick={handleExitFullScreen}>
                    <MdCloseFullscreen size={24}/>
                  </IconButton>
                )}
              </>
            </Tooltip>
          )}
          {onBarLineChart && (
            <Tooltip
              title={
                !isShowLineChart
                  ? 'View Line Chart'
                  : 'View Bar Chart'
              }
            >
              <IconButton style={{width: "32px"}} size="small" onClick={handleViewLineChart}>
                {isShowLineChart ? (
                  <AiOutlineBarChart primarycolor="#6E6E6E" size={24}/>
                ) : (
                  <AiOutlineLineChart primarycolor="#6E6E6E" size={24}/>
                )}
                </IconButton>
            </Tooltip>
          )}
          <Tooltip
            title={expanded ? 'Minimize' : 'Expand'}
          >
            <IconButton style={{width: "32px"}} size="small" onClick={handleExpand}>
                {expanded ? (
                  <IoChevronUpCircleSharp size={24}/>
                ) : (
                  <IoChevronDownCircleSharp size={24}/>
                )}
              </IconButton>
          </Tooltip>
        </div>
      </div>
      <Collapse in={expanded} timeout="auto">
        {children}
      </Collapse>
    </div>
  )
}

export default CollapseSection