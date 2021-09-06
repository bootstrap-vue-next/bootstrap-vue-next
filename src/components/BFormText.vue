<template>
  <component :is="tag" :id="id" class="form-text" :class="classes">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BFormText',
  props: {
    id: {type: String},
    tag: {type: String, default: 'small'},
    textVariant: {type: String, default: 'muted'},
  },
  setup(props) {
    const classes = computed(() => ({
      [`text-${props.textVariant}`]: props.textVariant ? props.textVariant : null,
    }))

    return {
      classes,
    }
  },
})
</script>
