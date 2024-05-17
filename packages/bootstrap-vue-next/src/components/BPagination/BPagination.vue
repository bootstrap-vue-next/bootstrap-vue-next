<template>
  <ul
    class="pagination"
    :class="computedWrapperClasses"
    role="menubar"
    :aria-disabled="props.disabled"
    :aria-label="props.ariaLabel || undefined"
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
            {{ props.ellipsisText || '...' }}
          </slot>
        </span>
      </li>
    </ReusableEllipsis.define>

    <template v-for="button in buttons" :key="`page-${button}`">
      <ReusableButton.reuse v-if="button === FIRST_BUTTON" v-bind="firstButtonProps" />
      <ReusableButton.reuse v-else-if="button === PREV_BUTTON" v-bind="prevButtonProps" />
      <ReusableButton.reuse v-else-if="button === NEXT_BUTTON" v-bind="nextButtonProps" />
      <ReusableButton.reuse v-else-if="button === LAST_BUTTON" v-bind="lastButtonProps" />
      <ReusableEllipsis.reuse v-else-if="button === ELLIPSIS_BUTTON" />
      <ReusableButton.reuse v-else-if="button !== null" v-bind="getPageButtonProps(button)" />
    </template>
  </ul>
</template>

<script setup lang="ts">
import {BvEvent} from '../../utils'
import {computed, toRef, watch} from 'vue'
import type {BPaginationProps, ClassValue} from '../../types'
import {useAlignment, useDefaults} from '../../composables'
import {createReusableTemplate, useToNumber} from '@vueuse/core'

// Threshold of limit size when we start/stop showing ellipsis
const ELLIPSIS_THRESHOLD = 3

const FIRST_BUTTON = -1
const PREV_BUTTON = -2
const NEXT_BUTTON = -3
const LAST_BUTTON = -4
const ELLIPSIS_BUTTON = -5

const _props = withDefaults(defineProps<BPaginationProps>(), {
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
  nextClass: undefined,
  nextText: '\u203A',
  pageClass: undefined,
  perPage: DEFAULT_PER_PAGE,
  pills: false,
  prevClass: undefined,
  prevText: '\u2039',
  size: undefined,
  totalRows: DEFAULT_TOTAL_ROWS,
})
const props = useDefaults(_props, 'BPagination')

const emit = defineEmits<{
  'page-click': [event: BvEvent, pageNumber: number]
}>()

const modelValue = defineModel<number>({default: 1})

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
const getTabIndex = (num: number) => (props.disabled ? null : isActivePage(num) ? '0' : '-1')

const checkDisabled = (num: number) =>
  props.disabled ||
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
    dis: props.disabled,
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
    'b-pagination-pills': props.pills,
  },
])

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

const buttons = computed(() => {
  // The idea here is to create an array of all the buttons on the page control.
  // This was we can keep the invariants in one place and the template code just
  // iterates over the array.

  const pages = numberOfPages.value
  const {value} = modelValueNumber
  const limit = limitNumber.value
  const firstPage = props.firstNumber ? 1 : 0
  const lastPage = props.lastNumber ? 1 : 0
  const hideEllipsis = props.hideEllipsis || limit <= ELLIPSIS_THRESHOLD
  const hideEndButtons = props.hideGotoEndButtons ? 1 : 0

  // The first case is when all of the page buttons fit on the control, this is
  //  the simplest case and the only one that will create an array smaller than
  //  Limit + 4 - hideEndButtons *2 (the [first, last,] prev, next buttons)

  if (pages < limit + firstPage + lastPage) {
    return [
      !firstPage && !hideEndButtons ? FIRST_BUTTON : null,
      PREV_BUTTON,
      ...Array.from({length: pages}, (_, index) => index + 1),
      NEXT_BUTTON,
      !lastPage && !hideEndButtons ? LAST_BUTTON : null,
    ].filter((x) => x !== null)
  }

  // All of the remaining cases result in an array that is exactly limit + 4 - hideEndButtons * 2 in length, so create
  //  the array upfront and set up the beginning and end buttons, then fill the rest for each case

  const buttons = Array.from({length: limit + 4 - hideEndButtons * 2})
  if (!hideEndButtons) {
    if (!firstPage) {
      buttons[0] = FIRST_BUTTON
      buttons[1] = PREV_BUTTON
    } else {
      buttons[0] = PREV_BUTTON
      buttons[1] = 1
    }

    if (!lastPage) {
      buttons[buttons.length - 1] = LAST_BUTTON
      buttons[buttons.length - 2] = NEXT_BUTTON
    } else {
      buttons[buttons.length - 1] = NEXT_BUTTON
      buttons[buttons.length - 2] = pages
    }
  } else {
    buttons[0] = PREV_BUTTON
    buttons[buttons.length - 1] = NEXT_BUTTON
  }

  // The next case is where the buttons page buttons start at the begginning, with
  //  no ellipsis at the beginning, but one at the end

  const halfLimit = Math.floor(limit / 2)
  if (value <= halfLimit + firstPage) {
    for (let index = 1; index <= limit; index++) {
      buttons[index + 1 - hideEndButtons] = index + firstPage
    }

    if (!hideEllipsis) {
      buttons[buttons.length - 3] = ELLIPSIS_BUTTON
    }
  }

  // And then we have the case where the page buttons go up to the end, with no
  //  ellipsis at the end, but one at the beginning

  if (value > pages - halfLimit - lastPage) {
    const start = pages - (limit - 1) - lastPage
    for (let index = 0; index < limit; index++) {
      buttons[index + 2 - hideEndButtons] = start + index
    }

    if (!hideEllipsis) {
      buttons[2] = ELLIPSIS_BUTTON
    }
  }

  // Finally we have the case where we have ellipsis at both ends
  if (!buttons[2]) {
    // Is there a more elegant way to ceck that we're in the final case?
    const start = value - Math.floor(limit / 2)
    for (let index = 0; index < limit; index++) {
      buttons[index + 2 - hideEndButtons] = start + index
    }

    if (!hideEllipsis) {
      buttons[2] = ELLIPSIS_BUTTON
      buttons[buttons.length - 3] = ELLIPSIS_BUTTON
    }
  }

  // Enable sanity check for debugging purposes
  // for (let i = 0; i < buttons.length; i++) {
  //   if (!buttons[i]) {
  //     console.log(
  //       `Failed: button == ${i}, limit=${limit}, pages=${pages}, firstPage=${firstPage}, lastPage=${lastPage}, value=${value}`
  //     )
  //   }
  // }

  return buttons as number[]
})
</script>

<script lang="ts">
const DEFAULT_PER_PAGE = 20
const DEFAULT_TOTAL_ROWS = 0
</script>
