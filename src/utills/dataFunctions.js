/*
const parseDate = (isoDate) => {
  // console.log('parsedate')

  const month = ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu']
  const newDate = isoDate.replace(
    /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d{3})(\w{1})/,
    ($0, $1, $2, $3) => {

      return month[$2 - 1] + ' ' + $3
    }
  )
  return newDate
}
*/
// month[$2 -1] + ' ' + $3
// "2020-01-02T15:00:00.000Z"

const lastValueIndex = (data) => {
  let index = data.length - 1
  for (index; index >= 0; index--) {
    console.log('data at index', data[index])

    if (data[index].value !== 0) {
      return index
    }
  }
}

export const calculateTopItemData = (data) => {
  const lastIndex = lastValueIndex(data)
  console.log('last index', lastIndex)

  let dataArray = []
  dataArray.push(
    data.reduce((sum, day) => {
      return sum + day.value
    }, 0))

  dataArray.push(data.slice(lastIndex - 7, lastIndex).reduce((sum, day) => {
    return sum + day.value
  }, 0))

  console.log('last index', lastIndex)
  console.log('data 131', data[51])

  dataArray.push(data[lastIndex].value)

  let trendSum = 0
  for (let i = lastIndex - 10; i < lastIndex; i++) {
    trendSum = trendSum + (data[i - 1].value - data[i].value)
  }
  dataArray.push(trendSum)
  return dataArray
}

export const arrangeSingleValueChart = (data) => {
  const array = data.map(day => {
    const newObject = {
      date: Date.parse(day.date),
      value: day.value,
    }
    return newObject
  })
  return array
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


// 2020-01-01T15:00:00.000Z  , "+$1+" - "+$4%12+":"+$5+(+$4>12?"PM":"AM")+" "+$6

