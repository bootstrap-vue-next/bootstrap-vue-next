
<template>
  <div ref="element">
    <div ref="titleRef">
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <div ref="contentRef">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Popover } from "bootstrap";
import { defineComponent, onMounted, PropType, ref } from "vue";
import useEventListener from '../composables/useEventListener';

export default defineComponent({
  props: {
    content: { type: String },
    id: { type: String },
    target: { type: String, required: true },
    triggers: { type: String as PropType<Popover.Options["trigger"]> },
    title: { type: String },
    placement: { type: String as PropType<Popover.Options["placement"]> },
  },
  emits: [
    'show',
    'shown',
    'hide',
    'hidden',
    'inserted'
  ],
  setup(props, { emit }) {
      const element = ref<HTMLElement>();
      const target = ref<HTMLElement>();
      const instance = ref<Popover>();
      const titleRef = ref<HTMLElement>();
      const contentRef = ref<HTMLElement>();

      onMounted(() => {
            instance.value = new Popover(`#${props.target}`, {
                container: 'body',
                trigger: props.triggers,
                placement: props.placement,
                title: titleRef.value,
                content: contentRef.value,
                html: true,
            });

            if (document.getElementById(props.target)) {
              target.value = document.getElementById(props.target) as HTMLElement;
            }

            element.value?.parentNode?.removeChild(element.value);
      });

      useEventListener(target, 'show.bs.popover', () => emit('show'));
      useEventListener(target, 'shown.bs.popover', () => emit('shown'));
      useEventListener(target, 'hide.bs.popover', () => emit('hide'));
      useEventListener(target, 'hidden.bs.popover', () => emit('hidden'));
      useEventListener(target, 'inserted.bs.popover', () => emit('inserted'));

      return {
        element,
        titleRef,
        contentRef,
      }
  },
});
</script>
