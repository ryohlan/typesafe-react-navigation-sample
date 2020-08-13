import React from 'react'
import styled from 'styled-components/native'
import { CommonStyles } from '@src/assets/styles/CommonStyles'

export type Props = {
  onPressLaunchScreen: () => void
}

export const Layout: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <LaunchScreenButton title="LaunchScreen" onPress={props.onPressLaunchScreen} />
    </Wrapper>
  )
}

const Wrapper = styled.View({
  ...CommonStyles.flexible,
  ...CommonStyles.centering,
})

const LaunchScreenButton = styled.Button({
  ...CommonStyles.padding,
})
