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
</template>

<script setup lang="ts">
// import type {Breakpoint} from '../../types'
import {computed} from 'vue'
import type {Booleanish, ColorVariant, TableField, TableItem, VerticalAlign} from '../../types'
import {resolveBooleanish} from '../../utils'
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
})

const captionTopBoolean = computed(() => resolveBooleanish(props.captionTop))
const borderlessBoolean = computed(() => resolveBooleanish(props.borderless))
const borderedBoolean = computed(() => resolveBooleanish(props.bordered))
const darkBoolean = computed(() => resolveBooleanish(props.dark))
const footCloneBoolean = computed(() => resolveBooleanish(props.footClone))
const hoverBoolean = computed(() => resolveBooleanish(props.hover))
const smallBoolean = computed(() => resolveBooleanish(props.small))
const stripedBoolean = computed(() => resolveBooleanish(props.striped))

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

const responsiveClasses = computed(() => [
  {
    'table-responsive': typeof props.responsive === 'boolean' && props.responsive,
    [`table-responsive-${props.responsive}`]: typeof props.responsive === 'string',
  },
])
</script>
