<template>
  <BContainer>
    <BRow>
      <BCol>
        <slot>
          <h1>{{ title }}</h1>
        </slot>
      </BCol>
      <BCol v-if="href" cols="4" class="text-md-right">
        <ViewSourceButton :href />
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
import ViewSourceButton from './ViewSourceButton.vue'
import {computed, inject} from 'vue'
import {appInfoKey} from '../../.vitepress/theme/keys'

const globalData = inject(appInfoKey)

type Base = Extract<
  keyof Exclude<typeof globalData, undefined>,
  'githubComposablesDirectory' | 'githubDirectivesDirectory'
>

const props = defineProps<{
  title: string
  path: string | null
  base: Base
}>()

const href = computed(() =>
  props.path === null ? null : `${globalData?.[props.base]}/${props.path}`
)
</script>
