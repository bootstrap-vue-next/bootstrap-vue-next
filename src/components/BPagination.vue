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
    lastNumber: {type: Boolean, default: false},
    hideEllipsis: {type: Boolean, default: false},
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
    const pfirstNumber = toRef(props, 'pfirstNumber')
    const pLastNumber = toRef(props, 'pfirstNumber')

    const element = ref<HTMLElement>()

    const startNumber = computed(() => {
      let lStartNumber = 1
      const cLimit: number = unref(pLimit)
      const cNumberOfPages: number = unref(numberOfPages)
      const cNumberOfLinks: number = unref(numberOfLinks)
      const cCurrentPage: number = unref(currentPage)
      const cfirstNumber: boolean = unref(pfirstNumber)
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
      if (showFirstDots.value && lStartNumber && lStartNumber < 4) {
        lStartNumber = 1
      }
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
      const cFirstNumber: boolean = unref(pfirstNumber)
      const pagesLeft: number = cNumberOfPages - cCurrentPage

      let rShowDots: number = false

      if (pagesLeft + 2 < cLimit && cLimit > ELLIPSIS_THRESHOLD) {
        if (!cHideEllipsis || cFirstNumber) {
          rShowDots = true
        }
      } else {
        // We are somewhere in the middle of the page list
        if (cLimit > ELLIPSIS_THRESHOLD) {
          rShowDots = !!(!cHideEllipsis || cFirstNumber)
        }
      }

      if (startNumber.value < 1) {
        rShowDots = false
      }

      if (rShowDots && cFirstNumber && startNumber.value < 4) {
        rShowDots = false
      }

      return rShowDots
    })
    //Calculate the number of links considering limit
    const numberOfLinks = computed(() => {
      const cLimit: number = unref(pLimit)
      const cNumberOfPages: number = unref(numberOfPages)

      let n: number = cLimit

      if (cNumberOfPages <= cLimit) {
        n = cNumberOfPages
      }
      return n
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

    return {pageClick, pages, numberOfPages, numberOfLinks, startNumber}
  },
  computed: {},
  render() {
    const buttons = []
    const isActivePage: boolean = (pageNumber) => pageNumber === this.currentPage
    const noCurrentPage: boolean = this.currentPage < 1

    const makeEndBtn = (linkTo: number, btnText: string, pageTest: number) => {
      const isDisabled: boolean =
        isActivePage(pageTest) || noCurrentPage || linkTo < 1 || linkTo > this.numberOfPages
      const pageNumber: number =
        linkTo < 1 ? 1 : linkTo > this.numberOfPages ? this.numberOfPages : linkTo

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
            onClick: (event) => {
              if (isDisabled) {
                return
              }
              this.pageClick(event, pageNumber)
            },
          },
          btnText
        )
      )
    }
    //Previous Button

    const previousButton = makeEndBtn(this.currentPage - 1, 'Previous', 1)

    buttons.push(previousButton)

    //End Previous Button

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
    const nextButton = makeEndBtn(this.currentPage + 1, 'Next', this.numberOfPages)

    buttons.push(nextButton)

    return h('nav', {}, h('ul', {class: 'pagination'}, buttons))
  },
})
</script>
