# Offcanvas

> Build hidden sidebars into your project. Sidebars can aid in enhancing user interaction or preventing further interaction


  <b-card>
    <b-button @click="click">Show OffCanvas</b-button>
    <b-offcanvas v-model="show" />
  </b-card>


```html
<b-button @click="click">Show OffCanvas</b-button>
<b-offcanvas v-model="show"></b-offcanvas>

<script lang = 'ts'setup>
  import {
    ref,
  } from 'vue'

  const show = ref(false)

  const click = () => {
    show.value = !show.value
  }

</script>
```

## Customizing Location

Customize location with four standard options `top, bottom, start, end`


  <b-card>
    <b-button @click="clickTwo('start')" class="m-2">Show start</b-button>
    <b-button @click="clickTwo('end')" class="m-2">Show end</b-button>
    <b-button @click="clickTwo('bottom')" class="m-2">Show bottom</b-button>
    <b-button @click="clickTwo('top')" class="m-2">Show top</b-button>
    <b-offcanvas v-model="show2" :placement="placement" />
  </b-card>


```html
<b-button @click="click" class="m-2">Show start</b-button>
<b-button @click="click" class="m-2">Show end</b-button>
<b-button @click="click" class="m-2">Show bottom</b-button>
<b-button @click="click" class="m-2">Show top</b-button>
<b-offcanvas v-model="show" :placement="placement" />

<script lang='ts' setup>
  import {ref, computed} from 'vue'

  const show = ref(false)
  const placement = ref('start')

  const click = (place ="start") => {
    placement.value = place
    show.value = !show.value
  }

</script>

```


  <ComponentReference></ComponentReference>


<script lang='ts' setup>
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
