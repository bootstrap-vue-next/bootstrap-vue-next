<template>
  <BContainer class="mt-2">
    <BRow>
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
          :rationale="item.rationale"
          :text="item.text"
        />
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
    title: 'subTitle prop renamed to subtitle',
    text: "Any instances of using prop 'subTitle' on BCard should be replaced with 'subtitle'",
    component: 'BCard',
    difficulty: 'easy',
    rationale:
      "The word 'subtitle' is a single word. CamelCase of the word 'subTitle' indicates that it would be multi word, sub & title. This is incorrect",
  },
  {
    title: 'subTitleTag prop renamed to subtitleTag',
    text: "Any instances of using prop 'subTitleTag' on BCard should be replaced with 'subtitleTag'",
    component: 'BCard',
    difficulty: 'easy',
    rationale:
      "The word 'subtitle' is a single word. CamelCase of the word 'subTitle' indicates that it would be multi word, sub & title. This is incorrect",
  },
  {
    title: 'subTitleTextVariant prop renamed to subtitleTextVariant',
    text: "Any instances of using prop 'subTitleTextVariant' on BCard should be replaced with 'subtitleTextVariant'",
    component: 'BCard',
    difficulty: 'easy',
    rationale:
      "The word 'subtitle' is a single word. CamelCase of the word 'subTitle' indicates that it would be multi word, sub & title. This is incorrect",
  },
])

// TODO implement filtering & automatic grouping
// const allComponents = computed(() => [...new Set(items.value.map((el) => el.component))])
</script>
