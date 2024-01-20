import {
  type Component,
  computed,
  type ComputedRef,
  type MaybeRefOrGetter,
  type Plugin,
  ref,
  shallowRef,
  toValue,
} from 'vue'
import BToast from '../components/BToast/BToast.vue'
import type {OrchestratedToast} from '../types'
import {toastPluginKey} from '../utils'

const posDefault = 'top-right'

export default {
  install(app) {
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

    const _isAppend = ref(false)

    const _setIsAppend = (value: boolean) => {
      _isAppend.value = value
    }

    /**
     * @returns {symbol} A symbol that corresponds to its unique id. You can pass this id to the hide function to force a Toast to hide
     */
    const show = (obj: {
      component?: MaybeRefOrGetter<Readonly<Component>>
      props?: MaybeRefOrGetter<Readonly<OrchestratedToast>>
    }): symbol => {
      const _self = Symbol()

      const toastToAdd = computed(() => {
        const unwrappedProps = toValue(obj.props)
        return {
          component: toValue(obj.component) ?? BToast,
          props: {
            ...unwrappedProps,
            pos: unwrappedProps?.pos || posDefault,
            _modelValue: unwrappedProps?.value || 5000,
            _self,
          },
        }
      })

      if (
        toastToAdd.value.props.appendToast !== undefined
          ? toastToAdd.value.props.appendToast
          : _isAppend.value
      ) {
        toasts.value = [...toasts.value, toastToAdd]
      } else {
        toasts.value = [toastToAdd, ...toasts.value]
      }

      return _self
    }

    /**
     * You can get the symbol param from the return value from the show method
     */
    const remove = (self: symbol) => {
      toasts.value = toasts.value.filter((el) => el.value.props._self !== self)
    }

    app.provide(toastPluginKey, {
      _setIsAppend,
      toasts,
      show,
      remove,
    })
  },
} satisfies Plugin
