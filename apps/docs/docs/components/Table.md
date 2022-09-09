# Tables

For displaying tabular data, `<b-table>` supports pagination, filtering, sorting, custom rendering, various style options, events, and asynchronous data. For simple display of tabular data without all the fancy features, BootstrapVue3 provides two lightweight alternative components `<b-table-lite>` and `<b-table-simple>`.

## Volatility warning

This component has gone through a number of changes recently. There may frequently be breaking changes between updates. In addition, the documentation could be out of date.

## Simple tables

The `<b-table-simple>` component gives the user complete control over the rendering of the table content, while providing basic Bootstrap v4 table styling. `<b-table-simple>` is a wrapper component around the `<table>` element. Inside the component, via the default slot, you can use any or all of the BootstrapVue table helper components: `<b-thead>`, `<b-tfoot>`, `<b-tbody>`, `<b-tr>`, `<b-th>`, `<b-td>`, and the HTML5 elements `<caption>`, `<colgroup>` and `<col>`. Contrary to the component's name, one can create simple or complex table layouts with `<b-table-simple>`.

`<b-table-simple>` provides basic styling options via props: striped, bordered, borderless, outlined, small, hover, dark, fixed, responsive and sticky-header. Note that stacked mode is available but requires some additional markup to generate the cell headings, as described in the Simple tables and stacked mode section below. Sticky columns are also supported, but also require a bit of additional markup to specify which columns are to be sticky. See below for more information on using sticky columns.

Since b-table-simple is just a wrapper component, of which you will need to render content inside, it does not provide any of the advanced features of `<b-table>` (i.e. row events, head events, sorting, pagination, filtering, foot-clone, items, fields, etc.).

<ClientOnly>
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
          <b-th class="text-right">Antwerp</b-th>
          <b-td>56</b-td>
          <b-td>22</b-td>
          <b-td>43</b-td>
          <b-td variant="success">72</b-td>
          <b-td>23</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-right">Gent</b-th>
          <b-td>46</b-td>
          <b-td variant="warning">18</b-td>
          <b-td>50</b-td>
          <b-td>61</b-td>
          <b-td variant="danger">15</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-right">Brussels</b-th>
          <b-td>51</b-td>
          <b-td>27</b-td>
          <b-td>38</b-td>
          <b-td>69</b-td>
          <b-td>28</b-td>
        </b-tr>
        <b-tr>
          <b-th rowspan="2">The Netherlands</b-th>
          <b-th class="text-right">Amsterdam</b-th>
          <b-td variant="success">89</b-td>
          <b-td>34</b-td>
          <b-td>69</b-td>
          <b-td>85</b-td>
          <b-td>38</b-td>
        </b-tr>
        <b-tr>
          <b-th class="text-right">Utrecht</b-th>
          <b-td>80</b-td>
          <b-td variant="danger">12</b-td>
          <b-td>43</b-td>
          <b-td>36</b-td>
          <b-td variant="warning">19</b-td>
        </b-tr>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td colspan="7" variant="secondary" class="text-right">
            Total Rows: <b>5</b>
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
</ClientOnly>

```html
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
      <b-th class="text-right">Antwerp</b-th>
      <b-td>56</b-td>
      <b-td>22</b-td>
      <b-td>43</b-td>
      <b-td variant="success">72</b-td>
      <b-td>23</b-td>
    </b-tr>
    <b-tr>
      <b-th class="text-right">Gent</b-th>
      <b-td>46</b-td>
      <b-td variant="warning">18</b-td>
      <b-td>50</b-td>
      <b-td>61</b-td>
      <b-td variant="danger">15</b-td>
    </b-tr>
    <b-tr>
      <b-th class="text-right">Brussels</b-th>
      <b-td>51</b-td>
      <b-td>27</b-td>
      <b-td>38</b-td>
      <b-td>69</b-td>
      <b-td>28</b-td>
    </b-tr>
    <b-tr>
      <b-th rowspan="2">The Netherlands</b-th>
      <b-th class="text-right">Amsterdam</b-th>
      <b-td variant="success">89</b-td>
      <b-td>34</b-td>
      <b-td>69</b-td>
      <b-td>85</b-td>
      <b-td>38</b-td>
    </b-tr>
    <b-tr>
      <b-th class="text-right">Utrecht</b-th>
      <b-td>80</b-td>
      <b-td variant="danger">12</b-td>
      <b-td>43</b-td>
      <b-td>36</b-td>
      <b-td variant="warning">19</b-td>
    </b-tr>
  </b-tbody>
  <b-tfoot>
    <b-tr>
      <b-td colspan="7" variant="secondary" class="text-right"> Total Rows: <b>5</b> </b-td>
    </b-tr>
  </b-tfoot>
</b-table-simple>
```

When in responsive or sticky-header mode, the `<table>` element is wrapped inside a `<div>` element. If you need to apply additional classes to the `<table>` element, use the table-classes prop.

Any additional attributes given to `<b-table-simple>` will always be applied to the `<table>` element.

## Simple tables and stacked mode

A bit of additional markup is required on your `<b-table-simple>` body cells when the table is in stacked mode. Specifically, BootstrapVue uses a special data attribute to create the cell's heading, of which you can supply to `<b-td>` or `<b-th>` via the stacked-heading prop. Only plain strings are supported (not HTML markup), as we use the pseudo element ::before and css content property.

Here is the same table as above, set to be always stacked, which has the extra markup to handle stacked mode (specifically for generating the cell headings):

<ClientOnly>
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
          <b-th stacked-heading="City" class="text-left">Antwerp</b-th>
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
          <b-td colspan="7" variant="secondary" class="text-right">
            Total Rows: <b>5</b>
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
</ClientOnly>

```html
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
      <b-th stacked-heading="City" class="text-left">Antwerp</b-th>
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
      <b-td colspan="7" variant="secondary" class="text-right"> Total Rows: <b>5</b> </b-td>
    </b-tr>
  </b-tfoot>
</b-table-simple>
```

Like `<b-table>` and `<b-table-lite>`, table headers (`<thead>`) and footers (`<tfoot>`) are visually hidden when the table is visually stacked. If you need a header or footer, you can do so by creating an extra `<b-tr>` inside of the `<b-tbody>` component (or in a second `<b-tbody>` component), and set a role of columnheader on the child `<b-th>` cells, and use Bootstrap v4 responsive display utility classes to hide the extra row (or `<b-tbody>`) above a certain breakpoint when the table is no longer visually stacked (the breakpoint should match the stacked table breakpoint you have set), i.e. `<b-tr class="d-md-none">` would hide the row on medium and wider screens, while `<b-tbody class="d-md-none">` would hide the row group on medium and wider screens.

Note: stacked mode with `<b-table-simple>` requires that you use the BootstrapVue table helper components. Use of the regular `<tbody>`, `<tr>`, `<td>` and `<th>` element tags will not work as expected, nor will they automatically apply any of the required accessibility attributes.

## Simple tables and sticky columns

Sticky columns are supported with `<b-table-simple>`, but you will need to set the sticky-column prop on each table cell (in the thead, tbody, and tfoot row groups) in the column that is to be sticky. For example:

<ClientOnly>
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
</ClientOnly>

```html
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

As with `<b-table>` and `<b-table-lite>`, sticky columns are not supported when the stacked prop is set on `<b-table-simple>`.

## Component reference

### `<b-table-simple>`

#### Properties

| Property        | Type                            | Default | Description                                                                                                                                                                                        |
| --------------- | ------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bordered`      | `Boolean`                       | `false` | Adds borders to all the cells and headers                                                                                                                                                          |
| `borderless`    | `Boolean`                       | `false` | Removes all borders from cells                                                                                                                                                                     |
| `caption-top`   | `Boolean`                       | `false` | Visually place the table caption above the table. Default is below                                                                                                                                 |
| `dark`          | `Boolean`                       | `false` | Places the table in dark mode                                                                                                                                                                      |
| `hover`         | `Boolean`                       | `false` | Enables hover styling on rows                                                                                                                                                                      |
| `outlined`      | `Boolean`                       | `false` | Adds an outline border to the table element                                                                                                                                                        |
| `responsive`    | `Boolean` or `String`           | `false` | Makes the table responsive in width, adding a horizontal scrollbar. Set to true for always responsive or set to one of the breakpoints to switch from responsive to normal: 'sm', 'md', 'lg', 'xl' |
| `small`         | `Boolean`                       | `false` | Renders the table with smaller cell padding                                                                                                                                                        |
| `stacked`       | `Boolean` or `String`           | `false` | Place the table in stacked mode. Set to true for always stacked, or set to one of the breakpoints to switch from stacked to normal: 'sm', 'md', 'lg', 'xl'                                         |
| `striped`       | `Boolean`                       | `false` | Applies striping to the tbody rows                                                                                                                                                                 |
| `table-class`   | `Array` or `Object` or `String` |         | CSS class (or classes) to apply to the table element                                                                                                                                               |
| `table-variant` | `String`                        |         | Apply a Bootstrap theme color variant to the entire table                                                                                                                                          |

#### Slots

| Name      | Description                   |
| --------- | ----------------------------- |
| `default` | Content to place in the table |

### `<b-tbody>`

#### Slots

| Name      | Description                   |
| --------- | ----------------------------- |
| `default` | Content to place in the tbody |

### `<b-thead>`

#### Properties

| Property       | Type     | Default | Description                                 |
| -------------- | -------- | ------- | ------------------------------------------- |
| `head-variant` | `String` |         | Header variant: 'light' or 'dark', or unset |

#### Slots

| Name      | Description                   |
| --------- | ----------------------------- |
| `default` | Content to place in the thead |

### `<b-tfoot>`

#### Properties

| Property       | Type     | Default | Description                                 |
| -------------- | -------- | ------- | ------------------------------------------- |
| `foot-variant` | `String` |         | Footer variant: 'light' or 'dark', or unset |

#### Slots

| Name      | Description                   |
| --------- | ----------------------------- |
| `default` | Content to place in the tfoot |

### `<b-tr>`

#### Properties

| Property  | Type     | Default | Description                                                        |
| --------- | -------- | ------- | ------------------------------------------------------------------ |
| `variant` | `String` |         | Applies one of the Bootstrap theme color variants to the component |

#### Slots

| Name      | Description                |
| --------- | -------------------------- |
| `default` | Content to place in the tr |

### `<b-td>`

#### Properties

| Property          | Type                 | Default | Description                                                                                                                        |
| ----------------- | -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `colspan`         | `Number` or `String` | `null`  | Number of columns this cell spans                                                                                                  |
| `rowspan`         | `Number` or `String` | `null`  | Number of rows this cell spans                                                                                                     |
| `stacked-heading` | `String`             |         | Heading for the cell when in stacked mode. Only applicable to cells in the 'tbody' element                                         |
| `sticky-column`   | `Boolean`            | `false` | If this will be a sticky colum. Must be set on all cells in this column. table must be in sticky-header or responsive mode to work |
| `variant`         | `String`             |         | Applies one of the Bootstrap theme color variants to the component                                                                 |

#### Slots

| Name      | Description                |
| --------- | -------------------------- |
| `default` | Content to place in the td |

### `<b-th>`

#### Properties

| Property          | Type                 | Default | Description                                                                                                                        |
| ----------------- | -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `colspan`         | `Number` or `String` | `null`  | Number of columns this cell spans                                                                                                  |
| `rowspan`         | `Number` or `String` | `null`  | Number of rows this cell spans                                                                                                     |
| `stacked-heading` | `String`             |         | Heading for the cell when in stacked mode. Only applicable to cells in the 'tbody' element                                         |
| `sticky-column`   | `Boolean`            | `false` | If this will be a sticky colum. Must be set on all cells in this column. table must be in sticky-header or responsive mode to work |
| `variant`         | `String`             |         | Applies one of the Bootstrap theme color variants to the component                                                                 |

#### Slots

| Name      | Description                |
| --------- | -------------------------- |
| `default` | Content to place in the th |
