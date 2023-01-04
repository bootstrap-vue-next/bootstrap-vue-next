<template>
  <transition
    name="slide"
    :on-after-enter="OnAfterEnter"
    :on-after-leave="OnAfterLeave"
    :on-before-leave="OnBeforeLeave"
    :on-before-enter="OnBeforeEnter"
  >
    <div
      v-show="modelValue"
      class="offcanvas"
      :class="computedClasses"
      tabindex="-1"
      aria-labelledby="offcanvasLabel"
      data-bs-backdrop="false"
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
            :aria-label="dismissLabel"
            @click="hide()"
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
  </transition>
  <b-overlay variant="dark" :show="showBackDrop" fixed="true" no-wrap />
</template>

<script setup lang="ts">
import {computed, onMounted, ref, toRef, useSlots, watch} from 'vue'
import BOverlay from '../BOverlay/BOverlay.vue'
import {useBooleanish} from '../../composables'
import type {Booleanish} from '../../types'
import BCloseButton from '../BButton/BCloseButton.vue'
import {isEmptySlot} from '../../utils'

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

const showBackDrop = computed(() => {
  if (backdropBoolean.value && modelValueBoolean.value) {
    return true
  }
  return false
})

const emit = defineEmits<BOffcanvasEmits>()

const slots = useSlots()

const isTransitioning = ref(false)
const isHiding = ref(false)
const isShowing = ref(false)

const hasFooterSlot = computed<boolean>(() => !isEmptySlot(slots.footer))
const computedClasses = computed(() => [
  `offcanvas-${props.placement}`,
  {show: props.modelValue && !isShowing.value},
  {hiding: isHiding.value},
  {showing: isShowing.value},
])

const show = () => {
  emit('update:modelValue', true) //TODO need to return a BOOLEANISH
  emit('show')
}

const OnAfterEnter = () => {
  isTransitioning.value = false
  emit('update:modelValue', true)
}

const OnBeforeLeave = () => {
  isHiding.value = true
  isTransitioning.value = true
}

const OnBeforeEnter = () => {
  isTransitioning.value = true
}

const OnAfterLeave = () => {
  isTransitioning.value = false
  isHiding.value = false
  emit('update:modelValue', false)
}
const hide = () => {
  emit('hide')
  emit('update:modelValue', false)
}

watch(
  () => modelValueBoolean.value,
  (value) => {
    if (value) {
      show()
    } else {
      hide()
    }
  }
)
</script>
