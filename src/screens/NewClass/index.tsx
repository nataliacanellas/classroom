import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { Container, Content, Icon } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Button } from '@components/Button'
import { Input } from '@components/Input'

export const NewClass: React.FC = () => {
  const navigation = useNavigation()
  const [classroom, setClassroom] = useState('')

  function handleNew() {
    navigation.navigate('students', { classroom })
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight title="New Class" subtitle="Create the class and add your students" />

        <Input placeholder="Class name" onChangeText={setClassroom} />

        <Button title="Create" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  )
}
