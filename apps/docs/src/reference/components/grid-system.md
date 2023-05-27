# Grid System

<div class="lead mb-5">

Bootstrap Vue offers several utility components to assist in building your grid layout.
Using `<b-container>` and a combination of `<b-row>` and `<b-col>`, a responsive layout can be built with ease.
For more detailed documentation and understanding, please visit Bootstrap's official Grid System.

</div>

<b-card no-body class="mb-5">
  <b-card-body>
    <b-container>
      <b-row class="bd-example-row">
        <b-col>
          Column
        </b-col>
          <b-col>
          Column
        </b-col>
          <b-col>
          Column
        </b-col>
      </b-row>
    </b-container>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-container>
  <b-row>
    <b-col>
      Column
    </b-col>
      <b-col>
      Column
    </b-col>
      <b-col>
      Column
    </b-col>
  </b-row>
</b-container>
```

  </b-card-body>

</b-card>

## Variable width content

<b-card no-body class="mb-5">
  <b-card-body>
    <b-container>
      <b-row class="bd-example-row">
        <b-col lg="6">
          Column
        </b-col>
        <b-col lg="6">
          Column
        </b-col>
        <b-col md="6" lg="3">
          Column
        </b-col>
        <b-col md="6" lg="9">
          Column
        </b-col>
        <b-col offset="3" md="6" lg="9">
          Offset Column
        </b-col>
      </b-row>
    </b-container>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-container>
  <b-row>
    <b-col lg="6">
      Column
    </b-col>
    <b-col lg="6">
      Column
    </b-col>
    <b-col md="6" lg="3">
      Column
    </b-col>
    <b-col offset="3" md="6" lg="9">
      Offset Column
    </b-col>
  </b-row>
</b-container>
```

  </b-card-body>

</b-card>

## Ordering

<b-card no-body class="mb-5">
  <b-card-body>
    <b-container>
      <b-row class="bd-example-row">
        <b-col order="2" order-lg="3">
          Column 1
        </b-col>
          <b-col order="3" order-lg="2">
          Column 2
        </b-col >
          <b-col order="1" order-lg="1">
          Column 3
        </b-col>
      </b-row>
    </b-container>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-container>
  <b-row>
    <b-col order="2" order-lg="3">
      Column 1
    </b-col>
      <b-col order="3" order-lg="2">
      Column 2
    </b-col >
      <b-col order="1" order-lg="1">
      Column 3
    </b-col>
  </b-row>
</b-container>
```

  </b-card-body>

</b-card>

## Alignment

<b-card no-body class="mb-5">
  <b-card-body>
    <b-container>
      <b-row class="bd-example-row" style="min-height: 10rem">
        <b-col alignSelf="center">
          Column 1
        </b-col>
          <b-col alignSelf="start">
          Column 2
        </b-col >
          <b-col alignSelf="end">
          Column 3
        </b-col>
      </b-row>
    </b-container>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-container>
  <b-row>
    <b-col alignSelf="center">
      Column 1
    </b-col>
      <b-col alignSelf="start">
      Column 2
    </b-col >
      <b-col alignSelf="end">
      Column 3
    </b-col>
  </b-row>
</b-container>
```

  </b-card-body>

</b-card>

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/gridSystem.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BCard, BCardBody, BContainer, BRow, BCol, BImg} from 'bootstrap-vue-next'
</script>
