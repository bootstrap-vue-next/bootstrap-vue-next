<template>
  <ul
    class="pagination"
    :class="computedWrapperClasses"
    role="menubar"
    :aria-disabled="disabledBoolean"
    :aria-label="ariaLabel || undefined"
  >
    <ReusableButtuon.define v-slot="{button, li, text, clickHandler}">
      <li v-bind="li">
        <component v-bind="button" :is="button.is" @click="clickHandler">
          <slot :name="text.name" :disabled="text.disabled" :page="text.page" :index="text.index">
            {{ text.value }}
          </slot>
        </component>
      </li>
    </ReusableButtuon.define>

    <ReusablePageButton.define v-slot="{button, li, text, clickHandler}">
      <li v-bind="li">
        <component v-bind="button" :is="button.is" @click="clickHandler">
          <slot
            :name="text.name"
            :active="text.active"
            :disabled="text.disabled"
            :page="text.value"
            :index="text.index"
            :content="text.value"
          >
            {{ text.value }}
          </slot>
        </component>
      </li>
    </ReusablePageButton.define>

    <ReusableEllipsis.define>
      <li v-bind="ellipsisProps.li">
        <span v-bind="ellipsisProps.span">
          <slot name="ellipsis-text">
            {{ ellipsisText || '...' }}
          </slot>
        </span>
      </li>
    </ReusableEllipsis.define>

    <ReusableButtuon.reuse
      v-if="!hideGotoEndButtonsBoolean && !firstNumberBoolean"
      v-bind="firstButtonProps"
    />
    <ReusableButtuon.reuse v-bind="prevButtonProps" />

    <ReusablePageButton.reuse
      v-if="firstNumberBoolean && pages[0] && pages[0].number !== 1"
      v-bind="firstNumberButtonProps"
    />

    <ReusableEllipsis.reuse v-if="showFirstDots" />

    <ReusablePageButton.reuse
      v-for="page in pages"
      :key="`page-${page.number}`"
      v-bind="getPageButtonProps({page: page.number, dis: disabledBoolean})"
    />

    <ReusableEllipsis.reuse v-if="showLastDots" />

    <ReusablePageButton.reuse
      v-if="
        lastNumberBoolean &&
        pages[pages.length - 1] &&
        pages[pages.length - 1].number !== numberOfPages
      "
      v-bind="lastNumberButtonProps"
    />

    <ReusableButtuon.reuse v-bind="nextButtonProps" />
    <ReusableButtuon.reuse
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

const getButtonProps = ({
  page,
  classVal,
  dis,
  text,
}: {
  page: number
  dis: boolean
  classVal: ClassValue
  text: Readonly<{name: string; value: string}>
}) => ({
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
  text: {
    name: text.name,
    value: text.value,
    disabled: dis,
    index: page - 1,
    page,
  },
  clickHandler: (e: Readonly<MouseEvent>) => pageClick(e, page),
})

const getPageButtonProps = ({page, dis}: {page: number; dis: boolean}) => ({
  page,
  li: {
    'class': [
      'page-item',
      {
        'disabled': dis,
        'active': isActivePage(page),
        'flex-fill': computedFill.value,
        'd-flex': computedFill.value && !dis,
      },
      props.pageClass,
    ],
    'role': 'presentation',
    'aria-hidden': dis,
  },
  button: {
    'is': dis ? 'span' : 'button',
    'class': ['page-link', {'flex-grow-1': !dis && computedFill.value}],
    'aria-label': props.labelPage ? `${props.labelPage} ${page}` : undefined,
    'aria-controls': props.ariaControls || undefined,
    'aria-disabled': dis ? true : undefined,
    'aria-posinset': page,
    'aria-setsize': numberOfPages.value,
    'role': 'menuitemradio',
    'type': dis ? undefined : 'button',
    'tabindex': dis ? undefined : getTabIndex(page),
  },
  text: {
    name: 'page',
    active: isActivePage(page),
    disabled: dis,
    value: page,
    index: page - 1,
    content: page,
  },
  clickHandler: (e: Readonly<MouseEvent>) => pageClick(e, page),
})

const firstButtonProps = computed(() =>
  getButtonProps({
    page: 1,
    dis: firstDisabled.value,
    classVal: props.firstClass,
    text: {
      name: 'first-text',
      value: props.firstText,
    },
  })
)
const prevButtonProps = computed(() =>
  getButtonProps({
    page: Math.max(modelValueNumber.value - 1, 1),
    dis: prevDisabled.value,
    classVal: props.prevClass,
    text: {name: 'prev-text', value: props.prevText},
  })
)
const nextButtonProps = computed(() =>
  getButtonProps({
    page: Math.min(modelValueNumber.value + 1, numberOfPages.value),
    dis: nextDisabled.value,
    classVal: props.nextClass,
    text: {name: 'next-text', value: props.nextText},
  })
)
const lastButtonProps = computed(() =>
  getButtonProps({
    page: numberOfPages.value,
    dis: lastDisabled.value,
    classVal: props.lastClass,
    text: {name: 'last-text', value: props.lastText},
  })
)
const firstNumberButtonProps = computed(() =>
  getPageButtonProps({
    dis: firstDisabled.value,
    page: 1,
  })
)
const lastNumberButtonProps = computed(() =>
  getPageButtonProps({
    dis: lastDisabled.value,
    page: numberOfPages.value,
  })
)

const ReusableButtuon = createReusableTemplate<ReturnType<typeof getButtonProps>>()
const ReusablePageButton = createReusableTemplate<ReturnType<typeof getPageButtonProps>>()
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
  if (limitNumber.value <= ELLIPSIS_THRESHOLD) {
    if (lastNumberBoolean.value && numberOfPages.value === lStartNumber + numberOfLinks.value - 1) {
      lStartNumber = Math.max(lStartNumber - 1, 1)
    }
  }
  return lStartNumber
})

const showFirstDots = computed(() => {
  const pagesLeft = numberOfPages.value - modelValueNumber.value
  let rShowDots = false

  if (pagesLeft + 2 < limitNumber.value && limitNumber.value > ELLIPSIS_THRESHOLD) {
    if (limitNumber.value > ELLIPSIS_THRESHOLD) {
      rShowDots = true
    }
  } else {
    if (limitNumber.value > ELLIPSIS_THRESHOLD) {
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
  let n: number = limitNumber.value

  if (numberOfPages.value <= limitNumber.value) {
    n = numberOfPages.value
  } else if (
    modelValueNumber.value < limitNumber.value - 1 &&
    limitNumber.value > ELLIPSIS_THRESHOLD
  ) {
    if (!hideEllipsisBoolean.value || lastNumberBoolean.value) {
      n = limitNumber.value - (firstNumberBoolean.value ? 0 : 1)
    }
    n = Math.min(n, limitNumber.value)
  } else if (
    numberOfPages.value - modelValueNumber.value + 2 < limitNumber.value &&
    limitNumber.value > ELLIPSIS_THRESHOLD
  ) {
    if (!hideEllipsisBoolean.value || firstNumberBoolean.value) {
      n = limitNumber.value - (lastNumberBoolean.value ? 0 : 1)
    }
  } else {
    // We consider ellipsis tabs as their own page links
    if (limitNumber.value > ELLIPSIS_THRESHOLD) {
      n = limitNumber.value - (hideEllipsisBoolean.value ? 0 : 2)
    }
  }

  return n
})

const showLastDots = computed(() => {
  const paginationWindowEnd = numberOfPages.value - numberOfLinks.value // The start of the last window of page links

  let rShowDots = false

  if (modelValueNumber.value < limitNumber.value - 1 && limitNumber.value > ELLIPSIS_THRESHOLD) {
    if (!hideEllipsisBoolean.value || lastNumberBoolean.value) {
      rShowDots = true
    }
  } else {
    if (limitNumber.value > ELLIPSIS_THRESHOLD) {
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
