<template>
  <ConditionalTeleport :to="teleportTo" :disabled="!teleportTo">
    <div class="orchestrator-container" v-bind="$attrs">
      <div
        v-for="[key, value] in positionedItems"
        :key="key"
        :class="value.class"
        :style="value.style"
      >
        <TransitionGroup :name="value.transitionGroupName">
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
            } in value.items.values()"
            :key="_self"
          >
            <component
              :is="_component"
              v-bind="val"
              :ref="(ref: ComponentPublicInstance) => (promise.controller.ref = ref)"
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
                    promise.controller.destroy?.()
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
import {warn} from '../../utils/console'
import {orchestratorRegistryKey, type OrchestratorStoreObject} from '../../utils/keys'
import type {BvTriggerableEvent} from '../../utils'
import type {BOrchestratorProps, ContainerPosition} from '../../types'
import ConditionalTeleport from '../ConditionalTeleport.vue'

const setEventOk = (event: BvTriggerableEvent): void => {
  event.ok = event.trigger === 'ok' ? true : event.trigger === 'cancel' ? false : null
}

const props = withDefaults(defineProps<BOrchestratorProps>(), {
  noPopovers: false,
  noToasts: false,
  noModals: false,
  appendToast: false,
  filter: undefined,
})

const orchestratorRegistry = inject(orchestratorRegistryKey, null)

if (orchestratorRegistry) {
  if (!orchestratorRegistry._isOrchestratorInstalled.value) {
    orchestratorRegistry._setOrchestratorInstalled(true)
  }
} else {
  warn(
    'BOrchestrator',
    'The orchestrator registry not found. Please use BApp, useRegistry or provide the plugin.'
  )
}

watch(
  () => props.appendToast,
  (value) => {
    if (orchestratorRegistry && value !== undefined) {
      orchestratorRegistry._setToastAppend(true)
    }
  },
  {immediate: true}
)

const items = computed(() => {
  const store = orchestratorRegistry?.store.value
  let filteredStore = {
    tooltip: (!props.noPopovers ? [...store?.tooltip.values() ?? []] : []),
    modal: (!props.noModals ? [...store?.modal.values() ?? []] : []),
    popover: (!props.noPopovers ? [...store?.popover.values() ?? []] : []),
    toast: (!props.noToasts ? [...store?.toast.values() ?? []] : []),
  } satisfies Record<keyof OrchestratorStoreObject, unknown>

  if (props.filter) {
    filteredStore = {
      tooltip: filteredStore.tooltip.filter(props.filter),
      modal: filteredStore.modal.filter((e) => props.filter?.(e.value)),
      popover: filteredStore.popover.filter(props.filter),
      toast: filteredStore.toast.filter(props.filter),
    }
  }

  return filteredStore
})

type ItemObject = {
  class?: string
  style?: string
  transitionGroupName?: string
  items: OrchestratorStoreObject[keyof OrchestratorStoreObject]
}
const positionedItems = computed<[string, ItemObject][]>(() => {
  const toastDefaultPosition: ContainerPosition = 'bottom-start'
  const toastDefaults = (cls: ContainerPosition) => ({
    class: `${cls} toast-container position-fixed p-3`,
    style: 'width: calc(var(--bs-toast-max-width, 350px) + var(--bs-toast-padding-x, 1rem) * 2)',
    transitionGroupName: 'b-list',
  })
  const groupedToastItems = items.value.toast.reduce(
    (acc, item) => {
      const pos = item.value.props.position ?? toastDefaultPosition
      ;(acc[pos] ??= {
        ...toastDefaults(pos),
        items: [],
      }).items.push(item.value)

      return acc
    },
    {} as Record<ContainerPosition, ItemObject>
  )

  return Object.entries({
    ...groupedToastItems,
    modal: {items: items.value.modal},
    popover: {items: items.value.popover},
    tooltip: {items: items.value.tooltip},
  } satisfies Record<
    ContainerPosition | keyof Omit<OrchestratorStoreObject, 'toast'>,
    ItemObject
  >).filter(([, value]) => value.items.length > 0)
})
</script>
