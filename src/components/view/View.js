import React from 'react'
import { Loader } from 'semantic-ui-react'

import ViewTop from './ViewTop'
import InfectionsView from './InfectionsView'
import HospitalisedView from './HospitalisedView'
import ExitusView from './ExitusView'
import { ViewLayout } from '../styles/appLayouts'
import BasicBarchart from '../charts/BasicBarchart'

const View = ({
  active,
  data,
  topView,
  districts,
  handleCumulativeClick,
  cumulative,
  districtChange,
  districtToShow,
  viewSelect
}) => {
  // console.log('topview ',topView)
  // console.log('topview ', props.topView[2])
  // console.log('view viewSelect', viewSelect)
  console.log('data', data)


  const viewToShow = () => {
    if (viewSelect === 'infections') {
      return (
        <InfectionsView
          data={data}
          districts={districts}
          handleCumulativeClick={handleCumulativeClick}
          cumulative={cumulative}
          districtChange={districtChange}
          districtToShow={districtToShow}
        />
      )

    } else if (viewSelect === 'hospitalised') {
      return <BasicBarchart data={data} />

    } else if (viewSelect === 'exitus') {
      return <ExitusView />
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
        <ViewTop topView={topView} />
        {viewToShow()}
      </ViewLayout >
    )
  }

}
export default View

