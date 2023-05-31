<template>
  <b-list-group v-if="!isLargeScreen">
    <strong class="bd-links-heading">General</strong>
    <b-list-group-item>
      <b-link :to="withBase('/docs/docs')">Getting Started</b-link>
    </b-list-group-item>
    <b-list-group-item>
      <b-link :to="withBase('/docs/icons')">Icons</b-link>
    </b-list-group-item>
    <b-list-group-item>
      <b-link :to="withBase('/docs/types')">Types</b-link>
    </b-list-group-item>
    <b-list-group-item>
      <b-link :to="withBase('/docs/migration-guide')">Migrate</b-link>
    </b-list-group-item>
  </b-list-group>
  <b-list-group>
    <strong class="bd-links-heading">
      <b-link :to="withBase('/docs/components')">
        <intersect-icon aria-hidden /> Components
      </b-link>
    </strong>
    <b-list-group-item v-for="component in componentsComputedList" :key="component.name">
      <b-link :to="component.route">{{ component.name }}</b-link>
    </b-list-group-item>
  </b-list-group>
  <b-list-group>
    <strong class="bd-links-heading">
      <b-link :to="withBase('/docs/composables')">
        <pie-chart-icon aria-hidden /> Composables
      </b-link>
    </strong>
    <b-list-group-item v-for="component in composablesComputedList" :key="component.name">
      <b-link :to="component.route">{{ component.name }}</b-link>
    </b-list-group-item>
  </b-list-group>
  <b-list-group>
    <strong class="bd-links-heading">
      <b-link :to="withBase('/docs/directives')">
        <code-slash-icon aria-hidden />
        Directives
      </b-link>
    </strong>
    <b-list-group-item v-for="component in directivesComputedList" :key="component.name">
      <b-link :to="component.route">{{ component.name }}</b-link>
    </b-list-group-item>
  </b-list-group>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {BLink, BListGroup, BListGroupItem} from 'bootstrap-vue-next'
import {withBase} from 'vitepress'
import {useMediaQuery} from '@vueuse/core'
import IntersectIcon from '~icons/bi/intersect'
import CodeSlashIcon from '~icons/bi/code-slash'
import PieChartIcon from '~icons/bi/pie-chart'

defineProps<{
  name?: string
  route?: string
}>()

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
</script>
