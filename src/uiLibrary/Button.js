import styled from 'styled-components'
import { colors } from './'

export const Button = styled.button`
  cursor: pointer;
  color: white;
  background: ${ colors.royalBlue };
  text-transform: uppercase;
  padding: 12px 32px;
  border: none;
  box-shadow: 0 0 4px 2px #b7b7b717;
  letter-spacing: 0.05em;
  font-weight: lighter;
`