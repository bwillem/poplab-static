import styled from 'styled-components'
import { mq } from './'

export const Fourth = styled.div`
  grid-column: span 12;
  @media screen and (min-width: ${ mq.small }) {
    grid-column: span 3
  }
`