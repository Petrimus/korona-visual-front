import React, { useState } from 'react'

import BasicLinechart from '../charts/BasicLinechart'
import BasicAreaChart from '../charts/BasicAreaChart'
import ChartBox from '../charts/ChartBox'

import { StyledViewOptions } from '../styles/viewStyles'
import { StandardButton } from '../styles/button'


const ExitusView = ({
  data,
  handleCumulativeClick,
  cumulative,
}) => {

  const [showAll, setShowAll] = useState(false)

  const handleShowChange = () => {
    setShowAll(!showAll)
  }

  const chartToShow = () => {
    if (cumulative) {
      return (
        <ChartBox
          title={'Kumulatiiviset kuolemat'}
        >
          <BasicAreaChart
            data={showAll ? data : data.slice(data.length - 80, data.length)}
          />
        </ChartBox>
      )
    } else {
      return (
        < ChartBox
          title={'Kuolemat'}
        >
          <BasicLinechart
            data={showAll ? data : data.slice(data.length - 80, data.length)}
            labelValue='Kuolleet kpl.'
            mainLineName='Kuolleet'
          />
        </ChartBox>
      )
    }
  }

  return (
    <React.Fragment>
      <StyledViewOptions>
        <StandardButton
          name='exitus'
          color='violet'
          onClick={handleCumulativeClick('exitus')}
        >
          {cumulative ? 'Yksittäin' : 'Kumulatiivinen'}
        </StandardButton>
        <StandardButton
          color='violet'
          onClick={handleShowChange}
        >

          {showAll ? 'Viimeiset 80 pv' : 'Koko sarja'}
        </StandardButton>
      </StyledViewOptions>
      {chartToShow()}
    </React.Fragment>
  )
}

export default ExitusView