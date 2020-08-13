export type Screens = {
  launch: {}
  home: {}
}

export type Navigators = {
  AppNavigator: Navigatable<'AuthNavigator' | 'MainNavigator'>
  AuthNavigator: Navigatable<'launch'>
  MainNavigator: Navigatable<'MainTabNavigator'>
  MainTabNavigator: Navigatable<'home'>
}

type Navigatable<T> = T extends keyof Screens
  ? ScreenParams<T>
  : T extends keyof Navigators
  ? NavigatorParams<T>
  : never

type ScreenParams<T extends keyof Screens> = {
  screen: T
  params: Screens[T]
}

type NavigatorParams<T extends keyof Navigators> = {
  screen: T
  params: Navigators[T]
}

export type NavigationParams = Screens & Navigators

export type TypedNavigatorParams<T extends keyof Navigators> = Pick<
  NavigationParams,
  NavigationParams[T]['screen']
>
