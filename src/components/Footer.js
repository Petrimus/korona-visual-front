import React from 'react'

import { StyledFooter } from './styles/StyledFooter'
import { FooterLayout } from './styles/appLayouts'

const Footer = () => (
  <FooterLayout>
    <StyledFooter>
      <div>
        github: petrimus.github.com
      </div>
      <div>
        MIT licence
      </div>
      <div>
        Source: HS korona api
      </div>
    </StyledFooter>
  </FooterLayout>
)

export default Footer