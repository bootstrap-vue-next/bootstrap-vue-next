import {computed, type MaybeRefOrGetter, onMounted, readonly, ref, toRef, watch} from 'vue'
import {useScrollLock} from '@vueuse/core'

export default (isOpen: MaybeRefOrGetter<boolean>, bodyScroll: MaybeRefOrGetter<boolean>) => {
  const modelValue = readonly(toRef(isOpen))
  const bodyScrollingValue = readonly(toRef(bodyScroll))

  /**
   * We use the inverse because bodyScrolling === true means we allow scrolling, while bodyScrolling === false means we disallow
   */
  const inverseBodyScrollingValue = computed(() => !bodyScrollingValue.value)

  const bodyRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    bodyRef.value = document.body
  })

  const isLocked = useScrollLock(bodyRef, modelValue.value && inverseBodyScrollingValue.value)

  watch([modelValue, inverseBodyScrollingValue], ([modelVal, bodyVal]) => {
    isLocked.value = modelVal && bodyVal
  })
}
