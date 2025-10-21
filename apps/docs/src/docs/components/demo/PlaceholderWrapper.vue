<template>
  <BPlaceholderWrapper :loading="loading">
    <template #loading>
      <BPlaceholderCard
        style="max-width: 20rem"
        no-footer
      />
    </template>
    <BCard
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <BCardText>
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </BCardText>
      <BButton
        href="#placeholder-wrapper"
        variant="primary"
        >Go somewhere</BButton
      >
    </BCard>
  </BPlaceholderWrapper>
  <BButton @click="startLoading">Restart</BButton>
</template>

<script setup lang="ts">
import {onMounted, ref, watchEffect} from 'vue'

const loading = ref(false)

<script setup lang="ts">
import {onMounted, onUnmounted, ref, watchEffect} from 'vue'

const loading = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null

watchEffect(() => {
  if (loading.value === true) {
    timeoutId = setTimeout(() => {
      loading.value = false
      timeoutId = null
    }, 5000)
  }
})

onUnmounted(() => {
  if (timeoutId !== null) {
    clearTimeout(timeoutId)
  }
})

const startLoading = () => {

const startLoading = () => {
  if (loading.value === true) return
  loading.value = true
}

onMounted(startLoading)
</script>
