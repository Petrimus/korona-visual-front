import React from 'react'
import { Loader } from 'semantic-ui-react'

import ViewTop from './ViewTop'
import InfectionsView from './InfectionsView'
import ExitusView from './ExitusView'
import { ViewLayout } from '../styles/appLayouts'
import BasicBarchart from '../charts/BasicBarchart'
import ChartBox from '../charts/ChartBox'

const View = ({
  active,
  data,
  topViewData,
  districts,
  handleCumulativeClick,
  cumulativeExitus,
  cumulativeInfections,
  districtChange,
  districtToShow,
  viewSelect
}) => {
  // console.log('topview ',topView)
  // console.log('topview ', props.topView[2])
  // console.log('view viewSelect', viewSelect)
  //  console.log('data', data)

  const viewToShow = () => {
    if (viewSelect === 'infections') {
      return (
        <InfectionsView
          data={data}
          districts={districts}
          handleCumulativeClick={handleCumulativeClick}
          cumulative={cumulativeInfections}
          districtChange={districtChange}
          districtToShow={districtToShow}
        />
      )

    } else if (viewSelect === 'hospitalised') {
      return (
        <ChartBox
          title='Sairaalahoidossa'
        >
          <BasicBarchart data={data} />
        </ChartBox>
      )
    } else if (viewSelect === 'exitus') {
      return <ExitusView
        data={data}
        handleCumulativeClick={handleCumulativeClick}
        cumulative={cumulativeExitus}
      />
    }
  }

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
        <ViewTop topView={topViewData} />
        {viewToShow()}
      </ViewLayout >
    )
  }

}
export default View

