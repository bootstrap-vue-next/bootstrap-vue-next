# Offcanvas

<div class="lead mb-5">

Build hidden sidebars into your project. Sidebars can aid in enhancing user interaction or preventing further interaction

</div>

<b-card no-body class="mb-5">
  <b-card-body>
    <b-button @click="click">Show OffCanvas</b-button>
    <b-offcanvas v-model="show" />
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<template>
  <b-button @click="click">Show OffCanvas</b-button>
  <b-offcanvas v-model="show"></b-offcanvas>
</template>

<script lang = 'ts'setup>
import {ref} from 'vue'

const show = ref(false)

const click = () => {
  show.value = !show.value
}
</script>
```

  </b-card-body>

</b-card>

## Customizing Location

Customize location with four standard options `top, bottom, start, end`

<b-card no-body class="mb-5">
  <b-card-body>
    <b-button
      v-for="placement in ['start', 'end', 'bottom', 'top']"
      :key="placement"
      @click="clickTwo(placement)"
      class="me-2"
    >
      Show {{ placement }}
    </b-button>
    <b-offcanvas v-model="show2" :placement="placement" />
  </b-card-body>

  <div class="html">HTML</div>

  <b-card-body class="bg-body-tertiary">

```vue-html
<template>
  <b-button @click="click" class="m-2">Show start</b-button>
  <b-button @click="click" class="m-2">Show end</b-button>
  <b-button @click="click" class="m-2">Show bottom</b-button>
  <b-button @click="click" class="m-2">Show top</b-button>

  <b-offcanvas v-model="show" :placement="placement" />
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const show = ref(false)
const placement = ref('start')

const click = (place ="start") => {
  placement.value = place
  show.value = !show.value
}
</script>
```

  </b-card-body>

</b-card>

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/offcanvas.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BCard, BCardBody, BOffcanvas, BButton} from 'bootstrap-vue-next'
import {ref, computed} from 'vue'

const show = ref(false)
const show2 = ref(false)
const placement = ref('start')

const click = () => {
  show.value = !show.value
}

const clickTwo = (place ="start") => {
  console.log('c')
  placement.value = place
  show2.value = !show2.value
}
</script>
