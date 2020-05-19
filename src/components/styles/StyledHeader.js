import styled from 'styled-components'

export const StyledHeader = styled.div`
  background-color: ${(props) => props.theme.lightPink};
  margin-left: 100px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.darkRed};
`