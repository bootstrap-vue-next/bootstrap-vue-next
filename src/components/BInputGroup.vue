<template>
    <div class="input-group" :class="classes" role="group">
        <slot name="prepend">
            <span v-if="prepend" class="input-group-text">{{ prepend }}</span>
        </slot>

        <slot />

        <slot name="append">
            <span v-if="append" class="input-group-text">{{ append }}</span>
        </slot>
    </div>
</template>

<script lang="ts">
import { InputSize } from '../types';
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
    props: {
        size: { type: String as PropType<InputSize> },
        append: { type: String },
        prepend: { type: String },
    },
    setup(props) {
        const classes = computed(() => ({
            'input-group-sm': props.size === 'sm',
            'input-group-lg': props.size === 'lg',
        }));

        return {
            classes
        }
    },
})
</script>
