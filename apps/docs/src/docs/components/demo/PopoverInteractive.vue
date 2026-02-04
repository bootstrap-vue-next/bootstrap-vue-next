<template>
  <div class="d-flex flex-column gap-3 align-items-start">
    <BPopover
      v-model="showPopover"
      click
      title="Interactive Content"
      @show="onShow"
      @shown="onShown"
      @hidden="onHidden"
    >
      <template #target>
        <BButton
          ref="targetButton"
          variant="primary"
        >
          Interactive Popover
        </BButton>
      </template>

      <template #title>
        <div class="d-flex justify-content-between align-items-center">
          <span>Interactive Content</span>
          <BButton
            variant="link"
            class="text-decoration-none p-0 text-white"
            aria-label="Close"
            @click="onClose"
          >
            <span aria-hidden="true">&times;</span>
          </BButton>
        </div>
      </template>

      <div>
        <BFormGroup
          label="Name"
          label-for="popover-input-1"
          :state="input1State"
          class="mb-2"
          description="Enter your name"
          invalid-feedback="This field is required"
        >
          <BFormInput
            id="popover-input-1"
            ref="input1Ref"
            v-model="input1"
            :state="input1State"
            size="sm"
          />
        </BFormGroup>

        <BFormGroup
          label="Color"
          label-for="popover-input-2"
          :state="input2State"
          class="mb-2"
          description="Pick a color"
          invalid-feedback="This field is required"
        >
          <BFormSelect
            id="popover-input-2"
            v-model="input2"
            :state="input2State"
            :options="options"
            size="sm"
          />
        </BFormGroup>

        <BAlert
          v-if="input1 || input2"
          variant="info"
          class="small mb-2"
        >
          <strong>Current Values:</strong><br />
          Name: <strong>{{ input1 || '(empty)' }}</strong
          ><br />
          Color: <strong>{{ input2 || '(empty)' }}</strong>
        </BAlert>

        <div class="d-flex gap-2">
          <BButton
            size="sm"
            variant="secondary"
            @click="onClose"
            >Cancel</BButton
          >
          <BButton
            size="sm"
            variant="primary"
            @click="onOk"
            >Ok</BButton
          >
        </div>
      </div>
    </BPopover>

    <BCard
      v-if="input1Return && input2Return"
      title="Returned values:"
      class="mt-3"
    >
      <BCardText>
        Name: <strong>{{ input1Return }}</strong
        ><br />
        Color: <strong>{{ input2Return }}</strong>
      </BCardText>
    </BCard>
  </div>
</template>

<script setup lang="ts">
import {nextTick, ref} from 'vue'
import {BButton} from 'bootstrap-vue-next/components/BButton'

interface SelectOption {
  text: string
  value: string
}

const showPopover = ref(false)
const input1 = ref('')
const input2 = ref<string>('')
const input1State = ref<boolean | null>(null)
const input2State = ref<boolean | null>(null)
const input1Return = ref('')
const input2Return = ref('')

const input1Ref = ref<HTMLInputElement>()
const targetButton = ref<InstanceType<BButton>>()

const options: SelectOption[] = [
  {text: '- Choose 1 -', value: ''},
  {text: 'Red', value: 'Red'},
  {text: 'Green', value: 'Green'},
  {text: 'Blue', value: 'Blue'},
]

const onClose = () => {
  showPopover.value = false
}

const onOk = () => {
  input1State.value = !!input1.value
  input2State.value = !!input2.value

  if (input1.value && input2.value) {
    input1Return.value = input1.value
    input2Return.value = input2.value
    onClose()
  }
}

const onShow = () => {
  // Reset form variables
  input1.value = ''
  input2.value = ''
  input1State.value = null
  input2State.value = null
  input1Return.value = ''
  input2Return.value = ''
}

const onShown = () => {
  // Focus the first input
  nextTick(() => {
    input1Ref.value?.focus()
  })
}

const onHidden = () => {
  // Return focus to the button
  nextTick(() => {
    targetButton.value?.$el?.focus()
  })
}
</script>
