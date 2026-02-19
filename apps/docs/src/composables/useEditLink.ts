import {computed, inject} from 'vue'
import {appInfoKey} from '../../.vitepress/theme/keys'
import {useData, useRoute} from 'vitepress'

export const useThisPageOnGithub = () => {
  const repoUrl = inject(appInfoKey)
  const route = useRoute()
  const {site} = useData()
  const path = computed(() => {
    const {base} = site.value
    const rawPath = route.path.startsWith(base) ? route.path.slice(base.length - 1) : route.path
    const cleanPath = rawPath.replace(/\/$/, '').replace(/\.html$/, '')
    return cleanPath || '/index'
  })
  return computed(() => `${repoUrl?.githubDocsDirectory}${path.value}.md`)
}

export const useEditThisPageOnGithub = () => {
  const url = useThisPageOnGithub()
  return computed(() => url.value.replace('/tree/', '/edit/'))
}
