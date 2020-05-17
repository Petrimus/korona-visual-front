import React from 'react'

import MenuButton from './MenuButton'
import { MenuLayout } from '../styles/appLayouts'
import { StyledMenu } from '../styles/menuStyles'

const Menu = ({ handleOptionChange, buttonPressed }) => (

  <MenuLayout>
    <StyledMenu>
      <MenuButton
        value='infections'
        handleOptionChange={handleOptionChange}
        pressed={buttonPressed === 'infections' ? true : false}
      >
        Tartunnat
      </MenuButton>
      <MenuButton
        value='hospitalised'
        handleOptionChange={handleOptionChange}
        pressed={buttonPressed === 'hospitalised' ? true : false}
      >
        Sairaalahoidossa
      </MenuButton>
      <MenuButton
        value='exitus'
        handleOptionChange={handleOptionChange}
        pressed={buttonPressed === 'exitus' ? true : false}
      >
        Kuolleet
      </MenuButton>
    </StyledMenu>
  </MenuLayout>
)

export default Menu