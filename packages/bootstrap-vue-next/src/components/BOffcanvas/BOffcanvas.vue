<template>
  <Teleport :to="teleportTo" :disabled="teleportDisabledBoolean">
    <BTransition
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
        :aria-labelledby="`${computedId}-offcanvas-label`"
        data-bs-backdrop="false"
        v-bind="$attrs"
      >
        <template v-if="lazyShowing">
          <div v-if="!noHeaderBoolean" class="offcanvas-header" :class="headerClass">
            <slot name="header" :visible="modelValueBoolean" :placement="placement" :hide="hide">
              <h5 :id="`${computedId}-offcanvas-label`" class="offcanvas-title">
                <slot name="title">
                  {{ title }}
                </slot>
              </h5>
              <template v-if="!noHeaderCloseBoolean">
                <BButton v-if="hasHeaderCloseSlot" v-bind="headerCloseAttrs" @click="hide('close')">
                  <slot name="header-close" />
                </BButton>
                <BCloseButton
                  v-else
                  aria-label="headerCloseLabel"
                  v-bind="headerCloseAttrs"
                  @click="hide('close')"
                />
              </template>
            </slot>
          </div>
          <div class="offcanvas-body" :class="bodyClass">
            <slot />
          </div>
          <div v-if="hasFooterSlot" :class="footerClass">
            <slot name="footer" :visible="modelValueBoolean" :placement="placement" :hide="hide" />
          </div>
        </template>
      </div>
    </BTransition>
    <slot name="backdrop">
      <BOverlay
        :variant="backdropVariant"
        :show="showBackdrop"
        fixed
        no-wrap
        no-spinner
        @click="hide('backdrop')"
      />
    </slot>
  </Teleport>
</template>

<script setup lang="ts">
import {computed, nextTick, ref, type RendererElement, useSlots} from 'vue'
import {onKeyStroke, useEventListener, useFocus, useVModel} from '@vueuse/core'
import {useBooleanish, useId, useSafeScrollLock} from '../../composables'
import type {Booleanish, ButtonVariant, ClassValue, ColorVariant} from '../../types'
import {BvTriggerableEvent, isEmptySlot} from '../../utils'
import BOverlay from '../BOverlay/BOverlay.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BTransition from '../BTransition/BTransition.vue'

// TODO once the responsive stuff may be implemented correctly,
// What needs to occur is a fixing of the "body scrolling".
// If the offcanvas is on the screen on a large screen, body scrolling is not disabled
// Even though the modelValue is true
// When it's a small screen and close, it works, as normal,
// But then when it opens up on a small screen, it must disable again
// This is implemented on Layout.vue, but is not officially supported.

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(
  defineProps<{
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
    headerCloseClass?: ClassValue
    headerCloseLabel?: string
    headerCloseWhite?: Booleanish
    headerCloseVariant?: ButtonVariant | null
    bodyClass?: string
    footerClass?: string
    teleportDisabled?: Booleanish
    teleportTo?: string | RendererElement | null | undefined
    // TODO responsive doesn't work
    // responsive?: Breakpoint
  }>(),
  {
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
    headerCloseClass: undefined,
    headerCloseLabel: 'Close',
    headerCloseWhite: false,
    headerCloseVariant: 'secondary',
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
  'default'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'title'?: (props: Record<string, never>) => any
  'header'?: (props: {
    visible: boolean
    placement: 'top' | 'bottom' | 'start' | 'end'
    hide: (trigger?: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header-close'?: (props: Record<string, never>) => any
  'footer'?: (props: {
    visible: boolean
    placement: 'top' | 'bottom' | 'start' | 'end'
    hide: (trigger?: string) => void
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'backdrop'?: (props: Record<string, never>) => any
}>()

const slots = useSlots()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const modelValueBoolean = useBooleanish(modelValue)
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
useSafeScrollLock(modelValueBoolean, bodyScrollingBoolean)

const element = ref<HTMLElement | null>(null)

onKeyStroke(
  'Escape',
  () => {
    hide('esc')
  },
  {target: element}
)

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

const hasHeaderCloseSlot = computed(() => !isEmptySlot(slots['header-close']))
const headerCloseClasses = computed(() => [
  {'text-reset': !hasHeaderCloseSlot.value},
  props.headerCloseClass,
])
const headerCloseAttrs = computed(() => ({
  variant: hasHeaderCloseSlot.value ? props.headerCloseVariant : undefined,
  white: !hasHeaderCloseSlot.value ? props.headerCloseWhite : undefined,
  class: headerCloseClasses.value,
}))

const hasFooterSlot = computed(() => !isEmptySlot(slots.footer))
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
