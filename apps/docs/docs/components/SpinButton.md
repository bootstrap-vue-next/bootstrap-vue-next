# Form Spinbutton
The Form SpinButton allows the user to adjusting a numeric range with finite control.

## Overview

The component `<b-form-spinbutton>` is
[WAI-ARIA compliant](https://www.w3.org/TR/wai-aria-practices-1.2/#spinbutton), allowing for
[keyboard control](#accessibility), and supports both horizontal (default) and vertical layout.


<ClientOnly>
  <b-card>
      <label for="demo-sb">Spin Button</label>
      <b-form-spin-button v-model="ex1Value" min="1" max="100" step="1" />
      <p>Value: {{ ex1Value }}</p>
  </b-card>
</ClientOnly>

```html
<b-form-spin-button  min="1" max="100" step="1" />

<script lang='ts' setup>
  import {ref, computed} from 'vue'
  const ex1Value = ref(50);
</script>

```

The <kbd>ArrowUp</kbd> and <kbd>ArrowDown</kbd> keys can be used to increment or decrement the
value.

## Styling

### Sizing


<ClientOnly>
  <b-card>
 <label for="sb-small">Spin button - Small size</label>
    <b-form-spin-button id="sb-small" size="sm" placeholder="--" class="mb-2"></b-form-spin-button>
    <label for="sb-default">Spin button - Default size</label>
    <b-form-spin-button id="sb-default" placeholder="--" class="mb-2"></b-form-spin-button>
    <label for="sb-large">Spin button - Large size</label>
    <b-form-spin-button id="sb-large" size="lg" placeholder="--" class="mb-2"></b-form-spin-button>
  </b-card>
</ClientOnly>

### Inline

<ClientOnly>
  <b-card>
      <label for="demo-sb">Spin Button</label>
    <label for="sb-inline">Inline spin button</label>
    <b-form-spin-button id="sb-inline" v-model="ex1Value" inline></b-form-spin-button>
  </b-card>
</ClientOnly>

```html
    <label for="sb-inline">Inline spin button</label>
    <b-form-spin-button id="sb-inline" v-model="ex1Value" inline></b-form-spin-button>
    
    <script lang='ts' setup>
    import {ref, computed} from 'vue'
    const ex1Value = ref(50);
    </script>
```


### Vertical

<ClientOnly>
  <b-card>
    <label for="sb-vertical">Vertical spin button</label>
    <b-form-spin-button id="sb-vertical" v-model="ex1Value" vertical></b-form-spin-button>
  </b-card>
</ClientOnly>

```html
    <label for="sb-vertical">Vertical spin button</label>
    <b-form-spin-button id="sb-vertical" v-model="ex1Value" vertical>
    </b-form-spin-button>
    <script lang='ts' setup>
    import {ref, computed} from 'vue'
    const ex1Value = ref(50);
    </script>
```

## Number Formating

### Custom Formatter
<ClientOnly>
  <b-card>
<b-form-spin-button
      id="sb-days"
      v-model="exDaysValue"
      :formatter-fn="dayFormatter"
      min="0"
      max="6"
      wrap
    ></b-form-spin-button>
    <p>Value: {{ exDaysValue }}</p>
  </b-card>
</ClientOnly>

## Disabled and readonly states
<ClientOnly>
  <b-card>
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
  </b-card>
</ClientOnly>

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

<script lang='ts' setup>
  import {ref, computed} from 'vue'

  const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])
  const exDaysValue = ref(0);

  const ex1Value = ref(50);
  let dayFormatter = (value) => {
        return days.value[value]
  }
 
</script>
