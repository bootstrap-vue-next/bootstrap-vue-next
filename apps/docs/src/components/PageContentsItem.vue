<template>
  <li>
    <a :href="item.link">{{ item.title }}</a>
    <ul v-if="item.children?.length > 0">
      <PageContentsItem v-for="child in item.children" :key="child.slug" :item="child" />
    </ul>
  </li>
</template>

<script setup lang="ts">
import {type Header} from 'vitepress'

defineProps<{
  item: Header
}>()
</script>
