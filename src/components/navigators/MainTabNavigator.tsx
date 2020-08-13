import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TypedNavigatorParams } from './NavigationParams'
import { HomeScreen } from '../screens/HomeScreen'

const { Navigator, Screen } = createBottomTabNavigator<TypedNavigatorParams<'MainTabNavigator'>>()

export const MainTabNavigator = () => {
  return (
    <Navigator>
      <Screen {...HomeScreen} />
    </Navigator>
  )
}
