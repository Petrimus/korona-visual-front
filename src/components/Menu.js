import React from 'react'

import MenuButton from './menu/MenuButton'
import { MenuLayout } from './styles/appLayouts'
import { StyledMenu } from './styles/menuStyles'

const Menu = () => (
  <MenuLayout>
    <StyledMenu>
      <MenuButton>Tartunnat</MenuButton>
      <MenuButton>Parantuneet</MenuButton>
      <MenuButton>Kuolleet</MenuButton>
    </StyledMenu>
  </MenuLayout>
)

export default Menu