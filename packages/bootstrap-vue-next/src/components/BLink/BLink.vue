<template>
  <div>
    <component :is="tag" v-bind="rootBoundAttributes">
      <template #default="scope">
        <slot v-if="!isRouterLink" />
        <component
          :is="props.routerTag"
          v-else
          v-bind="generalAttributesToATag"
          :href="scope.href"
          :class="[
            {
              [defaultActiveClass]: props.active,
              [props.activeClass]: scope.isActive,
              [props.exactActiveClass]: scope.isExactActive,
            },
          ]"
          @click="
            (e: MouseEvent) => {
              clicked(e)
              scope.navigate(e)
            }
          "
        >
          <slot />
        </component>
      </template>
    </component>
  </div>
</template>

<script setup lang="ts">
import type {RouterLinkProps} from 'vue-router'
import {useDefaults} from '../../composables/useDefaults'
import {useLinkClasses} from '../../composables/useLinkClasses'
import type {BLinkProps} from '../../types/ComponentProps'
import {collapseInjectionKey, navbarInjectionKey} from '../../utils/keys'
import {computed, inject, useAttrs} from 'vue'
import {useBLinkTagResolver} from '../../composables/useBLinkHelper'

const defaultActiveClass = 'active'

defineOptions({
  inheritAttrs: false,
})

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
  // noPrefetch: {type: Boolean, default: false},
  // prefetch: {type: Boolean, default: null},
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
const {computedHref, isRouterLink, tag} = useBLinkTagResolver(
  computed(() => ({
    routerComponentName: props.routerComponentName,
    disabled: props.disabled,
    to: props.to,
    href: props.href,
  }))
)

const collapseData = inject(collapseInjectionKey, null)
const navbarData = inject(navbarInjectionKey, null)

/**
 * Not to be confused with computedLinkClasses
 */
const linkValueClasses = useLinkClasses(props)
const computedClasses = computed(() => [
  linkValueClasses.value,
  attrs.class,
  {
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

/**
 * These are applied to the a tag itself, when router-link exists, it must be applied to the component
 * (the router-link is renderless)
 */
const generalAttributesToATag = computed(() => ({
  ...attrs,
  'class': computedClasses.value,
  'href': computedHref.value,
  'target': props.target,
  'rel': props.target === '_blank' ? (props.rel ?? 'noopener') : undefined,
  'tabindex': props.disabled ? '-1' : typeof attrs.tabindex === 'undefined' ? null : attrs.tabindex,
  'aria-disabled': props.disabled ? true : null,
}))
/**
 * These are applied to the router-link component as props
 */
const vueRouterSpecificAttrs = computed<Partial<RouterLinkProps>>(() => ({
  to: props.to,
  replace: props.replace,
  activeClass: props.activeClass,
  custom: true,
  exactActiveClass: props.exactActiveClass,
}))
/**
 * We dynamically switch which items go to the root <component :is /> because we give router-link its props if it's a router-link
 * And then the a tag gets attributes when router-link,
 *
 * otherwise the root is already an a tag, so it gets the attributes
 */
const rootBoundAttributes = computed(() =>
  isRouterLink.value
    ? vueRouterSpecificAttrs.value
    : {
        ...generalAttributesToATag.value,
        class: [generalAttributesToATag.value.class, computedLinkClasses.value],
        onClick: clicked,
      }
)
</script>
