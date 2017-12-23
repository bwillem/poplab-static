import React from 'react'
import {
  FixedWidthRow,
  BlueText,
  H2,
  Column,
  FadingImg,
  CenteredImg,
} from '../uiLibrary'
import styled from 'styled-components'
import {
  imgCycleTime,
} from '../uiLibrary/constants'

const imgUrls = [{
  url: './desktop.png',
  width: '',
}, {
  url: './tablet.png',
  width: '280',
}, {
  url: './phone.png',
  width: '200',
}]

export class Slider extends React.Component {
  state = {
    activeUrl: imgUrls[0].url,
    index: 0,
    imgWidth: '',
  }
  
  cycleUrls = time => {
    setTimeout(() => {
      let newI = this.state.index + 1
      if (newI === 3) newI = 0 
      console.log('new index', newI)
      this.setState({
        index: newI,
        activeUrl: imgUrls[newI].url,
        imgWidth: imgUrls[newI].width,
      })
    }, time)
    console.log(this.state.index, this.state.activeUrl)
    return <FadingImg 
      width={ this.state.imgWidth }
      src={ this.state.activeUrl } 
      alt='poplab-img' />
  }

  render() {
    return (
      <React.Fragment>
        { this.cycleUrls(imgCycleTime) }
      </React.Fragment>
    )
  }
}

export const Second = props => {
  return (
      <FixedWidthRow>
        <Column span={6}>
        <H2>
          <BlueText>poplab</BlueText> helps build timeless products and interfaces
        </H2>
        </Column> 
        <Column span={6} className='pr'>
          <CenteredImg width='160' src={ './heartRoute.png' } alt="poplab-gradient-route"/>
          <Slider />
        </Column>
      </FixedWidthRow>  
  );
}