import {createGlobalState} from '@vueuse/core'
import {
  type Component,
  computed,
  type ComputedRef,
  isVNode,
  type MaybeRefOrGetter,
  shallowRef,
  toValue,
} from 'vue'
import type {OrchestratedToast} from '../types'
import BToast from '../components/BToast/BToast.vue'

const posDefault = 'top-right'

const isComponent = (val: unknown): val is Component => isVNode(val)

export default createGlobalState(() => {
  const toasts = shallowRef<
    ComputedRef<{
      component: unknown
      props: OrchestratedToast & {_self: symbol}
    }>[]
  >([])

  /**
   * @returns {symbol} A symbol that corresponds to its unique id. You can pass this id to the hide function to force a Toast to hide
   */
  const show = <T>(
    ...[comp, props]:
      | [component: Readonly<Component<T>>, props?: MaybeRefOrGetter<Readonly<OrchestratedToast>>]
      | [props: MaybeRefOrGetter<Readonly<OrchestratedToast>>]
      | [component: MaybeRefOrGetter<string>, props?: MaybeRefOrGetter<Readonly<OrchestratedToast>>]
  ): symbol => {
    const _self = Symbol()
    toasts.value = [
      ...toasts.value,
      computed(() => {
        let propValue: Readonly<OrchestratedToast> | string | undefined = isComponent(comp)
          ? toValue(props)
          : toValue(comp as MaybeRefOrGetter<string>) // Not the true type
        if (typeof propValue === 'string') {
          propValue = {...toValue(props), body: propValue}
        }
        const compValue = isComponent(comp) ? comp : BToast

        return {
          component: compValue,
          props: {
            ...propValue,
            value: propValue?.value || 5000,
            pos: propValue?.pos || posDefault,
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
