import {
  inject,
  isReadonly,
  isRef,
  markRaw,
  onScopeDispose,
  type Ref,
  toRef,
  toValue,
  watch,
} from 'vue'
import {orchestratorPluginKey} from '../../utils/keys'
import type {
  OrchestratorCreateOptions,
  PopoverOrchestratorArrayValue,
  PopoverOrchestratorCreateParam,
  PopoverOrchestratorParam,
  PromiseWithComponent,
  TooltipOrchestratorArrayValue,
  TooltipOrchestratorCreateParam,
  TooltipOrchestratorParam,
} from '../../types/ComponentOrchestratorTypes'
import {BPopover, BTooltip} from '../../components'
import {buildPromise} from '../orchestratorShared'

export const usePopover = () => {
  const controller = inject(orchestratorPluginKey)
  if (!controller) {
    throw new Error(
      'usePopover() was called outside of the setup() function! or the plugin is not provided.'
    )
  }

  const {store, _isOrchestratorInstalled} = controller

  /**
   * Create a popover or tooltip
   * @param obj The popover or tooltip props
   * @param tooltip If true, create a tooltip, otherwise create a popover
   * @returns {PromiseWithComponent<typeof BPopover | typeof BTooltip, PopoverOrchestratorParam>} A promise object with methods to control the popover (show, hide, toggle, get, set, destroy)
   */
  const create = (
    obj: PopoverOrchestratorCreateParam | TooltipOrchestratorCreateParam,
    tooltip?: boolean,
    options: OrchestratorCreateOptions = {keep: true}
  ): PromiseWithComponent<
    typeof BPopover | typeof BTooltip,
    PopoverOrchestratorParam | TooltipOrchestratorParam
  > => {
    if (!_isOrchestratorInstalled.value) {
      throw new Error(
        'The BPopoverOrchestrator component must be mounted to use the popover controller'
      )
    }

    const resolvedProps = toRef(obj)
    const _self = resolvedProps.value?.id || Symbol('Popover controller')

    const promise = buildPromise<
      typeof BPopover | typeof BTooltip,
      PopoverOrchestratorParam | TooltipOrchestratorParam,
      PopoverOrchestratorArrayValue | TooltipOrchestratorArrayValue
    >(_self, store as Ref<PopoverOrchestratorArrayValue[] | TooltipOrchestratorArrayValue[]>)

    promise.stop = watch(
      resolvedProps,
      (_newValue) => {
        const newValue = {...toValue(_newValue)}
        const previousIndex = store.value.findIndex((el) => el._self === _self)
        const previous =
          previousIndex === -1
            ? {_component: tooltip ? markRaw(BTooltip) : markRaw(BPopover)}
            : store.value[previousIndex]
        // if (!previous) return
        const v: PopoverOrchestratorArrayValue | TooltipOrchestratorArrayValue = tooltip
          ? ({
              ...previous,
              type: 'tooltip',
              _self,
              position: 'popover',
              promise,
              options,
            } as TooltipOrchestratorArrayValue)
          : ({
              ...previous,
              type: 'popover',
              _self,
              position: 'popover',
              promise,
              options,
            } as PopoverOrchestratorArrayValue)

        for (const key in newValue) {
          if (key.startsWith('on')) {
            v[key as keyof PopoverOrchestratorCreateParam] =
              newValue[key as keyof PopoverOrchestratorCreateParam]
          } else if (key === 'component' && newValue.component) {
            v._component = markRaw(newValue.component)
          } else if (key === 'slots' && newValue.slots) {
            v.slots = markRaw(newValue.slots)
          } else {
            v[key as keyof PopoverOrchestratorCreateParam] = toValue(
              newValue[key as keyof PopoverOrchestratorCreateParam]
            )
          }
        }

        v.modelValue = v.modelValue ?? false
        v['onUpdate:modelValue'] = (val: boolean) => {
          newValue['onUpdate:modelValue']?.(val)
          const {modelValue} = toValue(obj)
          if (isRef(obj) && !isRef(modelValue)) obj.value.modelValue = val
          if (isRef(modelValue) && !isReadonly(modelValue)) {
            ;(modelValue as Ref<PopoverOrchestratorParam['modelValue']>).value = val
          }
          if (v.modelValue !== val) {
            const popover = store.value.find((el) => el._self === _self)
            if (popover) {
              popover.modelValue = val
            }
          }
        }
        if (previousIndex === -1) {
          store.value.push(v)
        } else {
          store.value.splice(previousIndex, 1, v)
        }
      },
      {
        immediate: true,
        deep: true,
      }
    )

    onScopeDispose(() => {
      const popover = store.value.find((el) => el._self === _self)
      if (popover) {
        popover.promise.value.destroy?.()
      }
    }, true)

    return promise.value
  }

  const tooltip = (
    obj: TooltipOrchestratorCreateParam,
    options: OrchestratorCreateOptions = {keep: true}
  ) => create(obj, true, options)

  const popover = (
    obj: PopoverOrchestratorCreateParam,
    options: OrchestratorCreateOptions = {keep: true}
  ) => create(obj, false, options)

  return {
    _isOrchestratorInstalled,
    create,
    popover,
    tooltip,
    store,
  }
}

/**
 * @deprecated use usePopover() instead.
 * @returns {ReturnType<typeof usePopover>} The popover controller
 */
export const usePopoverController = usePopover
