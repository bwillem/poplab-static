import React, { Fragment } from 'react'
import { 
  FixedWidthRow,
  Column, 
  CenteredImg,
  H2,
  BlueText,
} from '../uiLibrary'

export const Fourth = props => <Fragment>
  <FixedWidthRow>
    <Column span={4} className='pr'>
      <CenteredImg src={ './discover.png' } height='120' />
      <H2>
        <BlueText>
          Discover
        </BlueText>
      </H2>
      <p>poopoo diareah bum penis</p>
    </Column>  
    <Column span={4} className='pr'>
      <CenteredImg src={ './design.png' } height='120' />
      <H2>
        <BlueText>
          Design
        </BlueText>
      </H2>
      <p>poopoo diareah bum penis</p>
    </Column>  
    <Column span={4} className='pr'>
      <CenteredImg src={ './develop.png' } height='120' />
      <H2>
        <BlueText>
          Design
        </BlueText>
      </H2>
      <p>poopoo diareah bum penis</p>
    </Column>  
  </FixedWidthRow>
</Fragment>