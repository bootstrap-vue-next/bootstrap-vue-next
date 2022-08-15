<script lang="ts">
import type {Booleanish, TransitionMode} from '../../types'
import {isPlainObject} from '../../utils'
import {defineComponent, h, PropType, ref, toRef, Transition} from 'vue'
import {useBooleanish} from '../../composables'

const NO_FADE_PROPS = {
  name: '',
  enterActiveClass: '',
  enterToClass: '',
  leaveActiveClass: '',
  leaveToClass: 'showing',
  enterFromClass: 'showing',
  leaveFromClass: '',
}

const FADE_PROPS = {
  ...NO_FADE_PROPS,
  enterActiveClass: 'fade showing',
  leaveActiveClass: 'fade showing',
}

export default defineComponent({
  props: {
    appear: {type: Boolean as PropType<Booleanish>, default: false},
    mode: {type: String as PropType<TransitionMode>, required: false},
    noFade: {type: Boolean as PropType<Booleanish>, default: false},
    transProps: {type: Object, required: false},
  },
  setup(props, {slots}) {
    const appearBoolean = useBooleanish(toRef(props, 'appear'))
    const noFadeBoolean = useBooleanish(toRef(props, 'noFade'))

    const transProperties = ref(props.transProps)
    if (!isPlainObject(transProperties.value)) {
      transProperties.value = noFadeBoolean.value ? NO_FADE_PROPS : FADE_PROPS
      if (appearBoolean.value) {
        // Default the appear classes to equal the enter classes
        transProperties.value = {
          ...transProperties.value,
          appear: true,
          appearClass: transProperties.value.enterClass,
          appearActiveClass: transProperties.value.enterActiveClass,
          appearToClass: transProperties.value.enterToClass,
        }
      }
    }
    transProperties.value = {
      mode: props.mode,
      ...transProperties.value,
      // We always need `css` true
      css: true,
    }

    return () =>
      h(
        Transition,
        {...transProperties.value},
        {
          default: () => (slots.default ? slots.default() : []),
        }
      )
  },
})
</script>
