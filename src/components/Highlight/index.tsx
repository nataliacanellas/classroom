import React from 'react'

import { Container, Subtitle, Title } from './styles'

type Props = {
  title: string
  subtitle: string
}

export const Highlight: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
