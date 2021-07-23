<template>
  <div
    ref="element"
    class="collapse"
    :class="classes"
    :data-bs-parent="parent || null"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { Collapse } from "bootstrap";
import useEventListener from '../composables/useEventListener';

export default defineComponent({
    props: {
        modelValue: { type: Boolean, default: false },
        parent: { type: String, default: '' },
        toggle: { type: Boolean, default: false },
        visible: { type: Boolean, default: false },
    },
    emits: [
        'update:modelValue',
        'show',
        'shown',
        'hide',
        'hidden'
    ],
    setup(props, { emit }) {
        const element = ref<HTMLElement>();
        const instance = ref<Collapse>();
        const classes = computed(() => ({
            show: props.visible,
        }))

        useEventListener(element, 'show.bs.collapse', () => {
            emit('show');
            emit('update:modelValue', true);
        });
        
        useEventListener(element, 'hide.bs.collapse', () => {
            emit('show');
            emit('update:modelValue', true);
        });

        useEventListener(element, 'shown.bs.collapse', () => emit('shown'));
        useEventListener(element, 'hidden.bs.collapse', () => emit('hidden'));

        onMounted(() => {
            if (props.visible) {
                emit('update:modelValue', props.visible);
            }

            instance.value = new Collapse(element.value!, {
                parent: props.parent,
                toggle: props.toggle
            });
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
            classes,
        }
    }
})
</script>
