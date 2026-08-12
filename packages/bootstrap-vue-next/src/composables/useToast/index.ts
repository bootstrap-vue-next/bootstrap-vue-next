import {
  type ComponentPublicInstance,
  computed,
  type ComputedRef,
  inject,
  markRaw,
  type MaybeRef,
  onScopeDispose,
  ref,
  type Ref,
} from 'vue'
import {orchestratorRegistryKey, type OrchestratorStoreObject} from '../../utils/keys'
import type {ContainerPosition} from '../../types/Alignment'
import type {
  ComponentController,
  ToastOrchestratorArrayValue,
  ToastOrchestratorCreateParamBase,
} from '../../types'
import {buildController, getOrchestratorControllerId} from '../orchestratorShared'
import {BToast} from '../../components'

const posDefault: ContainerPosition = 'top-end'

export const useToast = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey, null)
  if (!orchestratorRegistry)
    throw new Error(
      'useToast() must be called within setup(), and BApp, useRegistry or plugin must be installed/provided.'
    )
  const {store, _isToastAppend, _isOrchestratorInstalled} = orchestratorRegistry

  /**
   * @returns {ComponentController<typeof BToast, ToastOrchestratorParam>}
   */
  // Uses a `function` declaration (rather than a generic arrow function assigned to a const) so
  // that TypeScript preserves per-call generic inference when `create` is returned as part of
  // `useToast()`'s inferred return object.
  function create<
    ComponentProps extends Record<string, unknown> = Record<string, unknown>,
    T extends ToastOrchestratorCreateParamBase<ComponentProps> = ToastOrchestratorCreateParamBase<ComponentProps>,
  >(
    obj: MaybeRef<T> = {} as T
  ): ComponentController<typeof BToast, Ref<ToastOrchestratorArrayValue>> {
    if (!_isOrchestratorInstalled.value)
      throw new Error('The BApp component must be mounted to use the toast composable')

    const toastComp = markRaw(BToast)
    const resolvedProps = ref(obj)
    const toastStore = computed(() => store.value.toast)
    const {htmlAttributeId, storeId} = getOrchestratorControllerId(resolvedProps.value.id)

    const {resolve, controller} = buildController<
      typeof BToast,
      ComputedRef<OrchestratorStoreObject['toast']>
    >(storeId, toastStore)

    const value = computed<ToastOrchestratorArrayValue>({
      get: () => {
        const {component = toastComp, options, slots, ...props} = resolvedProps.value

        return {
          component,
          options,
          slots,
          id: storeId,
          fns: {
            resolve,
            setRef: (v: ComponentPublicInstance) => {
              controller.ref = v
            },
            destroy: controller.destroy,
          },
          props: {
            ...props,
            id: htmlAttributeId,
            position: props.position || posDefault,
          },
        }
      },
      set: (v) => {
        resolvedProps.value = {
          ...resolvedProps.value,
          ...v.props,
        }
      },
    })

    toastStore.value.set(storeId, value)

    onScopeDispose(async () => {
      await controller[Symbol.asyncDispose]()
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
