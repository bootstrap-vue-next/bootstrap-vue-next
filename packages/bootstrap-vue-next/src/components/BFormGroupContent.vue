<template>
  <BFormInvalidFeedback
    v-if="hasInvalidFeedbackSlot || invalidFeedback"
    :id="invalidFeedbackId"
    :aria-live="feedbackAriaLive"
    :state="state"
    :tooltip="tooltip"
  >
    <slot name="invalid-feedback">{{ invalidFeedback }}</slot>
  </BFormInvalidFeedback>
  <BFormValidFeedback
    v-if="hasValidFeedbackSlot || validFeedback"
    :id="validFeedbackId"
    :aria-live="feedbackAriaLive"
    :state="state"
    :tooltip="tooltip"
  >
    <slot name="valid-feedback">{{ validFeedback }}</slot>
  </BFormValidFeedback>
  <BFormText v-if="hasDescriptionSlot || description" :id="descriptionId">
    <slot name="description">{{ description }}</slot>
  </BFormText>
</template>

<script setup lang="ts">
import {computed, useSlots} from 'vue'
import type {ValidationState} from '../types'
import BFormInvalidFeedback from './BForm/BFormInvalidFeedback.vue'
import BFormValidFeedback from './BForm/BFormValidFeedback.vue'
import BFormText from './BForm/BFormText.vue'

defineProps<{
  invalidFeedback: string | undefined
  validFeedback: string | undefined
  description: string | undefined
  feedbackAriaLive: string | undefined
  state: ValidationState | undefined
  tooltip: boolean | undefined
  invalidFeedbackId: string | undefined
  validFeedbackId: string | undefined
  descriptionId: string | undefined
}>()

/* eslint-disable @typescript-eslint/no-explicit-any */
defineSlots<{
  'invalid-feedback'?: (props: Record<string, never>) => any
  'valid-feedback'?: (props: Record<string, never>) => any
  description?: (props: Record<string, never>) => any
}>()
/* eslint-enable @typescript-eslint/no-explicit-any */

const slots = useSlots()
const hasInvalidFeedbackSlot = computed(() => !!slots['invalid-feedback'])
const hasValidFeedbackSlot = computed(() => !!slots['valid-feedback'])
const hasDescriptionSlot = computed(() => !!slots['description'])
</script>
