import React from 'react'
// import PropTypes from 'prop-types'

import ViewTopItem from './ViewTopItem'
import ViewTopDirection from './ViewTopDirection'
import { StyledViewTop } from '../styles/viewStyles'

const ViewTop = ({ topView }) => {

  if (!topView && topView.length === 0) {
    return null
  }

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
        text='Sairaalahoidossa '
        displayData={topView[2]}
      />
      <ViewTopItem border
        text='Menehtyneet '
        displayData={topView[3]}
      />
      <ViewTopDirection
        direction={topView[4]}
        text='tartuntojen trendi'
      />
    </StyledViewTop>
  )
}

export default ViewTop