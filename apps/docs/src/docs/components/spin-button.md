# Form Spinbutton

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

The Form SpinButton allows the user to adjusting a numeric range with finite control.

</div>

## Overview

The component `<b-form-spinbutton>` is
[WAI-ARIA compliant](https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton), allowing for
[keyboard control](#accessibility), and supports both horizontal (default) and vertical layout.

<HighlightCard>
  <label for="demo-sb">Spin Button</label>
  <b-form-spin-button v-model="ex1Value" min="1" max="100" step="1" />
  <p>Value: {{ ex1Value }}</p>
  <template #html>

```vue
<template>
  <b-form-spin-button min="1" max="100" step="1" />
</template>

<script setup lang="ts">
const ex1Value = ref(50)
</script>
```

  </template>
</HighlightCard>

The <kbd>ArrowUp</kbd> and <kbd>ArrowDown</kbd> keys can be used to increment or decrement the
value.

## Styling

### Sizing

<b-card class="bg-body-tertiary mb-4">
  <label for="sb-small">Spin button - Small size</label>
  <b-form-spin-button id="sb-small" size="sm" placeholder="--" class="mb-2"></b-form-spin-button>
  <label for="sb-default">Spin button - Default size</label>
  <b-form-spin-button id="sb-default" placeholder="--" class="mb-2"></b-form-spin-button>
  <label for="sb-large">Spin button - Large size</label>
  <b-form-spin-button id="sb-large" size="lg" placeholder="--" class="mb-2"></b-form-spin-button>
</b-card>

### Inline

<HighlightCard>
  <label for="demo-sb">Spin Button</label>
  <label for="sb-inline">Inline spin button</label>
  <b-form-spin-button id="sb-inline" v-model="ex1Value" inline></b-form-spin-button>
  <template #html>

```vue
<template>
  <label for="sb-inline">Inline spin button</label>
  <b-form-spin-button id="sb-inline" v-model="ex1Value" inline></b-form-spin-button>
</template>

<script setup lang="ts">
const ex1Value = ref(50)
</script>
```

  </template>
</HighlightCard>

### Vertical

<HighlightCard>
  <label for="sb-vertical">Vertical spin button</label>
  <b-form-spin-button id="sb-vertical" v-model="ex1Value" vertical></b-form-spin-button>
  <template #html>

```vue
<template>
  <label for="sb-vertical">Vertical spin button</label>
  <b-form-spin-button id="sb-vertical" v-model="ex1Value" vertical> </b-form-spin-button>
</template>

<script setup lang="ts">
const ex1Value = ref(50)
</script>
```

  </template>
</HighlightCard>

## Number Formating

### Custom Formatter

<HighlightCard>
  <b-form-spin-button
    id="sb-days"
    v-model="exDaysValue"
    :formatter-fn="dayFormatter"
    min="0"
    max="6"
    wrap
  />
  <p>Value: {{ exDaysValue }}</p>
  <template #html>

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

  </template>
</HighlightCard>

## Disabled and readonly states

<HighlightCard>
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
  <template #html>

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

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/spinButton.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BButton, BProgressBar, BCard, BCardBody, BProgress} from 'bootstrap-vue-next'
import {ref, computed} from 'vue'

const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
const exDaysValue = ref(0);

const ex1Value = ref(50);
let dayFormatter = (value) => {
  return days.value[value]
}
</script>
