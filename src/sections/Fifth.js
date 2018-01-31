import React from 'react'
import styled from 'styled-components'
import {
  aboutInfo
} from '../data'
import { 
  FixedWidthRow,
  shadows,
  colors,
  Column,
  Row,
} from '../uiLibrary'

const GridBackground = styled.div`
  background-color: ${ colors.royalBlue }
`

const SquareWithShadow = styled.div`
  background-color: white;
  box-shadow: ${ shadows.drop };
  height: 80%;
  padding: 2em;
  margin: 1em;
  position: relative
`

const CircleWithShadow = styled.div`
  background-color: white;
  box-shadow: ${ shadows.drop };
  border-radius: 50%;
  height: 120px;
  width: 120px;
  position: absolute;
  top: -64px;
  left: -64px
`

// UPDATE STYLED-COMPONENTS
export class Fifth extends React.Component {
  state = {
    aboutIndex: 0,
  }

  getInfo = index => {
    return aboutInfo[index].text
  }

  render () {
    return <GridBackground>
      <FixedWidthRow>
        <Column span={6}>  
          <SquareWithShadow>
            { this.getInfo(this.state.aboutIndex) }
          </SquareWithShadow>
        </Column>
        <Column span={6}>
          <SquareWithShadow>
            <CircleWithShadow /> 
            <button id='0' onClick={e => this.setState({aboutIndex: e.target.id})}>
              test click
            </button>
            <button id='1' onClick={e => this.setState({aboutIndex: e.target.id})}>
              test click
            </button>
            <button id='2' onClick={e => this.setState({aboutIndex: e.target.id})}>
              test click
            </button>
          </SquareWithShadow>
        </Column>
      </FixedWidthRow>
    </GridBackground>
  }
}