import React from 'react'

import { StyledFooter } from './styles/StyledFooter'
import { FooterLayout } from './styles/appLayouts'

const Footer = () => (
  <FooterLayout>
    <StyledFooter>
      <div>
        github:
        <a href='https://github.com/Petrimus/korona-visual'> Github/Petrimus</a>
      </div>
      <div>
        Licence: MIT
      </div>
      <div>
        Source: HS korona api
      </div>
    </StyledFooter>
  </FooterLayout>
)

export default Footer