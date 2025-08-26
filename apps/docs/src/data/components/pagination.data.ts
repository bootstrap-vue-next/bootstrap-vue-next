import type {BPaginationEmits, BPaginationProps, BPaginationSlots} from 'bootstrap-vue-next'
import type {
  ComponentReference,
  EmitRecord,
  PropRecord,
  SlotRecord,
  SlotScopeReference,
} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

const sharedScope: SlotScopeReference = {
  disabled: {
    type: 'Boolean',
    description: 'Will be `true` if this button is disabled (non-clickable)',
  },
  index: {
    type: 'Number',
    description: 'Page number (indexed from `0` to `numberOfPages - 1`)',
  },
  page: {
    type: 'Number',
    description: 'Page number (from `1` to `numberOfPages`)',
  },
} as const

export default {
  load: (): ComponentReference => ({
    BPagination: {
      sourcePath: '/BPagination/BPagination.vue',
      props: {
        ...pick(
          buildCommonProps({
            ariaLabel: {
              default: 'Pagination',
            },
            size: {
              default: undefined,
            },
          }),
          ['ariaControls', 'ariaLabel', 'disabled', 'noEllipsis', 'noGotoEndButtons', 'size']
        ),
        align: {
          type: 'AlignmentJustifyContent | fill',
          description:
            "Alignment of the page buttons: 'start' (or 'left'), 'center', 'end' (or 'right'), or 'fill'",
        },
        ellipsisClass: {
          type: 'ClassValue',
          default: undefined,
          description: "Class(es) to apply to the 'ellipsis' placeholders",
        },
        ellipsisText: {
          type: 'string',
          default: '\u2026',
          description: 'Content to place in the ellipsis placeholder',
        },
        firstClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class(es) to apply to the go-to-first-page button',
        },
        firstNumber: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Display first page number instead of go-to-first-page button',
        },
        firstText: {
          type: 'string',
          default: '\u00AB',
          description: 'Content to place in the go-to-first-page button',
        },
        labelFirstPage: {
          type: 'string',
          default: 'Go to first page',
          description:
            "Value to place in the 'aria-label' attribute of the go-to-first-page button",
        },
        labelLastPage: {
          type: 'string',
          default: 'Go to last page',
          description: "Value to place in the 'aria-label' attribute of the go-to-last-page button",
        },
        labelNextPage: {
          type: 'string',
          default: 'Go to next page',
          description: "Value to place in the 'aria-label' attribute of the go-to-next-page button",
        },
        labelPage: {
          type: 'string',
          default: 'Go to page',
          description:
            "Value to place in the 'aria-label' attribute of the go-to-page button. Page number will be appended automatically",
        },
        labelPrevPage: {
          type: 'string',
          default: 'Go to previous page',
          description:
            "Value to place in the 'aria-label' attribute of the go-to-previous-page button",
        },
        lastClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class(es) to apply to the go-to-last-page button',
        },
        lastNumber: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Display last page number instead of go-to-last-page button',
        },
        lastText: {
          type: 'string',
          default: '\u00BB',
          description: 'Content to place in the go-to-last-page button',
        },
        limit: {
          type: 'Numberish',
          default: 5, // TODO item not in string format
          description:
            'Maximum number of buttons to show (including ellipsis if shown, but excluding the bookend buttons)',
        },
        modelValue: {
          type: 'Numberish',
          default: 1, // TODO item not in string format
          description: 'Current page number, starting from 1',
        },
        nextClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class(es) to apply to the go-to-next-page button',
        },
        nextText: {
          type: 'string',
          default: '\u203A',
          description: 'Content to place in the go-to-next-page button',
        },
        pageClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class(es) to apply to the go-to-page buttons',
        },
        perPage: {
          type: 'Numberish',
          default: 20, // TODO item not in string format
          description: 'Number of rows per page',
        },
        pills: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Applies pill styling to the pagination buttons',
        },
        prevClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class(es) to apply to the go-to-previous-page button',
        },
        prevText: {
          type: 'string',
          default: '\u2039',
          description: 'Content to place in the go-to-previous-page button',
        },
        totalRows: {
          type: 'Numberish',
          default: 0, // TODO item not in string format
          description: 'Total number of rows in the dataset',
        },
      } satisfies PropRecord<keyof BPaginationProps>,
      emits: {
        'update:model-value': {
          description: 'Emitted when page changes via user interaction', // TODO similar content to BAlert/update:model-value (similar purpose)
          args: {
            page: {
              type: 'number',
              description: 'Selected page number (starting with `1`)',
            },
          },
        },
        'page-click': {
          description: 'Emitted when a page button is clicked. Cancelable',
          args: {
            BvEvent: {
              type: 'BvEvent',
              description:
                'The `BvEvent` object. Call `BvEvent.preventDefault()` to cancel page selection',
            },
            page: {
              type: 'number',
              description: 'Page number to select (starting with `1`)',
            },
          },
        },
      } satisfies EmitRecord<keyof BPaginationEmits | 'update:model-value'>,
      slots: {
        'ellipsis-text': {
          scope: {},
          description: "The '...' indicator content. Overrides the `ellipsis-text` prop",
        },
        'first-text': {
          description: 'The go-to-first-page button content',
          scope: sharedScope,
        },
        'last-text': {
          description: 'The go-to-last-page button content',
          scope: sharedScope,
        },
        'next-text': {
          description: 'The go-to-next-page button content',
          scope: sharedScope,
        },
        'page': {
          description: 'Page number button content',
          scope: {
            ...sharedScope,
            active: {
              type: 'Boolean',
              description: 'Whether the page is the active page',
            },
            content: {
              type: 'String',
              description: 'Default button content',
            },
          },
        },
        'prev-text': {
          description: 'The go-to-previous-page button content',
          scope: sharedScope,
        },
      } satisfies SlotRecord<keyof BPaginationSlots>,
    },
  }),
}
