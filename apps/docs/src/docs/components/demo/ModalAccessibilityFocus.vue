<template>
  <div>
    <BButton @click="modalShow = !modalShow">Launch demo modal</BButton>

    <BModal
      v-model="modalShow"
      title="BootstrapVueNext Modal"
      @shown="focusMyElement"
    >
      <div>
        <BButton>I Don't Have Focus</BButton>
      </div>

      <div>
        <BFormInput />
      </div>

      <div>
        <!-- Element to gain focus when modal is opened -->
        <BFormInput ref="focusThis" />
      </div>

      <div>
        <BFormInput />
      </div>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const modalShow = ref(false)
const focusThis = ref<HTMLElement>()

const focusMyElement = () => {
  focusThis.value?.focus()
}
</script>
