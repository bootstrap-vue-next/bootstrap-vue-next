<template>
  <div :class="[positionClass]" class="b-toaster position-fixed p-3" style="z-index: 11">
    <b-toast
      v-for="toast in instance?.toasts(position).value"
      :id="toast.options.id"
      :key="toast.options.id"
      v-model="toast.options.value"
      :auto-hide="toast.options.autoHide"
      :delay="toast.options.delay"
      :no-close-button="toast.options.noCloseButton"
      :title="toast.content.title"
      :body="toast.content.body"
      :component="toast.content.body"
      :variant="toast.options.variant"
      @destroyed="handleDestroy"
    />
  </div>
</template>

<script setup lang="ts">
// import type {BToasterProps} from '../../types/components'
import {computed} from 'vue'
import type {ContainerPosition} from '../../types'
import type {ToastInstance} from '../BToast/plugin'
import BToast from './BToast.vue'

interface BToasterProps {
  position?: ContainerPosition
  instance?: ToastInstance
  // appendToast?: Booleanish
}

const props = withDefaults(defineProps<BToasterProps>(), {
  position: 'top-right',
})

const toastPositions = {
  'top-left': 'top-0 start-0',
  'top-center': 'top-0 start-50 translate-middle-x',
  'top-right': 'top-0 end-0',
  'middle-left': 'top-50 start-0 translate-middle-y',
  'middle-center': 'top-50 start-50 translate-middle',
  'middle-right': 'top-50 end-0 translate-middle-y',
  'bottom-left': 'bottom-0 start-0',
  'bottom-center': 'bottom-0 start-50 translate-middle-x',
  'bottom-right': 'bottom-0 end-0',
}

const positionClass = computed(() => toastPositions[props.position])

const handleDestroy = (id: string) => {
  //we made want to disable reactivity for deletes. Future Note
  props.instance?.remove(id)
}
</script>
