import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config'

import '../src/styles/index.css'

const fullTailwindConfig = resolveConfig(tailwindConfig)

const viewports = Object.entries(fullTailwindConfig.theme.screens).reduce(
  (result, [key, value]) => {
    result[key] = {
      name: key,
      styles: { width: value, height: '1024px' }
    }
    return result
  },
  {}
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: { width: '360px', height: '640px' }
      },
      tablet: {
        name: 'Tablet',
        styles: { width: '768px', height: '1024px' }
      },
      desktop: {
        name: 'Desktop',
        styles: { width: '1440px', height: '1024px' }
      }
    }
  }
}

export const decorators = [
  (Story) => (
    <div id="story-wrapper" className="antialiased">
      <Story />
    </div>
  )
]
