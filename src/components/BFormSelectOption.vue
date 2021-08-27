<template>
  <option
    :value="value"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </option>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BFormSelectOption',
  props: {
    // eslint-disable-next-line vue/require-prop-types
    value: { required: true },
    disabled: { type: Boolean, default: false },
  },
})
</script>
