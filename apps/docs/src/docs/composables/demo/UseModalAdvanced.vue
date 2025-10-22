<template>
  <BButton @click="showMeAdvancedExample">Click me</BButton>
</template>

<script setup lang="ts">
import {h, onMounted, ref} from 'vue'
import {BButton, useModal} from 'bootstrap-vue-next'

const {create} = useModal()

const firstRef = ref({
  body: `${Math.random()}`,
})
onMounted(() => {
  setInterval(() => {
    firstRef.value.body = `${Math.random()}`
  }, 1000)
})
const showMeAdvancedExample = () => {
  create({
    slots: {
      default: (scope) =>
        h('div', null, `custom ${firstRef.value.body} - ${scope.visible}`),
    },
  }).show()

  // Demonstration pseudocode, you can import a component and use it
  // const importedComponent = () => {
  //   create({
  //     component: (await import('./TestModal.vue')).default,
  //   })
  // }
}
</script>
