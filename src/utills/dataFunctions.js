
const lastIndexNotZero = (data) => {
  let index = data.length - 1
  for (index; index >= 0; index--) {
    if (data[index].value !== 0) {
      return index
    }
  }
}

export const calculateTopItemData = (data) => {
  const lastIndex = lastIndexNotZero(data)
  // console.log('last index', lastIndex)

  let dataArray = []
  dataArray.push(
    data.reduce((sum, day) => {
      return sum + day.value
    }, 0))

  dataArray.push(data.slice(lastIndex - 7, lastIndex).reduce((sum, day) => {
    return sum + day.value
  }, 0))

  // console.log('last index', lastIndex)
  // console.log('data 131', data[51])

  dataArray.push(data[lastIndex].value)

  let trendSum = 0
  for (let i = lastIndex - 10; i < lastIndex; i++) {
    trendSum = trendSum + (data[i - 1].value - data[i].value)
  }
  dataArray.push(trendSum)
  return dataArray
}

export const arrangeSingleValueChart = (data) => {
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

export const arrangeCumulativeValueChart = (data) => {
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


export const isolateMedicalDictricts = (data) => {
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

