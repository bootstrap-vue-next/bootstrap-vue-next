import {
  type ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  type MaybeRefOrGetter,
  ref,
  toValue,
} from 'vue'

import {globalShowHideStorageInjectionKey} from '../../utils/keys'

export const useToggle = (id: MaybeRefOrGetter<string | undefined> = undefined) => {
  const instance = getCurrentInstance()
  const {values: registry} = inject(globalShowHideStorageInjectionKey, {
    register: () => ({unregister: () => {}}),
    values: ref(new Map()),
  })

  if (!registry) {
    throw new Error(
      'useToggle() was called outside of the setup() function or the plugin is not provided.'
    )
  }
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

    if (!registry) return null
    if (resolvedId) {
      const value = registry.value.get(resolvedId)
      return toValue(value) || null
    }

    if (!instance) {
      return null
    }

    const component = findComponent(instance)
    return toValue(registry.value.get(toValue(component?.exposed?.id))) || null
  })

  return {
    value: computed(() => myComponent.value?.value),
    show: (resolveOnHide?: boolean) => myComponent.value?.show(resolveOnHide) || Promise.resolve(),
    hide: (trigger = '') => myComponent.value?.hide(trigger) || Promise.resolve(),
    toggle: (resolveOnHide?: boolean) =>
      myComponent.value?.toggle(resolveOnHide) || Promise.resolve(),
    component: computed(() => myComponent.value?.component),
  }
}
