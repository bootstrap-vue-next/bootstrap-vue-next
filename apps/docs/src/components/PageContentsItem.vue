<template>
  <BNavItem :href="item.link" link-class="otp-link">
    <template #default>{{ item.title }}</template>
    <template #after>
      <BNav v-if="item.children?.length > 0" vertical small class="otp-nav">
        <PageContentsItem v-for="child in item.children" :key="child.slug" :item="child" />
      </BNav>
    </template>
  </BNavItem>
</template>

<script setup lang="ts">
import {type Header} from 'vitepress'

defineProps<{
  item: Header
}>()
</script>
