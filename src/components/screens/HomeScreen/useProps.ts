import { Props } from './Layout'
import { Screens } from '@src/components/navigators/NavigationParams'
import { useNavigation } from '@src/hooks/useNavigaton'

export const useProps = (_params: Screens['home']): Props => {
  const navigation = useNavigation()
  return {
    onPressLaunchScreen: () => {
      navigation.navigate('AppNavigator', {
        screen: 'AuthNavigator',
        params: {
          screen: 'signup',
          params: { signupParam: '' },
        },
      })
    },
  }
}
