import {computed, type MaybeRefOrGetter, toValue} from 'vue'

export const useFadeTransition = (noFade: MaybeRefOrGetter<boolean>) =>
  computed(() => {
    const NO_FADE_PROPS = {
      name: '',
      enterActiveClass: '',
      enterToClass: '',
      leaveActiveClass: '',
      leaveToClass: 'showing',
      enterFromClass: 'showing',
      leaveFromClass: '',
      css: true,
    }
    const FADE_PROPS = {
      ...NO_FADE_PROPS,
      name: 'fade',
      enterActiveClass: 'fade showing',
      leaveActiveClass: 'fade showing',
    }
    return toValue(noFade) ? NO_FADE_PROPS : FADE_PROPS
  })
