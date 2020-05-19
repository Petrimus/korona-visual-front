import React, { useState, useEffect } from 'react'
import dataServices from './services/dataAxios'
import { ThemeProvider } from 'styled-components'
import { theme } from './components/styles/theme'
import functionUtils from './utills/dataFunctions'
import { AppLayoutGrid } from './components/styles/appLayouts'
import Header from './components/Header'
import Menu from './components/menu/Menu'
import Footer from './components/Footer'
import View from './components/view/View'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [viewSelect, setViewSelect] = useState('infections')
  const [infectionData, setInfectionData] = useState(null)
  const [hospitalisedData, setHospitalisedData] = useState(null)
  const [exitusData, setExitusData] = useState(null)
  const [medDistricts, setMedDistricts] = useState(null)
  const [cumulativeInfections, setCumulativeInfections] = useState(false)
  const [cumulativeExitus, setCumulativeExitus] = useState(false)
  const [districtToShow, setDistrictToShow] = useState('Kaikki sairaanhoitopiirit')
  const [topViewData, setTopViewData] = useState([])

  useEffect(() => {
    dataServices.getData().then(data => {
      setInfectionData(data)
      setMedDistricts(functionUtils.isolateMedicalDictricts(data))
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    dataServices.getHospitalisedData().then(data => {
      setHospitalisedData(data)
    })
  }, [])

  useEffect(() => {
    dataServices.getDeathsData().then(data => {
      setExitusData(data)
    })
  }, [])

  useEffect(() => {
    if (infectionData === null || hospitalisedData === null || exitusData === null) {
      return
    }
    setTopViewData(functionUtils.contructTopViewData(infectionData, hospitalisedData, exitusData))
  }, [infectionData, hospitalisedData, exitusData])

  // console.log('hospitalized', hospitalizedData)

  const dataSelect = () => {
    if (infectionData === null) {
      return
    }
    if (viewSelect === 'infections') {
      if (!cumulativeInfections) {
        const infections = infectionData.confirmed[districtToShow]
        return functionUtils.arrangeDataToSingleValue(infections)
      } else {
        const infections = infectionData.confirmed[districtToShow]
        return functionUtils.arrangeCumulativeValueChart(infections)
      }

    } else if (viewSelect === 'hospitalised') {
      return hospitalisedData.slice(hospitalisedData.length - 20, hospitalisedData.length)

    } else if (viewSelect === 'exitus') {
      if (!cumulativeExitus) {
        return functionUtils.arrangeDataToSingleValue(exitusData)
      } else {
        return functionUtils.arrangeCumulativeValueChart(exitusData.sort())
      }
    }
  }

  const handleCumulativeButtonClick = (name) => () => {
    if (name === 'infections') { setCumulativeInfections(!cumulativeInfections) }
    if (name === 'exitus') { setCumulativeExitus(!cumulativeExitus) }
  }

  const handleDistrictChange = (event, { value }) => {
    setDistrictToShow(medDistricts[value].text)
  }

  const handleOptionChange = (value) => () => {
    setViewSelect(value)
  }

  // console.log('view select', viewSelect)
  console.log('hospitalised', hospitalisedData)
  // console.log('exitus data ', exitusData)
  // console.log('infections ', infectionData)
  // console.log('hook top view ', topViewData)
  // console.log('exitus ', exitusData)

  console.log('app render')

  return (
    <ThemeProvider theme={theme}>
      <AppLayoutGrid>
        <Header />
        <Menu
          handleOptionChange={handleOptionChange}
          buttonPressed={viewSelect}
        />
        <View active={loading}
          data={dataSelect()}
          topViewData={topViewData}
          districts={medDistricts}
          handleCumulativeClick={handleCumulativeButtonClick}
          cumulativeInfections={cumulativeInfections}
          cumulativeExitus={cumulativeExitus}
          districtToShow={districtToShow}
          districtChange={handleDistrictChange}
          viewSelect={viewSelect}
        />
        <Footer />
      </AppLayoutGrid>
    </ThemeProvider>
  )
}

export default App
