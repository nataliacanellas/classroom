import React from 'react'
import { ArrowLeft, BackButton, Container, Logo } from './styles'

import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}

export const Header: React.FC<Props> = ({ showBackButton = false }) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <ArrowLeft />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  )
}
