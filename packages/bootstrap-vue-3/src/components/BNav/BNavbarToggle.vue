<template>
  <button
    v-b-toggle=""
    class="navbar-toggler"
    :class="classes"
    type=""
    v-bind="attrs"
    @click="onClick"
  >
    <span class="navbar-toggler-icon" />
  </button>
</template>

<script setup lang="ts">
import {BToggle as vBToggle} from '../../directives'
import {computed} from 'vue'
import type {Booleanish, ButtonType} from '../../types'
import {resolveBooleanish} from '../../utils'

interface Props {
  disabled?: Booleanish // TODO ensure that if the button is disabled that it doesn't collapse
  label?: string
  target?: string // TODO target should be required, ignoring the other rules about possibly undefined? It is in B-V
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Toggle navigation',
  disabled: false,
})

const disabledBoolean = computed<boolean>(() => resolveBooleanish(props.disabled))

interface Emits {
  (e: 'click'): void
}

const emit = defineEmits<Emits>()

const attrs = computed(() => ({
  'type': 'button' as ButtonType,
  'disabled': disabledBoolean.value,
  'aria-label': props.label,
}))

const classes = computed(() => ({
  'navbar-toggler': true,
  'collapsed': true,
}))

const onClick = (): void => {
  if (!disabledBoolean.value) {
    emit('click')

    classes.value.collapsed = !classes.value.collapsed
    if (props.target !== undefined) {
      const el = document.getElementById(props.target)
      el?.classList.toggle('show')
    }
  }
}
</script>
