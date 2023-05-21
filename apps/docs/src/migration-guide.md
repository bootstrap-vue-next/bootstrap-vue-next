# Migration Guide

<migration-wrapper v-for="(item, i) in changes" :key="i" v-bind="item" class="my-3" />

<script setup lang="ts">
import {computed} from 'vue'
import MigrationWrapper from './components/MigrationWrapper.vue'

const changes = computed<{
  difficulty: 'hard' | 'medium' | 'easy'
  component: string
  change: string
  /**
   * The rationale for the change
   */
  rationale: string
  fix: string
  description: string
}[]>(() => [
  {
    change: 'subTitle prop renamed to subtitle',
    fix: "Any instances of using prop 'subTitle' on BCard should be replaced with 'subtitle'",
    component: 'BCard',
    difficulty: 'easy',
    rationale:
      "The word 'subtitle' is a single word. CamelCase of the word 'subTitle' indicates that it would be multi word, sub & title. This is incorrect",
  },
  {
    change: 'subTitleTag prop renamed to subtitleTag',
    fix: "Any instances of using prop 'subTitleTag' on BCard should be replaced with 'subtitleTag'",
    component: 'BCard',
    difficulty: 'easy',
    rationale:
      "The word 'subtitle' is a single word. CamelCase of the word 'subTitle' indicates that it would be multi word, sub & title. This is incorrect",
  },
  {
    change: 'subTitleTextVariant prop renamed to subtitleTextVariant',
    fix: "Any instances of using prop 'subTitleTextVariant' on BCard should be replaced with 'subtitleTextVariant'",
    component: 'BCard',
    difficulty: 'easy',
    rationale:
      "The word 'subtitle' is a single word. CamelCase of the word 'subTitle' indicates that it would be multi word, sub & title. This is incorrect",
  },
].sort((a, b) => a.component.localeCompare(b.component)))
</script>
