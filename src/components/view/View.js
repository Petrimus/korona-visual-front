import React from 'react'
import { Loader, Dropdown, Menu } from 'semantic-ui-react'

import Button from '../reusables/Button'
import ViewTopItem from './ViewTopItem'
import BasicLinechart from '../charts/BasicLinechart'
import BasicAreaChart from '../charts/BasicAreaChart'

import { ViewLayout } from '../styles/appLayouts'
import { StyledViewTop, StyledViewOptions } from '../styles/viewStyles'


const View = ({
  active,
  data,
  topView,
  districts,
  handleCumulativeClick,
  cumulative,
  districtChange,
  districtToShow
}) => {
  // console.log('topview ',topView)
  // console.log('topview ', props.topView[2])

  if (active) {
    return (
      <ViewLayout>
        <Loader active={active} size='huge' />
      </ViewLayout>
    )
  }
  if (!active) {
    return (
      <ViewLayout>
        <StyledViewTop>
          <ViewTopItem border
            text='Tartunnat yhteensä '
            displayData={topView[0]}
          />
          <ViewTopItem border
            text='Tartunnat viim. 7 pv. '
            displayData={topView[1]}

          />
          <ViewTopItem border
            text='Tartunnat eilen '
            displayData={topView[2]}
          />
          <ViewTopItem text='Tartunnat suunta '
            displayData={topView[3]}
          />
        </StyledViewTop>
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
        </StyledViewOptions>
        {cumulative ? <BasicAreaChart data={data} /> :
          <BasicLinechart data={data} />
        }
      </ViewLayout >
    )
  }
}

export default View

