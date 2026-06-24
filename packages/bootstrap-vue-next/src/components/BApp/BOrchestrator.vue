<template>
  <ConditionalTeleport :to="teleportTo" :disabled="!teleportTo">
    <div class="orchestrator-container" v-bind="$attrs">
      <div
        v-for="(value, key) in positionedItems"
        :key="key"
        :class="value.class"
        :style="value.style"
      >
        <TransitionGroup :name="value.transitionGroupName">
          <!-- eslint-disable vue/no-unused-vars -->
          <span
            v-for="{
            component,
            fns: {
              setRef,
              resolve: resolvePromise,
              destroy
            },
            props: componentProps,
            id,
            slots,
            options,
            } in value.items"
            :key="id"
          >
            <component
              :is="component"
              v-bind="componentProps"
              :ref="setRef"
              initial-animation
              :teleport-disabled="true"
              @hide="
                (e: BvTriggerableEvent) => {
                  setEventOk(e)
                  componentProps.onHide?.(e)
                  if (e.defaultPrevented) {
                    return
                  }
                  if (options?.resolveOnHide) {
                    resolvePromise(e)
                  }
                }
              "
              @hidden="
                (e: BvTriggerableEvent) => {
                  setEventOk(e)
                  componentProps.onHidden?.(e)
                  if (e.defaultPrevented) {
                    return
                  }
                  if (!options?.resolveOnHide) {
                    resolvePromise(e)
                  }
                  if (!options?.keep) {
                    destroy?.()
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
import {computed, inject, watch} from 'vue'
import {warn} from '../../utils/console'
import {orchestratorRegistryKey, type OrchestratorStoreObject} from '../../utils/keys'
import type {BvTriggerableEvent} from '../../utils'
import type {BOrchestratorProps, ContainerPosition} from '../../types'
import ConditionalTeleport from '../ConditionalTeleport.vue'
import type {ValueInMapRecord} from '../../composables/orchestratorShared'

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
    orchestratorRegistry?._setToastAppend(value)
  },
  {immediate: true}
)

const items = computed(() => {
  const store = orchestratorRegistry?.store.value
  let filteredStore = {
    tooltip: !props.noPopovers && store?.tooltip ?
      [...store.tooltip.values()].map((e) => e.value) : [],
    modal: !props.noModals && store?.modal ?
      [...store.modal.values()].map((e) => e.value) : [],
    popover: !props.noPopovers && store?.popover ?
      [...store.popover.values()].map((e) => e.value) : [],
    toast: !props.noToasts && store?.toast ?
      [...store.toast.values()].map((e) => e.value) : [],
  } satisfies Record<keyof OrchestratorStoreObject, unknown>

  if (props.filter) {
    filteredStore = {
      tooltip: filteredStore.tooltip.filter(props.filter),
      modal: filteredStore.modal.filter(props.filter),
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
  items: ValueInMapRecord<OrchestratorStoreObject[keyof OrchestratorStoreObject]>['value'][]
}
const positionedItems = computed<Record<
  ContainerPosition | keyof Omit<OrchestratorStoreObject, 'toast'>,
  ItemObject
>>(() => {
  const toastDefaultPosition: ContainerPosition = 'bottom-start'
  const toastDefaults = (cls: ContainerPosition) => ({
    class: `${cls} toast-container position-fixed p-3`,
    style: 'width: calc(var(--bs-toast-max-width, 350px) + var(--bs-toast-padding-x, 1rem) * 2)',
    transitionGroupName: 'b-list',
  } satisfies Partial<ItemObject>)
  const groupedToastItems = items.value.toast.reduce(
    (acc, item) => {
      const pos = item.props.position ?? toastDefaultPosition
      ;(acc[pos] ??= {
        ...toastDefaults(pos),
        items: [],
      }).items.push(item)

      return acc
    },
    {} as Record<ContainerPosition, ItemObject>
  )

  return {
    ...groupedToastItems,
    modal: {items: items.value.modal},
    popover: {items: items.value.popover},
    tooltip: {items: items.value.tooltip},
  }
})
</script>
