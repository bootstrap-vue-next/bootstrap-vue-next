# Offcanvas

<ComponentSidebar>

[[toc]]

</ComponentSidebar>

<div class="lead mb-5">

Build hidden sidebars into your project. Sidebars can aid in enhancing user interaction or preventing further interaction.

</div>

<HighlightCard>
  <BButton @click="click">Show OffCanvas</BButton>
  <BOffcanvas v-model="show" />
  <template #html>

```vue
<template>
  <BButton @click="click">Show OffCanvas</BButton>
  <BOffcanvas v-model="show" />
</template>

<script setup lang="ts">
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

Customize location with four standard options `top, bottom, start, end`.

<HighlightCard>
  <BButton
    v-for="placement in ['start', 'end', 'bottom', 'top']"
    :key="placement"
    @click="clickTwo(placement)"
    class="me-2"
  >
    Show {{ placement }}
  </BButton>
  <BOffcanvas v-model="show2" :placement="placement" />
  <template #html>

```vue
<template>
  <BButton @click="click" class="m-2">Show start</BButton>
  <BButton @click="click" class="m-2">Show end</BButton>
  <BButton @click="click" class="m-2">Show bottom</BButton>
  <BButton @click="click" class="m-2">Show top</BButton>

  <BOffcanvas v-model="show" :placement="placement" />
</template>

<script setup lang="ts">
const show = ref(false)
const placement = ref('start')

const click = (place = 'start') => {
  placement.value = place
  show.value = !show.value
}
</script>
```

  </template>
</HighlightCard>

## Responsive

The `responsive` prop in the BOffcanvas component enables adaptive display behavior based on the viewport size. When set, the offcanvas content displays inline for viewports wider than the specified breakpoint, and as a traditional offcanvas for narrower viewports

<NoteAlert>
In SSR environments, the BOffcanvas component must be rendered client-side due to its dependency on browser context for responsive behavior. Use client-only directives or components to ensure proper functionality
</NoteAlert>

<HighlightCard>
  <template #html>

```vue-html
<BOffcanvas responsive="md" />
```

  </template>
</HighlightCard>

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/offcanvas.data'
import ComponentReference from '../../components/ComponentReference.vue'
import ComponentSidebar from '../../components/ComponentSidebar.vue'
import HighlightCard from '../../components/HighlightCard.vue'
import {BCard, BCardBody, BOffcanvas, BButton} from 'bootstrap-vue-next'
import {ref, computed} from 'vue'
import NoteAlert from '../../components/NoteAlert.vue'

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
