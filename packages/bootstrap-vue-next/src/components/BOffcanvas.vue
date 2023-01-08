<template>
  <div
    ref="element"
    class="offcanvas"
    :class="computedClasses"
    tabindex="-1"
    aria-labelledby="offcanvasLabel"
    :data-bs-backdrop="backdropBoolean"
    :data-bs-scroll="bodyScrollingBoolean"
  >
    <div v-if="!noHeaderBoolean" class="offcanvas-header">
      <slot name="header" v-bind="{visible: modelValueBoolean, placement, hide}">
        <h5 id="offcanvasLabel" class="offcanvas-title">
          <slot name="title">
            {{ title }}
          </slot>
        </h5>
        <b-close-button
          v-if="!noHeaderCloseBoolean"
          class="text-reset"
          data-bs-dismiss="offcanvas"
          :aria-label="dismissLabel"
        />
      </slot>
    </div>
    <div class="offcanvas-body">
      <slot />
    </div>
    <div v-if="hasFooterSlot">
      <slot name="footer" v-bind="{visible: modelValueBoolean, placement, hide}" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import type {BOffcanvasEmits, BOffcanvasProps} from '../types/components'
import {computed, onMounted, ref, toRef, useSlots, watch} from 'vue'
import {Offcanvas} from 'bootstrap'
import {useBooleanish, useEventListener} from '../composables'
import type {Booleanish} from '../types'
import BCloseButton from './BButton/BCloseButton.vue'
import {isEmptySlot} from '../utils'

interface BOffcanvasProps {
  dismissLabel?: string
  modelValue?: Booleanish
  bodyScrolling?: Booleanish
  backdrop?: Booleanish
  placement?: string
  title?: string
  noHeaderClose?: Booleanish
  noHeader?: Booleanish
}

const props = withDefaults(defineProps<BOffcanvasProps>(), {
  dismissLabel: 'Close',
  modelValue: false,
  bodyScrolling: false,
  backdrop: true,
  placement: 'start',
  noHeaderClose: false,
  noHeader: false,
})

const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))
const bodyScrollingBoolean = useBooleanish(toRef(props, 'bodyScrolling'))
const backdropBoolean = useBooleanish(toRef(props, 'backdrop'))
const noHeaderCloseBoolean = useBooleanish(toRef(props, 'noHeaderClose'))
const noHeaderBoolean = useBooleanish(toRef(props, 'noHeader'))

interface BOffcanvasEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show'): void
  (e: 'shown'): void
  (e: 'hide'): void
  (e: 'hidden'): void
}

const emit = defineEmits<BOffcanvasEmits>()

const slots = useSlots()

const element = ref<HTMLElement>()
const instance = ref<Offcanvas>()

const hasFooterSlot = computed<boolean>(() => !isEmptySlot(slots.footer))
const computedClasses = computed(() => [`offcanvas-${props.placement}`])

const show = () => {
  emit('show')
  emit('update:modelValue', true)
}

const hide = () => {
  emit('hide')
  emit('update:modelValue', false)
}

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

useEventListener(element, 'shown.bs.offcanvas', () => emit('shown'))
useEventListener(element, 'hidden.bs.offcanvas', () => emit('hidden'))

useEventListener(element, 'show.bs.offcanvas', () => {
  show()
})

useEventListener(element, 'hide.bs.offcanvas', () => {
  hide()
})

onMounted((): void => {
  instance.value = new Offcanvas(element.value as HTMLElement)

  if (modelValueBoolean.value) {
    instance.value?.show(element.value as HTMLElement)
  }
})
</script>
