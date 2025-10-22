<template>
  <div>
    <BButton @click="testToggle">Click me</BButton>
    <BModal id="toggleTest"> content </BModal>
    <span
      v-if="reason !== ''"
      class="mx-3"
      >Close reason: {{ reason }}</span
    >
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useToggle} from 'bootstrap-vue-next'

const toggle = useToggle('toggleTest')
const reason = ref('')

async function testToggle() {
  const e = await toggle.show(true)
  if (e === 'ok') {
    // eslint-disable-next-line no-console
    console.log('ok pressed')
  } else {
    // eslint-disable-next-line no-console
    console.log('closed with', e)
  }
  reason.value = String(e)
}
</script>
