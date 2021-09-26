<template>
  <component :is="bodyTag" class="card-body" :class="classes">
    <b-card-title v-if="title" :title-tag="titleTag" :title="title" />
    <b-card-sub-title
      v-if="subTitle"
      :sub-title-tag="subTitleTag"
      :sub-title="subTitle"
      :sub-title-text-variant="subTitleTextVariant"
    />
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {ColorVariant} from '../../types'

export default defineComponent({
  name: 'BCardBody',
  props: {
    bodyBgVariant: {type: String as PropType<ColorVariant>, required: false},
    bodyClass: {type: [Array, Object, String], required: false},
    bodyTag: {type: String, default: 'div'},
    bodyTextVariant: {type: String as PropType<ColorVariant>, required: false},
    overlay: {type: Boolean, default: false},
    subTitle: {type: String, required: false},
    subTitleTag: {type: String, default: 'h4'},
    subTitleTextVariant: {type: String as PropType<ColorVariant>, required: false},
    title: {type: String, required: false},
    titleTag: {type: String, default: 'h4'},
  },
  setup(props) {
    const classes = computed(() => ({
      [`text-${props.bodyTextVariant}`]: props.bodyTextVariant,
      [`bg-${props.bodyBgVariant}`]: props.bodyBgVariant,
    }))

    return {
      classes,
    }
  },
})
</script>
