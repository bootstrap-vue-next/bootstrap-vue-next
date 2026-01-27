<template>
  <BTableSimple v-bind="computedSimpleProps">
    <colgroup v-if="slots['table-colgroup']">
      <slot name="table-colgroup" :fields="computedFields" />
    </colgroup>
    <BThead v-show="showComputedHeaders" :variant="props.headVariant" :class="props.theadClass">
      <slot name="thead-top" :columns="computedFieldsTotal" :fields="computedFields" />
      <BTr :variant="props.headRowVariant" :class="props.theadTrClass">
        <BTh
          v-for="field in computedFields"
          :key="field.key"
          :scope="field.scope"
          :class="getFieldColumnClasses(field)"
          :title="field.headerTitle"
          :variant="field.variant"
          :abbr="field.headerAbbr"
          :style="field.thStyle"
          :tabindex="keyboardController.shouldHeaderBeFocusable(field) ? '0' : undefined"
          v-bind="callThAttr(null, field, 'top')"
          @click="keyboardController.headerClicked(field, $event)"
          @keydown="keyboardController.handleHeaderKeydown(field, $event)"
        >
          <!-- eslint-disable prettier/prettier -->
          <slot
            :name="slots[`head(${field.key})`] ? (`head(${field.key})` as 'head()') : 'head()'"
            :label="field.label"
            :column="field.key"
            :field
            :is-foot="false"
          >
            <!-- eslint-enable prettier/prettier -->
            {{ getTableFieldHeadLabel(field) }}
          </slot>
        </BTh>
      </BTr>
      <BTr v-if="slots['thead-sub']">
        <BTd
          v-for="field in computedFields"
          :key="field.key"
          scope="col"
          :variant="field.variant"
          :class="[field.class, field.thClass]"
        >
          <slot name="thead-sub" :items="props.items" :fields="computedFields" :field>
            {{ field.label }}
          </slot>
        </BTd>
      </BTr>
    </BThead>
    <BTbody :class="props.tbodyClass">
      <slot
        name="custom-body"
        :fields="computedFields"
        :items="props.items"
        :columns="computedFieldsTotal"
      >
        <BTr
          v-if="!props.stacked && slots['top-row']"
          :class="getRowClasses(null, 'row-top')"
          v-bind="callTbodyTrAttrs(null, 'row-top')"
        >
          <slot name="top-row" :columns="computedFieldsTotal" :fields="computedFields" />
        </BTr>

        <template
          v-for="(item, itemIndex) in props.items"
          :key="
            props.primaryKey && isTableItem(item) && getWithGetter(item, props.primaryKey)
              ? getWithGetter(item, props.primaryKey)
              : itemIndex
          "
        >
          <BTr
            :id="
              props.primaryKey && isTableItem(item) && getWithGetter(item, props.primaryKey)
                ? generateTableRowId(getWithGetter(item, props.primaryKey) as string)
                : undefined
            "
            :class="getRowClasses(item, 'row')"
            :variant="isTableItem(item) ? item._rowVariant : undefined"
            :tabindex="keyboardController.shouldRowBeFocusable.value ? '0' : undefined"
            v-bind="callTbodyTrAttrs(item, 'row')"
            @click="
              !filterEvent($event) && emit('row-clicked', {item, index: itemIndex, event: $event})
            "
            @dblclick="
              !filterEvent($event) &&
              emit('row-dblclicked', {item, index: itemIndex, event: $event})
            "
            @contextmenu="
              !filterEvent($event) &&
              emit('row-contextmenu', {item, index: itemIndex, event: $event})
            "
            @mouseenter="
              !filterEvent($event) && emit('row-hovered', {item, index: itemIndex, event: $event})
            "
            @mouseleave="
              !filterEvent($event) && emit('row-unhovered', {item, index: itemIndex, event: $event})
            "
            @mousedown="keyboardController.handleMiddleClick(item, itemIndex, $event)"
            @keydown="keyboardController.handleRowKeydown(item, itemIndex, $event)"
          >
            <component
              :is="getCellComponent(field)"
              v-for="field in computedFields"
              :key="field.key"
              :variant="
                (isTableItem(item) ? item._cellVariants?.[field.key] : false) ? null : field.variant
              "
              :class="getFieldRowClasses(field, item)"
              v-bind="itemAttributes(item, field)"
            >
              <label v-if="props.stacked && props.labelStacked" class="b-table-stacked-label">
                {{ getTableFieldHeadLabel(field) }}
              </label>
              <slot
                :name="slots[`cell(${field.key})`] ? (`cell(${field.key})` as 'cell()') : 'cell()'"
                :value="formatItem(item, field)"
                :unformatted="getByFieldKey(item, field)"
                :index="itemIndex"
                :item="item"
                :field="field"
                :items="props.items"
                :toggle-expansion="() => expandedItemsController.toggle(item)"
                :expansion-showing="expandedItemsController.has(item)"
              >
                <template v-if="!slots[`cell(${field.key})`] && !slots['cell()']">
                  {{ formatItem(item, field) }}
                </template>
              </slot>
            </component>
          </BTr>

          <template v-if="expandedItemsController.has(item) && slots['row-expansion']">
            <BTr aria-hidden="true" role="presentation" class="d-none" />
            <BTr
              :class="getRowClasses(item, 'row-expansion')"
              :variant="isTableItem(item) ? item._rowVariant : undefined"
              v-bind="callTbodyTrAttrs(item, 'row-expansion')"
            >
              <BTd :colspan="computedFieldsTotal" :class="detailsTdClass">
                <slot
                  name="row-expansion"
                  :item="item"
                  :toggle-expansion="() => expandedItemsController.toggle(item)"
                  :fields="computedFields"
                  :index="itemIndex"
                />
              </BTd>
            </BTr>
          </template>
        </template>
        <!-- This class is for specific targetting of this slot element -->
        <BTr
          v-if="!props.stacked && slots['bottom-row']"
          class="bottom-row"
          :class="getRowClasses(null, 'row-bottom')"
          v-bind="callTbodyTrAttrs(null, 'row-bottom')"
        >
          <slot name="bottom-row" :columns="computedFieldsTotal" :fields="computedFields" />
        </BTr>
      </slot>
    </BTbody>
    <BTfoot v-if="props.footClone" v-bind="footerProps">
      <BTr
        :variant="props.footRowVariant ?? props.headRowVariant"
        :class="props.tfootTrClass ?? props.theadTrClass"
      >
        <BTh
          v-for="field in computedFields"
          :key="field.key"
          scope="col"
          :class="getFieldColumnClasses(field)"
          :title="field.headerTitle"
          :abbr="field.headerAbbr"
          :style="field.thStyle"
          :variant="field.variant"
          :tabindex="keyboardController.shouldHeaderBeFocusable(field) ? '0' : undefined"
          v-bind="callThAttr(null, field, 'bottom')"
          @click="keyboardController.headerClicked(field, $event, true)"
          @keydown="keyboardController.handleHeaderKeydown(field, $event, true)"
        >
          <div class="d-inline-flex flex-nowrap align-items-center gap-1">
            <div>
              <!-- eslint-disable prettier/prettier -->
              <!-- @vue-expect-error - typescript is generating 2322 errors for all properties after name, which is wrong -->
              <slot
                :name="calculatedFooterSlot(field.key)"
                :label="field.label"
                :column="field.key"
                :field="field"
                :is-foot="true"
              >
                <!-- eslint-enable prettier/prettier -->
                {{ getTableFieldHeadLabel(field) }}
              </slot>
            </div>
          </div>
        </BTh>
      </BTr>
    </BTfoot>
    <BTfoot v-else-if="slots['custom-foot']" v-bind="footerProps">
      <slot
        name="custom-foot"
        :fields="computedFields"
        :items="props.items"
        :columns="computedFieldsTotal"
      />
    </BTfoot>
    <caption v-if="slots['table-caption'] || props.caption">
      <slot name="table-caption">
        {{ props.caption }}
      </slot>
    </caption>
  </BTableSimple>
</template>

<script setup lang="ts" generic="Item">
import {computed, readonly, toRef} from 'vue'
import type {BTableLiteProps} from '../../types/ComponentProps'
import {
  isTableItem,
  type TableField,
  type TableItem,
  type TableRowThead,
  type TableRowType,
} from '../../types/TableTypes'
import BTableSimple from './BTableSimple.vue'
import BTbody from './BTbody.vue'
import BTd from './BTd.vue'
import BTfoot from './BTfoot.vue'
import BTh from './BTh.vue'
import BThead from './BThead.vue'
import BTr from './BTr.vue'
import {useDefaults} from '../../composables/useDefaults'
import {pick} from '../../utils/object'
import {
  bTableSimpleProps,
  formatItem,
  getByFieldKey,
  getTableFieldHeadLabel,
  getWithGetter,
} from '../../utils/tableUtils'
import {filterEvent} from '../../utils/filterEvent'
import {useId} from '../../composables/useId'
import type {BTableLiteEmits} from '../../types/ComponentEmits'
import type {BTableLiteSlots} from '../../types'
import {
  useItemExpansion,
  useTableFieldsMapper,
  useTableKeyboardNavigation,
} from '../../composables/useTableLiteHelpers'

const _props = withDefaults(defineProps<Omit<BTableLiteProps<Item>, 'expandedItems'>>(), {
  caption: undefined,
  align: undefined,
  fields: () => [],
  footClone: false,
  items: () => [],
  labelStacked: false,
  fieldColumnClass: undefined,
  tbodyTrClass: undefined,
  detailsTdClass: undefined,
  headVariant: undefined,
  headRowVariant: undefined,
  footRowVariant: undefined,
  footVariant: undefined,
  modelValue: undefined,
  primaryKey: undefined,
  tbodyClass: undefined,
  tbodyTrAttrs: undefined,
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
const props = useDefaults(_props, 'BTableLite')
const emit = defineEmits<BTableLiteEmits<Item>>()
const slots = defineSlots<BTableLiteSlots<Item>>()

const expandedItems = defineModel<Exclude<BTableLiteProps<Item>['expandedItems'], undefined>>(
  'expandedItems',
  {
    default: () => [],
  }
)

const computedId = useId(() => props.id)
const expandedItemsController = useItemExpansion({
  allItems: () => props.items,
  primaryKey: toRef(() => props.primaryKey),
  expandedItems,
})
const keyboardController = useTableKeyboardNavigation(
  {
    items: () => props.items,
    id: computedId,
  },
  {
    onHeadClicked: (obj) => {
      emit('head-clicked', obj)
    },
    onRowClicked: (obj) => {
      emit('row-clicked', obj)
    },
    onRowMiddleClicked: (obj) => {
      emit('row-middle-clicked', obj)
    },
  }
)
const {
  fields: computedFields,
  total: computedFieldsTotal,
  showHeaders: showComputedHeaders,
} = useTableFieldsMapper({
  fields: () => props.fields,
  items: () => props.items,
  stackedProps: {
    labelStacked: () => props.labelStacked,
    stacked: () => props.stacked,
  },
})

const calculatedFooterSlot = (key: string): keyof typeof slots =>
  slots[`foot(${key})`]
    ? `foot(${key})`
    : slots['foot()']
      ? 'foot()'
      : slots[`head(${key})`]
        ? `head(${key})`
        : 'head()'

const computedTableClasses = computed(() => [
  props.tableClass,
  {
    [`align-${props.align}`]: props.align !== undefined,
  },
])
const getFieldColumnClasses = (field: TableField) => [
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
const getFieldRowClasses = (field: Readonly<TableField>, tr: Item) => [
  field.class,
  typeof field.tdClass === 'function'
    ? field.tdClass(getByFieldKey(tr, field), field.key, tr)
    : field.tdClass,
  (isTableItem(tr) ? tr._cellVariants?.[field.key] : false)
    ? `table-${(tr as TableItem)._cellVariants?.[field.key]}`
    : null,
  {
    'b-table-sticky-column': field.stickyColumn,
  },
]
const getRowClasses = (item: Item | null, type: TableRowType) =>
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(item, type)
      : props.tbodyTrClass
    : null

const itemAttributes = (item: Item, field: TableField) =>
  field.tdAttr && typeof field.tdAttr === 'function'
    ? field.tdAttr({value: getByFieldKey(item, field), key: field.key, item})
    : field.tdAttr
const callThAttr = (item: Item | null, field: TableField<Item>, type: TableRowThead) =>
  field.thAttr && typeof field.thAttr === 'function'
    ? field.thAttr({value: getByFieldKey(item, field), key: field.key, item, type})
    : field.thAttr
const callTbodyTrAttrs = (item: Item | null, type: TableRowType) =>
  props.tbodyTrAttrs
    ? typeof props.tbodyTrAttrs === 'function'
      ? props.tbodyTrAttrs(item, type)
      : props.tbodyTrAttrs
    : null

const generateTableRowId = (primaryKeyValue: string) =>
  `${computedId.value}__row_${primaryKeyValue}`

const getCellComponent = (field: Readonly<TableField>) => {
  if (field?.isRowHeader) {
    return BTh
  }
  return BTd
}

const footerProps = computed(() => ({
  variant: props.footVariant ?? props.headVariant,
  class: props.tfootClass ?? props.theadClass,
}))

const computedSimpleProps = computed(() => ({
  ...pick(props, bTableSimpleProps),
  tableClass: computedTableClasses.value,
  id: computedId.value,
}))

defineExpose({
  expansion: {
    ...expandedItemsController,
    expandedItems: readonly(expandedItems),
  },
})
</script>
