import {computed, inject} from 'vue'
import {appInfoKey} from '../../.vitepress/theme/keys'
import {useRoute} from 'vitepress'

export const useThisPageOnGithub = () => {
  const repoUrl = inject(appInfoKey)
  const route = useRoute()
  const path = computed(() =>
    route.path
      .slice(route.path.indexOf('/docs') + 5)
      .replace(/\/$/, '')
      .replace(/\.html/, '')
  )
  return computed(() => `${repoUrl?.githubDocsDirectory}${path.value}.md`)
}

export const useEditThisPageOnGithub = () => {
  const url = useThisPageOnGithub()
  return computed(() => url.value.replace('/tree/', '/edit/'))
}
