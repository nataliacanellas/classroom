import React from 'react'

import { Container, Content, Icon } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export const NewClass: React.FC = () => {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight title="New Class" subtitle="Create the class and add your students" />

        <Input placeholder="Class name" />

        <Button title="Create" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
