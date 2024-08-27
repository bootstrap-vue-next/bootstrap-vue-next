import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

const sharedScope = [
  {
    prop: 'disabled',
    type: 'Boolean',
    description: 'Will be `true` if this button is disabled (non-clickable)',
  },
  {
    prop: 'index',
    type: 'Number',
    description: 'Page number (indexed from `0` to `numberOfPages - 1`)',
  },
  {
    prop: 'page',
    type: 'Number',
    description: 'Page number (from `1` to `numberOfPages`)',
  },
]

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPagination',
      props: {
        '': {
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
            description: 'Class(es) to apply to the go to first page button',
          },
          firstNumber: {
            type: 'boolean',
            default: false,
            description: 'Display first page number instead of go to first page button',
          },
          firstText: {
            type: 'string',
            default: '\u00AB',
            description: 'Content to place in the go to first page button',
          },
          hideEllipsis: {
            type: 'boolean',
            default: false,
            description: 'Do not show ellipsis buttons',
          },
          hideGotoEndButtons: {
            type: 'boolean',
            default: false,
            description: 'Hides the go to first and go to last page buttons',
          },
          labelFirstPage: {
            type: 'string',
            default: 'Go to first page',
            description:
              "Value to place in the 'aria-label' attribute of the go to first page button",
          },
          labelLastPage: {
            type: 'string',
            default: 'Go to last page',
            description:
              "Value to place in the 'aria-label' attribute of the go to last page button",
          },
          labelNextPage: {
            type: 'string',
            default: 'Go to next page',
            description:
              "Value to place in the 'aria-label' attribute of the go to next page button",
          },
          labelPage: {
            type: 'string',
            default: 'Go to page',
            description:
              "Value to place in the 'aria-label' attribute of the go to page button. Page number will be prepended automatically",
          },
          labelPrevPage: {
            type: 'string',
            default: 'Go to previous page',
            description:
              "Value to place in the 'aria-label' attribute of the go to previous page button",
          },
          lastClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class(es) to apply to the go to last page button',
          },
          lastNumber: {
            type: 'boolean',
            default: false,
            description: 'Display last page number instead of go to Last button',
          },
          lastText: {
            type: 'string',
            default: '\u00BB',
            description: 'Content to place in the go to last page button',
          },
          limit: {
            type: 'Numberish',
            default: 5,
            description:
              'Maximum number of buttons to show (including ellipsis if shown, but excluding the bookend buttons)',
          },
          modelValue: {
            type: 'Numberish',
            default: 1,
            description: 'Current page number, starting from 1',
          },
          nextClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class(es) to apply to the go to next page button',
          },
          nextText: {
            type: 'string',
            default: '\u203A',
            description: 'Content to place in the go to next page button',
          },
          pageClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class(es) to apply to the go to page # buttons',
          },
          perPage: {
            type: 'Numberish',
            default: 20,
            description: 'Number of rows per page',
          },
          pills: {
            type: 'boolean',
            default: false,
            description: 'Applies pill styling to the pagination buttons',
          },
          prevClass: {
            type: 'ClassValue',
            default: undefined,
            description: "Class(es) to apply to the 'Go to previous page' button",
          },
          prevText: {
            type: 'string',
            default: '\u2039',
            description: 'Content to place in the go to previous page button',
          },
          totalRows: {
            type: 'Numberish',
            default: 0,
            description: 'Total number of rows in the dataset',
          },
          ...pick(
            buildCommonProps({
              ariaLabel: {
                default: 'Pagination',
              },
              size: {
                default: undefined,
              },
            }),
            ['ariaControls', 'ariaLabel', 'disabled', 'size']
          ),
        } satisfies Record<keyof BvnComponentProps['BPagination'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          description: 'Emitted when page changes via user interaction',
          args: [
            {
              type: 'number',
              arg: 'page',
              description: 'Selected page number (starting with `1`)',
            },
          ],
        },
        {
          event: 'page-click',
          description: 'Emitted when a page button was clicked. Cancelable',
          args: [
            {
              arg: 'BvEvent',
              type: 'BvEvent',
              description:
                'The `BvEvent` object. Call `BvEvent.preventDefault()` to cancel page selection',
            },
            {
              type: 'number',
              arg: 'page',
              description: 'Page number to select (starting with `1`)',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'ellipsis-text',
          scope: [],
          description: "The '...' indicator content. Overrides the `ellipsis-text` prop",
        },
        {
          name: 'first-text',
          description: 'The go to first page button content',
          scope: sharedScope,
        },
        {
          name: 'last-text',
          description: 'The go to last page button content',
          scope: sharedScope,
        },
        {
          name: 'next-text',
          description: 'The go to next page button content',
          scope: sharedScope,
        },
        {
          name: 'page',
          description: 'Page number button content',
          scope: [
            ...sharedScope,
            {
              prop: 'active',
              type: 'Boolean',
              description: 'If the page is the active page',
            },
            {
              prop: 'content',
              type: 'String',
              description: 'Default button content',
            },
          ],
        },
        {
          name: 'prev-text',
          description: 'The go to previous page button content',
          scope: sharedScope,
        },
      ],
    },
  ],
}
