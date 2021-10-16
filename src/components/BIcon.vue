<template>
  <svg class="bootstrap-icon" :class="cssClasses" v-bind="baseAttrs">
    <g :transform="svgTransform">
      <use :xlink:href="`${svgSprite}#${icon}`" />
    </g>
  </svg>
</template>

<script lang="ts">
// https://github.com/dvuckovic/vue3-bootstrap-icons
import {computed, defineComponent, PropType} from 'vue'
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg'
import {Animation, ColorVariant, IconSize} from '../types'
import {mathMax} from '../utils/math'
import {toFloat} from '../utils/number'

export default /* #__PURE__ */ defineComponent({
  name: 'BIcon',
  props: {
    icon: {type: String, required: true},
    variant: {type: String as PropType<ColorVariant>},
    size: {type: String as PropType<IconSize>},
    flipH: {type: Boolean, default: false},
    flipV: {type: Boolean, default: false},
    rotate: {
      type: [String, Number],
      validator: (value: string | number) => value >= -360 && value <= 360,
    },
    scale: {type: [Number, String], default: 1},
    animation: {type: String as PropType<Animation>},
  },
  setup(props) {
    const computedScale = computed(() => mathMax(toFloat(props.scale, 1), 0) || 1)
    const hasScale = computed(() => props.flipH || props.flipV || computedScale.value !== 1)
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

    const baseAttrs = {
      'viewBox': '0 0 16 16',
      'focusable': 'false',
      'role': 'img',
      'aria-label': 'icon',
      'xmlns': 'http://www.w3.org/2000/svg',
    }

    const svgTransform = computed((): string | undefined => transforms.value.join(' ') || undefined)
    const svgSprite = computed(() => BootstrapIcons)

    const upperFirst = (str: string | unknown) => {
      if (typeof str !== 'string') return str
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return {
      baseAttrs,
      cssClasses,
      svgTransform,
      svgSprite,
    }
  },
})
</script>
