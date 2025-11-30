<script lang="ts">
import {defineComponent, h, type SlotsType} from 'vue'

export default defineComponent({
  name: 'ConditionalWrapper',
  inheritAttrs: false,
  slots: Object as SlotsType<{
    default?: Record<string, never>
  }>,
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    skip: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, {slots, attrs}) {
    return () =>
      props.skip ? slots.default?.({}) : h(props.tag, {...attrs}, [slots.default?.({})])
  },
})
</script>
