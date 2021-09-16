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

const sanitizePerPage: number = (value) => Math.max(toInteger(value) || DEFAULT_PER_PAGE, 1)
const sanitizeTotalRows: number = (value) => Math.max(toInteger(value) || DEFAULT_TOTAL_ROWS, 0)

export default defineComponent({
  name: 'BPagination',
  props: {
    currentPage: {type: Number, default: 1}, // V-model prop
    perPage: {type: Number, default: DEFAULT_PER_PAGE},
    totalRows: {type: Number, default: DEFAULT_TOTAL_ROWS},
    limit: {type: Number, default: DEFAULT_LIMIT},
  },
  emits: ['update:modelValue', 'update:current-page'],
  setup(props, {emit, slots}) {
    // Use Active to on page-item to denote active tab
    const numberOfPages = computed(() =>
      Math.ceil(sanitizeTotalRows(props.totalRows) / sanitizePerPage(props.perPage))
    )

    const currentPage = toRef(props, 'currentPage')

    const pLimit = toRef(props, 'limit')

    const element = ref<HTMLElement>()

    const startNumber = ref(1)

    //Calculate the number of links considering limit
    const numberOfLinks = computed(() => {
      const limit = unref(pLimit)
      const numberofPages = unref(numberOfPages)

      let n: number = limit

      if (numberOfPages.value <= limit) {
        n = numberOfPages
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

    return {pageClick, pages, numberOfPages, numberOfLinks}
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
