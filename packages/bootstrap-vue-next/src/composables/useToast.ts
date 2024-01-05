import {createGlobalState} from '@vueuse/core'
import {
  type Component,
  computed,
  type ComputedRef,
  type MaybeRefOrGetter,
  shallowRef,
  toValue,
} from 'vue'
import type {OrchestratedToast} from '../types'
import BToast from '../components/BToast/BToast.vue'

const posDefault = 'top-right'

export default createGlobalState(() => {
  const toasts = shallowRef<
    ComputedRef<{
      component: unknown
      props: Omit<OrchestratedToast, 'value'> & {
        _self: symbol
        _modelValue: OrchestratedToast['value'] // Convert it to be the same name as useModalController.
        // The difference between the two is that unlike that one, this value can be defined (there's cannot be).
      }
    }>[]
  >([])

  /**
   * @returns {symbol} A symbol that corresponds to its unique id. You can pass this id to the hide function to force a Toast to hide
   */
  const show = <T>(
    obj:
      | MaybeRefOrGetter<{
          component?: Readonly<Component<T>>
          props?: Readonly<OrchestratedToast>
        }>
      | MaybeRefOrGetter<{
          component?: Readonly<Component<T>>
          props?: Readonly<Omit<OrchestratedToast, 'body'>>
          title?: string
        }>
  ): symbol => {
    const _self = Symbol()
    toasts.value = [
      ...toasts.value,
      computed(() => {
        const unwrapped = toValue(obj)

        // If title exists use it, otherwise check if body exists in props and use it, otherwise default to empty string
        const body =
          'title' in unwrapped
            ? unwrapped.title
            : unwrapped.props && 'body' in unwrapped.props
              ? unwrapped.props.body
              : ''

        return {
          component: unwrapped.component ?? BToast,
          props: {
            ...unwrapped.props,
            body,
            _modelValue: unwrapped.props?.value || 5000,
            pos: unwrapped.props?.pos || posDefault,
            _self,
          },
        }
      }),
    ]
    return _self
  }

  /**
   * You can get the symbol param from the return value from the show method
   */
  const remove = (self: symbol) => {
    toasts.value = toasts.value.filter((el) => el.value.props._self !== self)
  }

  return {
    toasts,
    show,
    remove,
  }
})
