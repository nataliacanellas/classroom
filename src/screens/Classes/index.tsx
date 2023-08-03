/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Container } from './styles'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { ClassCard } from '@components/ClassCard'
import { FlatList } from 'react-native'
import { EmptyList } from '@components/EmptyList'
import { Button } from '@components/Button'

export const Classes: React.FC = () => {
  const [classes, setClasses] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewClass() {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />
      <Highlight title={'Classes'} subtitle={'Manage your classes easily'} />
      <FlatList
        data={classes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ClassCard title={item} />}
        contentContainerStyle={classes.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <EmptyList message="No classes found. Try adding a new class.." />
        )}
      />

      <Button title="Create new class" onPress={handleNewClass} />
    </Container>
  )
}
