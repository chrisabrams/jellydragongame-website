import breakpoints from '../utils/breakpoints'
import { StyledH1 } from '../typography/h1'
import React from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  margin: -16px -16px 0;
  position: relative;

  ${StyledH1} {
    justify-content: center;
  }
`

const StyledHeroOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  display: block;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`

const StyledImg = styled.img`
  display: flex;
  flex: 1 1 100%;
  height: 600px;
  max-width: 100%;
  min-width: 100%;
`

const StyledContent = styled(StyledH1)`
  display: flex;
  flex-direction: column;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`

const StyledHeroH1 = styled(StyledH1)`
  color: #fff;
  display: flex;
  font-size: 38px;

  @media only screen and ${breakpoints.device.sm} {
    font-size: 72px;
  }
`

const StyledButton = styled.a`
  background-color: #ff5f5f;
  border-radius: 6px;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 8px 16px;
`

const StyledButton2 = styled(StyledButton)`
  background-color: #202020;
  margin-top: 16px;
`

export default function HeroSection({ alt, filename, header }) {
  const src = `/img/${filename}`

  return (
    <StyledHeroSection>
      <StyledHeroOverlay aria-hidden="true" />
      <StyledContent>
        <StyledButton href="https://jamesburnsbacon.itch.io/jelly-dragon" target="_new">Play Game</StyledButton>
        <StyledButton2 href="https://youtu.be/iYogLp4mN4c" target="_new">View Trailer</StyledButton2>
      </StyledContent>
      
      <StyledImg alt={alt} src={src} />
    </StyledHeroSection>
  )

}
