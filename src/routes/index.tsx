import { View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'
import { useTheme } from 'styled-components/native'

export function Routes() {
  const { colors } = useTheme()
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray_700 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
