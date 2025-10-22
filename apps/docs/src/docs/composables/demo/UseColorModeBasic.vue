<template>
  <ClientOnly>
    <BCard ref="target">
      <BButton @click="changeColor"> Current color: {{ mode }} </BButton>
    </BCard>
  </ClientOnly>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {BButton, BCard, useColorMode} from 'bootstrap-vue-next'

const target = ref<HTMLElement | null>(null)

const mode = useColorMode({
  selector: target,
})

const changeColor = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>
