<template>
  <BButtonGroup>
    <BButton
      variant="success"
      @click="showMe"
    >
      Show the Toast
    </BButton>
    <BButton
      variant="danger"
      @click="hideMe"
    >
      Hide the Toast
    </BButton>
    <BButton
      variant="secondary"
      @click="destroyMe"
    >
      Destroy the Toast
    </BButton>
  </BButtonGroup>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {BButton, BButtonGroup, useToast} from 'bootstrap-vue-next'

const {create} = useToast()

// Create a long-lived controller once; reuse it with show()/hide()
let toast: ReturnType<typeof create> | undefined

onMounted(() => {
  toast = create({
    title: 'Showing',
    body: 'Toast is now showing',
    variant: 'success',
    position: 'bottom-center',
  })
})

const showMe = () => {
  toast?.show()
}

const hideMe = () => {
  toast?.hide()
}

// Explicitly destroy to remove the entry from the registry
const destroyMe = async () => {
  await toast?.destroy()
  toast = undefined
}
</script>
