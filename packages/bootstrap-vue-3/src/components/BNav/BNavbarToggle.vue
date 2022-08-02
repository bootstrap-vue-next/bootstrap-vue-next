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
import {BToggle as vBToggle} from '../../directives/index'
import {computed} from 'vue'
import {ButtonType} from '../../types'

interface Props {
  disabled?: boolean // TODO ensure that if the button is disabled that it doesn't collapse
  label?: string
  target?: string // TODO target should be required, ignoring the other rules about possibly undefined? It is in B-V
}

const props = withDefaults(defineProps<Props>(), {
  label: 'Toggle navigation',
  disabled: false,
})

interface Emits {
  (e: 'click'): void
}

const emit = defineEmits<Emits>()

const attrs = computed(() => ({
  'type': 'button' as ButtonType,
  'disabled': props.disabled,
  'aria-label': props.label,
}))

const classes = computed(() => ({
  'navbar-toggler': true,
  'collapsed': true,
}))

const onClick = (): void => {
  if (!props.disabled) {
    emit('click')

    classes.value.collapsed = !classes.value.collapsed
    if (props.target !== undefined) {
      const el = document.getElementById(props.target)
      el?.classList.toggle('show')
    }
  }
}
</script>
