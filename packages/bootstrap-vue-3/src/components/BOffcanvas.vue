<template>
  <div
    ref="element"
    class="offcanvas"
    :class="classes"
    tabindex="-1"
    aria-labelledby="offcanvasLabel"
    :data-bs-backdrop="backdrop"
    :data-bs-scroll="bodyScrolling"
  >
    <div class="offcanvas-header">
      <h5 id="offcanvasLabel" class="offcanvas-title">
        <slot name="title">
          {{ title }}
        </slot>
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div class="offcanvas-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// import type {BOffcanvasEmits, BOffcanvasProps} from '../types/components'
import {computed, onMounted, ref, watch} from 'vue'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
import useEventListener from '../composables/useEventListener'

interface BOffcanvasProps {
  modelValue?: boolean
  bodyScrolling?: boolean
  backdrop?: boolean
  placement?: string
  title?: string
}

const props = withDefaults(defineProps<BOffcanvasProps>(), {
  modelValue: false,
  bodyScrolling: false,
  backdrop: true,
  placement: 'start',
})

interface BOffcanvasEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
}

const emit = defineEmits<BOffcanvasEmits>()

const element = ref<HTMLElement>()
const instance = ref<Offcanvas>()

useEventListener(element, 'shown.bs.offcanvas', () => emit('shown'))
useEventListener(element, 'hidden.bs.offcanvas', () => emit('hidden'))

useEventListener(element, 'show.bs.offcanvas', () => {
  emit('show')
  emit('update:modelValue', true)
})

useEventListener(element, 'hide.bs.offcanvas', () => {
  emit('hide')
  emit('update:modelValue', false)
})

onMounted((): void => {
  instance.value = new Offcanvas(element.value as HTMLElement)

  if (props.modelValue) {
    instance.value?.show(element.value as HTMLElement)
  }
})

const classes = computed(() => ({
  [`offcanvas-${props.placement}`]: props.placement,
}))

watch(
  () => props.modelValue,
  (value) => {
    if (value) {
      instance.value?.show(element.value as HTMLElement)
    } else {
      instance.value?.hide()
    }
  }
)
</script>
