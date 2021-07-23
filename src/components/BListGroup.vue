<template>
  <component
    :is="numbered ? 'ol' : 'ul'"
    class="list-group"
    :class="classes"
  >
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    props: {
        flush: { type: Boolean, default: false },
        horizontal: { type: Boolean, default: false },
        numbered: { type: Boolean, default: false }
    },
    setup(props) {
        const classes = computed(() => ({
            'list-group-flush': props.flush,
            'list-group-numbered': props.numbered,
            'list-group-horizontal': props.horizontal
        }))

        return {
            classes,
        }
    },
})
</script>
