<template>
  <nav class="bd-links-nav">
    <BListGroup v-if="!isLargeScreen">
      <strong :class="headerClasses">
        <span :class="headerInsideClasses"><GearIcon aria-hidden class="me-2" />General </span>
      </strong>
      <BListGroupItem v-for="link in headerLinks" :key="link.label" :class="listGroupItemClasses">
        <BLink :to="link.route" :class="linkClasses">
          {{ link.label }}
        </BLink>
      </BListGroupItem>
    </BListGroup>
    <BListGroup v-for="group in groupComputedList" :key="group.label">
      <strong :class="headerClasses">
        <BLink :to="withBase(group.uri)" :class="headerInsideClasses">
          <component :is="group.icon()" class="me-2" /> {{ group.label }}
        </BLink>
      </strong>
      <BListGroupItem
        v-for="component in group.children"
        :key="component.name"
        :class="listGroupItemClasses"
      >
        <BLink
          :to="withBase(component.route)"
          :active="routerRoute.path === component.route"
          :class="linkClasses"
        >
          {{ component.name }}
        </BLink>
      </BListGroupItem>
    </BListGroup>
  </nav>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from 'vue'
import {useRoute, withBase} from 'vitepress'
import {breakpointsBootstrapV5, useBreakpoints} from '@vueuse/core'
import IntersectIcon from '~icons/bi/intersect'
import CodeSlashIcon from '~icons/bi/code-slash'
import PieChartIcon from '~icons/bi/pie-chart'
import GearIcon from '~icons/bi/gear'
import {data as componentsData} from '../data/components.data'
import {data as composablesData} from '../data/composables.data'
import {data as directivesData} from '../data/directives.data'
import {data as configurationsData} from '../data/configurations.data'

defineProps<{
  name?: string
  route?: string
}>()

const routerRoute = useRoute()

const {greaterOrEqual} = useBreakpoints(breakpointsBootstrapV5)

const isLargeScreen = ref(true)

onMounted(() => {
  watch(
    greaterOrEqual('xl'),
    (newValue) => {
      isLargeScreen.value = newValue
    },
    {immediate: true}
  )
})

const headerClasses = ['py-2', 'text-primary-emphasis'] as const
const linkClasses = ['px-2', 'ms-2', 'text-decoration-none', 'text-body', 'fs-7'] as const
const listGroupItemClasses = ['border-0', 'px-0', 'py-0-5', 'ms-2'] as const
const headerInsideClasses = [
  'd-inline-flex',
  'align-items-center',
  'px-2',
  'ms-2',
  'text-decoration-none',
] as const

const headerLinks = [
  {
    route: withBase('/docs'),
    label: 'Getting Started',
  },
  {
    route: withBase('/docs/icons'),
    label: 'Icons',
  },
  {
    route: withBase('/docs/types'),
    label: 'Types',
  },
  {
    route: withBase('/docs/reference'),
    label: 'Reference',
  },
  {
    route: withBase('/docs/migration-guide'),
    label: 'Migrate',
  },
]

const componentsComputedList = computed(() =>
  componentsData.map((component) => ({
    name: component.name,
    route: component.url,
  }))
)

const composablesComputedList = computed(() =>
  composablesData.map((composable) => ({
    name: composable.name,
    route: composable.url,
  }))
)

const directivesComputedList = computed(() =>
  directivesData.map((directive) => ({
    name: directive.name,
    route: directive.url,
  }))
)

const configurationsComputedList = computed(() =>
  configurationsData.map((configuration) => ({
    name: configuration.name,
    route: configuration.url,
  }))
)

const groupComputedList = computed(() => [
  {
    label: 'Components',
    uri: '/docs/components',
    icon: () => IntersectIcon,
    children: componentsComputedList.value,
  },
  {
    label: 'Composables',
    uri: '/docs/composables',
    icon: () => PieChartIcon,
    children: composablesComputedList.value,
  },
  {
    label: 'Directives',
    uri: '/docs/directives',
    icon: () => CodeSlashIcon,
    children: directivesComputedList.value,
  },
  {
    label: 'Configurations',
    uri: '/docs/configurations',
    icon: () => GearIcon,
    children: configurationsComputedList.value,
  },
])
</script>

<style lang="scss" scoped>
.bd-links-nav {
  -moz-column-gap: 1.5rem;
  column-gap: 1.5rem;
}
@media (max-width: 1200px) {
  .bd-links-nav {
    -moz-column-count: 2;
    column-count: 2;
  }
}
@media (max-width: 576px) {
  .bd-links-nav {
    -moz-column-count: 1;
    column-count: 1;
  }
}
.py-0-5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.fs-7 {
  font-size: 0.875rem;
}
</style>
