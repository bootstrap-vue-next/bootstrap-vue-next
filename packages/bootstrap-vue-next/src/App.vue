<template>
  <div class="comp">
    <BTable striped :fields="fields" :items="items" />
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const fields = ref([
  {
    key: 'id',
    tdClass: 'lightblue',
  },
  {
    key: 'name',
    tdClass: () => 'light---blue',
  },
])

const items = ref([
  {
    id: '1',
    name: 'One',
  },
  {
    id: '2',
    name: 'Two',
  },
])
</script>

<style lang="scss" scoped>
.comp {
  margin: 20px;
  :deep(.lightblue) {
    color: lightblue;
    font-weight: 700;
  }
}
</style>
