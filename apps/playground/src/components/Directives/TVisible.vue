<template>
  <b-container>
    <b-row>
      <b-col>
        <div v-b-visible.once="handleVisible">Handle Visible Test</div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div v-if="handledVisible">This should only show if handleVisible was triggered</div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {VBVisible} from 'bootstrap-vue-3'

const handledVisible = ref(false)

const handleVisible = () => {
  handledVisible.value = true
}
</script>
