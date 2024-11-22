<template>
  <div>
    <BTable :items="items" busy :responsive="responsive" />
  </div>

  <b-button @click="responsive = !responsive">toggle responsive</b-button>
  Responsive: {{ responsive }}

  <div v-if="responsive">
    Responsive div attrs inherits all BTable attrs:

    <pre>
    class="table-responsive" noproviderpaging="false" noprovidersorting="false" noproviderfiltering="false" mustsort="false" selectable="false" multisort="false" stickyselect="false" selecthead="true" selectmode="multi" selectionvariant="primary" busyloadingtext="Loading..." perpage="Infinity" currentpage="1" nolocalsorting="false" noselectonclick="false" nosortableicon="false" emptyfilteredtext="There are no records matching your request" emptytext="There are no records to show" showempty="false" busy="true" selecteditems="" aria-busy="true"
    </pre>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue'

const responsive = ref(false)

const items = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Mark'},
]
</script>
