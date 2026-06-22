import {computed, type ComputedRef, inject, markRaw, onScopeDispose, ref, type Ref} from 'vue'
import {orchestratorRegistryKey, type OrchestratorStoreObject} from '../../utils/keys'
import type {ContainerPosition} from '../../types/Alignment'
import type {
  ComponentController,
  ToastOrchestratorArrayValue,
  ToastOrchestratorCreateParam,
} from '../../types'
import {buildPromise} from '../orchestratorShared'
import {BToast} from '../../components'

const posDefault: ContainerPosition = 'top-end'

export const useToast = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey, null)
  if (!orchestratorRegistry) {
    throw new Error(
      'useToast() must be called within setup(), and BApp, useRegistry or plugin must be installed/provided.'
    )
  }

  const {store, _isToastAppend, _isOrchestratorInstalled} = orchestratorRegistry

  /**
   * @returns {ComponentController<typeof BToast, ToastOrchestratorParam>}
   */
  const create = <ComponentProps extends Record<string, unknown> = Record<string, unknown>>(
    obj: ToastOrchestratorCreateParam<ComponentProps> = {} as ToastOrchestratorCreateParam<ComponentProps>
  ): ComponentController<typeof BToast, Ref<ToastOrchestratorArrayValue>> => {
    if (!_isOrchestratorInstalled.value) {
      throw new Error('The BApp component must be mounted to use the toast composable')
    }

    const resolvedProps = ref(obj)
    const id = resolvedProps.value?.id || Symbol('Modals controller')

    const {resolve, controller} = buildPromise<
      typeof BToast,
      ComputedRef<OrchestratorStoreObject['toast']>
    >(
      id,
      computed(() => store.value.toast)
    )

    const value = computed<ToastOrchestratorArrayValue, ToastOrchestratorArrayValue['props']>({
      get: () => {
        const {component = markRaw(BToast), options, slots, ...props} = resolvedProps.value

        return {
          component,
          options,
          slots,
          id,
          resolve,
          props: {
            ...props,
            position: props.position || posDefault,
          },
        }
      },
      set: (v) => {
        resolvedProps.value = {
          ...resolvedProps.value,
          ...v,
        }
      },
    })

    store.value.toast.set(id, value)

    onScopeDispose(async () => {
      await controller.destroy()
    }, true)

    return controller
  }

  return {
    _isToastAppend,
    _isOrchestratorInstalled,
    store,
    create,
  }
}
