<template>
  <BLink @click.prevent="open = true">
    <slot />
  </BLink>
  <BModal v-model="open" title="Visit External Link?" lazy cancel-variant="danger">
    You are about open a link to <HighlightedText>{{ href }}</HighlightedText
    >. Are you sure you want to do this?
    <template #ok>
      <BButton :ref="rel" variant="success" :href="href" :target="target" @click="open = false"
        >Go</BButton
      >
    </template>
  </BModal>
</template>

<script setup lang="ts">
import type {LinkTarget} from 'bootstrap-vue-next'

withDefaults(defineProps<{href: string; target?: LinkTarget; rel?: string}>(), {
  target: '_blank',
  rel: 'noopener',
})

const open = ref(false)
</script>
