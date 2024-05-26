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
      :is="props.routerTag"
      :href="localHref"
      :class="{
        [defaultActiveClass]: props.active,
        [props.activeClass]: isActive,
        [props.exactActiveClass]: isExactActive,
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
import {useDefaults} from '../../composables'
import type {BLinkProps} from '../../types'
import {collapseInjectionKey, navbarInjectionKey} from '../../utils'
import {computed, getCurrentInstance, inject, useAttrs} from 'vue'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const _props = withDefaults(defineProps<BLinkProps>(), {
  active: undefined,
  activeClass: 'router-link-active',
  disabled: false,
  exactActiveClass: 'router-link-exact-active',
  href: undefined,
  icon: false,
  opacity: undefined,
  opacityHover: undefined,
  stretched: false,
  // noPrefetch: {type: Boolean, default: false},
  // prefetch: {type: Boolean, default: null},
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
const props = useDefaults(_props, 'BLink')

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const attrs = useAttrs()

const collapseData = inject(collapseInjectionKey, null)
const navbarData = inject(navbarInjectionKey, null)

const instance = getCurrentInstance()

const defaultActiveClass = 'active'

const tag = computed(() => {
  const routerName = props.routerComponentName
    .split('-')
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join('')
  const hasRouter = instance?.appContext.app.component(routerName) !== undefined
  if (!hasRouter || props.disabled || !props.to) {
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
  'icon-link': props.icon === true,
  'stretched-link': props.stretched === true,
}))

const routerAttr = computed(() => ({
  'class': computedClasses.value,
  'to': props.to,
  'replace': props.replace,
  'href': computedHref.value,
  'target': props.target,
  'rel': props.target === '_blank' ? props.rel ?? 'noopener' : undefined,
  'tabindex': props.disabled ? '-1' : typeof attrs.tabindex === 'undefined' ? null : attrs.tabindex,
  'aria-disabled': props.disabled ? true : null,
}))

const computedLinkClasses = computed(() => ({
  [defaultActiveClass]: props.active,
  disabled: props.disabled,
}))

const clicked = (e: Readonly<MouseEvent>): void => {
  if (props.disabled) {
    e.preventDefault()
    e.stopImmediatePropagation()
    return
  }

  if (
    (collapseData?.isNav?.value === true && navbarData === null) ||
    (navbarData !== null && navbarData.autoClose?.value === true)
  ) {
    collapseData?.hide?.()
  }

  emit('click', e)
}
</script>
