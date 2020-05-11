import styled from 'styled-components'

export const AppLayoutGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 200px auto;
  grid-template-rows: 4em auto 4em;
`

export const HeaderLayout = styled.div`
  grid-column: 1/span 2;
  grid-row: 1;
  background-color: ${(props) => props.theme.lightPink}; 
`

export const MenuLayout = styled.div`
  grid-column: 1;
  grid-row: 2;
  background-color: ${(props) => props.theme.darkRed}; 
`

export const ViewLayout = styled.div`
  grid-column: 2/2;
  grid-row: 2; 
  background-color: ${(props) => props.theme.smokeWhite};
  text-align: center; 
`

export const FooterLayout = styled.div`
  grid-column: 1 / span 2;
  grid-row: 3;
  background-color:  ${(props) => props.theme.lightPink};  
`

