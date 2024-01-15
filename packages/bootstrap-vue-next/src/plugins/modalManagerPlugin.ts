import {type ComponentInternalInstance, type Plugin, type Ref, shallowRef, toRef} from 'vue'
import {modalManagerPluginKey} from '../utils'

export default {
  install(app) {
    /**
     * A collection of all currently active modals
     */
    const stack: Ref<ComponentInternalInstance[]> = shallowRef([])

    const countStack = toRef(() => stack.value.length)
    const lastStack = toRef(() => stack.value[stack.value.length - 1])

    const pushStack = (modal: Readonly<ComponentInternalInstance>) => {
      stack.value = [...stack.value, modal]
    }
    const removeStack = (modal: Readonly<ComponentInternalInstance>) => {
      stack.value = stack.value.filter((item) => item.uid !== modal.uid)
    }

    /**
     * A collection of all registered modals
     */
    const registry: Ref<ComponentInternalInstance[]> = shallowRef([])

    // Utility getters not made, would not be used (count, last)

    const pushRegistry = (modal: Readonly<ComponentInternalInstance>) => {
      registry.value = [...registry.value, modal]
    }
    const removeRegistry = (modal: Readonly<ComponentInternalInstance>) => {
      registry.value = registry.value.filter((item) => item.uid !== modal.uid)
    }

    app.provide(modalManagerPluginKey, {
      stack,
      countStack,
      lastStack,
      registry,
      pushStack,
      removeStack,
      pushRegistry,
      removeRegistry,
    })
  },
} satisfies Plugin
