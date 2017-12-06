import React from 'react'
import styled from 'styled-components'
import NavBar from '../navBar/NavBar'
import { 
  Row,
  Column,
  FixedWidthRow,
  Button,
  Headline,
  BlueText,
  RouteImageMain,
  mq,
} from '../uiLibrary'

const StyledBackground = styled.section`
  height: 100vh;
  background: linear-gradient(
    transparent,
    rgba(55, 184, 254, 0.22))
`
const StyledVerticalCenter = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
const StyledHideOnSmall = styled.span`
  display: none;
  @media screen and (min-width: ${ mq.small }) {
    display: block
  }
`
const StyledHideOnMedium = styled.span`
  display: none;
  @media screen and (min-width: ${ mq.medium }) {
    display: block
  }
`
const StyledImg = styled.img`
  width: 360px;
  position: absolute;
  right: 32px;
  top: 28%;
  @media screen and (min-width: ${ mq.large }) {
    right: 18%;
  }
`
export const Main = props => {
  return (
    <StyledBackground>
      <NavBar />
      <FixedWidthRow>
        <Column span='10'>
          <StyledVerticalCenter>
            <Headline>
              <BlueText>The web</BlueText> is a busy place.<br></br>
              Let's find your way.
            </Headline>
            <Button>
              request a quote
            </Button>
          </StyledVerticalCenter>
        </Column>
        <Column span='2'>
          <StyledHideOnMedium>
            <StyledImg src={ '../Union.png' } alt='poplab-route-illustration'/>
          </StyledHideOnMedium>
        </Column>
      </FixedWidthRow>
    </StyledBackground>
  )
}