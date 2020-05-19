import React from 'react'
import moment from 'moment'

import { ResponsiveContainer, Bar, BarChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid } from 'recharts'

const BasicBarchart = ({ data }) => {

  return (
    <ResponsiveContainer width={'99%'} height={500}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 30, left: 30, bottom: 30 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          interval={0}
          dataKey='date'
          angle={-40}
          tickFormatter={(unixTime) => moment(unixTime).format('MMM-DD')}
          style={{ textAnchor: 'end' }}
          dy={5}
        />
        <YAxis
          dataKey='totalHospitalised'
        />
        <Tooltip
          labelFormatter={(unixTime) => moment(unixTime).format('MMM-DD')}
        />
        <Legend
          verticalAlign='top' height={36}
        />
        <Bar name='Osastolla' dataKey='inWard' stackId='a' fill='#5D001E' />
        <Bar name='Tehohoidossa' dataKey='inIcu' stackId='a' fill='#E3AFBC' />
        <Bar
          name='Sairaalahoidossa'
          dataKey='totalHospitalised'
          stackId='a'
          fill='rgba(0,0,0,1)'
          opacity={0}
          strokeWidth={0}
          legendType="none"
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BasicBarchart