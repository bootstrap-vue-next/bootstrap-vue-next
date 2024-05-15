<template>
  <component :is="tag" class="sidebar-header" :class="computedClasses">
    <slot>
      <slot name="title">
        <span v-if="!props.title" />
        <strong v-else>
          {{ props.title }}
        </strong>
      </slot>

      <template v-if="!noClose">
        <slot name="header-close">
          <BCloseButton
            :aria-label="closeLabel"
            :text-variant="textVariant"
            @click="modelValue = !modelValue"
          />
        </slot>
      </template>
    </slot>
  </component>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import type {BSidebarHeaderProps} from '../../types'
import BCloseButton from '../BButton/BCloseButton.vue'
import {useColorVariantClasses} from '../../composables'

const props = withDefaults(defineProps<BSidebarHeaderProps>(), {
  class: undefined,
  title: undefined,
  tag: undefined,
  noClose: false,
  closeLabel: undefined,
  // ColorExtendables props
  bgVariant: undefined,
  textVariant: undefined,
  variant: undefined,
  // End ColorExtendables props
})

const modelValue = defineModel<boolean>({
  default: () => false,
})

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'default'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'title'?: (props: Record<string, never>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'header-close'?: (props: Record<string, never>) => any
}>()

const resolvedBackgroundClasses = useColorVariantClasses(props)
const computedClasses = computed(() => [resolvedBackgroundClasses.value, props.class])
</script>
