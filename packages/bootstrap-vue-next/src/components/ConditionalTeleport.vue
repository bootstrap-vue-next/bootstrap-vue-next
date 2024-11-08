<script lang="ts">
import {defineComponent, h, type PropType, type SlotsType, Teleport, type TeleportProps} from 'vue'

export default defineComponent({
  name: 'ConditionalTeleport',
  inheritAttrs: false,
  slots: Object as SlotsType<{
    default?: Record<string, never>
  }>,
  props: {
    to: {
      type: [String, Object] as PropType<TeleportProps['to']>,
      default: null,
    },
    disabled: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, {slots}) {
    // use this untill https://github.com/vuejs/core/issues/9782 is resolved
    return () =>
      h(Teleport, {to: props.to, disabled: props.disabled || !props.to}, [slots.default?.({})])
  },
})
</script>
