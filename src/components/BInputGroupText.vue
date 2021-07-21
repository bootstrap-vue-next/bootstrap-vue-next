<template>
    <component :is="tag" class="input-group-text" v-bind="attrs">
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
      tag: { type: String, default: 'span'},
    },
    setup(props, { attrs }) {
        return {
            attrs
        }
    },
})
</script>
