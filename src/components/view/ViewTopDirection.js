import React from 'react'
import PropTypes from 'prop-types'


import { Icon } from 'semantic-ui-react'

import { StyledItemContainer, ItemValue } from '../styles/viewStyles'


const ViewTopDirection = ({ direction, text, border }) => {
  const showBorder = border ? true : false

  let name = 'arrow up'
  let color = 'red'
  if (direction === 0) {
    name = 'arrow right'
    color = 'yellow'
  } else if (direction < 0) {
    name = 'arrow down'
    color = 'green'
  }


  return (
    <StyledItemContainer
      border={showBorder}
    >
      <p>
        {text}
      </p>
      <ItemValue>
        <Icon
          name={name}
          color={color}
          size='large' />
      </ItemValue>
    </StyledItemContainer>
  )
}

export default ViewTopDirection

ViewTopDirection.propTypes = {
  text: PropTypes.string,
  displayData: PropTypes.number
}



