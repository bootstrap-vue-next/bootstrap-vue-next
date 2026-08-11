<template>
  <BButton @click="showToast">Show</BButton>
</template>

<script setup lang="ts">
import { BButton } from 'bootstrap-vue-next/components/BButton'
import { useToast } from 'bootstrap-vue-next/composables/useToast'

const { create } = useToast()

const showToast = async () => {
  await using _ = await create({ title: 'Hello', body: 'World' }).show()
}
</script>
