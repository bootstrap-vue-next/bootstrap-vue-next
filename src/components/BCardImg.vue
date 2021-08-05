<template>
  <img
    :class="classes"
    v-bind="attrs"
  >
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BCardImage',
  props: {
    alt: {type: String, default: null},
    bottom: {type: Boolean, default: false},
    end: {type: Boolean, default: false},
    height: {type: [Number, String]},
    left: {type: Boolean, default: false},
    right: {type: Boolean, default: false},
    src: {type: String},
    start: {type: Boolean, default: false},
    top: {type: Boolean, default: false},
    width: {type: [Number, String]},
  },
  setup(props) {

    const attrs = computed(() => {
      const {src, width, height} = props;

      return {
        src,
        alt: props.alt,
        width: ((typeof width === 'number') ? width : parseInt(width as string, 10)) || null,
        height: ((typeof height === 'number') ? height : parseInt(height as string, 10)) || null
      };
    });

    const classes = computed(() => {
      const {top, right, end, bottom, left, start} = props;

      const align = (left) ? 'float-left' : (right) ? 'float-right' : '';

      let baseClass = 'card-img'

      if (top) {
        baseClass += '-top'
      }
      else if (right || end) {
        baseClass += '-right'
      }
      else if (bottom) {
        baseClass += '-bottom'
      }
      else if (left || start) {
        baseClass += '-left'
      }

      return {
        [align]: !!align,
        [baseClass]: true
      }
    });

    return {
      attrs,
      classes
    }
  }
})
</script>
