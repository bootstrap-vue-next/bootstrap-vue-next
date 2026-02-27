import {
  type Component,
  computed,
  getCurrentInstance,
  type MaybeRef,
  type MaybeRefOrGetter,
  readonly,
  resolveDynamicComponent,
  toRef,
  unref,
} from 'vue'
import {isLink} from '../utils/isLink'
import {pick} from '../utils/object'
import type {RouterLink} from 'vue-router'
import {toPascalCase} from '../utils/stringUtils'

export const useBLinkHelper = <
  T extends Record<string, unknown>,
  const B extends ReadonlyArray<PropertyKey>,
>(
  props: MaybeRefOrGetter<T>,
  pickProps?: MaybeRefOrGetter<B | (keyof T)[]>
) => {
  const pickPropsResolved = readonly(toRef(pickProps))
  const resolvedProps = readonly(toRef(props))

  const computedLink = computed(() => isLink(resolvedProps.value))
  const computedLinkProps = computed(() =>
    computedLink.value
      ? pick(
          resolvedProps.value,
          pickPropsResolved.value ?? [
            'active',
            'activeClass',
            'disabled',
            'exactActiveClass',
            'href',
            'icon',
            'noRel',
            'opacity',
            'opacityHover',
            'noPrefetch',
            'prefetch',
            'prefetchOn',
            'prefetchedClass',
            'rel',
            'replace',
            'routerComponentName',
            'routerTag',
            'stretched',
            'target',
            'to',
            'underlineOffset',
            'underlineOffsetHover',
            'underlineOpacity',
            'underlineOpacityHover',
            'underlineVariant',
            'variant',
          ]
        )
      : {}
  )

  return {computedLink, computedLinkProps}
}

export const useBLinkTagResolver = ({
  routerComponentName,
}: {
  routerComponentName: MaybeRef<string | Component>
}) => {
  // Getting instance
  const instance = getCurrentInstance()

  // resolvedynamiccomponent will return a string if the component is not found
  const RouterLinkComponent = resolveDynamicComponent('RouterLink') as typeof RouterLink | string

  const routerName = computed(() => {
    const routerComponent = unref(routerComponentName)
    if (typeof routerComponent === 'string') {
      return toPascalCase(routerComponent)
    }
    return routerComponent
  })

  const isNuxtLink = computed(
    // @ts-expect-error we're doing an explicit check for Nuxt, so we can safely ignore this
    () => typeof instance?.appContext?.app?.$nuxt !== 'undefined'
  )
  const isRouterLink = computed(
    () => routerName.value === 'RouterLink' && typeof RouterLinkComponent !== 'string'
  )

  const tag = computed(() => {
    // Is it actually a component? Use that
    if (typeof routerName.value !== 'string') {
      return routerName.value
    }
    // Check if is router link second
    if (isRouterLink.value && typeof RouterLinkComponent !== 'string') {
      return RouterLinkComponent
    }

    // routerName is a string, but we need to check if it's a component first
    // return the component from the app context if it exists, otherwise fallback to 'a'
    return instance?.appContext?.app?.component(routerName.value) || 'a'
  })

  const isNonStandardTag = computed(
    () => tag.value !== 'a' && !isRouterLink.value && !isNuxtLink.value
  )

  return {
    isNonStandardTag,
    tag,
    isRouterLink,
    isNuxtLink,
  }
}
