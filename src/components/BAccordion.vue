<template>
    <div class="accordion" :class="{ 'accordion-flush': flush }" :id="computedId">
        <slot />
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide } from 'vue';
import getID from '@/utils/getID';

export default defineComponent({
    props: {
        flush: { type: Boolean, default: false },
        id: { type: String }
    },
    setup(props) {
        const computedId = computed(() => {
            return props.id || getID();
        })

        provide('parent', `#${computedId.value}`);

        return {
            computedId
        }
    },
})
</script>
