import React from 'react'
import { Layout } from './Layout'
import { useProps } from './useProps'
import { createScreenComponent } from '@src/components/screens/createScreenComponent'

export const SignUpScreen = createScreenComponent('signup', ({ params }) => <Layout {...useProps(params)} />)
