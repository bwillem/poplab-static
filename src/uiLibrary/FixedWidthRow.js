import styled from 'styled-components'
import { Row } from './'
import { spacing } from './constants'

export const FixedWidthRow = styled(Row)`
  padding: ${spacing.s7} 0;
  margin: ${spacing.s7} 0;
  max-width: 1024px;
  margin: 0 auto
`