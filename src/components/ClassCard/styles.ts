import { TouchableOpacity } from 'react-native'
import { Users } from 'react-native-feather'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme }) => theme.colors.gray_200};
`

export const Icon = styled(Users).attrs(({ theme }) => ({
  stroke: theme.colors.green_700,
  width: 32,
  height: 32,
}))`
  margin-right: 20px;
`
