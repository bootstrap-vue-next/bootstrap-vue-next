<template>
  <svg
    class="bi"
    :class="classes"
  >
    <g>
      <use :xlink:href="`${BootstrapIcons}#${icon}`" />
    </g>
  </svg>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant, InputSize} from '../types'
// const BootstrapIcons = require("bootstrap-icons/bootstrap-icons.svg") as string

export default defineComponent({
    props: {
        icon: { type: String },
        variant: {type: String as PropType<ColorVariant>, default: 'dark'},
        size: {type: String as PropType<InputSize>},
    },
    setup(props) {
      const classes = computed(() => ({
         [`text-${props.variant}`]: props.variant,
         [`bi-${props.size}`]: props.size,
      }));

      return {
        BootstrapIcons: '',
        classes
      }
    },
})
</script>

<style lang="scss">
  .bi {
    width: 24px;
    height: 24px;

    &.bi-sm {
      width: 16px;
      height: 16px;
    }
    &.bi-lg {
      width: 32px;
      height: 32px;
    }
  }
</style>
