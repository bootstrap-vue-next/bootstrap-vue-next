<script lang="ts">
import TransitionMode from '../../types/TransitionMode'
import {isPlainObject} from '../../utils/inspect'
import {defineComponent, h, PropType, ref, Transition} from 'vue'

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
  setup(props) {
    const transProperties = ref(props.transProps)
    if (!isPlainObject(transProperties)) {
      transProperties.value = props.noFade ? NO_FADE_PROPS : FADE_PROPS
      if (props.appear) {
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
    return {
      transProperties,
    }
  },
  render() {
    return h(
      Transition,
      {...this.transProperties},
      {
        default: () => (this.$slots.default ? this.$slots.default() : []),
      }
    )
  },
})
</script>
