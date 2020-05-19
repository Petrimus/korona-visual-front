import styled from 'styled-components'

export const StyledViewOptions = styled.div`
display: flex;
justify-content: start;
align-items: center;
width: 70%;
margin: 1em auto 1em auto;

`

export const StyledViewTop = styled.div`
height: 6em;
display: flex;
justify-content: center;
align-items: center;
width: 90%;
margin: 1em auto 1em auto;
overflow: hidden;
`

export const StyledItemContainer = styled.div`
  width: 20%;  
  height: 100%;
  ${(props) => props.border && `
    border-right: 5px solid #5D001E;
    `}
`

export const ItemValue = styled.div` 
  height: 100%;
  font-size: 30px;  
  text-align: center;

  @media (max-width: 1000px) { 
      font-size: 24px; 
  }


  @media (max-width: 800px) {  
      font-size: 20px;  
  }
`