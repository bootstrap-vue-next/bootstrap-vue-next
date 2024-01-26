<template>
  <ul
    class="pagination"
    :class="computedWrapperClasses"
    role="menubar"
    :aria-disabled="disabledBoolean"
    :aria-label="ariaLabel || undefined"
  >
    <ReusableButton.define v-slot="{button, li, text, clickHandler}">
      <li v-bind="li">
        <component v-bind="button" :is="button.is" @click="clickHandler">
          <slot
            :name="text.name"
            :disabled="text.disabled"
            :page="text.page"
            :index="text.index"
            :active="text.active"
            :content="text.value"
          >
            {{ text.value }}
          </slot>
        </component>
      </li>
    </ReusableButton.define>

    <ReusableEllipsis.define>
      <li v-bind="ellipsisProps.li">
        <span v-bind="ellipsisProps.span">
          <slot name="ellipsis-text">
            {{ ellipsisText || '...' }}
          </slot>
        </span>
      </li>
    </ReusableEllipsis.define>

    <ReusableButton.reuse
      v-if="!hideGotoEndButtonsBoolean && !firstNumberBoolean"
      v-bind="firstButtonProps"
    />
    <ReusableButton.reuse v-bind="prevButtonProps" />

    <ReusableButton.reuse
      v-if="firstNumberBoolean && pages[0] && pages[0].number !== 1"
      v-bind="firstNumberButtonProps"
    />

    <ReusableEllipsis.reuse v-if="showFirstDots" />

    <ReusableButton.reuse
      v-for="page in pages"
      :key="`page-${page.number}`"
      v-bind="getPageButtonProps(page.number)"
    />

    <ReusableEllipsis.reuse v-if="showLastDots" />

    <ReusableButton.reuse
      v-if="
        lastNumberBoolean &&
        pages[pages.length - 1] &&
        pages[pages.length - 1].number !== numberOfPages
      "
      v-bind="lastNumberButtonProps"
    />

    <ReusableButton.reuse v-bind="nextButtonProps" />
    <ReusableButton.reuse
      v-if="!lastNumberBoolean && !hideGotoEndButtonsBoolean"
      v-bind="lastButtonProps"
    />
  </ul>
</template>

<script setup lang="ts">
import {BvEvent} from '../../utils'
import {computed, toRef, watch} from 'vue'
import type {AlignmentJustifyContent, Booleanish, ClassValue, Numberish, Size} from '../../types'
import {useAlignment, useBooleanish} from '../../composables'
import {createReusableTemplate, useToNumber, useVModel} from '@vueuse/core'

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
    limit?: Numberish
    modelValue?: Numberish
    nextClass?: ClassValue
    nextText?: string
    pageClass?: ClassValue
    perPage?: Numberish
    pills?: Booleanish
    prevClass?: ClassValue
    prevText?: string
    size?: Size
    totalRows?: Numberish
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

const limitNumber = useToNumber(() => props.limit, {nanToZero: true, method: 'parseInt'})
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

const getBaseButtonProps = ({
  page,
  classVal,
  dis,
  slotName,
  textValue,
  tabIndex,
  label,
  position,
  isActive,
  role,
  hidden,
}: {
  page: number
  dis: boolean
  classVal: ClassValue
  slotName: string
  textValue?: string
  tabIndex?: string
  label?: string
  position?: number
  isActive?: boolean
  role?: string
  hidden?: boolean
}) => ({
  li: {
    'class': [
      'page-item',
      {
        'active': isActive,
        'disabled': dis,
        'flex-fill': computedFill.value,
        'd-flex': computedFill.value && !dis,
      },
      classVal,
    ],
    role,
    'aria-hidden': hidden,
  },
  button: {
    'is': dis ? 'span' : 'button',
    'class': ['page-link', {'flex-grow-1': !dis && computedFill.value}],
    'aria-label': label,
    'aria-controls': props.ariaControls || undefined,
    'aria-disabled': dis ? true : undefined,
    'aria-posinset': position,
    'aria-setsize': position ? numberOfPages.value : undefined,
    'role': 'menuitem',
    'type': dis ? undefined : 'button',
    'tabindex': dis ? undefined : tabIndex,
  },
  text: {
    name: slotName,
    active: isActive,
    value: textValue ?? page,
    page,
    disabled: dis,
    index: page - 1,
    content: textValue ? undefined : page,
  },
  clickHandler: (e: Readonly<MouseEvent>) => pageClick(e, page),
})

const getButtonProps = ({
  page,
  classVal,
  dis,
  slotName,
  textValue,
  label,
}: {
  page: number
  dis: boolean
  classVal: ClassValue
  slotName: string
  textValue?: string
  label: string
}) => getBaseButtonProps({page, classVal, dis, slotName, textValue, label, tabIndex: '-1'})

const getPageButtonProps = (page: number) =>
  getBaseButtonProps({
    page,
    dis: disabledBoolean.value,
    classVal: props.pageClass,
    slotName: 'page',
    label: props.labelPage ? `${props.labelPage} ${page}` : undefined,
    tabIndex: getTabIndex(page) ?? undefined,
    position: page,
    isActive: isActivePage(page),
  })

const firstButtonProps = computed(() =>
  getButtonProps({
    page: 1,
    dis: firstDisabled.value,
    classVal: props.firstClass,
    slotName: 'first-text',
    textValue: props.firstText,
    label: props.labelFirstPage,
  })
)
const prevButtonProps = computed(() =>
  getButtonProps({
    page: Math.max(modelValueNumber.value - 1, 1),
    dis: prevDisabled.value,
    classVal: props.prevClass,
    slotName: 'prev-text',
    textValue: props.prevText,
    label: props.labelPrevPage,
  })
)
const nextButtonProps = computed(() =>
  getButtonProps({
    page: Math.min(modelValueNumber.value + 1, numberOfPages.value),
    dis: nextDisabled.value,
    classVal: props.nextClass,
    slotName: 'next-text',
    textValue: props.nextText,
    label: props.labelNextPage,
  })
)
const lastButtonProps = computed(() =>
  getButtonProps({
    page: numberOfPages.value,
    dis: lastDisabled.value,
    classVal: props.lastClass,
    slotName: 'last-text',
    textValue: props.lastText,
    label: props.labelLastPage,
  })
)
const firstNumberButtonProps = computed(() => getPageButtonProps(1))
const lastNumberButtonProps = computed(() => getPageButtonProps(numberOfPages.value))

const ReusableButton = createReusableTemplate<ReturnType<typeof getButtonProps>>()
const ReusableEllipsis = createReusableTemplate()

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

  if (pagesLeft + 2 < limitNumber.value && limitNumber.value > ELLIPSIS_THRESHOLD) {
    lStartNumber = numberOfPages.value - numberOfLinks.value + 1
  } else {
    // Middle and beginning calculation.
    lStartNumber = modelValueNumber.value - Math.floor(numberOfLinks.value / 2)
  }
  // When first number is set and the first ellipsis is hidden, we replace the ellipsis with a
  //  page number by starting one earlier
  if (firstNumberBoolean.value && lStartNumber < 4) {
    lStartNumber -= 1
  }
  if (lastNumberBoolean.value && modelValueNumber.value === numberOfPages.value - 3) {
    lStartNumber += 1
  }
  // Negative due at times
  if (lStartNumber < 1) {
    lStartNumber = 1
  } else if (lStartNumber > numberOfPages.value - numberOfLinks.value) {
    lStartNumber = numberOfPages.value - numberOfLinks.value + 1
  }

  // Special handling for lower limits (where ellipsis are never shown)
  if (limitNumber.value <= ELLIPSIS_THRESHOLD) {
    if (lastNumberBoolean.value && numberOfPages.value === lStartNumber + numberOfLinks.value - 1) {
      lStartNumber = Math.max(lStartNumber - 1, 1)
    }
  }
  return lStartNumber
})

const showFirstDots = computed(() => {
  if (hideEllipsisBoolean.value) {
    return false
  }

  let rShowDots = limitNumber.value > ELLIPSIS_THRESHOLD

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
  let n: number = limitNumber.value

  if (numberOfPages.value <= limitNumber.value) {
    n = numberOfPages.value
  } else if (limitNumber.value > ELLIPSIS_THRESHOLD && !hideEllipsisBoolean.value) {
    // By default we show limit - 2, since we count the ellipsis
    n -= 2

    // Add back in a link if the first ellipsis is hidden
    if (
      modelValueNumber.value <
      Math.floor((limitNumber.value - 1) / 2) + (firstNumberBoolean.value ? 3 : 2)
    ) {
      n += 1
    }

    // Add a link for the first number
    if (
      firstNumberBoolean.value &&
      modelValueNumber.value <= limitNumber.value - Math.ceil((limitNumber.value - 4) / 2)
    ) {
      n += 1
    }

    // Add back in a link if the last ellipsis is hidden
    if (modelValueNumber.value > numberOfPages.value - limitNumber.value + 2) {
      n += 1
    }

    // Add a link for the last number
    if (
      lastNumberBoolean.value &&
      modelValueNumber.value > numberOfPages.value - limitNumber.value + 2
    ) {
      n += 1
    }

    // Handle corner case for last button with limits of 4 &  5
    if (
      lastNumberBoolean.value &&
      ((limitNumber.value === 4 &&
        (numberOfPages.value - modelValueNumber.value === 3 ||
          numberOfPages.value - modelValueNumber.value === 2)) ||
        (limitNumber.value === 5 && numberOfPages.value - modelValueNumber.value === 3))
    ) {
      n += 1
    }
  } else {
    if (firstNumberBoolean.value && modelValueNumber.value <= limitNumber.value) {
      n += 1
    }
  }

  return n
})

const showLastDots = computed(() => {
  if (hideEllipsisBoolean.value) {
    return false
  }

  const paginationWindowEnd = numberOfPages.value - numberOfLinks.value // The start of the last window of page links

  let rShowDots = limitNumber.value > ELLIPSIS_THRESHOLD

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

const pageClick = (event: Readonly<MouseEvent>, pageNumber: number) => {
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

const pages = computed(() => {
  const start = startNumber.value
  return Array.from({length: numberOfLinks.value}, (_, index) => ({
    number: start + index,
  }))
})
</script>

<script lang="ts">
const DEFAULT_PER_PAGE = 20
const DEFAULT_TOTAL_ROWS = 0
</script>
