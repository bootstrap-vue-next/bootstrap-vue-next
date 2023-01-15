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
      @after-enter="OnAfterEnter"
      @after-leave="OnAfterLeave"
      @before-enter="OnBeforeEnter"
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
      fixed="true"
      no-wrap
      @click="hide('backdrop')"
    />
  </teleport>
</template>

<script setup lang="ts">
import {computed, ref, toRef, useSlots, watch} from 'vue'
import BOverlay from '../BOverlay/BOverlay.vue'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish, Breakpoint, ColorVariant} from '../../types'
import BCloseButton from '../BButton/BCloseButton.vue'
import {BvTriggerableEvent, isEmptySlot} from '../../utils'
import BTransition from '../BTransition/BTransition.vue'

interface BOffcanvasProps {
  dismissLabel?: string
  modelValue?: Booleanish
  bodyScrolling?: Booleanish
  backdrop?: Booleanish
  noCloseOnBackdrop?: Booleanish
  noCloseOnEsc?: Booleanish
  placement?: string
  title?: string
  noHeaderClose?: Booleanish
  noHeader?: Booleanish
  lazy?: Booleanish
  id?: string
  noFocus?: Booleanish
  static?: Booleanish
  backdropVariant?: ColorVariant
  responsive?: Breakpoint
}

const props = withDefaults(defineProps<BOffcanvasProps>(), {
  dismissLabel: 'Close',
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

// TODO list
/**
 * Look for new features in bv5
 * See if theres a way to pull out some of the shared code with BModal into composables
 * Put every single item into a folder that is in the components list. Lets just standardize them
 */

//  Done list
/**
 * noClose items
 * Preventable
 * lazy
 * static
 * Renamed BModalClass
 */

const modelValueBoolean = useBooleanish(toRef(props, 'modelValue'))
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

const isShowing = ref(false)

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

const element = ref<null | HTMLElement>(null)

const computedId = useId(toRef(props, 'id'), 'offcanvas')

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

const emit = defineEmits<BOffcanvasEmits>()

const slots = useSlots()

const hasFooterSlot = computed<boolean>(() => !isEmptySlot(slots.footer))
const computedClasses = computed(() => [
  props.responsive === undefined ? 'offcanvas' : `offcanvas-${props.responsive}`,
  `offcanvas-${props.placement}`,
  {
    show: modelValueBoolean.value && isShowing.value === false,
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
    emit('update:modelValue', true)
    emit('hide-prevented')
    return
  }
  emit('update:modelValue', false)
}

const show = () => {
  const event = buildTriggerableEvent('show', {cancelable: true})
  emit('show', event)
  if (event.defaultPrevented) {
    emit('update:modelValue', false)
    emit('show-prevented')
    return
  }
  emit('update:modelValue', true)
}

const OnBeforeEnter = () => {
  isShowing.value = true
  show()
}
const OnAfterEnter = () => {
  isShowing.value = false
  emit('shown', buildTriggerableEvent('shown'))
  if (lazyBoolean.value === true) lazyLoadCompleted.value = true
}
const OnAfterLeave = () => {
  emit('hidden', buildTriggerableEvent('hidden'))
  if (lazyBoolean.value === true) lazyLoadCompleted.value = false
}

watch(
  modelValueBoolean,
  (newValue) => {
    if (newValue === true && !noFocusBoolean.value && element.value !== null) element.value.focus()
  },
  {flush: 'post'}
)
</script>
