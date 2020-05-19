import React from 'react'
import moment from 'moment'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts'
// import { ChartContainer } from '../styles/chartStyles'

const BasicAreaChart = ({ data }) => {
  const howManyTicks = Math.round(data.length / 7)

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
          tickCount={howManyTicks}
          interval='preserveEnd'
          domain={['dataMin', 'dataMax']}
          angle={40}
          tickFormatter={(unixTime) => moment(unixTime).format('MMMM-DD')}
          style={{ textAnchor: 'start' }}
        />
        <YAxis />
        <Tooltip labelFormatter={(unixTime) => moment(unixTime).format('MMMM-DD')} />
        <Area type='monotone' dataKey='value' stroke="#8884d8" fill="#E3AFBC" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export default BasicAreaChart