<template>
  <button
    v-b-toggle="!disabledBoolean ? target : undefined"
    class="navbar-toggler"
    type="button"
    :class="computedClasses"
    v-bind="computedAttrs"
    @click="onClick"
  >
    <slot>
      <span class="navbar-toggler-icon" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import {BToggle as vBToggle} from '../../directives'
import {computed, toRef} from 'vue'
import type {Booleanish} from '../../types'
import {useBooleanish} from '../../composables'

interface Props {
  disabled?: Booleanish
  label?: string
  target?: string | Array<string>
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Toggle navigation',
  disabled: false,
})

interface Emits {
  (e: 'click', value: MouseEvent): void
}

const emit = defineEmits<Emits>()

const disabledBoolean = useBooleanish(toRef(props, 'disabled'))

const computedAttrs = computed(() => ({
  'disabled': disabledBoolean.value,
  'aria-label': props.label,
}))

const computedClasses = computed(() => ({
  disabled: disabledBoolean.value,
}))

const onClick = (e: MouseEvent): void => {
  if (!disabledBoolean.value) {
    emit('click', e)
  }
}
</script>
