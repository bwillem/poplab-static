import styled from 'styled-components'

export const Column = styled.div`
  grid-column: span 12;
  @media screen and (min-width: 40em) {
    grid-column: span ${ props => props.span } 
  }
`