<template>
  <ContentsSidebar>
    <template #default>
      <slot />
    </template>
    <template #after>
      <nav class="table-of-contents">
        <ul>
          <li>
            <a href="#component-reference">Component Reference</a>
          </li>
        </ul>
      </nav>
    </template>
  </ContentsSidebar>
</template>

<script setup lang="ts">
import ContentsSidebar from './ContentsSidebar.vue'
</script>
