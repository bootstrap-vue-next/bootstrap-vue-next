<template>
  <div
    ref="element"
    class="offcanvas"
    :class="classes"
    tabindex="-1"
    aria-labelledby="offcanvasLabel"
    :data-bs-backdrop="backdropBoolean"
    :data-bs-scroll="bodyScrollingBoolean"
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
      <!-- TODO this aria-label is static -->
      <!-- This presents a problem for i18n applications -->
      <!-- Perhaps we should refactor to be a bit more i18n friendly? -->
      <!-- Proposal, either follow Vuetify in implementing multilanguage native support -->
      <!-- OR, the simpler route, and to make the property a dynamic prop. Or both -->
    </div>
    <div class="offcanvas-body">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// import type {BOffcanvasEmits, BOffcanvasProps} from '../types/components'
import {computed, onMounted, ref, toRef, watch} from 'vue'
import {Offcanvas} from 'bootstrap'
import {useBooleanish, useEventListener} from '../composables'
import type {Booleanish} from '../types'

interface BOffcanvasProps {
  modelValue?: Booleanish
  bodyScrolling?: Booleanish
  backdrop?: Booleanish
  placement?: string
  title?: string
}

const props = withDefaults(defineProps<BOffcanvasProps>(), {
  modelValue: false,
  bodyScrolling: false,
  backdrop: true,
  placement: 'start',
})

const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))
const bodyScrollingBoolean = useBooleanish(toRef(props, 'bodyScrolling'))
const backdropBoolean = useBooleanish(toRef(props, 'backdrop'))

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

  if (modelValueBoolean.value) {
    instance.value?.show(element.value as HTMLElement)
  }
})

const classes = computed(() => ({
  [`offcanvas-${props.placement}`]: props.placement,
}))

watch(
  () => modelValueBoolean.value,
  (value) => {
    if (value) {
      instance.value?.show(element.value as HTMLElement)
    } else {
      instance.value?.hide()
    }
  }
)
</script>
