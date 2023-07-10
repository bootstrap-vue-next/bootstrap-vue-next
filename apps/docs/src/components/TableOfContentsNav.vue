<template>
  <div class="bd-links-nav">
    <BListGroup v-if="!isLargeScreen">
      <strong class="bd-links-heading"> <GearIcon aria-hidden /> General </strong>
      <BListGroupItem>
        <BLink
          :to="withBase('/docs')"
          :active="routerRoute.path === `${withBase('/docs')}.html`"
          class="px-2 ms-2 rounded"
          active-class="bg-primary text-light"
          >Getting Started</BLink
        >
      </BListGroupItem>
      <BListGroupItem>
        <BLink
          :to="withBase('/docs/icons')"
          :active="routerRoute.path === `${withBase('/docs/icons')}.html`"
          class="px-2 ms-2 rounded"
          active-class="bg-primary text-light"
          >Icons</BLink
        >
      </BListGroupItem>
      <BListGroupItem>
        <BLink
          :to="withBase('/docs/types')"
          :active="routerRoute.path === `${withBase('/docs/types')}.html`"
          class="px-2 ms-2 rounded"
          active-class="bg-primary text-light"
          >Types</BLink
        >
      </BListGroupItem>
      <BListGroupItem>
        <BLink
          :to="withBase('/docs/reference')"
          :active="routerRoute.path === `${withBase('/docs/reference')}.html`"
          class="px-2 ms-2 rounded"
          active-class="bg-primary text-light"
          >Reference</BLink
        >
      </BListGroupItem>
      <BListGroupItem>
        <BLink
          :to="withBase('/docs/migration-guide')"
          :active="routerRoute.path === `${withBase('/docs/migration-guide')}.html`"
          class="px-2 ms-2 rounded"
          active-class="bg-primary text-light"
          >Migrate</BLink
        >
      </BListGroupItem>
    </BListGroup>
    <BListGroup v-for="group in groupComputedList" :key="group.label">
      <strong class="bd-links-heading">
        <BLink :to="withBase(group.uri)">
          <component :is="group.icon()" /> {{ group.label }}
        </BLink>
      </strong>
      <BListGroupItem v-for="component in group.children" :key="component.name">
        <BLink
          :to="component.route"
          :active="routerRoute.path === `${component.route}.html`"
          class="px-2 ms-2 rounded"
          active-class="bg-primary text-light"
        >
          {{ component.name }}
        </BLink>
      </BListGroupItem>
    </BListGroup>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {BLink, BListGroup, BListGroupItem} from 'bootstrap-vue-next'
import {useRoute, withBase} from 'vitepress'
import {useMediaQuery} from '@vueuse/core'
import IntersectIcon from '~icons/bi/intersect'
import CodeSlashIcon from '~icons/bi/code-slash'
import PieChartIcon from '~icons/bi/pie-chart'
import GearIcon from '~icons/bi/gear'

defineProps<{
  name?: string
  route?: string
}>()

const routerRoute = useRoute()

const isLargeScreen = useMediaQuery('(min-width: 992px)')
const routeLocationComponents = (name: string): string =>
  withBase(`/docs/components/${name.toLowerCase()}`).trim().replaceAll(/\s+/g, '-')
const routeLocationComposables = (name: string): string =>
  withBase(`/docs/composables/${name}`).trim()
const routeLocationDirectives = (name: string): string =>
  withBase(`/docs/directives/${name}`).trim()

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

const composablesList: {name: string}[] = [{name: 'useBreadcrumb'}, {name: 'useColorMode'}]

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
