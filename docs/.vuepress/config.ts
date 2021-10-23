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
            '/components/Accordion.md',
            '/components/Alert.md',
            '/components/Avatar.md',
            '/components/Badge.md',
            '/components/Breadcrumb.md',
            '/components/Button.md',
            '/components/ButtonGroup.md',
            '/components/ButtonToolbar.md',
            '/components/Card.md',
            '/components/Dropdown.md',
            '/components/FormCheckbox.md',
            '/components/Form.md',
            '/components/FormGroup.md',
            '/components/FormInput.md',
            '/components/FormRadio.md',
            '/components/FormSelect.md',
            '/components/Icon.md',
            '/components/Image.md',
            '/components/InputGroup.md',
            '/components/ListGroup.md',
            '/components/Overlay.md',
            '/components/Pagination.md',
            '/components/Progress.md',
            '/components/README.md',
            '/components/Spinners.md',
            '/components/Tabs.md',
          ],
        },
      ],
    },
  },
})
