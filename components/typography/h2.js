import React from 'react'
import styled from 'styled-components'

const StyledH2 = styled.h2`
  display: flex;
  flex: 1 1 100%;
  margin: 16px 0;
`

export default function H2({ children }) {
  return (
    <StyledH2>{children}</StyledH2>
  )
}
