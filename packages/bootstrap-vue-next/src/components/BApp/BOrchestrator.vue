<template>
  <ConditionalTeleport :to="teleportTo" :disabled="!teleportTo">
    <div class="orchestrator-container" v-bind="$attrs">
      <div
        v-for="(value, key) in ComputedPositionClasses"
        :key="key"
        :class="value.class"
        :style="value.style"
      >
        <TransitionGroup
          :name="
            items?.filter((el) => el.position === key)?.some((el) => el.type === 'toast')
              ? 'b-list'
              : undefined
          "
        >
          <!-- eslint-disable vue/no-unused-vars -->
          <span
            v-for="{
              _self,
              type,
              position,
              slots,
              promise,
              options,
              _component,
              ...val
            } in items?.filter((el) => el.position === key) || []"
            :key="_self"
          >
            <component
              :is="_component"
              v-bind="val"
              :ref="(ref: ComponentPublicInstance) => (promise.value.ref = ref)"
              initial-animation
              :teleport-disabled="true"
              @hide="
                (e: BvTriggerableEvent) => {
                  setEventOk(e)
                  val.onHide?.(e)
                  if (e.defaultPrevented) {
                    return
                  }
                  promise.stop?.()
                  if (options?.resolveOnHide) {
                    promise.resolve(e)
                  }
                }
              "
              @hidden="
                (e: BvTriggerableEvent) => {
                  setEventOk(e)
                  val.onHidden?.(e)
                  if (e.defaultPrevented) {
                    return
                  }
                  if (!options?.resolveOnHide) {
                    promise.resolve(e)
                  }
                  if (!options?.keep) {
                    promise.value.destroy?.()
                  }
                }
              "
            >
              <template v-for="(comp, slot) in slots" #[slot]="scope" :key="slot">
                <component :is="comp" v-bind="scope" />
              </template>
            </component>
          </span>
        </TransitionGroup>
      </div>
    </div>
  </ConditionalTeleport>
</template>

<script setup lang="ts">
import {type ComponentPublicInstance, computed, inject, watch} from 'vue'
import {orchestratorRegistryKey} from '../../utils/keys'
import {positionClasses} from '../../utils/positionClasses'
import type {BvTriggerableEvent} from '../../utils'
import type {BOrchestratorProps} from '../../types/ComponentProps'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import {useModal} from '../../composables/useModal'
import {useToast} from '../../composables/useToast'
import {usePopover} from '../../composables/usePopover'

function setEventOk(event: BvTriggerableEvent): void {
  event.ok = event.trigger === 'ok' ? true : event.trigger === 'cancel' ? false : null
}

const props = withDefaults(defineProps<BOrchestratorProps>(), {
  noPopovers: false,
  noToasts: false,
  noModals: false,
  appendToast: false,
  filter: () => true,
})

const orchestratorRegistry = inject(orchestratorRegistryKey)

if (orchestratorRegistry) {
  if (!orchestratorRegistry._isOrchestratorInstalled.value) {
    orchestratorRegistry._isOrchestratorInstalled.value = true
  }
} else {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(
      '[BOrchestrator] The orchestrator registry not found. Please use BApp, useRegistry or provide the plugin.'
    )
  }
}

watch(
  () => props.appendToast,
  (value) => {
    if (orchestratorRegistry && value !== undefined) {
      orchestratorRegistry._isToastAppend.value = value
    }
  },
  {immediate: true}
)

const ComputedPositionClasses = computed(() => {
  const positionsActive = items.value?.reduce(
    (acc, item) => {
      if (item.position) {
        acc[item.position] = true
      }
      return acc
    },
    {} as Record<string, boolean>
  )
  const classes: Record<string, {class: string; style: string}> = {}
  for (const position in positionClasses) {
    if (positionsActive?.[position]) {
      classes[position] = {
        class: `${
          positionClasses[position as keyof typeof positionClasses]
        } toast-container position-fixed p-3`,
        style:
          'width: calc(var(--bs-toast-max-width, 350px) + var(--bs-toast-padding-x, 1rem) * 2)',
      }
    }
  }
  if (positionsActive?.['modal']) {
    classes['modal'] = {
      class: '',
      style: '',
    }
  }
  if (positionsActive?.['popover']) {
    classes['popover'] = {
      class: '',
      style: '',
    }
  }
  return classes
})

const items = computed(() => {
  const store = orchestratorRegistry?.store.value ?? []
  return store
    .filter((el) => !props.noPopovers || el.type !== 'popover')
    .filter((el) => !props.noToasts || el.type !== 'toast')
    .filter((el) => !props.noModals || el.type !== 'modal')
    .filter(props.filter)
})

// Initialize registry methods - these will be undefined if orchestratorRegistry is not available
let modalTools: ReturnType<typeof useModal> | undefined
let toastTools: ReturnType<typeof useToast> | undefined
let popoverTools: ReturnType<typeof usePopover> | undefined

if (orchestratorRegistry) {
  modalTools = useModal()
  toastTools = useToast()
  popoverTools = usePopover()
}

// Always call defineExpose at the top level, but values may be undefined
defineExpose({
  // Namespaced modal methods
  modal: modalTools
    ? {
        show: modalTools.show,
        hide: modalTools.hide,
        hideAll: modalTools.hideAll,
        get: modalTools.get,
        current: modalTools.current,
        create: modalTools.create,
      }
    : undefined,
  // Namespaced toast methods
  toast: toastTools
    ? {
        create: toastTools.create,
        show: toastTools.show,
      }
    : undefined,
  // Namespaced popover methods
  popover: popoverTools
    ? {
        create: popoverTools.create,
        popover: popoverTools.popover,
        tooltip: popoverTools.tooltip,
      }
    : undefined,
  // Registry state
  _isOrchestratorInstalled: modalTools?._isOrchestratorInstalled,
  _isToastAppend: toastTools?._isToastAppend,
  store: modalTools?.store,
})
</script>
