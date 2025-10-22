<template>
  <div>
    <BButton @click="testToggle">Click me</BButton>
    <BModal id="toggleTest"> content </BModal>
    <span
      v-if="reason !== ''"
      class="mx-3"
      >Close reason: {{ reason }}</span
    >
    <BModal
      id="promise-modal"
      title="Promise Modal"
    >
      <p>This modal will close after 2 seconds</p>
    </BModal>
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
  reason.value = e as string
}
</script>
