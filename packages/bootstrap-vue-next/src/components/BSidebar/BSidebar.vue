<template>
  <div
    class="sidebar-outer"
    :style="{zIndex: props.zIndex}"
    tab-index="-1"
    @keydown="onKeydown($event)"
  >
    <div v-if="props.backdrop && localShow" tabindex="0" @focus="onTopTrapFocus" />

    <transition
      v-bind="transitionProps"
      @before-enter="onBeforeEnter"
      @after-enter="onAfterEnter"
      @after-leave="onAfterLeave"
    >
      <component
        :is="tag"
        v-show="localShow"
        :id="id"
        ref="sidebarElement"
        class="sidebar"
        :class="computedClasses"
        :style="{width}"
        v-bind="computedAttrs"
      >
        <BSidebarHeader
          v-if="!noHeader"
          v-model="localShow"
          :tag="headerTag"
          :no-close="noHeaderClose"
          :close-label="closeLabel"
          :bg-variant="bgVariant"
          :text-variant="textVariant"
          :class="headerClass"
          :title="title"
        >
          <template v-if="hasHeaderSlot" #header>
            <slot name="default" v-bind="$slots.default" />
          </template>
          <template v-if="hasTitleSlot" #title>
            <slot name="title" v-bind="$slots.title" />
          </template>
          <template v-if="hasHeaderCloseSlot" #header-close>
            <slot name="header-close" v-bind="$slots['header-close']" />
          </template>
        </BSidebarHeader>

        <template v-if="!props.lazy || isOpen">
          <div class="sidebar-body" :class="computedBodyClasses">
            <slot />
          </div>

          <BSidebarFooter :tag="footerTag" :class="footerClass">
            <template v-if="hasFooterSlot" #default>
              <slot name="footer" v-bind="$slots.footer" />
            </template>
          </BSidebarFooter>
        </template>
      </component>
    </transition>

    <div v-if="props.backdrop && localShow" tabindex="0" @focus="onBottomTrapFocus" />

    <BTransition :no-fade="props.noSlide">
      <div
        v-if="!props.backdrop"
        v-show="localShow"
        class="sidebar-backdrop"
        :class="{[`bg-${backdropVariant}`]: backdropVariant}"
        @click="onBackdropClick"
      />
    </BTransition>
  </div>
</template>

<script setup lang="ts">
import {computed, defineEmits, ref, toRef, useAttrs, watch} from 'vue'
import {useEventListener} from '@vueuse/core'
import BTransition from '../BTransition/BTransition.vue'
import {attemptFocus} from '../../utils/dom'

import type {BSidebarProps} from '../../types'
import {getActiveElement, getTabables, IS_BROWSER, isEmptySlot} from '../../utils'
import {useColorVariantClasses} from '../../composables'
import BSidebarHeader from './BSidebarHeader.vue'

import './_sidebar.scss'

const props = withDefaults(defineProps<BSidebarProps>(), {
  id: undefined,
  visible: undefined,
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  backdrop: false, // If `true`, shows a basic backdrop
  backdropVariant: 'dark',
  bodyClass: undefined,
  closeLabel: undefined, // `aria-label` for close button,
  footerClass: undefined,
  footerTag: 'footer',
  headerClass: undefined,
  headerTag: 'header',
  lazy: false,
  noCloseOnBackdrop: false,
  noCloseOnEsc: false,
  noCloseOnRouteChange: false,
  noEnforceFocus: false,
  noHeader: false,
  noHeaderClose: false,
  noSlide: false,
  right: false,
  shadow: false,
  sidebarClass: undefined,
  tag: 'div',
  title: undefined,
  width: undefined,
  zIndex: undefined,
  // ColorExtendables props
  bgVariant: 'light',
  textVariant: 'dark',
  // End ColorExtendables props
})

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'footer'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'title'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header-close'?: (props: Record<string, never>) => any
}>()

const hasHeaderSlot = toRef(() => !isEmptySlot(slots.header))
const hasTitleSlot = toRef(() => !isEmptySlot(slots.title))
const hasHeaderCloseSlot = toRef(() => !isEmptySlot(slots['header-close']))
const hasFooterSlot = toRef(() => !isEmptySlot(slots.footer))

const resolvedBackgroundClasses = useColorVariantClasses(props)

const shadow = computed(() => (props.shadow === '' ? true : props.shadow))

const computedClasses = computed(() => [
  resolvedBackgroundClasses.value,
  {
    'shadow': shadow.value === true,
    [`shadow-${shadow.value}`]: shadow.value && shadow.value !== true,
    'sidebar-right': props.right,
  },
  props.sidebarClass,
])

const computedBodyClasses = computed(() => [resolvedBackgroundClasses.value, props.bodyClass])

const emit = defineEmits<{
  'change': [value: boolean]
  'state': [value: boolean]
  'sync-state': [value: boolean]
  'hidden': []
}>()

const modelValue = defineModel<boolean>({
  default: () => false,
})

const localShow = ref(modelValue)
const isOpen = ref(modelValue)

watch(modelValue, (newValue) => {
  localShow.value = newValue
})

watch(
  () => props.visible,
  (newValue, oldValue) => {
    if (newValue !== oldValue && newValue !== undefined) {
      localShow.value = newValue
    }
  }
)

watch(localShow, (newValue, oldValue) => {
  if (newValue !== oldValue && newValue !== undefined) {
    emitState(newValue)
    localShow.value = newValue
  }
})

function emitState(state: boolean = localShow.value) {
  emit('state', state) // TODO emitOnRoot
}

function hide() {
  localShow.value = false
}

function show() {
  localShow.value = true
}

function onKeydown(event: KeyboardEvent) {
  const {key} = event
  if (!props.noCloseOnEsc && key === 'Escape' && localShow.value) {
    hide()
  }
}

function onBackdropClick() {
  if (localShow.value && !props.noCloseOnBackdrop) {
    hide()
  }
}

function onTopTrapFocus() {
  const tabable = getTabables(sidebarElement.value).at(-1)
  if (!tabable) return
  enforceFocus(tabable)
}

function onBottomTrapFocus() {
  const tabables = getTabables(sidebarElement.value)
  enforceFocus(tabables[0])
}

let _returnFocusEl: Element | null = null

function onBeforeEnter() {
  // Returning focus to `document.body` may cause unwanted scrolls,
  // so we exclude setting focus on body
  _returnFocusEl = getActiveElement(IS_BROWSER ? [document.body] : [])
  // Trigger lazy render
  isOpen.value = true
}

function onAfterEnter(el: Element) {
  if (!el.contains(getActiveElement())) {
    enforceFocus(el)
  }
  emit('change', localShow.value)
}

function onAfterLeave() {
  if (_returnFocusEl !== null) {
    enforceFocus(_returnFocusEl)
  }
  _returnFocusEl = null
  // Trigger lazy render
  isOpen.value = false
  emit('hidden')
}

function enforceFocus(el: Element) {
  if (!props.noEnforceFocus) {
    attemptFocus(el as HTMLElement)
  }
}

const attrs = useAttrs()
const computedAttrs = computed(() => ({
  ...attrs,
  'tabindex': '-1',
  'role': 'dialog',
  'aria-modal': props.backdrop ? 'true' : 'false',
  'aria-hidden': localShow.value ? null : 'true',
  'aria-label': props.ariaLabel || null,
  'aria-labelledby': props.ariaLabelledby || props.id || null,
}))

const transitionProps = computed(() =>
  props.noSlide
    ? {css: true}
    : {
        css: true,
        enterClass: '',
        enterActiveClass: 'slide',
        enterToClass: 'show',
        leaveClass: 'show',
        leaveActiveClass: 'slide',
        leaveToClass: '',
      }
)

const sidebarElement = ref<HTMLElement | null>(null)

useEventListener(sidebarElement, 'bv-toggle', () => {
  localShow.value ? hide() : show()
})
</script>
