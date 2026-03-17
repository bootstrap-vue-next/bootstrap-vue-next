<template>
  <DatePickerRoot
    :id="computedId"
    v-model="modelValue"
    v-model:open="openModel"
    :default-value="props.defaultValue"
    :default-placeholder="props.defaultPlaceholder"
    :placeholder="props.placeholder"
    :hour-cycle="props.hourCycle"
    :step="props.step"
    :granularity="props.granularity"
    :hide-time-zone="props.hideTimeZone"
    :max-value="props.maxValue"
    :min-value="props.minValue"
    :locale="props.locale"
    :disabled="props.disabled"
    :readonly="props.readonly"
    :name="props.name"
    :required="props.required"
    :dir="props.dir"
    :is-date-unavailable="props.isDateUnavailable"
    :is-date-disabled="props.isDateDisabled"
    :close-on-select="props.closeOnSelect"
    :default-open="props.defaultOpen"
    :modal="props.modal"
    :number-of-months="props.numberOfMonths"
    :paged-navigation="props.pagedNavigation"
    :week-starts-on="props.weekStartsOn"
    :weekday-format="props.weekdayFormat"
    :fixed-weeks="props.fixedWeeks"
    :prevent-deselect="props.preventDeselect"
    @update:placeholder="(val: DateValue) => emit('update:placeholder', val)"
  >
    <DatePickerField
      v-slot="{segments}"
      class="b-date-picker-field form-control d-inline-flex align-items-center gap-0"
      :class="computedFieldClasses"
    >
      <slot name="field" :segments="segments">
        <template v-for="{part, value} in segments" :key="part">
          <DatePickerInput v-if="part === 'literal'" :part="part" class="b-date-picker-literal">
            {{ value }}
          </DatePickerInput>
          <DatePickerInput v-else :part="part" class="b-date-picker-segment">
            {{ value }}
          </DatePickerInput>
        </template>
      </slot>
      <DatePickerTrigger
        class="btn btn-outline-secondary b-date-picker-trigger ms-auto"
        :class="[props.size ? `btn-${props.size}` : '']"
        :disabled="props.disabled"
      >
        <slot name="trigger-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
            />
          </svg>
        </slot>
      </DatePickerTrigger>
    </DatePickerField>

    <DatePickerContent :side-offset="4" class="b-date-picker-content dropdown-menu show p-2">
      <DatePickerCalendar v-slot="{weekDays, grid}">
        <slot name="calendar" :week-days="weekDays" :grid="grid">
          <DatePickerHeader class="d-flex align-items-center justify-content-between mb-2">
            <DatePickerPrev class="btn btn-sm btn-outline-secondary">
              <slot name="prev-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                  />
                </svg>
              </slot>
            </DatePickerPrev>
            <DatePickerHeading class="fw-semibold" />
            <DatePickerNext class="btn btn-sm btn-outline-secondary">
              <slot name="next-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </slot>
            </DatePickerNext>
          </DatePickerHeader>

          <div class="d-flex gap-2">
            <DatePickerGrid v-for="month in grid" :key="month.value.toString()">
              <DatePickerGridHead>
                <DatePickerGridRow class="b-date-picker-weekdays">
                  <DatePickerHeadCell
                    v-for="day in weekDays"
                    :key="day"
                    class="b-date-picker-head-cell"
                  >
                    {{ day }}
                  </DatePickerHeadCell>
                </DatePickerGridRow>
              </DatePickerGridHead>
              <DatePickerGridBody>
                <DatePickerGridRow
                  v-for="(weekDates, index) in month.rows"
                  :key="`weekDate-${index}`"
                >
                  <DatePickerCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                    class="b-date-picker-cell"
                  >
                    <DatePickerCellTrigger
                      :day="weekDate"
                      :month="month.value"
                      class="b-date-picker-cell-trigger"
                    />
                  </DatePickerCell>
                </DatePickerGridRow>
              </DatePickerGridBody>
            </DatePickerGrid>
          </div>
        </slot>
      </DatePickerCalendar>
    </DatePickerContent>
  </DatePickerRoot>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
  type DateValue,
} from 'reka-ui'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BDatePickerEmits, BDatePickerSlots} from '../../types'
import type {BDatePickerProps} from '../../types/ComponentProps'

const _props = withDefaults(defineProps<Omit<BDatePickerProps, 'modelValue' | 'open'>>(), {
  closeOnSelect: true,
  defaultOpen: false,
  defaultPlaceholder: undefined,
  defaultValue: undefined,
  dir: undefined,
  disabled: false,
  fixedWeeks: false,
  granularity: undefined,
  hideTimeZone: undefined,
  hourCycle: undefined,
  id: undefined,
  isDateDisabled: undefined,
  isDateUnavailable: undefined,
  locale: undefined,
  maxValue: undefined,
  minValue: undefined,
  modal: false,
  name: undefined,
  numberOfMonths: 1,
  pagedNavigation: false,
  placeholder: undefined,
  preventDeselect: false,
  readonly: false,
  required: false,
  size: undefined,
  state: null,
  step: undefined,
  weekStartsOn: undefined,
  weekdayFormat: undefined,
})
const props = useDefaults(_props, 'BDatePicker')
const emit = defineEmits<BDatePickerEmits>()
defineSlots<BDatePickerSlots>()

const modelValue = defineModel<Exclude<BDatePickerProps['modelValue'], undefined>>({
  default: null,
})

const openModel = defineModel<boolean>('open', {default: false})

const computedId = useId(() => props.id, 'date-picker')

const computedFieldClasses = computed(() => ({
  'disabled': props.disabled,
  'readonly': props.readonly,
  'is-valid': props.state === true,
  'is-invalid': props.state === false,
  [`form-control-${props.size}`]: props.size !== undefined,
}))
</script>
