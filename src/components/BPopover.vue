
<template>
  <div ref="element">
    <div ref="title">
      <slot name="title">{{ title }}</slot>
    </div>
    <div ref="content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { Popover } from "bootstrap";
import { defineComponent, onMounted, PropType, ref, Slot } from "vue";

export default defineComponent({
  props: {
    content: { type: String },
    id: { type: String },
    target: { type: String, required: true },
    triggers: { type: String as PropType<Popover.Options["trigger"]> },
    title: { type: String },
    placement: { type: String as PropType<Popover.Options["placement"]> },
  },
  setup(props) {
      const element = ref<HTMLElement>();
      const instance = ref<Popover>();
      const title = ref<HTMLElement>();
      const content = ref<HTMLElement>();

      onMounted(() => {
            instance.value = new Popover(`#${props.target}`, {    
                container: 'body',
                trigger: props.triggers,
                placement: props.placement,
                title: title.value?.innerHTML,
                content: content.value?.innerHTML,
                html: true,
                sanitize: false
            });

            element.value?.parentNode?.removeChild(element.value);
      });

      return {
        element,
        title,
        content
      }
  },
});
</script>
