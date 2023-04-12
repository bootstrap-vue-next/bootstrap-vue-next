<script lang="ts">
import {defineComponent, h} from 'vue'

export default defineComponent({
  name: 'ComponentOrEmpty',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    skip: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, {slots, attrs}) {
    return () => (props.skip ? slots.default?.() : h(props.tag, {...attrs}, [slots.default?.()]))
  },
})
</script>
