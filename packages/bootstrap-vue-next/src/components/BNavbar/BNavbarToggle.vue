<template>
  <button
    v-b-toggle="!props.disabled ? props.target : undefined"
    class="navbar-toggler"
    type="button"
    :class="computedClasses"
    :disabled="props.disabled"
    :aria-label="props.label"
    @click="onClick"
  >
    <slot>
      <span class="navbar-toggler-icon" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import type {BNavbarToggleProps} from '../../types'
import {vBToggle} from '../../directives'
import {computed} from 'vue'
import {useDefaults} from '../../composables'

const _props = withDefaults(defineProps<BNavbarToggleProps>(), {
  label: 'Toggle navigation',
  disabled: false,
  target: undefined,
})
const props = useDefaults(_props, 'BNavbarToggle')

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

defineSlots<{
  // TODO this scoped slot is {expanded: boolean}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const computedClasses = computed(() => ({
  disabled: props.disabled,
}))

const onClick = (e: Readonly<MouseEvent>): void => {
  if (!props.disabled) {
    emit('click', e)
  }
}
</script>
