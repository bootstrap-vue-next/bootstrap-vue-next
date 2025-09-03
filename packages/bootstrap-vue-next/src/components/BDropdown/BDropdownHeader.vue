<template>
  <li role="presentation" :class="processedAttrs.wrapperClass" v-bind="wrapperAttrs">
    <component
      :is="props.tag"
      class="dropdown-header"
      :class="[colorClasses, props.headerClass]"
      v-bind="processedAttrs.headerAttrs"
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
import type {BDropdownHeaderSlots} from '../../types'

defineOptions({
  inheritAttrs: false,
})

const _props = withDefaults(defineProps<BDropdownHeaderProps>(), {
  headerClass: undefined,
  tag: 'h6',
  text: undefined,
  variant: null,
  wrapperAttrs: undefined,
})
const props = useDefaults(_props, 'BDropdownHeader')
defineSlots<BDropdownHeaderSlots>()
const attrs = useAttrs()

const processedAttrs = computed(() => {
  const {class: wrapperClass, ...headerAttrs} = attrs
  return {wrapperClass, headerAttrs}
})

const colorClasses = useColorVariantClasses(
  computed(() => ({
    textVariant: props.variant,
  }))
)
</script>
