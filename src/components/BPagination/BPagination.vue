<script lang="ts">
import {normalizeSlot} from '../../utils/normalize-slot'
import {computed, defineComponent, h, PropType, reactive, watch} from 'vue'
import {Alignment, InputSize, Pagination, PaginationPage} from '../../types'
import {isUndefinedOrNull} from '../../utils/inspect'
import {toInteger} from '../../utils/number'
import useAlignment from '../../composables/useAlignment'
import {BvEvent} from '../../utils/bvEvent'
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
    align: {type: String as PropType<Alignment>, default: 'start'},
    ariaControls: {type: String, required: false},
    ariaLabel: {type: String, default: 'Pagination'},
    disabled: {type: Boolean, default: false},
    ellipsisClass: {type: [Array, String], default: () => []},
    ellipsisText: {type: String, default: '\u2026'},
    firstClass: {type: [Array, String], default: () => []},
    firstNumber: {type: Boolean, default: false},
    firstText: {type: String, default: '\u00AB'},
    hideEllipsis: {type: Boolean, default: false},
    hideGotoEndButtons: {type: Boolean, default: false},
    labelFirstPage: {type: String, default: 'Go to first page'},
    labelLastPage: {type: String, default: 'Go to last page'},
    labelNextPage: {type: String, default: 'Go to next page'},
    labelPage: {type: String, default: 'Go to page'},
    labelPrevPage: {type: String, default: 'Go to previous page'},
    lastClass: {type: [Array, String], default: () => []},
    lastNumber: {type: Boolean, default: false},
    lastText: {type: String, default: '\u00BB'},
    limit: {type: Number, default: DEFAULT_LIMIT},
    modelValue: {type: Number, default: 1}, // V-model prop
    nextClass: {type: [Array, String], default: () => []},
    nextText: {type: String, default: '\u203A'},
    pageClass: {type: [Array, String], default: () => []},
    perPage: {type: Number, default: DEFAULT_PER_PAGE},
    pills: {type: Boolean, default: false},
    prevClass: {type: [Array, String], default: () => []},
    prevText: {type: String, default: '\u2039'},
    size: {type: String as PropType<InputSize>, required: false},
    totalRows: {type: Number, default: DEFAULT_TOTAL_ROWS},
  },
  emits: ['update:modelValue', 'page-click'],
  setup(props, {emit}) {
    const alignment = useAlignment(props)

    // Use Active to on page-item to denote active tab
    const numberOfPages = computed(() =>
      Math.ceil(sanitizeTotalRows(props.totalRows) / sanitizePerPage(props.perPage))
    )

    const startNumber = computed(() => {
      let lStartNumber = 1
      const pagesLeft: number = numberOfPages.value - props.modelValue

      if (pagesLeft + 2 < props.limit && props.limit > ELLIPSIS_THRESHOLD) {
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
      let n: number = numberOfLinks.value

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

      const {target} = event
      // Emit a user-cancelable `page-click` event
      const clickEvent = new BvEvent('page-click', {
        cancelable: true,
        vueTarget: this,
        target,
      })
      emit('page-click', clickEvent, pageNumber)
      if (clickEvent.defaultPrevented) {
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

    const btnSize = computed(() => (props.size ? `pagination-${props.size}` : ''))
    const styleClass = computed(() => (props.pills ? 'b-pagination-pills' : ''))

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
    const pages = computed(() => {
      const result = []
      for (let index = 0; index < numberOfLinks.value; index++) {
        result.push({number: startNumber.value + index, classes: null})
      }
      return result
    })

    return {
      alignment,
      btnSize,
      pageClick,
      pages,
      numberOfPages,
      numberOfLinks,
      startNumber,
      showLastDots,
      pagenumberfinal: pageNumberfinal,
      showFirstDots,
      styleClass,
    }
  },
  render() {
    // Slot Constants
    const SLOT_NAME_ELLIPSIS_TEXT = 'ellipsis-text'
    const SLOT_NAME_FIRST_TEXT = 'first-text'
    const SLOT_NAME_LAST_TEXT = 'last-text'
    const SLOT_NAME_NEXT_TEXT = 'next-text'
    const SLOT_NAME_PAGE = 'page'
    const SLOT_NAME_PREV_TEXT = 'prev-text'

    const props = this.$props
    const buttons = []
    const pageNumbers = this.pages.map((p) => p.number) // array of numbers.. Used in first and last number comparisions
    const isActivePage = (pageNumber: number) => pageNumber === props.modelValue
    const noCurrentPage: boolean = props.modelValue < 1
    const fill = props.align === 'fill'

    const makeEndBtn = (
      linkTo: number,
      ariaLabel: string,
      btnSlot: string,
      btnText: string,
      btnClass: string | Array<unknown>,
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
          class: [
            'page-item',
            {
              'disabled': isDisabled,
              'flex-fill': fill,
              'd-flex': fill && !isDisabled,
            },
            btnClass,
          ],
        },
        // render inner content
        h(
          isDisabled ? 'span' : 'button',
          {
            'class': ['page-link', {'flex-grow-1': !isDisabled && fill}],
            'aria-label': ariaLabel,
            'aria-controls': props.ariaControls || null,
            'aria-disabled': isDisabled ? 'true' : null,
            'role': 'menuitem',
            'type': isDisabled ? null : 'button',
            'tabindex': isDisabled ? null : '-1',
            'onClick': (event: MouseEvent) => {
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
            normalizeSlot(SLOT_NAME_ELLIPSIS_TEXT, {}, this.$slots) || props.ellipsisText || '...'
          ),
        ]
      )
    }

    const makePageButton = (page: PaginationPage, idx: number) => {
      const active: boolean = isActivePage(page.number) && !noCurrentPage
      const tabIndex = this.disabled ? null : active || (noCurrentPage && idx === 0) ? '0' : '-1'
      const scope = {
        active,
        disabled: this.disabled,
        page: page.number,
        index: page.number - 1,
        content: page.number,
      }
      const btnContent = normalizeSlot(SLOT_NAME_PAGE, scope, this.$slots) || page.number
      const inner = h(
        this.disabled ? 'span' : 'button',
        {
          'class': ['page-link', {'flex-grow-1': !this.disabled && fill}],
          'aria-controls': props.ariaControls || null,
          'aria-disabled': this.disabled ? 'true' : null,
          'aria-label': props.labelPage ? `${props.labelPage} ${page.number}` : null,
          'role': 'menuitemradio',
          'type': this.disabled ? null : 'button',
          'tabindex': tabIndex,
          'onClick': (event: MouseEvent) => {
            if (!this.disabled) {
              this.pageClick(event, page.number)
            }
          },
        },
        btnContent
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
            props.pageClass,
          ],
          role: 'presentation',
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
        SLOT_NAME_FIRST_TEXT,
        props.firstText,
        props.firstClass,
        1
      )
      buttons.push(gotoFirstPageButton)
    }

    //Previous Button
    const previousButton = makeEndBtn(
      props.modelValue - 1,
      props.labelFirstPage,
      SLOT_NAME_PREV_TEXT,
      props.prevText,
      props.prevClass,
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

    this.pages.forEach((page, idx) => {
      const offset = this.showFirstDots && this.firstNumber && pageNumbers[0] !== 1 ? 1 : 0
      buttons.push(makePageButton(page, idx + offset))
    })

    // last Ellipsis
    if (this.showLastDots) {
      buttons.push(makeEllipsis(true))
    }

    if (this.lastNumber && pageNumbers[pageNumbers.length - 1] !== this.numberOfPages) {
      buttons.push(makePageButton({number: this.numberOfPages}, -1))
    }

    //Next Button
    const nextButton = makeEndBtn(
      props.modelValue + 1,
      props.labelNextPage,
      SLOT_NAME_NEXT_TEXT,
      props.nextText,
      props.nextClass,
      this.numberOfPages
    )
    buttons.push(nextButton)

    // Goto last page button
    if (!props.lastNumber && !props.hideGotoEndButtons) {
      const gotoLastPageButton = makeEndBtn(
        this.numberOfPages,
        props.labelLastPage,
        SLOT_NAME_LAST_TEXT,
        props.lastText,
        props.lastClass,
        this.numberOfPages
      )
      buttons.push(gotoLastPageButton)
    }

    const $pagination = h(
      'ul',
      {
        'class': ['pagination', this.btnSize, this.alignment, this.styleClass],
        'role': 'menubar',
        'aria-disabled': this.disabled,
        'aria-label': this.ariaLabel || null,
      },
      buttons
    )
    return $pagination
  },
})
</script>
