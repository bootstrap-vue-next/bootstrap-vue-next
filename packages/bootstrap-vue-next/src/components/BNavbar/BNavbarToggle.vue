<template>
  <button
    v-b-toggle="!disabledBoolean ? target : undefined"
    class="navbar-toggler"
    type="button"
    :class="computedClasses"
    :disabled="disabledBoolean"
    :aria-label="label"
    @click="onClick"
  >
    <slot>
      <span class="navbar-toggler-icon" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import {vBToggle} from '../../directives'
import {computed} from 'vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'

const props = withDefaults(
  defineProps<{
    disabled?: Booleanish
    label?: string
    target?: string | string[]
  }>(),
  {
    label: 'Toggle navigation',
    disabled: false,
    target: undefined,
  }
)

const emit = defineEmits<{
  click: [value: MouseEvent]
}>()

defineSlots<{
  // TODO this scoped slot is {expanded: boolean}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default?: (props: Record<string, never>) => any
}>()

const disabledBoolean = useBooleanish(() => props.disabled)

const computedClasses = computed(() => ({
  disabled: disabledBoolean.value,
}))

const onClick = (e: MouseEvent): void => {
  if (!disabledBoolean.value) {
    emit('click', e)
  }
}
</script>
