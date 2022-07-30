<template>
  <a v-if="href" :href="href" class="navbar-brand">
    <slot></slot>
  </a>
  <router-link v-else-if="to" :to="to">
    <slot></slot>
  </router-link>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  href?: string
  to?: any
}

defineProps<Props>()
</script>

<style scoped></style>
