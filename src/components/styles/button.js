import styled from 'styled-components'

export const StandardButton = styled.button`
display: inline-block;
padding: 0.5em 1em 0.5em 1em;
margin:0 1.5em 10px 1em;    
border-radius: 5px;
box-sizing: border-box;    
font-weight: 300;
outline-style: none;
color: #FFFFFF;
background-color: ${(props) => (props.color ? props.theme[props.color] : '#7395AE')};
text-align: center;
transition: all 0.2s;

&:hover {
background-color: ${(props) => props.theme.lightPink};
}  
`