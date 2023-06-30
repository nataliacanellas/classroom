import React from 'react'
import { Container, Message } from './styles'

type Props = {
  message: string
}

export const EmptyList: React.FC<Props> = ({ message }) => {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  )
}
