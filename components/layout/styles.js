import breakpoints from '../utils/breakpoints'
import styled from 'styled-components'

export const StyledLayout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  @media only screen and ${breakpoints.device.lg} {
    width: 1200px;
  }
`
