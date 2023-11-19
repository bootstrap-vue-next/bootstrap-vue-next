<template>
  <ul
    class="pagination"
    :class="computedWrapperClasses"
    role="menubar"
    :aria-disabled="disabledBoolean"
    :aria-label="ariaLabel || undefined"
  >
    <!-- First -->
    <li v-if="!hideGotoEndButtonsBoolean && !firstNumberBoolean" v-bind="firstButtonProps.li">
      <component
        v-bind="firstButtonProps.button"
        :is="firstButtonProps.button.is"
        @click="pageClick($event, 1)"
      >
        <slot name="first-text">
          {{ firstText }}
        </slot>
      </component>
    </li>
    <!-- Prev -->
    <li v-bind="prevButtonProps.li">
      <component
        v-bind="prevButtonProps.button"
        :is="prevButtonProps.button.is"
        @click="pageClick($event, modelValueNumber - 1)"
      >
        <slot name="prev-text">
          {{ prevText }}
        </slot>
      </component>
    </li>
    <!-- Ellipsis start -->
    <li v-if="showFirstDots" v-bind="ellipsisProps.li">
      <span v-bind="ellipsisProps.span">
        <slot name="ellipsis-text">
          {{ ellipsisText || '...' }}
        </slot>
      </span>
    </li>
    <!-- Main -->
    <li
      v-for="page in pages"
      :key="`page-${page.number}`"
      :class="[
        'page-item',
        {
          'disabled': disabledBoolean,
          'active': isActivePage(page.number),
          'flex-fill': computedFill,
          'd-flex': computedFill && !disabledBoolean,
        },
        pageClass,
      ]"
      role="presentation"
      :aria-hidden="disabledBoolean || undefined"
    >
      <component
        :is="disabledBoolean ? 'span' : 'button'"
        :key="`page-${page.number}`"
        :class="['page-link', {'flex-grow-1': !disabledBoolean && computedFill}]"
        :aria-controls="ariaControls || undefined"
        :aria-disabled="disabledBoolean ? true : undefined"
        :aria-label="labelPage ? `${labelPage} ${page.number}` : undefined"
        :aria-posinset="page.number"
        :aria-checked="isActivePage(page.number)"
        :aria-setsize="numberOfPages"
        role="menuitemradio"
        :type="disabledBoolean ? undefined : 'button'"
        :tabindex="getTabIndex(page.number)"
        @click="pageClick($event, page.number)"
      >
        <slot
          name="page"
          :active="isActivePage(page.number)"
          :disabled="disabledBoolean"
          :page="page.number"
          :index="page.number - 1"
          :content="page.number"
        >
          {{ page.number }}
        </slot>
      </component>
    </li>

    <!-- Ellipsis end -->
    <li v-if="showLastDots" v-bind="ellipsisProps.li">
      <span v-bind="ellipsisProps.span">
        <slot name="ellipsis-text">
          {{ ellipsisText || '...' }}
        </slot>
      </span>
    </li>
    <!-- Next -->
    <li v-bind="nextButtonProps.li">
      <component
        v-bind="nextButtonProps.button"
        :is="nextButtonProps.button.is"
        @click="pageClick($event, modelValueNumber + 1)"
      >
        <slot name="next-text">
          {{ nextText }}
        </slot>
      </component>
    </li>
    <!-- Last -->
    <li v-if="!lastNumberBoolean && !hideGotoEndButtonsBoolean" v-bind="lastEndButtonProps.li">
      <component
        v-bind="lastEndButtonProps.button"
        :is="lastEndButtonProps.button.is"
        @click="pageClick($event, numberOfPages)"
      >
        <slot name="last-text">
          {{ lastText }}
        </slot>
      </component>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {BvEvent} from '../../utils'
import {computed, toRef, watch} from 'vue'
import type {AlignmentJustifyContent, Booleanish, ClassValue, Size} from '../../types'
import {useAlignment, useBooleanish} from '../../composables'
import {useToNumber, useVModel} from '@vueuse/core'

// Threshold of limit size when we start/stop showing ellipsis
const ELLIPSIS_THRESHOLD = 3

const props = withDefaults(
  defineProps<{
    align?: AlignmentJustifyContent | 'fill'
    ariaControls?: string
    ariaLabel?: string
    disabled?: Booleanish
    ellipsisClass?: ClassValue
    ellipsisText?: string
    firstClass?: ClassValue
    firstNumber?: Booleanish
    firstText?: string
    hideEllipsis?: Booleanish
    hideGotoEndButtons?: Booleanish
    labelFirstPage?: string
    labelLastPage?: string
    labelNextPage?: string
    labelPage?: string
    labelPrevPage?: string
    lastClass?: ClassValue
    lastNumber?: Booleanish
    lastText?: string
    limit?: number
    modelValue?: string | number
    nextClass?: ClassValue
    nextText?: string
    pageClass?: ClassValue
    perPage?: string | number
    pills?: Booleanish
    prevClass?: ClassValue
    prevText?: string
    size?: Size
    totalRows?: string | number
  }>(),
  {
    align: 'start',
    ariaControls: undefined,
    ariaLabel: 'Pagination',
    disabled: false,
    ellipsisClass: undefined,
    ellipsisText: '\u2026',
    firstClass: undefined,
    firstNumber: false,
    firstText: '\u00AB',
    hideEllipsis: false,
    hideGotoEndButtons: false,
    labelFirstPage: 'Go to first page',
    labelLastPage: 'Go to last page',
    labelNextPage: 'Go to next page',
    labelPage: 'Go to page',
    labelPrevPage: 'Go to previous page',
    lastClass: undefined,
    lastNumber: false,
    lastText: '\u00BB',
    limit: 5,
    modelValue: 1,
    nextClass: undefined,
    nextText: '\u203A',
    pageClass: undefined,
    perPage: DEFAULT_PER_PAGE,
    pills: false,
    prevClass: undefined,
    prevText: '\u2039',
    size: undefined,
    totalRows: DEFAULT_TOTAL_ROWS,
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'page-click': [event: BvEvent, pageNumber: number]
}>()

const modelValue = useVModel(props, 'modelValue', emit)

const disabledBoolean = useBooleanish(() => props.disabled)
const firstNumberBoolean = useBooleanish(() => props.firstNumber)
const hideEllipsisBoolean = useBooleanish(() => props.hideEllipsis)
const hideGotoEndButtonsBoolean = useBooleanish(() => props.hideGotoEndButtons)
const lastNumberBoolean = useBooleanish(() => props.lastNumber)
const pillsBoolean = useBooleanish(() => props.pills)

const perPageNumber = useToNumber(() => props.perPage, {nanToZero: true, method: 'parseInt'})
const totalRowsNumber = useToNumber(() => props.totalRows, {nanToZero: true, method: 'parseInt'})
const modelValueNumber = useToNumber(modelValue, {nanToZero: true, method: 'parseInt'})

const perPageSanitized = toRef(() => Math.max(perPageNumber.value || DEFAULT_PER_PAGE, 1))
const totalRowsSanitized = toRef(() => Math.max(totalRowsNumber.value || DEFAULT_TOTAL_ROWS, 0))
// Use Active to on page-item to denote active tab
const numberOfPages = toRef(() => Math.ceil(totalRowsSanitized.value / perPageSanitized.value))
const computedFill = toRef(() => props.align === 'fill')
// This doesn't use the computedFill util because TS cannot infer that it would never be 'fill'
const justifyAlign = toRef(() => (props.align === 'fill' ? 'start' : props.align))

const alignment = useAlignment(justifyAlign)

const isActivePage = (pageNumber: number) => pageNumber === modelValueNumber.value
const getTabIndex = (num: number) => (disabledBoolean.value ? null : isActivePage(num) ? '0' : '-1')

const checkDisabled = (num: number) =>
  disabledBoolean.value ||
  isActivePage(num) ||
  modelValueNumber.value < 1 ||
  // Check if the number is out of bounds
  num < 1 ||
  num > numberOfPages.value

const firstDisabled = computed(() => checkDisabled(1))
const prevDisabled = computed(() => checkDisabled(modelValueNumber.value - 1))
const lastDisabled = computed(() => checkDisabled(numberOfPages.value))
const nextDisabled = computed(() => checkDisabled(modelValueNumber.value + 1))

const getEndButtonProps = (dis: boolean, classVal: ClassValue) => ({
  li: {
    class: [
      'page-item',
      {
        'disabled': dis,
        'flex-fill': computedFill.value,
        'd-flex': computedFill.value && !dis,
      },
      classVal,
    ],
  },
  button: {
    'is': dis ? 'span' : 'button',
    'class': ['page-link', {'flex-grow-1': !dis && computedFill.value}],
    'aria-label': props.labelFirstPage,
    'aria-controls': props.ariaControls || undefined,
    'aria-disabled': dis ? true : undefined,
    'role': 'menuitem',
    'type': dis ? undefined : 'button',
    'tabindex': dis ? undefined : '-1',
  },
})

const firstButtonProps = computed(() => getEndButtonProps(firstDisabled.value, props.firstClass))
const prevButtonProps = computed(() => getEndButtonProps(prevDisabled.value, props.prevClass))
const nextButtonProps = computed(() => getEndButtonProps(nextDisabled.value, props.nextClass))
const lastEndButtonProps = computed(() => getEndButtonProps(lastDisabled.value, props.lastClass))

const ellipsisProps = computed(() => ({
  li: {
    class: [
      'page-item',
      'disabled',
      'bv-d-xs-down-none',
      computedFill.value ? 'flex-fill' : '',
      props.ellipsisClass,
    ],
    role: 'separator',
  },
  span: {
    class: ['page-link'],
  },
}))

const computedWrapperClasses = computed(() => [
  alignment.value,
  {
    [`pagination-${props.size}`]: props.size !== undefined,
    'b-pagination-pills': pillsBoolean.value,
  },
])

const startNumber = computed(() => {
  let lStartNumber: number
  const pagesLeft: number = numberOfPages.value - modelValueNumber.value

  if (pagesLeft + 2 < props.limit && props.limit > ELLIPSIS_THRESHOLD) {
    lStartNumber = numberOfPages.value - numberOfLinks.value + 1
  } else {
    // Middle and beginning calculation.
    lStartNumber = modelValueNumber.value - Math.floor(numberOfLinks.value / 2)
  }
  // Negative due at times
  if (lStartNumber < 1) {
    lStartNumber = 1
  } else if (lStartNumber > numberOfPages.value - numberOfLinks.value) {
    lStartNumber = numberOfPages.value - numberOfLinks.value + 1
  }
  //why check for this?
  // if (showFirstDots.value && cfirstNumber && lStartNumber < 4) {
  //   lStartNumber = 1
  // }

  // Special handling for lower limits (where ellipsis are never shown)
  if (props.limit <= ELLIPSIS_THRESHOLD) {
    if (lastNumberBoolean.value && numberOfPages.value === lStartNumber + numberOfLinks.value - 1) {
      lStartNumber = Math.max(lStartNumber - 1, 1)
    }
  }
  return lStartNumber
})

const showFirstDots = computed(() => {
  const pagesLeft = numberOfPages.value - modelValueNumber.value
  let rShowDots = false

  if (pagesLeft + 2 < props.limit && props.limit > ELLIPSIS_THRESHOLD) {
    if (props.limit > ELLIPSIS_THRESHOLD) {
      rShowDots = true
    }
  } else {
    if (props.limit > ELLIPSIS_THRESHOLD) {
      rShowDots = !!(!hideEllipsisBoolean.value || firstNumberBoolean.value)
    }
  }
  if (startNumber.value <= 1) {
    rShowDots = false
  }

  if (rShowDots && firstNumberBoolean.value && startNumber.value < 4) {
    rShowDots = false
  }

  return rShowDots
})

//Calculate the number of links considering limit
const numberOfLinks = computed(() => {
  let n: number = props.limit

  if (numberOfPages.value <= props.limit) {
    n = numberOfPages.value
  } else if (modelValueNumber.value < props.limit - 1 && props.limit > ELLIPSIS_THRESHOLD) {
    if (!hideEllipsisBoolean.value || lastNumberBoolean.value) {
      n = props.limit - (firstNumberBoolean.value ? 0 : 1)
    }
    n = Math.min(n, props.limit)
  } else if (
    numberOfPages.value - modelValueNumber.value + 2 < props.limit &&
    props.limit > ELLIPSIS_THRESHOLD
  ) {
    if (!hideEllipsisBoolean.value || firstNumberBoolean.value) {
      n = props.limit - (lastNumberBoolean.value ? 0 : 1)
    }
  } else {
    // We consider ellipsis tabs as their own page links
    if (props.limit > ELLIPSIS_THRESHOLD) {
      n = props.limit - (hideEllipsisBoolean.value ? 0 : 2)
    }
  }

  return n
})

const showLastDots = computed(() => {
  const paginationWindowEnd = numberOfPages.value - numberOfLinks.value // The start of the last window of page links

  let rShowDots = false

  if (modelValueNumber.value < props.limit - 1 && props.limit > ELLIPSIS_THRESHOLD) {
    if (!hideEllipsisBoolean.value || lastNumberBoolean.value) {
      rShowDots = true
    }
  } else {
    if (props.limit > ELLIPSIS_THRESHOLD) {
      rShowDots = !!(!hideEllipsisBoolean.value || lastNumberBoolean.value)
    }
  }
  if (startNumber.value > paginationWindowEnd) {
    rShowDots = false
  }
  const lastPageNumber = startNumber.value + numberOfLinks.value - 1

  if (rShowDots && lastNumberBoolean.value && lastPageNumber > numberOfPages.value - 3) {
    rShowDots = false
  }

  return rShowDots
})

const pagination = computed(() => ({
  pageSize: perPageSanitized.value,
  totalRows: totalRowsNumber.value,
  numberOfPages: numberOfPages.value,
}))

const pageClick = (event: MouseEvent, pageNumber: number) => {
  if (pageNumber === modelValueNumber.value) return

  const clickEvent = new BvEvent('page-click', {
    cancelable: true,
    target: event.target,
  })
  emit('page-click', clickEvent, pageNumber)

  if (clickEvent.defaultPrevented) return

  modelValue.value = pageNumber

  //    nextTick(() => {
  //  if (isVisible(target) && un_element.contains(target)) {
  //  attemptFocus(target)
  //} else {
  //this.focusCurrent()
  //}
  // })
}

watch(modelValueNumber, (newValue) => {
  const sanitizeCurrentPage = (value: number, numberOfPages: number) => {
    const page = value || 1
    return page > numberOfPages ? numberOfPages : page < 1 ? 1 : page
  }
  const calculatedValue = sanitizeCurrentPage(newValue, numberOfPages.value)
  if (calculatedValue === modelValue.value) return
  modelValue.value = calculatedValue
})

watch(pagination, (oldValue, newValue) => {
  if (newValue.pageSize !== oldValue.pageSize && newValue.totalRows === oldValue.totalRows) {
    // If the page size changes, reset to page 1
    modelValue.value = 1
  } else if (
    newValue.numberOfPages !== oldValue.numberOfPages &&
    modelValueNumber.value > newValue.numberOfPages
  ) {
    // If `numberOfPages` changes and is less than
    // the `currentPage` number, reset to page 1
    modelValue.value = 1
  }
})

const pages = computed(() =>
  Array.from({length: numberOfLinks.value}, (_, index) => ({
    number: startNumber.value + index,
  }))
)
</script>

<script lang="ts">
const DEFAULT_PER_PAGE = 20
const DEFAULT_TOTAL_ROWS = 0
</script>
