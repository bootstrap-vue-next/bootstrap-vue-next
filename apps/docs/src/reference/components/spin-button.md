# Form Spinbutton

<div class="lead mb-5">

The Form SpinButton allows the user to adjusting a numeric range with finite control.

</div>

## Overview

The component `<b-form-spinbutton>` is
[WAI-ARIA compliant](https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton), allowing for
[keyboard control](#accessibility), and supports both horizontal (default) and vertical layout.

<b-card no-body class="mb-5">
  <b-card-body>
    <label for="demo-sb">Spin Button</label>
    <b-form-spin-button v-model="ex1Value" min="1" max="100" step="1" />
    <p>Value: {{ ex1Value }}</p>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<template>
  <b-form-spin-button  min="1" max="100" step="1" />
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
const ex1Value = ref(50);
</script>
```

  </b-card-body>

</b-card>

The <kbd>ArrowUp</kbd> and <kbd>ArrowDown</kbd> keys can be used to increment or decrement the
value.

## Styling

### Sizing

<b-card no-body class="mb-5">
  <b-card-body class="bg-body-tertiary">
  <label for="sb-small">Spin button - Small size</label>
    <b-form-spin-button id="sb-small" size="sm" placeholder="--" class="mb-2"></b-form-spin-button>
    <label for="sb-default">Spin button - Default size</label>
    <b-form-spin-button id="sb-default" placeholder="--" class="mb-2"></b-form-spin-button>
    <label for="sb-large">Spin button - Large size</label>
    <b-form-spin-button id="sb-large" size="lg" placeholder="--" class="mb-2"></b-form-spin-button>
  </b-card-body>
</b-card>

### Inline

<b-card no-body class="mb-5">
  <b-card-body>
    <label for="demo-sb">Spin Button</label>
    <label for="sb-inline">Inline spin button</label>
    <b-form-spin-button id="sb-inline" v-model="ex1Value" inline></b-form-spin-button>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<template>
  <label for="sb-inline">Inline spin button</label>
  <b-form-spin-button id="sb-inline" v-model="ex1Value" inline></b-form-spin-button>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'
const ex1Value = ref(50);
</script>
```

  </b-card-body>

</b-card>

### Vertical

<b-card no-body class="mb-5">
  <b-card-body>
    <label for="sb-vertical">Vertical spin button</label>
    <b-form-spin-button id="sb-vertical" v-model="ex1Value" vertical></b-form-spin-button>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<template>
  <label for="sb-vertical">Vertical spin button</label>
  <b-form-spin-button id="sb-vertical" v-model="ex1Value" vertical>
  </b-form-spin-button>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const ex1Value = ref(50);
</script>
```

  </b-card-body>

</b-card>

## Number Formating

### Custom Formatter

<b-card no-body class="mb-5">
  <b-card-body>
    <b-form-spin-button
      id="sb-days"
      v-model="exDaysValue"
      :formatter-fn="dayFormatter"
      min="0"
      max="6"
      wrap
    />
    <p>Value: {{ exDaysValue }}</p>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-form-spin-button
  id="sb-days"
  v-model="exDaysValue"
  :formatter-fn="dayFormatter"
  min="0"
  max="6"
  wrap
/>
<p>Value: {{ exDaysValue }}</p>
```

  </b-card-body>

</b-card>

## Disabled and readonly states

<b-card no-body class="mb-5">
  <b-card-body>
    <b-row>
      <b-col md="6" class="mb-2">
        <label for="sb-disabled">Disabled spin button</label>
        <b-form-spin-button id="sb-disabled" v-model="ex1Value" disabled></b-form-spin-button>
      </b-col>
      <b-col md="6" class="mb-2">
        <label for="sb-readonly" class="">Readonly spin button</label>
        <b-form-spin-button id="sb-readonly" v-model="ex1Value" readonly></b-form-spin-button>
      </b-col>
    </b-row>
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<b-row>
  <b-col md="6" class="mb-2">
    <label for="sb-disabled">Disabled spin button</label>
    <b-form-spin-button id="sb-disabled" v-model="ex1Value" disabled></b-form-spin-button>
  </b-col>
  <b-col md="6" class="mb-2">
    <label for="sb-readonly" class="">Readonly spin button</label>
    <b-form-spin-button id="sb-readonly" v-model="ex1Value" readonly></b-form-spin-button>
  </b-col>
</b-row>
```

  </b-card-body>

</b-card>

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/spinButton.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BButton, BProgressBar, BCard, BCardBody, BProgress} from 'bootstrap-vue-next'
import {ref, computed} from 'vue'

const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
const exDaysValue = ref(0);

const ex1Value = ref(50);
let dayFormatter = (value) => {
  return days.value[value]
}
</script>
