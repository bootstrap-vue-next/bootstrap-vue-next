import {
  type Component,
  computed,
  type MaybeRefOrGetter,
  type Plugin,
  ref,
  toValue,
  type WritableComputedRef,
} from 'vue'
import {modalControllerPluginKey} from '../utils'
import type {BModalProps, OrchestratedModal} from '../types'
import BModal from '../components/BModal/BModal.vue'

export default {
  install(app) {
    const modals = ref<
      WritableComputedRef<{
        component: unknown // TS being weird here, just use unknown
        props: OrchestratedModal & {
          _self: symbol
          _modelValue: BModalProps['modelValue']
          _promise: {
            value: Promise<boolean | null>
            resolve: (value: boolean | null) => void
          }
          _isConfirm: boolean
        }
      }>[]
    >([])

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

    const buildPrereqs = () => [buildPromise(), Symbol(), ref(true)] as const

    const show = (obj: {
      component?: MaybeRefOrGetter<Readonly<Component>>
      props?: MaybeRefOrGetter<Readonly<OrchestratedModal>>
    }) => {
      const [_promise, _self, _modelValue] = buildPrereqs()

      modals.value.push(
        computed({
          get: () => ({
            component: toValue(obj.component) ?? BModal,
            props: {
              ...toValue(obj.props),
              _isConfirm: false,
              _promise,
              _self,
              _modelValue: _modelValue.value,
            },
          }),
          set: (v) => {
            _modelValue.value = v.props._modelValue
          },
        })
      )

      return _promise.value
    }

    const confirm = (obj: {
      component?: MaybeRefOrGetter<Readonly<Component>>
      props?: MaybeRefOrGetter<Readonly<OrchestratedModal>>
    }) => {
      const [_promise, _self, _modelValue] = buildPrereqs()

      modals.value.push(
        computed({
          get: () => ({
            component: toValue(obj.component) ?? BModal,
            props: {
              ...toValue(obj.props),
              _isConfirm: true,
              _promise,
              _self,
              _modelValue: _modelValue.value,
            },
          }),
          set: (v) => {
            _modelValue.value = v.props._modelValue
          },
        })
      )

      return _promise.value
    }

    const leave = (self: symbol) => {
      const modal = modals.value.find((el) => el.value.props._self === self)
      if (modal !== undefined) {
        modal.value = {
          ...modal.value,
          props: {
            ...modal.value.props,
            _modelValue: false,
          },
        }
      }
    }

    const remove = (self: symbol) => {
      modals.value = modals.value.filter((el) => el.value.props._self !== self)
    }

    app.provide(modalControllerPluginKey, {
      modals,
      remove,
      show,
      confirm,
      leave,
    })
  },
} satisfies Plugin
