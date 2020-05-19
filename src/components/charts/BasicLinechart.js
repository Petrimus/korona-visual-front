import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fi'

import { LineChart, XAxis, YAxis, Tooltip, Legend, Label, CartesianGrid, Line, ResponsiveContainer } from 'recharts'
// import { ChartContainer } from '../styles/chartStyles'
moment.locale('fi')

const BasicLinechart = ({ data, labelValue, mainLineName }) => {
  return (
    <ResponsiveContainer width={'99%'} height={500}>
      <LineChart data={data}
        margin={{ top: 10, right: 40, left: 40, bottom: 50 }}
      >
        <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
        <XAxis
          type='number'
          dataKey='date'
          scale='time'
          /* tickCount={10} */
          /* interval={0} */
          domain={['adataMinuto', 'dataMax']}
          angle={-40}
          tickFormatter={(unixTime) => moment(unixTime).format('MMM-DD')}
          dy={5}
          style={{ textAnchor: 'end' }}
        >
        </XAxis>
        <YAxis
          dataKey='value'
        >
          <Label
            value={labelValue}
            position='left'
            angle={-90}
            style={{ textAnchor: 'middle' }}
          />
        </YAxis>
        <Tooltip
          labelFormatter={(unixTime) => moment(unixTime).format('MMM-DD')} />
        <Legend verticalAlign='top' height={36} />
        <defs>
          <linearGradient id='value' x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#540d6e" />
            <stop offset="25%" stopColor="#c14bbb" />
            <stop offset="50%" stopColor="#ff0000" />
            <stop offset="75%" stopColor="#ff8317" />
            <stop offset="100%" stopColor="#ffdd21" />
          </linearGradient>
        </defs>
        <Line
          name={mainLineName}
          dataKey='value'
          dot={false}
          type={'monotone'}
          stroke='url(#value)'
          strokeWidth='3px'
        />
        <Line
          name='7 pv liukuva keskiarvo'
          dataKey='movAvg'
          dot={false}
          type={'natural'}
          stroke='#E3AFBC'
          strokeWidth='3px'
        />
      </LineChart>
    </ResponsiveContainer >
  )
}

export default BasicLinechart

BasicLinechart.propTypes = {
  data: PropTypes.array
}