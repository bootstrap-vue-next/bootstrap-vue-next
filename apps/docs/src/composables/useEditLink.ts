import {computed, inject} from 'vue'
import {appInfoKey} from '../../.vitepress/theme/keys'
import {useRoute} from 'vitepress'

export const useThisPageOnGithub = () => {
  const repoUrl = inject(appInfoKey)
  const route = useRoute()

  return computed(() => {
    // Remove .html extension and trailing slashes
    let cleanPath = route.path.replace(/\.html$/, '').replace(/\/$/, '')

    // Remove the base URL (/bootstrap-vue-next)
    const baseUrl = '/bootstrap-vue-next'
    if (cleanPath.startsWith(baseUrl)) {
      cleanPath = cleanPath.slice(baseUrl.length)
    }

    // Check if the page is under /docs/ subdirectory (e.g., /docs/components/button)
    const docsSubdirIndex = cleanPath.indexOf('/docs/')

    if (docsSubdirIndex !== -1) {
      // Pages under /docs/ subdirectory
      cleanPath = cleanPath.slice(docsSubdirIndex + 5) // +5 to skip '/docs'
      return `${repoUrl?.githubDocsDirectory}${cleanPath}.md`
    }
    // Root-level pages (index.md, docs.md, etc.)
    if (cleanPath === '' || cleanPath === '/') {
      cleanPath = '/index'
    } else if (!cleanPath.startsWith('/')) {
      cleanPath = `/${cleanPath}`
    }
    const baseGithubUrl = repoUrl?.githubDocsDirectory.replace(
      '/apps/docs/src/docs',
      '/apps/docs/src'
    )
    return `${baseGithubUrl}${cleanPath}.md`
  })
}

export const useEditThisPageOnGithub = () => {
  const url = useThisPageOnGithub()
  return computed(() => url.value.replace('/tree/', '/edit/'))
}
