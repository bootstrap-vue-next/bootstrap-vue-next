<template>
    <button 
        class="btn" 
        :class="classes" 
        :disabled="disabled" 
        :data-bs-toggle="active || toggle ? 'button' : null"
        :aria-pressed="active || toggle ? active : null">
        <slot/>
    </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ButtonVariant } from '@/types';

export default defineComponent({
    props: {
        active: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        size: { type: String },
        toggle: { type: Boolean, default: false },
        variant: { type: String as PropType<ButtonVariant>, default: 'secondary' },
    },
    setup(props) {
        const classes = computed(() => ({
            [`btn-${props.variant}`]: props.variant,
            [`btn-${props.size}`]: props.size,
            active: props.active,
        }));

        return {
            classes
        }
    }
})
</script>
