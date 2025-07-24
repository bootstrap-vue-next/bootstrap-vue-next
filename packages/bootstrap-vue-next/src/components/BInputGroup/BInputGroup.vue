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
        <span>{{ props.prepend }}</span>
      </span>
    </slot>
    <slot />
    <slot name="append">
      <span v-if="hasAppend" class="input-group-text">
        <span>{{ props.append }}</span>
      </span>
    </slot>
  </component>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables/useDefaults'
import type {BInputGroupProps} from '../../types/ComponentProps'
import {computed, provide} from 'vue'
import {inputGroupKey} from '../../utils/keys'
import type {BInputGroupSlots} from '../../types'

provide(inputGroupKey, true)

const _props = withDefaults(defineProps<BInputGroupProps>(), {
  append: undefined,
  id: undefined,
  prepend: undefined,
  size: 'md',
  tag: 'div',
})
const props = useDefaults(_props, 'BInputGroup')
defineSlots<BInputGroupSlots>()

const computedClasses = computed(() => ({
  [`input-group-${props.size}`]: props.size !== 'md',
}))
const hasAppend = computed(() => !!props.append)
const hasPrepend = computed(() => !!props.prepend)
</script>
