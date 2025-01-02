<template>
  <li role="presentation" :class="wrapperClass" v-bind="wrapperAttrs">
    <component
      :is="props.tag"
      class="dropdown-header"
      :class="[colorClasses, props.headerClass]"
      v-bind="attrs"
    >
      <slot>
        {{ props.text }}
      </slot>
    </component>
  </li>
</template>

<script setup lang="ts">
import {computed, useAttrs} from 'vue'
import {useDefaults} from '../../composables/useDefaults'
import type {BDropdownHeaderProps} from '../../types/ComponentProps'
import {useColorVariantClasses} from '../../composables/useColorVariantClasses'

defineOptions({
  inheritAttrs: false,
})
const {class: wrapperClass, ...attrs} = useAttrs()

const _props = withDefaults(defineProps<BDropdownHeaderProps>(), {
  headerClass: undefined,
  tag: 'h6',
  text: undefined,
  variant: null,
  wrapperAttrs: undefined,
})
const props = useDefaults(_props, 'BDropdownHeader')

const colorClasses = useColorVariantClasses(
  computed(() => ({
    textVariant: props.variant,
  }))
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()
</script>
