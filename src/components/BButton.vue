<template>
    <button class="btn" :class="`btn-${variant}`">
        <slot/>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import ColorVariant from '@/types/ColorVariant';

export default defineComponent({
    props: {
        variant: { type: String as PropType<ColorVariant>, default: 'secondary' },
    }
})
</script>
