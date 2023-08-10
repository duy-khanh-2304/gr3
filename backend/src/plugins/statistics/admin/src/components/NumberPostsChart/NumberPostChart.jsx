import { CircularProgress } from '@material-ui/core'
import React, {useState} from 'react'
import Chart from '../Chart/Chart'
import CollapseSection from '../CollapseSection/CollapseSection'
import styles from './numberPostChart.module.css'

const NumberPostsChart = ({
  windowSize,
  isZoomNumberPostsChart,
  setIsZoomNumberPostsChart,
  labels,
  datasets,
  loadingChart
}) => {
  console.log('DATASETS: ', datasets)
  const [isShowLineChart, setIsShowLineChart] = useState(false)
  const calWidth =
    windowSize.innerWidth <= 1360 || isZoomNumberPostsChart ? '100%' : '50%'
  
  return (
    <div style={{
      width: calWidth,
      transition: 'width 0.5s',
    }}>
      <CollapseSection
        onViewFullScreen={setIsZoomNumberPostsChart}
        onExitFullScreen={setIsZoomNumberPostsChart}
        onViewLineChart={() => {
          setIsShowLineChart(!isShowLineChart)
        }}
        isShowLineChart={isShowLineChart}
        onBarLineChart
        defaultOpen
        id="barLineChart"
        title="Number of Posts"
      >
        <div
          className={isZoomNumberPostsChart ? `${styles.chartzoom}` : `${styles.chart}`}
          style={{ paddingBottom: '2rem' }}
        >
          {loadingChart ? (
            <div className={styles.loadingScreen}>
              <CircularProgress className={styles.postChartProgress} />
            </div>
          ) : (
            <>
              <Chart
                chart='numberPosts'
                type={isShowLineChart ? 'line' : 'bar'}
                datasets={datasets}
                labels={labels}
              />
            </>
          )}
        </div>
      </CollapseSection>
    </div>
  )
}

export default NumberPostsChart