<template>
  <div>
    <BButton @click="okBox">Show Message</BButton>
    <div>Result: {{ okResult }}</div>
  </div>
</template>

<script setup lang="ts">
import type {BvTriggerableEvent} from 'bootstrap-vue-next'
import {useModal} from 'bootstrap-vue-next/composables/useModal'
import {ref} from 'vue'

const {create} = useModal()

const okResult = ref<boolean | null | BvTriggerableEvent>(null)

const okBox = async () => {
  okResult.value = await create({
    body: 'This is an informational message',
    title: 'Message',
    okOnly: true,
  })
}
</script>
