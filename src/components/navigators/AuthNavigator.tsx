import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TypedNavigatorParams } from './NavigationParams'
import { LaunchScreen } from '../screens/LaunchScreen'
import { SignUpScreen } from '../screens/SignUpScreen'

const { Screen, Navigator } = createStackNavigator<TypedNavigatorParams<'AuthNavigator'>>()

export const AuthNavigator = () => {
  return (
    <Navigator mode="card">
      <Screen {...LaunchScreen} />
      <Screen {...SignUpScreen} />
    </Navigator>
  )
}
