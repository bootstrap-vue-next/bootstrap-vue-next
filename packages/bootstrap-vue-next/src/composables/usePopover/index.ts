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
import type {
  ComponentController,
  PopoverOrchestratorArrayValue,
  PopoverOrchestratorCreateParamBase,
  TooltipOrchestratorArrayValue,
  TooltipOrchestratorCreateParamBase,
} from '../../types'
import {BPopover, BTooltip} from '../../components'
import {buildController, getOrchestratorControllerId} from '../orchestratorShared'

export const usePopover = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey, null)
  if (!orchestratorRegistry)
    throw new Error(
      'usePopover() must be called within setup(), and BApp, useRegistry or plugin must be installed/provided.'
    )
  const {store, _isOrchestratorInstalled} = orchestratorRegistry

  /**
   * Create a popover or tooltip
   * @param obj The popover or tooltip props
   * @param tooltip If true, create a tooltip, otherwise create a popover
   * @returns {PromiseWithController<typeof BPopover | typeof BTooltip, PopoverOrchestratorCreateParam>} A split promise/controller object
   */
  // Uses `function` declarations (rather than generic arrow functions assigned to consts) so
  // that TypeScript preserves per-call generic inference when these are returned as part of
  // `usePopover()`'s inferred return object.
  function create<
    T extends PopoverOrchestratorCreateParamBase = PopoverOrchestratorCreateParamBase,
  >(
    obj: MaybeRef<T>,
    tooltip?: false
  ): ComponentController<typeof BPopover, Ref<PopoverOrchestratorArrayValue>>
  function create<
    T extends TooltipOrchestratorCreateParamBase = TooltipOrchestratorCreateParamBase,
  >(
    obj: MaybeRef<T>,
    tooltip: true
  ): ComponentController<typeof BTooltip, Ref<TooltipOrchestratorArrayValue>>
  function create(
    obj: MaybeRef<PopoverOrchestratorCreateParamBase | TooltipOrchestratorCreateParamBase>,
    tooltip = false
  ) {
    if (!_isOrchestratorInstalled.value)
      throw new Error('The BApp component must be mounted to use the popover controller')

    const comp = markRaw(tooltip ? BTooltip : BPopover)
    const resolvedProps = ref(obj)
    const type = tooltip ? 'tooltip' : 'popover'
    const pickedStore = computed(() => store.value[type])
    const {htmlAttributeId, storeId} = getOrchestratorControllerId(resolvedProps.value.id)

    const {controller, resolve} = buildController<
      typeof BPopover | typeof BTooltip,
      ComputedRef<OrchestratorStoreObject['popover'] | OrchestratorStoreObject['tooltip']>
    >(storeId, pickedStore)

    const value = computed<PopoverOrchestratorArrayValue>({
      get: () => {
        const {component = comp, options, slots, ...props} = resolvedProps.value

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

    pickedStore.value.set(storeId, value)

    onScopeDispose(async () => {
      await controller[Symbol.asyncDispose]()
    }, true)

    return controller
  }

  function tooltip<
    T extends TooltipOrchestratorCreateParamBase = TooltipOrchestratorCreateParamBase,
  >(obj: MaybeRef<T>) {
    return create(obj, true)
  }

  function popover<
    T extends PopoverOrchestratorCreateParamBase = PopoverOrchestratorCreateParamBase,
  >(obj: MaybeRef<T>) {
    return create(obj, false)
  }

  return {
    _isOrchestratorInstalled,
    create,
    popover,
    tooltip,
    store,
  }
}
