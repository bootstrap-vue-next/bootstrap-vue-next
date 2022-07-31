<template>
  <button :class="classes" type="button" @click="onButtonClicked">
    <span class="navbar-toggler-icon"></span>
  </button>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface Props {
  target?: string
  disabled?: boolean // TODO ensure that if the button is disabled that it doesn't collapse
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
})

interface Emits {
  (e: 'click'): void
}

const emit = defineEmits<Emits>()

const classes = ref({
  'navbar-toggler': true,
  'collapsed': true,
})

const onButtonClicked = () => {
  emit('click')

  classes.value.collapsed = !classes.value.collapsed

  const el = document.getElementById(props.target) // Handle this
  el?.classList.toggle('show')
}
</script>
