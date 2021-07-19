<template>
    <li class="list-group-item" :class="classes" :aria-current="active ? true : null" :aria-disabled="disabled ? true : null">
        <slot />
    </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColorVariant } from '../types';

export default defineComponent({
    props: {
        active: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        variant: { type: String as PropType<ColorVariant> }
    },
    setup(props) {
        const classes = computed(() => ({
            active: props.active,
            disabled: props.disabled,
            [`list-group-item-${props.variant}`]: props.variant,
        }))

        return {
            classes,
        }
    },
})
</script>
