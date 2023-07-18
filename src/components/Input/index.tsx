import React from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

export const Input: React.FC<TextInputProps> = ({ ...rest }) => {
  const { colors } = useTheme()

  return <Container placeholderTextColor={colors.gray_300} {...rest} />
}
