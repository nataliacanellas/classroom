import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type FilterStyleProps = {
  isActive?: boolean
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.green_700};
    `};

  border-radius: 4px;
  margin-right: 12px;

  height: 38px;
  width: 80px;

  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.white};
  `}
`
