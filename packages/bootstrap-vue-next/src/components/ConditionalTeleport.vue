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
      default: false,
    },
  },
  setup(props, {slots}) {
    // use this untill https://github.com/vuejs/core/issues/9782 is resolved
    return () =>
      props.disabled || !props.to
        ? slots.default?.({})
        : h(Teleport, {to: props.to}, [slots.default?.({})])
  },
})
</script>
