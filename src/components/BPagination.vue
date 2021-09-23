git
<script lang="ts">
import {
  computed,
  defineComponent,
  h,
  nextTick,
  onMounted,
  PropType,
  reactive,
  ref,
  toRef,
  unref,
  watch,
  watchEffect,
} from 'vue'
import {Pagination} from '../types'
import {isUndefinedOrNull} from '../utils/inspect'
import {toInteger} from '../utils/number'
import {attemptFocus, isVisible} from '../utils/dom'

// Default # of buttons limit
const DEFAULT_LIMIT = 5

const DEFAULT_PER_PAGE = 20
const DEFAULT_TOTAL_ROWS = 0

// Threshold of limit size when we start/stop showing ellipsis
const ELLIPSIS_THRESHOLD = 3

const sanitizePerPage: number = (value) => Math.max(toInteger(value) || DEFAULT_PER_PAGE, 1)
const sanitizeTotalRows: number = (value) => Math.max(toInteger(value) || DEFAULT_TOTAL_ROWS, 0)

export default defineComponent({
  name: 'BPagination',
  props: {
    currentPage: {type: Number, default: 1}, // V-model prop
    perPage: {type: Number, default: DEFAULT_PER_PAGE},
    totalRows: {type: Number, default: DEFAULT_TOTAL_ROWS},
    limit: {type: Number, default: DEFAULT_LIMIT},
    firstNumber: {type: Boolean, default: false},
    firstClass: {type: Array, default: () => []},
    nextClass: {type: [Array, String], default: () => []},
    previousClass: {type: [Array, String], default: () => []},
    disabled: {type: Boolean, default: false},
    lastNumber: {type: Boolean, default: false},
    hideEllipsis: {type: Boolean, default: false},
    ellipsisClass: {type: Array, default: () => []},
    ellipsisText: {type: String, default: '\u2026'},
    align: {type: String, default: 'left'},
    labelPrevPage: {type: String, default: 'Go to previous page'},
    labelNextPage: {type: String, default: 'Go to next page'},
  },
  emits: ['update:modelValue', 'update:current-page'],
  setup(props, {emit, slots}) {
    // Use Active to on page-item to denote active tab
    const numberOfPages = computed(() =>
      Math.ceil(sanitizeTotalRows(props.totalRows) / sanitizePerPage(props.perPage))
    )

    const currentPage = toRef(props, 'currentPage')
    const pLimit = toRef(props, 'limit')
    const pHideEllipsis = toRef(props, 'hideEllipsis')
    const pFirstNumber = toRef(props, 'firstNumber')
    const pLastNumber = toRef(props, 'lastNumber')

    const element = ref<HTMLElement>()

    const startNumber = computed(() => {
      let lStartNumber = 1
      const cLimit: number = unref(pLimit)
      const cNumberOfPages: number = unref(numberOfPages)
      const cNumberOfLinks: number = unref(numberOfLinks)
      const cCurrentPage: number = unref(currentPage)
      const cfirstNumber: boolean = unref(pFirstNumber)
      const cLastNumber: boolean = unref(pLastNumber)
      const pagesLeft: number = cNumberOfPages - cCurrentPage

      if (pagesLeft + 2 < cLimit && cLimit > ELLIPSIS_THRESHOLD) {
        // End of Pagination
        lStartNumber = cNumberOfPages - cNumberOfLinks + 1
      } else {
        // Middle and beginnig calculation.
        lStartNumber = cCurrentPage - Math.floor(cNumberOfLinks / 2)
      }
      // Negative due at times
      if (lStartNumber < 1) {
        lStartNumber = 1
      } else if (lStartNumber > cNumberOfPages - cNumberOfLinks) {
        lStartNumber = cNumberOfPages - cNumberOfLinks + 1
      }
      //why check for this?
      // if (showFirstDots.value && cfirstNumber && lStartNumber < 4) {
      //   lStartNumber = 1
      // }
      const lastPageNumber = lStartNumber + cNumberOfLinks - 1

      // Special handling for lower limits (where ellipsis are never shown)
      if (cLimit <= ELLIPSIS_THRESHOLD) {
        if (cLastNumber && cNumberOfPages === lStartNumber + cNumberOfLinks - 1) {
          lStartNumber = Math.max(lStartNumber - 1, 1)
        }
      }
      return lStartNumber
    })

    const showFirstDots = computed(() => {
      const cLimit: number = unref(pLimit)
      const cNumberOfPages: number = unref(numberOfPages)
      const cNumberOfLinks: number = unref(numberOfLinks)
      const cCurrentPage: number = unref(currentPage)
      const cHideEllipsis: boolean = unref(pHideEllipsis)
      const cFirstNumber: boolean = unref(pFirstNumber)
      const pagesLeft: number = cNumberOfPages - cCurrentPage
      let rShowDots: number = false

      if (pagesLeft + 2 < cLimit && cLimit > ELLIPSIS_THRESHOLD) {
        if (cLimit > ELLIPSIS_THRESHOLD) {
          rShowDots = true
        }
      } else {
        if (cLimit > ELLIPSIS_THRESHOLD) {
          rShowDots = !!(!cHideEllipsis || cFirstNumber)
        }
      }
      if (startNumber.value <= 1) {
        rShowDots = false
      }

      if (rShowDots && cFirstNumber && startNumber.value < 4) {
        rShowDots = false
      }

      return rShowDots
    })

    //Calculate the number of links considering the limit
    const numberOfLinks = computed(() => {
      const cLimit: number = unref(pLimit)
      const cNumberOfPages: number = unref(numberOfPages)
      const cHideEllipsis: boolean = unref(pHideEllipsis)
      const cFirstNumber: boolean = unref(pFirstNumber)
      const cLastNumber: boolean = unref(pLastNumber)

      let n: number = cLimit

      if (cNumberOfPages <= cLimit) {
        n = cNumberOfPages
      } else if (currentPage.value < cLimit - 1 && cLimit > ELLIPSIS_THRESHOLD) {
        if (!cHideEllipsis || cLastNumber) {
          n = cLimit - (cFirstNumber ? 0 : 1)
        }
        n = Math.min(n, cLimit)
      } else if (cNumberOfPages - currentPage.value + 2 < cLimit && cLimit > ELLIPSIS_THRESHOLD) {
        if (!cHideEllipsis || cFirstNumber) {
          n = cLimit - (cLastNumber ? 0 : 1)
        }
      } else {
        // We consider ellipsis tabs as their own page links
        if (cLimit > ELLIPSIS_THRESHOLD) {
          n = cLimit - (cHideEllipsis ? 0 : 2)
        }
      }

      return n
    })

    const pagenumberfinal = computed(() => {
      const cLimit: number = unref(pLimit)
      const cNumberOfPages: number = unref(numberOfPages)
      const cHideEllipsis: boolean = unref(pHideEllipsis)
      const cFirstNumber: boolean = unref(pFirstNumber)
      const cLastNumber: boolean = unref(pLastNumber)
      let n: number = unref(numberOfLinks)

      if (showFirstDots.value && cFirstNumber && startNumber.value < 4) {
        n = n + 2
      }
      const lastPageNumber = startNumber.value + n - 1

      if (showLastDots.value && cLastNumber && lastPageNumber > cNumberOfPages - 3) {
        n = n + (lastPageNumber === cNumberOfPages - 2 ? 2 : 3)
      }
      n = Math.min(n, cNumberOfPages - startNumber.value + 1)
      return n
    })

    const showLastDots = computed(() => {
      const cLimit: number = unref(pLimit)
      const cNumberOfPages: number = unref(numberOfPages)
      const cNumberOfLinks: number = unref(numberOfLinks)
      const cCurrentPage: number = unref(currentPage)
      const cHideEllipsis: boolean = unref(pHideEllipsis)
      const cLastNumber: boolean = unref(pLastNumber)
      const cFirstNumber: boolean = unref(pFirstNumber)
      const paginationWindowEnd: number = cNumberOfPages - cNumberOfLinks // The start of the last window of page links

      let rShowDots: number = false

      if (cCurrentPage < cLimit - 1 && cLimit > ELLIPSIS_THRESHOLD) {
        if (!cHideEllipsis || cLastNumber) {
          rShowDots = true
        }
      } else {
        if (cLimit > ELLIPSIS_THRESHOLD) {
          rShowDots = !!(!cHideEllipsis || cLastNumber)
        }
      }
      if (startNumber.value > paginationWindowEnd) {
        rShowDots = false
      }
      const lastPageNumber = startNumber.value + cNumberOfLinks - 1

      if (rShowDots && cLastNumber && lastPageNumber > cNumberOfPages - 3) {
        rShowDots = false
      }

      return rShowDots
    })

    const pagination = reactive<Pagination>({
      perPage: sanitizePerPage(props.perPage),
      totalRows: sanitizeTotalRows(props.totalRows),
      numberOfPages,
    })

    const pageClick = (event: MouseEvent, pageNumber: number) => {
      if (pageNumber === currentPage.value) {
        return
      }

      const {target} = event

      emit('update:current-page', pageNumber)
      //    nextTick(() => {
      //  if (isVisible(target) && un_element.contains(target)) {
      //  attemptFocus(target)
      //} else {
      //this.focusCurrent()
      //}
      // })
    }

    watch(pagination, (oldValue, newValue) => {
      if (!isUndefinedOrNull(oldValue)) {
        if (newValue.perPage !== oldValue.perPage && newValue.totalRows === oldValue.totalRows) {
          // If the page size changes, reset to page 1
          currentPage.value = 1
        } else if (
          newValue.numberOfPages !== oldValue.numberOfPages &&
          currentPage.value > newValue.numberOfPages
        ) {
          // If `numberOfPages` changes and is less than
          // the `currentPage` number, reset to page 1
          currentPage.value = 1
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
      pagenumberfinal,
      showFirstDots,
    }
  },
  computed: {},
  render() {
    // Slot Constants
    const SLOT_NAME_ELLIPSIS_TEXT = 'ellipsis-text'
    const SLOT_NAME_PREV_TEXT = 'prev-text'
    const SLOT_NAME_NEXT_TEXT = 'next-text'

    const buttons = []
    const pageNumbers: [number] = this.pages.map((p) => p.number) // array of numbers.. Used in first and last number comparisions
    const isActivePage: boolean = (pageNumber) => pageNumber === this.currentPage
    const noCurrentPage: boolean = this.currentPage < 1
    const fill = this.align === 'fill'

    //TODO maybe use a slot type for further
    const makeEndBtn = (
      linkTo: number,
      ariaLabel: string,
      btnSlot: string,
      btnText: string,
      btnClass: string | Array,
      pageTest: number
    ) => {
      const isDisabled: boolean =
        isActivePage(pageTest) || noCurrentPage || linkTo < 1 || linkTo > this.numberOfPages
      const pageNumber: number =
        linkTo < 1 ? 1 : linkTo > this.numberOfPages ? this.numberOfPages : linkTo

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
            // 'aria-controls': this.ariaControls || null,
            'aria-disabled': isDisabled ? 'true' : null,
            'onClick': (event) => {
              if (isDisabled) {
                return
              }
              this.pageClick(event, pageNumber)
            },
          },
          this.$slots[btnSlot]?.() || btnText
        )
      )
    }

    const makeEllipsis = (isLast: boolean) => h(
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
            this.$slots[SLOT_NAME_ELLIPSIS_TEXT]?.() || this.ellipsisText
          ),
        ]
      )

    const makePageButton = (page, idx) => {
      const active: boolean = isActivePage(page.number)
      const buttonContent: string = page.number
      const tabIndex = this.disabled ? null : active || (noCurrentPage && idx === 0) ? '0' : '-1'

      const inner = h(
        this.disabled ? 'span' : 'button',
        {
          class: ['page-link', {'flex-grow-1': !this.disabled && fill}],
          onClick: (event) => {
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

    //Previous Button

    const previousButton = makeEndBtn(
      this.currentPage - 1,
      this.labelPrevPage,
      SLOT_NAME_PREV_TEXT,
      'Previous',
      this.previousClass,
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
            onClick: (event) => {
              this.pageClick(event, page.number)
            },
          },
          page.number
        )
      )
      buttons.push(button)
    })

    //Next Button
    console.log(this.nextClass)
    const nextButton = makeEndBtn(
      this.currentPage + 1,
      this.labelNextPage,
      SLOT_NAME_NEXT_TEXT,
      'Next',
      this.nextClass,
      this.numberOfPages
    )

    // last Ellipsis
    if (this.showLastDots) {
      buttons.push(makeEllipsis(true))
    }

    // last number
    if (this.lastNumber && pageNumbers[pageNumbers.length - 1] !== this.numberOfPages) {
      buttons.push(makePageButton({number: this.numberOfPages}, -1))
    }
    buttons.push(nextButton)

    return h('nav', {}, h('ul', {class: 'pagination'}, buttons))
  },
})
</script>
