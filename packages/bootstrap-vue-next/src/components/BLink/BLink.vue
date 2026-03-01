<template>
  <component
    :is="tag.routerComponent"
    v-if="tag.routerComponent !== undefined"
    v-slot="slotProps"
    custom
    v-bind="routerProps"
  >
    <component
      :is="tag.tagComponent"
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
        (e: MouseEvent) => {
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
    </component>
  </component>
  <component
    :is="tag.tagComponent"
    v-else
    v-bind="{...routerProps, ...anchorProps, ...nonSpecialAttrs}"
    :class="computedClasses"
    @click="
      (e: MouseEvent) => {
        if (props.disabled) {
          preventNavigation(e)
        }
        emit('click', e)
      }
    "
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
const routerTag = shallowRef<string | Component>(props.routerTag)
watch(
  () => props.routerComponentName,
  (newValue) => {
    routerComponent.value = newValue
  }
)
watch(
  () => props.routerTag,
  (newValue) => {
    routerTag.value = newValue
  }
)
const {tag, isNuxtLink} = useBLinkTagResolver({
  routerComponentName: routerComponent,
  routerTag,
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
    href: toV ? undefined : props.href,
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
    ...navigationProps.value,
    ...nuxtSpecificProps.value,
  }

  // Prevent a nuxt runtime warning
  if (obj.noPrefetch === true) {
    delete obj.prefetch
  } else {
    delete obj.noPrefetch
  }
  if (isNuxtLink.value && obj.to) {
    delete obj.href
  }

  return obj
})
</script>
