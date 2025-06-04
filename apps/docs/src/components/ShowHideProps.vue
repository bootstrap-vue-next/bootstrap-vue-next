<template>
  <BTable :items="items" :fields="fields" hover small responsive bordered striped>
    <template #cell(description)="d"> {{ d.item.description }} </template>
    <template #cell(components)="d"
      ><div v-for="component in d.item.components" :key="component">
        <a :href="'#' + component.toLowerCase()">{{ component }}</a>
      </div></template
    >
  </BTable>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {buildCommonProps, dropdownProps, kebabCase, pick, showHideProps} from '../utils'

interface MigrationMap {
  [key: string]: {oldProp: string; components: string[]}
}

interface ComponentMap {
  [key: string]: string[]
}

const mappedComponents: ComponentMap = {
  showHideProps: [
    'BCollapse',
    'BDropdown',
    'BModal',
    'BNavItemDropdown',
    'BOffcanvas',
    'BPopover',
    'BToast',
    'BTooltip',
  ],
  dropdownCommon: ['BDropdown', 'BNavItemDropdown'],
}

const migrationMap: MigrationMap = {
  initialAnimation: {
    oldProp: 'appear',
    components: ['BAccordion', 'BAccordionItem', 'showHideProps'],
  },
  lazy: {oldProp: 'lazy', components: ['BAccordion', 'BAccordionItem', 'showHideProps']},
  modelValue: {oldProp: 'visible', components: ['showHideProps']},
  noAnimation: {oldProp: 'skip-animation', components: ['showHideProps']},
  noFade: {oldProp: 'skip-animation', components: ['showHideProps']},
  noBackdrop: {oldProp: 'hide-backdrop', components: ['BModal', 'BOffcanvas']},
  noEllipsis: {oldProp: 'hide-ellipsis', components: ['BPagination']},
  noFooter: {oldProp: 'hide-footer', components: ['BModal']},
  noGotoEndButtons: {oldProp: 'hide-goto-end-buttons', components: ['BPagination']},
  noHeader: {
    oldProp: 'hide-header',
    components: ['BModal', 'BOffcanvas', 'BPlaceholderCard', 'BPlaceholderTable'],
  },
  noHeaderClose: {oldProp: 'hide-header-close', components: ['BModal', 'BOffcanvas']},
  noWrapper: {oldProp: 'skip-wrapper', components: ['dropdownCommon']},
  show: {oldProp: '', components: ['showHideProps']},
  transProps: {oldProp: '', components: ['showHideProps']},
  unmountLazy: {
    oldProp: 'lazy',
    components: ['BAccordion', 'BAccordionItem', 'showHideProps'],
  },
  visible: {oldProp: 'visible', components: ['showHideProps']},
}

const combinedProps = {
  ...showHideProps,
  ...pick(buildCommonProps(), [
    'noBackdrop',
    'noEllipsis',
    'noGotoEndButtons',
    'noHeader',
    'noHeaderClose',
  ]),
  ...pick(dropdownProps, ['noWrapper']),
}

const mapComponents = (key: string) =>
  migrationMap[key].components
    .map((component) => (mappedComponents[component] ? mappedComponents[component] : component))
    .flat()

const items = computed(() =>
  Object.entries(combinedProps)
    .map(([key, value]) => ({
      prop: kebabCase(key),
      oldProp: migrationMap[key].oldProp,
      components: mapComponents(key),
      ...value,
    }))
    .sort((a, b) => a.prop.localeCompare(b.prop))
)

const fields = ['prop', 'oldProp', 'description', 'components']
</script>
