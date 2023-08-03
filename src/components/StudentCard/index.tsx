import React from 'react'
import { Container, Icon, Name } from './styles'
import { ButtonIcon } from '../ButtonIcon'

type Props = {
  name: string
  onRemove: () => void
}

export const StudentCard: React.FC<Props> = ({ name, onRemove }) => {
  return (
    <Container>
      <Icon name="user" />

      <Name>{name}</Name>

      <ButtonIcon icon="x" type="secondary" onPress={onRemove} />
    </Container>
  )
}
