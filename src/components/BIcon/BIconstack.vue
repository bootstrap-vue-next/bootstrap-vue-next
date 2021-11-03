<script lang="ts">
import {normalizeSlot} from '../../utils/normalize-slot'
import {defineComponent, h, PropType} from 'vue'
import {Animation, ColorVariant, IconSize} from '../../types'
import BIconBase from './BIconBase.vue'

export default /* #__PURE__ */ defineComponent({
  name: 'BIconstack',
  components: {BIconBase},
  props: {
    animation: {type: String as PropType<Animation>},
    content: {type: [String, Object], required: false},
    flipH: {type: Boolean, default: false},
    flipV: {type: Boolean, default: false},
    fontScale: {type: [Number, String], default: 1},
    rotate: {
      type: [String, Number],
      required: false,
      validator: (value: string | number) => value >= -360 && value <= 360,
    },
    scale: {type: [Number, String], default: 1},
    shiftH: {type: [Number, String], default: 0},
    shiftV: {type: [Number, String], default: 0},
    size: {type: String as PropType<IconSize>, required: false},
    title: {type: String, required: false},
    variant: {type: String as PropType<ColorVariant>, required: false},
  },
  setup(props, {slots}) {
    return () =>
      h(
        BIconBase,
        {
          ...props,
          class: 'b-icon-stack',
        },
        {
          default: () => normalizeSlot('default', {}, slots) || '',
        }
      )
  },
})
</script>
