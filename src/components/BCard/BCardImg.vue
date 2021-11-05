<template>
  <img :class="classes" v-bind="attrs" />
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BCardImage',
  props: {
    alt: {type: String, default: null},
    bottom: {type: Boolean, default: false},
    end: {type: Boolean, default: false},
    height: {type: [Number, String], required: false},
    left: {type: Boolean, default: false},
    right: {type: Boolean, default: false},
    src: {type: String, required: false},
    start: {type: Boolean, default: false},
    top: {type: Boolean, default: false},
    width: {type: [Number, String], required: false},
  },
  setup(props) {
    const attrs = computed(() => ({
      src: props.src,
      alt: props.alt,
      width:
        (typeof props.width === 'number' ? props.width : parseInt(props.width as string, 10)) ||
        undefined,
      height:
        (typeof props.height === 'number' ? props.height : parseInt(props.height as string, 10)) ||
        undefined,
    }))

    const classes = computed(() => {
      const align = props.left ? 'float-left' : props.right ? 'float-right' : ''

      let baseClass = 'card-img'

      if (props.top) {
        baseClass += '-top'
      } else if (props.right || props.end) {
        baseClass += '-right'
      } else if (props.bottom) {
        baseClass += '-bottom'
      } else if (props.left || props.start) {
        baseClass += '-left'
      }

      return {
        [align]: !!align,
        [baseClass]: true,
      }
    })

    return {
      attrs,
      classes,
    }
  },
})
</script>
