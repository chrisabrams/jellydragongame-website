import React from 'react'
import styled from 'styled-components'

export const StyledP = styled.p`
  display: flex;
  flex: 1 1 100%;
  line-height: 2;
  margin: 16px 0;
`

export default function P({ children }) {
  return (
    <StyledP>{children}</StyledP>
  )
}
