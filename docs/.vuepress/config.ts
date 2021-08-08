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
        text: 'Get Started',   // required
        link: '/',      // optional, link of the title, which should be an absolute path and must exist
      },
      {
        text: 'Button',   // required
        link: '/Button/',      // optional, link of the title, which should be an absolute path and must exist
      },
    ]
  },
})