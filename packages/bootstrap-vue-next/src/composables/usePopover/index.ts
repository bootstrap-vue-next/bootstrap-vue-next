import {
  type ComponentPublicInstance,
  computed,
  type ComputedRef,
  inject,
  markRaw,
  onScopeDispose,
  ref,
  type Ref,
} from 'vue'
import {orchestratorRegistryKey, type OrchestratorStoreObject} from '../../utils/keys'
import type {
  ComponentController,
  OrchestratorCreateOptions,
  PopoverOrchestratorArrayValue,
  PopoverOrchestratorCreateParam,
  TooltipOrchestratorArrayValue,
  TooltipOrchestratorCreateParam,
} from '../../types'
import {BPopover, BTooltip} from '../../components'
import {buildController} from '../orchestratorShared'

export const usePopover = () => {
  const orchestratorRegistry = inject(orchestratorRegistryKey, null)
  if (!orchestratorRegistry) {
    throw new Error(
      'usePopover() must be called within setup(), and BApp, useRegistry or plugin must be installed/provided.'
    )
  }

  const {store, _isOrchestratorInstalled} = orchestratorRegistry

  /**
   * Create a popover or tooltip
   * @param obj The popover or tooltip props
   * @param tooltip If true, create a tooltip, otherwise create a popover
   * @returns {PromiseWithController<typeof BPopover | typeof BTooltip, PopoverOrchestratorParam>} A split promise/controller object
   */
  function create(
    obj: PopoverOrchestratorCreateParam,
    tooltip?: false,
  ): ComponentController<typeof BPopover, Ref<PopoverOrchestratorArrayValue>>;
  function create(
    obj: TooltipOrchestratorCreateParam,
    tooltip: true,
  ): ComponentController<typeof BTooltip, Ref<TooltipOrchestratorArrayValue>>;
  function create(
    obj: PopoverOrchestratorCreateParam | TooltipOrchestratorCreateParam,
    tooltip = false,
  ) {
    if (!_isOrchestratorInstalled.value) {
      throw new Error('The BApp component must be mounted to use the popover controller')
    }

    const resolvedProps = ref(obj)

    const id = resolvedProps.value?.id || Symbol('Popover controller')
    const type = tooltip ? 'tooltip' : 'popover'
    const {controller, resolve} = buildController<
      typeof BPopover | typeof BTooltip,
      ComputedRef<OrchestratorStoreObject['popover'] | OrchestratorStoreObject['tooltip']>
    >(
      id,
      computed(() => store.value[type])
    )

    const value = computed<PopoverOrchestratorArrayValue, PopoverOrchestratorArrayValue['props']>({
      get: () => {
        const {
          component = markRaw(tooltip ? BTooltip : BPopover),
          options,
          slots,
          ...props
        } = resolvedProps.value

        return {
          component,
          options: {
            ...options,
            keep: options?.keep ?? true,
          } satisfies OrchestratorCreateOptions,
          slots,
          id,
          fns: {
            resolve,
            setRef: (v: ComponentPublicInstance) => {
              controller.ref = v
            },
            destroy: controller.destroy
          },
          props,
        }
      },
      set: (v) => {
        resolvedProps.value = {
          ...resolvedProps.value,
          ...v,
        }
      }
    })

    store.value[type].set(id, value)

    onScopeDispose(async () => {
      await controller[Symbol.asyncDispose]()
    }, true)

    return controller
  }

  const tooltip = (
    obj: TooltipOrchestratorCreateParam,
  ) => create(obj, true)

  const popover = (
    obj: PopoverOrchestratorCreateParam,
  ) => create(obj, false)

  return {
    _isOrchestratorInstalled,
    create,
    popover,
    tooltip,
    store,
  }
}
