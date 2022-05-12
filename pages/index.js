import Container from '../components/container'
import H2 from '../components/typography/h2'
import Head from 'next/head'
import HeroSection from '../components/hero'
import Link from 'next/link'
import List from '../components/list'
import ListItem from '../components/list/item'
import P, { StyledP } from '../components/typography/p'
import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
`

const StyledBox = styled.div`
  display: flex;
  flex: 1 1 100%;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;

  img {
    margin-left: 16px;
  }
`

const StyledBox2 = styled(StyledBox)`
  margin-right: 32px;
  width: 210px;
  max-width: 210px;

  img {
    display: flex;
    flex: 1 1 100%;

    width: 210px;
    max-width: 210px;
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

const P2 = styled(StyledP)`
  margin: 30px auto;
  max-width: 640px;
`

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

      <P2>Can you eat your way to the top? Fight, Jump, and Climb up the Jelly Dragon's tower using your sticky, sweet powers! Nom on grumpy jellies as you ascend to yummy victory!</P2>

      <StyledBox>
        <StyledH1>Game Creators</StyledH1>

        <StyledBox2>
          <img src="/img/bitmoji_chris.png" />
          <StyledHeader>Chris Abrams</StyledHeader>
          <P>Originated from a small east Texas town, Texas A&amp;M alum, father of two. Day job is crypto, night job is Unity.</P>
        </StyledBox2>
        <StyledBox2>
          <img src="/img/bitmoji_salwa.png" />
          <StyledHeader>Salwa Mohammed</StyledHeader>
          <P>Born in Kuwait, graduated from Denver and have been teaching Math for countless years. I thrive on challenges and love to learn.</P>
        </StyledBox2>
        <StyledBox2>
          <img src="/img/headshot_james.png" />
          <StyledHeader>James Burns</StyledHeader>
          <P>Journeying from a small rural community in Appalachia. From door-to-door sales in high school, to a Fortune 500 industrial company, to my current software studies- I've been aggressively pursuing the American Dream.</P>
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
