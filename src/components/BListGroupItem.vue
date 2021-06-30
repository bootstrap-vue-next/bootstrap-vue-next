<template>
    <li class="list-group-item" :class="classes" :aria-current="active ? true : null" :aria-disabled="disabled ? true : null">
        <slot />
    </li>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    props: {
        active: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        variant: { type: String }
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
