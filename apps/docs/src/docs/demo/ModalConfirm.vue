<template>
  <div>
    <BButton @click="confirmBox">Show Confirm</BButton>
    <div>Result: {{ confirmResult ?? 'null' }}</div>
  </div>
</template>

<script setup lang="ts">
import {type BvTriggerableEvent, useModalController} from 'bootstrap-vue-next'
import {ref} from 'vue'

const {confirm} = useModalController()
const confirmResult = ref<boolean | null | BvTriggerableEvent>(null)

const confirmBox = async () => {
  confirmResult.value = await confirm?.({
    props: {
      body: 'Are you sure you want to do this?',
      title: 'Confirm',
      okTitle: 'Yes',
      cancelTitle: 'No',
    },
  })
}
</script>
