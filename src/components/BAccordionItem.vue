<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="`heading${computedId}`">
      <button class="accordion-button" :class="{ collapsed: !visible }" type="button" v-b-toggle:[computedId] :aria-expanded="visible ? 'true' : 'false'" :aria-controls="computedId">
        <slot name="title">{{ title }}</slot>
      </button>
    </h2>
    <b-collapse :id="computedId" class="accordion-collapse" :visible="visible" :parent="parent" :aria-labelledby="`heading${computedId}`">
      <div class="accordion-body">
        <slot />
      </div>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import { injectionKey } from './BAccordion.vue';
import BCollapse from './BCollapse.vue';
import BToggle from '@/directives/BToggle';
import useId from '@/composables/useId';

export default defineComponent({
    inheritAttrs: false,
    components: {
      BCollapse
    },
    directives: {
      BToggle
    },
    props: {
        title: { type: String },
        id: { type: String },
        visible: { type: Boolean, default: false }
    },
    setup(props) {
      const computedId = useId(props.id, 'accordion_item');
      const parent = inject(injectionKey);

      return {
        parent,
        computedId
      }
    },
})
</script>
