<template>
  <component
    :is="headerTag"
    class="card-header"
    :class="[headerClass, classes]"
  >
    <!-- eslint-disable-next-line vue/no-v-html vue/max-attributes-per-line -->
    <div v-if="!!headerHtml" v-html="headerHtml" />
    <slot v-else>
      {{ header }}
    </slot>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant} from "../types";

export default defineComponent({
    name: 'BCardHeader',
    props: {
        header: { type: String },
        headerBgVariant: { type: String as PropType<ColorVariant> },
        headerBorderVariant: { type: String as PropType<ColorVariant> },
        headerClass: { type: [Array, Object, String] },
        headerHtml: { type: String },
        headerTag: { type: String, default: 'h4' },
        headerTextVariant: { type: String as PropType<ColorVariant> },
    },
    setup(props) {
        const classes = computed(() => ({
          [`text-${props.headerTextVariant}`]: props.headerTextVariant,
          [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
          [`border-${props.headerBorderVariant}`]: props.headerBorderVariant
        }));

        return {
          classes,
        };
      }
})
</script>
