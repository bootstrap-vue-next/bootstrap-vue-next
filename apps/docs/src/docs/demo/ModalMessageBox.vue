<template>
  <div>
    <BButton @click="okBox">Show Message</BButton>
    <div>Result: {{ okResult }}</div>
  </div>
</template>

<script setup lang="ts">
import {useModalController} from 'bootstrap-vue-next/composables/useModalController'
import {ref} from 'vue'

const {show} = useModalController()

const okResult = ref<boolean | null | undefined>(undefined)

const okBox = async () => {
  okResult.value = await show?.({
    props: {
      body: 'This is an informational message',
      title: 'Message',
      okOnly: true,
    },
  })
}
</script>
