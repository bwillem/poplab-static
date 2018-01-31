import React from 'react'
import styled, { keyframes } from 'styled-components'
import {
  imgCycleTime,
} from './constants'

const fadeInFadeOut = keyframes`
  0% {
    opacity: 0; 
  }
  10% {
    opacity: 0; 
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`

export const AbsoluteCenteredImg = styled.img`
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

export const CenteredImg = styled.img`
  max-width: 100%;
  margin: 0 auto
`
export const FadingImg = styled.img`
  max-width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  animation: ${fadeInFadeOut} ${imgCycleTime}ms linear infinite;
`
