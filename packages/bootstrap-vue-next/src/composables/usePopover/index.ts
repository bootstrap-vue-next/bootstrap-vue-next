import {computed, inject, isReadonly, isRef, markRaw, onScopeDispose, type Ref, shallowRef, toValue, watch} from 'vue'
import {orchestratorRegistryKey} from '../../utils/keys'
import type {
  OrchestratorCreateOptions,
  PopoverOrchestratorArrayValue,
  PopoverOrchestratorCreateParam,
  PopoverOrchestratorParam,
  PromiseWithController,
  TooltipOrchestratorArrayValue,
  TooltipOrchestratorCreateParam,
  TooltipOrchestratorParam,
} from '../../types'
import {BPopover, BTooltip} from '../../components'
import {buildPromise} from '../orchestratorShared'

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
  const create = (
    obj: PopoverOrchestratorCreateParam | TooltipOrchestratorCreateParam,
    tooltip?: boolean,
    options: OrchestratorCreateOptions = {keep: true}
  ): PromiseWithController<
    typeof BPopover | typeof BTooltip,
    PopoverOrchestratorParam | TooltipOrchestratorParam
  > => {
    if (!_isOrchestratorInstalled.value) {
      throw new Error('The BApp component must be mounted to use the popover controller')
    }

    const resolvedProps = isRef(obj) ? obj : shallowRef(obj)
    const id = resolvedProps.value?.id || Symbol('Popover controller')
    const type = tooltip ? 'tooltip' : 'popover'

    const promise = buildPromise<
      typeof BPopover | typeof BTooltip,
      PopoverOrchestratorParam | TooltipOrchestratorParam,
      PopoverOrchestratorArrayValue | TooltipOrchestratorArrayValue
    >(id, computed(() => store.value[type]))

    promise.stop = watch(
      resolvedProps,
      (_newValue) => {
        const newValue = {...toValue(_newValue)}
        const previous = store.value[type].get(id) ?? {
          _component: tooltip ? markRaw(BTooltip) : markRaw(BPopover)
        }
        // if (!previous) return
        const v: PopoverOrchestratorArrayValue | TooltipOrchestratorArrayValue = tooltip
          ? ({
               ...previous,
               type: 'tooltip',
               id,
               position: 'popover',
               promise,
               options,
             } as TooltipOrchestratorArrayValue)
          : ({
               ...previous,
               type: 'popover',
               id,
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
            const popover = store.value[type].get(id)
            if (popover) {
              popover.modelValue = val
            }
          }
        }
        store.value[type].set(id, v)
      },
      {
        immediate: true,
        deep: true,
      }
    )

    onScopeDispose(() => {
      const popover = store.value[type].get(id)
      if (popover) {
        popover.promise.controller.destroy?.()
      }
    }, true)

    return promise
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
