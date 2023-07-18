import { Users } from 'react-native-feather'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Icon = styled(Users).attrs(({ theme }) => ({
  stroke: theme.colors.green_700,
  width: 54,
  height: 54,
}))`
  align-self: center;
`
