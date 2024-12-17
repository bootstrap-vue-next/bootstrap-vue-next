<template>
  <nav v-if="headers.length > 0" class="table-of-contents">
    <ul>
      <li v-for="header in headers" :key="header.slug">
        <PageContentsItem :item="header" />
      </li>
      <li>
        <a href="#component-reference">Component Reference</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useData} from 'vitepress'

const data = useData()
const headers = computed(() => data.page.value.headers)
</script>
