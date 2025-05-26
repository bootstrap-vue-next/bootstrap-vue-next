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
          v-bind="callThAttr(null, field, 'top')"
          @click="headerClicked(field, $event)"
        >
          <!-- eslint-disable prettier/prettier -->
          <slot
            :name="
              slots[`head(${String(field.key)})`]
                ? (`head(${String(field.key)})` as 'head()')
                : 'head()'
            "
            :label="field.label"
            :column="field.key as LiteralUnion<keyof Items>"
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
            props.primaryKey && get(item, props.primaryKey)
              ? get(item, props.primaryKey)
              : itemIndex
          "
        >
          <BTr
            :id="
              props.primaryKey && get(item, props.primaryKey)
                ? generateTableRowId(get(item, props.primaryKey))
                : undefined
            "
            :class="getRowClasses(item, 'row')"
            :variant="isTableItem(item) ? item._rowVariant : undefined"
            v-bind="callTbodyTrAttrs(item, 'row')"
            @click="!filterEvent($event) && emit('row-clicked', item, itemIndex, $event)"
            @dblclick="!filterEvent($event) && emit('row-dblclicked', item, itemIndex, $event)"
            @contextmenu="!filterEvent($event) && emit('row-contextmenu', item, itemIndex, $event)"
            @mouseenter="!filterEvent($event) && emit('row-hovered', item, itemIndex, $event)"
            @mouseleave="!filterEvent($event) && emit('row-unhovered', item, itemIndex, $event)"
            @mousedown="handleMiddleClick(item, itemIndex, $event)"
          >
            <BTd
              v-for="field in computedFields"
              :key="field.key"
              :variant="
                (isTableItem(item) ? item._cellVariants?.[field.key as string] : false)
                  ? null
                  : field.variant
              "
              :class="getFieldRowClasses(field, item)"
              v-bind="itemAttributes(item, String(field.key), field.tdAttr)"
            >
              <label v-if="props.stacked && props.labelStacked" class="b-table-stacked-label">
                {{ getTableFieldHeadLabel(field) }}
              </label>
              <slot
                :name="
                  slots[`cell(${String(field.key)})`]
                    ? (`cell(${String(field.key)})` as 'cell()')
                    : 'cell()'
                "
                :value="formatItem(item, String(field.key), field.formatter)"
                :unformatted="get(item, String(field.key))"
                :index="itemIndex"
                :item="item"
                :field="field"
                :items="items"
                :toggle-details="() => toggleRowDetails(item)"
                :details-showing="isTableItem(item) ? (detailsMap.get(item) ?? false) : false"
              >
                <template v-if="!slots[`cell(${String(field.key)})`] && !slots['cell()']">
                  {{ formatItem(item, String(field.key), field.formatter) }}
                </template>
              </slot>
            </BTd>
          </BTr>

          <template
            v-if="isTableItem(item) && detailsMap.get(item) === true && slots['row-details']"
          >
            <BTr aria-hidden="true" role="presentation" class="d-none" />
            <BTr
              :class="getRowClasses(item, 'row-details')"
              :variant="item._rowVariant"
              v-bind="callTbodyTrAttrs(item, 'row-details')"
            >
              <BTd :colspan="computedFieldsTotal" :class="detailsTdClass">
                <slot
                  name="row-details"
                  :item="item"
                  :toggle-details="() => toggleRowDetails(item)"
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
          v-bind="callThAttr(null, field, 'bottom')"
          @click="headerClicked(field, $event, true)"
        >
          <div class="d-inline-flex flex-nowrap align-items-center gap-1">
            <div>
              <!-- eslint-disable prettier/prettier -->
              <!-- @vue-expect-error - typescript is generating 2322 errors for all properties after name, which is wrong -->
              <slot
                :name="calculatedFooterSlot(field.key)"
                :label="field.label"
                :column="field.key"
                :field="field as LiteralUnion<keyof Items>"
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

<script setup lang="ts" generic="Items">
import {computed, ref, watch} from 'vue'
import type {BTableLiteProps} from '../../types/ComponentProps'
import {
  isTableField,
  isTableItem,
  type TableField,
  type TableItem,
  type TableRowEvent,
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
import {get, pick} from '../../utils/object'
import {btableSimpleProps, getDataLabelAttr, getTableFieldHeadLabel} from '../../utils/tableUtils'
import {formatItem} from '../../utils/formatItem'
import {filterEvent} from '../../utils/filterEvent'
import {startCase} from '../../utils/stringUtils'
import type {LiteralUnion} from '../../types/LiteralUnion'
import {useId} from '../../composables/useId'

const _props = withDefaults(defineProps<BTableLiteProps<Items>>(), {
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

const emit = defineEmits<{
  'head-clicked': [
    key: string,
    field: (typeof computedFields.value)[0],
    event: MouseEvent,
    isFooter: boolean,
  ]
  'row-clicked': TableRowEvent<Items>
  'row-dblclicked': TableRowEvent<Items>
  'row-contextmenu': TableRowEvent<Items>
  'row-hovered': TableRowEvent<Items>
  'row-unhovered': TableRowEvent<Items>
  'row-middle-clicked': TableRowEvent<Items>
}>()

const slots = defineSlots<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'table-colgroup'?: (props: {fields: typeof computedFields.value}) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'thead-top'?: (props: {columns: number; fields: typeof computedFields.value}) => any
  [key: `head(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: (typeof computedFields.value)[0]
    isFoot: false
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  'thead-sub'?: (
    props: {
      items: readonly Items[]
      fields: typeof computedFields.value
      field: (typeof computedFields.value)[0]
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => any
  'custom-body'?: (props: {
    fields: typeof computedFields.value
    items: readonly Items[]
    columns: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'top-row'?: (props: {columns: number; fields: typeof computedFields.value}) => any
  [key: `cell(${string})`]: (props: {
    value: unknown
    unformatted: unknown
    index: number
    item: Items
    field: (typeof computedFields.value)[0]
    items: readonly Items[]
    toggleDetails: () => void
    detailsShowing: boolean
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  'row-details'?: (props: {
    item: Items
    toggleDetails: () => void
    fields: typeof computedFields.value
    index: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'bottom-row'?: (props: {columns: number; fields: typeof computedFields.value}) => any
  [key: `foot(${string})`]: (props: {
    label: string | undefined
    column: LiteralUnion<keyof Items>
    field: (typeof computedFields.value)[0]
    isFoot: true
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  'custom-foot'?: (props: {
    fields: typeof computedFields.value
    items: readonly Items[]
    columns: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  'table-caption'?: (props: Record<string, never>) => any
}>()

const computedId = useId(() => props.id)

const generateDetailsItem = (item: TableItem): [object, boolean | undefined] => [
  item,
  item._showDetails,
]
const detailsMap = ref(new WeakMap<object, boolean | undefined>())
watch(
  () => props.items,
  (items) => {
    items.forEach((item) => {
      if (!isTableItem(item)) return
      detailsMap.value.set(...generateDetailsItem(item))
    })
  },
  {deep: true, immediate: true}
)

const computedTableClasses = computed(() => [
  props.tableClass,
  {
    [`align-${props.align}`]: props.align !== undefined,
  },
])

const computedFields = computed<(TableField<Items> & {_noHeader?: true})[]>(() => {
  if (!props.fields.length && props.items.length) {
    const [firstItem] = props.items
    if (firstItem && (isTableItem(firstItem) || Array.isArray(firstItem))) {
      return Object.keys(firstItem).map((k) => {
        const label = startCase(k)
        return {
          key: k,
          label,
          tdAttr: getDataLabelAttr(props, label),
        }
      })
    }
    // The items are primitives, so we just return a single empty field
    // No header will be shown, as we don't know what to show
    return [{key: '', _noHeader: true}]
  }

  return props.fields.map((f) => {
    if (isTableField(f)) {
      const label = f.label ?? startCase(f.key as string)
      return {
        ...(f as TableField<Items>),
        tdAttr: {...getDataLabelAttr(props, label), ...f.tdAttr},
      }
    }
    const label = startCase(f as string)
    return {
      key: f as string,
      label,
      tdAttr: getDataLabelAttr(props, label),
    }
  })
})
const computedFieldsTotal = computed(() => computedFields.value.length)
const showComputedHeaders = computed(() => {
  // We only hide the header if all fields have _noHeader set to true. Which would be our doing
  // This usually happens under a circumstance of displaying an array of primitives
  // Under any other circumstance, I'm not sure how this would apply
  if (computedFieldsTotal.value > 0 && computedFields.value.every((el) => el._noHeader === true))
    return false
  return true
})

const footerProps = computed(() => ({
  variant: props.footVariant ?? props.headVariant,
  class: props.tfootClass ?? props.theadClass,
}))

const calculatedFooterSlot = (key: LiteralUnion<keyof Items>): keyof typeof slots =>
  slots[`foot(${String(key)})`]
    ? `foot(${String(key)})`
    : slots['foot()']
      ? 'foot()'
      : slots[`head(${String(key)})`]
        ? `head(${String(key)})`
        : 'head()'

const itemAttributes = (item: Items, fieldKey: string, attr?: unknown) => {
  const val = get(item, fieldKey)
  return attr && typeof attr === 'function' ? attr(val, fieldKey, item) : attr
}

const callThAttr = (item: Items | null, field: TableField<Items>, type: TableRowThead) => {
  const fieldKey = String(field.key)
  const val = get(item, fieldKey)
  return field.thAttr && typeof field.thAttr === 'function'
    ? field.thAttr(val, fieldKey, item, type)
    : field.thAttr
}

const headerClicked = (field: TableField<Items>, event: Readonly<MouseEvent>, isFooter = false) => {
  emit('head-clicked', field.key as string, field, event, isFooter)
}

const toggleRowDetails = (tr: Items) => {
  if (isTableItem(tr)) {
    const prevValue = detailsMap.value.get(tr)
    detailsMap.value.set(tr, !prevValue)
    tr._showDetails = !prevValue
  }
}

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

const getFieldRowClasses = (field: Readonly<TableField>, tr: Items) => {
  const val = get(tr, String(field.key))
  return [
    field.class,
    typeof field.tdClass === 'function' ? field.tdClass(val, String(field.key), tr) : field.tdClass,
    (isTableItem(tr) ? tr._cellVariants?.[field.key as string] : false)
      ? `table-${(tr as TableItem)._cellVariants?.[field.key as string]}`
      : null,
    {
      'b-table-sticky-column': field.stickyColumn,
    },
  ]
}

const handleMiddleClick = (item: Items, itemIndex: number, event: MouseEvent) => {
  if (event.button === 1 && !filterEvent(event)) {
    emit('row-middle-clicked', item, itemIndex, event)
  }
}
const callTbodyTrAttrs = (item: Items | null, type: TableRowType) =>
  props.tbodyTrAttrs
    ? typeof props.tbodyTrAttrs === 'function'
      ? props.tbodyTrAttrs(item, type)
      : props.tbodyTrAttrs
    : null

const getRowClasses = (item: Items | null, type: TableRowType) =>
  props.tbodyTrClass
    ? typeof props.tbodyTrClass === 'function'
      ? props.tbodyTrClass(item, type)
      : props.tbodyTrClass
    : null

const generateTableRowId = (primaryKeyValue: string) =>
  `${computedId.value}__row_${primaryKeyValue}`

const computedSimpleProps = computed(() => ({
  ...pick(props, btableSimpleProps),
  tableClass: computedTableClasses.value,
  id: computedId.value,
}))
</script>
