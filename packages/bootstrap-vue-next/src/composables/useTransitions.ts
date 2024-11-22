import {computed, type MaybeRefOrGetter, toValue, type TransitionProps} from 'vue'

export const useFadeTransition = (fade: MaybeRefOrGetter<boolean>) =>
  computed(() => {
    const NO_FADE_PROPS = {
      name: '',
      enterActiveClass: '',
      enterToClass: '',
      leaveActiveClass: '',
      leaveToClass: 'showing',
      enterFromClass: 'showing',
      leaveFromClass: '',
    } satisfies TransitionProps
    const FADE_PROPS = {
      ...NO_FADE_PROPS,
      enterActiveClass: 'fade showing',
      leaveActiveClass: 'fade showing',
    } satisfies TransitionProps
    return toValue(fade) ? FADE_PROPS : NO_FADE_PROPS
  })
