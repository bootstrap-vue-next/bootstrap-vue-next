<template>
  <div>
    <div class="d-flex gap-2">
      <BButton
        id="show-btn"
        @click="show"
        >Open Modal</BButton
      >
      <BButton
        id="toggle-btn"
        @click="toggle"
        >Toggle Modal</BButton
      >
    </div>
    <BModal
      ref="my-modal"
      hide-footer
      title="Using Component Methods"
    >
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <div class="d-flex justify-content-center gap-2 mt-3">
        <BButton
          variant="outline-danger"
          block
          @click="hide"
          >Close Me</BButton
        >
        <BButton
          variant="outline-warning"
          block
          @click="toggle"
          >Toggle Me</BButton
        >
      </div>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {useTemplateRef} from 'vue'
import {BModal} from 'bootstrap-vue-next/components/BModal'
import {type ComponentExposed} from 'vue-component-type-helpers'

const myModal = useTemplateRef<ComponentExposed<typeof BModal>>('my-modal')
const show = () => myModal.value?.show()
const hide = () => myModal.value?.hide()
const toggle = () => myModal.value?.toggle()
</script>
