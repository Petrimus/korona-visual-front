import React from 'react'

import MenuButton from './menu/MenuButton'
import { MenuLayout } from './styles/appLayouts'
import { StyledMenu } from './styles/menuStyles'

const Menu = ({ handleOptionChange }) => (

  <MenuLayout>
    <StyledMenu>
      <MenuButton
        value='infections'
        handleOptionChange={handleOptionChange}
      >
        Tartunnat
      </MenuButton>
      <MenuButton
        value='hospitalised'
        handleOptionChange={handleOptionChange}
      >
        Sairaalahoidossa
      </MenuButton>
      <MenuButton
        value='exitus'
        handleOptionChange={handleOptionChange}
      >
        Kuolleet
      </MenuButton>
    </StyledMenu>
  </MenuLayout>
)

export default Menu