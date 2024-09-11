import {computed, type MaybeRefOrGetter, readonly, toRef} from 'vue'
import {isLink} from '../utils/isLink'
import {pick} from '../utils/object'

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
