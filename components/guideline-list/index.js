import List from '../list'
import ListItem from '../list/item'
import React from 'react'
import styled from 'styled-components'

const StyledGuidelinesRow = styled.div`
  display: flex;
  flex: 1 1 100%;
`

const StyledNumber = styled.span`
  display: flex;
  flex: 1;
  font-weight: bold;
`

const StyledDesc = styled.span`
  display: flex;
  flex: 10;
`

const StyledNote = styled.span`
  display: flex;
  flex: 1 1 100%;
  margin: 16px 0 8px;
`

export default function GuidelinesList({ items }) {

  return (
    <List>{items.map(({ desc, note, number }, i) => {
      return (
        <ListItem key={`guidelines-list-${Date.now()}-${i}`}>
          <StyledGuidelinesRow>
            <StyledNumber>{number}</StyledNumber>
            <StyledDesc>{desc}</StyledDesc>
          </StyledGuidelinesRow>

          {note && <StyledNote>Note: {note}</StyledNote>}
        </ListItem>
      )
    })}</List>
  )

}
