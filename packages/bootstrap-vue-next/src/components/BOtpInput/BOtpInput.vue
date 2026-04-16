<template>
  <PinInputRoot
    :id="computedId"
    v-model="modelValue"
    :class="rootClasses"
    :disabled="props.disabled"
    :dir="props.dir"
    :mask="props.mask"
    :name="props.name"
    :otp="props.otp"
    :placeholder="props.placeholder"
    :required="props.required"
    :type="props.type"
    @complete="emit('complete', $event)"
  >
    <PinInputInput
      v-for="(_, i) in computedLength"
      :key="i"
      :index="i"
      :disabled="props.disabled"
      as-child
    >
      <BFormInput
        class="b-otp-input-field"
        :aria-label="`${props.ariaLabel || 'Pin'} ${i + 1} of ${computedLength}`"
        :aria-invalid="props.ariaInvalid"
        :autofocus="props.autofocus && i === 0"
        :disabled="props.disabled"
        :form="props.form"
        :plaintext="props.plaintext"
        :readonly="props.readonly"
        :size="props.size"
        :state="props.state"
      />
    </PinInputInput>
  </PinInputRoot>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {useToNumber} from '@vueuse/core'
import {PinInputInput, PinInputRoot} from 'reka-ui'
import type {BOtpInputProps} from '../../types'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import BFormInput from '../BFormInput/BFormInput.vue'

const _props = withDefaults(defineProps<Omit<BOtpInputProps, 'modelValue'>>(), {
  ariaInvalid: undefined,
  ariaLabel: undefined,
  autofocus: false,
  dir: undefined,
  disabled: false,
  form: undefined,
  id: undefined,
  length: 6,
  mask: false,
  name: undefined,
  otp: false,
  placeholder: '',
  plaintext: false,
  readonly: false,
  required: false,
  size: undefined,
  state: null,
  type: 'text',
})
const props = useDefaults(_props, 'BOtpInput')
const emit = defineEmits<{
  complete: [value: string[]]
}>()

const modelValue = defineModel<BOtpInputProps['modelValue']>({default: () => []})

const computedId = useId(() => props.id)
const lengthNumber = useToNumber(() => props.length, {nanToZero: true, method: 'parseInt'})
const computedLength = computed(() => (lengthNumber.value > 0 ? lengthNumber.value : 6))

const rootClasses = computed(() => [
  'b-otp-input',
  'd-flex',
  'gap-2',
  'align-items-center',
  {
    [`b-otp-input-${props.size}`]: !!props.size,
  },
])
</script>
