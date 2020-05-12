import React from 'react'
import moment from 'moment'

import { ChartContainer } from '../styles/chartStyles'
import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts'

const BasicBarchart = ({ data }) => {

  return (
    <ChartContainer>
      <ResponsiveContainer width={'99%'} height={600}>
        <BarChart
          data={data}
          margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            type='category'
            dataKey='date'
            tickCount={20}

            domain={['dataMin', 'dataMax']}
            angle={40}
            tickFormatter={(unixTime) => moment(unixTime).format('MMMM-DD')}
            style={{ textAnchor: 'start' }}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(unixTime) => moment(unixTime).format('MMMM-DD')}
          />
          <Legend
            verticalAlign='top'           
          />
          <Bar name='sairaalassa' dataKey='inWard' stackId='a' fill='#5D001E' />
          <Bar name='tehohoidossa' dataKey='inIcu' stackId='a' fill='#E3AFBC' />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default BasicBarchart