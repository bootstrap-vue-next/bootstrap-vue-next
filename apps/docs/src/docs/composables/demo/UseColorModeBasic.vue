<template>
  <ClientOnly>
    <BCard ref="target">
      <BButton @click="changeColor"> Current color: {{ mode }} </BButton>
    </BCard>
  </ClientOnly>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {useColorMode} from 'bootstrap-vue-next'
import {type BCard} from 'bootstrap-vue-next/components/BCard'

const target = ref<InstanceType<typeof BCard> | null>(null)

const mode = useColorMode({
  selector: target,
})

const changeColor = () => {
  mode.value = mode.value === 'dark' ? 'light' : 'dark'
}
</script>
