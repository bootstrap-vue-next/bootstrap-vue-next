<template>
  <div class="form-floating" v-bind="$attrs">
    <slot />
    <label :for="labelFor">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BFormFloatingLabel',
    props: {
        labelFor: { type: String },
        label: { type: String }
    },
})
</script>
