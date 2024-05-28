<template>
  <Teleport :to="props.teleportTo" :disabled="props.teleportDisabled">
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
        :style="computedStyles"
        tabindex="-1"
        :aria-labelledby="`${computedId}-offcanvas-label`"
        data-bs-backdrop="false"
        v-bind="$attrs"
      >
        <template v-if="lazyShowing">
          <div v-if="!props.noHeader" class="offcanvas-header" :class="props.headerClass">
            <slot name="header" v-bind="sharedSlots">
              <h5 :id="`${computedId}-offcanvas-label`" class="offcanvas-title">
                <slot name="title" v-bind="sharedSlots">
                  {{ props.title }}
                </slot>
              </h5>
              <template v-if="!props.noHeaderClose">
                <BButton v-if="hasHeaderCloseSlot" v-bind="headerCloseAttrs" @click="hide('close')">
                  <slot name="header-close" />
                </BButton>
                <BCloseButton
                  v-else
                  :aria-label="props.headerCloseLabel"
                  v-bind="headerCloseAttrs"
                  @click="hide('close')"
                />
              </template>
            </slot>
          </div>
          <div class="offcanvas-body" :class="props.bodyClass" v-bind="props.bodyAttrs">
            <slot v-bind="sharedSlots" />
          </div>
          <div v-if="hasFooterSlot" :class="props.footerClass">
            <slot name="footer" v-bind="sharedSlots" />
          </div>
        </template>
      </div>
    </BTransition>
    <slot name="backdrop">
      <BOverlay
        :blur="props.backdropBlur"
        :variant="props.backdropVariant"
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
import {onKeyStroke, useEventListener, useFocus} from '@vueuse/core'
import {computed, nextTick, ref, toRef} from 'vue'
import {useDefaults, useId, useSafeScrollLock} from '../../composables'
import type {BOffcanvasProps} from '../../types'
import {BvTriggerableEvent, isEmptySlot} from '../../utils'
import BButton from '../BButton/BButton.vue'
import BCloseButton from '../BButton/BCloseButton.vue'
import BOverlay from '../BOverlay/BOverlay.vue'
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

const _props = withDefaults(defineProps<BOffcanvasProps>(), {
  backdrop: true,
  backdropBlur: undefined,
  backdropVariant: 'dark',
  bodyAttrs: undefined,
  bodyClass: undefined,
  bodyScrolling: false,
  footerClass: undefined,
  headerClass: undefined,
  headerCloseClass: undefined,
  headerCloseLabel: 'Close',
  headerCloseVariant: 'secondary',
  id: undefined,
  lazy: false,
  noCloseOnBackdrop: false,
  noCloseOnEsc: false,
  noFocus: false,
  noHeader: false,
  noHeaderClose: false,
  placement: 'start',
  shadow: false,
  teleportDisabled: false,
  teleportTo: 'body',
  title: undefined,
  width: undefined,
})
const props = useDefaults(_props, 'BOffcanvas')

const emit = defineEmits<{
  'close': [value: BvTriggerableEvent]
  'esc': [value: BvTriggerableEvent]
  'hidden': [value: BvTriggerableEvent]
  'hide': [value: BvTriggerableEvent]
  'hide-prevented': []
  'show': [value: BvTriggerableEvent]
  'show-prevented': []
  'shown': [value: BvTriggerableEvent]
}>()

type SharedSlotsData = {
  visible: boolean
  placement: 'top' | 'bottom' | 'start' | 'end'
  hide: (trigger?: string) => void
}

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'backdrop'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'footer'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header'?: (props: SharedSlotsData) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header-close'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'title'?: (props: SharedSlotsData) => any
}>()

const modelValue = defineModel<boolean>({
  default: false,
})

const computedId = useId(() => props.id, 'offcanvas')
useSafeScrollLock(modelValue, () => props.bodyScrolling)

const element = ref<HTMLElement | null>(null)

onKeyStroke(
  'Escape',
  () => {
    hide('esc')
  },
  {target: element}
)

const {focused} = useFocus(element, {
  initialValue: modelValue.value && props.noFocus === false,
})

const isActive = ref(modelValue.value)
const lazyLoadCompleted = ref(false)

const showBackdrop = toRef(() => props.backdrop === true && modelValue.value === true)

const lazyShowing = toRef(
  () =>
    props.lazy === false ||
    (props.lazy === true && lazyLoadCompleted.value === true) ||
    (props.lazy === true && modelValue.value === true)
)

const hasHeaderCloseSlot = toRef(() => !isEmptySlot(slots['header-close']))
const headerCloseClasses = computed(() => [
  {'text-reset': !hasHeaderCloseSlot.value},
  props.headerCloseClass,
])
const headerCloseAttrs = computed(() => ({
  variant: hasHeaderCloseSlot.value ? props.headerCloseVariant : undefined,
  class: headerCloseClasses.value,
}))

const hasFooterSlot = toRef(() => !isEmptySlot(slots.footer))
const computedClasses = computed(() => [
  // props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
  'offcanvas', // Remove when above check is fixed
  `offcanvas-${props.placement}`,
  {
    show: modelValue.value && isActive.value === true,
    [`shadow-${props.shadow}`]: !!props.shadow,
  },
])

const computedStyles = computed(() => ({
  width: props.width,
}))

const sharedSlots = computed<SharedSlotsData>(() => ({
  visible: modelValue.value,
  placement: props.placement,
  hide,
}))

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
  if (
    (trigger === 'backdrop' && props.noCloseOnBackdrop) ||
    (trigger === 'esc' && props.noCloseOnEsc)
  ) {
    emit('hide-prevented')
    return
  }

  const event = buildTriggerableEvent('hide', {cancelable: trigger !== '', trigger})

  if (trigger === 'close') {
    emit(trigger, event)
  }
  if (trigger === 'esc') {
    emit(trigger, event)
  }
  emit('hide', event)

  if (event.defaultPrevented) {
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
    if (props.noFocus === false) {
      focused.value = true
    }
  })
}

const OnBeforeEnter = () => show()
const OnAfterEnter = () => {
  isActive.value = true
  focus()
  emit('shown', buildTriggerableEvent('shown'))
  if (props.lazy === true) lazyLoadCompleted.value = true
}
const onLeave = () => {
  isActive.value = false
}
const OnAfterLeave = () => {
  emit('hidden', buildTriggerableEvent('hidden'))
  if (props.lazy === true) lazyLoadCompleted.value = false
}
useEventListener(element, 'bv-toggle', () => {
  modelValue.value ? hide() : show()
})

defineExpose({
  hide,
  show,
})
</script>
