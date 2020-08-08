import React from 'react'
import styled from 'styled-components'

const MenuButton = ({ handleOptionChange, value, children, pressed }) => {
  // console.log('pressed ', pressed)

  return (
    <StyledMenuButton
      pressed={pressed}
      value={value}
      onClick={handleOptionChange(value)}>
      {children}
    </StyledMenuButton>
  )
}

export default MenuButton


const StyledMenuButton = styled.button`
  display: block;
  width: 80%;
  max-width: 200px;
  height: 100px;  
  padding: 0.3em 1.3em;
  margin:1em 1.5em 1em 1em;  
  box-sizing: border-box;
  border-radius: 10px;   
  font-weight: 300;
  outline-style: none;
  color: ${props => props.pressed ? 'white' : 'black'};
  background-color: ${props =>
    props.pressed ? props => props.theme.violet :
      props => props.theme.lightPink};
  
 


`
/* ${props => props.theme.lightPink}; */