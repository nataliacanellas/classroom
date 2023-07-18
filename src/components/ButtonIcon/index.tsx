import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonIconStyleProps, Container, Icon } from './styles'
import { Feather } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  icon: keyof typeof Feather.glyphMap
  type?: ButtonIconStyleProps
}

export const ButtonIcon: React.FC<Props> = ({ icon, type = 'primary', ...rest }) => {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
