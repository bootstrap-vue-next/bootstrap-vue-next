<template>
  <button :class="classes" type="button" @click="onButtonClicked">
    <span class="navbar-toggler-icon"></span>
  </button>
</template>

<script setup lang="ts">
import {ref} from 'vue'

interface Props {
  target: string
}

const props = defineProps<Props>()

const classes = ref({
  'navbar-toggler': true,
  'collapsed': true,
})

const onButtonClicked = () => {
  classes.value.collapsed = !classes.value.collapsed

  const el = document.getElementById(props.target)
  el?.classList.toggle('show')
}
</script>
