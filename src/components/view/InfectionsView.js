import React, { useState } from 'react'

import { Dropdown, Menu } from 'semantic-ui-react'
import BasicLinechart from '../charts/BasicLinechart'
import BasicAreaChart from '../charts/BasicAreaChart'
import ChartBox from '../charts/ChartBox'

import { StyledViewOptions } from '../styles/viewStyles'
import { StandardButton } from '../styles/button'


const InfectionView = ({
  data,
  districts,
  handleCumulativeClick,
  cumulative,
  districtChange,
  districtToShow
}) => {

  const [showAll, setShowAll] = useState(false)

  const handleShowChange = () => {
    setShowAll(!showAll)
  }

  const chartToShow = () => {
    if (cumulative) {
      return (
        <ChartBox
          title={`Kumulatiiviset artunnat [${districtToShow}]`}
        >
          <BasicAreaChart
            data={showAll ? data : data.slice(data.length - 80, data.length)}
          />
        </ChartBox>
      )
    } else {
      return (
        < ChartBox
          title={`Tartunnat [${districtToShow}]`}
        >
          <BasicLinechart
            data={showAll ? data : data.slice(data.length - 80, data.length)}
            labelValue='Tartunnat kpl.'
            mainLineName='Tartunnat'
          />
        </ChartBox>
      )
    }
  }

  return (
    <React.Fragment>
      <StyledViewOptions>
        <Menu >
          <Dropdown
            placeholder={districtToShow}
            options={districts}
            search selection
            onChange={districtChange}
          />
        </Menu>
        <StandardButton
          name='infections'
          color='violet'
          onClick={handleCumulativeClick('infections')}
        >
          {cumulative ? 'Yksittäin' :'Kumulatiivenen'}
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

export default InfectionView