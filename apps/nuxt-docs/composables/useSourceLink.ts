export const useSourceLink = () => {
  const appInfo = inject(appInfoKey, null)

  const {path} = useRoute()

  const component = path.slice(path.lastIndexOf('/') + 1)

  const location = 'tree/main/packages/bootstrap-vue-next/src/components'

  return computed(() => `${appInfo?.githubUrl}/${location}/${component}`)
}
