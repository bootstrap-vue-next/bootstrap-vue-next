import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  base: '/bootstrap-vue-3/',
  title: 'BootstrapVue 3',
  head: [['link', {rel: 'icon', href: '/bootstrap-vue-3/favicon.ico'}]],
  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/cdmoro/bootstrap-vue-3',
    editLink: true,
    contributors: false,
    lastUpdated: true,
    themePlugins: {
      mediumZoom: false,
    },
    navbar: [
      {text: 'Home', link: '/'},
      {text: 'Docs', link: '/getting-started/'},
      {
        text: 'Reference',
        children: [
          {text: 'Components', link: '/components/'},
          {text: 'Types', link: '/reference/types.md'},
          {text: 'Comparision with BootstrapVue', link: '/reference/parityList.md'},
        ],
      },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Components',
          children: [
            '/components/README.md',
            '/components/Accordion.md',
            '/components/Alert.md',
            '/components/Avatar.md',
            '/components/Badge.md',
            '/components/Button.md',
            '/components/ButtonGroup.md',
            '/components/Breadcrumb.md',
            '/components/Dropdown.md',
            '/components/FormCheckbox.md',
            '/components/FormRadio.md',
            '/components/Progress.md',
            '/components/Spinners.md',
          ],
        },
      ],
    },
  },
})
