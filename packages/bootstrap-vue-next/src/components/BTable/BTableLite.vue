<template>
  <BTableSimple v-bind="containerAttrs">
    <thead>
      <slot v-if="$slots['thead-top']" name="thead-top" />
      <tr>
        <slot name="thead-tr-prefix" />
        <th
          v-for="field in computedFields"
          :key="field.key"
          scope="col"
          :class="getFieldColumnClasses(field)"
          :title="field.headerTitle"
          :abbr="field.headerAbbr"
          :style="field.thStyle"
          v-bind="field.thAttr"
          @click="headerClicked(field, $event)"
        >
          <div class="d-inline-flex flex-nowrap align-items-center gap-1">
            <slot name="field-prefix" :field="field" />
            <div>
              <slot
                v-if="$slots['head(' + field.key + ')'] || $slots['head()']"
                :name="$slots['head(' + field.key + ')'] ? 'head(' + field.key + ')' : 'head()'"
                :label="field.label"
                :column="field.key"
                :field="field"
                :is-foot="false"
              />
              <template v-else>{{ getFieldHeadLabel(field) }}</template>
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
      <template v-for="(item, itemIndex) in items" :key="itemIndex">
        <tr
          :class="getRowClasses(item, 'row')"
          @click="!filterEvent($event) && onRowClick(item, itemIndex, $event)"
          @dblclick="!filterEvent($event) && onRowDblClick(item, itemIndex, $event)"
          @mouseenter="!filterEvent($event) && onRowMouseEnter(item, itemIndex, $event)"
          @mouseleave="!filterEvent($event) && onRowMouseLeave(item, itemIndex, $event)"
        >
          <slot name="tbody-tr-prefix" :item="item" />
          <td
            v-for="field in computedFields"
            :key="field.key"
            v-bind="field.tdAttr"
            :class="getFieldRowClasses(field, item)"
          >
            <label v-if="stacked && labelStackedBoolean" class="b-table-stacked-label">{{
              getFieldHeadLabel(field)
            }}</label>
            <slot
              v-if="$slots['cell(' + field.key + ')'] || $slots['cell()']"
              :name="$slots['cell(' + field.key + ')'] ? 'cell(' + field.key + ')' : 'cell()'"
              :value="item[field.key]"
              :index="itemIndex"
              :item="item"
              :field="field"
              :items="items"
              :toggle-details="() => toggleRowDetails(item)"
              :details-showing="item._showDetails"
            />
            <template v-else>{{ renderItem(item, field) }}</template>
          </td>
        </tr>

        <tr
          v-if="item._showDetails === true && $slots['row-details']"
          :class="getRowClasses(item, 'row-details')"
        >
          <td :colspan="computedFieldsTotal">
            <slot name="row-details" :item="item" :toggle-details="() => toggleRowDetails(item)" />
          </td>
        </tr>
      </template>
      <slot name="tbody-prefix" :fields-total="computedFieldsTotal" />
      <tr v-if="showEmptyBoolean && items.length === 0" class="b-table-empty-slot">
        <td :colspan="computedFieldsTotal">
          <slot name="empty" :items="items">
            {{ emptyText }}
          </slot>
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
          @click="headerClicked(field, $event, true)"
        >
          {{ field.label }}
        </th>
      </tr>
    </tfoot>
    <tfoot v-else-if="$slots['custom-foot']">
      <slot
        name="custom-foot"
        :fields="computedFields"
        :items="items"
        :columns="computedFields?.length"
      />
    </tfoot>
    <caption v-if="$slots['table-caption']">
      <slot name="table-caption" />
    </caption>
    <caption v-else-if="caption">
      {{
        caption
      }}
    </caption>
  </BTableSimple>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useBooleanish} from '../../composables'
import {isObject, startCase, titleCase} from '../../utils'
import type {
  Booleanish,
  Breakpoint,
  ColorVariant,
  TableField,
  TableFieldObject,
  TableItem,
  VerticalAlign,
} from '../../types'
import BTableSimple from './BTableSimple.vue'
import {filterEvent} from './helpers/filter-event'
import type {TableFieldObjectFormatter} from '../../types/TableFieldObject'

const props = withDefaults(
  defineProps<{
    align?: VerticalAlign
    caption?: string
    captionTop?: Booleanish
    borderless?: Booleanish
    bordered?: Booleanish
    borderVariant?: ColorVariant | null
    dark?: Booleanish
    fields?: TableField[]
    footClone?: Booleanish
    hover?: Booleanish
    items?: TableItem[]
    responsive?: boolean | Breakpoint
    small?: Booleanish
    striped?: Booleanish
    stacked?: boolean | Breakpoint
    labelStacked?: boolean
    variant?: ColorVariant | null
    stickyHeader?: Booleanish
    showEmpty?: Booleanish
    emptyText?: string
    emptyFilteredText?: string
    tableClasses?: Record<string, any>
    fieldColumnClasses?: (field: TableFieldObject) => Record<string, any>[]
    tbodyTrClass?: (item: TableItem | null, type: string) => string | Array<any> | null | undefined
    virtualFields?: number
  }>(),
  {
    variant: undefined,
    borderVariant: undefined,
    caption: undefined,
    align: undefined,
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
    labelStacked: false,
    stacked: false,
    stickyHeader: false,
    showEmpty: false,
    emptyText: 'There are no records to show',
    emptyFilteredText: 'There are no records matching your request',
    virtualFields: 0,
    tableClasses: undefined,
    fieldColumnClasses: undefined,
    tbodyTrClass: undefined,
  }
)

const emit = defineEmits<{
  'head-clicked': [
    key: TableFieldObject['key'],
    field: TableField,
    event: MouseEvent,
    isFooter: boolean
  ]
  'row-clicked': [item: TableItem, index: number, event: MouseEvent]
  'row-dbl-clicked': [item: TableItem, index: number, event: MouseEvent]
  'row-hovered': [item: TableItem, index: number, event: MouseEvent]
  'row-unhovered': [item: TableItem, index: number, event: MouseEvent]
}>()

const footCloneBoolean = useBooleanish(() => props.footClone)
const labelStackedBoolean = useBooleanish(() => props.labelStacked)
const showEmptyBoolean = useBooleanish(() => props.showEmpty)

const tableClasses = computed(() => ({
  [`align-${props.align}`]: props.align !== undefined,
  ...props.tableClasses,
}))

const containerAttrs = computed(() => ({
  bordered: props.bordered,
  borderless: props.borderless,
  borderVariant: props.borderVariant,
  captionTop: props.captionTop,
  dark: props.dark,
  hover: props.hover,
  responsive: props.responsive,
  striped: props.striped,
  stacked: props.stacked,
  small: props.small,
  tableClass: tableClasses.value,
  tableVariant: props.variant,
  stickyHeader: props.stickyHeader,
}))

const computedFields = computed(() => normaliseFields(props.fields, props.items))
const computedFieldsTotal = computed(() => computedFields.value.length + props.virtualFields)

const getFieldHeadLabel = (field: TableField) => {
  if (typeof field === 'string') return titleCase(field)
  if (field.label !== undefined) return field.label
  if (typeof field.key === 'string') return titleCase(field.key)
  return field.key
}

const normaliseFields = (origFields: TableField[], items: TableItem[]): TableFieldObject[] => {
  const fields: TableFieldObject[] = []

  if (!origFields?.length && items?.length) {
    Object.keys(items[0]).forEach((k) => fields.push({key: k, label: startCase(k)}))
    return fields
  }

  if (Array.isArray(origFields)) {
    origFields.forEach((f) => {
      if (typeof f === 'string') {
        fields.push({key: f, label: startCase(f)})
      } else if (isObject(f) && f.key && typeof f.key === 'string') {
        fields.push({...f})
      }
      // todo handle Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
    })
    return fields
  }
  return fields
}

const formatItem = (
  item: TableItem,
  fieldKey: string,
  formatter?: TableFieldObjectFormatter<typeof item>
) => {
  const val = item[fieldKey]
  if (formatter && typeof formatter === 'function') {
    return formatter(val, fieldKey, item)
  }
  return val
}

const renderItem = (item: TableItem, fields: TableFieldObject) => {
  const formattedValue = formatItem(item, fields.key, fields.formatter)

  return formattedValue
}

const headerClicked = (field: TableField, event: MouseEvent, isFooter = false) => {
  const fieldKey = typeof field === 'string' ? field : field.key
  emit('head-clicked', fieldKey, field, event, isFooter)
}

const onRowClick = (row: TableItem, index: number, e: MouseEvent) => {
  emit('row-clicked', row, index, e)
}
const onRowDblClick = (row: TableItem, index: number, e: MouseEvent) =>
  emit('row-dbl-clicked', row, index, e)

const onRowMouseEnter = (row: TableItem, index: number, e: MouseEvent) =>
  emit('row-hovered', row, index, e)

const onRowMouseLeave = (row: TableItem, index: number, e: MouseEvent) =>
  emit('row-unhovered', row, index, e)

const toggleRowDetails = (tr: TableItem) => {
  tr._showDetails = !tr._showDetails
}

const getFieldColumnClasses = (field: TableFieldObject) => [
  field.class,
  field.thClass,
  {
    [`table-${field.variant}`]: field.variant !== null,
    'b-table-sticky-column': field.stickyColumn,
  },
  ...(props.fieldColumnClasses ? props.fieldColumnClasses(field) : []),
]

const getFieldRowClasses = (field: TableFieldObject, tr: TableItem) => [
  field.class,
  field.tdClass,
  tr?._cellVariants && tr?._cellVariants[field.key]
    ? `table-${tr?._cellVariants[field.key]}`
    : undefined,
  {
    [`table-${field.variant}`]: field.variant !== null,
    'b-table-sticky-column': field.stickyColumn,
  },
]

const getRowClasses = (item: TableItem, type = 'row') => {
  const classesArray = [
    item._rowVariant ? `table-${item._rowVariant}` : null,
    item._rowVariant ? `table-${item._rowVariant}` : null,
  ]

  if (props.tbodyTrClass) {
    const extraClasses = props.tbodyTrClass(item, type)
    if (extraClasses) {
      classesArray.push(...(typeof extraClasses === 'string' ? [extraClasses] : extraClasses))
    }
  }
  return classesArray
}
</script>
../../composables/tableItems
