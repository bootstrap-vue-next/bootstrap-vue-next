<template>
  <BLink v-if="href || to" :href="href" :to="to">
    <slot></slot>
  </BLink>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import BLink from '../BLink/BLink.vue'
import {RouteLocationRaw} from 'vue-router'

interface Props {
  tag?: 'div'
  href?: string
  to?: RouteLocationRaw
}

defineProps<Props>()
</script>
