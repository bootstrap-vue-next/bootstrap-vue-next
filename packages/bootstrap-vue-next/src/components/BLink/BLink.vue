<template>
  <component
    :is="tag"
    :class="computedClasses"
    :target="props.target"
    :href="computedHref"
    :rel="computedRel"
    :tabindex="computedTabIndex"
    :aria-disabled="props.disabled ? true : null"
    v-bind="computedSpecificProps"
    @click="
      (e: MouseEvent) => {
        clicked(e)
        link?.navigate(e)
      }
    "
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import {useLinkClasses} from '../../composables/useLinkClasses'
import type {BLinkProps} from '../../types/ComponentProps'
import {collapseInjectionKey, navbarInjectionKey} from '../../utils/keys'
import {computed, inject, useAttrs} from 'vue'
import {useBLinkTagResolver} from '../../composables/useBLinkHelper'

const defaultActiveClass = 'active'

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const _props = withDefaults(defineProps<BLinkProps>(), {
  active: undefined,
  activeClass: 'router-link-active',
  disabled: false,
  exactActiveClass: 'router-link-exact-active active',
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

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

const attrs = useAttrs()
const {computedHref, tag, link, isNuxtLink, isRouterLink, linkProps, isNonStandardTag} =
  useBLinkTagResolver({
    routerComponentName: () => props.routerComponentName,
    disabled: () => props.disabled,
    to: () => props.to,
    replace: () => props.replace,
    href: () => props.href,
  })

const collapseData = inject(collapseInjectionKey, null)
const navbarData = inject(navbarInjectionKey, null)

/**
 * Not to be confused with computedLinkClasses
 */
const linkValueClasses = useLinkClasses(props)
const computedClasses = computed(() => [
  linkValueClasses.value,
  attrs.class,
  computedLinkClasses.value,
  {
    [defaultActiveClass]: props.active,
    [props.activeClass]: link.value?.isActive.value || false,
    [props.exactActiveClass]: link.value?.isExactActive.value || false,
    'stretched-link': props.stretched === true,
  },
])
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

const computedRel = computed(() =>
  props.target === '_blank' ? (!props.rel && props.noRel ? 'noopener' : props.rel) : undefined
)
const computedTabIndex = computed(() =>
  props.disabled ? '-1' : typeof attrs.tabindex === 'undefined' ? null : attrs.tabindex
)

const nuxtSpecificProps = computed(() => ({
  prefetch: props.prefetch,
  noPrefetch: props.noPrefetch,
  prefetchOn: props.prefetchOn,
  prefetchedClass: props.prefetchedClass,
  ...linkProps.value,
}))
const computedSpecificProps = computed(() => ({
  ...(isRouterLink.value ? linkProps.value : undefined),
  // In addition to being Nuxt specific, we add these values if it's some non-standard tag. We don't know what it is,
  // So we just add it anyways. It will be made as an attr if it's unused so it's fine
  ...(isNuxtLink.value || isNonStandardTag.value ? nuxtSpecificProps.value : undefined),
}))
</script>
