<template>
  <ul class="nav" :class="classes">
    <slot />
  </ul>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BNav',
  props: {
    align: {type: String},
    fill: {type: Boolean, default: false},
    justified: {type: Boolean, default: false},
    pills: {type: Boolean, default: false},
    tabs: {type: Boolean, default: false},
    vertical: {type: Boolean, default: false},
  },
  setup(props) {
    const classes = computed(() => ({
      'flex-column': props.vertical,
      [`justify-content-${props.align}`]: props.align,
      'nav-tabs': props.tabs,
      'nav-pills': props.pills,
      'nav-fill': props.fill,
      'nav-justified': props.justified,
    }))

    return {
      classes,
    }
  },
})
</script>
