import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 14px;
`

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`

export const ArrowLeft = styled(Feather).attrs(({ theme }) => ({
  name: 'chevron-left',
  color: theme.colors.white,
  size: 32,
}))``
