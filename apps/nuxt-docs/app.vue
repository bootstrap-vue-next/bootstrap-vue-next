<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
provide(appInfoKey, {
  githubUrl: 'https://github.com/bootstrap-vue/bootstrap-vue-next',
  discordUrl: 'https://discord.gg/j2Mtcny',
})
</script>
