<!-- eslint-disable vue/no-v-html -->
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

<script setup lang="ts">
import type {InputSize} from '../../types'
import {computed} from 'vue'

interface BInputGroupProps {
  append?: string
  appendHtml?: string
  id?: string
  prepend?: string
  prependHtml?: string
  size?: InputSize
  tag?: string
}

const props = withDefaults(defineProps<BInputGroupProps>(), {
  tag: 'div',
})

const classes = computed(() => ({
  'input-group-sm': props.size === 'sm',
  'input-group-lg': props.size === 'lg',
}))

const hasAppend = computed<boolean>(() => !!props.append || !!props.appendHtml)
const hasPrepend = computed<boolean>(() => !!props.prepend || !!props.prependHtml)
const showAppendHtml = computed<boolean>(() => !!props.appendHtml)
const showPrependHtml = computed<boolean>(() => !!props.prependHtml)
</script>
