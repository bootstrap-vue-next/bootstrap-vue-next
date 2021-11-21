<script lang="ts">
import {computed, defineComponent, h, PropType} from 'vue'
import {Animation, ColorVariant, IconSize} from '../../types'
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg'
import BIconBase from './BIconBase.vue'

export default /* #__PURE__ */ defineComponent({
  name: 'BIcon',
  components: {BIconBase},
  props: {
    animation: {type: String as PropType<Animation>},
    flipH: {type: Boolean, default: false},
    flipV: {type: Boolean, default: false},
    fontScale: {type: [Number, String], default: 1},
    icon: {type: String, required: true},
    rotate: {
      type: [String, Number],
      required: false,
      validator: (value: string | number) => value >= -360 && value <= 360,
    },
    scale: {type: [Number, String], default: 1},
    shiftH: {type: [Number, String], default: 0},
    shiftV: {type: [Number, String], default: 0},
    size: {type: String as PropType<IconSize>, required: false},
    stacked: {type: Boolean, default: false},
    title: {type: String, required: false},
    variant: {type: String as PropType<ColorVariant>, required: false},
  },
  setup(props) {
    const svgSprite = computed(() => BootstrapIcons)

    return () => {
      const renderIcon = h(
        'use',
        {
          'xlink:href': `${svgSprite.value}#${props.icon}`,
        },
        ''
      )

      return h(
        BIconBase,
        {
          ...props,
          content: renderIcon,
        },
        {
          default: () => '',
        }
      )
    }
  },
})
</script>
