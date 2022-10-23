<template>
  <component :is="tag" :id="id" class="input-group" :class="computedClasses" role="group">
    <slot name="prepend">
      <span v-if="hasPrepend" class="input-group-text">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="!!prependHtml" v-html="prependHtml" />
        <span v-else>{{ prepend }}</span>
      </span>
    </slot>
    <slot />
    <slot name="append">
      <span v-if="hasAppend" class="input-group-text">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="!!appendHtml" v-html="appendHtml" />
        <span v-else>{{ append }}</span>
      </span>
    </slot>
  </component>
</template>

<script setup lang="ts">
// import type {InputSize} from '../../types'
import {computed} from 'vue'

interface BInputGroupProps {
  append?: string
  appendHtml?: string
  id?: string
  prepend?: string
  prependHtml?: string
  size?: 'sm' | 'lg' // Exclude<InputSize, 'md'>
  tag?: string
}

const props = withDefaults(defineProps<BInputGroupProps>(), {
  tag: 'div',
})

const computedClasses = computed(() => ({
  'input-group-sm': props.size === 'sm',
  'input-group-lg': props.size === 'lg',
}))

const hasAppend = computed<boolean>(() => !!props.append || !!props.appendHtml)
const hasPrepend = computed<boolean>(() => !!props.prepend || !!props.prependHtml)
</script>
