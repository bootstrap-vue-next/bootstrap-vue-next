<template>
  <BButton
    @click="
      create({
        href: 'https://getbootstrap.com/',
        modelValue: true,
        target: '_blank',
        body: 'I am a BLink',
      })
    "
  >
    Show
  </BButton>
</template>

<script setup lang="ts">
import {useToast} from 'bootstrap-vue-next'

const {create} = useToast()
</script>
