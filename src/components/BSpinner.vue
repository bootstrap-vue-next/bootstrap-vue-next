<template>
    <div :class="classes" role="status">
        <span class="visually-hidden">{{ label }}</span>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColorVariant } from '@/types';

export default defineComponent({
    props: {
        grow: { type: Boolean, default: false },
        label: { type: String, default: 'Loading...'},
        variant: { type: String as PropType<ColorVariant> },
        small: { type: Boolean, default: false },
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
