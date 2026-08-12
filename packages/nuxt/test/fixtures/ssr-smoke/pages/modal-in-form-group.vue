<template>
  <div id="modal-in-form-group-page">
    <BFormGroup>
      <BFormSelect :options="['Option 1', 'Option 2', 'Option 3']" />
      <BButton variant="primary" @click="showModal = true">Open modal</BButton>
      <BModal v-model="showModal" title="Example modal">Modal content</BModal>
    </BFormGroup>
  </div>
</template>

<script setup lang="ts">
defineOptions({ name: 'ModalInFormGroupPage' })
const showModal = ref(false)
</script>
