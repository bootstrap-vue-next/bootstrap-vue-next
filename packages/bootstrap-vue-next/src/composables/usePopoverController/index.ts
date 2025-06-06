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
import {popoverPluginKey} from '../../utils/keys'
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
import {buildPromise} from '../shared'

export const usePopoverController = () => {
  const controller = inject(popoverPluginKey)
  if (!controller) {
    throw new Error(
      'usePopoverController() was called outside of the setup() function! or the plugin is not provided.'
    )
  }

  const {popovers, _isOrchestratorInstalled} = controller

  /**
   * Create a popover or tooltip
   * @param obj The popover or tooltip props
   * @param tooltip If true, create a tooltip, otherwise create a popover
   * @returns {PromiseWithComponent<typeof BPopover | typeof BTooltip, PopoverOrchestratorParam>} A promise object with methods to control the popover (show, hide, toggle, get, set, destroy)
   */
  const create = (
    obj: PopoverOrchestratorCreateParam | TooltipOrchestratorCreateParam,
    tooltip?: boolean,
    options: OrchestratorCreateOptions = {}
  ): PromiseWithComponent<
    typeof BPopover | typeof BTooltip,
    PopoverOrchestratorParam | TooltipOrchestratorParam
  > => {
    if (!_isOrchestratorInstalled.value) {
      throw new Error(
        'The BPopoverOrchestrator component must be mounted to use the popover controller'
      )
    }
    const {component, slots} = toValue(obj)
    if (component) {
      if (isRef(obj)) obj.value.component = markRaw(component)
      else if (typeof obj === 'object') obj.component = markRaw(component)
    } else {
      if (tooltip) {
        if (isRef(obj)) obj.value.component = markRaw(BTooltip)
        else if (typeof obj === 'object') obj.component = markRaw(BTooltip)
      } else {
        if (isRef(obj)) obj.value.component = markRaw(BPopover)
        else if (typeof obj === 'object') obj.component = markRaw(BPopover)
      }
    }
    if (slots) {
      if (isRef(obj)) obj.value.slots = markRaw(slots)
      else if (typeof obj === 'object') obj.slots = markRaw(slots)
    }
    const resolvedProps = toRef(obj)
    const _self = resolvedProps.value?.id || Symbol('Popover controller')

    const promise = buildPromise<
      typeof BPopover | typeof BTooltip,
      PopoverOrchestratorParam | TooltipOrchestratorParam,
      PopoverOrchestratorArrayValue | TooltipOrchestratorArrayValue
    >(_self, popovers)

    promise.stop = watch(
      resolvedProps,
      (_newValue) => {
        const newValue = {...toValue(_newValue)}
        const previousIndex = popovers.value.findIndex((el) => el._self === _self)
        const previous = previousIndex === -1 ? {} : popovers.value[previousIndex] || {}
        // if (!previous) return
        const v: PopoverOrchestratorArrayValue | TooltipOrchestratorArrayValue = {
          type: 'popover',
          _self,
          position: 'popover',
          ...previous,
          tooltip,
          promise,
          options,
        }

        for (const key in newValue) {
          if (key.startsWith('on')) {
            v[key as keyof PopoverOrchestratorCreateParam] =
              newValue[key as keyof PopoverOrchestratorCreateParam]
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
            const popover = popovers.value.find((el) => el._self === _self)
            if (popover) {
              popover.modelValue = val
            }
          }
        }
        if (previousIndex === -1) {
          popovers.value.push(v)
        } else {
          popovers.value.splice(previousIndex, 1, v)
        }
      },
      {
        immediate: true,
        deep: true,
      }
    )

    onScopeDispose(() => {
      const popover = popovers.value.find((el) => el._self === _self)
      if (popover) {
        popover.promise.value.destroy?.()
      }
    }, true)

    return promise.value
  }

  const tooltip = (obj: TooltipOrchestratorCreateParam) => create(obj, true)

  const popover = (obj: PopoverOrchestratorCreateParam) => create(obj, false)

  return {
    _isOrchestratorInstalled,
    popover,
    tooltip,
    popovers,
  }
}
