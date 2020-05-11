import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledItemContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 25%;

${(props) => props.border && `
    border-right: 5px solid #5D001E;
  `}
`


const ItemText = styled.div`

  `

const ItemValue = styled.div`
font-size: 30px;
margin: 10px;
`


const ViewTopItem = (props) => {
  const showBorder = props.border ? true : false
  console.log('border', showBorder)

  return (
    <StyledItemContainer border={showBorder}>
      <ItemText>
        {props.text}
      </ItemText>
      <ItemValue>
        <span>{props.displayData}</span>
        <span style={{ fontSize: '20px' }}> kpl.</span>
      </ItemValue>
    </StyledItemContainer>
  )
}

export default ViewTopItem

ViewTopItem.propTypes = {
  text: PropTypes.string,
  displayData: PropTypes.number
}

