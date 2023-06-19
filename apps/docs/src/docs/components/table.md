# Tables

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

For displaying tabular data, `<b-table>` supports pagination, filtering, sorting, custom rendering, various style options, events, and asynchronous data. For simple display of tabular data without all the fancy features, BootstrapVueNext provides two lightweight alternative components `<b-table-lite>` and `<b-table-simple>`.

</div>

## Simple tables

The `<b-table-simple>` component gives the user complete control over the rendering of the table content, while providing basic Bootstrap v4 table styling. `<b-table-simple>` is a wrapper component around the `<table>` element. Inside the component, via the default slot, you can use any or all of the BootstrapVue table helper components: `<b-thead>`, `<b-tfoot>`, `<b-tbody>`, `<b-tr>`, `<b-th>`, `<b-td>`, and the HTML5 elements `<caption>`, `<colgroup>` and `<col>`. Contrary to the component's name, one can create simple or complex table layouts with `<b-table-simple>`.

`<b-table-simple>` provides basic styling options via props: striped, bordered, borderless, outlined, small, hover, dark, fixed, responsive and sticky-header. Note that stacked mode is available but requires some additional markup to generate the cell headings, as described in the Simple tables and stacked mode section below. Sticky columns are also supported, but also require a bit of additional markup to specify which columns are to be sticky. See below for more information on using sticky columns.

Since b-table-simple is just a wrapper component, of which you will need to render content inside, it does not provide any of the advanced features of `<b-table>` (i.e. row events, head events, sorting, pagination, filtering, foot-clone, items, fields, etc.).

<HighlightCard>
  <b-table-simple hover small caption-top responsive>
    <caption>Items sold in August, grouped by Country and City:</caption>
    <colgroup><col><col></colgroup>
    <colgroup><col><col><col></colgroup>
    <colgroup><col><col></colgroup>
    <b-thead head-variant="dark">
      <b-tr>
        <b-th colspan="2">Region</b-th>
        <b-th colspan="3">Clothes</b-th>
        <b-th colspan="2">Accessories</b-th>
      </b-tr>
      <b-tr>
        <b-th>Country</b-th>
        <b-th>City</b-th>
        <b-th>Trousers</b-th>
        <b-th>Skirts</b-th>
        <b-th>Dresses</b-th>
        <b-th>Bracelets</b-th>
        <b-th>Rings</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr>
        <b-th rowspan="3">Belgium</b-th>
        <b-th class="text-end">Antwerp</b-th>
        <b-td>56</b-td>
        <b-td>22</b-td>
        <b-td>43</b-td>
        <b-td variant="success">72</b-td>
        <b-td>23</b-td>
      </b-tr>
      <b-tr>
        <b-th class="text-end">Gent</b-th>
        <b-td>46</b-td>
        <b-td variant="warning">18</b-td>
        <b-td>50</b-td>
        <b-td>61</b-td>
        <b-td variant="danger">15</b-td>
      </b-tr>
      <b-tr>
        <b-th class="text-end">Brussels</b-th>
        <b-td>51</b-td>
        <b-td>27</b-td>
        <b-td>38</b-td>
        <b-td>69</b-td>
        <b-td>28</b-td>
      </b-tr>
      <b-tr>
        <b-th rowspan="2">The Netherlands</b-th>
        <b-th class="text-end">Amsterdam</b-th>
        <b-td variant="success">89</b-td>
        <b-td>34</b-td>
        <b-td>69</b-td>
        <b-td>85</b-td>
        <b-td>38</b-td>
      </b-tr>
      <b-tr>
        <b-th class="text-end">Utrecht</b-th>
        <b-td>80</b-td>
        <b-td variant="danger">12</b-td>
        <b-td>43</b-td>
        <b-td>36</b-td>
        <b-td variant="warning">19</b-td>
      </b-tr>
    </b-tbody>
    <b-tfoot>
      <b-tr>
        <b-td colspan="7" variant="secondary" class="text-end">
          Total Rows: <b>5</b>
        </b-td>
      </b-tr>
    </b-tfoot>
  </b-table-simple>
  <template #html>

```vue-html
<b-table-simple hover small caption-top responsive>
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
  <b-thead head-variant="dark">
    <b-tr>
      <b-th colspan="2">Region</b-th>
      <b-th colspan="3">Clothes</b-th>
      <b-th colspan="2">Accessories</b-th>
    </b-tr>
    <b-tr>
      <b-th>Country</b-th>
      <b-th>City</b-th>
      <b-th>Trousers</b-th>
      <b-th>Skirts</b-th>
      <b-th>Dresses</b-th>
      <b-th>Bracelets</b-th>
      <b-th>Rings</b-th>
    </b-tr>
  </b-thead>
  <b-tbody>
    <b-tr>
      <b-th rowspan="3">Belgium</b-th>
      <b-th class="text-end">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td variant="success">72</b-td>
      <b-td>23</b-td>
    </b-tr>
    <b-tr>
      <b-th class="text-end">Gent</b-th>
      <b-td>46</b-td>
      <b-td variant="warning">18</b-td>
      <b-td>50</b-td>
      <b-td>61</b-td>
      <b-td variant="danger">15</b-td>
    </b-tr>
    <b-tr>
      <b-th class="text-end">Brussels</b-th>
      <b-td>51</b-td>
      <b-td>27</b-td>
      <b-td>38</b-td>
      <b-td>69</b-td>
      <b-td>28</b-td>
    </b-tr>
    <b-tr>
      <b-th rowspan="2">The Netherlands</b-th>
      <b-th class="text-end">Amsterdam</b-th>
      <b-td variant="success">89</b-td>
      <b-td>34</b-td>
      <b-td>69</b-td>
      <b-td>85</b-td>
      <b-td>38</b-td>
    </b-tr>
    <b-tr>
      <b-th class="text-end">Utrecht</b-th>
      <b-td>80</b-td>
      <b-td variant="danger">12</b-td>
      <b-td>43</b-td>
      <b-td>36</b-td>
      <b-td variant="warning">19</b-td>
    </b-tr>
  </b-tbody>
  <b-tfoot>
    <b-tr>
      <b-td colspan="7" variant="secondary" class="text-end"> Total Rows: <b>5</b> </b-td>
    </b-tr>
  </b-tfoot>
</b-table-simple>
```

  </template>
</HighlightCard>

When in responsive or sticky-header mode, the `<table>` element is wrapped inside a `<div>` element. If you need to apply additional classes to the `<table>` element, use the table-classes prop.

Any additional attributes given to `<b-table-simple>` will always be applied to the `<table>` element.

## Simple tables and stacked mode

A bit of additional markup is required on your `<b-table-simple>` body cells when the table is in stacked mode. Specifically, BootstrapVue uses a special data attribute to create the cell's heading, of which you can supply to `<b-td>` or `<b-th>` via the stacked-heading prop. Only plain strings are supported (not HTML markup), as we use the pseudo element ::before and css content property.

Here is the same table as above, set to be always stacked, which has the extra markup to handle stacked mode (specifically for generating the cell headings):

<HighlightCard>
  <b-table-simple hover small caption-top stacked>
    <caption>Items sold in August, grouped by Country and City:</caption>
    <colgroup><col><col></colgroup>
    <colgroup><col><col><col></colgroup>
    <colgroup><col><col></colgroup>
    <b-thead head-variant="dark">
      <b-tr>
        <b-th colspan="2">Region</b-th>
        <b-th colspan="3">Clothes</b-th>
        <b-th colspan="2">Accessories</b-th>
      </b-tr>
      <b-tr>
        <b-th>Country</b-th>
        <b-th>City</b-th>
        <b-th>Trousers</b-th>
        <b-th>Skirts</b-th>
        <b-th>Dresses</b-th>
        <b-th>Bracelets</b-th>
        <b-th>Rings</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr>
        <b-th rowspan="3" class="text-center">Belgium (3 Cities)</b-th>
        <b-th stacked-heading="City" class="text-start">Antwerp</b-th>
        <b-td stacked-heading="Clothes: Trousers">56</b-td>
        <b-td stacked-heading="Clothes: Skirts">22</b-td>
        <b-td stacked-heading="Clothes: Dresses">43</b-td>
        <b-td stacked-heading="Accessories: Bracelets" variant="success">72</b-td>
        <b-td stacked-heading="Accessories: Rings">23</b-td>
      </b-tr>
      <b-tr>
        <b-th stacked-heading="City">Gent</b-th>
        <b-td stacked-heading="Clothes: Trousers">46</b-td>
        <b-td stacked-heading="Clothes: Skirts" variant="warning">18</b-td>
        <b-td stacked-heading="Clothes: Dresses">50</b-td>
        <b-td stacked-heading="Accessories: Bracelets">61</b-td>
        <b-td stacked-heading="Accessories: Rings" variant="danger">15</b-td>
      </b-tr>
      <b-tr>
        <b-th stacked-heading="City">Brussels</b-th>
        <b-td stacked-heading="Clothes: Trousers">51</b-td>
        <b-td stacked-heading="Clothes: Skirts">27</b-td>
        <b-td stacked-heading="Clothes: Dresses">38</b-td>
        <b-td stacked-heading="Accessories: Bracelets">69</b-td>
        <b-td stacked-heading="Accessories: Rings">28</b-td>
      </b-tr>
      <b-tr>
        <b-th rowspan="2" class="text-center">The Netherlands (2 Cities)</b-th>
        <b-th stacked-heading="City">Amsterdam</b-th>
        <b-td stacked-heading="Clothes: Trousers" variant="success">89</b-td>
        <b-td stacked-heading="Clothes: Skirts">34</b-td>
        <b-td stacked-heading="Clothes: Dresses">69</b-td>
        <b-td stacked-heading="Accessories: Bracelets">85</b-td>
        <b-td stacked-heading="Accessories: Rings">38</b-td>
      </b-tr>
      <b-tr>
        <b-th stacked-heading="City">Utrecht</b-th>
        <b-td stacked-heading="Clothes: Trousers">80</b-td>
        <b-td stacked-heading="Clothes: Skirts" variant="danger">12</b-td>
        <b-td stacked-heading="Clothes: Dresses">43</b-td>
        <b-td stacked-heading="Accessories: Bracelets">36</b-td>
        <b-td stacked-heading="Accessories: Rings" variant="warning">19</b-td>
      </b-tr>
    </b-tbody>
    <b-tfoot>
      <b-tr>
        <b-td colspan="7" variant="secondary" class="text-end">
          Total Rows: <b>5</b>
        </b-td>
      </b-tr>
    </b-tfoot>
  </b-table-simple>
  <template #html>

```vue-html
<b-table-simple hover small caption-top stacked>
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
  <b-thead head-variant="dark">
    <b-tr>
      <b-th colspan="2">Region</b-th>
      <b-th colspan="3">Clothes</b-th>
      <b-th colspan="2">Accessories</b-th>
    </b-tr>
    <b-tr>
      <b-th>Country</b-th>
      <b-th>City</b-th>
      <b-th>Trousers</b-th>
      <b-th>Skirts</b-th>
      <b-th>Dresses</b-th>
      <b-th>Bracelets</b-th>
      <b-th>Rings</b-th>
    </b-tr>
  </b-thead>
  <b-tbody>
    <b-tr>
      <b-th rowspan="3" class="text-center">Belgium (3 Cities)</b-th>
      <b-th stacked-heading="City" class="text-start">Antwerp</b-th>
      <b-td stacked-heading="Clothes: Trousers">56</b-td>
      <b-td stacked-heading="Clothes: Skirts">22</b-td>
      <b-td stacked-heading="Clothes: Dresses">43</b-td>
      <b-td stacked-heading="Accessories: Bracelets" variant="success">72</b-td>
      <b-td stacked-heading="Accessories: Rings">23</b-td>
    </b-tr>
    <b-tr>
      <b-th stacked-heading="City">Gent</b-th>
      <b-td stacked-heading="Clothes: Trousers">46</b-td>
      <b-td stacked-heading="Clothes: Skirts" variant="warning">18</b-td>
      <b-td stacked-heading="Clothes: Dresses">50</b-td>
      <b-td stacked-heading="Accessories: Bracelets">61</b-td>
      <b-td stacked-heading="Accessories: Rings" variant="danger">15</b-td>
    </b-tr>
    <b-tr>
      <b-th stacked-heading="City">Brussels</b-th>
      <b-td stacked-heading="Clothes: Trousers">51</b-td>
      <b-td stacked-heading="Clothes: Skirts">27</b-td>
      <b-td stacked-heading="Clothes: Dresses">38</b-td>
      <b-td stacked-heading="Accessories: Bracelets">69</b-td>
      <b-td stacked-heading="Accessories: Rings">28</b-td>
    </b-tr>
    <b-tr>
      <b-th rowspan="2" class="text-center">The Netherlands (2 Cities)</b-th>
      <b-th stacked-heading="City">Amsterdam</b-th>
      <b-td stacked-heading="Clothes: Trousers" variant="success">89</b-td>
      <b-td stacked-heading="Clothes: Skirts">34</b-td>
      <b-td stacked-heading="Clothes: Dresses">69</b-td>
      <b-td stacked-heading="Accessories: Bracelets">85</b-td>
      <b-td stacked-heading="Accessories: Rings">38</b-td>
    </b-tr>
    <b-tr>
      <b-th stacked-heading="City">Utrecht</b-th>
      <b-td stacked-heading="Clothes: Trousers">80</b-td>
      <b-td stacked-heading="Clothes: Skirts" variant="danger">12</b-td>
      <b-td stacked-heading="Clothes: Dresses">43</b-td>
      <b-td stacked-heading="Accessories: Bracelets">36</b-td>
      <b-td stacked-heading="Accessories: Rings" variant="warning">19</b-td>
    </b-tr>
  </b-tbody>
  <b-tfoot>
    <b-tr>
      <b-td colspan="7" variant="secondary" class="text-end"> Total Rows: <b>5</b> </b-td>
    </b-tr>
  </b-tfoot>
</b-table-simple>
```

  </template>
</HighlightCard>

Like `<b-table>` and `<b-table-lite>`, table headers (`<thead>`) and footers (`<tfoot>`) are visually hidden when the table is visually stacked. If you need a header or footer, you can do so by creating an extra `<b-tr>` inside of the `<b-tbody>` component (or in a second `<b-tbody>` component), and set a role of columnheader on the child `<b-th>` cells, and use Bootstrap v4 responsive display utility classes to hide the extra row (or `<b-tbody>`) above a certain breakpoint when the table is no longer visually stacked (the breakpoint should match the stacked table breakpoint you have set), i.e. `<b-tr class="d-md-none">` would hide the row on medium and wider screens, while `<b-tbody class="d-md-none">` would hide the row group on medium and wider screens.

Note: stacked mode with `<b-table-simple>` requires that you use the BootstrapVue table helper components. Use of the regular `<tbody>`, `<tr>`, `<td>` and `<th>` element tags will not work as expected, nor will they automatically apply any of the required accessibility attributes.

## Simple tables and sticky columns

Sticky columns are supported with `<b-table-simple>`, but you will need to set the sticky-column prop on each table cell (in the thead, tbody, and tfoot row groups) in the column that is to be sticky. For example:

<HighlightCard>
  <b-table-simple responsive>
    <b-thead>
      <b-tr>
        <b-th sticky-column>Sticky Column Header</b-th>
        <b-th>Heading 1</b-th>
        <b-th>Heading 2</b-th>
        <b-th>Heading 3</b-th>
        <b-th>Heading 4</b-th>
      </b-tr>
    </b-thead>
    <b-tbody>
      <b-tr>
        <b-th sticky-column>Sticky Column Row Header</b-th>
        <b-td>Cell</b-td>
        <b-td>Cell</b-td>
        <b-td>Cell</b-td>
        <b-td>Cell</b-td>
      </b-tr>
      <b-tr>
        <b-th sticky-column>Sticky Column Row Header</b-th>
        <b-td>Cell</b-td>
        <b-td>Cell</b-td>
        <b-td>Cell</b-td>
        <b-td>Cell</b-td>
      </b-tr>
    </b-tbody>
    <b-tfoot>
      <b-tr>
        <b-th sticky-column>Sticky Column Footer</b-th>
        <b-th>Heading 1</b-th>
        <b-th>Heading 2</b-th>
        <b-th>Heading 3</b-th>
        <b-th>Heading 4</b-th>
      </b-tr>
    </b-tfoot>
  </b-table-simple>
  <template #html>

```vue-html
<b-table-simple responsive>
  <b-thead>
    <b-tr>
      <b-th sticky-column>Sticky Column Header</b-th>
      <b-th>Heading 1</b-th>
      <b-th>Heading 2</b-th>
      <b-th>Heading 3</b-th>
      <b-th>Heading 4</b-th>
    </b-tr>
  </b-thead>
  <b-tbody>
    <b-tr>
      <b-th sticky-column>Sticky Column Row Header</b-th>
      <b-td>Cell</b-td>
      <b-td>Cell</b-td>
      <b-td>Cell</b-td>
      <b-td>Cell</b-td>
    </b-tr>
    <b-tr>
      <b-th sticky-column>Sticky Column Row Header</b-th>
      <b-td>Cell</b-td>
      <b-td>Cell</b-td>
      <b-td>Cell</b-td>
      <b-td>Cell</b-td>
    </b-tr>
  </b-tbody>
  <b-tfoot>
    <b-tr>
      <b-th sticky-column>Sticky Column Footer</b-th>
      <b-th>Heading 1</b-th>
      <b-th>Heading 2</b-th>
      <b-th>Heading 3</b-th>
      <b-th>Heading 4</b-th>
    </b-tr>
  </b-tfoot>
</b-table-simple>
```

  </template>
</HighlightCard>

As with `<b-table>` and `<b-table-lite>`, sticky columns are not supported when the stacked prop is set on `<b-table-simple>`.

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/table.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BTableSimple, BTd, BTbody, BTfoot, BThead, BTh, BTr} from 'bootstrap-vue-next'
</script>
