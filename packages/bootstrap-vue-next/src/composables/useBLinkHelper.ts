import {
  type Component,
  computed,
  getCurrentInstance,
  type MaybeRefOrGetter,
  readonly,
  resolveDynamicComponent,
  toRef,
  toValue,
} from 'vue'
import {isLink} from '../utils/isLink'
import {pick} from '../utils/object'
import type {RouteLocationRaw, RouterLink} from 'vue-router'
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
  to,
  disabled,
  href,
  replace,
  routerComponentName,
}: {
  routerComponentName: MaybeRefOrGetter<string | Component>
  disabled: MaybeRefOrGetter<boolean>
  to: MaybeRefOrGetter<RouteLocationRaw | undefined>
  href: MaybeRefOrGetter<string | undefined>
  replace: MaybeRefOrGetter<boolean>
}) => {
  // Getting instance
  const instance = getCurrentInstance()
  const router = instance?.appContext?.app?.config?.globalProperties?.$router
  const route = instance?.appContext?.app?.config?.globalProperties?.$route

  // resolvedynamiccomponent will return a string if the component is not found
  const RouterLinkComponent = resolveDynamicComponent('RouterLink') as typeof RouterLink | string

  // Resolving props
  const resolvedTo = computed(() => toValue(to) || '')
  const resolvedReplace = readonly(toRef(replace))

  const routerName = computed(() => {
    const routerComponent = toValue(routerComponentName)
    if (typeof routerComponent === 'string') {
      return toPascalCase(routerComponent)
    }
    return routerComponent
  })
  const useLink = (
    typeof routerName.value !== 'string' && 'useLink' in routerName.value
      ? routerName.value.useLink
      : typeof RouterLinkComponent !== 'string' && 'useLink' in RouterLinkComponent
        ? RouterLinkComponent.useLink
        : null
  ) as (typeof RouterLink)['useLink'] | null

  const isNuxtLink = computed(
    // @ts-expect-error we're doing an explicit check for Nuxt, so we can safely ignore this
    () => typeof instance?.appContext?.app?.$nuxt !== 'undefined'
  )
  const isRouterLink = computed(() => routerName.value === 'RouterLink')

  const tag = computed(() => {
    // If is disabled or there is no `to` prop, render a simple `<a>` tag
    if (toValue(disabled) || !resolvedTo.value) {
      return 'a'
    }

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
  const isOfRouterType = computed(() => isRouterLink.value || isNuxtLink.value)
  const linkProps = computed(() => ({
    to: resolvedTo.value,
    replace: resolvedReplace.value,
  }))

  const _link = useLink?.({
    to: resolvedTo,
    replace: resolvedReplace,
  })
  const link = computed(() => (isOfRouterType.value ? _link : null))

  const computedHref = computed(() => {
    if (link.value?.href.value && resolvedTo.value) return link.value.href.value

    const toFallback = '#'
    const resolvedHref = toValue(href)
    if (resolvedHref) return resolvedHref

    if (typeof resolvedTo.value === 'string') return resolvedTo.value || toFallback

    // Stabilize the `to` prop for the callback functions
    const stableTo = resolvedTo.value

    if (stableTo !== undefined && 'path' in stableTo) {
      const path = stableTo.path || ''
      const query = stableTo.query
        ? `?${Object.keys(stableTo.query)
            .map((e) => `${e}=${stableTo.query?.[e]}`)
            .join('=')}`
        : ''
      const hash =
        !stableTo.hash || stableTo.hash.charAt(0) === '#'
          ? stableTo.hash || ''
          : `#${stableTo.hash}`
      return `${path}${query}${hash}` || toFallback
    }
    // There is no resolver for `RouteLocationNamedRaw`. Which, I'm not sure there can be one in this context.

    return toFallback
  })

  return {
    isNonStandardTag,
    tag,
    isRouterLink,
    isNuxtLink,
    computedHref,
    routerName,
    router,
    route,
    link,
    linkProps,
  }
}
