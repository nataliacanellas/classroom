import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Title, FilterStyleProps } from './styles'

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string
  }

export const Filter: React.FC<Props> = ({ title, isActive = false, ...rest }) => {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
