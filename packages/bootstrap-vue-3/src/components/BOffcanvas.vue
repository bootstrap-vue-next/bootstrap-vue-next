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
        :aria-label="dismissLabel"
      />
      <!-- TODO in v0.2.10 this was fixed to include a dynamic aria-label -->
      <!-- My note still persists, that perhaps we should include native multilanguage support similar to Vuetify -->
      <!-- Regardless, if native multilanguage support is included or not, -->
      <!-- It will need to be reviewed through and ensure that any aria-{type} can be modified by a user -->
      <!-- of course, ignoring true static aria tags like the above aria-labelledby -->
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
  dismissLabel?: string
  modelValue?: Booleanish
  bodyScrolling?: Booleanish
  backdrop?: Booleanish
  placement?: string
  title?: string
}

const props = withDefaults(defineProps<BOffcanvasProps>(), {
  dismissLabel: 'Close',
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
