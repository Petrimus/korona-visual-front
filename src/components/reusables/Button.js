import React from 'react'
import styled from 'styled-components'

const Button = (props) => {

  return (
    <StandardButton
      color={props.color}
      onClick={props.handleButtonClick}
      fontSize={props.fontSize}
    >
      {props.children}
    </StandardButton>
  )
}

export default Button

const StandardButton = styled.button`
    display: inline-block;
    padding: 0.5em 1em;
    margin:0 1.5em 10px 1em;    
    border-radius: 1em;
    box-sizing: border-box;    
    font-weight: 300;
    outline-style: none;
    color: #FFFFFF;
    background-color: ${(props) => (props.color ? props.theme[props.color] : '#7395AE')};
    text-align: center;
    transition: all 0.2s;
    font-size: ${props => props.fontSize ? props.fontSize : '20px'};
  
  &:hover {
    background-color: ${(props) => props.theme.lightPink};
  }  
  `

