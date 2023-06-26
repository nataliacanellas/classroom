import styled from 'styled-components/native'
import { ChevronLeft } from 'react-native-feather'

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

export const ArrowLeft = styled(ChevronLeft).attrs(({ theme }) => ({
  stroke: theme.colors.white,
  width: 32,
  height: 32,
}))``
