<template>
  <component :is="tag" :class="classes" role="group" :aria-role="ariaRole">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BButtonGroup',
  props: {
    ariaRole: {type: String, default: 'group'},
    size: {type: String, required: false},
    tag: {type: String, default: 'div'},
    vertical: {type: Boolean, default: false},
  },
  setup(props) {
    const classes = computed(() => ({
      'btn-group': !props.vertical,
      'btn-group-vertical': props.vertical,
      [`btn-group-${props.size}`]: props.size,
    }))

    return {
      classes,
    }
  },
})
</script>
