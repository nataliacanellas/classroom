import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
  flex: 1;

  min-height: 56px;
  max-height: 56px;

  border-radius: 6px;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray_600};
    color: ${theme.colors.white};

    font-size: ${theme.font_size.md}px;
    font-family: ${theme.font_family.regular};
  `}
`
