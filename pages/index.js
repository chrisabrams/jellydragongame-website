import Container from '../components/container'
import H2 from '../components/typography/h2'
import Head from 'next/head'
import HeroSection from '../components/hero'
import Link from 'next/link'
import List from '../components/list'
import ListItem from '../components/list/item'
import P from '../components/typography/p'
import React from 'react'

export default function IndexPage() {
  return (
    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Jelly Dragon Game" />
      </Head>
      <HeroSection alt="Game Pic" filename="screenshot_01.png" header="Jelly Dragon" />

      <P>Some content</P>
    </Container>
  )
}
