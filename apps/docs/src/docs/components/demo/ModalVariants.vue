<template>
  <div>
    <BButton
      variant="primary"
      @click="show = true"
      >Show Modal</BButton
    >

    <BModal
      v-model="show"
      title="Modal Variants"
      :header-bg-variant="headerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
      :footer-bg-variant="footerBgVariant"
      :footer-text-variant="footerTextVariant"
    >
      <BContainer fluid>
        <BRow class="mb-1 text-center">
          <BCol cols="3" />
          <BCol>Background</BCol>
          <BCol>Text</BCol>
        </BRow>

        <BRow class="mb-1">
          <BCol cols="3">Header</BCol>
          <BCol>
            <BFormSelect
              v-model="headerBgVariant"
              :options="bgVariants"
            />
          </BCol>
          <BCol>
            <BFormSelect
              v-model="headerTextVariant"
              :options="textVariants"
            />
          </BCol>
        </BRow>

        <BRow class="mb-1">
          <BCol cols="3">Body</BCol>
          <BCol>
            <BFormSelect
              v-model="bodyBgVariant"
              :options="bgVariants"
            />
          </BCol>
          <BCol>
            <BFormSelect
              v-model="bodyTextVariant"
              :options="textVariants"
            />
          </BCol>
        </BRow>

        <BRow>
          <BCol cols="3">Footer</BCol>
          <BCol>
            <BFormSelect
              v-model="footerBgVariant"
              :options="bgVariants"
            />
          </BCol>
          <BCol>
            <BFormSelect
              v-model="footerTextVariant"
              :options="textVariants"
            />
          </BCol>
        </BRow>
      </BContainer>

      <template #footer>
        <div class="w-100">
          <p class="float-start">Modal Footer Content</p>
          <BButton
            variant="primary"
            size="sm"
            class="float-end"
            @click="show = false"
          >
            Close
          </BButton>
        </div>
      </template>
    </BModal>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const show = ref(false)

const bgVariants = [
  { value: null, text: 'None' },
  { value: 'primary', text: 'Primary' },
  { value: 'secondary', text: 'Secondary' },
  { value: 'success', text: 'Success' },
  { value: 'warning', text: 'Warning' },
  { value: 'danger', text: 'Danger' },
  { value: 'info', text: 'Info' },
  { value: 'light', text: 'Light' },
  { value: 'dark', text: 'Dark' },
] as const

const textVariants = [
  { value: null, text: 'None' },
  { value: 'primary', text: 'Primary' },
  { value: 'secondary', text: 'Secondary' },
  { value: 'success', text: 'Success' },
  { value: 'warning', text: 'Warning' },
  { value: 'danger', text: 'Danger' },
  { value: 'info', text: 'Info' },
  { value: 'light', text: 'Light' },
  { value: 'dark', text: 'Dark' },
  { value: 'white', text: 'White' },
  { value: 'body', text: 'Body' },
] as const

type BgVariant = (typeof bgVariants)[number]['value']
type TextVariant = (typeof textVariants)[number]['value']

const headerBgVariant  = ref<BgVariant>('dark')
const headerTextVariant = ref<TextVariant>('white')
const bodyBgVariant    = ref<BgVariant>('light')
const bodyTextVariant  = ref<TextVariant>('dark')
const footerBgVariant  = ref<BgVariant>('warning')
const footerTextVariant = ref<TextVariant>('dark')
</script>
