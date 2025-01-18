# Tables

<PageHeader>

For displaying tabular data, `BTable` supports pagination, filtering, sorting, custom rendering, various style options, events, and asynchronous data. For simple display of tabular data without all the fancy features, BootstrapVueNext provides two lightweight alternative components [`BTableLite`](light-weight-tables) and [`BTableSimple`](simple-tables).

</PageHeader>

## Basic Usage

<<< DEMO ./demo/TableOverview.vue

## Items (record data)

`items` is the table data in array format, where each record (row) data are keyed objects. Example
format:

<<< FRAGMENT ./demo/TableItems.ts#snippet{ts}

`<BTable>` automatically samples the first row to extract field names (the keys in the record
data). Field names are automatically "humanized" by converting `kebab-case`, `snake_case`, and
`camelCase` to individual words and capitalizes each word. Example conversions:

- `first_name` becomes `First Name`
- `last-name` becomes `Last Name`
- `age` becomes `Age`
- `YEAR` remains `YEAR`
- `isActive` becomes `Is Active`

These titles will be displayed in the table header, in the order they appear in the **first** record
of data. See the [Fields](#fields-column-definitions) section below for customizing how field
headings appear.

::: info NOTE
Field order is not guaranteed. Fields will typically appear in the order they were defined
in the first row, but this may not always be the case depending on the version of browser in use.
See section [Fields (column definitions)](#fields-column-definitions) below to see how to guarantee
the order of fields, and to override the headings generated.
:::

Record data may also have additional special reserved name keys for colorizing rows and individual
cells (variants), and for triggering additional row detail. The type [TableItem](/docs/types#tableitem)
defines the supported optional item record modifier properties
(make sure your field keys do not conflict with these names):

| Property        | Type                                   | Description                                                                                                                                                                                                                                                |
| --------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `_cellVariants` | Partial<Record<keyof T, ColorVariant>> | Bootstrap contextual state applied to individual cells. Keyed by field (See the [Color Variants](/docs/reference/color-variants) for supported values). These variants map to classes `table-${variant}` or `bg-${variant}` (when the `dark` prop is set). |
| `_rowVariant`   | ColorVariant                           | Bootstrap contextual state applied to the entire row (See the [Color Variants](/docs/reference/color-variants) for supported values). These variants map to classes `table-${variant}` or `bg-${variant}` (when the `dark` prop is set)                    |
| `_showDetails`  | boolean                                | Used to trigger the display of the `row-details` scoped slot. See section [Row details support](#row-details-support) below for additional information                                                                                                     |

### Example: Using variants for table cells

<<< DEMO ./demo/TableCellVariants.vue

`items` can also be a reference to a _provider_ function, which returns an `Array` of items data.
Provider functions can also be asynchronous:

- By returning `null` (or `undefined`) and calling a callback, when the data is ready, with the data
  array as the only argument to the callback,
- By returning a `Promise` that resolves to an array.

See the ["Using Items Provider functions"](#using-items-provider-functions) section below for more
details.

### Table item notes and warnings

- Avoid manipulating record data in place, as changes to the underlying items data will cause either
  the row or entire table to be re-rendered. See [Primary Key](#primary-key), below, for ways to
  minimize Vue's re-rendering of rows.
- `items` array records should be a simple object and **must** avoid placing data that may have
  circular references in the values within a row. `<BTable>` serializes the row data into strings
  for sorting and filtering, and circular references will cause stack overflows to occur and your
  app to crash!

## Fields (column definitions)

The `fields` prop is used to customize the table columns headings, and in which order the columns of
data are displayed. The field object keys (i.e. `age` or `first_name` as shown below) are used to
extract the value from each item (record) row, and to provide additional features such as enabling
[sorting](#sorting) on the column, etc.

Fields can be provided as a _simple array_ or an _array of objects_. **Internally the fields data
will be normalized into the _array of objects_ format**. Events or slots that include the column
`field` data will be in the normalized field object format (array of objects for `fields`, or an
object for an individual `field`).

### Fields as a simple array

Fields can be a simple array, for defining the order of the columns, and which columns to display:

<<< DEMO ./demo/TableFieldArray.vue

### Fields as an array of objects

Fields can be a an array of objects, providing additional control over the fields (such as sorting,
formatting, etc.). Only columns (keys) that appear in the fields array will be shown:

<<< DEMO ./demo/TableFieldObjects.vue

### Field Definition Reference

The following field properties (defined as [TableField](/docs/types#tableitem)) are recognized:

| Property            | Type                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`               | `LiteralUnion<keyof T>`                                                                            | The key for selecting data from the record in the items array. Required when setting the `fields` via an array of objects. The `key` is also used for generating the [custom data rendering](#custom-data-rendering) and [custom header and footer](#header-and-footer-custom-rendering-via-scoped-slots) slot names.                                                                          |
| `label`             | `string`                                                                                           | Appears in the columns table header (and footer if `foot-clone` is set). Defaults to the field's key (in humanized format) if not provided. It's possible to use empty labels by assigning an empty string `""` but be sure you also set `headerTitle` to provide non-sighted users a hint about the column contents.                                                                          |
| `headerTitle`       | `string`                                                                                           | Text to place on the fields header `<th>` attribute `title`. Defaults to no `title` attribute.                                                                                                                                                                                                                                                                                                 |
| `headerAbbr`        | `string`                                                                                           | Text to place on the fields header `<th>` attribute `abbr`. Set this to the unabbreviated version of the label (or title) if label (or title) is an abbreviation. Defaults to no `abbr` attribute.                                                                                                                                                                                             |
| `class`             | `ClassValue`                                                                                       | Class name (or array of class names) to add to `<th>` **and** `<td>` in the column.                                                                                                                                                                                                                                                                                                            |
| `formatter`         | `TableFieldFormatter<T>`                                                                           | A formatter callback function can be used instead of (or in conjunction with) scoped field slots. The formatter will be called with the syntax `formatter<T>(value: unknown, key: string, item: T)`. Refer to [Custom Data Rendering](#custom-data-rendering) for more details.                                                                                                                |
| `sortable`          | `boolean`                                                                                          | Enable sorting on this column. Refer to the [Sorting](#sorting) Section for more details.                                                                                                                                                                                                                                                                                                      |
| `sortDirection`     | `string`                                                                                           | Set the initial sort direction on this column when it becomes sorted. Refer to the [Change initial sort direction](#change-initial-sort-direction) Section for more details.<NotYetImplemented/>                                                                                                                                                                                               |
| `sortByFormatted`   | `boolean \| TableFieldFormatter<T>`                                                                | Sort the column by the result of the field's `formatter` callback function when set to `true`. Default is `false`. Boolean has no effect if the field does not have a `formatter`. Optionally accepts a formatter function _reference_ to format the value for sorting purposes only. Refer to the [Sorting](#sorting) Section for more details.                                               |
| `filterByFormatted` | `boolean \| TableFieldFormatter<T>`                                                                | Filter the column by the result of the field's `formatter` callback function when set to `true`. Default is `false`. Boolean has no effect if the field does not have a `formatter`. Optionally accepts a formatter function _reference_ to format the value for filtering purposes only. Refer to the [Filtering](#filtering) section for more details.                                       |
| `tdClass`           | `TableStrictClassValue \| ((value: unknown, key: string, item: T) => TableStrictClassValue)`       | Class name (or array of class names) to add to `<tbody>` data `<td>` cells in the column. If custom classes per cell are required, a callback function can be specified instead. See the typescript definition for accepted parameters and return types.                                                                                                                                       |
| `thClass`           | `ClassValue`                                                                                       | Class name (or array of class names) to add to this field's `<thead>`/`<tfoot>` heading `<th>` cell.                                                                                                                                                                                                                                                                                           |
| `thStyle`           | `StyleValue`                                                                                       | CSS styles you would like to apply to the table `<thead>`/`<tfoot>` field `<th>` cell.                                                                                                                                                                                                                                                                                                         |
| `variant`           | `ColorVariant \| null`                                                                             | Apply contextual class to all the `<th>` **and** `<td>` in the column.                                                                                                                                                                                                                                                                                                                         |
| `tdAttr`            | `AttrsValue \| ((value: unknown, key: string, item: T) => AttrsValue)`                             | Object representing additional attributes to apply to the `<tbody>` field `<td>` cell. If custom attributes per cell are required, a callback function can be specified instead. See the typescript definition for accepted parameters and return types.                                                                                                                                       |
| `thAttr`            | `AttrsValue \| ((value: unknown, key: string, item: T \| null, type: TableRowThead) => AttrsValue` | Object representing additional attributes to apply to the field's `<thead>`/`<tfoot>` heading `<th>` cell. If the field's `isRowHeader` is set to `true`, the attributes will also apply to the `<tbody>` field `<th>` cell. If custom attributes per cell are required, a callback function can be specified instead. See the typescript definition for accepted parameters and return types. |
| `isRowHeader`       | `boolean`                                                                                          | When set to `true`, the field's item data cell will be rendered with `<th>` rather than the default of `<td>`.                                                                                                                                                                                                                                                                                 |
| `stickyColumn`      | `boolean`                                                                                          | When set to `true`, and the table in [responsive](#responsive-tables) mode or has [sticky headers](#sticky-headers), will cause the column to become fixed to the left when the table's horizontal scrollbar is scrolled. See [Sticky columns](#sticky-columns) for more details                                                                                                               |

**Notes:**

- Field properties, if not present, default to `null` (falsey) unless otherwise stated above.
- `class`, `thClass`, `tdClass` etc. will not work with classes that are defined in scoped CSS,
  unless you are using Vue's
  [Deep selector](https://vuejs.org/api/sfc-css-features.html#deep-selectors).
- For information on the syntax supported by `thStyle`, see
  [Class and Style Bindings](https://vuejs.org/guide/essentials/class-and-style.html#Binding-Inline-Styles)
  in the Vue.js guide.
- Any additional properties added to the field definition objects will be left intact - so you can
  access them via the named scoped slots for custom data, header, and footer rendering.

For information and usage about scoped slots and formatters, refer to the
[Custom Data Rendering](#custom-data-rendering) section below.

Feel free to mix and match simple array and object array together:

<<< FRAGMENT ./demo/TableFields.ts#snippet{ts}

## Primary Key

`<BTable>` provides an additional prop `primary-key`, which you can use to identify the _name_ of
the field key that _uniquely_ identifies the row.

The value specified by the primary column key **must be** either a `string` or `number`, and **must
be unique** across all rows in the table.

The primary key column does not need to appear in the displayed fields.

### Table row ID generation

When provided, the `primary-key` will generate a unique ID for each item row `<tr>` element. The ID
will be in the format of `{table-id}__row_{primary-key-value}`, where `{table-id}` is the unique ID
of the `<BTable>` and `{primary-key-value}` is the value of the item's field value for the field
specified by `primary-key`.

### Table render and transition optimization

The `primary-key` is also used by `<BTable>` to help Vue optimize the rendering of table rows.
Internally, the value of the field key specified by the `primary-key` prop is used as the Vue `:key`
value for each rendered item row `<tr>` element.

If you are seeing rendering issue (i.e. tooltips hiding or unexpected subcomponent re-usage when
item data changes or data is sorted/filtered/edited) or table row transitions are not working,
setting the `primary-key` prop (if you have a unique identifier per row) can alleviate these issues.

Specifying the `primary-key` column is handy if you are using 3rd party table transitions or drag
and drop plugins, as they rely on having a consistent and unique per row `:key` value.

If `primary-key` is not provided, `<BTable>` will auto-generate keys based on the displayed row's
index number (i.e. position in the _displayed_ table rows). This may cause GUI issues such as sub
components/elements that are rendering with previous results (i.e. being re-used by Vue's render
patch optimization routines). Specifying a `primary-key` column can alleviate this issue (or you can
place a unique `:key` on your element/components in your custom formatted field slots).

Refer to the [Table body transition support](#table-body-transition-support) section for additional
details.

## Table Style Options

### Table styling

`<BTable>` provides several props to alter the style of the table:

| prop                 | Type                  | Description                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `striped`            | boolean               | Add zebra-striping to the table rows within the `<tbody>`                                                                                                                                                                                                                                                                                                                        |
| `striped-columns`    | boolean               | Add zebra-striping to the table colums within the `<tbody>`                                                                                                                                                                                                                                                                                                                      |
| `bordered`           | boolean               | For borders on all sides of the table and cells.                                                                                                                                                                                                                                                                                                                                 |
| `borderless`         | boolean               | removes inner borders from table.                                                                                                                                                                                                                                                                                                                                                |
| `outlined`           | boolean               | For a thin border on all sides of the table. Has no effect if `bordered` is set.                                                                                                                                                                                                                                                                                                 |
| `small`              | boolean               | To make tables more compact by cutting cell padding in half.                                                                                                                                                                                                                                                                                                                     |
| `hover`              | boolean               | To enable a hover highlighting state on table rows within a `<tbody>`                                                                                                                                                                                                                                                                                                            |
| `dark`               | boolean               | Invert the colors — with light text on dark backgrounds (equivalent to Bootstrap v5 class `.table-dark`)                                                                                                                                                                                                                                                                         |
| `fixed`              | boolean               | Generate a table with equal fixed-width columns (`table-layout: fixed;`) <NotYetImplemented/>                                                                                                                                                                                                                                                                                    |
| `responsive`         | boolean \| Breakpoint | Generate a responsive table to make it scroll horizontally. Set to `true` for an always responsive table, or set it to one of the [breakpoints](/docs/types#breakpoint) `'sm'`, `'md'`, `'lg'`, `'xl'` or `'xxl'` to make the table responsive (horizontally scroll) only on screens smaller than the breakpoint. See [Responsive tables](#responsive-tables) below for details. |
| `sticky-header`      | boolean \| Numberish  | Generates a vertically scrollable table with sticky headers. Set to `true` to enable sticky headers (default table max-height of `300px`), or set it to a string containing a height (with CSS units) to specify a maximum height other than `300px`. See the [Sticky header](#sticky-headers) section below for details.                                                        |
| `stacked`            | boolean \| Breakpoint | Generate a responsive stacked table. Set to `true` for an always stacked table, or set it to one of the [breakpoints](/docs/types#breakpoint) `'sm'`, `'md'`, `'lg'`, `'xl'` or `'xxl'` to make the table visually stacked only on screens smaller than the breakpoint. See [Stacked tables](#stacked-tables) below for details.                                                 |
| `caption-top`        | boolean \| Numberish  | If the table has a caption, and this prop is set to `true`, the caption will be visually placed above the table. If `false` (the default), the caption will be visually placed below the table.                                                                                                                                                                                  |
| `variant`            | ColorVariant \| null  | Give the table an overall theme color variant.                                                                                                                                                                                                                                                                                                                                   |
| `head-variant`       | ColorVariant \| null  | Make the table head a theme color different from the table                                                                                                                                                                                                                                                                                                                       |
| `foot-row-variant`   | ColorVariant \| null  | Make the table foot a theme color different from the table. If not set, `head-variant` will be used. Has no effect if `foot-clone` is not set                                                                                                                                                                                                                                    |
| `head-row-variant`   | ColorVariant \| null  | Make the only the `<tr>` part of the `<head>` a specific theme color                                                                                                                                                                                                                                                                                                             |
| `foot-variant`       | ColorVariant \| null  | Make the only the `<tr>` part of the `<foot>` a specific theme color. If not set, `head-row-variant` will be used. Has no effect if `foot-clone` is not set                                                                                                                                                                                                                      |
| `foot-clone`         | boolean               | Turns on the table footer, and defaults with the same contents a the table header                                                                                                                                                                                                                                                                                                |
| `no-footer-sorting`  | boolean               | When `foot-clone` is true and the table is sortable, disables the sorting icons and click behaviour on the footer heading cells. Refer to the [Sorting](#sorting) section below for more details. <NotYetImplemented/>                                                                                                                                                           |
| `no-border-collapse` | Boolean               | Disables the default of collapsing of the table borders. Mainly for use with [sticky headers](#sticky-headers) and/or [sticky columns](#sticky-columns). Will cause the appearance of double borders in some situations. <NotYetImplemented/>                                                                                                                                    |

::: info NOTE
The table style options `fixed`, `stacked`, `no-border-collapse`, sticky
headers, sticky columns and the table sorting feature, all require BootstrapVueNext's custom CSS.
:::

<<< DEMO ./demo/TableBasicStyles.vue

### Row styling and attributes

You can also style every row using the `tbody-tr-class` prop, and optionally supply additional attributes via the `tbody-tr-attr` prop:

| Property         | Type                                                                                            | Description                                         |
| ---------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| `tbody-tr-class` | `((item: Items \| null, type: TableRowType) => TableStrictClassValue) \| TableStrictClassValue` | Classes to be applied to every row on the table.    |
| `tbody-tr-attr`  | `((item: Items \| null, type: TableRowType) => AttrsValue) \| AttrsValue`                       | Attributes to be applied to every row on the table. |

When passing a function reference to `tbody-tr-class` or `tbody-tr-attr`, the function's arguments
will be as follows:

- `item` - The item record data associated with the row. For rows that are not associated with an
  item record, this value will be `null` or `undefined`
- `type` - The type of row being rendered ([TableRowType](/docs/types#tablefield)). `'row'` for an item row, `'row-details'` for an item
  details row, `'row-top'` for the fixed row top slot, `'row-bottom'` for the fixed row bottom slot,
  or `'table-busy'` for the table busy slot.

<<< DEMO ./demo/TableRowStyles.vue

### Responsive tables

### Stacked tables

### Table caption

### Table colgroup

### Table busy state

## Custom data rendering

To Be Completed

## Header and Footer custom rendering via scoped slots

To Be Completed

## Custom empty and emptyfiltered rendering via slots

To Be Completed

## Advanced Features

To Be Completed

### Sticky headers

### Sticky columns

### Row details support

### Row select support

### Table body transition support

### `v-model` binding

## Sorting

As mentioned in the [Fields](#fields) section above, you can make columns
sortable in `<BTable>`. Clicking on a sortable column header will sort the column in ascending
direction (smallest first), while clicking on it again will switch the direction of sorting to
descending (largest first). Clicking on it a third time will stop sorting on the column. For
single column sorting (e.g. `multisort===false`) clicking on a differnt sortable column header will
sort that column in ascending order and clear the sort order for the previously sorted column.

You can control which column is pre-sorted and the order of sorting (ascending or descending). To
pre-specify the column to be sorted use the `sortBy` model. For single column sorting (e.g. `multisort===false`)
`sortBy` should be an array containing a single `BTableSortBy` object.

<<< FRAGMENT ./demo/TableSortBy.ts#snippet{ts}

- **Ascending**: Items are sorted lowest to highest (i.e. `A` to `Z`) and will be displayed with the
  lowest value in the first row with progressively higher values in the following rows.
- **Descending**: Items are sorted highest to lowest (i.e. `Z` to `A`) and will be displayed with
  the highest value in the first row with progressively lower values in the following rows.

By default the comparer function does a `numeric localeCompare`. If one wishes to change this, use a custom comparer function with that `BTableSortBy` element.

To prevent the table from wiping out the comparer function, internally it will set the `order` key to `undefined`, instead of just removing the element from the `sortBy` array. i.e. `:sort-by="[]"` & `:sort-by="[key: 'someKey', order: undefined]"` behave identically. Naturally if this value is given to a server, orders of undefined should be handled.

<<< DEMO ./demo/TableSort.vue

`sorbBy` is a [named model](https://vuejs.org/guide/components/v-model.html#multiple-v-model-bindings)
so it can be bound to an object that will be updated with the current sort state when the user changes
sorting by clicking the headers.

<<< DEMO ./demo/TableSortBy.vue

Tables can be sorted by multiple columns. Programmaticly, this can be done by adding more entries
to the `sortBy` array. From the user inteface, multi-sort works as follows:

- Clicking on a sortable header that isn't currently sorted adds it as `ascending` to the end of the sortBy list
- Clicking on a sortable header that is currently sorted as ascending makes it **descending**, but leaves it in the same order in the `sortBy` list
- Clicking on a sortable header that is currently sorted as descending will set the order to undefined. If `must-sort` is `true` OR if `mustSort` is an array that contains that columns `key`, it will skip to be `ascending`

<<< DEMO ./demo/TableSortByMulti.vue

### Change initial sort direction

## Filtering

To Be Completed

## Pagination

To Be Completed

## Using items provider functions

To Be Completed

## Light-weight tables

To Be Completed

## Simple tables

The `BTableSimple` component gives the user complete control over the rendering of the table content, while providing basic Bootstrap v5 table styling. `BTableSimple` is a wrapper component around the `<table>` element. Inside the component, via the default slot, you can use any or all of the BootstrapVueNext table helper components: `BThead`, `BTfoot`, `BTbody`, `BTr`, `BTh`, `BTd`, and the HTML5 elements `<caption>`, `<colgroup>` and `<col>`. Contrary to the component's name, one can create simple or complex table layouts with `BTableSimple`.

`BTableSimple` provides basic styling options via props: striped, bordered, borderless, outlined, small, hover, dark, fixed, responsive and sticky-header. Note that stacked mode is available but requires some additional markup to generate the cell headings, as described in the Simple tables and stacked mode section below. Sticky columns are also supported, but also require a bit of additional markup to specify which columns are to be sticky. See below for more information on using sticky columns.

Since b-table-simple is just a wrapper component, of which you will need to render content inside, it does not provide any of the advanced features of `BTable` (i.e. row events, head events, sorting, pagination, filtering, foot-clone, items, fields, etc.).

<<< DEMO ./demo/TableSimpleOverview.vue#template{vue-html}

When in responsive or sticky-header mode, the `<table>` element is wrapped inside a `<div>` element. If you need to apply additional classes or attributes to the `<table>` element, use the table-classes and table-attrs, respectively.

### Simple tables and stacked mode

A bit of additional markup is required on your `BTableSimple` body cells when the table is in stacked mode. Specifically, BootstrapVueNext uses a special data attribute to create the cell's heading, of which you can supply to `BTd` or `BTh` via the stacked-heading prop. Only plain strings are supported (not HTML markup), as we use the pseudo element ::before and css content property.

Here is the same table as above, set to be always stacked, which has the extra markup to handle stacked mode (specifically for generating the cell headings):

<<< DEMO ./demo/TableSimpleStacked.vue#template{vue-html}

Like `BTable` and `BTableLite`, table headers (`<thead>`) and footers (`<tfoot>`) are visually hidden when the table is visually stacked. If you need a header or footer, you can do so by creating an extra `BTr` inside of the `BTbody` component (or in a second `BTbody` component), and set a role of columnheader on the child `BTh` cells, and use Bootstrap v5 responsive display utility classes to hide the extra row (or `BTbody`) above a certain breakpoint when the table is no longer visually stacked (the breakpoint should match the stacked table breakpoint you have set), i.e. `<BTr class="d-md-none">` would hide the row on medium and wider screens, while `<BTbody class="d-md-none">` would hide the row group on medium and wider screens.

::: info NOTE
Note: stacked mode with `BTableSimple` requires that you use the BootstrapVueNext [table helper components](#table-helper-components).
Use of the regular `<tbody>`, `<tr>`, `<td>` and `<th>` element tags will not work as expected, nor will they automatically apply any of the required accessibility attributes.
:::

### Simple tables and sticky columns

Sticky columns are supported with `BTableSimple`, but you will need to set the sticky-column prop on each table cell (in the thead, tbody, and tfoot row groups) in the column that is to be sticky. For example:

<<< FRAGMENT ./demo/TableSimpleSticky.vue#template{vue-html}

As with `BTable` and `BTableLite`, sticky columns are not supported when the stacked prop is set on `BTableSimple`.

## Table Helper Components

To Be Completed

## Complete Example

<<< DEMO ./demo/TableComplete.vue

<ComponentReference :data="data" />

<script lang="ts">
import {data} from '../../data/components/table.data'

export default {
  setup() {
    return {data}
  }
}
</script>
