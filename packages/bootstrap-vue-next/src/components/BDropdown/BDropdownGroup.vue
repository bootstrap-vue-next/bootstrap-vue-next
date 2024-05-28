<template>
  <li role="presentation">
    <component
      :is="props.headerTag"
      :id="headerId"
      class="dropdown-header"
      :class="computedClasses"
      :role="headerRole"
    >
      <slot name="header">
        {{ props.header }}
      </slot>
    </component>
    <ul
      :id="props.id"
      role="group"
      class="list-unstyled"
      v-bind="$attrs"
      :aria-describedby="props.ariaDescribedby || headerId"
    >
      <slot />
    </ul>
  </li>
</template>

<script setup lang="ts">
import {useDefaults} from '../../composables'
import type {BDropdownGroupProps} from '../../types'
import {computed, toRef} from 'vue'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BDropdownGroupProps>(), {
  ariaDescribedby: undefined,
  header: undefined,
  headerClass: undefined,
  headerTag: 'header',
  headerVariant: null,
  id: undefined,
})
const props = useDefaults(_props, 'BDropdownGroup')

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  header?: (props: Record<string, never>) => any
}>()

const headerId = toRef(() => (props.id ? `${props.id}_group_dd_header` : undefined))
const headerRole = toRef(() => (props.headerTag === 'header' ? undefined : 'heading'))

const computedClasses = computed(() => [
  props.headerClass,
  {
    [`text-${props.headerVariant}`]: props.headerVariant !== null,
  },
])
</script>
