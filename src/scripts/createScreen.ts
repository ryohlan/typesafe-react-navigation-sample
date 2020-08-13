import fs from 'fs'
import path from 'path'

const screenName = process.argv[2]
const routeName = process.argv[3]
const dir = path.resolve(__dirname, `../components/screens/${screenName}`)

const index = `import React from 'react'
import { Layout } from './Layout'
import { useProps } from './useProps'
import { createScreenComponent } from '@src/components/screens/createScreenComponent'

export const ${screenName} = createScreenComponent('${routeName}', ({ params }) => <Layout {...useProps(params)} />)
`

const layout = `import React from 'react'
import styled from 'styled-components/native'

export type Props = {}

export const Layout: React.FC<Props> = () => {
  return <Wrapper>{}</Wrapper>
}

const Wrapper = styled.View({
  flex: 1,
})
`

const useProps = `import { Props } from './Layout'
import { Screens } from '@src/components/navigators/NavigationParams'

export const useProps = (_params: Screens['${routeName}']): Props => {
  return {}
}
`

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}
fs.writeFileSync(dir + '/index.tsx', index)
fs.writeFileSync(dir + '/Layout.tsx', layout)
fs.writeFileSync(dir + '/useProps.ts', useProps)
