<template>
  <BButton @click="showExample">Click me</BButton>
</template>

<script setup lang="ts">
import {BButton, useModal} from 'bootstrap-vue-next'

const {create} = useModal()

const showExample = async () => {
  const value = await create({title: 'Hello World!'}).show()

  if (value && typeof value === 'object' && 'ok' in value && 'trigger' in value) {
    create({
      body: `Promise resolved to object with {ok: ${value.ok}, trigger: ${value.trigger}}`,
    }).show()
  }
}
</script>
