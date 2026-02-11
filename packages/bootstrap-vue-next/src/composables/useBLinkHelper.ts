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
            'append',
            'exactActiveClass',
            'href',
            'rel',
            'replace',
            'routerComponentName',
            'target',
            'to',
            'variant',
            'opacity',
            'opacityHover',
            'underlineVariant',
            'underlineOffset',
            'underlineOffsetHover',
            'underlineOpacity',
            'underlineOpacityHover',
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

  // Resolving props
  const resolvedTo = computed(() => toValue(to) || '')
  const resolvedReplace = readonly(toRef(replace))

  // Resolve the router component - can be a string name or a Component object
  const resolvedRouterComponent = computed(() => toValue(routerComponentName))

  const routerName = computed(() => {
    const componentValue = resolvedRouterComponent.value
    return typeof componentValue === 'string' ? toPascalCase(componentValue) : componentValue
  })

  const tag = computed(() => {
    const componentValue = resolvedRouterComponent.value
    let hasRouter = false

    if (typeof componentValue === 'string') {
      const pascalName = toPascalCase(componentValue)
      hasRouter = instance?.appContext?.app?.component(pascalName) !== undefined
    } else {
      // It's a Component object, so it exists
      hasRouter = true
    }

    if (!hasRouter || toValue(disabled) || !resolvedTo.value) {
      return 'a'
    }

    // Return the PascalCase name for string, or the Component object itself
    return typeof componentValue === 'string' ? toPascalCase(componentValue) : componentValue
  })

  // Resolve the actual component for useLink
  const ActualRouterComponent = computed(() => {
    const tagValue = tag.value
    if (typeof tagValue === 'string' && tagValue !== 'a') {
      return resolveDynamicComponent(tagValue) as typeof RouterLink | string
    }
    return tagValue
  })

  const useLink = computed(() => {
    const component = ActualRouterComponent.value
    if (component && typeof component !== 'string' && 'useLink' in component) {
      return component.useLink
    }
    return null
  })

  const isRouterLink = computed(() => tag.value === 'RouterLink')
  const isNuxtLink = computed(() => {
    // Check if tag is 'NuxtLink' (string) or detect NuxtLink component
    if (typeof tag.value === 'string') {
      return tag.value === 'NuxtLink'
    }
    // For component objects, check if it's the same as a registered NuxtLink component
    // This is more reliable than checking __name which can be stripped in production builds
    const registeredNuxtLink = instance?.appContext?.app?.component('NuxtLink')
    return registeredNuxtLink !== undefined && tag.value === registeredNuxtLink
  })
  const isNonStandardTag = computed(
    () => tag.value !== 'a' && !isRouterLink.value && !isNuxtLink.value
  )
  const isOfRouterType = computed(() => isRouterLink.value || isNuxtLink.value)

  const linkProps = computed(() => ({
    to: resolvedTo.value,
    replace: resolvedReplace.value,
  }))

  const _link = useLink.value?.({
    to: resolvedTo,
    replace: resolvedReplace,
  })
  const link = computed(() => (isOfRouterType.value ? _link : null))

  const computedHref = computed(() => {
    if (link.value?.href.value) return link.value.href.value

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
