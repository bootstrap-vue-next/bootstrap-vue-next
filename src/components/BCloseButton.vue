<template>
  <button
    type="button"
    class="btn-close"
    :disabled="disabled"
    :class="classes"
    aria-label="Close"
  />
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BCloseButton',
  props: {
    disabled: {type: Boolean, default: false},
    white: {type: Boolean, default: false},
  },
  setup(props) {
    const classes = computed(() => ({
      'btn-close-white': props.white,
    }))

    return {
      classes,
    }
  },
})
</script>
