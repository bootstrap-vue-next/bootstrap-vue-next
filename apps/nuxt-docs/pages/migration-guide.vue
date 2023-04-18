<template>
  <BContainer class="mt-2">
    <BRow>
      {{ components }}
      <BCol>
        This migration guide is unfinished. At the moment, it serves as a spot to leave notes about
        any current broken changes
      </BCol>
    </BRow>
    <BRow class="mt-4">
      <BCol v-for="(item, index) in items" :key="index">
        <MigrateWrapper
          :difficulty="item.difficulty"
          :component="item.component"
          :title="item.title"
        >
          <template #rationale>
            {{ item.rationale }}
          </template>
          {{ item.text }}
        </MigrateWrapper>
      </BCol>
      <BCol>
        <MigrateWrapper
          difficulty="easy"
          component="BCard"
          title="SubTitleTag prop renamed to subtitleTag"
        >
          <template #rationale>
            The word 'Subtitle' is a single word. Splitting the word into 'SubTitle' indicates that
            it is multi word, sub & title. This is incorrect.
          </template>
          Any instances of using prop 'SubTitleTag' on BCard should be replaced with 'subtitleTag'
        </MigrateWrapper>
      </BCol>
      <BCol>
        <MigrateWrapper
          difficulty="easy"
          component="BCard"
          title="SubTitleTextVariant prop renamed to subtitleTextVariant"
        >
          <template #rationale>
            The word 'Subtitle' is a single word. Splitting the word into 'SubTitle' indicates that
            it is multi word, sub & title. This is incorrect.
          </template>
          Any instances of using prop 'SubTitleTextVariant' on BCard should be replaced with
          'subtitleTextVariant'
        </MigrateWrapper>
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
const items = computed<
  {
    difficulty: 'easy' | 'medium' | 'hard'
    component: string
    title: string
    rationale: string
    text: string
  }[]
>(() => [
  {
    text: "Any instances of using prop 'SubTitle' on BCard should be replaced with 'subtitle'",
    title: 'SubTitle prop renamed to Subtitle',
    component: 'BCard',
    difficulty: 'easy',
    rationale:
      "The word 'Subtitle' is a single word. Splitting the word into 'SubTitle' indicates that it is multi word, sub & title. This is incorrect.",
  },
])

// TODO filtering
// const allComponents = computed(() => [...new Set(items.value.map((el) => el.component))])
</script>
