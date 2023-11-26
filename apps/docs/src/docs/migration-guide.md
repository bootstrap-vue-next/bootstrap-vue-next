# Migration Guide

<MigrationWrapper v-for="(item, i) in changes" :key="i" v-bind="item" />

<script setup lang="ts">
import {computed} from 'vue'
import MigrationWrapper from '../components/MigrationWrapper.vue'

const changes = computed<{
  component: string
  change: string
  fix: string
}[]>(() => [
  {
    change: 'subTitle prop renamed to subtitle',
    fix: "Any instances of using prop 'subTitle' on BCard should be replaced with 'subtitle'",
    component: 'BCard',
  },
  {
    change: 'subTitleTag prop renamed to subtitleTag',
    fix: "Any instances of using prop 'subTitleTag' on BCard should be replaced with 'subtitleTag'",
    component: 'BCard',
  },
  {
    change: 'subTitleTextVariant prop renamed to subtitleTextVariant',
    fix: "Any instances of using prop 'subTitleTextVariant' on BCard should be replaced with 'subtitleTextVariant'",
    component: 'BCard',
  },
].sort((a, b) => a.component.localeCompare(b.component)))
</script>
