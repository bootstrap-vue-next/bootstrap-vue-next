<template>
  <ConditionalTeleport :to="teleportTo" :disabled="teleportDisabled">
    <BAppOrchestrator
      v-if="!noOrchestrator && (!noModals || !noToasts || !noPopovers)"
      :append-toast="appendToast"
      :no-popovers="noPopovers"
      :no-toasts="noToasts"
      :no-modals="noModals"
    />
  </ConditionalTeleport>
  <slot v-bind="$attrs" />
</template>

<script setup lang="ts">
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
  breadcrumbPluginKey,
  defaultsKey,
  globalShowHideStorageInjectionKey,
  modalControllerPluginKey,
  modalManagerPluginKey,
  popoverPluginKey,
  type RegisterShowHideFnInput,
  type RegisterShowHideMapValue,
  rtlPluginKey,
  toastPluginKey,
} from '../../utils/keys'
import type {BvnComponentProps} from '../../types/BootstrapVueOptions'
import type {BAppProps} from '../../types/ComponentProps'
import type {
  ModalOrchestratorArrayValue,
  PopoverOrchestratorArrayValue,
  ToastOrchestratorArrayValue,
} from '../../types/ComponentOrchestratorTypes'
import BAppOrchestrator from './BAppOrchestrator.vue'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import type {BreadcrumbItemRaw} from '../../types/BreadcrumbTypes'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<BAppProps>(), {
  noModals: false,
  noToasts: false,
  noPopovers: false,
  inhert: false,
  appendToast: false,
  teleportTo: undefined,
  defaults: undefined,
  mergeDefaults: false,
  deepMerge: false,
  noOrchestrator: false,
  rtl: false,
})

// Inject existing defaults from parent (could be from plugins)
const injectedDefaults = inject(defaultsKey, ref({}))

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  for (const key in source) {
    if (source[key] instanceof Object && target[key] instanceof Object) {
      deepMerge(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>)
    } else {
      target[key] = source[key]
    }
  }
  return target
}

// Merge injected defaults with prop defaults (prop takes priority)
const mergedDefaults = computed(() => {
  const merged = {...injectedDefaults.value}

  if (props.defaults) {
    if (props.mergeDefaults) {
      if (props.deepMerge) {
        deepMerge(merged, props.defaults)
      } else {
        Object.assign(merged, props.defaults)
      }
    } else {
      return props.defaults
    }
  }

  return merged
})

// Provide the merged defaults to child components
provide(defaultsKey, ref(mergedDefaults.value) as Ref<Partial<BvnComponentProps>>)

const teleportDisabled = computed(() => props.teleportTo === undefined)

const popoverController = inject(popoverPluginKey, undefined)
const toastController = inject(toastPluginKey, undefined)
const modalController = inject(modalControllerPluginKey, undefined)

if (!props.noPopovers) {
  if (popoverController && props.inhert) {
    provide(popoverPluginKey, popoverController)
  }
  provide(popoverPluginKey, {
    popovers: ref<PopoverOrchestratorArrayValue[]>([]),
    _isOrchestratorInstalled: ref(false),
  })
}

if (!props.noToasts) {
  if (toastController && props.inhert) {
    toastController._isOrchestratorInstalled.value = true
    provide(toastPluginKey, toastController)
  }
  provide(toastPluginKey, {
    toasts: ref<ToastOrchestratorArrayValue[]>([]),
    _isAppend: ref(false),
    _isOrchestratorInstalled: ref(false),
  })
}
if (!props.noModals) {
  if (modalController && props.inhert) {
    modalController._isOrchestratorInstalled.value = true
    provide(modalControllerPluginKey, modalController)
  }
  provide(modalControllerPluginKey, {
    modals: ref<ModalOrchestratorArrayValue[]>([]),
    _isOrchestratorInstalled: ref(false),
  })
}

const showHideStorage = inject(globalShowHideStorageInjectionKey, undefined)
if (!showHideStorage) {
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
        // delete values.value[id]
        values.value.delete(id)
      },
    }
  }
  provide(globalShowHideStorageInjectionKey, {register, values})
}

const modalManager = inject(modalManagerPluginKey, undefined)
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

  provide(modalManagerPluginKey, {
    countStack,
    lastStack,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    registry: readonly(registry) as Readonly<Ref<Map<number, ComponentInternalInstance>>>,
    stack: valuesStack,
    pushStack,
    removeStack,
    pushRegistry,
    removeRegistry,
  })
}

const breadcrumb = inject(breadcrumbPluginKey, undefined)
if (!breadcrumb) {
  const items = ref<Record<string, BreadcrumbItemRaw[]>>({
    [breadcrumbGlobalIndexKey]: [],
  })
  const reset = (key: string = breadcrumbGlobalIndexKey) => {
    items.value[key] = []
  }

  provide(breadcrumbPluginKey, {items, reset})
}

const rtl = inject(rtlPluginKey, undefined)
if (!rtl) {
  const rtlDefault = false
  const localeDefault = undefined

  const rtlInitial =
    typeof props.rtl === 'boolean' ? rtlDefault : (props.rtl?.rtlInitial ?? rtlDefault)

  const localeInitial =
    typeof props.rtl === 'boolean' ? localeDefault : (props.rtl?.localeInitial ?? localeDefault)

  const isRtl = ref(rtlInitial)
  const locale = ref(localeInitial)

  provide(rtlPluginKey, {isRtl, locale})
}
</script>
