import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TypedNavigatorParams } from './NavigationParams'
import { LaunchScreen } from '../screens/LaunchScreen'

const { Screen, Navigator } = createStackNavigator<TypedNavigatorParams<'AuthNavigator'>>()

export const AuthNavigator = () => {
  return (
    <Navigator mode="card">
      <Screen {...LaunchScreen} />
    </Navigator>
  )
}
