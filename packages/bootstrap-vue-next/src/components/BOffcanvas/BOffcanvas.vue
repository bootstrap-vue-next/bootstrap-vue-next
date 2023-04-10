<template>
  <teleport to="body" :disabled="staticBoolean">
    <b-transition
      :no-fade="true"
      :trans-props="{
        enterToClass: 'showing',
        enterFromClass: '',
        leaveToClass: 'hiding show',
        leaveFromClass: 'show',
      }"
      @before-enter="OnBeforeEnter"
      @after-enter="OnAfterEnter"
      @leave="onLeave"
      @after-leave="OnAfterLeave"
    >
      <div
        v-show="modelValue"
        ref="element"
        aria-modal="true"
        role="dialog"
        :class="computedClasses"
        tabindex="-1"
        aria-labelledby="offcanvasLabel"
        data-bs-backdrop="false"
        v-bind="$attrs"
        @keyup.esc="hide('esc')"
      >
        <template v-if="lazyShowing">
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
                @click="hide('close')"
              />
            </slot>
          </div>
          <div class="offcanvas-body">
            <slot />
          </div>
          <div v-if="hasFooterSlot">
            <slot name="footer" v-bind="{visible: modelValueBoolean, placement, hide}" />
          </div>
        </template>
      </div>
    </b-transition>
    <b-overlay
      :variant="backdropVariant"
      :show="showBackdrop"
      :fixed="true"
      no-wrap
      :no-spinner="true"
      @click="hide('backdrop')"
    />
  </teleport>
</template>

<script setup lang="ts">
import {computed, nextTick, ref, toRef, useSlots} from 'vue'
import {useEventListener, useFocus, useVModel} from '@vueuse/core'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish, ColorVariant} from '../../types'
import {BvTriggerableEvent, isEmptySlot} from '../../utils'
import BOverlay from '../BOverlay/BOverlay.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BTransition from '../BTransition/BTransition.vue'

interface BOffcanvasProps {
  dismissLabel?: string
  modelValue?: Booleanish
  bodyScrolling?: Booleanish
  backdrop?: Booleanish
  noCloseOnBackdrop?: Booleanish
  noCloseOnEsc?: Booleanish
  // TODO standardize this. Create a dedicated type
  // Then in components that use individual props (BImg)
  // Make them just use prop placement
  placement?: 'top' | 'bottom' | 'start' | 'end'
  title?: string
  noHeaderClose?: Booleanish
  noHeader?: Booleanish
  lazy?: Booleanish
  id?: string
  noFocus?: Booleanish
  static?: Booleanish
  backdropVariant?: ColorVariant
  // TODO responsive doesn't work
  // responsive?: Breakpoint
}

const props = withDefaults(defineProps<BOffcanvasProps>(), {
  dismissLabel: 'Close',
  id: undefined,
  title: undefined,
  modelValue: false,
  static: false,
  backdropVariant: 'dark',
  noFocus: false,
  bodyScrolling: false,
  noCloseOnBackdrop: false,
  noCloseOnEsc: false,
  backdrop: true,
  lazy: false,
  placement: 'start',
  noHeaderClose: false,
  noHeader: false,
})

interface BOffcanvasEmits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'show', value: BvTriggerableEvent): void
  (e: 'shown', value: BvTriggerableEvent): void
  (e: 'hide', value: BvTriggerableEvent): void
  (e: 'hidden', value: BvTriggerableEvent): void
  (e: 'hide-prevented'): void
  (e: 'show-prevented'): void
  (e: 'esc', value: BvTriggerableEvent): void
  (e: 'close', value: BvTriggerableEvent): void
}

const emit = defineEmits<BOffcanvasEmits>()

const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emit)

const modelValueBoolean = useBooleanish(modelValue)
// TODO
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bodyScrollingBoolean = useBooleanish(toRef(props, 'bodyScrolling'))
const backdropBoolean = useBooleanish(toRef(props, 'backdrop'))
const noHeaderCloseBoolean = useBooleanish(toRef(props, 'noHeaderClose'))
const noHeaderBoolean = useBooleanish(toRef(props, 'noHeader'))
const noFocusBoolean = useBooleanish(toRef(props, 'noFocus'))
const noCloseOnBackdropBoolean = useBooleanish(toRef(props, 'noCloseOnBackdrop'))
const noCloseOnEscBoolean = useBooleanish(toRef(props, 'noCloseOnEsc'))
const lazyBoolean = useBooleanish(toRef(props, 'lazy'))
const staticBoolean = useBooleanish(toRef(props, 'static'))

const computedId = useId(toRef(props, 'id'), 'offcanvas')

const element = ref<HTMLElement | null>(null)

const {focused} = useFocus(element, {
  initialValue: modelValueBoolean.value && noFocusBoolean.value === false,
})

const isActive = ref(modelValueBoolean.value)
const lazyLoadCompleted = ref(false)

const showBackdrop = computed(
  () => backdropBoolean.value === true && modelValueBoolean.value === true
)

const lazyShowing = computed(
  () =>
    lazyBoolean.value === false ||
    (lazyBoolean.value === true && lazyLoadCompleted.value === true) ||
    (lazyBoolean.value === true && modelValueBoolean.value === true)
)

const hasFooterSlot = computed<boolean>(() => !isEmptySlot(slots.footer))
const computedClasses = computed(() => [
  // props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
  'offcanvas', // Remove when above check is fixed
  `offcanvas-${props.placement}`,
  {
    show: modelValueBoolean.value && isActive.value === true,
  },
])

const buildTriggerableEvent = (
  type: string,
  opts: Partial<BvTriggerableEvent> = {}
): BvTriggerableEvent =>
  new BvTriggerableEvent(type, {
    cancelable: false,
    target: element.value || null,
    relatedTarget: null,
    trigger: null,
    ...opts,
    componentId: computedId.value,
  })

const hide = (trigger = '') => {
  const event = buildTriggerableEvent('hide', {cancelable: trigger !== '', trigger})

  if (trigger === 'close') {
    emit(trigger, event)
  }
  if (trigger === 'esc') {
    emit(trigger, event)
  }
  emit('hide', event)

  if (
    event.defaultPrevented ||
    (trigger === 'backdrop' && noCloseOnBackdropBoolean.value) ||
    (trigger === 'esc' && noCloseOnEscBoolean.value)
  ) {
    emit('hide-prevented')
    return
  }
  modelValue.value = false
}

const show = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    modelValue.value = false
    emit('show-prevented')
    return
  }
  modelValue.value = true
}

const focus = () => {
  nextTick(() => {
    if (noFocusBoolean.value === false) {
      focused.value = true
    }
  })
}

const OnBeforeEnter = () => show()
const OnAfterEnter = () => {
  isActive.value = true
  focus()
  emit('shown', buildTriggerableEvent('shown'))
  if (lazyBoolean.value === true) lazyLoadCompleted.value = true
}
const onLeave = () => (isActive.value = false)
const OnAfterLeave = () => {
  emit('hidden', buildTriggerableEvent('hidden'))
  if (lazyBoolean.value === true) lazyLoadCompleted.value = false
}
useEventListener(element, 'bv-toggle', () => {
  modelValueBoolean.value ? hide() : show()
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
