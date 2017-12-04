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
} from '../uiLibrary'

const StyledBackground = styled.section`
  min-height: 100vh;
  background: linear-gradient(
    transparent,
    rgba(55, 184, 254, 0.22))
`
const StyledVerticalCenter = styled.div`
  padding-top: 50%;
  transform: translateY(-50%);
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
          four
        </Column>
      </FixedWidthRow>
    </StyledBackground>
  )
}