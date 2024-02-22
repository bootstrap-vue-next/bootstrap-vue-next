<template>
  <div :class="computedClasses" class="btn-toolbar" :role="role" :aria-label="ariaLabel">
    <slot />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = withDefaults(
  defineProps<{
    ariaLabel?: string
    // keyNav?: boolean
    justify?: boolean
    role?: string
  }>(),
  {
    ariaLabel: 'Group',
    justify: false,
    role: 'toolbar',
  }
)

defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const justifyBoolean = computed(() => props.justify)

const computedClasses = computed(() => ({
  'justify-content-between': justifyBoolean.value,
}))
</script>
