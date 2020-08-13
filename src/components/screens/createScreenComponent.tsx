import React, { FC } from 'react'
import { useRoute } from '@react-navigation/native'
import { Screens } from '../navigators/NavigationParams'

export const createScreenComponent = <T extends keyof Screens>(
  screenName: T,
  Component: FC<{ params: Screens[T] }>,
) => {
  return {
    name: screenName,
    component: React.memo(() => {
      return <Component params={(useRoute().params as Screens[T]) ?? {}} />
    }),
  }
}
