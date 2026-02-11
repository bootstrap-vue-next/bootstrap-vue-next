<template>
  <BLink
    v-bind="props"
    :router-component-name="NuxtLink"
  >
    <slot />
  </BLink>
</template>

<script setup lang="ts">
import { BLink } from 'bootstrap-vue-next/components/BLink'
import type { BLinkProps } from 'bootstrap-vue-next/types'
import { NuxtLink } from '#components'

const props = defineProps<BLinkProps>()
</script>
