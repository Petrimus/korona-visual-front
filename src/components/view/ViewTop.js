import React from 'react'
// import PropTypes from 'prop-types'

import ViewTopItem from './ViewTopItem'
import { StyledViewTop } from '../styles/viewStyles'

const ViewTop = ({ topView }) => {


  return (

    <StyledViewTop>
      <ViewTopItem border
        text='Tartunnat yhteensä '
        displayData={topView[0]}
      />
      <ViewTopItem border
        text='Tartunnat viim. 7 pv. '
        displayData={topView[1]}

      />
      <ViewTopItem border
        text='Tartunnat eilen '
        displayData={topView[2]}
      />
      <ViewTopItem text='Tartunnat suunta '
        displayData={topView[3]}
      />
    </StyledViewTop>
  )
}

export default ViewTop