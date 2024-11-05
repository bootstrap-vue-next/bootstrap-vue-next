<template>
  <ul
    class="pagination"
    :class="computedWrapperClasses"
    role="menubar"
    :aria-disabled="props.disabled"
    :aria-label="props.ariaLabel || undefined"
    @keydown="handleKeyNav"
  >
    <template v-for="page in pages" :key="`page-${page.id}`">
      <li v-bind="page.li" ref="pageElements">
        <span
          v-if="page.id === FIRST_ELLIPSIS || page.id === LAST_ELLIPSIS"
          v-bind="ellipsisProps.span"
        >
          <slot name="ellipsis-text">
            {{ props.ellipsisText || '...' }}
          </slot>
        </span>
        <component v-bind="page.button" :is="page.button.is" v-else @click="page.clickHandler">
          <slot
            :name="page.text.name"
            :disabled="page.text.disabled"
            :page="page.text.page"
            :index="page.text.index"
            :active="page.text.active"
            :content="page.text.value"
          >
            {{ page.text.value }}
          </slot>
        </component>
      </li>
    </template>
  </ul>
</template>

<script setup lang="ts">
import {BvEvent} from '../../utils'
import {computed, nextTick, useTemplateRef, watch} from 'vue'
import type {BPaginationProps} from '../../types/ComponentProps'
import {useAlignment} from '../../composables/useAlignment'
import {useToNumber} from '@vueuse/core'
import {useDefaults} from '../../composables/useDefaults'
import type {ClassValue} from '../../types/AnyValuedAttributes'
import {CODE_DOWN, CODE_LEFT, CODE_RIGHT, CODE_UP} from '../../utils/constants'
import {stopEvent} from '../../utils/event'
import {getActiveElement} from '../../utils/dom'

// Threshold of limit size when we start/stop showing ellipsis
const ELLIPSIS_THRESHOLD = 3

const FIRST_BUTTON = -1
const PREV_BUTTON = -2
const NEXT_BUTTON = -3
const LAST_BUTTON = -4
const FIRST_ELLIPSIS = -5
const LAST_ELLIPSIS = -6

// This is necessary because type inference isn't succeeding for the pages computed
interface PageButton {
  id: number
  li: Record<string, unknown>
  button: Record<string, unknown>
  text: Record<string, unknown>
  clickHandler: (e: Readonly<MouseEvent>) => void
}

const _props = withDefaults(defineProps<Omit<BPaginationProps, 'modelValue'>>(), {
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

const modelValue = defineModel<Exclude<BPaginationProps['modelValue'], undefined>>({default: 1})

const pageElements = useTemplateRef('pageElements')

const limitNumber = useToNumber(() => props.limit, {nanToZero: true, method: 'parseInt'})
const perPageNumber = useToNumber(() => props.perPage, {nanToZero: true, method: 'parseInt'})
const totalRowsNumber = useToNumber(() => props.totalRows, {nanToZero: true, method: 'parseInt'})
const modelValueNumber = useToNumber(modelValue, {nanToZero: true, method: 'parseInt'})

const perPageSanitized = computed(() => Math.max(perPageNumber.value || DEFAULT_PER_PAGE, 1))
const totalRowsSanitized = computed(() => Math.max(totalRowsNumber.value || DEFAULT_TOTAL_ROWS, 0))
// Use Active to on page-item to denote active tab
const numberOfPages = computed(() => Math.ceil(totalRowsSanitized.value / perPageSanitized.value))
const computedFill = computed(() => props.align === 'fill')
// This doesn't use the computedFill util because TS cannot infer that it would never be 'fill'
const justifyAlign = computed(() => (props.align === 'fill' ? 'start' : props.align))

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
  isSmHidden,
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
  isSmHidden?: boolean
}) => ({
  li: {
    'class': [
      'page-item',
      {
        'active': isActive,
        'disabled': dis,
        'bv-d-sm-down-none': isSmHidden,
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
    'class': ['page-link', 'text-center', {'flex-grow-1': !dis && computedFill.value}],
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

const getPageButtonProps = (page: number, isSmHidden?: boolean) =>
  getBaseButtonProps({
    page,
    dis: props.disabled,
    classVal: props.pageClass,
    slotName: 'page',
    label: props.labelPage ? `${props.labelPage} ${page}` : undefined,
    tabIndex: getTabIndex(page) ?? undefined,
    position: page,
    isActive: isActivePage(page),
    isSmHidden,
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

const ellipsisProps = computed(() => ({
  li: {
    class: [
      'page-item',
      'disabled',
      'text-center',
      'bv-d-sm-down-none',
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

const isDisabled = (el: HTMLButtonElement) => {
  const isElement = !!(el && el.nodeType === Node.ELEMENT_NODE)
  const hasAttr = isElement ? el.hasAttribute('disabled') : null
  const hasClass = isElement && el.classList ? el.classList.contains('disabled') : false

  return !isElement || el.disabled || hasAttr || hasClass
}

const getButtons = () =>
  pageElements.value
    ?.map((page) => page.children[0] as HTMLButtonElement)
    .filter((btn) => {
      if (btn.getAttribute('display') === 'none') {
        return false
      }

      const bcr = btn.getBoundingClientRect()

      return !!(bcr && bcr.height > 0 && bcr.width > 0)
    }) ?? []

const focusFirst = () => {
  nextTick(() => {
    const btn = getButtons().find((el) => !isDisabled(el))
    btn?.focus()
  })
}

const focusPrev = () => {
  nextTick(() => {
    const buttons = getButtons()
    const index = buttons.indexOf(getActiveElement() as HTMLButtonElement)

    if (index > 0 && !isDisabled(buttons[index - 1])) {
      buttons[index - 1]?.focus()
    }
  })
}

const focusLast = () => {
  nextTick(() => {
    const btn = getButtons()
      .reverse()
      .find((el) => !isDisabled(el))
    btn?.focus()
  })
}

const focusNext = () => {
  nextTick(() => {
    const buttons = getButtons()
    const index = buttons.indexOf(getActiveElement() as HTMLButtonElement)

    if (index < buttons.length - 1 && !isDisabled(buttons[index + 1])) {
      buttons[index + 1]?.focus()
    }
  })
}

const handleKeyNav = (event: KeyboardEvent) => {
  const {code, shiftKey} = event

  if (code === CODE_LEFT || code === CODE_UP) {
    stopEvent(event)
    shiftKey ? focusFirst() : focusPrev()
  } else if (code === CODE_RIGHT || code === CODE_DOWN) {
    stopEvent(event)
    shiftKey ? focusLast() : focusNext()
  }
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

const hideFirstButton = computed(() => (props.hideGotoEndButtons && !props.firstNumber ? 1 : 0))
const hideLastButton = computed(() => (props.hideGotoEndButtons && !props.lastNumber ? 1 : 0))
const showFirstButton = computed(() => (hideFirstButton.value ? 0 : 1))
const showLastButton = computed(() => (hideLastButton.value ? 0 : 1))
const firstPage = computed(() => (props.firstNumber ? 1 : 0))
const lastPage = computed(() => (props.lastNumber ? 1 : 0))
const halfLimit = computed(() => Math.floor(limitNumber.value / 2))

const pages = computed(() => {
  const {value} = modelValueNumber

  const els = elements.value.map((p) => {
    switch (p) {
      case FIRST_BUTTON:
        return {id: p, ...firstButtonProps.value}
      case PREV_BUTTON:
        return {id: p, ...prevButtonProps.value}
      case NEXT_BUTTON:
        return {id: p, ...nextButtonProps.value}
      case LAST_BUTTON:
        return {id: p, ...lastButtonProps.value}
      case FIRST_ELLIPSIS:
      case LAST_ELLIPSIS:
        return {id: p, ...ellipsisProps.value}
      default:
        return {id: p, ...getPageButtonProps(p)}
    }
  })

  if (numberOfPages.value > 3) {
    if (value > numberOfPages.value - halfLimit.value - lastPage.value) {
      const idx = 2 + showFirstButton.value
      els[idx] = {id: els[idx].id, ...getPageButtonProps(els[idx].id, true)}
    }

    if (value <= halfLimit.value + firstPage.value) {
      const idx = els.length - (3 + showLastButton.value)
      els[idx] = {id: els[idx].id, ...getPageButtonProps(els[idx].id, true)}
    }
  }

  return els as PageButton[]
})

const elements = computed(() => {
  // The idea here is to create an array of all the buttons on the page control.
  // This way we can keep the invariants in one place and the template code just
  // iterates over the array.

  const pages = numberOfPages.value
  const {value} = modelValueNumber
  const limit = limitNumber.value
  const hideEllipsis = props.hideEllipsis || limit <= ELLIPSIS_THRESHOLD

  // The first case is when all of the page buttons fit on the control, this is
  //  the simplest case and the only one that will create an array smaller than
  //  Limit + 4 - hideEndButtons * 2 (the [first, last,] prev, next buttons)

  if (pages < limit + firstPage.value + lastPage.value) {
    return [
      !firstPage.value && !hideFirstButton.value ? FIRST_BUTTON : null,
      PREV_BUTTON,
      ...Array.from({length: pages}, (_, index) => index + 1),
      NEXT_BUTTON,
      !lastPage.value && !hideLastButton.value ? LAST_BUTTON : null,
    ].filter((x) => x !== null) as number[]
  }

  // All of the remaining cases result in an array that is exactly limit + 4 - hideEndButtons * 2 in length, so create
  //  the array upfront and set up the beginning and end buttons, then fill the rest for each case

  const buttons = Array.from({length: limit + 4 - (hideFirstButton.value + hideLastButton.value)})
  if (!hideFirstButton.value) {
    if (!firstPage.value) {
      buttons[0] = FIRST_BUTTON
      buttons[1] = PREV_BUTTON
    } else {
      buttons[0] = PREV_BUTTON
      buttons[1] = 1
    }
  } else {
    buttons[0] = PREV_BUTTON
  }

  if (!hideLastButton.value) {
    if (!lastPage.value) {
      buttons[buttons.length - 1] = LAST_BUTTON
      buttons[buttons.length - 2] = NEXT_BUTTON
    } else {
      buttons[buttons.length - 1] = NEXT_BUTTON
      buttons[buttons.length - 2] = pages
    }
  } else {
    buttons[buttons.length - 1] = NEXT_BUTTON
  }

  // The next case is where the page buttons start at the begginning, with
  //  no ellipsis at the beginning, but one at the end

  if (value <= halfLimit.value + firstPage.value) {
    for (let index = 1; index <= limit; index++) {
      buttons[index + 1 - hideFirstButton.value] = index + firstPage.value
    }

    if (!hideEllipsis) {
      buttons[buttons.length - (2 + showLastButton.value)] = LAST_ELLIPSIS
    }
  }

  // And then we have the case where the page buttons go up to the end, with no
  //  ellipsis at the end, but one at the beginning

  if (value > pages - halfLimit.value - lastPage.value) {
    const start = pages - (limit - 1) - lastPage.value
    for (let index = 0; index < limit; index++) {
      buttons[index + 2 - hideFirstButton.value] = start + index
    }

    if (!hideEllipsis) {
      buttons[1 + showFirstButton.value] = FIRST_ELLIPSIS
    }
  }

  // Finally we have the case where we have ellipsis at both ends
  if (!buttons[2]) {
    // Is there a more elegant way to ceck that we're in the final case?
    const start = value - Math.floor(limit / 2)
    for (let index = 0; index < limit; index++) {
      buttons[index + 2 - hideFirstButton.value] = start + index
    }

    if (!hideEllipsis) {
      buttons[1 + showFirstButton.value] = FIRST_ELLIPSIS
      buttons[buttons.length - (2 + showLastButton.value)] = LAST_ELLIPSIS
    }
  }

  //Enable sanity check for debugging purposes
  // for (let i = 0; i < buttons.length; i++) {
  //   if (!buttons[i]) {
  //     // eslint-disable-next-line no-console
  //     console.log(
  //       `Failed: button == ${i}, limit=${limit}, pages=${pages}, firstPage=${firstPage}, lastPage=${lastPage}, value=${value}`
  //     )
  //   }
  // }

  return buttons.filter((x) => x !== null) as number[]
})
</script>

<script lang="ts">
const DEFAULT_PER_PAGE = 20
const DEFAULT_TOTAL_ROWS = 0
</script>
