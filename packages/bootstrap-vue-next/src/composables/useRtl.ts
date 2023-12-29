import {createGlobalState} from '@vueuse/core'
import {onMounted, ref, watch} from 'vue'

export default createGlobalState(
  (rtlInitial: boolean = false, localeInitial: string | undefined = undefined) => {
    const isRtl = ref(rtlInitial)
    const locale = ref<string | undefined>(localeInitial)

    onMounted(() => {
      watch(
        [isRtl, locale],
        ([rtlNew, localeNew]) => {
          const html = document.documentElement

          // I can't think of a reason why one might want to destroy these if unmounted...
          html.setAttribute('dir', rtlNew ? 'rtl' : 'ltr')
          html.setAttribute('lang', localeNew ?? '')
        },
        {immediate: true}
      )
    })

    return {
      isRtl,
      locale,
    }
  }
)
