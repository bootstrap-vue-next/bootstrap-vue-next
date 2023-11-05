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
import type {Size} from '../../types'
import {computed, toRef} from 'vue'

const props = withDefaults(
  defineProps<{
    append?: string
    appendHtml?: string
    id?: string
    prepend?: string
    prependHtml?: string
    size?: Size
    tag?: string
  }>(),
  {
    append: undefined,
    appendHtml: undefined,
    id: undefined,
    prepend: undefined,
    prependHtml: undefined,
    size: 'md',
    tag: 'div',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  append?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prepend?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  [`input-group-${props.size}`]: props.size !== 'md',
}))
const hasAppend = toRef(() => !!props.append || !!props.appendHtml)
const hasPrepend = toRef(() => !!props.prepend || !!props.prependHtml)
</script>
