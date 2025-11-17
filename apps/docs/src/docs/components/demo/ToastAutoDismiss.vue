<template>
  <BButton
    @click="
      create({
        title: 'Counting down!',
        variant: 'info',
        pos: 'middle-center',
        modelValue: 10000,
        progressProps: {
          variant: 'danger',
        },
        body: 'Watch me!',
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
