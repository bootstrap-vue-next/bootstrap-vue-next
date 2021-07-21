<template>
    <div class="input-group" :class="classes" v-bind="attrs">
        <slot />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    props: {
        sm: { type: Boolean, default: false },
        lg: { type: Boolean, default: false },
    },
    setup(props, { attrs }) {
        const classes = computed(() => ({
            'input-group-sm': props.sm,
            'input-group-lg': !props.sm && props.lg,
        }));

        return {
            classes,
            attrs
        }
    },
})
</script>
