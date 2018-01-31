import styled from 'styled-components'
import { mq } from './'

export const Headline = styled.h1`
  font-size: 3em;
  font-weight: 700;
  line-height: 1.4
  @media screen and (min-width: ${ mq.small }){
    font-size: 4em;
  }
`

export const H2 = styled.h2`
  font-size: 2.75em;
  line-height: 1.4;
  @media screen and (min-width: ${ mq.small }){
    font-size: 3em;
  }
`
export const Lead = styled.p`
  font-size: 2.75em;
  font-weight: 700;
  line-height: 1.4;
  @media screen and (min-width: ${ mq.small }){
    font-size: 3em;
  }
`