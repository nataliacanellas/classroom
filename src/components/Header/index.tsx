import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft, BackButton, Container, Logo } from './styles'

import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}

export const Header: React.FC<Props> = ({ showBackButton = false }) => {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('classes')
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <ArrowLeft />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
