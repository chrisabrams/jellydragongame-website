import breakpoints from '../utils/breakpoints'
import styled from 'styled-components'

export const StyledNav = styled.nav`
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  color: #000;
  display: flex;
  flex: 1 1 100%;

  @media only screen and ${breakpoints.device.lg} {
    width: 1200px;
  }
`

export const StyledLogo = styled.h2`
  color: #000;
  display: flex;
  flex: 2;
  font-size: 20px;
  padding: 8px;

  a {
    color: #000;
  }
`

export const StyledUl = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex: 1;
`

export const StyledLi = styled.li`
  align-content: center;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 100%;
  padding: 8px;

  a {
    color: #000;
    text-decoration: none;
  }
`
