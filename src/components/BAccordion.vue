<template>
    <div class="accordion" :class="{ 'accordion-flush': flush }" :id="computedId">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue';
import useId from '@/composables/useId';

export default defineComponent({
    props: {
        flush: { type: Boolean, default: false },
        id: { type: String }
    },
    setup(props) {
        const computedId = useId(props.id, 'accordion');

        provide('parent', `#${computedId.value}`);

        return {
            computedId
        }
    },
})
</script>
