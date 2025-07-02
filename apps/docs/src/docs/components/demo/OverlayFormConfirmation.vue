<template>
  <BForm
    class="position-relative p-3"
    @submit.prevent="onFormSubmit"
  >
    <div class="row">
      <label
        class="col-lg-2"
        label-for="form-name"
        >Name</label
      >
      <BFormInput
        id="form-name"
        class="col"
        :disabled="formbusy"
      />
    </div>

    <div class="row mt-2">
      <label
        class="col-lg-2"
        label-for="form-email"
        >Email</label
      >
      <BFormInput
        id="form-email"
        class="col"
        type="email"
        :disabled="formbusy"
      />
    </div>

    <div class="d-flex justify-content-center mt-2">
      <BButton
        ref="formsubmit"
        type="submit"
        :disabled="formbusy"
        >Submit</BButton
      >
    </div>

    <BOverlay
      :show="formbusy"
      no-wrap
      @shown="onFormOverlayShown"
      @hidden="onFormOverlayHidden"
    >
      <template #overlay>
        <div
          v-if="processing"
          class="text-center p-4 bg-primary text-light rounded"
        >
          <div class="mb-3">Processing...</div>
          <BProgress
            min="1"
            max="20"
            :value="processingcounter"
            variant="success"
            height="3px"
            class="mx-n4 rounded-0"
          />
        </div>
        <div
          v-else
          ref="formdialog"
          tabindex="-1"
          role="dialog"
          aria-modal="false"
          aria-labelledby="form-confirm-label"
          class="text-center p-3"
        >
          <p><strong id="form-confirm-label">Are you sure?</strong></p>
          <div
            class="d-flex"
            style="column-gap: 5%"
          >
            <BButton
              variant="outline-danger"
              class="me-3"
              @click="onFormCancel"
            >
              Cancel
            </BButton>
            <BButton
              ref="successbutton"
              variant="outline-success"
              @click="onFormOK"
              >OK</BButton
            >
          </div>
        </div>
      </template>
    </BOverlay>
  </BForm>
</template>

<script setup lang="ts">
import {nextTick, ref, useTemplateRef} from 'vue'
import {BButton} from 'bootstrap-vue-next/components/BButton'

const formbusy = ref(false)
const processing = ref(false)
const processingcounter = ref(1)
const formdialog = useTemplateRef<HTMLElement>('formdialog')
const formsubmit = useTemplateRef<typeof BButton>('formsubmit')
const successbutton = useTemplateRef<typeof BButton>('successbutton')
let processingInterval: ReturnType<typeof setInterval> | null = null

const clearProcessingInterval = () => {
  if (processingInterval) {
    clearInterval(processingInterval)
    processingInterval = null
  }
}

const onFormOverlayShown = () => {
  // Focus on the dialog ok button when the overlay is shown
  successbutton.value?.$el.focus()
}

const onFormOverlayHidden = () => {
  // In this case, we return focus to the submit button
  // You may need to alter this based on your application requirements
  formsubmit.value?.$el.focus()
}

const onFormSubmit = () => {
  processing.value = false
  formbusy.value = true
}

const onFormCancel = () => {
  formbusy.value = false
}

const onFormOK = () => {
  processingcounter.value = 1
  processing.value = true
  clearProcessingInterval()
  processingInterval = setInterval(() => {
    if (processingcounter.value < 20) {
      processingcounter.value++
    } else {
      clearProcessingInterval()
      nextTick(() => {
        formbusy.value = false
        processing.value = false
      })
    }
  }, 350)
}
</script>
