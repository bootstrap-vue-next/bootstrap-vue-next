<template>
  <BTableSimple
    :id="id"
    :bordered="bordered"
    :borderless="borderless"
    :border-variant="borderVariant"
    :caption-top="captionTop"
    :dark="dark"
    :fixed="fixed"
    :hover="hover"
    :no-border-collapse="noBorderCollapse"
    :outlined="outlined"
    :responsive="responsive"
    :small="small"
    :stacked="computedStacked"
    :sticky-header="stickyHeader"
    :striped="striped"
    :table-class="computedTableClasses"
    :variant="variant"
    :striped-columns="stripedColumns"
  >
    <BThead :variant="headVariant" :class="theadClass">
      <slot v-if="$slots['thead-top']" name="thead-top" />
      <BTr :variant="headRowVariant" :class="theadTrClass">
        <BTh
          v-for="field in computedFields"
          :key="field.key"
          scope="col"
          :class="getFieldColumnClasses(field)"
          :title="field.headerTitle"
          :variant="field.variant"
          :abbr="field.headerAbbr"
          :style="field.thStyle"
          v-bind="field.thAttr"
          @click="headerClicked(field, $event)"
        >
          <slot
            :name="$slots[`head(${String(field.key)})`] ? `head(${String(field.key)})` : 'head()'"
            :label="field.label"
            :column="field.key"
            :field="field"
            :is-foot="false"
          >
            {{ getTableFieldHeadLabel(field) }}
          </slot>
        </BTh>
      </BTr>
      <BTr v-if="$slots['thead-sub']">
        <BTd
          v-for="field in computedFields"
          :key="field.key"
          scope="col"
          :variant="field.variant"
          :class="[field.class, field.thClass]"
        >
          <slot name="thead-sub" :items="computedFields" v-bind="field">
            {{ field.label }}
          </slot>
        </BTd>
      </BTr>
    </BThead>
    <BTbody :class="tbodyClass">
      <slot
        name="custom-body"
        :fields="computedFields"
        :items="items"
        :columns="computedFields.length"
      >
        <BTr v-if="!computedStacked && $slots['top-row']">
          <slot name="top-row" />
        </BTr>

        <template v-for="(item, itemIndex) in items" :key="itemIndex">
          <BTr
            :class="getRowClasses(item, 'row')"
            :variant="item._rowVariant"
            @click="!filterEvent($event) && emit('row-clicked', item, itemIndex, $event)"
            @dblclick="!filterEvent($event) && emit('row-dbl-clicked', item, itemIndex, $event)"
            @mouseenter="!filterEvent($event) && emit('row-hovered', item, itemIndex, $event)"
            @mouseleave="!filterEvent($event) && emit('row-unhovered', item, itemIndex, $event)"
          >
            <BTd
              v-for="field in computedFields"
              :key="field.key"
              :variant="item._cellVariants?.[field.key as keyof T] ? null : field.variant"
              :class="getFieldRowClasses(field, item)"
              v-bind="itemAttributes(item, String(field.key), field.tdAttr)"
            >
              <label v-if="computedStacked && labelStackedBoolean" class="b-table-stacked-label">
                {{ getTableFieldHeadLabel(field) }}
              </label>
              <slot
                :name="
                  $slots[`cell(${String(field.key)})`] ? `cell(${String(field.key)})` : 'cell()'
                "
                :value="get(item, String(field.key))"
                :index="itemIndex"
                :item="item"
                :field="field"
                :items="items"
                :toggle-details="
                  () => {
                    toggleRowDetails(item)
                  }
                "
                :details-showing="item._showDetails ?? false"
              >
                <template v-if="!$slots[`cell(${String(field.key)})`] && !$slots['cell()']">
                  {{ formatItem(item, String(field.key), field.formatter) }}
                </template>
              </slot>
            </BTd>
          </BTr>

          <template v-if="item._showDetails === true && $slots['row-details']">
            <BTr aria-hidden="true" role="presentation" class="d-none" />
            <BTr :class="getRowClasses(item, 'row-details')" :variant="item._rowVariant">
              <BTd :colspan="computedFieldsTotal">
                <slot
                  name="row-details"
                  :item="item"
                  :toggle-details="
                    () => {
                      toggleRowDetails(item)
                    }
                  "
                  :fields="fields"
                  :index="itemIndex"
                />
              </BTd>
            </BTr>
          </template>
        </template>
        <BTr v-if="showEmptyBoolean && items.length === 0" class="b-table-empty-slot">
          <BTd :colspan="computedFieldsTotal">
            <slot name="empty" :items="items">
              {{ emptyText }}
            </slot>
          </BTd>
        </BTr>
        <BTr v-if="!computedStacked && $slots['bottom-row']">
          <slot name="bottom-row" />
        </BTr>
      </slot>
    </BTbody>
    <BTfoot v-if="footCloneBoolean" :variant="footVariant" :class="tfootClass">
      <BTr :variant="footRowVariant" :class="tfootTrClass">
        <BTh
          v-for="field in computedFields"
          :key="field.key"
          scope="col"
          :class="getFieldColumnClasses(field)"
          :title="field.headerTitle"
          :abbr="field.headerAbbr"
          :style="field.thStyle"
          :variant="field.variant"
          v-bind="field.thAttr"
          @click="headerClicked(field, $event, true)"
        >
          <div class="d-inline-flex flex-nowrap align-items-center gap-1">
            <div>
              <slot
                :name="
                  $slots[`foot(${String(field.key)})`] ? `foot(${String(field.key)})` : 'foot()'
                "
                :label="field.label"
                :column="field.key"
                :field="field"
                :is-foot="true"
              >
                {{ getTableFieldHeadLabel(field) }}
              </slot>
            </div>
          </div>
        </BTh>
      </BTr>
    </BTfoot>
    <BTfoot v-else-if="$slots['custom-foot']">
      <slot
        name="custom-foot"
        :fields="computedFields"
        :items="items"
        :columns="computedFields.length"
      />
    </BTfoot>
    <caption v-if="$slots['table-caption'] || caption">
      <slot name="table-caption">
        {{ caption }}
      </slot>
    </caption>
  </BTableSimple>
</template>

<script setup lang="ts" generic="T = Record<string, unknown>">
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'
import type {
  BTableLiteProps,
  TableField,
  TableFieldAttribute,
  TableFieldFormatter,
  TableFieldRaw,
  TableItem,
} from '../../types'
import {filterEvent, get, getTableFieldHeadLabel, startCase} from '../../utils'
import BTableSimple from './BTableSimple.vue'
import BTbody from './BTbody.vue'
import BTd from './BTd.vue'
import BTfoot from './BTfoot.vue'
import BTh from './BTh.vue'
import BThead from './BThead.vue'
import BTr from './BTr.vue'

const props = withDefaults(defineProps<BTableLiteProps<T>>(), {
  caption: undefined,
  align: undefined,
  fields: () => [],
  footClone: false,
  items: () => [],
  labelStacked: false,
  showEmpty: false,
  emptyText: 'There are no records to show',
  emptyFilteredText: 'There are no records matching your request', // TODO not implemented
  fieldColumnClass: undefined,
  tbodyTrClass: undefined,
  captionHtml: undefined,
  detailsTdClass: undefined,
  headVariant: undefined,
  headRowVariant: undefined,
  footRowVariant: undefined,
  footVariant: undefined,
  modelValue: undefined,
  primaryKey: undefined,
  tbodyClass: undefined,
  tbodyTrAttr: undefined,
  tfootClass: undefined,
  tfootTrClass: undefined,
  theadClass: undefined,
  theadTrClass: undefined,
  // BTableSimpleProps props
  borderVariant: undefined,
  tableClass: undefined,
  variant: undefined,
  bordered: undefined,
  borderless: undefined,
  captionTop: undefined,
  dark: undefined,
  hover: undefined,
  id: undefined,
  noBorderCollapse: undefined,
  outlined: undefined,
  fixed: undefined,
  responsive: undefined,
  stacked: undefined,
  striped: undefined,
  stripedColumns: undefined,
  small: undefined,
  stickyHeader: undefined,
  // End BTableSimpleProps props
})

const emit = defineEmits<{
  'head-clicked': [
    key: TableField<T>['key'],
    field: TableFieldRaw<T>,
    event: MouseEvent,
    isFooter: boolean,
  ]
  'row-clicked': [item: TableItem<T>, index: number, event: MouseEvent]
  'row-dbl-clicked': [item: TableItem<T>, index: number, event: MouseEvent]
  'row-hovered': [item: TableItem<T>, index: number, event: MouseEvent]
  'row-unhovered': [item: TableItem<T>, index: number, event: MouseEvent]
}>()

const footCloneBoolean = useBooleanish(() => props.footClone)
const labelStackedBoolean = useBooleanish(() => props.labelStacked)
const showEmptyBoolean = useBooleanish(() => props.showEmpty)
const computedStacked = useBooleanish(() => props.stacked)

const computedTableClasses = computed(() => [
  props.tableClass,
  {
    [`align-${props.align}`]: props.align !== undefined,
  },
])

const computedFields = computed<TableField<T>[]>(() => {
  if (!props.fields.length && props.items.length) {
    return Object.keys(props.items[0]).map((k) => {
      const label = startCase(k)
      return {
        key: k,
        label,
        tdAttr: computedStacked.value === true ? {'data-label': label} : undefined,
      }
    })
  }

  return props.fields.map((f) => {
    if (typeof f === 'string') {
      const label = startCase(f)
      return {
        key: f,
        label,
        tdAttr: computedStacked.value === true ? {'data-label': label} : undefined,
      }
    }
    return {
      ...f,
      tdAttr:
        computedStacked.value === true
          ? {'data-label': startCase(f.key as string), ...f.tdAttr}
          : f.tdAttr,
    }
    // TODO handle Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
  })
})
const computedFieldsTotal = toRef(() => computedFields.value.length)

const formatItem = (
  item: TableItem<T>,
  fieldKey: string,
  formatter?: TableFieldFormatter<typeof item>
) => {
  const val = get(item, fieldKey)
  return formatter && typeof formatter === 'function' ? formatter(val, fieldKey, item) : val
}

const itemAttributes = (
  item: TableItem<T>,
  fieldKey: string,
  attr?: TableFieldAttribute<typeof item>
) => {
  const val = get(item, fieldKey)
  return attr && typeof attr === 'function' ? attr(val, fieldKey, item) : attr
}

const headerClicked = (
  field: Readonly<TableFieldRaw<T>>,
  event: Readonly<MouseEvent>,
  isFooter = false
) => {
  const fieldKey = typeof field === 'string' ? field : field.key
  emit('head-clicked', fieldKey, field, event, isFooter)
}

const toggleRowDetails = (tr: TableItem<T>) => {
  tr._showDetails = !tr._showDetails
}

const getFieldColumnClasses = (field: Readonly<TableField<T>>) => [
  field.class,
  field.thClass,
  {
    'b-table-sticky-column': field.stickyColumn,
  },
  props.fieldColumnClass
    ? typeof props.fieldColumnClass === 'function'
      ? props.fieldColumnClass(field)
      : props.fieldColumnClass
    : null,
]

const getFieldRowClasses = (field: Readonly<TableField<T>>, tr: Readonly<TableItem<T>>) => [
  field.class,
  field.tdClass,
  tr._cellVariants?.[field.key as keyof T]
    ? `table-${tr._cellVariants[field.key as keyof T]}`
    : null,
  {
    'b-table-sticky-column': field.stickyColumn,
  },
]

const getRowClasses = (item: Readonly<TableItem<T>>, type: 'row-details' | 'row') =>
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(item, type)
      : props.tbodyTrClass
    : null
</script>
