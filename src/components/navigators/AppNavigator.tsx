import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { TypedNavigatorParams } from './NavigationParams'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { MainNavigator } from './MainNavigator'
import { AuthNavigator } from './AuthNavigator'
import { CommonStyles } from '@src/assets/styles/CommonStyles'
const { Navigator, Screen } = createStackNavigator<TypedNavigatorParams<'AppNavigator'>>()

export const AppNavigaotr = () => {
  return (
    <KeyboardAvoidingView style={CommonStyles.flexible} behavior={Platform.select({ ios: 'padding' })}>
      <Navigator headerMode="none" mode="modal">
        <Screen name="MainNavigator" component={MainNavigator} />
        <Screen name="AuthNavigator" component={AuthNavigator} />
      </Navigator>
    </KeyboardAvoidingView>
  )
}
