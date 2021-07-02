<template>
    <div class="alert" role="alert" :class="[`alert-${variant}`, { show, 'alert-dismissible': dismissible, fade }]">
        <slot />
        <button v-if="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ColorVariant } from '@/types';

export default defineComponent({
    props: {
        dismissible: { type: Boolean, default: false },
        fade: { type: Boolean, default: false },
        show: { type: Boolean, default: false },
        variant: { type: String as PropType<ColorVariant>, default: 'info' },
    }
})
</script>
