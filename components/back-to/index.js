import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const StyledBackTo = styled.div`
  display: flex;
  flex: 1 1 100%;
  margin: 16px 0;
`

export default function BackTo({ href, label }) {
  return (
    <StyledBackTo>
      <Link href={href}>
        <a>Back to {label}</a>
      </Link>
    </StyledBackTo>
  )
}
