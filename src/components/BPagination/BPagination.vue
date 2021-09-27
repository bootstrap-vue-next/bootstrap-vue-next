<script lang="ts">
import {normalizeSlot} from '@/utils/normalize-slot'
import {computed, defineComponent, h, reactive, ref, toRef, unref, watch} from 'vue'
import {Pagination} from '../types'
import {isUndefinedOrNull} from '../utils/inspect'
import {toInteger} from '../utils/number'

// Default # of buttons limit
const DEFAULT_LIMIT = 5

const DEFAULT_PER_PAGE = 20
const DEFAULT_TOTAL_ROWS = 0

// Threshold of limit size when we start/stop showing ellipsis
const ELLIPSIS_THRESHOLD = 3

const sanitizePerPage = (value: number): number => Math.max(toInteger(value) || DEFAULT_PER_PAGE, 1)
const sanitizeTotalRows = (value: number): number =>
  Math.max(toInteger(value) || DEFAULT_TOTAL_ROWS, 0)
const sanitizeCurrentPage = (value: number, numberOfPages: number) => {
  const page = toInteger(value) || 1
  return page > numberOfPages ? numberOfPages : page < 1 ? 1 : page
}
export default defineComponent({
  name: 'BPagination',
  props: {
    align: {type: String, default: 'left'},
    disabled: {type: Boolean, default: false},
    ellipsisClass: {type: Array, default: () => []},
    ellipsisText: {type: String, default: '\u2026'},
    firstNumber: {type: Boolean, default: false},
    firstText: {type: String, default: '\u00AB'},
    hideEllipsis: {type: Boolean, default: false},
    hideGotoEndButtons: {type: Boolean, default: false},
    labelFirstPage: {type: String, default: 'Go to first page'},
    labelLastPage: {type: String, default: 'Go to last page'},
    labelNextPage: {type: String, default: 'Go to next page'},
    labelPrevPage: {type: String, default: 'Go to previous page'},
    lastNumber: {type: Boolean, default: false},
    lastText: {type: String, default: '\u00BB'},
    limit: {type: Number, default: DEFAULT_LIMIT},
    modelValue: {type: Number, default: 1}, // V-model prop
    nextText: {type: String, default: '\u203A'},
    perPage: {type: Number, default: DEFAULT_PER_PAGE},
    prevText: {type: String, default: '\u2039'},
    totalRows: {type: Number, default: DEFAULT_TOTAL_ROWS},
  },
  emits: ['update:modelValue'],
  setup(props, {emit, slots}) {
    // Use Active to on page-item to denote active tab
    const numberOfPages = computed(() =>
      Math.ceil(sanitizeTotalRows(props.totalRows) / sanitizePerPage(props.perPage))
    )

    const element = ref<HTMLElement>()

    const startNumber = computed(() => {
      let lStartNumber = 1
      const pagesLeft: number = numberOfPages.value - props.modelValue

      if (pagesLeft + 2 < props.limit && props.limit > ELLIPSIS_THRESHOLD) {
        // End of Pagination
        lStartNumber = numberOfPages.value - numberOfLinks.value + 1
      } else {
        // Middle and beginnig calculation.
        lStartNumber = props.modelValue - Math.floor(numberOfLinks.value / 2)
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
      const lastPageNumber = lStartNumber + numberOfLinks.value - 1

      // Special handling for lower limits (where ellipsis are never shown)
      if (props.limit <= ELLIPSIS_THRESHOLD) {
        if (props.lastNumber && numberOfPages.value === lStartNumber + numberOfLinks.value - 1) {
          lStartNumber = Math.max(lStartNumber - 1, 1)
        }
      }
      return lStartNumber
    })

    const showFirstDots = computed(() => {
      const pagesLeft = numberOfPages.value - props.modelValue
      let rShowDots = false

      if (pagesLeft + 2 < props.limit && props.limit > ELLIPSIS_THRESHOLD) {
        if (props.limit > ELLIPSIS_THRESHOLD) {
          rShowDots = true
        }
      } else {
        if (props.limit > ELLIPSIS_THRESHOLD) {
          rShowDots = !!(!props.hideEllipsis || props.firstNumber)
        }
      }
      if (startNumber.value <= 1) {
        rShowDots = false
      }

      if (rShowDots && props.firstNumber && startNumber.value < 4) {
        rShowDots = false
      }

      return rShowDots
    })
    //Calculate the number of links considering limit
    const numberOfLinks = computed(() => {
      let n: number = props.limit

      if (numberOfPages.value <= props.limit) {
        n = numberOfPages.value
      } else if (props.modelValue < props.limit - 1 && props.limit > ELLIPSIS_THRESHOLD) {
        if (!props.hideEllipsis || props.lastNumber) {
          n = props.limit - (props.firstNumber ? 0 : 1)
        }
        n = Math.min(n, props.limit)
      } else if (
        numberOfPages.value - props.modelValue + 2 < props.limit &&
        props.limit > ELLIPSIS_THRESHOLD
      ) {
        if (!props.hideEllipsis || props.firstNumber) {
          n = props.limit - (props.lastNumber ? 0 : 1)
        }
      } else {
        // We consider ellipsis tabs as their own page links
        if (props.limit > ELLIPSIS_THRESHOLD) {
          n = props.limit - (props.hideEllipsis ? 0 : 2)
        }
      }

      return n
    })

    const pageNumberfinal = computed(() => {
      let n: number = unref(numberOfLinks)

      if (showFirstDots.value && props.firstNumber && startNumber.value < 4) {
        n = n + 2
      }
      const lastPageNumber = startNumber.value + n - 1

      if (showLastDots.value && props.lastNumber && lastPageNumber > numberOfPages.value - 3) {
        n = n + (lastPageNumber === numberOfPages.value - 2 ? 2 : 3)
      }
      n = Math.min(n, numberOfPages.value - startNumber.value + 1)
      return n
    })

    const showLastDots = computed(() => {
      const paginationWindowEnd = numberOfPages.value - numberOfLinks.value // The start of the last window of page links

      let rShowDots = false

      if (props.modelValue < props.limit - 1 && props.limit > ELLIPSIS_THRESHOLD) {
        if (!props.hideEllipsis || props.lastNumber) {
          rShowDots = true
        }
      } else {
        if (props.limit > ELLIPSIS_THRESHOLD) {
          rShowDots = !!(!props.hideEllipsis || props.lastNumber)
        }
      }
      if (startNumber.value > paginationWindowEnd) {
        rShowDots = false
      }
      const lastPageNumber = startNumber.value + numberOfLinks.value - 1

      if (rShowDots && props.lastNumber && lastPageNumber > numberOfPages.value - 3) {
        rShowDots = false
      }

      return rShowDots
    })

    const pagination = reactive<Pagination>({
      pageSize: sanitizePerPage(props.perPage),
      totalRows: sanitizeTotalRows(props.totalRows),
      numberOfPages: numberOfPages.value,
    })

    const pageClick = (event: MouseEvent, pageNumber: number) => {
      if (pageNumber === props.modelValue) {
        return
      }

      emit('update:modelValue', pageNumber)
      //    nextTick(() => {
      //  if (isVisible(target) && un_element.contains(target)) {
      //  attemptFocus(target)
      //} else {
      //this.focusCurrent()
      //}
      // })
    }

    watch(
      () => props.modelValue,
      (newValue: number) => {
        const calculatedValue = sanitizeCurrentPage(newValue, numberOfPages.value)
        if (calculatedValue !== props.modelValue) emit('update:modelValue', calculatedValue)
      }
    )
    watch(pagination, (oldValue, newValue) => {
      if (!isUndefinedOrNull(oldValue)) {
        if (newValue.pageSize !== oldValue.pageSize && newValue.totalRows === oldValue.totalRows) {
          // If the page size changes, reset to page 1
          emit('update:modelValue', 1)
        } else if (
          newValue.numberOfPages !== oldValue.numberOfPages &&
          props.modelValue > newValue.numberOfPages
        ) {
          // If `numberOfPages` changes and is less than
          // the `currentPage` number, reset to page 1
          emit('update:modelValue', 1)
        }
      }
    })

    //Render Helper Functions
    const pages = computed(() =>
      Array.apply(null, {length: numberOfLinks.value}).map((_, i) => ({
        number: startNumber.value + i,
        classes: null,
      }))
    )

    return {
      pageClick,
      pages,
      numberOfPages,
      numberOfLinks,
      startNumber,
      showLastDots,
      pagenumberfinal: pageNumberfinal,
      showFirstDots,
    }
  },
  computed: {},
  render() {
    const props = this.$props
    const buttons = []
    const pageNumbers = this.pages.map((p) => p.number) // array of numbers.. Used in first and last number comparisions
    const isActivePage = (pageNumber: number) => pageNumber === props.modelValue
    const noCurrentPage: boolean = props.modelValue < 1
    const fill = this.align === 'fill'

    const makeEndBtn = (
      linkTo: number,
      ariaLabel: string,
      btnSlot: string,
      btnText: string,
      pageTest: number
    ) => {
      const isDisabled: boolean =
        props.disabled ||
        isActivePage(pageTest) ||
        noCurrentPage ||
        linkTo < 1 ||
        linkTo > this.numberOfPages
      const pageNumber: number =
        linkTo < 1 ? 1 : linkTo > this.numberOfPages ? this.numberOfPages : linkTo
      const scope = {disabled: isDisabled, page: pageNumber, index: pageNumber - 1}
      const btnContent = normalizeSlot(btnSlot, scope, this.$slots) || btnText || ''

      return h(
        'li',
        {
          class: ['page-item', {disabled: isDisabled}],
        },
        // render inner content
        h(
          isDisabled ? 'span' : 'button',
          {
            class: ['page-link'],
            onClick: (event: MouseEvent) => {
              if (isDisabled) {
                return
              }
              this.pageClick(event, pageNumber)
            },
          },
          btnContent
        )
      )
    }
    const makeEllipsis = (isLast: boolean) => {
      const props = this.$props
      const SLOT_NAME_ELLIPSIS_TEXT = 'ellipsis-text'
      return h(
        'li',
        {
          class: [
            'page-item',
            'disabled',
            'bv-d-xs-down-none',
            fill ? 'flex-fill' : '',
            this.ellipsisClass,
          ],
          role: 'separator',
          key: `ellipsis-${isLast ? 'last' : 'first'}`,
        },
        [
          h(
            'span',
            {class: ['page-link']},
            // this.$slots['ellipsis-text']() || toString(this.ellipsisText)
            normalizeSlot(SLOT_NAME_ELLIPSIS_TEXT, {}, this.$slots) || props.ellipsisText || '...'
          ),
        ]
      )
    }

    const makePageButton = (page, idx: number) => {
      const active: boolean = isActivePage(page.number)
      const buttonContent: string = page.number
      const tabIndex = this.disabled ? null : active || (noCurrentPage && idx === 0) ? '0' : '-1'

      const inner = h(
        this.disabled ? 'span' : 'button',
        {
          class: ['page-link', {'flex-grow-1': !this.disabled && fill}],
          onClick: (event: MouseEvent) => {
            this.pageClick(event, page.number)
          },
        },
        page.number
      )

      return h(
        'li',
        {
          class: [
            'page-item',
            {
              'disabled': this.disabled,
              active,
              'flex-fill': fill,
              'd-flex': fill && !this.disabled,
            },
            // page.classes,
            // this.pageClass
          ],
          key: `page-${page.number}`,
        },
        inner
      )
    }

    // Goto first page button. Don't render button when `hideGotoEndButtons` or `firstNumber` is set
    if (!props.hideGotoEndButtons && !props.firstNumber) {
      const gotoFirstPageButton = makeEndBtn(
        1,
        props.labelFirstPage,
        'first-text',
        props.firstText,
        1
      )
      buttons.push(gotoFirstPageButton)
    }

    //Previous Button
    const previousButton = makeEndBtn(
      props.modelValue - 1,
      props.labelFirstPage,
      'prev-text',
      props.prevText,
      1
    )
    buttons.push(previousButton)

    // First Page Number Button
    if (this.firstNumber && pageNumbers[0] !== 1) {
      buttons.push(makePageButton({number: 1}, 0))
    }

    // first Ellipsis
    if (this.showFirstDots) {
      buttons.push(makeEllipsis(false))
    }

    this.pages.forEach((page) => {
      const active: boolean = isActivePage(page.number)

      const button = h(
        'li',
        {
          'class': ['page-item', {active}],
          'aria-current': active ? 'page' : null,
        },
        h(
          'button',
          {
            class: ['page-link'],
            //ref : element,
            onClick: (event: MouseEvent) => {
              this.pageClick(event, page.number)
            },
          },
          page.number
        )
      )
      buttons.push(button)
    })

    //Next Button
    const nextButton = makeEndBtn(
      props.modelValue + 1,
      props.labelNextPage,
      'next-text',
      props.nextText,
      this.numberOfPages
    )

    // last Ellipsis
    if (this.showLastDots) {
      buttons.push(makeEllipsis(true))
    }

    if (this.lastNumber && pageNumbers[pageNumbers.length - 1] !== this.numberOfPages) {
      buttons.push(makePageButton({number: this.numberOfPages}, -1))
    }
    buttons.push(nextButton)

    if (!props.lastNumber && !props.hideGotoEndButtons) {
      const gotoLastPageButton = makeEndBtn(
        this.numberOfPages,
        props.labelLastPage,
        'last-text',
        props.lastText,
        this.numberOfPages
      )
      buttons.push(gotoLastPageButton)
    }

    return h('nav', {}, h('ul', {class: 'pagination'}, buttons))
  },
})
</script>
