<!-- eslint-disable vue/no-v-html -->
<template>
  <component :is="headerTag" class="card-header" :class="[headerClass, classes]">
    <div v-if="!!headerHtml" v-html="headerHtml" />
    <slot v-else>
      {{ header }}
    </slot>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant} from '../../types'

export default defineComponent({
  name: 'BCardHeader',
  props: {
    header: {type: String, required: false},
    headerBgVariant: {type: String as PropType<ColorVariant>, required: false},
    headerBorderVariant: {type: String as PropType<ColorVariant>, required: false},
    headerClass: {type: [Array, Object, String], required: false},
    headerHtml: {type: String, required: false},
    headerTag: {type: String, default: 'div'},
    headerTextVariant: {type: String as PropType<ColorVariant>, required: false},
  },
  setup(props) {
    const classes = computed(() => ({
      [`text-${props.headerTextVariant}`]: props.headerTextVariant,
      [`bg-${props.headerBgVariant}`]: props.headerBgVariant,
      [`border-${props.headerBorderVariant}`]: props.headerBorderVariant,
    }))

    return {
      classes,
    }
  },
})
</script>
