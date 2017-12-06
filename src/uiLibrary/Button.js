import styled from 'styled-components'
import { colors } from './'

export const Button = styled.button`
  cursor: pointer;
  color: white;
  background: ${ colors.royalBlue };
  text-transform: uppercase;
  padding: ${ props => props.small ? `14px 22px` : `14px 32px`};
  border: none;
// box-shadow: 0 0 4px 2px #b7b7b717
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  letter-spacing: 0.08em;
  font-weight: lighter;
  transition: background .2s;
  &:hover {
    background: ${ colors.darkRoyalBlue };
    transition: background .33s
  }
`