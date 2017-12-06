import React, { Component } from 'react'
import styled from 'styled-components'

import {
  Row,
  Column,
  Button,
  mq,
} from '../uiLibrary'
import { Logo } from '../svg/Logo'

const StyledNavContainer = styled.header`
  height: 6em;
  max-width: 1440px
`
const NavUl = styled.ul`
  display: none;
  @media screen and (min-width: ${ mq.medium }) {
    display: block;
    text-align: right;
    list-style: none
  }
`
const NavLi = styled.li`
  display: inline;
  padding: 8px 32px
`
const LogoContainer = styled.div`
  padding: 16px;
  @media screen and (min-width: ${ mq.small }) {
    padding: 24px 32px
  }
`
const ShowOnLarge = styled(NavLi)`
  display: none;
  @media screen and (min-width: ${ mq.large }) {
    display: inline
  }
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavContainer>
        <Row>
          <Column span='6'>
            <LogoContainer>
              <Logo width='133'/> 
            </LogoContainer>
          </Column>
          <Column span='6'>
            <NavUl>
              <NavLi>
                Services
              </NavLi>
              <NavLi>
                About
              </NavLi>
              <NavLi>
                Careers
              </NavLi>
              <ShowOnLarge>
                <Button small>
                  request a quote
                </Button>
              </ShowOnLarge>
            </NavUl>
          </Column>
        </Row>
      </StyledNavContainer>
   )
  }
}