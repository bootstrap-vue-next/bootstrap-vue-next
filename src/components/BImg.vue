<template>
  <img :class="classes" v-bind="attrs" />
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

// Blank image with fill template
const BLANK_TEMPLATE =
  '<svg width="%{w}" height="%{h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' +
  '<rect width="100%" height="100%" style="fill:%{f};"></rect>' +
  '</svg>'

const makeBlankImgSrc = (width: any, height: any, color: string) => {
  const src = encodeURIComponent(
    BLANK_TEMPLATE.replace('%{w}', String(width))
      .replace('%{h}', String(height))
      .replace('%{f}', color)
  )
  return `data:image/svg+xml;charset=UTF-8,${src}`
}

export default defineComponent({
  name: 'BImg',
  props: {
    alt: {type: String, default: undefined},
    blank: {type: Boolean, default: false},
    blankColor: {type: String, default: 'transparent'},
    block: {type: Boolean, default: false},
    center: {type: Boolean, default: false},
    fluid: {type: Boolean, default: false},
    fluidGrow: {type: Boolean, default: false},
    height: {type: [Number, String], required: false},
    left: {type: Boolean, default: false},
    right: {type: Boolean, default: false},
    rounded: {type: [Boolean, String], default: false},
    sizes: {type: [String, Array], required: false},
    src: {type: String, required: false},
    srcset: {type: [String, Array], required: false},
    thumbnail: {type: Boolean, default: false},
    width: {type: [Number, String], required: false},
  },
  setup(props) {
    const attrs = computed(() => {
      // eslint-disable-next-line prefer-destructuring
      let src = props.src
      let width =
        (typeof props.width === 'number' ? props.width : parseInt(props.width as string, 10)) ||
        null
      let height =
        (typeof props.height === 'number' ? props.height : parseInt(props.height as string, 10)) ||
        null

      let srcset = ''
      if (typeof props.srcset === 'string')
        srcset = props.srcset
          .split(',')
          .filter((x) => x)
          .join(',')
      else if (Array.isArray(props.srcset)) srcset = props.srcset.filter((x) => x).join(',')

      let sizes = ''
      if (typeof props.sizes === 'string')
        sizes = props.sizes
          .split(',')
          .filter((x) => x)
          .join(',')
      else if (Array.isArray(props.sizes)) sizes = props.sizes.filter((x) => x).join(',')

      if (props.blank) {
        if (!height && width) {
          height = width
        } else if (!width && height) {
          width = height
        }
        if (!width && !height) {
          width = 1
          height = 1
        }
        // Make a blank SVG image
        src = makeBlankImgSrc(width, height, props.blankColor || 'transparent')
        // Disable srcset and sizes
        srcset = ''
        sizes = ''
      }
      return {
        src,
        alt: props.alt,
        width: width || null,
        height: height || null,
        srcset: srcset || null,
        sizes: sizes || null,
      }
    })

    const classes = computed(() => {
      let align = ''
      // eslint-disable-next-line prefer-destructuring
      let block = props.block
      if (props.left) {
        align = 'float-start'
      } else if (props.right) {
        align = 'float-end'
      } else if (props.center) {
        align = 'mx-auto'
        block = true
      }
      return {
        'img-thumbnail': props.thumbnail,
        'img-fluid': props.fluid || props.fluidGrow,
        'w-100': props.fluidGrow,
        'rounded': props.rounded === '' || props.rounded === true,
        [`rounded-${props.rounded}`]: typeof props.rounded === 'string' && props.rounded !== '',
        [align]: !!align,
        'd-block': block,
      }
    })

    return {
      attrs,
      classes,
    }
  },
})
</script>
