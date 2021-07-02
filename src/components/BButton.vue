<template>
    <button class="btn" :class="`btn-${variant}`">
        <slot/>
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ButtonVariant } from '@/types';

export default defineComponent({
    props: {
        variant: { type: String as PropType<ButtonVariant>, default: 'secondary' },
    }
})
</script>
