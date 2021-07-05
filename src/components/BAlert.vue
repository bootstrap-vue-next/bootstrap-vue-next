<template>
    <div class="alert" role="alert" :class="classes">
        <slot />
        <button v-if="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { ColorVariant } from '@/types';

export default defineComponent({
    props: {
        dismissible: { type: Boolean, default: false },
        fade: { type: Boolean, default: false },
        show: { type: Boolean, default: false },
        variant: { type: String as PropType<ColorVariant>, default: 'info' },
    },
    setup(props) {
        const classes = computed(() => ({
            [`alert-${props.variant}`]: props.variant,
            show: props.show,
            'alert-dismissible': props.dismissible,
            fade: props.show
        }))

        return {
            classes,
        }
    }
})
</script>
