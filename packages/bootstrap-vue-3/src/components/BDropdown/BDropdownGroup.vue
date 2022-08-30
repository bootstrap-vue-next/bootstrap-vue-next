<template>
  <li role="presentation">
    <component
      :is="headerTag"
      :id="headerId"
      class="dropdown-header"
      :class="[classes, headerClasses]"
      :role="headerRole"
    >
      <slot name="header">
        {{ header }}
      </slot>
    </component>
    <ul
      :id="id"
      role="group"
      class="list-unstyled"
      v-bind="$attrs"
      :aria-describedby="ariaDescribedby || headerId"
    >
      <slot />
    </ul>
  </li>
</template>

<script setup lang="ts">
// import type {BDropdownGroupProps} from '../../types/components'
import type {ColorVariant} from '../../types'
import {computed} from 'vue'

interface BDropdownGroupProps {
  id?: string
  ariaDescribedby?: string
  header?: string
  headerClasses?: Array<string> | Record<string, boolean | undefined | null> | string
  headerTag?: string
  headerVariant?: ColorVariant
}

const props = withDefaults(defineProps<BDropdownGroupProps>(), {
  headerTag: 'header',
  headerClasses: undefined,
  headerVariant: undefined,
})

const headerId = computed<string | undefined>(() =>
  props.id ? [props.id, 'group_dd_header'].join('_') : undefined
)

const headerRole = computed<'heading' | undefined>(() =>
  props.headerTag === 'header' ? undefined : 'heading'
)

const classes = computed(() => ({
  [`text-${props.headerVariant}`]: !!props.headerVariant,
}))
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
