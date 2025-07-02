<template>
  <div>
    <BButton @click="okBox">Show Message</BButton>
    <div>Result: {{ okResult }}</div>
  </div>
</template>

<script setup lang="ts">
import {type BvTriggerableEvent, useModal} from 'bootstrap-vue-next'
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
