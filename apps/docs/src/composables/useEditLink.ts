import {computed, inject} from 'vue'
import {appInfoKey} from '../../.vitepress/theme/keys'
import {useData} from 'vitepress'

export const useThisPageOnGithub = () => {
  const repoUrl = inject(appInfoKey)
  const {page} = useData()
  return computed(() => `${repoUrl?.githubDocsDirectory}/${page.value.relativePath}`)
}

export const useEditThisPageOnGithub = () => {
  const url = useThisPageOnGithub()
  return computed(() => url.value.replace('/tree/', '/edit/'))
}
