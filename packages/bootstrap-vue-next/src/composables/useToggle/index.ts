import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  type MaybeRefOrGetter,
  toValue,
} from 'vue'

import {showHideRegistryKey} from '../../utils/keys'
import {getActiveShowHide} from '../../utils/registryAccess'

export const useToggle = (id: MaybeRefOrGetter<string | undefined> = undefined) => {
  const instance = getCurrentInstance()
  const storage = inject(showHideRegistryKey, null)

  if (!storage) {
    throw new Error(
      'useToggle() must be called within setup(), and BApp, useRegistry or plugin must be installed/provided.'
    )
  }
  const registry = storage.values
  // const registry = toRef(() => appRegistry.value)
  const findComponent = (
    component: ComponentInternalInstance
  ): ComponentInternalInstance | null => {
    if (!component.parent) {
      return null
    }

    if (
      component.parent.exposed?.['id'] &&
      registry.value.get(toValue(component.parent.exposed.id))
    ) {
      return component.parent
    }

    return findComponent(component.parent)
  }

  const myComponent = computed(() => {
    const resolvedId = toValue(id)

    if (resolvedId) {
      return getActiveShowHide(registry, resolvedId)
    }

    if (!instance) {
      return null
    }

    const component = findComponent(instance)
    const componentId = toValue(component?.exposed?.id)
    return getActiveShowHide(registry, componentId)
  })

  return {
    value: computed(() => myComponent.value?.value),
    show: (resolveOnHide?: boolean) =>
      myComponent.value?.show(resolveOnHide) || Promise.reject('not found'),
    hide: (trigger?: string) =>
      myComponent.value?.hide(trigger, true) || Promise.reject('not found'),
    toggle: (resolveOnHide?: boolean) =>
      myComponent.value?.toggle(resolveOnHide) || Promise.reject('not found'),
    component: computed(() => myComponent.value?.component),
  }
}
