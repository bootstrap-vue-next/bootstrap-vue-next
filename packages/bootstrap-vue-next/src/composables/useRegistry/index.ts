import {
  type ComponentInternalInstance,
  computed,
  inject,
  provide,
  readonly,
  type Ref,
  ref,
} from 'vue'
import {
  breadcrumbGlobalIndexKey,
  breadcrumbRegistryKey,
  modalManagerKey,
  type RegisterShowHideFnInput,
  type RegisterShowHideMapValue,
  rtlRegistryKey,
  showHideRegistryKey,
} from '../../utils/keys'
import type {BAppProps} from '../../types/ComponentProps'
import type {BreadcrumbItemRaw} from '../../types/BreadcrumbTypes'

export const useRegistry = (rtl: BAppProps['rtl'] = false) => {
  const showHideStorage = inject(showHideRegistryKey, undefined)
  if (!showHideStorage) {
    const {register, values} = _newShowHideRegistry()
    provide(showHideRegistryKey, {register, values})
  }

  const modalManager = inject(modalManagerKey, undefined)
  if (!modalManager) {
    const stack: Ref<Map<number, ComponentInternalInstance>> = ref(new Map())

    const countStack = computed(() => stack.value.size)
    const valuesStack = computed(() => [...stack.value.values()])
    const lastStack = computed(() => valuesStack.value[valuesStack.value.length - 1])

    const pushStack = (modal: Readonly<ComponentInternalInstance>) => {
      stack.value.set(modal.uid, modal)
    }
    const removeStack = (modal: Readonly<ComponentInternalInstance>) => {
      stack.value.delete(modal.uid)
    }

    /**
     * A collection of all registered modals
     */
    const registry: Ref<Map<number, ComponentInternalInstance>> = ref(new Map())

    // Utility getters not made, would not be used (count, last)

    const pushRegistry = (modal: Readonly<ComponentInternalInstance>) => {
      registry.value.set(modal.uid, modal)
    }
    const removeRegistry = (modal: Readonly<ComponentInternalInstance>) => {
      registry.value.delete(modal.uid)
    }

    provide(modalManagerKey, {
      countStack,
      lastStack,
      registry: computed(() => registry.value),
      stack: valuesStack,
      pushStack,
      removeStack,
      pushRegistry,
      removeRegistry,
    })
  }

  const breadcrumb = inject(breadcrumbRegistryKey, undefined)
  if (!breadcrumb) {
    const items = ref<Record<string, BreadcrumbItemRaw[]>>({
      [breadcrumbGlobalIndexKey]: [],
    })
    const reset = (key: string = breadcrumbGlobalIndexKey) => {
      items.value[key] = []
    }

    provide(breadcrumbRegistryKey, {items, reset})
  }

  const rtlRegistry = inject(rtlRegistryKey, undefined)
  if (!rtlRegistry) {
    const rtlDefault = false
    const localeDefault = undefined

    const rtlInitial = typeof rtl === 'boolean' ? rtlDefault : (rtl?.rtlInitial ?? rtlDefault)

    const localeInitial =
      typeof rtl === 'boolean' ? localeDefault : (rtl?.localeInitial ?? localeDefault)

    const isRtl = ref(rtlInitial)
    const locale = ref(localeInitial)

    provide(rtlRegistryKey, {isRtl, locale})
  }
}

export const _newShowHideRegistry = () => {
  const values: Ref<Map<string, RegisterShowHideMapValue>> = ref(new Map())

  const register = ({
    id,
    component,
    value,
    toggle,
    show,
    hide,
    registerTrigger,
    unregisterTrigger,
  }: RegisterShowHideFnInput) => {
    values.value.set(id, {
      id,
      component,
      value: readonly(value),
      toggle,
      show,
      hide,
      registerTrigger,
      unregisterTrigger,
    })
    return {
      unregister() {
        values.value.delete(id)
      },
      updateId(newId: string, oldId: string) {
        const existingValue = values.value.get(oldId)
        if (existingValue) {
          values.value.set(newId, {...existingValue, id: newId})
          values.value.delete(oldId)
        }
      },
    }
  }
  return {
    register,
    values,
  }
}
