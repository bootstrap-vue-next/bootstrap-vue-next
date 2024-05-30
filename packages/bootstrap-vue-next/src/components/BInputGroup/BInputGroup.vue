<template>
  <component
    :is="props.tag"
    :id="props.id"
    class="input-group"
    :class="computedClasses"
    role="group"
  >
    <slot name="prepend">
      <span v-if="hasPrepend" class="input-group-text">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="!!props.prependHtml" v-html="props.prependHtml" />
        <span v-else>{{ props.prepend }}</span>
      </span>
    </slot>
    <slot />
    <slot name="append">
      <span v-if="hasAppend" class="input-group-text">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span v-if="!!props.appendHtml" v-html="props.appendHtml" />
        <span v-else>{{ props.append }}</span>
      </span>
    </slot>
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BInputGroupProps} from '../../types'
import {computed, provide, toRef} from 'vue'
import {inputGroupKey} from '../../utils/keys'

provide(inputGroupKey, true)

const _props = withDefaults(defineProps<BInputGroupProps>(), {
  append: undefined,
  appendHtml: undefined,
  id: undefined,
  prepend: undefined,
  prependHtml: undefined,
  size: 'md',
  tag: 'div',
})
const props = useDefaults(_props, 'BInputGroup')

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
