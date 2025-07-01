<template>
  <div>
    <BButton @click="confirmBox">Show Confirm</BButton>
    <div>Result: {{ confirmResult ?? 'null' }}</div>
  </div>
</template>

<script setup lang="ts">
import {type BvTriggerableEvent, useModal} from 'bootstrap-vue-next'
import {ref} from 'vue'

const {create} = useModal()
const confirmResult = ref<boolean | null | BvTriggerableEvent>(null)

const confirmBox = async () => {
  confirmResult.value = await create({
    body: 'Are you sure you want to do this?',
    title: 'Confirm',
    okTitle: 'Yes',
    cancelTitle: 'No',
  })
}
</script>
