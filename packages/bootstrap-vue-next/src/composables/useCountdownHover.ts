import {useElementHover} from '@vueuse/core'
import {type MaybeRefOrGetter, type Ref, toValue, watch} from 'vue'

export const useCountdownHover = (
  element: Ref<HTMLElement | null>,
  {
    modelValueIgnoresHover,
    noHoverPause,
    noResumeOnHoverLeave,
  }: {
    noHoverPause?: MaybeRefOrGetter<boolean>
    noResumeOnHoverLeave?: MaybeRefOrGetter<boolean>
    /**
     * Countdown/hover rules don't apply to static model-values (boolean)
     */
    modelValueIgnoresHover?: MaybeRefOrGetter<boolean>
  },
  actions: {
    pause: () => void
    resume: () => void
  }
) => {
  const isHovering = useElementHover(element)

  const onMouseEnter = () => {
    if (toValue(noHoverPause)) return
    actions.pause()
  }
  const onMouseLeave = () => {
    if (toValue(noResumeOnHoverLeave)) return
    actions.resume()
  }

  watch(isHovering, (newValue) => {
    if (toValue(modelValueIgnoresHover)) return
    if (newValue) {
      onMouseEnter()
      return
    }
    onMouseLeave()
  })

  return {
    isHovering,
  }
}
