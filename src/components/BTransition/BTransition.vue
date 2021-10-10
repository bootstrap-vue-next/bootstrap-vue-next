<script lang="ts">
import TransitionMode from '@/types/TransitionMode'
import {isPlainObject} from '@/utils/inspect'
import {normalizeSlot} from '@/utils/normalize-slot'
import {defineComponent, h, PropType, ref} from 'vue'

const NO_FADE_PROPS = {
  name: '',
  enterClass: '',
  enterActiveClass: '',
  enterToClass: 'show',
  leaveClass: 'show',
  leaveActiveClass: '',
  leaveToClass: '',
}

const FADE_PROPS = {
  ...NO_FADE_PROPS,
  enterActiveClass: 'fade',
  leaveActiveClass: 'fade',
}

export default defineComponent({
  name: 'BTransition',
  props: {
    appear: {type: Boolean, default: false},
    mode: {type: String as PropType<TransitionMode>, required: false},
    noFade: {type: Boolean, default: false},
    transProps: {type: Object, required: false},
  },
  setup(props, {slots}) {
    const transProps = ref(props.transProps)
    if (!isPlainObject(transProps)) {
      transProps.value = props.noFade ? NO_FADE_PROPS : FADE_PROPS
      if (props.appear) {
        // Default the appear classes to equal the enter classes
        transProps.value = {
          ...transProps.value,
          appear: true,
          appearClass: transProps.value.enterClass,
          appearActiveClass: transProps.value.enterActiveClass,
          appearToClass: transProps.value.enterToClass,
        }
      }
    }
    transProps.value = {
      mode: props.mode,
      ...transProps.value,
      // We always need `css` true
      css: true,
    }
    return () => h('transition', {...transProps.value}, normalizeSlot('default', {}, slots))
  },
})
</script>
