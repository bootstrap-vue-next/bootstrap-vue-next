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

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/table.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BTableSimple, BTd, BTbody, BTfoot, BThead, BTh, BTr} from 'bootstrap-vue-next'
</script>
