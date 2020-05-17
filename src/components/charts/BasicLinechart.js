import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { LineChart, XAxis, YAxis, Tooltip, Legend, Label, CartesianGrid, Line, ResponsiveContainer } from 'recharts'
import { ChartContainer } from '../styles/chartStyles'

const BasicLinechart = ({ data }) => {
  // console.log('chart data', data)
  const howManyTicks = Math.round(data.length / 7)
  // console.log(howManyTicks)

  return (
    <ChartContainer>
      <ResponsiveContainer width={'99%'} height={600}>
        <LineChart data={data}
          margin={{ top: 30, right: 60, left: 60, bottom: 60 }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis
            type='number'
            dataKey='date'
            tickCount={howManyTicks}
            interval='preserveEnd'
            domain={['dataMin', 'dataMax']}
            angle={40}

            tickFormatter={(unixTime) => moment(unixTime).format('MMMM-DD')}
            style={{ textAnchor: 'start' }}
          >

          </XAxis>
          <YAxis dataKey='value'>
            <Label
              value={'Tartunnat kpl.'}
              position='left'
              angle={-90}
              style={{ textAnchor: 'middle' }}
            />
          </YAxis>
          <Tooltip labelFormatter={(unixTime) => moment(unixTime).format('MMMM-DD')} />
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
            name='tartunnat'
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
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default BasicLinechart

BasicLinechart.propTypes = {
  data: PropTypes.array
}

/*
domain={['dataMin', 'dataMax']}
 dataKey="date"
<CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
width={700} height="80%"
margin={{ top: 5, right: 30, left: 20, bottom: 5 }}

<Label
            value={'value'}
            position="left"
            angle={-90}
            style={{ textAnchor: 'middle' }}
          />

           <Label
            value={'Time'}
            position='bottom'
            style={{ textAnchor: 'middle' }}
          />

*/