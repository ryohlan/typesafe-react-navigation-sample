import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TypedNavigatorParams } from './NavigationParams'
import { MainTabNavigator } from './MainTabNavigator'
import { LaunchScreen } from '../screens/LaunchScreen'

const { Navigator, Screen } = createStackNavigator<TypedNavigatorParams<'MainNavigator'>>()

export const MainNavigator = () => {
  return (
    <Navigator mode="card">
      <Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Screen {...LaunchScreen} />
    </Navigator>
  )
}
