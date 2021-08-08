import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'SZUI',
  description: 'Just playing around',
  base: '/SZ-UI/',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    sidebar: [
      {
        text: 'Getting Started',
        link: '/',
      },
      {
        text: 'Button',
        link: '/Button/',
      },
      {
        text: 'Badge', 
        link: '/Badge/',
      },
    ]
  },
})