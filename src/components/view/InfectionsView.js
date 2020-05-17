import React, { useState } from 'react'

import { Dropdown, Menu } from 'semantic-ui-react'
import BasicLinechart from '../charts/BasicLinechart'
import BasicAreaChart from '../charts/BasicAreaChart'

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

export default InfectionView