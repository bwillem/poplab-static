import styled from 'styled-components'
import { mq } from './'

export const Headline = styled.h1`
  font-size: 3em;
  @media screen and (min-width: ${ mq.small }){
    font-size: 4em;
    font-weight: 700;
    line-height: 1.4
  }
`