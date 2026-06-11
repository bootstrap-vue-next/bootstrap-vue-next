import {computed, onUnmounted, provide, type Ref, ref, watch} from 'vue'
import type {ValidationState} from '../types/CommonTypes'
import {formGroupKey} from '../utils/keys'

/**
 * Provides formGroupKey for descendant form controls. Each provider has its own isolated
 * label-target registry: BFormGroup uses the resulting `singleLabelTargetId` to drive its
 * label/legend rendering. Intermediate components (e.g. BFormFloatingLabel) call this with
 * passed-through state/disabled, acting as a boundary — their registry exists but is unused,
 * so descendant claims never reach an outer BFormGroup.
 */
export const useProvideFormGroupData = (opts: {
  state: Readonly<Ref<ValidationState | undefined>>
  disabled: Readonly<Ref<boolean>>
}) => {
  const {state, disabled} = opts
  const labelTargetIds = ref<string[]>([])
  const registerLabelTarget = (id: string) => {
    labelTargetIds.value.push(id)
  }
  const unregisterLabelTarget = (id: string) => {
    const idx = labelTargetIds.value.indexOf(id)
    if (idx !== -1) labelTargetIds.value.splice(idx, 1)
  }

  // The callback runs in the descendant's setup, so watch/onUnmounted bind to the descendant.
  provide(formGroupKey, (idRef) => {
    if (idRef) {
      watch(
        idRef,
        (curr, prev) => {
          if (prev) unregisterLabelTarget(prev)
          if (curr) registerLabelTarget(curr)
        },
        {immediate: true}
      )
      onUnmounted(() => {
        if (idRef.value) unregisterLabelTarget(idRef.value)
      })
    }
    return {state, disabled}
  })

  // null unless exactly one distinct id is registered.
  const singleLabelTargetId = computed<string | null>(() => {
    const ids = labelTargetIds.value
    if (!ids.length) return null
    const first = ids[0]
    return ids.every((id) => id === first) ? first || null : null
  })

  return {singleLabelTargetId}
}
