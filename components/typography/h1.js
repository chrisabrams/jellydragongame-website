import React from 'react'
import styled from 'styled-components'

export const StyledH1 = styled.h1`
  display: flex;
  flex: 1 1 100%;
  margin: 16px 0;
`

export default function H1({ children }) {
  return (
    <StyledH1>{children}</StyledH1>
  )
}
