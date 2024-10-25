import {useElementHover} from '@vueuse/core'
import {type MaybeRefOrGetter, type Ref, toValue, watch} from 'vue'

export const useCountdownHover = (
  element: Ref<HTMLElement | null>,
  props: MaybeRefOrGetter<{
    noHoverPause?: boolean
    noResumeOnHoverLeave?: boolean
    /**
     * Countdown/hover rules don't apply to static model-values (boolean)
     */
    modelValueIgnoresHover: boolean
  }>,
  actions: {
    pause: () => void
    resume: () => void
  }
) => {
  const isHovering = useElementHover(element)

  const onMouseEnter = () => {
    if (toValue(props).noHoverPause) return
    actions.pause()
  }
  const onMouseLeave = () => {
    if (toValue(props).noResumeOnHoverLeave) return
    actions.resume()
  }

  watch(isHovering, (newValue) => {
    if (toValue(props).modelValueIgnoresHover) return
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
