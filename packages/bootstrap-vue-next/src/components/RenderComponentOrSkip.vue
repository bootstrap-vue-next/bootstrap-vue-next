<script lang="ts">
import {defineComponent, h, type PropType, type SlotsType, Teleport, type TeleportProps} from 'vue'

export default defineComponent({
  name: 'RenderComponentOrSkip',
  inheritAttrs: false,
  slots: Object as SlotsType<{
    default?: Record<string, never>
  }>,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    to: {
      type: [String, Object] as PropType<TeleportProps['to']>,
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
