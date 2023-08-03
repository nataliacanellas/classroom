import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Classes } from '@screens/Classes'
import { NewClass } from '@screens/NewClass'
import { Students } from '@screens/Students'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="classes" component={Classes} />
      <Screen name="new" component={NewClass} />
      <Screen name="students" component={Students} />
    </Navigator>
  )
}
