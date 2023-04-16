<script lang="ts">
import {defineComponent, h, Teleport} from 'vue'

export default defineComponent({
  name: 'ComponentOrEmpty',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    to: {
      type: [String, HTMLElement],
      required: false,
      default: null,
    },
    skip: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, {slots, attrs}) {
    return () =>
      props.skip
        ? slots.default?.()
        : props.tag === 'Teleport'
        ? h(Teleport, {to: props.to}, [slots.default?.()])
        : h(props.tag, {...attrs}, [slots.default?.()])
  },
})
</script>
