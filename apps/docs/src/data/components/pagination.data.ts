import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPagination',
      props: [
        {
          prop: 'align',
          type: 'AlignmentJustifyContent | fill',
          description:
            "Alignment of the page buttons: 'start' (or 'left'), 'center', 'end' (or 'right'), or 'fill'",
        },
        {
          prop: 'ariaLabel',
          type: 'string',
          description: "Value to place in the 'aria-label' attribute of the pagination control",
        },
        {
          prop: 'ariaControls',
          type: 'string',
          description:
            'If this component controls another component or element, set this to the Id of the controlled component or element',
        },
        {
          prop: 'disabled',
          type: 'Boooleanish',
          description:
            "When set to true, disables the component's functionality and places it in a disabled state",
        },
        {
          prop: 'ellipsisClass',
          type: 'string[] | string',
          description: "Class(es) to apply to the 'ellipsis' placeholders",
        },
        {
          prop: 'ellipsisText',
          type: 'string',
          description: 'Content to place in the ellipsis placeholder',
        },
        {
          prop: 'firstClass',
          type: 'string[] | string',
          description: "Class(es) to apply to the 'Go to first page' button",
        },
        {
          prop: 'firstNumber',
          type: 'boolean',
          description: 'Display first page number instead of Goto First button',
        },
        {
          prop: 'firstText',
          type: 'string',
          description: 'Content to place in the goto first page button',
        },
        {
          prop: 'hideEllipsis',
          type: 'boolean',
          description: 'Do not show ellipsis buttons',
        },
        {
          prop: 'hideGotoEndButtons',
          type: 'boolean',
          description: 'Hides the goto first and goto last page buttons',
        },
        {
          prop: 'labelFirstPage',
          type: 'string',
          description: "Value to place in the 'aria-label' attribute of the goto first page button",
        },
        {
          prop: 'labelLastPage',
          type: 'string',
          description: "Value to place in the 'aria-label' attribute of the goto last page button",
        },
        {
          prop: 'labelNextPage',
          type: 'string',
          description: "Value to place in the 'aria-label' attribute of the goto next page button",
        },
        {
          prop: 'labelPage',
          type: 'string',
          description:
            "Value to place in the 'aria-label' attribute of the goto page button. Page number will be prepended automatically",
        },
        {
          prop: 'labelPrevPage',
          type: 'string',
          description:
            "Value to place in the 'aria-label' attribute of the goto previous page button",
        },
        {
          prop: 'lastClass',
          type: 'string[] | string',
          description: "Class(es) to apply to the 'Go to last page' button",
        },
        {
          prop: 'lastNumber',
          type: 'boolean',
          description: 'Display last page number instead of Goto Last button',
        },
        {
          prop: 'lastText',
          type: 'string',
          description: 'Content to place in the goto last page button',
        },
        {
          prop: 'limit',
          type: 'number',
          description:
            'Maximum number of buttons to show (including ellipsis if shown, but excluding the bookend buttons)',
        },
        {
          prop: 'nextClass',
          type: 'string[] | string',
          description: "Class(es) to apply to the 'Go to next page' button",
        },
        {
          prop: 'nextText',
          type: 'string',
          description: 'Content to place in the goto next page button',
        },
        {
          prop: 'pageClass',
          type: 'string[] | string',
          description: "Class(es) to apply to the 'Go to page #' buttons",
        },
        {
          prop: 'perPage',
          type: 'number',
          description: 'Number of rows per page',
        },
        {
          prop: 'pills',
          type: 'boolean',
          description: 'Applies pill styling to the pagination buttons',
        },
        {
          prop: 'prevClass',
          type: 'string[] | string',
          description: "Class(es) to apply to the 'Go to previous page' button",
        },
        {
          prop: 'prevText',
          type: 'string',
          description: 'Content to place in the goto previous page button',
        },
        {
          prop: 'size',
          type: 'Size',
          description: "Size of the rendered buttons: 'sm', 'md' (default), or 'lg'",
        },
        {
          prop: 'totalRows',
          type: 'number',
          description: 'Total number of rows in the dataset',
        },
        {
          prop: 'modelValue',
          type: 'number',
          description: 'Current page number, starting from 1',
        },
      ],
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
