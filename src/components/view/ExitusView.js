import React, { useState } from 'react'

import BasicLinechart from '../charts/BasicLinechart'
import BasicAreaChart from '../charts/BasicAreaChart'

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
  console.log('exitus', data)
  return (
    <React.Fragment>
      <StyledViewOptions>
        <StandardButton
          name='infections'
          color='violet'
          onClick={handleCumulativeClick('exitus')}
        >
          {cumulative ? 'näytä yksittäin' : 'Näytä kumulatiivisesti'}
        </StandardButton>
        <StandardButton
          color='violet'
          onClick={handleShowChange}
        >
          {showAll ? 'näytä viimeiset 80 pv' : 'näytä koko sarja'}
        </StandardButton>
      </StyledViewOptions>
      {cumulative ? <BasicAreaChart
        data={showAll ? data : data.slice(data.length - 80, data.length)} /> :
        <BasicLinechart data={showAll ? data : data.slice(data.length - 80, data.length)} />
      }
    </React.Fragment>
  )
}

export default ExitusView