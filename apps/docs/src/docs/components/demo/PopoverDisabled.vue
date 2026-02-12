<template>
  <div class="d-flex flex-column gap-3 align-items-start">
    <BPopover
      v-model:show="showPopover"
      :manual="isDisabled"
      title="Controlled Popover"
    >
      <template #target>
        <BButton variant="primary">{{ isDisabled ? 'Disabled' : 'Enabled' }} Popover</BButton>
      </template>
      Hello <strong>World!</strong>
    </BPopover>

    <div class="d-flex gap-2">
      <BButton @click="toggleDisabled"> {{ isDisabled ? 'Enable' : 'Disable' }} Popover </BButton>
      <BButton
        :disabled="isDisabled"
        @click="toggleShow"
      >
        Toggle Visibility
      </BButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const isDisabled = ref(false)
const showPopover = ref(false)

const toggleDisabled = () => {
  isDisabled.value = !isDisabled.value
}

const toggleShow = () => {
  showPopover.value = !showPopover.value
}
</script>
