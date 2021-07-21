<template>
    <component :is="tag" class="input-group-text">
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
      tag: { type: String, default: 'span'},
    },
})
</script>
