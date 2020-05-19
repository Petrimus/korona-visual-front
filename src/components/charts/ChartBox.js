import React from 'react'
import styled from 'styled-components'
import { Header } from 'semantic-ui-react'

const StyledChartBox = styled.div`
margin: 0 auto;
padding-top: 0.5em;
width: 90%;
height: 600px;
background-color: white;
border-radius: 5px;

`


const ChartBox = ({
  children,
  title
}) => {
  return (
    <StyledChartBox>
      <Header
        style={{ marginTop: 10 }}
        as='h2'
      >
        {title}
      </Header>
      {children}
    </StyledChartBox>
  )
}

export default ChartBox