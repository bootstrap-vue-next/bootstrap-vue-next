<template>
  <div class="d-flex gap-2 flex-wrap">
    <!-- #region simple -->
    <BButton v-b-tooltip="'Simple text tooltip'"> String value </BButton>
    <!-- #endregion simple -->

    <!-- #region reactive -->
    <BButton v-b-tooltip="tooltipText"> Reactive content </BButton>
    <!-- #endregion reactive -->
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const tooltipText = ref('Dynamic tooltip content')
</script>
