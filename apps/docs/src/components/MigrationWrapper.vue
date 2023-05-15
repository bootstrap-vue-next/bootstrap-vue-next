<template>
  <b-card> {{ $props }} </b-card>
</template>

<script setup lang="ts">
import {BCard} from 'bootstrap-vue-next'

defineProps<{
  difficulty: 'hard' | 'normal' | 'easy'
  component: string
  /**
   * The rationale for the change
   */
  rationale: string
  fix: string
  description: string
}>()
</script>
