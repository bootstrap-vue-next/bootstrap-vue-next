<template>
  <a
    v-if="isExternalLink || props.disabled"
    :href="navigationProps.href"
    v-bind="{...anchorProps, ...nonSpecialAttrs}"
    :class="computedClasses"
    @click="
      (e) => {
        if (props.disabled) {
          preventNavigation(e)
        }
        emit('click', e)
      }
    "
  >
    <slot />
  </a>
  <component
    :is="tag"
    v-else-if="isNuxtLink || isRouterLink"
    v-slot="slotProps"
    custom
    v-bind="routerProps"
  >
    <a
      v-bind="{...anchorProps, ...nonSpecialAttrs}"
      :href="
        typeof slotProps === 'object' && slotProps !== null && 'href' in slotProps
          ? slotProps.href
          : undefined
      "
      :class="[
        computedClasses,
        {
          [props.activeClass]:
            typeof slotProps === 'object' && slotProps !== null && 'isActive' in slotProps
              ? slotProps.isActive || false
              : false,
          [props.exactActiveClass]:
            typeof slotProps === 'object' && slotProps !== null && 'isExactActive' in slotProps
              ? slotProps.isExactActive || false
              : false,
        },
      ]"
      @click="
        (e) => {
          routerNavigate(
            e,
            typeof slotProps === 'object' &&
              slotProps !== null &&
              'navigate' in slotProps &&
              typeof slotProps.navigate === 'function'
              ? slotProps.navigate
              : undefined
          )
        }
      "
    >
      <slot />
    </a>
  </component>
  <component
    :is="tag"
    v-else
    v-bind="{...routerProps, ...anchorProps, ...nonSpecialAttrs}"
    :class="computedClasses"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import {useLinkClasses} from '../../composables/useLinkClasses'
import {collapseInjectionKey, navbarInjectionKey} from '../../utils/keys'
import {type Component, computed, inject, shallowRef, useAttrs, watch} from 'vue'
import {useBLinkTagResolver} from '../../composables/useBLinkHelper'
import type {BLinkEmits, BLinkProps, BLinkSlots} from '../../types'

const defaultActiveClass = 'active'

defineOptions({
  inheritAttrs: false,
})
const _props = withDefaults(defineProps<BLinkProps>(), {
  active: undefined,
  activeClass: 'router-link-active',
  disabled: false,
  exactActiveClass: 'router-link-exact-active',
  href: undefined,
  icon: false,
  opacity: undefined,
  opacityHover: undefined,
  noPrefetch: undefined,
  prefetchOn: undefined,
  noRel: false,
  prefetchedClass: undefined,
  prefetch: undefined,
  rel: undefined,
  replace: false,
  routerComponentName: 'router-link',
  routerTag: 'a',
  stretched: false,
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
const emit = defineEmits<BLinkEmits>()
defineSlots<BLinkSlots>()
const attrs = useAttrs()

const routerComponent = shallowRef<string | Component>(props.routerComponentName)
watch(
  () => props.routerComponentName,
  (newValue) => {
    routerComponent.value = newValue
  }
)
const {tag, isNuxtLink, isRouterLink, isNonStandardTag} = useBLinkTagResolver({
  routerComponentName: routerComponent,
})

const collapseData = inject(collapseInjectionKey, null)
const navbarData = inject(navbarInjectionKey, null)

/**
 * Not to be confused with computedLinkClasses
 */
const linkValueClasses = useLinkClasses(props)
const computedClasses = computed(() => [
  linkValueClasses.value,
  {
    [defaultActiveClass]: props.active,
    'stretched-link': props.stretched,
    'disabled': props.disabled,
  },
])

const preventNavigation = (e: Readonly<MouseEvent>): void => {
  e.preventDefault()
  e.stopImmediatePropagation()
}
const routerNavigate = (
  e: Readonly<MouseEvent>,
  navigate: undefined | ((e: Readonly<MouseEvent>) => void)
): void => {
  if (props.disabled) {
    preventNavigation(e)
    emit('click', e)
    return
  }

  emit('click', e)

  if (
    !e.defaultPrevented &&
    ((collapseData?.isNav?.value === true && navbarData === null) ||
      (navbarData !== null && navbarData.noAutoClose?.value !== true))
  ) {
    collapseData?.hide?.()
  }

  navigate?.(e)
}
const nonSpecialAttrs = computed(() => {
  const obj = {...attrs}
  delete obj.class
  return obj
})
const navigationProps = computed(() => {
  const toV = props.to || ''

  return {
    to: toV,
    // vitepress requires href to be set in addition to `to` I think
    href: props.href || (typeof toV === 'string' && toV ? toV : undefined),
  }
})
const isExternalLink = computed(
  () =>
    !navigationProps.value.to ||
    (typeof navigationProps.value.to === 'string' &&
      (navigationProps.value.to.startsWith('//') ||
        navigationProps.value.to.startsWith('http://') ||
        navigationProps.value.to.startsWith('https://')))
)

const computedRel = computed(() => {
  if (props.rel) return props.rel
  if (props.noRel) return undefined
  if (isExternalLink.value || props.target) return 'noopener noreferrer'
  return undefined
})
const computedTabIndex = computed(() => (props.disabled ? '-1' : props.tabindex))
const anchorProps = computed(() => ({
  target: props.target,
  tabindex: computedTabIndex.value,
  ariaDisabled: props.disabled ? true : undefined,
  rel: computedRel.value,
  class: attrs.class,
}))

const nuxtSpecificProps = computed(() => ({
  prefetch: props.prefetch,
  noPrefetch: props.noPrefetch,
  prefetchOn: props.prefetchOn,
  prefetchedClass: props.prefetchedClass,
  ...navigationProps.value,
}))
const routerProps = computed(() => {
  const obj = {
    ...props,
    ...(isRouterLink.value ? navigationProps.value : undefined),
    // In addition to being Nuxt specific, we add these values if it's some non-standard tag. We don't know what it is,
    // So we just add it anyways. It will be made as an attr if it's unused so it's fine
    ...(isNuxtLink.value || isNonStandardTag.value ? nuxtSpecificProps.value : undefined),
  }

  // Prevent a nuxt runtime warning
  if (obj.noPrefetch === true) {
    delete obj.prefetch
  } else {
    delete obj.noPrefetch
  }
  // Prevent a nuxt runtime warning when both href and to are used.
  // We keep href for non-nuxt because vitepress needs it
  if (isNuxtLink.value && obj.to) {
    delete obj.href
  }

  return obj
})
</script>
