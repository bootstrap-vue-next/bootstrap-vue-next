<template>
    <div ref="element" class="collapse" :class="{ show }" :data-bs-parent="parent || null">
        <slot/>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import { Collapse } from "bootstrap";

export default defineComponent({
    emits: [
        'update:modelValue'
    ],
    props: {
        modelValue: { type: Boolean, default: false },
        parent: { type: String, default: '' },
        show: { type: Boolean, default: false },
        toggle: { type: Boolean, default: false }
    },
    setup(props, { emit }) {
        const element = ref<HTMLElement>();
        const instance = ref<Collapse>();

        onMounted(() => {
            if (props.show) {
                emit('update:modelValue', props.show);
            }

            instance.value = new Collapse(element.value!, {
                parent: props.parent,
                toggle: props.toggle
            })

            element.value?.addEventListener('show.bs.collapse', () => {
                emit('update:modelValue', true);
            })
            
            element.value?.addEventListener('hide.bs.collapse', () => {
                emit('update:modelValue', false);
            })
        });

        watch(() => props.modelValue, (value) => {
            if (value) {
                instance.value?.show();
            } else {
                instance.value?.hide();
            }
        })

        return {
            element,
        }
    }
})
</script>
