/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react'
import { Container, Form, ListHeader, NumberofStudents } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { ButtonIcon } from '@components/ButtonIcon'
import { Filter } from '@components/Filter'
import StudentCard from '@components/StudentCard'
import { EmptyList } from '@components/EmptyList'
import { Button } from '@components/Button'
import { FlatList } from 'react-native'

export const Students: React.FC = () => {
  const [group, setGroup] = useState('Group A')
  const [students, setStudents] = useState([])

  return (
    <Container>
      <Header showBackButton />
      <Highlight title="Class Name" subtitle="Add students and divide into groups" />
      <Form>
        <Input placeholder="Student's name" autoCorrect={false} />
        <ButtonIcon icon="plus" />
      </Form>
      <ListHeader>
        <FlatList
          data={['Group A', 'Group B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter title={item} isActive={item === group} onPress={() => setGroup(item)} />
          )}
          horizontal
        />
        <NumberofStudents>{students.length}</NumberofStudents>
      </ListHeader>
      <FlatList
        data={students}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <StudentCard name={item} onRemove={() => {}} />}
        ListEmptyComponent={() => <EmptyList message="No students added to this group" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{ paddingBottom: 100 }, students.length === 0 && { flex: 1 }]}
      />
      <Button title="Remove Group" type="secondary" />
    </Container>
  )
}
