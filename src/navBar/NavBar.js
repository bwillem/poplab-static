import React, { Component } from 'react'
import styled from 'styled-components'

import {
  Row,
  Column,
} from '../uiLibrary'
import { Logo } from '../svg/Logo'

const StyledNavContainer = styled.div`
  height: 6em
`
const NavUl = styled.ul`
  list-style: none
`
const NavLi = styled.li`
  display: inline;
  padding: 4px 16px
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledNavContainer>
        <Row>
          <Column span='6'>
            <Logo /> 
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
                Contact
              </NavLi>
            </NavUl>
          </Column>
        </Row>
      </StyledNavContainer>
   )
  }
}