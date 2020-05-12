import React, { useState } from 'react'

import { Dropdown, Menu } from 'semantic-ui-react'
import Button from '../reusables/Button'
import BasicLinechart from '../charts/BasicLinechart'
import BasicAreaChart from '../charts/BasicAreaChart'
import { StyledViewOptions } from '../styles/viewStyles'


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
        <Button
          color='violet'
          handleButtonClick={handleCumulativeClick}
        >
          {cumulative ? 'näytä yksittäin' : 'Näytä kumulatiivisesti'}
        </Button>
        <Button
          color='violet'
          handleButtonClick={handleShowChange}
        >
          {showAll ? 'näytä viimeiset 80 pv' : 'näytä koko sarja'}
        </Button>
      </StyledViewOptions>
      {cumulative ? <BasicAreaChart
        data={showAll ? data : data.slice(data.length - 80, data.length)} /> :
        <BasicLinechart data={showAll ? data : data.slice(data.length - 80, data.length)} />
      }
    </React.Fragment>
  )
}

export default InfectionView