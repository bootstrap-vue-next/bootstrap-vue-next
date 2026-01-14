import {computed, inject, type MaybeRefOrGetter, toValue, watch} from 'vue'
import {breadcrumbGlobalIndexKey, breadcrumbRegistryKey} from '../../utils/keys'

export const useBreadcrumb = (
  /**
   * When set it will utilize a separate instance of breadcrumb
   */
  id: MaybeRefOrGetter<string | null> = breadcrumbGlobalIndexKey
) => {
  const parentData = inject(breadcrumbRegistryKey, null)

  const resolvedId = computed(() => {
    const v = toValue(id)
    if (!v) return breadcrumbGlobalIndexKey
    return v
  })

  watch(
    resolvedId,
    (newValue) => {
      if (!newValue || !parentData) return
      parentData.items.value = {
        ...parentData.items.value,
        [newValue]: parentData.items.value[newValue] || [],
      }
    },
    {immediate: true}
  )

  const items = computed({
    get: () => parentData?.items.value[resolvedId.value] || [],
    set(value) {
      if (!parentData) return
      parentData.items.value[resolvedId.value] = value
    },
  })

  return {
    items,
    reset() {
      if (!parentData) return
      parentData.reset(resolvedId.value || undefined)
    },
  }
}
