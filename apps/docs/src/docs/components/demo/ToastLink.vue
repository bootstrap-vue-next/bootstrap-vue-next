<template>
  <BButton @click="showToast"> Show </BButton>
</template>

<script setup lang="ts">
import { useToast } from 'bootstrap-vue-next/composables/useToast'

const { create } = useToast()

const showToast = async () => {
  await using _ = await create({
    href: 'https://getbootstrap.com/',
    modelValue: true,
    target: '_blank',
    body: 'I am a BLink',
  }).show()
}
</script>
