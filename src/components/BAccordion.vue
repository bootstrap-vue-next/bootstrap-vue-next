<template>
    <div class="accordion" :class="{ 'accordion-flush': flush }" :id="computedId">
        <slot />
    </div>
</template>

<script lang="ts">
import { defineComponent, provide, InjectionKey } from 'vue';
import useId from '@/composables/useId';

export const injectionKey: InjectionKey<string> = Symbol();

export default defineComponent({
    props: {
        flush: { type: Boolean, default: false },
        id: { type: String }
    },
    setup(props) {
        const computedId = useId(props.id, 'accordion');

        provide(injectionKey, `#${computedId.value}`);

        return {
            computedId
        }
    },
})
</script>
