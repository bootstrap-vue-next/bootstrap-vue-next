import {
  breadcrumbGlobalIndexKey,
  breadcrumbRegistryKey,
  modalManagerKey,
  showHideRegistryKey,
} from '../../utils/keys'
import {_newShowHideRegistry} from '../../composables/useRegistry'
import type {BreadcrumbItemRaw} from '../../types/BreadcrumbTypes'
import {type ComponentInternalInstance, computed, type Plugin, type Ref, ref} from 'vue'

export const registryPlugin: Plugin = {
  install(app) {
    // Provide global showHide registry
    const {register, values} = _newShowHideRegistry()
    app.provide(showHideRegistryKey, {register, values})

    // Provide global breadcrumb registry
    const items = ref<Record<string, BreadcrumbItemRaw[]>>({
      [breadcrumbGlobalIndexKey]: [],
    })
    const reset = (key: string = breadcrumbGlobalIndexKey) => {
      items.value[key] = []
    }
    app.provide(breadcrumbRegistryKey, {items, reset})

    /**
     * A collection of all currently active modals
     *
     * It was made into a map so that if a modal is ever added into the stack twice, it will not be duplicated
     * (if modelValue is true when started, it gets added in setup scope, then a watcher is triggered and it gets added again in the next tick)
     * Didn't feel like fixing it in the modal component, so I just made it a map
     */
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

    app.provide(modalManagerKey, {
      countStack,
      lastStack,
      registry: computed(() => registry.value),
      stack: valuesStack,
      pushStack,
      removeStack,
      pushRegistry,
      removeRegistry,
    })
  },
}
