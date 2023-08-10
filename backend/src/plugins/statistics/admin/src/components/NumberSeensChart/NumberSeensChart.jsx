import { CircularProgress } from '@material-ui/core'
import React, {useState} from 'react'
import Chart from '../Chart/Chart'
import CollapseSection from '../CollapseSection/CollapseSection'
import styles from './numberSeensChart.module.css'
const NumberSeensChart = ({
  windowSize,
  isZoomNumberSeensChart,
  setIsZoomNumberSeensChart,
  labels,
  datasets,
  loadingChart
}) => {
  const [isShowLineChart, setIsShowLineChart] = useState(false)
  const calWidth =
    windowSize.innerWidth <= 1360 || isZoomNumberSeensChart ? '100%' : '50%'
  return (
    <div style={{
      width: calWidth,
      transition: 'width 0.5s',
    }}>
      <CollapseSection
        onViewFullScreen={setIsZoomNumberSeensChart}
        onExitFullScreen={setIsZoomNumberSeensChart}
        onViewLineChart={() => {
          setIsShowLineChart(!isShowLineChart)
        }}
        isShowLineChart={isShowLineChart}
        onBarLineChart
        defaultOpen
        id="barLineChart"
        title="Number of Views"
      >
        <div
          className={isZoomNumberSeensChart ? `${styles.chartzoom}` : `${styles.chart}`}
          style={{ paddingBottom: '2rem' }}
        >
          {loadingChart ? (
            <div className={styles.loadingScreen}>
              <CircularProgress className={styles.postChartProgress} />
            </div>
          ) : (
            <>
              <Chart
                chart='numberSeens'
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

export default NumberSeensChart