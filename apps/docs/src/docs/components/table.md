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

A provider function can be provided instead of setting `items` to return items syncronously or asyncronously.
See the ["Using Items Provider functions"](#using-items-provider-functions) section below for more details.

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
| `scope`             | `TableThScope`                                                                                     | The scope attribute for the field's `<th>` element. This is used to specify the relationship of the header cell to the data cells. Valid values are `row`, `col`, `rowgroup`, and `colgroup`. Defaults to `colgroup` if `colspan` specified, `rowgroup` if `rowspan` specified, otherwise `col`.                                                                                               |

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

Responsive tables allow tables to be scrolled horizontally with ease. Make any table responsive
across all viewports by setting the prop `responsive` to `true`. Or, pick a maximum breakpoint with
which to have a responsive table up to by setting the prop `responsive` to one of the breakpoint
values: `sm`, `md`, `lg`, or `xl`.

<<< DEMO ./demo/TableResponsive.vue

**Responsive table notes:**

- _Possible vertical clipping/truncation_. Responsive tables make use of `overflow-y: hidden`, which
  clips off any content that goes beyond the bottom or top edges of the table. In particular, this
  may clip off dropdown menus and other third-party widgets.
- Using props `responsive` and `fixed` together will **not** work as expected. Fixed table layout
  uses the first row (table header in this case) to compute the width required by each column (and
  the overall table width) to fit within the width of the parent container &mdash; without taking
  cells in the `<tbody>` into consideration &mdash; resulting in table that may not be responsive.
  To get around this limitation, you would need to specify widths for the columns (or certain
  columns) via one of the following methods:
  - Use `<col>` elements within the [`table-colgroup` slot](#table-colgroup) that have widths set
    (e.g. `<col style="width: 20rem">`), or
  - Wrap header cells in `<div>` elements, via the use of
    [custom header rendering](#header-and-footer-custom-rendering-via-scoped-slots), which have a
    minimum width set on them, or
  - Use the `thStyle` property of the [field definition object](#field-definition-reference) to set
    a width for the column(s), or
  - Use custom CSS to define classes to apply to the columns to set widths, via the `thClass` or
    `class` properties of the [field definition object](#field-definition-reference).

### Stacked tables

An alternative to responsive tables, BootstrapVue includes the stacked table option (using custom
SCSS/CSS), which allow tables to be rendered in a visually stacked format. Make any table stacked
across _all viewports_ by setting the prop `stacked` to `true`. Or, alternatively, set a breakpoint
at which the table will return to normal table format by setting the prop `stacked` to one of the
breakpoint values `'sm'`, `'md'`, `'lg'`, or `'xl'`.

Column header labels will be rendered to the left of each field value using a CSS `::before` pseudo
element, with a width of 40%.

The `stacked` prop takes precedence over the [`sticky-header`](#sticky-headers) prop and the
[`stickyColumn`](#sticky-columns) field definition property.

<<< DEMO ./demo/TableStacked.vue

**Note: When the table is visually stacked:**

- The table header (and table footer) will be hidden.
- Custom rendered header slots will not be shown, rather, the fields' `label` will be used.
- The table **cannot** be sorted by clicking the rendered field labels. You will need to provide an
  external control to select the field to sort by and the sort direction. See the
  [Sorting](#sorting) section below for sorting control information, as well as the
  [complete example](#complete-example) at the bottom of this page for an example of controlling
  sorting via the use of form controls.
- The slots `top-row` and `bottom-row` will be hidden when visually stacked.
- The table caption, if provided, will always appear at the top of the table when visually stacked.
- In an always stacked table, the table header and footer, and the fixed top and bottom row slots
  will not be rendered.

BootstrapVueNext's custom CSS is required in order to support stacked tables.

### Table caption

Add an optional caption to your table via the prop `caption` or the named slot `table-caption` (the
slot takes precedence over the prop). The default Bootstrap v4 styling places the caption at the
bottom of the table:

<<< DEMO ./demo/TableCaption.vue

You can have the caption placed at the top of the table by setting the `caption-top` prop to `true`:

<<< DEMO ./demo/TableCaptionTop.vue

You can also use [custom CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/caption-side) to
control the caption positioning.

### Table colgroup

The `table-colgroup` slot allows you to include a `<colgroup>` element in your table. You can use
this slot to specify widths for columns using the `<col>` element.

<<< DEMO ./demo/TableColgroup.vue

### Table busy state

`<BTable>` provides a `busy` model that will flag the table as busy, which you can set to `true`
just before you update your items, and then set it to `false` once you have your items. When in the
busy state, the table will have the attribute `aria-busy="true"`.

During the busy state, the table will be rendered in a "muted" look (`opacity: 0.55`), using the
following custom CSS:

<<< FRAGMENT ./demo/TableBusy.css#snippet{css}

#### table-busy slot

<<< DEMO ./demo/TableBusy.vue

Also see the [Using Items Provider Functions](#using-items-provider-functions) below for additional
information on the `busy` state.

**Notes:**

- All click related and hover events, and sort-changed events will **not** be emitted when the table
  is in the `busy` state.
- Busy styling and slot are not available in the `<BTableLite>` component.

## Custom data rendering

Custom rendering for each data field in a row is possible using either
[scoped slots](https://vuejs.org/guide/components/slots.html#scoped-slots) or a formatter callback
function, or a combination of both.

### Scoped field slots

Scoped field slots give you greater control over how the record data appears. You can use scoped
slots to provided custom rendering for a particular field. If you want to add an extra field which
does not exist in the records, just add it to the [`fields`](#fields-column-definitions) array, and
then reference the field(s) in the scoped slot(s). Scoped field slots use the following naming
syntax: `` `'cell(${field_key})'` ``.

You can use the default _fall-back_ scoped slot `'cell()'` to format any cells that do not have an
explicit scoped slot provided.

<<< DEMO ./demo/TableCustomData.vue

The slot's scope variable (`data` in the above sample) will have the following properties:

| Property         | Type                               | Description                                                                                                                                                               |
| ---------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index`          | number                             | The row number (indexed from zero) relative to the _displayed_ rows                                                                                                       |
| `item`           | Items                              | The entire raw record data (i.e. `items[index]`) for this row (before any formatter is applied)                                                                           |
| `value`          | unknown                            | The value for this key in the record (`null` or `undefined` if a virtual column), or the output of the field's [`formatter` function](#formatter-callback)                |
| `unformatted`    | unknown                            | The raw value for this key in the item record (`null` or `undefined` if a virtual column), before being passed to the field's [`formatter` function](#formatter-callback) |
| `field`          | `(typeof computedFields.value)[0]` | The field's normalized field definition object                                                                                                                            |
| `detailsShowing` | boolean                            | Will be `true` if the row's `row-details` scoped slot is visible. See section [Row details support](#row-details-support) below for additional information                |
| `toggleDetails`  | `() => void`                       | Can be called to toggle the visibility of the rows `row-details` scoped slot. See section [Row details support](#row-details-support) below for additional information    |
| `rowSelected`    | boolean                            | Will be `true` if the row has been selected. See section [Row select support](#row-select-support) for additional information                                             |
| `selectRow`      | `(index?: number) => void`         | When called, selects the current row. See section [Row select support](#row-select-support) for additional information                                                    |
| `unselectRow`    | `(index?: number) => void`         | When called, unselects the current row. See section [Row select support](#row-select-support) for additional information                                                  |

**Notes:**

- `index` will not always be the actual row's index number, as it is computed after filtering,
  sorting and pagination have been applied to the original table data. The `index` value will refer
  to the **displayed row number**.
- When using the `v-slot` syntax, note that slot names **cannot** contain spaces, and
  when using in-browser DOM templates the slot names will _always_ be lower cased. To get around
  this, you can pass the slot name using Vue's
  [dynamic slot names](https://vuejs.org/guide/components/slots.html#dynamic-slot-names)

#### Displaying raw HTML

By default `BTable` escapes HTML tags in items data and results of formatter functions, if you need
to display raw HTML code in `BTable`, you should use `v-html` directive on an element in a in
scoped field slot.

<<< DEMO ./demo/TableRawHtml.vue

::: danger WARNING
Be cautious of using the <code>v-html</code> method to display user
supplied content, as it may make your application vulnerable to
<a class="alert-link" href="https://en.wikipedia.org/wiki/Cross-site_scripting">
<abbr title="Cross Site Scripting Attacks">XSS attacks</abbr></a>, if you do not first
<a class="alert-link" href="https://en.wikipedia.org/wiki/HTML_sanitization">sanitize</a> the
user supplied string.
:::

### Formatter callback

Optionally, you can customize field output by using a formatter callback function. To enable this,
the field's `formatter` property is used. The value of this property may be String or function
reference. In case of a String value, the function must be defined at the parent component's
methods. When providing `formatter` as a `Function`, it must be declared at global scope (window or
as global mixin at Vue, or as an anonymous function), unless it has been bound to a `this` context.

The callback function accepts three arguments - `value`, `key`, and `item`, and should return the
formatted value as a string (HTML strings are not supported)

<<< DEMO ./demo/TableFormatter.vue

## Header and Footer custom rendering via scoped slots

It is also possible to provide custom rendering for the table's `thead` and `tfoot` elements. Note by
default the table footer is not rendered unless `foot-clone` is set to `true`.

Scoped slots for the header and footer cells uses a special naming convention of
`'head(<fieldkey>)'` and `'foot(<fieldkey>)'` respectively.

You can use a default _fall-back_ scoped slot `'head()'` or `'foot()'` to format any header or
footer cells that do not have an explicit scoped slot provided.

In `BTableLight`, `'foot(<fieldkey>)'` will _fall-back_ first to `'foot()'` if it is provided, then to
`'head(<fieldkey>)'`, and finally to `'head()'`. For `BTable`, there is a default for `'head(<fieldkey>)'`,
so the fallback chain will stop with the default `'head(<fieldkey>)'` rather than falling back to `'head()'`.

<<< DEMO ./demo/TableHeadSlot.vue

The slots can be optionally scoped (`data` in the above example), and will have the following
properties:

| Property        | Type                        | Description                                                                               |
| --------------- | --------------------------- | ----------------------------------------------------------------------------------------- |
| `column`        | `LiteralUnion<keyof Items>` | The fields's `key` value                                                                  |
| `field`         | `TableField<Items>`         | the field's object (from the `fields` prop)                                               |
| `label`         | `string \| undefined`       | The fields label value (also available as `data.field.label`)                             |
| `isFoot`        | `boolean`                   | Currently rending the foot if `true`                                                      |
| `selectAllRows` | `() => void`                | Select all rows (applicable if the table is in [`selectable`](#row-select-support) mode   |
| `clearSelected` | `() => void`                | Unselect all rows (applicable if the table is in [`selectable`](#row-select-support) mode |

When placing inputs, buttons, selects or links within a `head(...)` or `foot(...)` slot, note that
`head-clicked` event will not be emitted when the input, select, textarea is clicked (unless they
are disabled). `head-clicked` will never be emitted when clicking on links or buttons inside the
scoped slots (even when disabled)

**Notes:**

- Slot names **cannot** contain spaces, and when using in-browser DOM templates the slot names will _always_
- be lower cased. To get around this, you can pass the slot name using Vue's
  [dynamic slot names](https://vuejs.org/guide/components/slots.html#dynamic-slot-names)

### Adding additional rows to the header

If you wish to add additional rows to the header you may do so via the `thead-top` slot. This slot
is inserted before the header cells row, and is not automatically encapsulated by `<tr>..</tr>`
tags. It is recommended to use the BootstrapVue [table helper components](#table-helper-components),
rather than native browser table child elements.

<<< DEMO ./demo/TableHeaderRows.vue

Slot `thead-top` can be optionally scoped, receiving an object with the following properties:

| Property        | Type                  | Description                                                                               |
| --------------- | --------------------- | ----------------------------------------------------------------------------------------- |
| `columns`       | `number`              | The number of columns in the rendered table                                               |
| `fields`        | `TableField<Items>[]` | Array of field definition objects (normalized to the array of objects format)             |
| `selectAllRows` | `() => void`          | Select all rows (applicable if the table is in [`selectable`](#row-select-support) mode   |
| `clearSelected` | `() => void`          | Unselect all rows (applicable if the table is in [`selectable`](#row-select-support) mode |

### Creating a custom footer

If you need greater layout control of the content of the `<tfoot>`, you can use the optionally
scoped slot `custom-foot` to provide your own rows and cells. Use BootstrapVue's
[table helper sub-components](#table-helper-components) `<BTr>`, `<BTh>`, and `<BTd>` to generate
your custom footer layout.

Slot `custom-foot` can be optionally scoped, receiving an object with the following properties:

| Property  | Type                  | Description                                                                                |
| --------- | --------------------- | ------------------------------------------------------------------------------------------ |
| `columns` | `number`              | The number of columns in the rendered table                                                |
| `fields`  | `TableField<Items>[]` | Array of field definition objects (normalized to the array of objects format)              |
| `items`   | `readonly Items[]`    | Array of the currently _displayed_ items records - after filtering, sorting and pagination |

**Notes:**

- The `custom-foot` slot will **not** be rendered if the `foot-clone` prop has been set.
- `head-clicked` events are not be emitted when clicking on `custom-foot` cells.
- Sorting and sorting icons are not available for cells in the `custom-foot` slot.
- The custom footer will not be shown when the table is in visually stacked mode.

## Custom empty and empty-filtered rendering via slots

Aside from using `empty-text`, `empty-filtered-text`, it is also possible to provide custom rendering
for tables that have no data to display using named slots.

In order for these slots to be shown, the `show-empty` attribute must be set and `items` must be
either falsy or an array of length 0.

<<< FRAGMENT ./demo/TableEmpty.vue#template{vue-html}

The slot can optionally be scoped. The slot's scope (`scope` in the above example) will have the
following properties:

| Property            | Type                  | Description                                        |
| ------------------- | --------------------- | -------------------------------------------------- |
| `emptyFilteredHtml` | `string`              | The `empty-filtered-html` prop                     |
| `emptyFilteredText` | `string`              | The `empty-filtered-text` prop                     |
| `fields`            | `TableField<Items>[]` | The `fields` prop                                  |
| `items`             | `Items[]`             | The `items` prop. Exposed here to check null vs [] |

::: info NOTE
If you prefiously used the `emptyHtml` or `emtpyFilteredHtml` scoped slots or the `empty-html` or
`empty-filtered-html` props, please convert to using the `empty-text` or `empty-filtered-text` slots
instead. See our [migration guide](/docs/migration-guide#v-html) for details.
:::

## Advanced Features

### Sticky headers

Use the `sticky-header` prop to enable a vertically scrolling table with headers that remain fixed
(sticky) as the table body scrolls. Setting the prop to `true` (or no explicit value) will generate
a table that has a maximum height of `300px`. To specify a maximum height other than `300px`, set
the `sticky-header` prop to a valid CSS height (including units), i.e. `sticky-header="200px"`.
Tables with `sticky-header` enabled will also automatically become always responsive horizontally,
regardless of the [`responsive`](#responsive-tables) prop setting, if the table is wider than the
available horizontal space.

<<< DEMO ./demo/TableStickyHeaders.vue

**Sticky header notes:**

- The `sticky-header` prop has no effect if the table has the [`stacked`](#stacked-tables) prop set.
- Sticky header tables are wrapped inside a vertically scrollable `<div>` with a maximum height set.
- BootstrapVue's custom CSS is required in order to support `sticky-header`.
- Bootstrap v5 uses the CSS style `border-collapse: collapsed` on table elements. This prevents the
  borders on the sticky header from "sticking" to the header, and hence the borders will scroll when
  the body scrolls. To get around this issue, set the prop `no-border-collapse` on the table (note
  that this may cause double width borders when using features such as `bordered`, etc.).

### Sticky columns

Columns can be made sticky, where they stick to the left of the table when the table has a
horizontal scrollbar. To make a column a sticky column, set the `stickyColumn` prop in the
[field's header definition](#field-definition-reference). Sticky columns will only work when the
table has either the `sticky-header` prop set and/or the [`responsive`](#responsive-tables) prop is
set.

<<< DEMO ./demo/TableStickyColumns.vue

**Sticky column notes:**

- Sticky columns has no effect if the table has the [`stacked`](#stacked-tables) prop set.
- Sticky columns tables require either the `sticky-header` and/or `responsive` modes, and are
  wrapped inside a horizontally scrollable `<div>`.
- When you have multiple columns that are set as `stickyColumn`, the columns will stack over each
  other visually, and the left-most sticky columns may "peek" out from under the next sticky column.
  To get around this behaviour, make sure your latter sticky columns are the same width or wider
  than previous sticky columns.
- Bootstrap v5 uses the CSS style `border-collapse: collapsed` on table elements. This prevents any
  borders on the sticky columns from "sticking" to the column, and hence those borders will scroll
  when the body scrolls. To get around this issue, set the prop `no-border-collapse` on the table
  (note that this may cause double width borders when using features such as `bordered`, etc.).
- BootstrapVue's custom CSS is required in order to support sticky columns.
- The sticky column feature uses CSS style `position: sticky` to position the column cells. Internet
  Explorer does not support `position: sticky`, hence for IE 11 the sticky column will scroll with
  the table body.

### Row details support

If you would optionally like to display additional record information (such as columns not specified
in the fields definition array), you can use the scoped slot `row-details`, in combination with the
special item record `boolean` property `_showDetails`.

If the record has its `_showDetails` property set to `true`, **and** a `row-details` scoped slot
exists, a new row will be shown just below the item, with the rendered contents of the `row-details`
scoped slot.

In the scoped field slot, you can toggle the visibility of the row's `row-details` scoped slot by
calling the `toggleDetails` function passed to the field's scoped slot variable. You can use the
scoped fields slot variable `detailsShowing` to determine the visibility of the `row-details` slot.

::: info NOTE
If manipulating the `_showDetails` property directly on the item data (i.e. not via the
`toggleDetails` function reference), the `_showDetails` property **must** exist in the items data
for proper reactive detection of changes to its value. Read more about
[how reactivity works in Vue](https://vuejs.org/guide/extras/reactivity-in-depth.html#Change-Detection-Caveats).
:::

**Available `row-details` scoped variable properties:**

| Property        | Type                       | Description                                                                                                                   |
| --------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `item`          | `Items`                    | The entire row record data object                                                                                             |
| `index`         | `number`                   | The current visible row number                                                                                                |
| `fields`        | `TableField<Items>[]`      | The normalized fields definition array (in the _array of objects_ format)                                                     |
| `toggleDetails` | `() => void`               | Function to toggle visibility of the row's details slot                                                                       |
| `rowSelected`   | `boolean`                  | Will be `true` if the row has been selected. See section [Row select support](#row-select-support) for additional information |
| `selectRow`     | `(index?: number) => void` | When called, selects the current row. See section [Row select support](#row-select-support) for additional information        |
| `unselectRow`   | `(index?: number) => void` | When called, unselects the current row. See section [Row select support](#row-select-support) for additional information      |

::: info NOTE
the row select related scope properties are only available in `<BTable>`.
:::

In the following example, we show two methods of toggling the visibility of the details: one via a
button, and one via a checkbox. We also show the third row details defaulting to have details
initially showing.

<<< DEMO ./demo/TableRowDetails.vue

### Row select support

You can make rows selectable, by using the `<BTable>` prop `selectable`.

Users can easily change the selecting mode by setting the `select-mode` prop.

- `'multi'`: Each click will select/deselect the row (default mode)
- `'single'`: Only a single row can be selected at one time
- `'range'`: Any row clicked is selected, any other deselected. <kbd>Shift</kbd> + click selects a
  range of rows, and <kbd>Ctrl</kbd> (or <kbd>Cmd</kbd>) + click will toggle the selected row.

When a table is `selectable` and the user clicks on a row, `<BTable>` will emit the `update:selected-items`
event, passing a single argument which is the complete list of selected items. **This argument
is read-only.** In addition, `row-selected` or `row-unselected` events are emitted for each row.

Rows can also be programmatically selected and unselected via the following exposed methods on the
`<BTable>` instance:

| Method                         | Description                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| `selectRow(index: number)`     | Selects a row with the given `index` number.                                                         |
| `unselectRow(index: number)`   | Unselects a row with the given `index` number.                                                       |
| `selectAllRows()`              | Selects all rows in the table, except in `single` mode in which case only the first row is selected. |
| `clearSelected()`              | Unselects all rows.                                                                                  |
| `isRowSelected(index: number)` | Returns `true` if the row with the given `index` is selected, otherwise it returns `false`.          |

**Programmatic row selection notes:**

- `index` is the zero-based index of the table's **visible rows**, after filtering, sorting, and
  pagination have been applied.
- In `single` mode, `selectRow(index)` will unselect any previous selected row.
- Attempting to `selectRow(index)` or `unselectRow(index)` on a non-existent row will be ignored.
- The table must be `selectable` for any of these methods to have effect.
- You can disable selection of rows via click events by setting the `no-select-on-click` prop. Rows
  will then only be selectable programmatically.

**Row select notes:**

- [Sorting](#sorting), [filtering](#filtering), or [paginating](#pagination) the table will **clear
  the active selection**. The `update:selected-items` event will be emitted with an empty array (`[]`) if
  needed.
- When the table is in `selectable` mode, all data item `<tr>` elements will be in the document tab
  sequence (`tabindex="0"`) for [accessibility](#accessibility) reasons, and will have the attribute
  `aria-selected` set to either `'true'` or `'false'` depending on the selected state of the row.
- <NotYetImplemented/>When a table is `selectable`, the table will have the attribute `aria-multiselect` set to either
  `'false'` for `single` mode, and `'true'` for either `multi` or `range` modes.

<NotYetImplemented/>

Use the prop `selected-variant` to apply a Bootstrap theme color to the selected row(s). Note, due
to the order that the table variants are defined in Bootstrap's CSS, any row-variant _might_ take
precedence over the `selected-variant`. You can set `selected-variant` to an empty string if you
will be using other means to convey that a row is selected (such as a scoped field slot in the below
example).

The `selected-variant` can be any of the
[standard (or custom) Bootstrap base color variants](/docs/reference/color-variants), or the special
[table `active` variant](/docs/reference/color-variants#table-variants) (the default) which takes
precedence over any specific row or cell variants.

For accessibility reasons (specifically for color blind users, or users with color contrast issues),
it is highly recommended to always provide some other visual means of conveying that a row is
selected, such as a virtual column as shown in the example below.

<<< DEMO ./demo/TableRowSelect.vue

### Table body transition support

<NotYetImplemented />

### Exposed functions

See [Row select support](#row-select-support) for selection related exposed functions

| Method                                           | Description                                                                                                                                |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `items(): Items[]`                               | Returns the complete set of items used to build the table.                                                                                 |
| `displayItems(): Items[]`                        | Returns the set of items currently displayed in the tabe. See [Complete Example](#complete-example) for usage                              |
| `getStringValue(ob: Items, key: string): string` | Returns the formatted string value of the field `key` of the object `ob`. See [Custom Sort Comparer(s)](#custom-sort-comparer-s) for usage |
| `refresh()`                                      | Calls the async provider to refresh the table items                                                                                        |

## Sorting

As mentioned in the [Fields](#fields-column-definitions) section above, you can make columns
sortable in `<BTable>`. Clicking on a sortable column header will sort the column in ascending
direction (smallest first), while clicking on it again will switch the direction of sorting to
descending (largest first). Clicking on it a third time will stop sorting on the column. For
single column sorting (e.g. `multisort===false`) clicking on a differnt sortable column header will
sort that column in ascending order and clear the sort order for the previously sorted column.

You can control which column is pre-sorted and the order of sorting (ascending or descending). To
pre-specify the column to be sorted use the `sortBy` model. For single column sorting (e.g. `multisort===false`)
`sortBy` should be an array containing a single `BTableSortBy` object with a defined `order` field.

<<< FRAGMENT ./demo/TableSortBy.ts#snippet{ts}

- **Ascending**: Items are sorted lowest to highest (i.e. `A` to `Z`) and will be displayed with the
  lowest value in the first row with progressively higher values in the following rows.
- **Descending**: Items are sorted highest to lowest (i.e. `Z` to `A`) and will be displayed with
  the highest value in the first row with progressively lower values in the following rows.

By default the comparer function does a `numeric localeCompare`. If one wishes to change this, use a custom comparer function with that `BTableSortBy` element.

To prevent the table from wiping out the comparer function, internally it will set the `order` key to `undefined`, instead of just removing the element from the `sortBy` array. i.e. `:sort-by="[]"` & `:sort-by="[key: 'someKey', order: undefined]"` behave identically. Naturally if this value is given to a server, orders of undefined should be handled. See the computed `singleSortBy` function below as a simple means of retrieving the single sortded column reference from a table
that is in single sort mode.

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

### Custom Sort Comparer(s)

Each item in the `BSortBy` model may include a `comparer` field of the type `BTableSortByComparerFunction<T = any> = (a: T, b: T, key: string) => number`. This function takes the items to be compared and the key to compare on. Since the key is passed in, you may use the same function for multiple fields or you can craft a different comparer function for each fied. Leaving the `comparer` field undefined (or not defining a field in the `sortBy` array at all) will fall back to using the default comparer, which looks like this:

<<< FRAGMENT ./demo/TableSortCompareDefault.ts#snippet{ts}

where `getStringValue` retrieves the field value as a string.

If you have a particular field that you want to sort by, you can set up a record of the `sortBy` model
with a custom comparer:

<<< FRAGMENT ./demo/TableSortCompareCustom.ts#snippet{ts}

The default sorting algorithm parses object syntax by using an internal function `getStringValue`. It's main purpose is to fetch the correct value from various types (object, string, etc), for example `{foo: {bar: '1'}}`, one can use `'foo.bar'` as an input to the function to get the value in the object -- `1`. It also returns the result after formatting. This function is exposed to allow for customization.
with different options.

In the example below, we enable sorting including casing, but one could as easily set the locale or modify
any of the other options of [`localeCompare`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

<<< DEMO ./demo/TableSortByCustom.vue

## Filtering

Filtering, when used, is applied by default to the **original items** array data. `Btable` provides
several options for how data is filtered.

It is currently not possible to filter based on result of formatting via
[scoped field slots](#scoped-field-slots).

### Built in filtering

The item's row data values are stringified (see the sorting section above for how stringification is
done) and the filter searches that stringified data (excluding any of the special properties that
begin with an underscore `'_'`). The stringification also, by default, includes any data not shown
in the presented columns.

With the default built-in filter function, the `filter` prop value can either be a string or a
`RegExp` object (regular expressions should _not_ have the `/g` global flag set). <NotYetImplemented/> Currently the `filter` prop only supports a string, not a `RegExp`.

If the stringified row contains the provided string value or matches the RegExp expression then it
is included in the displayed results.

Set the `filter` prop to `null` or an empty string to clear the current filter.

### Built in filtering options

There are several options for controlling what data the filter is applied against.

- <NotYetImplemented/>The `filter-ignored-fields` prop accepts an array of _top-level_ (immediate properties of the row
  data) field keys that should be ignored when filtering.
- <NotYetImplemented/>The `filter-included-fields` prop accepts an array of _top-level_ (immediate properties of the row
  data) field keys that should used when filtering. All other field keys not included in this array
  will be ignored. This feature can be handy when you want to filter on specific columns. If the
  specified array is empty, then _all_ fields are included, except those specified via the prop
  `filter-ignored-fields`. If a field key is specified in both `filter-ignored-fields` and
  `filter-included-fields`, then `filter-included-fields` takes precedence.
- Normally, `<BTable>` filters based on the stringified record data. If the field has a `formatter`
  function specified, you can optionally filter based on the result of the formatter by setting the
  [field definition property](#field-definition-reference) `filterByFormatted` to `true`. If the
  field does not have a formatter function, this option is ignored. <NotYetImplemented/>You can optionally pass a
  formatter function _reference_, to be used for filtering only, to the field definition property
  `filterByFormatted`.

The props `filter-ignored-fields` and `filter-included-fields`, and the field definition property
`filterByFormatted` have no effect when using a [custom filter function](#custom-filter-function),
or [items provider](#using-items-provider-functions) based filtering.

### Custom filter function

You can also use a custom filter function, by setting the prop `filter-function` to a reference of
custom filter test function. The filter function signature is `(item: Readonly<Items>, filter: string | undefined) => boolean`

- `item` is the original item row record data object.
- `filter` value of the `filter` prop

The function should return `true` if the record matches your criteria or `false` if the record is to
be filtered out.

For proper reactive updates to the displayed data, when not filtering you should set the `filter`
prop to `null` or an empty string (and not an empty object or array). The filter function will not
be called when the `filter` prop is a falsey value.

The display of the `empty-filter-text` relies on the truthiness of the `filter` prop.

### Filter events

When local filtering is applied, and the resultant number of items change, `<BTable>` will emit the
`filtered` event with a single argument of type `Items[]`: which is the complete list of
items passing the filter routine. **Treat this argument as read-only.**

Setting the prop `filter` to null or an empty string will clear local items filtering.

## Pagination

`<BTable>` supports built in pagination of item data. You can control how many rows are displayed
at a time by setting the `per-page` prop to the maximum number of rows you would like displayed, and
use the `current-page` prop to specify which page to display (starting from page `1`). If you set
`current-page` to a value larger than the computed number of pages, then no rows will be shown.

You can use the [`<BPagination>`](/docs/components/pagination) component in conjunction with
`<BTable>` for providing control over pagination.

## Using items provider functions

As mentioned under the [Items](#items-record-data) prop section, it is possible to use a function to
provide the row data (items) by specifying a function reference via the `provider` prop and leaving
the `items` prop undefined.

::: info NOTE
If both the `provider` and `items` props are set, the `provider` will be used and `items` will be ignored.
:::

The provider function is called with the following signature:

<<< FRAGMENT ./demo/TableProvider.ts#snippet{ts}

The `ctx` is the context object associated with the table state, and contains the following
properties:

| Property      | Type                             | Description                                                                       |
| ------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| `currentPage` | `number`                         | The current page number (starting from 1, the value of the `current-page` prop)   |
| `perPage`     | `number`                         | The maximum number of rows per page to display (the value of the `per-page` prop) |
| `filter`      | `string \| undefined`            | The value of the `filter` prop                                                    |
| `sortBy`      | `BTableSortBy<T>[] \| undefined` | The current column key being sorted, or an empty string if not sorting            |

Below are trimmed down versions of the [complete example](#complete-example) as a starting place for using provider functions. They use local provider functions that implement sorting and filtering. Note that sorting is done in cooperation with `<BTable>` by having the
provider function react to the `context.sortBy` array that it is passed, while filtering is done
entirely by the provider, which manually forces a refresh of the table when the filter is changed.

Example using a syncronous provider function:

<<< DEMO ./demo/TableProvider.vue

Example using an asyncronous provider function that simulates latency by sleeping for a second:

<<< DEMO ./demo/TableProviderAsync.vue

## Light-weight tables

`<BTableLite>` provides a great alternative to `<BTable>` if you just need simple display of
tabular data. The `<BTableLite>` component provides all of the styling and formatting features of
`<BTable>` (including row details and stacked support), while **excluding** the following features:

- Filtering
- Sorting
- Pagination
- Items provider support
- Selectable rows
- Busy table state and styling
- Fixed top and bottom rows
- Empty row support

## Simple tables

The `BTableSimple` component gives the user complete control over the rendering of the table content, while providing basic Bootstrap v5 table styling. `BTableSimple` is a wrapper component around the `<table>` element. Inside the component, via the default slot, you can use any or all of the BootstrapVueNext table helper components: `BThead`, `BTfoot`, `BTbody`, `BTr`, `BTh`, `BTd`, and the HTML5 elements `<caption>`, `<colgroup>` and `<col>`. Contrary to the component's name, one can create simple or complex table layouts with `BTableSimple`.

`BTableSimple` provides basic styling options via props: striped, bordered, borderless, outlined, small, hover, dark, fixed, responsive and sticky-header. Note that stacked mode is available but requires some additional markup to generate the cell headings, as described in the Simple tables and stacked mode section below. Sticky columns are also supported, but also require a bit of additional markup to specify which columns are to be sticky. See below for more information on using sticky columns.

Since `BTableSimple` is just a wrapper component, of which you will need to render content inside, it does not provide any of the advanced features of `BTable` (i.e. row events, head events, sorting, pagination, filtering, foot-clone, items, fields, etc.).

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

BootstrapVueNext provides additional helper child components when using `<BTableSimple>`, or the named
slots `top-row`, `bottom-row`, `thead-top`, and `custom-foot` (all of which accept table child
elements). The helper components are as follows:

- `BTbody` (`<BTableSimple>` only)
- `BThead` (`<BTableSimple>` only)
- `BTfoot` (`<BTableSimple>` only)
- `BTr`
- `BTd`
- `BTh`

These components are optimized to handle converting variants to the appropriate classes (such as
handling table `dark` mode), and automatically applying certain accessibility attributes (i.e.
`role`s and `scope`s). They also can generate the stacked table, and sticky header and column,
markup. Components `<BTable>` and `<BTableLite>` use these helper components internally.

In the [Simple tables](#simple-tables) example, we are using the helper components `<BThead>`,
`<BTbody>`, `<BTr>`, `<BTh>`, `<BTd>` and `<BTfoot>`. While you can use regular table child
elements (i.e. `<tbody>`, `<tr>`, `<td>`, etc.) within `<BTableSimple>`, and the named slots
`top-row`, `bottom-row`, and `thead-top`, it is recommended to use these BootstrapVue table `<BT*>`
helper components. Note that there are no helper components for `<caption>`, `<colgroup>` or
`<col>`, so you may use these three HTML5 elements directly in `<BTableSimple>`.

- Table helper components `<BThead>`, `<BTfoot>`, `<BTr>`, `<BTd>` and `<BTh>` all accept a `variant`
  prop, which will apply one of the Bootstrap theme colors (custom theme colors are supported via
  [theming](/docs/reference/theming).) and will automatically adjust to use the correct variant
  class based on the table's `dark` mode.
- <NotYetImplemented/> Accessibility attributes `role` and `scope` are automatically set on `<BTh>` and `<BTd>`
  components based on their location (thead, tbody, or tfoot) and their `rowspan` or `colspan`
  props. You can override the automatic `scope` and `role` values by setting the appropriate
  attribute on the helper component.
- <NotYetImplemented/> For `<BTbody>`, `<BThead>`, and `<BTfoot>` helper components, the appropriate default `role` of
  `'rowgroup'` will be applied, unless you override the role by supplying a `role` attribute.
- <NotYetImplemented/> For the `<BTr>` helper component, the appropriate default `role` of `'row'` will be applied,
  unless you override the role by supplying a `role` attribute. `<BTr>` does not add a `scope`.
- <NotYetImplemented/>The `<BTbody>` element supports rendering a Vue `<transition-group>` when either, or both, of the
  `tbody-transition-props` and `tbody-transition-handlers` props are used. See the
  [Table body transition support](#table-body-transition-support) section for more details.

## Accessibility

<NotYetImplemented/>

The `<BTable>` and `<BTableLite>` components, when using specific features, will attempt to
provide the best accessibility markup possible.

When using `<BTableSimple>` with the helper table components, elements will have the appropriate
roles applied by default, of which you can optionally override. When using click handlers on the
`<BTableSimple>` helper components, you will need to apply appropriate `aria-*` attributes, and
set `tabindex="0"` to make the click actions accessible to screen reader and keyboard-only users.
You should also listen for `@keydown.enter.prevent` to handle users pressing <kbd>Enter</kbd> to
trigger your click on cells or rows (required for accessibility for keyboard-only users).

### Heading accessibility

<NotYetImplemented/>

When a column (field) is sortable (`<BTable>` only) or there is a `head-clicked` listener
registered (`<BTable>` and `<BTableLite>`), the header (and footer) `<th>` cells will be placed
into the document tab sequence (via `tabindex="0"`) for accessibility by keyboard-only and screen
reader users, so that the user may trigger a click (by pressing <kbd>Enter</kbd> on the header
cells.

### Data row accessibility

<NotYetImplemented/>

When the table is in `selectable` mode (`<BTable>` only, and prop `no-select-on-click` is not set),
or if there is a `row-clicked` event listener registered (`<BTable>` and `<BTableLite>`), all
data item rows (`<tr>` elements) will be placed into the document tab sequence (via `tabindex="0"`)
to allow keyboard-only and screen reader users the ability to click the rows by pressing
<kbd>Enter</kbd> or <kbd>Space</kbd>.

When the table items rows are placed in the document tab sequence (`<BTable>` and
`<BTableLite>`), they will also support basic keyboard navigation when focused:

- <kbd>Down</kbd> will move to the next row
- <kbd>Up</kbd> will move to the previous row
- <kbd>End</kbd> or <kbd>Down</kbd>+<kbd>Shift</kbd> will move to the last row
- <kbd>Home</kbd> or <kbd>Up</kbd>+<kbd>Shift</kbd> will move to the first row
- <kbd>Enter</kbd> or <kbd>Space</kbd> to click the row.

### Row event accessibility

Note the following row based events/actions (available with `<BTable>` and `<BTableLite>`) are
not considered accessible, and should only be used if the functionality is non critical or can be
provided via other means:

- `row-dblclicked`
- `row-contextmenu`
- `row-hovered`
- `row-unhovered`
- `row-middle-clicked`

Note that the `row-middle-clicked` event is not supported in all browsers (i.e. IE, Safari and most
mobile browsers). When listening for `row-middle-clicked` events originating on elements that do not
support input or navigation, you will often want to explicitly prevent other default actions mapped
to the down action of the middle mouse button. On Windows this is usually autoscroll, and on macOS
and Linux this is usually clipboard paste. This can be done by preventing the default behaviour of
the `mousedown` or `pointerdown` event.

Additionally, you may need to avoid opening a default system or browser context menu after a right
click. Due to timing differences between operating systems, this too is not a preventable default
behaviour of `row-middle-clicked`. Instead, this can be done by preventing the default behaviour of
the `row-contextmenu` event.

It is recommended you test your app in as many browser and device variants as possible to ensure
your app handles the various inconsistencies with events.

## Complete Example

<<< DEMO ./demo/TableComplete.vue

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/table.data'
</script>
