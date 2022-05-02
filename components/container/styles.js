import breakpoints from '../utils/breakpoints'
import styled from 'styled-components'

export const StyledContainer = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
  margin: 16px 0;
  padding: 16px;

  @media only screen and ${breakpoints.device.lg} {
    width: 1200px;
  }
`
