import React from 'react'
import { Layout } from './Layout'
import { useProps } from './useProps'
import { createScreenComponent } from '@src/components/screens/createScreenComponent'

export const SearchScreen = createScreenComponent('search', ({ params }) => <Layout {...useProps(params)} />)
