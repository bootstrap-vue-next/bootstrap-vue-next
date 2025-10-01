<template>
  <div>
    <BButton @click="okBox">Show Message</BButton>
    <div>Result: {{ okResult }}</div>
  </div>
</template>

<script setup lang="ts">
import {useModal} from 'bootstrap-vue-next/composables/useModal'
import {ref} from 'vue'

const {create} = useModal()

const okResult = ref<boolean | null | undefined>(null)

const okBox = async () => {
  const value = await create({
    body: 'This is an informational message',
    title: 'Message',
    okOnly: true,
  }).show()
  okResult.value = typeof value === 'object' && value !== null && 'ok' in value ? value.ok : null
}
</script>
