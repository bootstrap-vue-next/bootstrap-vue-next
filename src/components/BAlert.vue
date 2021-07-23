<template>
  <div
    ref="element"
    class="alert"
    role="alert"
    :class="classes"
  >
    <slot />
    <button
      v-if="dismissible"
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref } from 'vue'
import { Alert } from 'bootstrap';
import useEventListener from '../composables/useEventListener';
import { ColorVariant } from '../types';

export default defineComponent({
    name: 'BAlert',
    props: {
        dismissible: { type: Boolean, default: false },
        fade: { type: Boolean, default: false },
        show: { type: Boolean, default: false },
        variant: { type: String as PropType<ColorVariant>, default: 'info' },
    },
    emits: [
      'close',
      'closed'
    ],
    setup(props, { emit }) {
        const element = ref<HTMLElement>();
        const instance = ref<Alert>();
        const classes = computed(() => ({
            [`alert-${props.variant}`]: props.variant,
            show: props.show,
            'alert-dismissible': props.dismissible,
            fade: props.show
        }))

        useEventListener(element, 'close.bs.alert', () => emit('close'));
        useEventListener(element, 'closed.bs.alert', () => emit('closed'));

        onMounted(() => {
            instance.value = new Alert(element.value!);
        })

        return {
            element,
            classes,
        }
    }
})
</script>
