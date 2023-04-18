<template>
  <BCard>
    <template #header>
      <h3>{{ component }}: {{ title }}</h3>
    </template>
    <BCardSubtitle>
      Rationale:
      <slot name="rationale">
        {{ rationale }}
      </slot>
    </BCardSubtitle>
    <h4>Resolution</h4>
    <BCardText>
      <slot>
        {{ text }}
      </slot>
    </BCardText>
    <template #footer>
      Difficulty:
      <span class="text-decoration-underline" :class="`text-${textColor}`"> {{ difficulty }} </span>
    </template>
  </BCard>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    difficulty: 'easy' | 'medium' | 'hard'
    rationale?: string
    component: string
    title: string
    text?: string
  }>(),
  {text: '', rationale: ''}
)

const textColor = computed(() =>
  props.difficulty === 'easy' ? 'success' : props.difficulty === 'medium' ? 'warning' : 'danger'
)
</script>
