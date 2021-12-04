const path = require('path')

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        styleLoaderOptions: {},
        cssLoaderOptions: {
          modules: {
            auto: true
          }
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../src/')
        },
        modules: [path.resolve(__dirname, '..'), 'node_modules']
      }
    }
  }
}
