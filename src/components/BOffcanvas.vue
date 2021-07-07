<template>
    <div ref="element" class="offcanvas" :class="classes" tabindex="-1" aria-labelledby="offcanvasLabel" :data-bs-backdrop="backdrop" :data-bs-scroll="bodyScrolling">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasLabel">{{ title }}</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { Offcanvas } from "bootstrap";

export default defineComponent({
    emits: [
        'update:modelValue',
        'show',
        'hide'
    ],
    props: {
        modelValue: { type: Boolean, default: false },
        bodyScrolling: { type: Boolean, default: false },
        backdrop: { type: Boolean, default: true },
        placement: { type: String, default: 'start' },
        title: { type: String, required: true }
    },
    setup(props, { emit }) {
        const element = ref<HTMLElement>();
        const instance = ref<Offcanvas>();

        onMounted(() => {
            instance.value = new Offcanvas(element.value!);

            element.value?.addEventListener('show.bs.offcanvas', () => {
                emit('show');
                emit('update:modelValue', true);
            })
            
            element.value?.addEventListener('hide.bs.offcanvas', () => {
                emit('hide');
                emit('update:modelValue', false);
            })

            if (props.modelValue) {
                instance.value?.show(element.value!);
            }
        })

        const classes = computed(() => ({
            [`offcanvas-${props.placement}`]: props.placement
        }));

        watch(() => props.modelValue, (value) => {
            if (value) {
                instance.value?.show(element.value!);
            } else {
                instance.value?.hide();
            }
        })

        return {
            element,
            classes
        }
    },
})
</script>
