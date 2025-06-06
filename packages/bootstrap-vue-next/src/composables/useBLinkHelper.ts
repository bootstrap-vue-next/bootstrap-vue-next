import {
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
  routerComponentName: MaybeRefOrGetter<string>
  disabled: MaybeRefOrGetter<boolean>
  to: MaybeRefOrGetter<RouteLocationRaw | undefined>
  href: MaybeRefOrGetter<string | undefined>
  replace: MaybeRefOrGetter<boolean>
}) => {
  // Getting instance
  const instance = getCurrentInstance()
  const router = instance?.appContext?.app?.config?.globalProperties?.$router
  const route = instance?.appContext?.app?.config?.globalProperties?.$route
  const RouterLinkComponent = resolveDynamicComponent('RouterLink') as typeof RouterLink | string
  const useLink =
    !!RouterLinkComponent &&
    typeof RouterLinkComponent !== 'string' &&
    'useLink' in RouterLinkComponent
      ? RouterLinkComponent.useLink
      : null

  // Resolving props
  const resolvedTo = computed(() => toValue(to) || '')
  const resolvedReplace = readonly(toRef(replace))

  const routerName = computed(() => toPascalCase(toValue(routerComponentName)))

  const tag = computed(() => {
    const hasRouter = instance?.appContext?.app?.component(routerName.value) !== undefined
    if (!hasRouter || toValue(disabled) || !resolvedTo.value) {
      return 'a'
    }
    return routerName.value
  })

  const isRouterLink = computed(() => tag.value === 'RouterLink')
  const isNuxtLink = computed(
    // @ts-expect-error we're doing an explicit check for Nuxt, so we can safely ignore this
    () => isRouterLink.value && typeof instance?.appContext?.app?.$nuxt !== 'undefined'
  )
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
