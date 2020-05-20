import React from 'react'
import moment from 'moment'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Label
} from 'recharts'
// import { ChartContainer } from '../styles/chartStyles'

const BasicAreaChart = ({ data, labelValue, mainLineName }) => {

  return (
    <ResponsiveContainer width={'99%'} height={500}>
      <AreaChart
        data={data}
        margin={{ top: 30, right: 60, left: 60, bottom: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type='number'
          dataKey='date'
          scale='time'
          domain={['dataMin', 'dataMax']}
          angle={-40}
          tickFormatter={(unixTime) => moment(unixTime).format('MMM-DD')}
          style={{ textAnchor: 'end' }}
          dy={5}
        />
        <YAxis dataKey='value'>
          <Label
            value={labelValue}
            position='left'
            angle={-90}
            style={{ textAnchor: 'middle' }}
          />
        </YAxis>
        <Tooltip labelFormatter={(unixTime) => moment(unixTime).format('MMM-DD')} />
        <Area
          type='monotone'
          dataKey='value'
          stroke="#8884d8"
          fill="#E3AFBC"
          name={mainLineName}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default BasicAreaChart