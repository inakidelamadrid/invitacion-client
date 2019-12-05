import { configure } from '@storybook/react'
import '../src/index.css'

// global styles

function loadStories() {
  const req = require.context(
    '../src/components/display',
    true,
    /\.story\.js$|story\/index\.js/
  )
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
