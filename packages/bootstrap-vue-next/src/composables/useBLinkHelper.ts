import {computed, type MaybeRefOrGetter, toRef} from 'vue'
import {isLink, pick} from '../utils'

export default <T extends Record<string, unknown>, const B extends ReadonlyArray<PropertyKey>>(
  props: MaybeRefOrGetter<T>,
  pickProps?: MaybeRefOrGetter<B | (keyof T)[]>
) => {
  const pickPropsResolved = toRef(pickProps)
  const resolvedProps = toRef(props)

  const computedLink = toRef(() => isLink(resolvedProps.value))
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
