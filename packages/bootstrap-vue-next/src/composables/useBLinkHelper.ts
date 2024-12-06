import {
  computed,
  getCurrentInstance,
  type MaybeRefOrGetter,
  readonly,
  type Ref,
  resolveDynamicComponent,
  toRef,
} from 'vue'
import {isLink} from '../utils/isLink'
import {pick} from '../utils/object'
import {type RouteLocationRaw, RouterLink} from 'vue-router'

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

export const useBLinkTagResolver = (
  props: MaybeRefOrGetter<{
    routerComponentName: string
    disabled: boolean
    to: RouteLocationRaw | undefined
    href: string | undefined
    replace: boolean
  }>
) => {
  const instance = getCurrentInstance()
  const router = instance?.appContext.app.config.globalProperties.$router
  const route = instance?.appContext.app.config.globalProperties.$route
  const RouterLinkComponent = resolveDynamicComponent('RouterLink') as typeof RouterLink | string
  const useLink = typeof RouterLinkComponent === 'string' ? null : RouterLinkComponent.useLink
  const resolvedProps = toRef(props)

  const link = useLink?.({
    to: toRef(() => resolvedProps.value.to || '') as Ref<string>,
    replace: toRef(() => resolvedProps.value.replace),
  })

  const routerName = computed(() =>
    resolvedProps.value.routerComponentName
      .split('-')
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join('')
  )

  const tag = computed(() => {
    const hasRouter = instance?.appContext.app.component(routerName.value) !== undefined
    if (!hasRouter || resolvedProps.value.disabled || !resolvedProps.value.to) {
      return 'a'
    }
    return resolvedProps.value.routerComponentName
  })

  const computedHref = computed(() => {
    const toFallback = '#'
    if (resolvedProps.value.href) return resolvedProps.value.href

    if (typeof resolvedProps.value.to === 'string') return resolvedProps.value.to || toFallback

    // Stabilize the `to` prop for the callback functions
    const {to: stableTo} = resolvedProps.value

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
    tag,
    isRouterLink: computed(() => tag.value === 'router-link'),
    isNuxtLink: computed(() => tag.value === 'nuxt-link'),
    computedHref,
    routerName,
    router,
    route,
    link,
  }
}
