<template>
  <teleport :to="teleportTo" :disabled="teleportDisabledBoolean">
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
        :id="computedId"
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
          <div v-if="!noHeaderBoolean" class="offcanvas-header" :class="headerClass">
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
          <div class="offcanvas-body" :class="bodyClass">
            <slot />
          </div>
          <div v-if="hasFooterSlot" :class="footerClass">
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
import {computed, nextTick, ref, type RendererElement, useSlots} from 'vue'
import {useEventListener, useFocus, useVModel} from '@vueuse/core'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish, ColorVariant} from '../../types'
import {BvTriggerableEvent, isEmptySlot} from '../../utils'
import BOverlay from '../BOverlay/BOverlay.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BTransition from '../BTransition/BTransition.vue'

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
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
    backdropVariant?: ColorVariant | null
    headerClass?: string
    bodyClass?: string
    footerClass?: string
    teleportDisabled?: Booleanish
    teleportTo?: string | RendererElement | null | undefined
    // TODO responsive doesn't work
    // responsive?: Breakpoint
  }>(),
  {
    dismissLabel: 'Close',
    id: undefined,
    title: undefined,
    modelValue: false,
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
    headerClass: undefined,
    bodyClass: undefined,
    footerClass: undefined,
    teleportDisabled: false,
    teleportTo: 'body',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'show': [value: BvTriggerableEvent]
  'shown': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show-prevented': []
  'esc': [value: BvTriggerableEvent]
  'close': [value: BvTriggerableEvent]
}>()

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title?: (props: Record<string, never>) => any
  header?: (props: {
    visible: boolean
    placement: 'top' | 'bottom' | 'start' | 'end'
    hide: (trigger?: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  footer?: (props: {
    visible: boolean
    placement: 'top' | 'bottom' | 'start' | 'end'
    hide: (trigger?: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
}>()

const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const modelValueBoolean = useBooleanish(modelValue)
// TODO
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const bodyScrollingBoolean = useBooleanish(() => props.bodyScrolling)
const backdropBoolean = useBooleanish(() => props.backdrop)
const noHeaderCloseBoolean = useBooleanish(() => props.noHeaderClose)
const noHeaderBoolean = useBooleanish(() => props.noHeader)
const noFocusBoolean = useBooleanish(() => props.noFocus)
const noCloseOnBackdropBoolean = useBooleanish(() => props.noCloseOnBackdrop)
const noCloseOnEscBoolean = useBooleanish(() => props.noCloseOnEsc)
const lazyBoolean = useBooleanish(() => props.lazy)
const teleportDisabledBoolean = useBooleanish(() => props.teleportDisabled)

const computedId = useId(() => props.id, 'offcanvas')

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
const onLeave = () => {
  isActive.value = false
}
const OnAfterLeave = () => {
  emit('hidden', buildTriggerableEvent('hidden'))
  if (lazyBoolean.value === true) lazyLoadCompleted.value = false
}
useEventListener(element, 'bv-toggle', () => {
  modelValueBoolean.value ? hide() : show()
})

defineExpose({
  hide,
  show,
})
</script>
