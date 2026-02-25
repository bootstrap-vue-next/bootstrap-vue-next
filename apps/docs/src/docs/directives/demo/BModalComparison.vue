<template>
  <div>
    <h5>Using v-b-modal Directive</h5>
    <BButton
      v-b-modal.modal-directive
      variant="primary"
      class="mb-3"
    >
      Open with Directive
    </BButton>
    <BModal
      id="modal-directive"
      title="Directive Approach"
    >
      <p class="card-text">Simple, declarative approach for triggering modals.</p>
    </BModal>

    <h5>Using v-model</h5>
    <BButton
      variant="success"
      class="mb-3"
      @click="showVModel = true"
    >
      Open with v-model
    </BButton>
    <BModal
      v-model="showVModel"
      title="v-model Approach"
    >
      <p class="card-text">Direct control via reactive state binding.</p>
      <p class="mb-0">Current state: {{ showVModel ? 'Visible' : 'Hidden' }}</p>
    </BModal>

    <h5>Using Template Refs</h5>
    <BButton
      variant="info"
      class="mb-3"
      @click="modalRef?.show()"
    >
      Open with Template Ref
    </BButton>
    <BModal
      ref="modalRef"
      title="Template Ref Approach"
    >
      <p class="card-text">Programmatic control using component methods.</p>
      <div class="d-flex gap-2 mt-3">
        <BButton
          size="sm"
          variant="outline-primary"
          @click="modalRef?.show()"
          >Show</BButton
        >
        <BButton
          size="sm"
          variant="outline-secondary"
          @click="modalRef?.hide()"
          >Hide</BButton
        >
        <BButton
          size="sm"
          variant="outline-info"
          @click="modalRef?.toggle()"
          >Toggle</BButton
        >
      </div>
    </BModal>

    <h5>Using useModal Composable</h5>
    <BButton
      variant="warning"
      class="mb-3"
      @click="openComposableModal"
    >
      Open with Composable
    </BButton>
  </div>
</template>

<script setup lang="ts">
import {ref, useTemplateRef} from 'vue'
import {useModal} from 'bootstrap-vue-next/composables/useModal'
import {BModal} from 'bootstrap-vue-next/components/BModal'
import {type ComponentExposed} from 'vue-component-type-helpers'

// v-model approach
const showVModel = ref(false)

// Template ref approach
const modalRef = useTemplateRef<ComponentExposed<typeof BModal>>('modalRef')

// Composable approach
const modal = useModal()
const openComposableModal = () => {
  modal.create({
    body: 'This modal was created dynamically using the useModal composable.',
    title: 'Composable Approach',
  })
}
</script>
