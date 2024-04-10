# Tables

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

For displaying tabular data, `BTable` supports pagination, filtering, sorting, custom rendering, various style options, events, and asynchronous data. For simple display of tabular data without all the fancy features, BootstrapVueNext provides two lightweight alternative components `BTableLite` and `BTableSimple`.

</div>

## Simple tables

The `BTableSimple` component gives the user complete control over the rendering of the table content, while providing basic Bootstrap v4 table styling. `BTableSimple` is a wrapper component around the `<table>` element. Inside the component, via the default slot, you can use any or all of the BootstrapVue table helper components: `BThead`, `BTfoot`, `BTbody`, `BTr`, `BTh`, `BTd`, and the HTML5 elements `<caption>`, `<colgroup>` and `<col>`. Contrary to the component's name, one can create simple or complex table layouts with `BTableSimple`.

`BTableSimple` provides basic styling options via props: striped, bordered, borderless, outlined, small, hover, dark, fixed, responsive and sticky-header. Note that stacked mode is available but requires some additional markup to generate the cell headings, as described in the Simple tables and stacked mode section below. Sticky columns are also supported, but also require a bit of additional markup to specify which columns are to be sticky. See below for more information on using sticky columns.

Since b-table-simple is just a wrapper component, of which you will need to render content inside, it does not provide any of the advanced features of `BTable` (i.e. row events, head events, sorting, pagination, filtering, foot-clone, items, fields, etc.).

<HighlightCard>
  <BTableSimple hover small caption-top responsive>
    <caption>Items sold in August, grouped by Country and City:</caption>
    <colgroup><col><col></colgroup>
    <colgroup><col><col><col></colgroup>
    <colgroup><col><col></colgroup>
    <BThead head-variant="dark">
      <BTr>
        <BTh colspan="2">Region</BTh>
        <BTh colspan="3">Clothes</BTh>
        <BTh colspan="2">Accessories</BTh>
      </BTr>
      <BTr>
        <BTh>Country</BTh>
        <BTh>City</BTh>
        <BTh>Trousers</BTh>
        <BTh>Skirts</BTh>
        <BTh>Dresses</BTh>
        <BTh>Bracelets</BTh>
        <BTh>Rings</BTh>
      </BTr>
    </BThead>
    <BTbody>
      <BTr>
        <BTh rowspan="3">Belgium</BTh>
        <BTh class="text-end">Antwerp</BTh>
        <BTd>56</BTd>
        <BTd>22</BTd>
        <BTd>43</BTd>
        <BTd variant="success">72</BTd>
        <BTd>23</BTd>
      </BTr>
      <BTr>
        <BTh class="text-end">Gent</BTh>
        <BTd>46</BTd>
        <BTd variant="warning">18</BTd>
        <BTd>50</BTd>
        <BTd>61</BTd>
        <BTd variant="danger">15</BTd>
      </BTr>
      <BTr>
        <BTh class="text-end">Brussels</BTh>
        <BTd>51</BTd>
        <BTd>27</BTd>
        <BTd>38</BTd>
        <BTd>69</BTd>
        <BTd>28</BTd>
      </BTr>
      <BTr>
        <BTh rowspan="2">The Netherlands</BTh>
        <BTh class="text-end">Amsterdam</BTh>
        <BTd variant="success">89</BTd>
        <BTd>34</BTd>
        <BTd>69</BTd>
        <BTd>85</BTd>
        <BTd>38</BTd>
      </BTr>
      <BTr>
        <BTh class="text-end">Utrecht</BTh>
        <BTd>80</BTd>
        <BTd variant="danger">12</BTd>
        <BTd>43</BTd>
        <BTd>36</BTd>
        <BTd variant="warning">19</BTd>
      </BTr>
    </BTbody>
    <BTfoot>
      <BTr>
        <BTd colspan="7" variant="secondary" class="text-end">
          Total Rows: <b>5</b>
        </BTd>
      </BTr>
    </BTfoot>
  </BTableSimple>
  <template #html>

```vue-html
<BTableSimple hover small caption-top responsive>
  <caption>
    Items sold in August, grouped by Country and City:
  </caption>
  <colgroup>
    <col />
    <col />
  </colgroup>
  <colgroup>
    <col />
    <col />
    <col />
  </colgroup>
  <colgroup>
    <col />
    <col />
  </colgroup>
  <BThead head-variant="dark">
    <BTr>
      <BTh colspan="2">Region</BTh>
      <BTh colspan="3">Clothes</BTh>
      <BTh colspan="2">Accessories</BTh>
    </BTr>
    <BTr>
      <BTh>Country</BTh>
      <BTh>City</BTh>
      <BTh>Trousers</BTh>
      <BTh>Skirts</BTh>
      <BTh>Dresses</BTh>
      <BTh>Bracelets</BTh>
      <BTh>Rings</BTh>
    </BTr>
  </BThead>
  <BTbody>
    <BTr>
      <BTh rowspan="3">Belgium</BTh>
      <BTh class="text-end">Antwerp</BTh>
      <BTd>56</BTd>
      <BTd>22</BTd>
      <BTd>43</BTd>
      <BTd variant="success">72</BTd>
      <BTd>23</BTd>
    </BTr>
    <BTr>
      <BTh class="text-end">Gent</BTh>
      <BTd>46</BTd>
      <BTd variant="warning">18</BTd>
      <BTd>50</BTd>
      <BTd>61</BTd>
      <BTd variant="danger">15</BTd>
    </BTr>
    <BTr>
      <BTh class="text-end">Brussels</BTh>
      <BTd>51</BTd>
      <BTd>27</BTd>
      <BTd>38</BTd>
      <BTd>69</BTd>
      <BTd>28</BTd>
    </BTr>
    <BTr>
      <BTh rowspan="2">The Netherlands</BTh>
      <BTh class="text-end">Amsterdam</BTh>
      <BTd variant="success">89</BTd>
      <BTd>34</BTd>
      <BTd>69</BTd>
      <BTd>85</BTd>
      <BTd>38</BTd>
    </BTr>
    <BTr>
      <BTh class="text-end">Utrecht</BTh>
      <BTd>80</BTd>
      <BTd variant="danger">12</BTd>
      <BTd>43</BTd>
      <BTd>36</BTd>
      <BTd variant="warning">19</BTd>
    </BTr>
  </BTbody>
  <BTfoot>
    <BTr>
      <BTd colspan="7" variant="secondary" class="text-end"> Total Rows: <b>5</b> </BTd>
    </BTr>
  </BTfoot>
</BTableSimple>
```

  </template>
</HighlightCard>

When in responsive or sticky-header mode, the `<table>` element is wrapped inside a `<div>` element. If you need to apply additional classes to the `<table>` element, use the table-classes prop.

Any additional attributes given to `BTableSimple` will always be applied to the `<table>` element.

## Simple tables and stacked mode

A bit of additional markup is required on your `BTableSimple` body cells when the table is in stacked mode. Specifically, BootstrapVue uses a special data attribute to create the cell's heading, of which you can supply to `BTd` or `BTh` via the stacked-heading prop. Only plain strings are supported (not HTML markup), as we use the pseudo element ::before and css content property.

Here is the same table as above, set to be always stacked, which has the extra markup to handle stacked mode (specifically for generating the cell headings):

<HighlightCard>
  <BTableSimple hover small caption-top stacked>
    <caption>Items sold in August, grouped by Country and City:</caption>
    <colgroup><col><col></colgroup>
    <colgroup><col><col><col></colgroup>
    <colgroup><col><col></colgroup>
    <BThead head-variant="dark">
      <BTr>
        <BTh colspan="2">Region</BTh>
        <BTh colspan="3">Clothes</BTh>
        <BTh colspan="2">Accessories</BTh>
      </BTr>
      <BTr>
        <BTh>Country</BTh>
        <BTh>City</BTh>
        <BTh>Trousers</BTh>
        <BTh>Skirts</BTh>
        <BTh>Dresses</BTh>
        <BTh>Bracelets</BTh>
        <BTh>Rings</BTh>
      </BTr>
    </BThead>
    <BTbody>
      <BTr>
        <BTh rowspan="3" class="text-center">Belgium (3 Cities)</BTh>
        <BTh stacked-heading="City" class="text-start">Antwerp</BTh>
        <BTd stacked-heading="Clothes: Trousers">56</BTd>
        <BTd stacked-heading="Clothes: Skirts">22</BTd>
        <BTd stacked-heading="Clothes: Dresses">43</BTd>
        <BTd stacked-heading="Accessories: Bracelets" variant="success">72</BTd>
        <BTd stacked-heading="Accessories: Rings">23</BTd>
      </BTr>
      <BTr>
        <BTh stacked-heading="City">Gent</BTh>
        <BTd stacked-heading="Clothes: Trousers">46</BTd>
        <BTd stacked-heading="Clothes: Skirts" variant="warning">18</BTd>
        <BTd stacked-heading="Clothes: Dresses">50</BTd>
        <BTd stacked-heading="Accessories: Bracelets">61</BTd>
        <BTd stacked-heading="Accessories: Rings" variant="danger">15</BTd>
      </BTr>
      <BTr>
        <BTh stacked-heading="City">Brussels</BTh>
        <BTd stacked-heading="Clothes: Trousers">51</BTd>
        <BTd stacked-heading="Clothes: Skirts">27</BTd>
        <BTd stacked-heading="Clothes: Dresses">38</BTd>
        <BTd stacked-heading="Accessories: Bracelets">69</BTd>
        <BTd stacked-heading="Accessories: Rings">28</BTd>
      </BTr>
      <BTr>
        <BTh rowspan="2" class="text-center">The Netherlands (2 Cities)</BTh>
        <BTh stacked-heading="City">Amsterdam</BTh>
        <BTd stacked-heading="Clothes: Trousers" variant="success">89</BTd>
        <BTd stacked-heading="Clothes: Skirts">34</BTd>
        <BTd stacked-heading="Clothes: Dresses">69</BTd>
        <BTd stacked-heading="Accessories: Bracelets">85</BTd>
        <BTd stacked-heading="Accessories: Rings">38</BTd>
      </BTr>
      <BTr>
        <BTh stacked-heading="City">Utrecht</BTh>
        <BTd stacked-heading="Clothes: Trousers">80</BTd>
        <BTd stacked-heading="Clothes: Skirts" variant="danger">12</BTd>
        <BTd stacked-heading="Clothes: Dresses">43</BTd>
        <BTd stacked-heading="Accessories: Bracelets">36</BTd>
        <BTd stacked-heading="Accessories: Rings" variant="warning">19</BTd>
      </BTr>
    </BTbody>
    <BTfoot>
      <BTr>
        <BTd colspan="7" variant="secondary" class="text-end">
          Total Rows: <b>5</b>
        </BTd>
      </BTr>
    </BTfoot>
  </BTableSimple>
  <template #html>

```vue-html
<BTableSimple hover small caption-top stacked>
  <caption>
    Items sold in August, grouped by Country and City:
  </caption>
  <colgroup>
    <col />
    <col />
  </colgroup>
  <colgroup>
    <col />
    <col />
    <col />
  </colgroup>
  <colgroup>
    <col />
    <col />
  </colgroup>
  <BThead head-variant="dark">
    <BTr>
      <BTh colspan="2">Region</BTh>
      <BTh colspan="3">Clothes</BTh>
      <BTh colspan="2">Accessories</BTh>
    </BTr>
    <BTr>
      <BTh>Country</BTh>
      <BTh>City</BTh>
      <BTh>Trousers</BTh>
      <BTh>Skirts</BTh>
      <BTh>Dresses</BTh>
      <BTh>Bracelets</BTh>
      <BTh>Rings</BTh>
    </BTr>
  </BThead>
  <BTbody>
    <BTr>
      <BTh rowspan="3" class="text-center">Belgium (3 Cities)</BTh>
      <BTh stacked-heading="City" class="text-start">Antwerp</BTh>
      <BTd stacked-heading="Clothes: Trousers">56</BTd>
      <BTd stacked-heading="Clothes: Skirts">22</BTd>
      <BTd stacked-heading="Clothes: Dresses">43</BTd>
      <BTd stacked-heading="Accessories: Bracelets" variant="success">72</BTd>
      <BTd stacked-heading="Accessories: Rings">23</BTd>
    </BTr>
    <BTr>
      <BTh stacked-heading="City">Gent</BTh>
      <BTd stacked-heading="Clothes: Trousers">46</BTd>
      <BTd stacked-heading="Clothes: Skirts" variant="warning">18</BTd>
      <BTd stacked-heading="Clothes: Dresses">50</BTd>
      <BTd stacked-heading="Accessories: Bracelets">61</BTd>
      <BTd stacked-heading="Accessories: Rings" variant="danger">15</BTd>
    </BTr>
    <BTr>
      <BTh stacked-heading="City">Brussels</BTh>
      <BTd stacked-heading="Clothes: Trousers">51</BTd>
      <BTd stacked-heading="Clothes: Skirts">27</BTd>
      <BTd stacked-heading="Clothes: Dresses">38</BTd>
      <BTd stacked-heading="Accessories: Bracelets">69</BTd>
      <BTd stacked-heading="Accessories: Rings">28</BTd>
    </BTr>
    <BTr>
      <BTh rowspan="2" class="text-center">The Netherlands (2 Cities)</BTh>
      <BTh stacked-heading="City">Amsterdam</BTh>
      <BTd stacked-heading="Clothes: Trousers" variant="success">89</BTd>
      <BTd stacked-heading="Clothes: Skirts">34</BTd>
      <BTd stacked-heading="Clothes: Dresses">69</BTd>
      <BTd stacked-heading="Accessories: Bracelets">85</BTd>
      <BTd stacked-heading="Accessories: Rings">38</BTd>
    </BTr>
    <BTr>
      <BTh stacked-heading="City">Utrecht</BTh>
      <BTd stacked-heading="Clothes: Trousers">80</BTd>
      <BTd stacked-heading="Clothes: Skirts" variant="danger">12</BTd>
      <BTd stacked-heading="Clothes: Dresses">43</BTd>
      <BTd stacked-heading="Accessories: Bracelets">36</BTd>
      <BTd stacked-heading="Accessories: Rings" variant="warning">19</BTd>
    </BTr>
  </BTbody>
  <BTfoot>
    <BTr>
      <BTd colspan="7" variant="secondary" class="text-end"> Total Rows: <b>5</b> </BTd>
    </BTr>
  </BTfoot>
</BTableSimple>
```

  </template>
</HighlightCard>

Like `BTable` and `BTableLite`, table headers (`<thead>`) and footers (`<tfoot>`) are visually hidden when the table is visually stacked. If you need a header or footer, you can do so by creating an extra `BTr` inside of the `BTbody` component (or in a second `BTbody` component), and set a role of columnheader on the child `BTh` cells, and use Bootstrap v4 responsive display utility classes to hide the extra row (or `BTbody`) above a certain breakpoint when the table is no longer visually stacked (the breakpoint should match the stacked table breakpoint you have set), i.e. `<BTr class="d-md-none">` would hide the row on medium and wider screens, while `<BTbody class="d-md-none">` would hide the row group on medium and wider screens.

Note: stacked mode with `BTableSimple` requires that you use the BootstrapVue table helper components. Use of the regular `<tbody>`, `<tr>`, `<td>` and `<th>` element tags will not work as expected, nor will they automatically apply any of the required accessibility attributes.

## Simple tables and sticky columns

Sticky columns are supported with `BTableSimple`, but you will need to set the sticky-column prop on each table cell (in the thead, tbody, and tfoot row groups) in the column that is to be sticky. For example:

<HighlightCard>
  <BTableSimple responsive>
    <BThead>
      <BTr>
        <BTh sticky-column>Sticky Column Header</BTh>
        <BTh>Heading 1</BTh>
        <BTh>Heading 2</BTh>
        <BTh>Heading 3</BTh>
        <BTh>Heading 4</BTh>
      </BTr>
    </BThead>
    <BTbody>
      <BTr>
        <BTh sticky-column>Sticky Column Row Header</BTh>
        <BTd>Cell</BTd>
        <BTd>Cell</BTd>
        <BTd>Cell</BTd>
        <BTd>Cell</BTd>
      </BTr>
      <BTr>
        <BTh sticky-column>Sticky Column Row Header</BTh>
        <BTd>Cell</BTd>
        <BTd>Cell</BTd>
        <BTd>Cell</BTd>
        <BTd>Cell</BTd>
      </BTr>
    </BTbody>
    <BTfoot>
      <BTr>
        <BTh sticky-column>Sticky Column Footer</BTh>
        <BTh>Heading 1</BTh>
        <BTh>Heading 2</BTh>
        <BTh>Heading 3</BTh>
        <BTh>Heading 4</BTh>
      </BTr>
    </BTfoot>
  </BTableSimple>
  <template #html>

```vue-html
<BTableSimple responsive>
  <BThead>
    <BTr>
      <BTh sticky-column>Sticky Column Header</BTh>
      <BTh>Heading 1</BTh>
      <BTh>Heading 2</BTh>
      <BTh>Heading 3</BTh>
      <BTh>Heading 4</BTh>
    </BTr>
  </BThead>
  <BTbody>
    <BTr>
      <BTh sticky-column>Sticky Column Row Header</BTh>
      <BTd>Cell</BTd>
      <BTd>Cell</BTd>
      <BTd>Cell</BTd>
      <BTd>Cell</BTd>
    </BTr>
    <BTr>
      <BTh sticky-column>Sticky Column Row Header</BTh>
      <BTd>Cell</BTd>
      <BTd>Cell</BTd>
      <BTd>Cell</BTd>
      <BTd>Cell</BTd>
    </BTr>
  </BTbody>
  <BTfoot>
    <BTr>
      <BTh sticky-column>Sticky Column Footer</BTh>
      <BTh>Heading 1</BTh>
      <BTh>Heading 2</BTh>
      <BTh>Heading 3</BTh>
      <BTh>Heading 4</BTh>
    </BTr>
  </BTfoot>
</BTableSimple>
```

  </template>
</HighlightCard>

As with `BTable` and `BTableLite`, sticky columns are not supported when the stacked prop is set on `BTableSimple`.

## Items

## Fields

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

```ts
 BTableSortBy = {
  order: BTableSortByOrder // Sort order can by 'asc', 'desc' or undefined
  key: string // The field name to sort by
  comparer?: (a: string, b: string) => number
}
```

- **Ascending**: Items are sorted lowest to highest (i.e. `A` to `Z`) and will be displayed with the
  lowest value in the first row with progressively higher values in the following rows.
- **Descending**: Items are sorted highest to lowest (i.e. `Z` to `A`) and will be displayed with
  the highest value in the first row with progressively lower values in the following rows.

<HighlightCard>
  <BTable
    :sort-by="[{key: 'first_name', order: 'desc'}]"
    :items="sortItems"
    :fields="sortFields"/>
  <template #html>

```vue
<template>
  <BTable :sort-by="[{key: 'first_name', order: 'desc'}]" :items="sortItems" :fields="sortFields" />
</template>

<script setup lang="ts">
import {BTable, type TableFieldRaw, type TableItem} from 'bootstrap-vue-next'

interface SortPerson {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

const sortItems: TableItem<Person>[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: true, age: 45, first_name: 'Zelda', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: false, age: 89, first_name: 'Gary', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]

const sortFields: Exclude<TableFieldRaw<SortPerson>, string>[] = [
  {key: 'last_name', sortable: true},
  {key: 'first_name', sortable: true},
  {key: 'age', sortable: true},
  {key: 'isActive', sortable: false},
]
</script>
```

  </template>
</HighlightCard>

`sorbBy` is a [named model](https://vuejs.org/guide/components/v-model.html#multiple-v-model-bindings)
so it can be bound to an object that will be updated with the current sort state when the user changes
sorting by clicking the headers.

<HighlightCard>
  <BTable
    :sort-by="singleSortBy"
    :items="sortItems"
    :fields="sortFields"/>
    <div>singleSortBy = {{ JSON.stringify(singleSortBy) }}</div>
  <template #html>

```vue
<template>
  <BTable :sort-by="singleSortBy" :items="sortItems" :fields="sortFields" />
  <div>singleSortBy = {{ JSON.stringify(singleSortBy) }}</div>
</template>

<script setup lang="ts">
import {BTable, type TableFieldRaw, type TableItem} from 'bootstrap-vue-next'
import {ref} from 'vue'

interface SortPerson {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

const sortItems: TableItem<Person>[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: true, age: 45, first_name: 'Zelda', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: false, age: 89, first_name: 'Gary', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]

const sortFields: Exclude<TableFieldRaw<SortPerson>, string>[] = [
  {key: 'last_name', sortable: true},
  {key: 'first_name', sortable: true},
  {key: 'age', sortable: true},
  {key: 'isActive', sortable: false},
]
</script>
```

  </template>
</HighlightCard>

Tables can be sorted by multiple columns. Programmaticly, this can be done by adding more entries
to the `sortBy` array. From the user inteface, multi-sort works as follows:

- Clicking on a sortable header that isn't currently sorted adds it as `ascending` to the end of the sortBy list
- Clicking on a sortable header that is currently sorted as ascending makes it **descending**, but leaves it in the same order in the `sortBy` list
- Clicking on a sortable header that is currently sorted as descending removes it from the list

<HighlightCard>
  <BTable
    v-model:sort-by="multiSortBy"
    :items="sortItems"
    :fields="sortFields"
    :multisort="true"/>
    <div>multiSortBy = {{ JSON.stringify(multiSortBy) }}</div>
  <template #html>

```vue
<template>
  <BTable v-model:sort-by="multiSortBy" :items="sortItems" :fields="sortFields" :multisort="true" />
  <div>multiSortBy = {{ JSON.stringify(multiSortBy) }}</div>
</template>

<script setup lang="ts">
import {BTable, type TableFieldRaw, type TableItem} from 'bootstrap-vue-next'
import {ref} from 'vue'

interface SortPerson {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

const sortItems: TableItem<Person>[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: true, age: 45, first_name: 'Zelda', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: false, age: 89, first_name: 'Gary', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]

const sortFields: Exclude<TableFieldRaw<SortPerson>, string>[] = [
  {key: 'last_name', sortable: true},
  {key: 'first_name', sortable: true},
  {key: 'age', sortable: true},
  {key: 'isActive', sortable: false},
]
</script>
```

  </template>
</HighlightCard>

## Complete Example

<HighlightCard>
  <BContainer class="py-5">
    <!-- User Interface controls -->
    <BRow>
      <BCol lg="6" class="my-1">
        <BFormGroup
          v-slot="{ariaDescribedby}"
          label="Sort"
          label-for="sort-by-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BButton size="sm" @click="onAddSort">Add Sort...</BButton>
          <BInputGroup v-for="sort in sortBy" :key="sort.key" size="sm">
            <BFormSelect
              id="sort-by-select"
              v-model="sort.key"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">-- none --</option>
              </template>
            </BFormSelect>
            <BFormSelect
              v-model="sort.order"
              :disabled="!sortBy"
              :aria-describedby="ariaDescribedby"
              size="sm"
              class="w-25"
            >
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </BFormSelect>
          </BInputGroup>
        </BFormGroup>
      </BCol>
      <BCol lg="6" class="my-1">
        <BFormGroup
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BInputGroup size="sm">
            <BFormInput
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            />
            <BInputGroupAppend>
              <BButton :disabled="!filter" @click="filter = ''">Clear</BButton>
            </BInputGroupAppend>
          </BInputGroup>
        </BFormGroup>
      </BCol>
      <BCol lg="6" class="my-1">
        <BFormGroup
          v-slot="{ariaDescribedby}"
          v-model="sortDirection"
          label="Filter On"
          description="Leave all unchecked to filter on all data"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <div class="d-flex gap-2">
            <BFormCheckbox v-model="filterOn" value="name" :aria-describedby="ariaDescribedby"
              >Name</BFormCheckbox
            >
            <BFormCheckbox v-model="filterOn" value="age" :aria-describedby="ariaDescribedby"
              >Age</BFormCheckbox
            >
            <BFormCheckbox v-model="filterOn" value="isActive" :aria-describedby="ariaDescribedby"
              >Active</BFormCheckbox
            >
          </div>
        </BFormGroup>
      </BCol>
      <BCol sm="5" md="6" class="my-1">
        <BFormGroup
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BFormSelect id="per-page-select" v-model="perPage" :options="pageOptions" size="sm" />
        </BFormGroup>
      </BCol>
      <BCol sm="7" md="6" class="my-1">
        <BPagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          :align="'fill'"
          size="sm"
          class="my-0"
        />
      </BCol>
    </BRow>
    <!-- Main table element for typed table-->
    <BTable
      v-model:sort-by="sortBy"
      :sort-internal="true"
      :items="itemsTyped"
      :fields="fieldsTyped"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :responsive="false"
      :filterable="filterOn"
      :small="true"
      :multisort="true"
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ (row.value as PersonName).first }}
        {{ (row.value as PersonName).last }}
      </template>
      <template #cell(actions)="row">
        <BButton size="sm" class="mr-1" @click="info(row.item, row.index)"> Info modal </BButton>
        <BButton size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </BButton>
      </template>
      <template #row-details="row">
        <BCard>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            <BButton size="sm" @click="row.toggleDetails"> Toggle Details </BButton>
          </ul>
        </BCard>
      </template>
    </BTable>
    <!-- Info modal -->
    <BModal
      :id="infoModal.id"
      v-model="infoModal.open"
      :title="infoModal.title"
      :ok-only="true"
      @hide="resetInfoModal"
    >
      <pre>{{ infoModal.content }}</pre>
    </BModal>
  </BContainer>
  <template #html>

```vue
<template>
  <BContainer class="py-5">
    <!-- User Interface controls -->
    <BRow>
      <BCol lg="6" class="my-1">
        <BFormGroup
          v-slot="{ariaDescribedby}"
          label="Sort"
          label-for="sort-by-select"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BButton size="sm" @click="onAddSort">Add Sort...</BButton>
          <BInputGroup v-for="sort in sortBy" :key="sort.key" size="sm">
            <BFormSelect
              id="sort-by-select"
              v-model="sort.key"
              :options="sortOptions"
              :aria-describedby="ariaDescribedby"
              class="w-75"
            >
              <template #first>
                <option value="">-- none --</option>
              </template>
            </BFormSelect>
            <BFormSelect
              v-model="sort.order"
              :disabled="!sortBy"
              :aria-describedby="ariaDescribedby"
              size="sm"
              class="w-25"
            >
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </BFormSelect>
          </BInputGroup>
        </BFormGroup>
      </BCol>
      <BCol lg="6" class="my-1">
        <BFormGroup
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BInputGroup size="sm">
            <BFormInput
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            />
            <BInputGroupAppend>
              <BButton :disabled="!filter" @click="filter = ''">Clear</BButton>
            </BInputGroupAppend>
          </BInputGroup>
        </BFormGroup>
      </BCol>
      <BCol lg="6" class="my-1">
        <BFormGroup
          v-slot="{ariaDescribedby}"
          v-model="sortDirection"
          label="Filter On"
          description="Leave all unchecked to filter on all data"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <div class="d-flex gap-2">
            <BFormCheckbox v-model="filterOn" value="name" :aria-describedby="ariaDescribedby"
              >Name</BFormCheckbox
            >
            <BFormCheckbox v-model="filterOn" value="age" :aria-describedby="ariaDescribedby"
              >Age</BFormCheckbox
            >
            <BFormCheckbox v-model="filterOn" value="isActive" :aria-describedby="ariaDescribedby"
              >Active</BFormCheckbox
            >
          </div>
        </BFormGroup>
      </BCol>
      <BCol sm="5" md="6" class="my-1">
        <BFormGroup
          label="Per page"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <BFormSelect id="per-page-select" v-model="perPage" :options="pageOptions" size="sm" />
        </BFormGroup>
      </BCol>
      <BCol sm="7" md="6" class="my-1">
        <BPagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          :align="'fill'"
          size="sm"
          class="my-0"
        />
      </BCol>
    </BRow>
    <!-- Main table element for typed table-->
    <BTable
      v-model:sort-by="sortBy"
      :sort-internal="true"
      :items="itemsTyped"
      :fields="fieldsTyped"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :responsive="false"
      :filterable="filterOn"
      :small="true"
      :multisort="true"
      @filtered="onFiltered"
    >
      <template #cell(name)="row">
        {{ (row.value as PersonName).first }}
        {{ (row.value as PersonName).last }}
      </template>
      <template #cell(actions)="row">
        <BButton size="sm" class="mr-1" @click="info(row.item, row.index)"> Info modal </BButton>
        <BButton size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </BButton>
      </template>
      <template #row-details="row">
        <BCard>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
            <BButton size="sm" @click="row.toggleDetails"> Toggle Details </BButton>
          </ul>
        </BCard>
      </template>
    </BTable>
    <!-- Info modal -->
    <BModal
      :id="infoModal.id"
      v-model="infoModal.open"
      :title="infoModal.title"
      :ok-only="true"
      @hide="resetInfoModal"
    >
      <pre>{{ infoModal.content }}</pre>
    </BModal>
  </BContainer>
</template>

<script setup lang="ts">
import {
  BButton,
  BFormSelect,
  BInputGroup,
  BFormCheckbox,
  BFormGroup,
  BCol,
  BFormInput,
  BInputGroupAppend,
  BFormCHeckbox,
  BPagination,
  BRow,
  BModal,
  BContainer,
  BTable,
  type BTableSortBy,
  type ColorVariant,
  type TableFieldRaw,
  type TableItem,
  type LiteralUnion,
} from 'bootstrap-vue-next'
import {computed, reactive, ref} from 'vue'

interface PersonName {
  first: string
  last: string
}

interface Person {
  name: PersonName
  age: number
  isActive: boolean
}

const itemsTyped: TableItem<Person>[] = [
  {isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}},
  {isActive: false, age: 21, name: {first: 'Larsen', last: 'Shaw'}},
  {
    isActive: false,
    age: 9,
    name: {first: 'Mini', last: 'Navarro'},
    _rowVariant: 'success' as ColorVariant,
  },
  {isActive: false, age: 89, name: {first: 'Geneva', last: 'Wilson'}},
  {isActive: true, age: 38, name: {first: 'Jami', last: 'Carney'}},
  {isActive: false, age: 27, name: {first: 'Essie', last: 'Dunlap'}},
  {isActive: true, age: 40, name: {first: 'Thor', last: 'Macdonald'}},
  {
    isActive: true,
    age: 87,
    name: {first: 'Larsen', last: 'Shaw'},
    _cellVariants: {age: 'danger', isActive: 'warning'},
  },
  {isActive: false, age: 26, name: {first: 'Mitzi', last: 'Navarro'}},
  {isActive: false, age: 22, name: {first: 'Genevieve', last: 'Wilson'}},
  {isActive: true, age: 38, name: {first: 'John', last: 'Carney'}},
  {isActive: false, age: 29, name: {first: 'Dick', last: 'Dunlap'}},
]

const fieldsTyped: Exclude<TableFieldRaw<Person>, string>[] = [
  {
    key: 'name',
    label: 'Person full name',
    sortable: true,
    sortDirection: 'desc',
  },
  {
    key: 'sortableName',
    label: 'Person sortable name',
    sortable: true,
    sortDirection: 'desc',
    formatter: (_value: unknown, _key?: LiteralUnion<keyof Person>, item?: Person) =>
      item ? `${item.name.last}, ${item.name.first}` : 'Something went wrong',
    sortByFormatted: true,
    filterByFormatted: true,
  },
  {key: 'age', label: 'Person age', sortable: true, class: 'text-center'},
  {
    key: 'isActive',
    label: 'Is Active',
    formatter: (value: unknown) => (value ? 'Yes' : 'No'),
    sortable: true,
    sortByFormatted: true,
    filterByFormatted: true,
  },
  {key: 'actions', label: 'Actions'},
]

const pageOptions = [
  {value: 5, text: '5'},
  {value: 10, text: '10'},
  {value: 15, text: '15'},
  {value: 100, text: 'Show a lot'},
]

const totalRows = ref(itemsTyped.length)
const currentPage = ref(1)
const perPage = ref(5)
const sortBy = ref<BTableSortBy[]>([])
const sortDirection = ref('asc')
const filter = ref('')
const filterOn = ref([])
const infoModal = reactive({
  open: false,
  id: 'info-modal',
  title: '',
  content: '',
})

// Create an options list from our fields
const sortOptions = computed(() =>
  fieldsTyped.filter((f) => f.sortable).map((f) => ({text: f.label, value: f.key}))
)

function info(item: TableItem<Person>, index: number) {
  infoModal.title = `Row index: ${index}`
  infoModal.content = JSON.stringify(item, null, 2)
  infoModal.open = true
}

function resetInfoModal() {
  infoModal.title = ''
  infoModal.content = ''
}

function onFiltered(filteredItems: TableItem<Person>[]) {
  // Trigger pagination to update the number of buttons/pages due to filtering
  totalRows.value = filteredItems.length
  currentPage.value = 1
}

function onAddSort() {
  sortBy.value.push({key: '', order: 'asc'})
}
</script>
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/table.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {
  BButton,
  BCard,
  BCardBody,
  BCol,
  BContainer,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BInputGroup,
  BInputGroupAppend,
  BModal,
  BPagination,
  BRow,
  BTable,
  BTableSimple,
  type BTableSortBy,
  BTd,
  BTbody,
  BTfoot,
  BThead,
  BTh,
  BTr,
  type ColorVariant,
  type LiteralUnion,
  type TableFieldRaw,
  type TableItem
} from 'bootstrap-vue-next'
import {computed, reactive, ref} from 'vue'

interface SortPerson {
  first_name: string
  last_name: string
  age: number
  isActive: boolean
}

const singleSortBy = ref<BTableSortBy[]>([{key: 'first_name', order: 'desc'}])

const multiSortBy = ref<BTableSortBy[]>([
  {key: 'last_name', order: 'asc'},
  {key: 'first_name', order: 'asc'},
])

const sortItems: TableItem<SortPerson>[] = [
  {isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald'},
  {isActive: true, age: 45, first_name: 'Zelda', last_name: 'Macdonald'},
  {isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw'},
  {isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson'},
  {isActive: false, age: 89, first_name: 'Gary', last_name: 'Wilson'},
  {isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney'},
]

const sortFields: Exclude<TableFieldRaw<SortPerson>, string>[] = [
  {key: 'last_name', sortable: true},
  {key: 'first_name', sortable: true},
  {key: 'age', sortable: true},
  {key: 'isActive', sortable: false},
]

interface PersonName {
  first: string
  last: string
}

interface Person {
  name: PersonName
  age: number
  isActive: boolean
}

const itemsTyped: TableItem<Person>[] = [
  {isActive: true, age: 40, name: {first: 'Dickerson', last: 'Macdonald'}},
  {isActive: false, age: 21, name: {first: 'Larsen', last: 'Shaw'}},
  {
    isActive: false,
    age: 9,
    name: {first: 'Mini', last: 'Navarro'},
    _rowVariant: 'success' as ColorVariant,
  },
  {isActive: false, age: 89, name: {first: 'Geneva', last: 'Wilson'}},
  {isActive: true, age: 38, name: {first: 'Jami', last: 'Carney'}},
  {isActive: false, age: 27, name: {first: 'Essie', last: 'Dunlap'}},
  {isActive: true, age: 40, name: {first: 'Thor', last: 'Macdonald'}},
  {
    isActive: true,
    age: 87,
    name: {first: 'Larsen', last: 'Shaw'},
    _cellVariants: {age: 'danger', isActive: 'warning'},
  },
  {isActive: false, age: 26, name: {first: 'Mitzi', last: 'Navarro'}},
  {isActive: false, age: 22, name: {first: 'Genevieve', last: 'Wilson'}},
  {isActive: true, age: 38, name: {first: 'John', last: 'Carney'}},
  {isActive: false, age: 29, name: {first: 'Dick', last: 'Dunlap'}},
]

const fieldsTyped: Exclude<TableFieldRaw<Person>, string>[] = [
  {
    key: 'name',
    label: 'Person full name',
    sortable: true,
    sortDirection: 'desc',
  },
  {
    key: 'sortableName',
    label: 'Person sortable name',
    sortable: true,
    sortDirection: 'desc',
    formatter: (_value: unknown, _key?: LiteralUnion<keyof Person>, item?: Person) =>
      item ? `${item.name.last}, ${item.name.first}` : 'Something went wrong',
    sortByFormatted: true,
    filterByFormatted: true,
  },
  {key: 'age', label: 'Person age', sortable: true, class: 'text-center'},
  {
    key: 'isActive',
    label: 'Is Active',
    formatter: (value: unknown) => (value ? 'Yes' : 'No'),
    sortable: true,
    sortByFormatted: true,
    filterByFormatted: true,
  },
  {key: 'actions', label: 'Actions'},
]

const pageOptions = [
  {value: 5, text: '5'},
  {value: 10, text: '10'},
  {value: 15, text: '15'},
  {value: 100, text: 'Show a lot'},
]

const totalRows = ref(itemsTyped.length)
const currentPage = ref(1)
const perPage = ref(5)
const sortBy = ref<BTableSortBy[]>([])
const sortDirection = ref('asc')
const filter = ref('')
const filterOn = ref([])
const infoModal = reactive({
  open: false,
  id: 'info-modal',
  title: '',
  content: '',
})

// Create an options list from our fields
const sortOptions = computed(() =>
  fieldsTyped.filter((f) => f.sortable).map((f) => ({text: f.label, value: f.key}))
)

function info(item: TableItem<Person>, index: number) {
  infoModal.title = `Row index: ${index}`
  infoModal.content = JSON.stringify(item, null, 2)
  infoModal.open = true
}

function resetInfoModal() {
  infoModal.title = ''
  infoModal.content = ''
}

function onFiltered(filteredItems: TableItem<Person>[]) {
  // Trigger pagination to update the number of buttons/pages due to filtering
  totalRows.value = filteredItems.length
  currentPage.value = 1
}

function onAddSort() {
  sortBy.value.push({key: '', order: 'asc'})
}

</script>
