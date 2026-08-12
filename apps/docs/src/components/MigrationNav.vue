<template>
  <nav class="migration-nav">
    <BListGroup>
      <strong :class="headerClasses">
        <BLink
          :to="withBase('/docs/migration-data/')"
          :active="isRouteActive('/docs/migration-data/')"
          :class="headerInsideClasses"
        >
          <ArrowLeftCircleIcon class="me-2" />
          Migration overview
        </BLink>
      </strong>
    </BListGroup>
    <BListGroup v-for="group in groupedItems" :key="group.label">
      <strong :class="headerClasses">
        <span :class="headerInsideClasses">
          <component :is="group.icon()" class="me-2" />
          {{ group.label }}
        </span>
      </strong>
      <BListGroupItem v-for="item in group.children" :key="item.id" :class="listGroupItemClasses">
        <BLink :to="withBase(item.url)" :active="isRouteActive(item.url)" :class="linkClasses">
          {{ item.title }}
        </BLink>
      </BListGroupItem>
    </BListGroup>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, withBase } from 'vitepress'
import CollectionIcon from '~icons/bi/collection'
import GridIcon from '~icons/bi/grid'
import InputCursorTextIcon from '~icons/bi/input-cursor-text'
import CodeSlashIcon from '~icons/bi/code-slash'
import ArrowLeftCircleIcon from '~icons/bi/arrow-left-circle'
import { data as migrationData } from '../data/migration.data'

const route = useRoute()

const isRouteActive = (url: string) => {
  const routeWithBase = withBase(url)
  return route.path === routeWithBase || route.path === `${routeWithBase}.html`
}

const headerClasses = ['py-2', 'text-primary-emphasis'] as const
const sharedIndentClasses = ['px-2', 'ms-2'] as const
const linkClasses = [...sharedIndentClasses, 'text-decoration-none', 'text-body', 'fs-7'] as const
const listGroupItemClasses = ['border-0', 'px-0', 'py-0-5', 'ms-2'] as const
const headerInsideClasses = [
  'd-inline-flex',
  'align-items-center',
  ...sharedIndentClasses,
  'text-decoration-none',
] as const

const groupedItems = computed(() => [
  {
    label: 'Patterns',
    icon: () => CollectionIcon,
    children: migrationData.filter((item) => item.category === 'patterns'),
  },
  {
    label: 'Props',
    icon: () => InputCursorTextIcon,
    children: migrationData.filter((item) => item.category === 'props'),
  },
  {
    label: 'Components',
    icon: () => GridIcon,
    children: migrationData.filter((item) => item.category === 'components'),
  },
  {
    label: 'Directives',
    icon: () => CodeSlashIcon,
    children: migrationData.filter((item) => item.category === 'directives'),
  },
])
</script>

<style lang="scss" scoped>
.migration-nav {
  .py-0-5 {
    padding-top: 0.125rem;
    padding-bottom: 0.125rem;
  }

  .fs-7 {
    font-size: 0.875rem;
  }
}
</style>
