<template>
  <svg class="bootstrap-icon" :class="cssClasses" v-bind="$attrs">
    <g :transform="svgTransform" transform-origin="center">
      <use :xlink:href="`${svgSprite}#${icon}`" />
    </g>
  </svg>
</template>

<script lang="ts">
// https://github.com/dvuckovic/vue3-bootstrap-icons
import {defineComponent, PropType} from 'vue'
import BootstrapIcons from 'bootstrap-icons/bootstrap-icons.svg'
import {Animation, ColorVariant, IconSize} from '../types'

export default /* #__PURE__ */ defineComponent({
  name: 'BIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },

    variant: {
      type: String as PropType<ColorVariant>,
    },

    size: {
      type: String as PropType<IconSize>,
    },

    flipH: {
      type: Boolean,
    },

    flipV: {
      type: Boolean,
    },

    rotate: {
      type: [String, Number],
      validator: (value: string | number) => value >= -360 && value <= 360,
    },

    animation: {
      type: String as PropType<Animation>,
    },
  },

  computed: {
    cssClasses(): string[] {
      const classes = []

      if (this.variant) classes.push(`bootstrap-icon--variant-${this.variant}`)
      if (this.size) classes.push(`bootstrap-icon--size-${this.size}`)
      if (this.animation) classes.push(`bootstrap-icon--animation-${this.animation}`)

      return classes
    },

    svgTransform(): string {
      if (!this.flipH && !this.flipV && !this.rotate) return ''

      let scale
      let rotate

      if (this.flipV && this.flipH) {
        scale = '-1 -1'
      } else if (this.flipH) {
        scale = '-1 1'
      } else if (this.flipV) {
        scale = '1 -1'
      }

      if (this.rotate) {
        // eslint-disable-next-line prefer-destructuring
        rotate = this.rotate
      }

      return (scale ? `scale(${scale})` : '') + (rotate ? `rotate(${rotate})` : '')
    },

    svgSprite() {
      return BootstrapIcons
    },
  },

  methods: {
    upperFirst(str: string | unknown) {
      if (typeof str !== 'string') return str
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
})
</script>
