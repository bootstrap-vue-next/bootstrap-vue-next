<template>
    <span class="badge" :class="classes">
        <slot />
    </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    props: {
        pill: { type: Boolean, default: false },
        variant: { type: String, default: 'secondary' }
    },
    setup(props) {
        const classes = computed(() => ({
            [`bg-${props.variant}`]: props.variant,
            'text-dark': ['warning', 'info', 'light'].includes(props.variant),
            'rounded-pill': props.pill
        }))

        return {
            classes,
        }
    },
})
</script>
