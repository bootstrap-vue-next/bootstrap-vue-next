<template>
  <BCard>
    <template #header>
      <VBLink :to="routeWithBase">
        <h3 :id="routeWithBase" class="m-0">
          {{ name }}
        </h3>
      </VBLink>
    </template>
    <span v-html="renderedDescription" />
  </BCard>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {withBase} from 'vitepress'
import {useMarkdownRenderer} from '../composables/useMarkdownRenderer'

const props = defineProps<{
  name: string
  description: string
  route: string
}>()

const descriptionRef = computed(() => props.description)
const renderedDescription = useMarkdownRenderer(descriptionRef)
const routeWithBase = computed(() => withBase(props.route))
</script>
