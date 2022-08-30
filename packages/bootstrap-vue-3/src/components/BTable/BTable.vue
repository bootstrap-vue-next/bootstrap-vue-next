<template>
  <BTableContainer :responsive="responsive" :responsive-classes="responsiveClasses">
    <table :class="classes">
      <thead>
        <slot v-if="$slots['thead-top']" name="thead-top" />
        <tr>
          <th v-if="addSelectableCell">
            <slot name="selectHead">
              {{ typeof selectHead === 'boolean' ? 'Selected' : selectHead }}
            </slot>
          </th>
          <th
            v-for="field in computedFields"
            :key="field.key"
            scope="col"
            :class="getFieldColumnClasses(field)"
            :title="field.headerTitle"
            :abbr="field.headerAbbr"
            :style="field.thStyle"
            v-bind="field.thAttr"
            @click="columnClicked(field)"
          >
            <div class="d-flex flex-nowrap align-items-center gap-1">
              <span
                v-if="isSortable && field.sortable && field.key === sortBy"
                class="text-muted small"
              >
                <span v-show="sortDesc === true">▼</span>
                <span v-show="sortDesc === false">▲</span>
              </span>
              <div>
                <slot
                  v-if="$slots['head(' + field.key + ')']"
                  :name="'head(' + field.key + ')'"
                  :label="field.label"
                />
                <template v-else>{{ field.label }}</template>
              </div>
            </div>
          </th>
        </tr>
        <tr v-if="$slots['thead-sub']">
          <td
            v-for="field in computedFields"
            :key="field.key"
            scope="col"
            :class="[field.class, field.thClass, field.variant ? `table-${field.variant}` : '']"
          >
            <slot
              v-if="$slots['thead-sub']"
              name="thead-sub"
              :items="computedFields"
              v-bind="field"
            />
            <template v-else>{{ field.label }}</template>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(tr, ind) in computedItems"
          :key="ind"
          :class="getRowClasses(tr)"
          @click.prevent="onRowClick(tr, ind, $event)"
        >
          <td v-if="addSelectableCell">
            <slot name="selectCell">
              <span :class="selectedItems.has(tr) ? 'text-primary' : ''">🗹</span>
            </slot>
          </td>
          <td
            v-for="(field, index) in computedFields"
            :key="field.key"
            v-bind="field.tdAttr"
            :class="[
              field.class,
              field.tdClass,
              field.variant ? `table-${field.variant}` : '',
              tr?._cellVariants && tr?._cellVariants[field.key]
                ? `table-${tr?._cellVariants[field.key]}`
                : '',
            ]"
          >
            <slot
              v-if="$slots['cell(' + field.key + ')']"
              :name="'cell(' + field.key + ')'"
              :value="tr[field.key]"
              :index="index"
              :item="tr"
              :items="items"
            />
            <template v-else>{{ tr[field.key] }}</template>
          </td>
        </tr>
      </tbody>
      <tfoot v-if="footCloneBoolean">
        <tr>
          <th
            v-for="field in computedFields"
            :key="field.key"
            v-bind="field.thAttr"
            scope="col"
            :class="[field.class, field.thClass, field.variant ? `table-${field.variant}` : '']"
            :title="field.headerTitle"
            :abbr="field.headerAbbr"
            :style="field.thStyle"
          >
            {{ field.label }}
          </th>
        </tr>
      </tfoot>
      <caption v-if="$slots['table-caption']">
        <slot name="table-caption" />
      </caption>
      <caption v-else-if="caption">
        {{
          caption
        }}
      </caption>
    </table>
  </BTableContainer>
</template>

<script setup lang="ts">
// import type {Breakpoint} from '../../types'
import {computed, ref, toRef, useSlots} from 'vue'
import {useBooleanish} from '../../composables'
import type {
  Booleanish,
  ColorVariant,
  TableField,
  TableFieldObject,
  TableItem,
  VerticalAlign,
} from '../../types'
import BTableContainer from './BTableContainer.vue'
import useItemHelper from './itemHelper'

interface BTableProps {
  align?: VerticalAlign
  caption?: string
  captionTop?: Booleanish
  borderless?: Booleanish
  bordered?: Booleanish
  borderVariant?: ColorVariant
  dark?: Booleanish
  fields?: Array<TableField>
  footClone?: Booleanish
  hover?: Booleanish
  items?: Array<TableItem>
  responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  small?: Booleanish
  striped?: Booleanish
  variant?: ColorVariant
  sortBy?: string
  sortDesc?: boolean
  sortInternal?: boolean
  selectable?: boolean
  selectHead?: boolean | string
  selectMode?: 'multi' | 'single' | 'range'
}

const props = withDefaults(defineProps<BTableProps>(), {
  captionTop: false,
  borderless: false,
  bordered: false,
  dark: false,
  fields: () => [],
  footClone: false,
  hover: false,
  items: () => [],
  responsive: false,
  small: false,
  striped: false,
  sortInternal: true,
  selectable: false,
  selectHead: true,
  selectMode: 'single',
})

interface BTableEmits {
  (e: 'rowSelected', value: TableItem): void
  (e: 'rowUnselected', value: TableItem): void
  (e: 'selection', value: TableItem[]): void
  (e: 'update:sortBy', value: string): void
  (e: 'update:sortDesc', value: boolean): void
  (e: 'sorted', ...value: Parameters<(sort?: {by?: string; desc?: boolean}) => any>): void
}

const emits = defineEmits<BTableEmits>()
const slots = useSlots()

const captionTopBoolean = useBooleanish(toRef(props, 'captionTop'))
const borderlessBoolean = useBooleanish(toRef(props, 'borderless'))
const borderedBoolean = useBooleanish(toRef(props, 'bordered'))
const darkBoolean = useBooleanish(toRef(props, 'dark'))
const footCloneBoolean = useBooleanish(toRef(props, 'footClone'))
const hoverBoolean = useBooleanish(toRef(props, 'hover'))
const smallBoolean = useBooleanish(toRef(props, 'small'))
const stripedBoolean = useBooleanish(toRef(props, 'striped'))
const sortInternalBoolean = useBooleanish(toRef(props, 'sortInternal'))
const selectableBoolean = useBooleanish(toRef(props, 'selectable'))

const classes = computed(() => [
  'table',
  {
    [`align-${props.align}`]: props.align !== undefined,
    [`table-${props.variant}`]: props.variant !== undefined,
    'table-striped': stripedBoolean.value,
    'table-hover': hoverBoolean.value,
    'table-dark': darkBoolean.value,
    'table-bordered': borderedBoolean.value,
    [`border-${props.borderVariant}`]: props.borderVariant !== undefined,
    'table-borderless': borderlessBoolean.value,
    'table-sm': smallBoolean.value,
    'caption-top': captionTopBoolean.value,
    'b-table-selectable': selectableBoolean.value,
    [`b-table-select-${props.selectMode}`]: selectableBoolean.value,
    'b-table-selecting user-select-none': selectableBoolean.value && isSelecting.value,
  },
])

const itemHelper = useItemHelper()
const computedFields = computed(() => itemHelper.normaliseFields(props.fields, props.items))
const computedItems = computed(() =>
  sortInternalBoolean.value === true
    ? itemHelper.sortItems(props.fields, props.items, {key: props.sortBy, desc: props.sortDesc})
    : props.items
)

const responsiveClasses = computed(() => ({
  'table-responsive': typeof props.responsive === 'boolean' && props.responsive,
  [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
}))

const addSelectableCell = computed(
  () => selectableBoolean && (props.selectHead || slots.selectHead !== undefined)
)

const isSortable = computed(
  () =>
    props.fields.filter((field) => (typeof field === 'string' ? false : field.sortable)).length > 0
)
const columnClicked = (field: TableField<Record<string, unknown>>) => {
  //!! make sure to enable this flag after implementing the table.busy feature.
  // if (props.busy) return;

  const fieldKey = typeof field === 'string' ? field : field.key
  const fieldSortable = typeof field === 'string' ? false : field.sortable
  if (isSortable.value === true && fieldSortable === true) {
    if (fieldKey === props.sortBy) {
      emits('update:sortDesc', !props.sortDesc)
    } else {
      emits('update:sortBy', typeof field === 'string' ? field : field.key)
      emits('update:sortDesc', false)
    }
    emits('sorted', {by: props.sortBy, desc: props.sortDesc})
  }
}

const selectedItems = ref<Set<TableItem>>(new Set([]))
const isSelecting = computed(() => selectedItems.value.size > 0)

const onRowClick = (row: TableItem, index: number, e: MouseEvent) => {
  handleRowSelection(row, index, e.shiftKey)
}

const handleRowSelection = (row: TableItem, index: number, shiftClicked = false) => {
  if (!selectableBoolean.value) return

  if (selectedItems.value.has(row)) {
    selectedItems.value.delete(row)
    emits('rowUnselected', row)
  } else {
    if (props.selectMode === 'single' && selectedItems.value.size > 0) {
      selectedItems.value.forEach((item) => emits('rowUnselected', item))
      selectedItems.value.clear()
    }

    if (props.selectMode === 'range' && selectedItems.value.size > 0 && shiftClicked) {
      const lastSelectedItem = Array.from(selectedItems.value).pop()
      const lastSelectedIndex = computedItems.value.findIndex((i) => i === lastSelectedItem)
      const selectStartIndex = Math.min(lastSelectedIndex, index)
      const selectEndIndex = Math.max(lastSelectedIndex, index)
      computedItems.value.slice(selectStartIndex, selectEndIndex + 1).forEach((item) => {
        if (!selectedItems.value.has(item)) {
          selectedItems.value.add(item)
          emits('rowSelected', item)
        }
      })
    } else {
      selectedItems.value.add(row)
      emits('rowSelected', row)
    }
  }

  emits('selection', Array.from(selectedItems.value))
}

const getFieldColumnClasses = (field: TableFieldObject) => [
  field.class,
  field.thClass,
  field.variant ? `table-${field.variant}` : undefined,
  {'b-table-sortable-column': isSortable.value && field.sortable},
]

const getRowClasses = (item: TableItem) => [
  item._rowVariant ? `table-${item._rowVariant}` : null,
  selectableBoolean.value && selectedItems.value.has(item) ? `selected table-primary` : null,
]
</script>
