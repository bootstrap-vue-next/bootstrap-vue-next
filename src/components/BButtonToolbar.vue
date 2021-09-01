<template>
  <div
      :class="classes"
      class="btn-toolbar"
      role="toolbar"
  >
    <slot/>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BButtonToolbar',
  props: {
    justify: {type: Boolean, default: false},
    // keyNav: {type: Boolean, default: false},
  },
  setup(props) {
    const classes = computed(() => ({
      'justify-content-between': props.justify,
    }))

    return {
      classes
    }
  },
})
</script>
