import React, { useState, useEffect } from 'react'
import dataServices from './services/dataAxios'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/styles/theme'
import {
  calculateTopItemData,
  arrangeSingleValueChart,
  isolateMedicalDictricts,
  arrangeCumulativeValueChart
} from './utills/dataFunctions'

import { AppLayoutGrid } from './components/styles/appLayouts'
import Header from './components/Header'
import Menu from './components/Menu'
import Footer from './components/Footer'
import View from './components/view/View'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [viewSelect, setViewSelect] = useState('infections')
  const [infectionData, setInfectionData] = useState(null)
  const [topViewItemData, setTopViewItemData] = useState(null)
  const [medDistricts, setMedDistricts] = useState(null)
  const [showCumulative, setShowCumulative] = useState(false)
  const [districtToShow, setDistrictToShow] = useState('Kaikki sairaanhoitopiirit')
  const [hospitalisedData, setHospitalisedData] = useState(null)

  useEffect(() => {
    dataServices.getData().then(data => {
      // console.log('data', data)
      setInfectionData(data)
      const topItemData = data.confirmed['Kaikki sairaanhoitopiirit']
      setTopViewItemData(calculateTopItemData(topItemData))
      setMedDistricts(isolateMedicalDictricts(data))
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    dataServices.getHospitalisedData().then(data => {
      setHospitalisedData(data)
    })
  }, [])

  // console.log('hospitalized', hospitalizedData)

  const dataSelect = () => {
    if (infectionData === null) {
      return
    }
    if (viewSelect === 'infections') {
      if (!showCumulative) {
        const infections = infectionData.confirmed[districtToShow]
        return arrangeSingleValueChart(infections)
      } else {
        const infections = infectionData.confirmed[districtToShow]
        return arrangeCumulativeValueChart(infections)
      }
    } else if (viewSelect === 'hospitalised') {
      return hospitalisedData
    }
  }

  const handleCumulativeButtonClick = () => {
    setShowCumulative(!showCumulative)
  }

  const handleDistrictChange = (event, { value }) => {
    // console.log(event)
    //console.log(value)
    setDistrictToShow(medDistricts[value].text)
  }
  // console.log('med districts', medDistricts)

  console.log('app render')

  return (
    <ThemeProvider theme={theme}>
      <AppLayoutGrid>
        <Header />
        <Menu />
        <View active={loading}
          data={dataSelect()}
          topView={topViewItemData}
          districts={medDistricts}
          handleCumulativeClick={handleCumulativeButtonClick}
          cumulative={showCumulative}
          districtToShow={districtToShow}
          districtChange={handleDistrictChange}
        />
        <Footer />
      </AppLayoutGrid>
    </ThemeProvider>
  )
}

export default App
