import {computed, type MaybeRefOrGetter, toValue, type TransitionProps} from 'vue'

const NO_FADE_PROPS = {
  name: '',
  enterActiveClass: '',
  enterToClass: '',
  leaveActiveClass: '',
  leaveToClass: 'showing',
  enterFromClass: 'showing',
  leaveFromClass: '',
} as const satisfies TransitionProps
const FADE_PROPS = {
  ...NO_FADE_PROPS,
  enterActiveClass: 'fade showing',
  leaveActiveClass: 'fade showing',
} as const satisfies TransitionProps

export const useFadeTransition = (fade: MaybeRefOrGetter<boolean>) =>
  computed(() => (toValue(fade) ? FADE_PROPS : NO_FADE_PROPS))
