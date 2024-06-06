import {
  type Component,
  computed,
  type MaybeRefOrGetter,
  type Plugin,
  ref,
  toValue,
  type WritableComputedRef,
} from 'vue'
import BToast from '../components/BToast/BToast.vue'
import type {ContainerPosition, OrchestratedToast} from '../types'
import {toastPluginKey} from '../utils'

const posDefault: ContainerPosition = 'top-end'

export default {
  install(app) {
    const toasts = ref<
      WritableComputedRef<{
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

      const _modelValue = ref<boolean | number>(toValue(obj.props)?.value || 5000)

      const toastToAdd = computed({
        get: () => {
          const unwrappedProps = toValue(obj.props)
          return {
            component: toValue(obj.component) ?? BToast,
            props: {
              ...unwrappedProps,
              pos: unwrappedProps?.pos || posDefault,
              _modelValue: _modelValue.value,
              _self,
            },
          }
        },
        set: (v) => {
          _modelValue.value = v.props._modelValue
        },
      })

      if (
        toastToAdd.value.props.appendToast !== undefined
          ? toastToAdd.value.props.appendToast
          : _isAppend.value
      ) {
        toasts.value.push(toastToAdd)
      } else {
        toasts.value.unshift(toastToAdd)
      }

      return _self
    }

    /**
     * You can get the symbol param from the return value from the show method
     */
    const remove = (self: symbol) => {
      toasts.value = toasts.value.filter((el) => el.value.props._self !== self)
    }

    const leave = (self: symbol) => {
      const toast = toasts.value.find((el) => el.value.props._self === self)
      if (toast !== undefined) {
        toast.value = {
          ...toast.value,
          props: {
            ...toast.value.props,
            _modelValue: false,
          },
        }
      }
    }

    app.provide(toastPluginKey, {
      _setIsAppend,
      toasts,
      show,
      remove,
      leave,
    })
  },
} satisfies Plugin
