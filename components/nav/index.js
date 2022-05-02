import Link from 'next/link'
import React from 'react'
import { StyledNav, StyledLogo, StyledUl, StyledLi } from './styles'

export default function Nav() {
  return (
    <StyledNav>
      <StyledLogo>
        <Link href="/">
          <a>Jelly Dragon</a>
        </Link>
      </StyledLogo>
      <StyledUl>
        <StyledLi>
          <Link href="/">
            <a>Home</a>
          </Link>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  )
}
