<template>
  <BCard>
    <template #header>
      <h3>{{ component }} - {{ change }}</h3>
      <BBadge :variant="difficultyVariant">{{ difficulty }}</BBadge>
    </template>
    <h4>Rationale:</h4>
    {{ rationale }}
    <h4>Fix:</h4>
    {{ fix }}
  </BCard>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {BBadge, BCard} from 'bootstrap-vue-next'

const props = defineProps<{
  difficulty: 'hard' | 'medium' | 'easy'
  component: string
  change: string
  /**
   * The rationale for the change
   */
  rationale: string
  fix: string
}>()

const difficultyVariant = computed(() =>
  props.difficulty === 'hard' ? 'danger' : props.difficulty === 'medium' ? 'warning' : 'success'
)
</script>
