# Offcanvas

<div class="lead mb-5">

Build hidden sidebars into your project. Sidebars can aid in enhancing user interaction or preventing further interaction

</div>

<HighlightCard>
  <b-button @click="click">Show OffCanvas</b-button>
  <b-offcanvas v-model="show" />
  <template #html>

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

  </template>
</HighlightCard>

## Customizing Location

Customize location with four standard options `top, bottom, start, end`

<HighlightCard>
  <b-button
    v-for="placement in ['start', 'end', 'bottom', 'top']"
    :key="placement"
    @click="clickTwo(placement)"
    class="me-2"
  >
    Show {{ placement }}
  </b-button>
  <b-offcanvas v-model="show2" :placement="placement" />
  <template #html>

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

  </template>
</HighlightCard>

<ComponentReference :data="data"></ComponentReference>

<script setup lang="ts">
import {data} from '../../data/components/offcanvas.data'
import ComponentReference from '../../components/ComponentReference.vue'
import HighlightCard from '../../components/HighlightCard.vue'
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
