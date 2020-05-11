import React from 'react'
import styled from 'styled-components'

import { StyledHeader } from './styles/StyledHeader'
import { HeaderLayout } from './styles/appLayouts'

const Header = () => (
  <HeaderLayout >
    <StyledHeader>
      <HeaderText>
        Korona-info
      </HeaderText>
    </StyledHeader>
  </HeaderLayout>
)

export default Header

const HeaderText = styled.h1`
  color: ${props => props.theme.whiteSmoke};
  font-size: 36px;
  font-weight: bold;
`