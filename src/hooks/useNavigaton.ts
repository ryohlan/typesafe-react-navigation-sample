import { useNavigation as useDefaultNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { NavigationParams } from '@src/components/navigators/NavigationParams'

export const useNavigation = () => useDefaultNavigation<StackNavigationProp<NavigationParams>>()
