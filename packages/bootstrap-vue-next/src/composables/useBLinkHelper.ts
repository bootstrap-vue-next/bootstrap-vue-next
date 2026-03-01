import {
  type Component,
  computed,
  getCurrentInstance,
  type MaybeRef,
  type MaybeRefOrGetter,
  readonly,
  toRef,
  unref,
} from 'vue'
import {isLink} from '../utils/isLink'
import {pick} from '../utils/object'
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
  routerTag,
}: {
  routerComponentName: MaybeRef<string | Component>
  routerTag: MaybeRef<string | Component>
}) => {
  const instance = getCurrentInstance()

  const routerName = computed(() => {
    const routerComponent = unref(routerComponentName)
    if (typeof routerComponent === 'string') {
      return toPascalCase(routerComponent)
    }
    return routerComponent
  })

  const getSafeAppContext = () =>
    typeof instance !== 'undefined' &&
    instance !== null &&
    'appContext' in instance &&
    typeof instance.appContext !== 'undefined' &&
    instance.appContext !== null &&
    'app' in instance.appContext &&
    typeof instance.appContext.app !== 'undefined' &&
    instance.appContext.app !== null
      ? instance.appContext.app
      : null

  const isNuxtLink = computed(
    // @ts-expect-error we're doing an explicit check for Nuxt, so we can safely ignore this
    () => getSafeAppContext()?.$nuxt !== 'undefined'
  )

  /**
   * If routerName is a component, use that and assume it somehow extends router (ie uses slots as its navigation mechanism)
   * Otherwise, we will prefer to use routerTag, as it is more direct
   */
  const tag = computed<{
    routerComponent: Component | undefined
    tagComponent: Component | string
  }>(() => {
    const maybeGetComponent = (): Component | undefined => {
      // The passed in value is a component so we use that directly
      // (Nuxt module will pass through as a Component)
      if (typeof routerName.value !== 'string') {
        return routerName.value
      }

      // routerName is a string, but we need to check if it's a component first (and ensure safe use of getCurrentInstance [webcomponents I think?])
      // return the component from the app context if it exists
      // Used when VueRouter is present and RouterLink is registered globally
      return getSafeAppContext()?.component(routerName.value) || undefined
    }

    const getTagComponent = () => unref(routerTag)

    return {
      routerComponent: maybeGetComponent(),
      tagComponent: getTagComponent(),
    }
  })

  return {
    tag,
    isNuxtLink,
  }
}
