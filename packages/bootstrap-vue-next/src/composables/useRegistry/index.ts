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
  type RegisterShowHideInstances,
  type RegisterShowHideMapValue,
  rtlRegistryKey,
  showHideRegistryKey,
} from '../../utils/keys'
import type {BAppProps} from '../../types/ComponentProps'
import type {BreadcrumbItemRaw} from '../../types/BreadcrumbTypes'

export const useRegistry = (rtl: BAppProps['rtl'] = false) => {
  const showHideStorage = inject(showHideRegistryKey, null)
  if (!showHideStorage) {
    const {register, values} = _newShowHideRegistry()
    provide(showHideRegistryKey, {register, values})
  }

  const modalManager = inject(modalManagerKey, null)
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

  const breadcrumb = inject(breadcrumbRegistryKey, null)
  if (!breadcrumb) {
    const items = ref<Record<string, BreadcrumbItemRaw[]>>({
      [breadcrumbGlobalIndexKey]: [],
    })
    const reset = (key: string = breadcrumbGlobalIndexKey) => {
      items.value[key] = []
    }

    provide(breadcrumbRegistryKey, {items, reset})
  }

  const rtlRegistry = inject(rtlRegistryKey, null)
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

// Helper function to create getActive method for instance holders
const createGetActive = (instances: RegisterShowHideMapValue[]) => () =>
  instances.length > 0 ? instances[instances.length - 1] : undefined

export const _newShowHideRegistry = () => {
  const values: Ref<Map<string, RegisterShowHideInstances>> = ref(new Map())

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
    let currentId = id
    const instanceValue: RegisterShowHideMapValue = {
      id,
      component,
      value: readonly(value),
      toggle,
      show,
      hide,
      registerTrigger,
      unregisterTrigger,
    }

    // Get or create the instances array for this ID
    let instancesHolder = values.value.get(currentId)
    if (!instancesHolder) {
      const instances: RegisterShowHideMapValue[] = []
      instancesHolder = {
        instances,
        // Returns the last mounted instance (most recent)
        getActive: createGetActive(instances),
      }
      values.value.set(currentId, instancesHolder)
    }

    // Append this instance to the array
    instancesHolder.instances.push(instanceValue)

    const componentUid = component.uid

    return {
      unregister() {
        const holder = values.value.get(currentId)
        if (!holder) return

        // Remove only this component's instance by UID
        const index = holder.instances.findIndex(
          (inst: RegisterShowHideMapValue) => inst.component.uid === componentUid
        )
        if (index !== -1) {
          holder.instances.splice(index, 1)
        }

        // Clean up the map entry if no instances remain
        if (holder.instances.length === 0) {
          values.value.delete(currentId)
        }
      },
      updateId(newId: string, oldId: string) {
        const holder = values.value.get(oldId)
        if (!holder) return

        // Find this component's instance in the array
        const instance = holder.instances.find(
          (inst: RegisterShowHideMapValue) => inst.component.uid === componentUid
        )
        if (!instance) return

        // Update the ID in the instance
        instance.id = newId

        // Get or create holder for new ID
        let newHolder = values.value.get(newId)
        if (!newHolder) {
          const instances: RegisterShowHideMapValue[] = []
          newHolder = {
            instances,
            getActive: createGetActive(instances),
          }
          values.value.set(newId, newHolder)
        }

        // Move this instance to the new ID's array
        const index = holder.instances.findIndex(
          (inst: RegisterShowHideMapValue) => inst.component.uid === componentUid
        )
        if (index !== -1) {
          holder.instances.splice(index, 1)
          newHolder.instances.push(instance)
        }

        // Clean up old ID if no instances remain
        if (holder.instances.length === 0) {
          values.value.delete(oldId)
        }
        // Keep local id in sync so unregister() uses the latest key
        currentId = newId
      },
    }
  }
  return {
    register,
    values,
  }
}
