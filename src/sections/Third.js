import React, { Fragment } from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { FixedWidthRow } from '../uiLibrary/index'
import {
  Lead,
  Column,
  SoftWhiteText,
} from '../uiLibrary'
import {
  colors,
  spacing,
} from '../uiLibrary/constants'

const BlueBackground = styled(FixedWidthRow)`
  background: ${ colors.royalBlue };
  box-shadow: 16px 16px 0 rgba(0, 0, 0, 0.33);
  border-radius: 6px;
  position: relative;
  padding: ${ spacing.s6 }
`
const StyleParticles = () => <Particles width={window.innerWidth} style={{    
  position: 'absolute',
  top: 0,
  left: 0,
}}/>

const StyledParticleWrap = styled(StyleParticles)`
  background-color: transparent;
  position: absolute;
`

export const Third = props => <Fragment>
  <BlueBackground id='particles-js'>
  <StyledParticleWrap />
    <Column span='12'>
      <Lead className='ta-r'>
        <SoftWhiteText>
          We’re a  passionate team of professionals bringing creative solutions from ideation to fruition.
        </SoftWhiteText>
      </Lead>
    </Column>
  </BlueBackground>
</Fragment>