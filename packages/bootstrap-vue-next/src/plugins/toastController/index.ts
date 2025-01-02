import {markRaw, type Plugin, ref, toRef, watch} from 'vue'
import {toastPluginKey} from '../../utils/keys'
import type {ContainerPosition} from '../../types/Alignment'
import type {
  ControllerKey,
  ToastOrchestratorArrayValue,
  ToastOrchestratorShowParam,
} from '../../types/ComponentOrchestratorTypes'

const posDefault: ContainerPosition = 'top-end'

export const toastPlugin: Plugin = {
  install(app) {
    const toasts = ref<ToastOrchestratorArrayValue[]>([])

    const _isAppend = ref(false)

    const _setIsAppend = (value: boolean) => {
      _isAppend.value = value
    }

    /**
     * @returns {ControllerKey} If `id` is passed to props, it will use that id, otherwise, a symbol will be created that corresponds to its unique id.
     * You can pass this id to the hide function to force a Toast to hide
     */
    const show = (obj: ToastOrchestratorShowParam = {}): ControllerKey => {
      const resolvedProps = toRef(obj.props)

      const _self = resolvedProps.value?.id || Symbol('Toast controller')

      const toastToAdd: ToastOrchestratorArrayValue = {
        component: !obj.component ? undefined : markRaw(obj.component),
        props: {
          ...resolvedProps.value,
          pos: resolvedProps.value?.pos || posDefault,
          _modelValue: resolvedProps.value?.value || 5000,
          _self,
        },
      }

      if (
        resolvedProps.value?.appendToast !== undefined
          ? resolvedProps.value.appendToast
          : _isAppend.value
      ) {
        toasts.value.push(toastToAdd)
      } else {
        toasts.value.unshift(toastToAdd)
      }

      watch(resolvedProps, (newValue) => {
        const previousIndex = toasts.value.findIndex((el) => el.props._self === _self)
        if (previousIndex === -1) return
        toasts.value.splice(previousIndex, 1, {
          component: !obj.component ? undefined : markRaw(obj.component),
          props: {
            ...toasts.value[previousIndex].props,
            ...newValue,
            _modelValue: newValue?.value || toasts.value[previousIndex].props._modelValue || 5000,
          },
        })
      })

      return _self
    }

    /**
     * You can get the symbol param from the return value from the show method, or use props.id
     */
    const remove = (self: ControllerKey) => {
      toasts.value = toasts.value.filter((el) => el.props._self !== self)
    }

    /**
     * You can get the symbol param from the return value from the show method, or use props.id
     */
    const leave = (self: ControllerKey) => {
      const toastIndex = toasts.value.findIndex((el) => el.props._self === self)
      if (toastIndex === -1) return
      toasts.value.splice(toastIndex, 1, {
        component: !toasts.value[toastIndex].component
          ? undefined
          : markRaw(toasts.value[toastIndex].component as object),
        props: {
          ...toasts.value[toastIndex].props,
          _modelValue: false,
        },
      })
    }

    app.provide(toastPluginKey, {
      _setIsAppend,
      toasts,
      show,
      remove,
      leave,
    })
  },
}
