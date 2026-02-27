<template>
  <BButton
    v-bind="props"
    :router-component-name="NuxtLink"
  >
    <slot />
  </BButton>
</template>

<script setup lang="ts">
import { BButton } from 'bootstrap-vue-next/components/BButton'
import type { BButtonProps } from 'bootstrap-vue-next/types'
import { NuxtLink } from '#components'

const props = defineProps<BButtonProps>()
</script>
