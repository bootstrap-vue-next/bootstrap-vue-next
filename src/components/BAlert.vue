<template>
    <div ref="element" class="alert" role="alert" :class="classes">
        <slot />
        <button v-if="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import { Alert } from 'bootstrap';
import { ColorVariant } from '@/types';

export default defineComponent({
    props: {
        dismissible: { type: Boolean, default: false },
        fade: { type: Boolean, default: false },
        show: { type: Boolean, default: false },
        variant: { type: String as PropType<ColorVariant>, default: 'info' },
    },
    setup(props, { emit }) {
        const element = ref<HTMLElement>();
        const instance = ref<Alert>();
        const classes = computed(() => ({
            [`alert-${props.variant}`]: props.variant,
            show: props.show,
            'alert-dismissible': props.dismissible,
            fade: props.show
        }))

        onMounted(() => {
            instance.value = new Alert(element.value!);
            
            element.value?.addEventListener('close.bs.alert', () => emit('close'))
            element.value?.addEventListener('closed.bs.alert', () => emit('closed'))
        })


        return {
            element,
            classes,
        }
    }
})
</script>
