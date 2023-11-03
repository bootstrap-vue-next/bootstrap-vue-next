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
    :stacked="stacked"
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
          <div class="d-inline-flex flex-nowrap align-items-center gap-1">
            <div>
              <slot
                :name="$slots[`head(${field.key})`] ? `head(${field.key})` : 'head()'"
                :label="field.label"
                :column="field.key"
                :field="field"
                :is-foot="false"
              >
                {{ getFieldHeadLabel(field) }}
              </slot>
            </div>
          </div>
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
        <BTr v-if="!stacked && $slots['top-row']">
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
              :variant="item._cellVariants?.[field.key] ? null : field.variant"
              :class="getFieldRowClasses(field, item)"
              v-bind="field.tdAttr"
            >
              <label v-if="stacked && labelStackedBoolean" class="b-table-stacked-label">
                {{ getFieldHeadLabel(field) }}
              </label>
              <slot
                :name="$slots[`cell(${field.key})`] ? `cell(${field.key})` : 'cell()'"
                :value="get(item, field.key)"
                :index="itemIndex"
                :item="item"
                :field="field"
                :items="items"
                :toggle-details="
                  () => {
                    toggleRowDetails(item)
                  }
                "
                :details-showing="item._showDetails"
              >
                {{ formatItem(item, field.key, field.formatter) }}
              </slot>
            </BTd>
          </BTr>

          <BTr
            v-if="item._showDetails === true && $slots['row-details']"
            :class="getRowClasses(item, 'row-details')"
            :variant="item._rowVariant"
          >
            <BTd :colspan="computedFieldsTotal">
              <slot
                name="row-details"
                :item="item"
                :toggle-details="
                  () => {
                    toggleRowDetails(item)
                  }
                "
              />
            </BTd>
          </BTr>
        </template>
        <BTr v-if="showEmptyBoolean && items.length === 0" class="b-table-empty-slot">
          <BTd :colspan="computedFieldsTotal">
            <slot name="empty" :items="items">
              {{ emptyText }}
            </slot>
          </BTd>
        </BTr>
        <BTr v-if="!stacked && $slots['bottom-row']">
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
                :name="$slots[`foot(${field.key})`] ? `foot(${field.key})` : 'foot()'"
                :label="field.label"
                :column="field.key"
                :field="field"
                :is-foot="true"
              >
                {{ getFieldHeadLabel(field) }}
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

<script setup lang="ts">
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'
import type {
  BTableLiteProps,
  BTableSimpleProps,
  TableField,
  TableFieldObject,
  TableItem,
} from '../../types'
import type {TableFieldObjectFormatter} from '../../types/TableFieldObject'
import {filterEvent, get, isObject, startCase, titleCase} from '../../utils'
import BTableSimple from './BTableSimple.vue'
import BTbody from './BTbody.vue'
import BTd from './BTd.vue'
import BTfoot from './BTfoot.vue'
import BTh from './BTh.vue'
import BThead from './BThead.vue'
import BTr from './BTr.vue'

const props = withDefaults(defineProps<BTableLiteProps & BTableSimpleProps>(), {
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
  stripedColumns: false,
  labelStacked: false,
  stacked: false,
  stickyHeader: false,
  showEmpty: false,
  emptyText: 'There are no records to show',
  emptyFilteredText: 'There are no records matching your request',
  tableClass: undefined,
  fieldColumnClass: undefined,
  tbodyTrClass: undefined,
})

const emit = defineEmits<{
  'head-clicked': [
    key: TableFieldObject['key'],
    field: TableField,
    event: MouseEvent,
    isFooter: boolean,
  ]
  'row-clicked': [item: TableItem, index: number, event: MouseEvent]
  'row-dbl-clicked': [item: TableItem, index: number, event: MouseEvent]
  'row-hovered': [item: TableItem, index: number, event: MouseEvent]
  'row-unhovered': [item: TableItem, index: number, event: MouseEvent]
}>()

const footCloneBoolean = useBooleanish(() => props.footClone)
const labelStackedBoolean = useBooleanish(() => props.labelStacked)
const showEmptyBoolean = useBooleanish(() => props.showEmpty)

const computedTableClasses = computed(() => [
  props.tableClass,
  {
    [`align-${props.align}`]: props.align !== undefined,
  },
])

const computedFields = computed(() => {
  const fields: TableFieldObject[] = []

  if (!props.fields.length && props.items.length) {
    Object.keys(props.items[0]).forEach((k) => fields.push({key: k, label: startCase(k)}))
    return fields
  }

  if (Array.isArray(props.fields)) {
    props.fields.forEach((f) => {
      if (typeof f === 'string') {
        fields.push({key: f, label: startCase(f)})
      } else if (isObject(f) && f.key && typeof f.key === 'string') {
        fields.push({...f})
      }
      // TODO handle Shortcut object (i.e. { 'foo_bar': 'This is Foo Bar' }
    })
    return fields
  }
  return fields
})
const computedFieldsTotal = toRef(() => computedFields.value.length)

const getFieldHeadLabel = (field: TableField) =>
  typeof field === 'string'
    ? titleCase(field)
    : field.label !== undefined
    ? field.label
    : typeof field.key === 'string'
    ? titleCase(field.key)
    : field.key

const formatItem = (
  item: TableItem,
  fieldKey: string,
  formatter?: TableFieldObjectFormatter<typeof item>
) => {
  const val = get(item, fieldKey)
  return formatter && typeof formatter === 'function' ? formatter(val, fieldKey, item) : val
}

const headerClicked = (field: TableField, event: MouseEvent, isFooter = false) => {
  const fieldKey = typeof field === 'string' ? field : field.key
  emit('head-clicked', fieldKey, field, event, isFooter)
}

const toggleRowDetails = (tr: TableItem) => {
  tr._showDetails = !tr._showDetails
}

const getFieldColumnClasses = (field: TableFieldObject) => [
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

const getFieldRowClasses = (field: TableFieldObject, tr: TableItem) => [
  field.class,
  field.tdClass,
  tr._cellVariants?.[field.key] ? `table-${tr._cellVariants[field.key]}` : null,
  {
    'b-table-sticky-column': field.stickyColumn,
  },
]

const getRowClasses = (item: TableItem, type: 'row-details' | 'row') =>
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(item, type)
      : props.tbodyTrClass
    : null
</script>
