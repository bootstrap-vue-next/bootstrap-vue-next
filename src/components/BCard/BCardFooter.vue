<!-- eslint-disable vue/no-v-html -->
<template>
  <component :is="footerTag" class="card-footer" :class="[footerClass, classes]">
    <div v-if="!!footerHtml" v-html="footerHtml" />
    <slot v-else>
      {{ footer }}
    </slot>
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant} from '../../types'

export default defineComponent({
  name: 'BCardfooter',
  props: {
    footer: {type: String},
    footerBgVariant: {type: String as PropType<ColorVariant>, required: false},
    footerBorderVariant: {type: String as PropType<ColorVariant>, required: false},
    footerClass: {type: [Array, Object, String], required: false},
    footerHtml: {type: String, required: false},
    footerTag: {type: String, default: 'div'},
    footerTextVariant: {type: String as PropType<ColorVariant>, required: false},
  },
  setup(props) {
    const classes = computed(() => ({
      [`text-${props.footerTextVariant}`]: props.footerTextVariant,
      [`bg-${props.footerBgVariant}`]: props.footerBgVariant,
      [`border-${props.footerBorderVariant}`]: props.footerBorderVariant,
    }))

    return {
      classes,
    }
  },
})
</script>
