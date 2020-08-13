import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AppNavigaotr } from './AppNavigator'
import { NavigationContainer } from '@react-navigation/native'

const { Navigator, Screen } = createStackNavigator()

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="AppNavigator" component={AppNavigaotr} />
      </Navigator>
    </NavigationContainer>
  )
}
