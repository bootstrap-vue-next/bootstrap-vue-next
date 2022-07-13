<template>
  <div v-if="responsive" :class="responsiveClasses">
    <table :class="classes">
      <thead>
        <slot v-if="$slots['thead-top']" name="thead-top" />
        <tr>
          <th
            v-for="field in computedFields"
            :key="field.key"
            scope="col"
            :class="[field.class, field.thClass, field.variant ? `table-${field.variant}` : '']"
            :title="field.headerTitle"
            :abbr="field.headerAbbr"
            :style="field.thStyle"
            v-bind="field.thAttr"
          >
            <slot
              v-if="$slots['head(' + field.key + ')']"
              :name="'head(' + field.key + ')'"
              :label="field.label"
            />
            <template v-else>{{ field.label }}</template>
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
        <tr v-for="tr in items" :class="[tr._rowVariant ? `table-${tr._rowVariant}` : null]">
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
      <tfoot v-if="footClone">
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
  </div>
  <table v-else :class="classes">
    <thead>
      <slot v-if="$slots['thead-top']" name="thead-top" />
      <tr>
        <th
          v-for="field in computedFields"
          :key="field.key"
          scope="col"
          :class="[field.class, field.thClass, field.variant ? `table-${field.variant}` : '']"
          :title="field.headerTitle"
          :abbr="field.headerAbbr"
          :style="field.thStyle"
          v-bind="field.thAttr"
        >
          <slot
            v-if="$slots['head(' + field.key + ')']"
            :name="'head(' + field.key + ')'"
            :label="field.label"
          />
          <template v-else>{{ field.label }}</template>
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
      <tr v-for="tr in items" :class="[tr._rowVariant ? `table-${tr._rowVariant}` : null]">
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
    <tfoot v-if="footClone">
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
</template>

<script setup lang="ts">
import {computed, PropType} from 'vue'
import {Breakpoint, ColorVariant, TableField, TableItem, VerticalAlign} from '../../types'
import useItemHelper from './itemHelper'

const props = defineProps({
  align: {type: String as PropType<VerticalAlign>},
  caption: {type: String},
  captionTop: {type: Boolean, default: false},
  borderless: {type: Boolean, default: false},
  bordered: {type: Boolean, default: false},
  borderVariant: {type: String as PropType<ColorVariant>},
  dark: {type: Boolean, default: false},
  fields: {type: Array as PropType<TableField[]>, default: () => []},
  footClone: {type: Boolean, default: false},
  hover: {type: Boolean, default: false},
  items: {type: Array as PropType<TableItem[]>, default: () => []},
  responsive: {type: [Boolean, String] as PropType<boolean | Breakpoint>, default: false},
  small: {type: Boolean, default: false},
  striped: {type: Boolean, default: false},
  variant: {type: String as PropType<ColorVariant>},
})
const classes = computed(() => [
  'table',
  {
    [`align-${props.align}`]: props.align,
    [`table-${props.variant}`]: props.variant,
    'table-striped': props.striped,
    'table-hover': props.hover,
    'table-dark': props.dark,
    'table-bordered': props.bordered,
    [`border-${props.borderVariant}`]: props.borderVariant,
    'table-borderless': props.borderless,
    'table-sm': props.small,
    'caption-top': props.captionTop,
  },
])

const itemHelper = useItemHelper()
const computedFields = computed(() => itemHelper.normaliseFields(props.fields, props.items))

const responsiveClasses = computed(() => [
  {
    'table-responsive': typeof props.responsive === 'boolean' && props.responsive,
    [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
  },
])
</script>
