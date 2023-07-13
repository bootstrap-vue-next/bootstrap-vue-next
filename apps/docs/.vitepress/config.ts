import {defineConfig} from 'vitepress'
import Icons from 'unplugin-icons/vite'
import {createWriteStream} from 'node:fs'
import {resolve} from 'node:path'
import {SitemapStream} from 'sitemap'

const title = 'BootstrapVueNext'
const description = 'Quickly and Easily Integrate Bootstrap V5 Components With Vue 3'
const links: {url: string; lastmod: number | undefined}[] = []
const baseUrl = '/bootstrap-vue-next/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  base: baseUrl,
  srcDir: 'src',
  // TODO fix & remove this
  ignoreDeadLinks: true,
  head: [
    ['link', {rel: 'icon', type: 'image/x-icon', href: `${baseUrl}favicon.ico`}],
    ['meta', {property: 'og:title', name: 'og:title', content: title}],
    ['meta', {property: 'og:description', name: 'og:description', content: description}],
    ['meta', {property: 'twitter:card', name: 'twitter:card', content: 'summary'}],
    ['meta', {property: 'twitter:title', name: 'twitter:title', content: title}],
    ['meta', {property: 'twitter:description', name: 'twitter:description', content: description}],
  ],
  vite: {
    plugins: [Icons()],
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
    },
  },
  appearance: false,
  transformHtml: (_, id, {pageData}) => {
    if (!/[\\/]404\.html$/.test(id))
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated,
      })
  },
  buildEnd: async ({outDir}) => {
    const sitemap = new SitemapStream({
      hostname: `https://bootstrap-vue-next.github.io${baseUrl}`,
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach((link) => sitemap.write(link))
    sitemap.end()
    await new Promise((r) => writeStream.on('finish', r))
  },
})
