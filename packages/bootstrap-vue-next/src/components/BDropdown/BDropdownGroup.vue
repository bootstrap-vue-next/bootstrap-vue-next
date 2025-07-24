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
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'
import {useDefaults} from '../../composables/useDefaults'
import type {BDropdownGroupProps} from '../../types/ComponentProps'
import {computed} from 'vue'
import type {BDropdownGroupSlots} from '../../types/ComponentSlots'

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
defineSlots<BDropdownGroupSlots>()

const headerId = computed(() => (props.id ? `${props.id}_group_dd_header` : undefined))
const headerRole = computed(() => (props.headerTag === 'header' ? undefined : 'heading'))

const colorClasses = useColorVariantClasses(
  computed(() => ({
    textVariant: props.headerVariant,
  }))
)
const computedClasses = computed(() => [props.headerClass, colorClasses.value])
</script>
