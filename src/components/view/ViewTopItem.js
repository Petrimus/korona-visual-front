import React from 'react'
import PropTypes from 'prop-types'

import { StyledItemContainer, ItemValue } from '../styles/viewStyles'

const ViewTopItem = ({ text, border, displayData }) => {
  const showBorder = border ? true : false
  // console.log('border', showBorder)

  return (
    <StyledItemContainer border={showBorder}>
      <p>
        {text}
      </p>
      <ItemValue>
        <span style={{ display: 'inline-block' }}>{displayData}</span>
        <span style={{ fontSize: '20px' }}> kpl.</span>
      </ItemValue>
    </StyledItemContainer>
  )
}

export default ViewTopItem

ViewTopItem.propTypes = {
  text: PropTypes.string,
  boreder: PropTypes.bool,
  displayData: PropTypes.number
}

