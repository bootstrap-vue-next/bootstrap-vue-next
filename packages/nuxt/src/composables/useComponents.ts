import { addComponent } from '@nuxt/kit'
import { componentsWithExternalPath } from 'bootstrap-vue-next/types'

export const useComponents = (resolve: (...path: string[]) => string) => {
  const omittedSpecialComponents = new Set<string>(['BLink'])

  for (const [name, path] of Object.entries(componentsWithExternalPath)) {
    if (omittedSpecialComponents.has(name)) continue
    addComponent({
      name,
      export: name,
      filePath: `bootstrap-vue-next${path}`,
    })
  }

  addComponent({
    name: 'BLink',
    global: true,
    filePath: resolve('runtime/app/components/NuxtBLink.vue'),
  })
}
