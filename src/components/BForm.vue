<template>
  <form
    :id="props.id"
    :novalidate="props.novalidate"
    :class="classes"
  >
    <slot />
  </form>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'BForm',
  props: {
    id: { type: String },
    floating: { type: Boolean, default: false },
    novalidate: { type: Boolean, default: false },
    validated: { type: Boolean, default: false }
  },
  setup(props) {
    const classes = computed(() => ({
      'form-floating': props.floating,
      'was-validated': props.validated,
    }));

    return {
      classes,
    }
  },
})
</script>
