<template>
  <DateRangePickerRoot
    :id="computedId"
    v-model="modelValue"
    v-model:open="openModel"
    v-model:placeholder="placeholderModel"
    :default-value="props.defaultValue"
    :default-placeholder="props.defaultPlaceholder"
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
    :allow-non-contiguous-ranges="props.allowNonContiguousRanges"
    :fixed-date="props.fixedDate"
    :maximum-days="props.maximumDays"
    :is-date-highlightable="props.isDateHighlightable"
    @update:start-value="(val: DateValue | undefined) => emit('update:startValue', val)"
  >
    <DateRangePickerField
      v-slot="{segments}"
      class="b-date-range-picker-field form-control d-inline-flex align-items-center gap-0"
      :class="computedFieldClasses"
    >
      <slot name="field" :segments="segments">
        <template v-for="{part, value} in segments.start" :key="`start-${part}`">
          <DateRangePickerInput
            v-if="part === 'literal'"
            type="start"
            :part="part"
            class="b-date-range-picker-literal"
          >
            {{ value }}
          </DateRangePickerInput>
          <DateRangePickerInput
            v-else
            type="start"
            :part="part"
            class="b-date-range-picker-segment"
          >
            {{ value }}
          </DateRangePickerInput>
        </template>
        <span class="b-date-range-picker-separator" aria-hidden="true"> – </span>
        <template v-for="{part, value} in segments.end" :key="`end-${part}`">
          <DateRangePickerInput
            v-if="part === 'literal'"
            type="end"
            :part="part"
            class="b-date-range-picker-literal"
          >
            {{ value }}
          </DateRangePickerInput>
          <DateRangePickerInput v-else type="end" :part="part" class="b-date-range-picker-segment">
            {{ value }}
          </DateRangePickerInput>
        </template>
      </slot>
      <DateRangePickerTrigger
        class="btn btn-outline-secondary b-date-range-picker-trigger ms-auto"
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
      </DateRangePickerTrigger>
    </DateRangePickerField>

    <DateRangePickerContent
      :side-offset="4"
      class="b-date-range-picker-content dropdown-menu show p-2"
    >
      <DateRangePickerCalendar v-slot="{weekDays, grid}">
        <slot name="calendar" :week-days="weekDays" :grid="grid">
          <DateRangePickerHeader class="d-flex align-items-center justify-content-between mb-2">
            <DateRangePickerPrev class="btn btn-sm btn-outline-secondary">
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
            </DateRangePickerPrev>
            <DateRangePickerHeading class="fw-semibold" />
            <DateRangePickerNext class="btn btn-sm btn-outline-secondary">
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
            </DateRangePickerNext>
          </DateRangePickerHeader>

          <div class="d-flex gap-2">
            <DateRangePickerGrid v-for="month in grid" :key="month.value.toString()">
              <DateRangePickerGridHead>
                <DateRangePickerGridRow class="b-date-range-picker-weekdays">
                  <DateRangePickerHeadCell
                    v-for="day in weekDays"
                    :key="day"
                    class="b-date-range-picker-head-cell"
                  >
                    {{ day }}
                  </DateRangePickerHeadCell>
                </DateRangePickerGridRow>
              </DateRangePickerGridHead>
              <DateRangePickerGridBody>
                <DateRangePickerGridRow
                  v-for="(weekDates, index) in month.rows"
                  :key="`weekDate-${index}`"
                >
                  <DateRangePickerCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                    class="b-date-range-picker-cell"
                  >
                    <DateRangePickerCellTrigger
                      :day="weekDate"
                      :month="month.value"
                      class="b-date-range-picker-cell-trigger"
                    />
                  </DateRangePickerCell>
                </DateRangePickerGridRow>
              </DateRangePickerGridBody>
            </DateRangePickerGrid>
          </div>
        </slot>
      </DateRangePickerCalendar>
    </DateRangePickerContent>
  </DateRangePickerRoot>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {
  DateRangePickerCalendar,
  DateRangePickerCell,
  DateRangePickerCellTrigger,
  DateRangePickerContent,
  DateRangePickerField,
  DateRangePickerGrid,
  DateRangePickerGridBody,
  DateRangePickerGridHead,
  DateRangePickerGridRow,
  DateRangePickerHeadCell,
  DateRangePickerHeader,
  DateRangePickerHeading,
  DateRangePickerInput,
  DateRangePickerNext,
  DateRangePickerPrev,
  DateRangePickerRoot,
  DateRangePickerTrigger,
  type DateValue,
} from 'reka-ui'
import {useDefaults} from '../../composables/useDefaults'
import {useId} from '../../composables/useId'
import type {BDateRangePickerEmits, BDateRangePickerSlots} from '../../types'
import type {BDateRangePickerProps} from '../../types/ComponentProps'

const _props = withDefaults(
  defineProps<Omit<BDateRangePickerProps, 'modelValue' | 'open' | 'placeholder'>>(),
  {
    allowNonContiguousRanges: false,
    closeOnSelect: true,
    defaultOpen: false,
    defaultPlaceholder: undefined,
    defaultValue: undefined,
    dir: undefined,
    disabled: false,
    fixedDate: undefined,
    fixedWeeks: false,
    granularity: undefined,
    hideTimeZone: undefined,
    hourCycle: undefined,
    id: undefined,
    isDateDisabled: undefined,
    isDateHighlightable: undefined,
    isDateUnavailable: undefined,
    locale: undefined,
    maxValue: undefined,
    maximumDays: undefined,
    minValue: undefined,
    modal: false,
    name: undefined,
    numberOfMonths: 1,
    pagedNavigation: false,
    preventDeselect: false,
    readonly: false,
    required: false,
    size: undefined,
    state: null,
    step: undefined,
    weekStartsOn: undefined,
    weekdayFormat: undefined,
  }
)
const props = useDefaults(_props, 'BDateRangePicker')
const emit = defineEmits<BDateRangePickerEmits>()
defineSlots<BDateRangePickerSlots>()

const modelValue = defineModel<Exclude<BDateRangePickerProps['modelValue'], undefined>>({
  default: null,
})

const openModel = defineModel<boolean>('open', {default: false})

const placeholderModel = defineModel<BDateRangePickerProps['placeholder']>('placeholder')

const computedId = useId(() => props.id, 'date-range-picker')

const computedFieldClasses = computed(() => ({
  'disabled': props.disabled,
  'readonly': props.readonly,
  'is-valid': props.state === true,
  'is-invalid': props.state === false,
  [`form-control-${props.size}`]: props.size !== undefined,
}))
</script>
