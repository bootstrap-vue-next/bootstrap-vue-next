<template>
  <div class="d-flex flex-column text-md-center">
    <div class="p-2">
      <p>Tooltip is {{ model ? 'visible' : 'hidden' }}</p>
    </div>

    <div class="p-2">
      <BTooltip
        v-model="model"
        placement="right"
      >
        <template #target>
          <BButton
            class="mx-2"
            @click="model = !model"
            >Toggle Tooltip</BButton
          >
        </template>
        Hello <strong>World!</strong>
      </BTooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const model = ref(false)
</script>
