<template>
  <div class="orchestrator-container" v-bind="$attrs">
    <div
      v-for="(value, key) in ComputedPositionClasses"
      :key="key"
      :class="value.class"
      :style="value.style"
    >
      <TransitionGroup name="b-list">
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
</template>

<script setup lang="ts">
import {type ComponentPublicInstance, computed, inject, watch} from 'vue'
import {orchestratorPluginKey} from '../../utils/keys'
import {positionClasses} from '../../utils/positionClasses'
import type {BvTriggerableEvent} from '../../utils'
import type {OrchestratorArrayValue} from '../../types/ComponentOrchestratorTypes'

function setEventOk(event: BvTriggerableEvent): void {
  event.ok = event.trigger === 'ok' ? true : event.trigger === 'cancel' ? false : null
}

const props = withDefaults(
  defineProps<{
    noPopovers?: boolean
    noToasts?: boolean
    noModals?: boolean
    appendToast?: boolean
    filter?: (item: OrchestratorArrayValue) => boolean
  }>(),
  {
    noPopovers: false,
    noToasts: false,
    noModals: false,
    appendToast: false,
    filter: () => true,
  }
)

const orchestratorRegistry = inject(orchestratorPluginKey)

if (orchestratorRegistry) {
  if (!orchestratorRegistry._isOrchestratorInstalled.value) {
    orchestratorRegistry._isOrchestratorInstalled.value = true
  }
} else {
  console.warn(
    '[BOrchestrator] The orchestrator registry not found. Please use BApp, useOrchestratorRegistry or provide the plugin.'
  )
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
  const postisionsActive = items.value?.reduce(
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
    if (postisionsActive?.[position]) {
      classes[position] = {
        class: `${
          positionClasses[position as keyof typeof positionClasses]
        } toast-container position-fixed p-3`,
        style: 'width: calc(var(--bs-toast-max-width, 350px) + 2 * 1rem)',
      }
    }
  }
  if (postisionsActive?.['modal']) {
    classes['modal'] = {
      class: '',
      style: '',
    }
  }
  if (postisionsActive?.['popover']) {
    classes['popover'] = {
      class: '',
      style: '',
    }
  }
  return classes
})

const items = computed(() =>
  orchestratorRegistry?.store.value
    .filter((el) => !props.noPopovers || el.type !== 'popover')
    .filter((el) => !props.noToasts || el.type !== 'toast')
    .filter((el) => !props.noModals || el.type !== 'modal')
    .filter(props.filter)
)
</script>
