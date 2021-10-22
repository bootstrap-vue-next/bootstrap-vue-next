<template>
  <component :is="tag" :class="classes" v-bind="attrs">
    <slot />
  </component>
</template>

<script lang="ts">
import {computed, defineComponent, PropType} from 'vue'
import {TextColorVariant} from '../../types'

export default defineComponent({
  name: 'BFormText',
  props: {
    id: {type: String, required: false},
    inline: {type: Boolean, default: false},
    tag: {type: String, default: 'small'},
    textVariant: {type: String as PropType<TextColorVariant>, default: 'muted'},
  },
  setup(props) {
    const classes = computed(() => ({
      'form-text': !props.inline,
      [`text-${props.textVariant}`]: props.textVariant,
    }))

    const attrs = computed(() => ({
      id: props.id || null,
    }))

    return {
      attrs,
      classes,
    }
  },
})
</script>
