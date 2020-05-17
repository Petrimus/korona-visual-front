
const lastIndexNotZero = (data) => {
  let index = data.length - 1
  for (index; index >= 0; index--) {
    if (data[index].value !== 0) {
      return index
    }
  }
}

const getSum = (data) => {
  const retSum = data.reduce((sum, day) => {
    return sum + day.value
  }, 0)

  return retSum
}

const getSumLastSevenDays = (data) => {
  const lastIndex = lastIndexNotZero(data)
  const retSum = data.slice(lastIndex - 7, lastIndex).reduce((sum, day) => {
    return sum + day.value
  }, 0)

  return retSum
}

const getDiffMovingAvg = (data) => {
  const lastIndex = lastIndexNotZero(data)

  let sum1 = 0
  let sum2 = 0

  if (lastIndex > 14) {
    for (let i = 0; i < 7; i++) {
      sum1 = data[lastIndex - i].value
    }

    for (let j = 7; j < 14; j++) {
      sum1 += data[lastIndex - j].value
    }

    const avg1 = Math.round(sum1 / 7)
    const avg2 = Math.round(sum2 / 7)

    return avg2 - avg1
  }
}

const contructTopViewData = (infection, hospi, exit) => {
  const lastHospi = lastIndexNotZero(hospi)

  const allDictrictsInfection = infection.confirmed['Kaikki sairaanhoitopiirit']
  const ary = []
  ary.push(getSum(allDictrictsInfection))
  ary.push(getSumLastSevenDays(allDictrictsInfection))
  ary.push(hospi[lastHospi].totalHospitalised)
  ary.push(getSum(exit))
  ary.push(getDiffMovingAvg(allDictrictsInfection))

  return ary
}

const arrangeDataToSingleValue = (data) => {
  const lastIndex = lastIndexNotZero(data)
  const retAry = []
  for (let index = 0; index <= lastIndex; index++) {
    const day = data[index]
    const obj = {
      date: Date.parse(day.date),
      value: day.value
    }
    let sum = 0
    if (index > 6) {
      for (let j = 7; j > 0; j--) {
        sum += data[index - j].value
      }
      const avg = Math.round(sum / 7)
      obj.movAvg = avg
    }
    retAry.push(obj)
  }

  return retAry
}

const arrangeCumulativeValueChart = (data) => {
  const retArray = []
  data.reduce((sum, day) => {
    const plus = sum + day.value
    const obj = {
      date: Date.parse(day.date),
      value: plus
    }
    retArray.push(obj)
    return plus
  }, 0)
  return retArray
}


const isolateMedicalDictricts = (data) => {
  const districts = Object.getOwnPropertyNames(data['confirmed']).sort()
  const retArray = districts.map((dist, index) => {
    return {
      key: index,
      text: dist,
      value: index
    }
  })
  return retArray
}

export default {
  isolateMedicalDictricts,
  arrangeCumulativeValueChart,
  arrangeDataToSingleValue,
  contructTopViewData
}