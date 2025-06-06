<!-- eslint-disable vue/no-unused-vars -->
<template>
  <div id="__BVID__toaster-container" v-bind="$attrs">
    <div
      v-for="(value, key) in ComputedPositionClasses"
      :key
      :class="value.class"
      :style="value.style"
    >
      <TransitionGroup name="b-list">
        <span
          v-for="{
            _self,
            type,
            position,
            slots,
            promise,
            options,
            component: _component,
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
                e.ok = e.trigger === 'ok' ? true : e.trigger === 'cancel' ? false : null

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
                e.ok = e.trigger === 'ok' ? true : e.trigger === 'cancel' ? false : null
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
import {modalControllerPluginKey, popoverPluginKey, toastPluginKey} from '../../utils/keys'
import {positionClasses} from '../../utils/positionClasses'
import type {BvTriggerableEvent} from '../../utils'

const props = defineProps<{
  noPopovers?: boolean
  noToasts?: boolean
  noModals?: boolean
  appendToast?: boolean
}>()

const popoverController = inject(popoverPluginKey)
const toastController = inject(toastPluginKey)
const modalController = inject(modalControllerPluginKey)

if (popoverController) {
  if (!popoverController._isOrchestratorInstalled.value) {
    popoverController._isOrchestratorInstalled.value = true
  } else {
    console.warn(
      'BPopoverOrchestrator Or BApp is already installed, only one can be installed at a time'
    )
  }
}

if (toastController) {
  if (!toastController._isOrchestratorInstalled.value) {
    toastController._isOrchestratorInstalled.value = true
  } else {
    console.warn(
      'BToastOrchestrator Or BApp is already installed, only one can be installed at a time'
    )
  }
}

if (modalController) {
  if (!modalController._isOrchestratorInstalled.value) {
    modalController._isOrchestratorInstalled.value = true
  } else {
    console.warn(
      'BModalOrchestrator Or BApp is already installed, only one can be installed at a time'
    )
  }
}

watch(
  () => props.appendToast,
  (value) => {
    if (toastController) {
      toastController._isAppend.value = value
    }
  },
  {immediate: true}
)

const ComputedPositionClasses = computed(() => {
  const classes: Record<string, {class: string; style: string}> = {}
  for (const position in positionClasses) {
    classes[position] = {
      class: `${
        positionClasses[position as keyof typeof positionClasses]
      } toast-container position-fixed p-3`,
      style: 'width: calc(var(--bs-toast-max-width, 350px) + 2 * 1rem)',
    }
  }
  // console.log(classes)
  classes['modal'] = {
    class: '',
    style: '',
  }
  classes['popover'] = {
    class: '',
    style: '',
  }
  return classes
})

const items = computed(() => [
  ...(!props.noPopovers ? popoverController?.popovers?.value || [] : []),
  ...(!props.noToasts ? toastController?.toasts?.value || [] : []),
  ...(!props.noModals ? modalController?.modals?.value || [] : []),
])
</script>
