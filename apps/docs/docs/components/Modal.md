# Modal

## Usage

<b-button @click="modal = !modal">
  Toggle modal
</b-button>

<b-modal v-model="modal" title="Hello, World!">
  Foobar?
</b-modal>

```html
<b-button @click="modal = !modal">
  Toggle modal
</b-button>

<b-modal v-model="modal">
  Foo bar
</b-modal>

<script setup lang="ts">
import {ref} from 'vue'

const modal = ref(false)
</script>
```

At this time, there is no built in functionality for toggling a modal in a global state. A simple workaround to be able to modify the state of the modal is to use a global state management tool like [pinia](https://pinia.vuejs.org/). By simply v-modelling to a ref managed by the pinia state you can open and close the modal without context. This is not a perfect solution and will be looked at further in the future.

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

<script setup lang="ts">
import {ref} from 'vue'

const modal = ref(false)
</script>
