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

interface BDropdownGroupProps {
  id?: string
  ariaDescribedby?: string
  header?: string
  headerClasses?: string | Array<unknown> | Record<string, unknown>
  headerTag?: string
  headerVariant?: ColorVariant
}

const props = withDefaults(defineProps<BDropdownGroupProps>(), {
  headerClasses: undefined,
  headerTag: 'header',
  headerVariant: undefined,
})

const headerId = computed<string | undefined>(() =>
  props.id ? [props.id, 'group_dd_header'].join('_') : undefined
)

const headerRole = computed<'heading' | undefined>(() =>
  props.headerTag === 'header' ? undefined : 'heading'
)

const classes = computed(() => ({
  [`text-${props.headerVariant}`]: props.headerVariant,
}))
</script>

<script lang="ts">
import {computed, defineComponent} from 'vue'
export default defineComponent({
  inheritAttrs: false,
})
</script>
