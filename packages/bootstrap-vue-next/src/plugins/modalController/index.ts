import {markRaw, type Plugin, ref, toRef, watch} from 'vue'
import {modalControllerPluginKey} from '../../utils/keys'
import type {
  ModalOrchestratorMapValue,
  ModalOrchestratorShowParam,
} from '../../types/ComponentOrchestratorTypes'

export const modalControllerPlugin: Plugin = {
  install(app) {
    const modals = ref(new Map<symbol, ModalOrchestratorMapValue>())

    const buildPromise = (): {
      value: Promise<boolean | null>
      resolve: (value: boolean | null) => void
    } => {
      let resolveFunc: (value: boolean | null) => void = () => {
        /* empty */
      }

      const promise = new Promise<boolean | null>((resolve) => {
        resolveFunc = resolve
      })

      return {
        value: promise,
        resolve: resolveFunc,
      }
    }

    const buildPrereqs = () => [buildPromise(), Symbol('Modals controller'), true] as const

    const show = (obj: ModalOrchestratorShowParam = {}) => {
      const resolvedProps = toRef(obj.props)

      const [_promise, _self, _modelValue] = buildPrereqs()

      modals.value.set(_self, {
        component: !obj.component ? undefined : markRaw(obj.component),
        props: {...resolvedProps.value, _isConfirm: false, _promise, _modelValue},
      })

      watch(resolvedProps, (newValue) => {
        const previous = modals.value.get(_self)
        if (!previous) return
        modals.value.set(_self, {
          component: !obj.component ? undefined : markRaw(obj.component),
          props: {...previous.props, ...newValue},
        })
      })

      return _promise.value
    }

    const confirm = (obj: ModalOrchestratorShowParam = {}) => {
      const resolvedProps = toRef(obj.props)

      const [_promise, _self, _modelValue] = buildPrereqs()

      modals.value.set(_self, {
        component: !obj.component ? undefined : markRaw(obj.component),
        props: {...resolvedProps.value, _isConfirm: true, _promise, _modelValue},
      })

      watch(resolvedProps, (newValue) => {
        const previous = modals.value.get(_self)
        if (!previous) return
        modals.value.set(_self, {
          component: !obj.component ? undefined : markRaw(obj.component),
          props: {...previous.props, ...newValue},
        })
      })

      return _promise.value
    }

    const leave = (self: symbol) => {
      const modal = modals.value.get(self)
      if (!modal?.props) return
      modal.props = {
        ...modal.props,
        _modelValue: false,
      }
    }

    const remove = (self: symbol) => {
      modals.value.delete(self)
    }

    app.provide(modalControllerPluginKey, {
      modals,
      remove,
      show,
      confirm,
      leave,
    })
  },
}
