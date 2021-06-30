<template>
    <div :class="classes" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

type ClassObject = Array<string | Record<string, boolean>>;

export default defineComponent({
    props: {
        grow: { type: Boolean, default: false },
        variant: { type: String },
        small: { type: Boolean, default: false }
    },
    setup(props) {
        const classes = computed(() => ({
            'spinner-border': !props.grow,
            'spinner-border-sm': !props.grow && props.small,
            'spinner-grow': props.grow,
            'spinner-grow-sm': props.grow && props.small,
            [`text-${props.variant}`]: !!props.variant,
        }));

        return {
            classes,
        }
    },
})
</script>
