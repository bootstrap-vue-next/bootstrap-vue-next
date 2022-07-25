<template>
  <div>
    <div v-b-visible.once="handleVisible">Handle Visible Test</div>
    <div v-if="handledVisible">This should only show if handleVisible was triggered</div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {VBVisible} from 'bootstrap-vue-3'

const handledVisible = ref(false)

const handleVisible = () => {
  handledVisible.value = true
}
</script>
