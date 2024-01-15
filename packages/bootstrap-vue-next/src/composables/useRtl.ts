import {inject, onMounted, watch} from 'vue'
import {rtlPluginKey} from '../utils'

export default () => {
  const rtlPlugin = inject(rtlPluginKey)

  onMounted(() => {
    watch(
      [() => rtlPlugin?.isRtl.value, () => rtlPlugin?.locale.value],
      ([rtlNew, localeNew]) => {
        const html = document.documentElement

        // I can't think of a reason why one might want to destroy these if unmounted...
        html.setAttribute('dir', rtlNew ?? false ? 'rtl' : 'ltr')
        html.setAttribute('lang', localeNew ?? '')
      },
      {immediate: true}
    )
  })

  return {...rtlPlugin}
}
