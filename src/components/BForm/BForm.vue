<template>
  <form
    :id="id"
    :novalidate="novalidate"
    :class="classes"
    @submit.prevent="$emit('submit', $event)"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'

export default defineComponent({
  name: 'BForm',
  props: {
    id: {type: String, required: false},
    floating: {type: Boolean, default: false},
    novalidate: {type: Boolean, default: false},
    validated: {type: Boolean, default: false},
  },
  emits: ['submit'],
  setup(props) {
    const classes = computed(() => ({
      'form-floating': props.floating,
      'was-validated': props.validated,
    }))

    return {
      classes,
    }
  },
})
</script>
