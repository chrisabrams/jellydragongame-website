import Container from '../components/container'
import H2 from '../components/typography/h2'
import Head from 'next/head'
import HeroSection from '../components/hero'
import Link from 'next/link'
import List from '../components/list'
import ListItem from '../components/list/item'
import P from '../components/typography/p'
import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  margin-top: 32px;

  img {
    margin-left: 16px;
  }
`

const StyledBox2 = styled(StyledBox)`
  flex-wrap: wrap;
  width: 200px;
  max-width: 200px;

  img {
    display: flex;
    flex: 1 1 100%;
    width: 200px;
    max-width: 200px;
  }

  h3 {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
    width: 200px;
    max-width: 200px;
  }
`

const StyledHeader = styled.h3``

export default function IndexPage() {
  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Jelly Dragon Game" />
      </Head>

      <StyledBox>
        <img src="/img/website_logo.png" width={640} />
      </StyledBox>
      
      <HeroSection alt="Game Pic" filename="screenshot_01.png" header="Jelly Dragon" />

      <P>Some content</P>

      <StyledBox>
        <StyledBox2>
          <img src="/img/bitmoji_chris.png" />
          <StyledHeader>Chris Abrams</StyledHeader>
        </StyledBox2>
      </StyledBox>

      <StyledBox>
        <img src="/img/screenshot_02.png" width={480} />
        <img src="/img/screenshot_03.png" width={480} />
      </StyledBox>
      <StyledBox>
        <img src="/img/screenshot_04.png" width={480} />
        <img src="/img/screenshot_05.png" width={480} />
      </StyledBox>
      <StyledBox>
        <img src="/img/screenshot_06.png" width={480} />
        <img src="/img/screenshot_07.png" width={480} />
      </StyledBox>
    </Container>
  )
}
