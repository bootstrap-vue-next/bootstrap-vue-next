<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="`heading${computedId}`">
      <button class="accordion-button" :class="{ collapsed: !show }" type="button" v-b-toggle:[computedId] :aria-expanded="show ? 'true' : 'false'" :aria-controls="computedId">
        {{ header }}
      </button>
    </h2>
    <b-collapse :id="computedId" class="accordion-collapse" :show="show" :parent="parent" :aria-labelledby="`heading${computedId}`">
      <div class="accordion-body">
        <slot />
      </div>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import BCollapse from './BCollapse.vue';
import BToggle from '@/directives/BToggle';
import getID from '@/utils/getID';

export default defineComponent({
    inheritAttrs: false,
    components: {
      BCollapse
    },
    directives: {
      BToggle
    },
    props: {
        header: { type: String },
        id: { type: String },
        show: { type: Boolean, default: false }
    },
    setup(props) {
      const computedId = computed(() => {
        return props.id || getID('accordion_item');
      })

      const parent = inject('parent');

      return {
        parent,
        computedId
      }
    },
})
</script>
