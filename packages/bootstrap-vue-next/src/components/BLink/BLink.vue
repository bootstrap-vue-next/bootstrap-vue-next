<template>
  <component
    :is="tag"
    v-if="tag === 'router-link'"
    v-slot="//@ts-ignore 
    {href: localHref, navigate, isActive, isExactActive}"
    v-bind="routerAttr"
    custom
  >
    <component
      :is="routerTag"
      :href="localHref"
      :class="{
        [defaultActiveClass]: activeBoolean,
        [activeClass]: isActive,
        [exactActiveClass]: isExactActive,
      }"
      v-bind="$attrs"
      @click=";[navigate($event), clicked($event)]"
    >
      <slot />
    </component>
  </component>
  <component :is="tag" v-else :class="computedLinkClasses" v-bind="routerAttr" @click="clicked">
    <slot />
  </component>
</template>

<script setup lang="ts">
import type {BLinkProps} from '../../types'
import {useBooleanish} from '../../composables'
import {collapseInjectionKey, navbarInjectionKey} from '../../utils'
import {computed, getCurrentInstance, inject, useAttrs} from 'vue'

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
  exactActiveClass: 'router-link-exact-active',
  href: undefined,
  icon: false,
  opacity: undefined,
  opacityHover: undefined,
  // noPrefetch: {type: [Boolean, String] as PropType<Booleanish>, default: false},
  // prefetch: {type: [Boolean, String] as PropType<Booleanish>, default: null},
  rel: undefined,
  replace: false,
  routerComponentName: 'router-link',
  routerTag: 'a',
  target: undefined,
  to: undefined,
  underlineOffset: undefined,
  underlineOffsetHover: undefined,
  underlineOpacity: undefined,
  underlineOpacityHover: undefined,
  underlineVariant: null,
  variant: null,
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

const instance = getCurrentInstance()

const defaultActiveClass = 'active' as const

const tag = computed(() => {
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

const computedHref = computed(() => {
  const toFallback = '#'
  if (props.href) return props.href

  if (typeof props.to === 'string') return props.to || toFallback

  const {to} = props

  if (to !== undefined && 'path' in to) {
    const path = to.path || ''
    const query = to.query
      ? `?${Object.keys(to.query)
          .map((e) => `${e}=${to.query?.[e]}`)
          .join('=')}`
      : ''
    const hash = !to.hash || to.hash.charAt(0) === '#' ? to.hash || '' : `#${to.hash}`
    return `${path}${query}${hash}` || toFallback
  }
  // There is no resolver for `RouteLocationNamedRaw`. Which, I'm not sure there can be one in this context.

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
  'rel': props.target === '_blank' ? props.rel ?? 'noopener' : undefined,
  'tabindex': disabledBoolean.value
    ? '-1'
    : typeof attrs.tabindex === 'undefined'
    ? null
    : attrs.tabindex,
  'aria-disabled': disabledBoolean.value ? true : null,
}))

const computedLinkClasses = computed(() => ({
  [defaultActiveClass]: activeBoolean.value,
  disabled: disabledBoolean.value,
}))

const clicked = (e: MouseEvent): void => {
  if (disabledBoolean.value) {
    e.preventDefault()
    e.stopImmediatePropagation()
    return
  }

  if (
    (collapseData?.isNav?.value === true && navbarData === null) ||
    (navbarData !== null && navbarData.autoClose?.value === true)
  ) {
    collapseData?.close?.()
  }

  emit('click', e)
}
</script>
