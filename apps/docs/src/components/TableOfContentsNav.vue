<template>
  <nav class="bd-links-nav">
    <BListGroup v-if="!isLargeScreen">
      <strong :class="headerClasses">
        <span :class="headerInsideClasses"> <GearIcon aria-hidden /> General</span>
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
          <component :is="group.icon()" /> {{ group.label }}
        </BLink>
      </strong>
      <BListGroupItem
        v-for="component in group.children"
        :key="component.name"
        :class="listGroupItemClasses"
      >
        <BLink
          :to="component.route"
          :active="routerRoute.path === `${component.route}.html`"
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
import {BLink, BListGroup, BListGroupItem} from 'bootstrap-vue-next'
import {useRoute, withBase} from 'vitepress'
import {breakpointsBootstrapV5, useBreakpoints} from '@vueuse/core'
import IntersectIcon from '~icons/bi/intersect'
import CodeSlashIcon from '~icons/bi/code-slash'
import PieChartIcon from '~icons/bi/pie-chart'
import GearIcon from '~icons/bi/gear'

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

const routeLocationComponents = (name: string): string =>
  withBase(`/docs/components/${name.toLowerCase()}`).trim().replaceAll(/\s+/g, '-')
const routeLocationComposables = (name: string): string =>
  withBase(`/docs/composables/${name}`).trim()
const routeLocationDirectives = (name: string): string =>
  withBase(`/docs/directives/${name}`).trim()

const headerClasses = ['py-2', 'text-primary-emphasis'] as const
const linkClasses = ['px-2', 'ms-2', 'text-decoration-none', 'text-body', 'fs-7'] as const
const listGroupItemClasses = ['border-0', 'px-0', 'py-0-5', 'ms-2'] as const
const headerInsideClasses = ['px-2', 'ms-2', 'text-decoration-none'] as const

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

const componentsList: {name: string}[] = [
  {name: 'Accordion'},
  {name: 'Alert'},
  {name: 'Avatar'},
  {name: 'Badge'},
  {name: 'Breadcrumb'},
  {name: 'Button'},
  {name: 'Button Group'},
  {name: 'Button Toolbar'},
  {name: 'Card'},
  {name: 'Carousel'},
  {name: 'Collapse'},
  {name: 'Dropdown'},
  {name: 'Form'},
  {name: 'Form Checkbox'},
  {name: 'Form File'},
  {name: 'Form Group'},
  {name: 'Form Input'},
  {name: 'Form Radio'},
  {name: 'Form Select'},
  {name: 'Form Tags'},
  {name: 'Form Spinbutton'},
  {name: 'Form Textarea'},
  {name: 'Grid System'},
  {name: 'Image'},
  {name: 'Input Group'},
  {name: 'Link'},
  {name: 'List Group'},
  {name: 'Modal'},
  {name: 'Nav'},
  {name: 'Navbar'},
  {name: 'Offcanvas'},
  {name: 'Overlay'},
  {name: 'Pagination'},
  {name: 'Placeholder'},
  {name: 'Popover'},
  {name: 'Progress'},
  {name: 'Spinner'},
  {name: 'Table'},
  {name: 'Tabs'},
  {name: 'Toast'},
]

const composablesList: {name: string}[] = [
  {name: 'useBreadcrumb'},
  {name: 'useColorMode'},
  {name: 'useModal'},
  {name: 'useModalController'},
  {name: 'useToast'},
]

const directivesList: {name: string}[] = [
  {name: 'BColorMode'},
  {name: 'BModal'},
  {name: 'BPopover'},
  {name: 'BToggle'},
  {name: 'BTooltip'},
]

const componentsComputedList = computed(() =>
  [...componentsList]
    .map((el) => ({
      name: el.name,
      route: routeLocationComponents(el.name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
)

const composablesComputedList = computed(() =>
  [...composablesList]
    .map((el) => ({
      name: el.name,
      route: routeLocationComposables(el.name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
)

const directivesComputedList = computed(() =>
  [...directivesList]
    .map((el) => ({
      name: el.name,
      route: routeLocationDirectives(el.name),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
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
