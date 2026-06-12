import {computed, onUnmounted, provide, type Ref, shallowRef} from 'vue'
import type {ValidationState} from '../types/CommonTypes'
import {formGroupKey} from '../utils/keys'

const useLabelTargetRegistry = () => {
  const labelTargetIds = shallowRef<Readonly<Ref<string | null>>[]>([])

  // Track runs in the descendant's setup, so onUnmounted binds to the descendant.
  const track = (idRef: Readonly<Ref<string | null>>) => {
    labelTargetIds.value = [...labelTargetIds.value, idRef]
    onUnmounted(() => {
      labelTargetIds.value = labelTargetIds.value.filter((r: Readonly<Ref<string | null>>) => r !== idRef)
    })
  }

  return {labelTargetIds, track}
}

/**
 * Provides formGroupKey for descendant form controls. Each provider has its own isolated
 * label-target registry: BFormGroup uses the resulting `singleLabelTargetId` to drive its
 * label/legend rendering. Intermediate components (e.g. BFormFloatingLabel) call this with
 * passed-through state/disabled, acting as a boundary — their registry exists but is unused,
 * so descendant claims never reach an outer BFormGroup.
 */
export const useProvideFormGroupData = ({
  state,
  disabled,
}: {
  state: Readonly<Ref<ValidationState | undefined>>
  disabled: Readonly<Ref<boolean>>
}) => {
  const {labelTargetIds, track} = useLabelTargetRegistry()

  provide(formGroupKey, () => ({state, disabled, track}))

  // null unless exactly one distinct non-empty id is currently registered.
  const singleLabelTargetId = computed<string | null>(() => {
    let single: string | null = null
    for (const r of labelTargetIds.value) {
      const v = r.value
      if (!v) continue
      if (single !== null && single !== v) return null
      single = v
    }
    return single
  })

  return {singleLabelTargetId}
}
