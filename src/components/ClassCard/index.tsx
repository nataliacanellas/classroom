import React from 'react'

import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

export const ClassCard: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  )
}
