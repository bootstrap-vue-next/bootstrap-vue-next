# Tables

<PageHeader>

For displaying tabular data, `BTable` supports pagination, filtering, sorting, custom rendering, various style options, events, and asynchronous data. For simple display of tabular data without all the fancy features, BootstrapVueNext provides two lightweight alternative components [`BTableLite`](light-weight-tables) and [`BTableSimple`](simple-tables).

</PageHeader>

## Items

To Be Completed

## Fields

To Be Completed

## Primaray Key

To Be Completed

## Table Style Options

To Be Completed

## Custom data rendering

To Be Completed

## Header and Footer custom rendering via scoped slots

To Be Completed

## Custom empty and emptyfiltered rendering via slots

To Be Completed

## Advanced Features

To Be Completed

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
