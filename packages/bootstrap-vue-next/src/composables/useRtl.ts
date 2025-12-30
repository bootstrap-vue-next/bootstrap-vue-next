import {inject, onMounted, watch} from 'vue'
import {rtlRegistryKey} from '../utils/keys'

export const useRtl = () => {
  const rtlPlugin = inject(rtlRegistryKey, null)

  onMounted(() => {
    // I can't think of a reason why one might want to destroy these if unmounted...
    watch(
      () => rtlPlugin?.locale.value,
      (newValue) => {
        const html = document.documentElement
        html.setAttribute('lang', newValue ?? '')
      },
      {immediate: true}
    )

    watch(
      () => rtlPlugin?.isRtl.value,
      (newValue) => {
        const html = document.documentElement
        html.setAttribute('dir', (newValue ?? false) ? 'rtl' : 'ltr')
      },
      {immediate: true}
    )
  })

  return {...rtlPlugin}
}
