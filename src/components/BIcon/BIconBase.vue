<script lang="ts">
// https://github.com/dvuckovic/vue3-bootstrap-icons
import {normalizeSlot} from '../../utils/normalize-slot'
import {computed, defineComponent, h, PropType} from 'vue'
import {Animation, IconSize, TextColorVariant} from '../../types'
import {mathMax} from '../../utils/math'
import {toFloat} from '../../utils/number'

export default /* #__PURE__ */ defineComponent({
  name: 'BIcon',
  props: {
    animation: {type: String as PropType<Animation>},
    class: {type: [Array, Object, String], required: false},
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
    stacked: {type: Boolean, default: false},
    title: {type: String, required: false},
    variant: {type: String as PropType<TextColorVariant>, required: false},
  },
  setup(props) {
    const computedFontScale = computed(() => mathMax(toFloat(props.fontScale, 1), 0) || 1)
    const computedScale = computed(() => mathMax(toFloat(props.scale, 1), 0) || 1)
    const computedShiftH = computed(() => toFloat(props.shiftH, 0))
    const computedShiftV = computed(() => toFloat(props.shiftV, 0))

    const hasScale = computed(() => props.flipH || props.flipV || computedScale.value !== 1)
    const hasShift = computed(() => computedShiftH.value || computedShiftV.value)
    const hasContent = computed(() => props.content !== null && props.content !== undefined)
    const hasTransforms = computed(() => hasScale.value || props.rotate)

    const transforms = computed(() =>
      [
        hasTransforms.value ? 'translate(8 8)' : null,
        hasScale.value
          ? `scale(${(props.flipH ? -1 : 1) * computedScale.value} ${
              (props.flipV ? -1 : 1) * computedScale.value
            })`
          : null,
        props.rotate ? `rotate(${props.rotate})` : null,
        hasTransforms.value ? 'translate(-8 -8)' : null,
      ].filter((p) => p)
    )

    const cssClasses = computed((): string[] => {
      const classes = []

      if (props.variant) classes.push(`bootstrap-icon--variant-${props.variant}`)
      if (props.size) classes.push(`bootstrap-icon--size-${props.size}`)
      if (props.animation) classes.push(`bootstrap-icon--animation-${props.animation}`)

      return classes
    })

    let baseAttrs: any = {
      viewBox: '0 0 16 16',
      // 'width': '1em',
      // 'height': '1em',
      // 'focusable': 'false',
      // 'role': 'img',
      // 'aria-label': 'icon',
      // 'xmlns': 'http://www.w3.org/2000/svg',
    }

    if (!props.stacked) {
      baseAttrs = {
        ...baseAttrs,
        'width': '1em',
        'height': '1em',
        'focusable': 'false',
        'role': 'img',
        'aria-label': 'icon',
        'xmlns': 'http://www.w3.org/2000/svg',
      }
    }

    const svgTransform = computed((): string | undefined => transforms.value.join(' ') || undefined)

    return {
      baseAttrs,
      cssClasses,
      computedFontScale,
      computedShiftH,
      computedShiftV,
      hasContent,
      hasShift,
      svgTransform,
    }
  },
  render() {
    const props = this.$props

    let $inner = h(
      'g',
      {
        transform: this.svgTransform,
      },
      [props.content, normalizeSlot('default', {}, this.$slots)]
    )

    // If needed, we wrap in an additional `<g>` in order to handle the shifting
    if (this.hasShift) {
      $inner = h(
        'g',
        {
          transform: `translate(${(16 * this.computedShiftH) / 16} ${
            (-16 * this.computedShiftV) / 16
          })`,
        },
        [$inner]
      )
    }

    // Wrap in an additional `<g>` for proper animation handling if stacked
    if (props.stacked) {
      $inner = h('g', [$inner])
    }

    const $title = props.title ? h('title', props.title) : null
    const $content = [$title, $inner].filter((p) => p)

    return h(
      'svg',
      {
        class: ['bootstrap-icon', this.cssClasses, props.class],
        ...this.baseAttrs,
        style: props.stacked
          ? {}
          : {
              'font-size': this.computedFontScale === 1 ? null : `${this.computedFontScale * 100}%`,
            },
      },
      $content
    )
  },
})
</script>
