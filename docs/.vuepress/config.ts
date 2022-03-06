import {defineUserConfig} from 'vuepress'
import {componentReference} from './PluginComponentReference'
import type {DefaultThemeOptions} from 'vuepress'
import type {WebpackBundlerOptions} from '@vuepress/bundler-webpack'

export default defineUserConfig<DefaultThemeOptions, WebpackBundlerOptions>({
  lang: 'en-US',
  base: '/bootstrap-vue-3/',
  title: 'BootstrapVue 3',
  head: [['link', {rel: 'icon', href: '/bootstrap-vue-3/favicon.ico'}]],

  plugins: [componentReference],
  themeConfig: {
    logo: '/logo.png',
    repo: 'https://github.com/cdmoro/bootstrap-vue-3',
    docsDir: 'docs',
    editLink: true,
    contributors: false,
    lastUpdated: true,
    bundler: '@vuepress/bundler-webpack',
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
          {text: 'Comparison with BootstrapVue', link: '/reference/parityList.md'},
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
            '/components/Breadcrumb.md',
            '/components/Button.md',
            '/components/ButtonGroup.md',
            '/components/ButtonToolbar.md',
            '/components/Card.md',
            '/components/Dropdown.md',
            '/components/Form.md',
            '/components/FormCheckbox.md',
            '/components/FormGroup.md',
            '/components/FormRadio.md',
            '/components/FormInput.md',
            '/components/FormSelect.md',
            '/components/FormTextarea.md',
            '/components/Image.md',
            '/components/InputGroup.md',
            '/components/ListGroup.md',
            '/components/Overlay.md',
            '/components/Pagination.md',
            '/components/Progress.md',
            '/components/Skeleton.md',
            '/components/Spinners.md',
            '/components/Table.md',
            '/components/Tabs.md',
            '/components/Toast.md',
          ],
        },
      ],
    },
  },
})
