<template>
  <component :is="tag" :id="id" class="input-group" :class="classes" role="group">
    <slot name="prepend">
      <span v-if="hasPrepend" class="input-group-text">
        <span v-if="!showPrependHtml">{{ prepend }}</span>
        <span v-if="showPrependHtml" v-html="prependHtml"></span>
      </span>
    </slot>

    <slot />

    <slot name="append">
      <span v-if="hasAppend" class="input-group-text">
        <span v-if="!showAppendHtml">{{ append }}</span>
        <span v-if="showAppendHtml" v-html="appendHtml"></span>
      </span>
    </slot>
  </component>
</template>

<script lang="ts">
import {InputSize} from '../../types'
import {computed, defineComponent, PropType} from 'vue'

export default defineComponent({
  name: 'BInputGroup',
  props: {
    append: {type: String, required: false},
    appendHtml: {type: String, required: false},
    id: {type: String, required: false},
    prepend: {type: String, required: false},
    prependHtml: {type: String, required: false},
    size: {type: String as PropType<InputSize>, required: false},
    tag: {type: String, default: 'div'},
  },
  setup(props) {
    const classes = computed(() => ({
      'input-group-sm': props.size === 'sm',
      'input-group-lg': props.size === 'lg',
    }))

    const hasAppend = computed(() => props.append || props.appendHtml)
    const hasPrepend = computed(() => props.prepend || props.prependHtml)
    const showAppendHtml = computed(() => !!props.appendHtml)
    const showPrependHtml = computed(() => !!props.prependHtml)
    return {
      classes,
      hasAppend,
      hasPrepend,
      showAppendHtml,
      showPrependHtml,
    }
  },
})
</script>
