import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

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
            description: "Class(es) to apply to the 'Go to first page' button",
          },
          firstNumber: {
            type: 'boolean',
            default: false,
            description: 'Display first page number instead of Goto First button',
          },
          firstText: {
            type: 'string',
            default: '\u00AB',
            description: 'Content to place in the goto first page button',
          },
          hideEllipsis: {
            type: 'boolean',
            default: false,
            description: 'Do not show ellipsis buttons',
          },
          hideGotoEndButtons: {
            type: 'boolean',
            default: false,
            description: 'Hides the goto first and goto last page buttons',
          },
          labelFirstPage: {
            type: 'string',
            default: 'Go to first page',
            description:
              "Value to place in the 'aria-label' attribute of the goto first page button",
          },
          labelLastPage: {
            type: 'string',
            default: 'Go to last page',
            description:
              "Value to place in the 'aria-label' attribute of the goto last page button",
          },
          labelNextPage: {
            type: 'string',
            default: 'Go to next page',
            description:
              "Value to place in the 'aria-label' attribute of the goto next page button",
          },
          labelPage: {
            type: 'string',
            default: 'Go to page',
            description:
              "Value to place in the 'aria-label' attribute of the goto page button. Page number will be prepended automatically",
          },
          labelPrevPage: {
            type: 'string',
            default: 'Go to previous page',
            description:
              "Value to place in the 'aria-label' attribute of the goto previous page button",
          },
          lastClass: {
            type: 'ClassValue',
            default: undefined,
            description: "Class(es) to apply to the 'Go to last page' button",
          },
          lastNumber: {
            type: 'boolean',
            default: false,
            description: 'Display last page number instead of Goto Last button',
          },
          lastText: {
            type: 'string',
            default: '\u00BB',
            description: 'Content to place in the goto last page button',
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
            description: "Class(es) to apply to the 'Go to next page' button",
          },
          nextText: {
            type: 'string',
            default: '\u203A',
            description: 'Content to place in the goto next page button',
          },
          pageClass: {
            type: 'ClassValue',
            default: undefined,
            description: "Class(es) to apply to the 'Go to page #' buttons",
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
            description: 'Content to place in the goto previous page button',
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
        },
      },
      emits: [
        {
          event: 'update:modelValue',
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
          description: "The 'Go to first page' button content",
          scope: [
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
          ],
        },
        {
          name: 'last-text',
          description: "The 'Go to last page' button content",
          scope: [
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
          ],
        },
        {
          name: 'next-text',
          description: "The 'Go to next page' button content",
          scope: [
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
          ],
        },
        {
          name: 'page',
          description: 'Page number button content',
          scope: [
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
          ],
        },
        {
          name: 'prev-text',
          description: "The 'Go to previous page' button content",
          scope: [
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
          ],
        },
      ],
    },
  ],
}
