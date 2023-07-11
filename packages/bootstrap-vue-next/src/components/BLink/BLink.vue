<template>
  <component
    :is="tag"
    v-if="tag === 'router-link'"
    v-slot="//@ts-ignore 
    {href: localHref, navigate, isActive}"
    v-bind="routerAttr"
    custom
  >
    <component
      :is="routerTag"
      :href="localHref"
      :class="[(activeBoolean ?? isActive) && activeClass]"
      v-bind="$attrs"
      @click=";[navigate($event), closeCollapse(), clicked($event)]"
    >
      <slot />
    </component>
  </component>
  <component :is="tag" v-else :class="computedLinkClasses" v-bind="routerAttr" @click="clicked">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {Booleanish, ColorVariant, LinkTarget} from '../../types'
import {useBooleanish} from '../../composables'
import {collapseInjectionKey, navbarInjectionKey} from '../../utils'
import {computed, getCurrentInstance, inject, type PropType, useAttrs} from 'vue'
import type {RouteLocation, RouteLocationRaw} from 'vue-router'
import type {BLinkProps} from '../../types/BLinkProps'

// TODO this component will likely have an issue with inheritAttrs
defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const props = withDefaults(defineProps<BLinkProps>(), {
  active: undefined,
  activeClass: 'router-link-active',
  append: false,
  disabled: false,
  event: 'click',
  href: undefined,
  // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
  rel: undefined,
  replace: false,
  routerComponentName: 'router-link',
  routerTag: 'a',
  target: '_self',
  to: undefined,
  variant: null,
  opacity: undefined,
  opacityHover: undefined,
  underlineVariant: null,
  underlineOffset: undefined,
  underlineOffsetHover: undefined,
  underlineOpacity: undefined,
  underlineOpacityHover: undefined,
  icon: false,
})

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const attrs = useAttrs()

const activeBoolean = useBooleanish(() => props.active)
const iconBoolean = useBooleanish(() => props.icon)
// TODO
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const appendBoolean = useBooleanish(() => props.append)
const disabledBoolean = useBooleanish(() => props.disabled)
// TODO
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const replaceBoolean = useBooleanish(() => props.replace)
const collapseData = inject(collapseInjectionKey, null)
const navbarData = inject(navbarInjectionKey, null)
const closeCollapse = () => {
  if (navbarData !== null) {
    collapseData?.close?.()
  }
}

const instance = getCurrentInstance()

const tag = computed<string>(() => {
  const routerName = props.routerComponentName
    .split('-')
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join('')
  const hasRouter = instance?.appContext.app.component(routerName) !== undefined
  if (!hasRouter || disabledBoolean.value || !props.to) {
    return 'a'
  }
  return props.routerComponentName
})

const computedHref = computed<string>(() => {
  const toFallback = '#'
  if (props.href) return props.href

  if (typeof props.to === 'string') return props.to || toFallback

  const to = props.to as RouteLocation

  if (
    Object.prototype.toString.call(to) === '[object Object]' &&
    (to.path || to.query || to.hash)
  ) {
    const path = to.path || ''
    const query = to.query
      ? `?${Object.keys(to.query)
          .map((e) => `${e}=${to.query[e]}`)
          .join('=')}`
      : ''
    const hash = !to.hash || to.hash.charAt(0) === '#' ? to.hash || '' : `#${to.hash}`
    return `${path}${query}${hash}` || toFallback
  }

  return toFallback
})

const computedClasses = computed(() => ({
  [`link-${props.variant}`]: props.variant !== null,
  [`link-opacity-${props.opacity}`]: props.opacity !== undefined,
  [`link-opacity-${props.opacityHover}-hover`]: props.opacityHover !== undefined,
  [`link-underline-${props.underlineVariant}`]: props.underlineVariant !== null,
  [`link-offset-${props.underlineOffset}`]: props.underlineOffset !== undefined,
  [`link-offset-${props.underlineOffsetHover}-hover`]: props.underlineOffsetHover !== undefined,
  [`link-underline-opacity-${props.underlineOpacity}`]: props.underlineOpacity !== undefined,
  [`link-underline-opacity-${props.underlineOpacityHover}-hover`]:
    props.underlineOpacityHover !== undefined,
  'icon-link': iconBoolean.value === true,
}))

const routerAttr = computed(() => ({
  'class': computedClasses.value,
  'to': props.to,
  'href': computedHref.value,
  'target': props.target,
  'rel': props.target === '_blank' && props.rel === undefined ? 'noopener' : props.rel || undefined,
  'tabindex': disabledBoolean.value
    ? '-1'
    : typeof attrs.tabindex === 'undefined'
    ? null
    : attrs.tabindex,
  'aria-disabled': disabledBoolean.value ? true : null,
}))

const computedLinkClasses = computed(() => ({
  [props.activeClass]: activeBoolean.value,
  disabled: disabledBoolean.value,
}))

const clicked = (e: MouseEvent): void => {
  if (disabledBoolean.value) {
    e.preventDefault()
    e.stopImmediatePropagation()
    return
  }
  collapseData?.close?.()

  emit('click', e)
}
</script>

<script lang="ts">
/**
 * @deprecated will be removed when BToast is refactored
 */
export const BLINK_PROPS = {
  active: {type: [Boolean, String, undefined] as PropType<Booleanish>, default: undefined},
  activeClass: {type: String, default: 'router-link-active'},
  append: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  disabled: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  event: {type: [String, Array], default: 'click'},
  href: {type: String},
  // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
  rel: {type: String, default: null},
  replace: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  routerComponentName: {type: String, default: 'router-link'},
  routerTag: {type: String, default: 'a'},
  target: {type: String as PropType<LinkTarget>, default: '_self'},
  to: {type: [String, Object] as PropType<RouteLocationRaw>, default: null},
  variant: {type: String as PropType<ColorVariant | null>, default: null},
}
</script>
