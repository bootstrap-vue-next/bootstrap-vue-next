<template>
  <BTableContainer :responsive="responsive" :responsive-classes="responsiveClasses">
    <table :class="classes">
      <thead>
        <slot v-if="$slots['thead-top']" name="thead-top" />
        <tr>
          <th
            v-for="field in computedFields"
            :key="field.key"
            scope="col"
            :class="[
              field.class,
              field.thClass,
              field.variant ? `table-${field.variant}` : '',
              {'b-table-sortable-column': isSortable && field.sortable},
            ]"
            :title="field.headerTitle"
            :abbr="field.headerAbbr"
            :style="field.thStyle"
            v-bind="field.thAttr"
            @click="columnClicked(field)"
          >
            <div class="d-flex flex-nowrap align-items-center gap-1">
              <span
                v-if="isSortable && field.sortable && field.key == sortBy"
                class="text-muted small"
              >
                <span v-show="sortDesc == true">▼</span>
                <span v-show="sortDesc == false">▲</span>
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
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <tr
          v-for="tr in computedItems"
          :class="[tr._rowVariant ? `table-${tr._rowVariant}` : null]"
        >
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
import {computed, toRef} from 'vue'
import {useBooleanish} from '../../composables'
import type {Booleanish, ColorVariant, TableField, TableItem, VerticalAlign} from '../../types'
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
})

const emits = defineEmits(['update:sortBy', 'update:sortDesc', 'sorted'])

const captionTopBoolean = useBooleanish(toRef(props, 'captionTop'))
const borderlessBoolean = useBooleanish(toRef(props, 'borderless'))
const borderedBoolean = useBooleanish(toRef(props, 'bordered'))
const darkBoolean = useBooleanish(toRef(props, 'dark'))
const footCloneBoolean = useBooleanish(toRef(props, 'footClone'))
const hoverBoolean = useBooleanish(toRef(props, 'hover'))
const smallBoolean = useBooleanish(toRef(props, 'small'))
const stripedBoolean = useBooleanish(toRef(props, 'striped'))

const classes = computed(() => [
  'table',
  {
    [`align-${props.align}`]: props.align,
    [`table-${props.variant}`]: props.variant,
    'table-striped': stripedBoolean.value,
    'table-hover': hoverBoolean.value,
    'table-dark': darkBoolean.value,
    'table-bordered': borderedBoolean.value,
    [`border-${props.borderVariant}`]: props.borderVariant,
    'table-borderless': borderlessBoolean.value,
    'table-sm': smallBoolean.value,
    'caption-top': captionTopBoolean.value,
  },
])

const itemHelper = useItemHelper()
const computedFields = computed(() => itemHelper.normaliseFields(props.fields, props.items))
const computedItems = computed(() =>
  props.sortInternal
    ? itemHelper.sortItems(props.fields, props.items, {key: props.sortBy, desc: props.sortDesc})
    : props.items
)

const responsiveClasses = computed(() => [
  {
    'table-responsive': typeof props.responsive === 'boolean' && props.responsive,
    [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
  },
])

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
    emits('sorted', props.sortBy, props.sortDesc)
  }
}
</script>
