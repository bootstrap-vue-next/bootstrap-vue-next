<script lang="ts">
import {defineComponent, h, type PropType, type RendererElement, Teleport} from 'vue'

export default defineComponent({
  name: 'ComponentOrEmpty',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    to: {
      type: [String, Object] as PropType<string | RendererElement | null | undefined>,
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
