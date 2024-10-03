import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BDropdown',
      sourcePath: '/BDropdown/BDropdown.vue',
      props: {
        '': {
          autoClose: {
            type: "boolean | 'inside' | 'outside'",
            default: true,
            description:
              'Controls the automatic closing of the dropdown when clicking. See above for details.',
          },
          boundary: {
            type: 'Boundary | RootBoundary',
            default: 'clippingAncestors',
            description:
              "The boundary constraint of dropdown: any value of floating-us's Boundary or RootBoundary type. See above for details.",
          },
          boundaryPadding: {
            type: 'Padding',
            default: undefined,
            description: 'The virtual padding around the boundary to check for overflow',
          },
          center: {
            type: 'boolean',
            default: false,
            description: 'Centers the dropdown on the button',
          },
          dropend: {
            type: 'boolean',
            default: false,
            description:
              'When set, positions the menu to at the end (right for ltr reading) of the button',
          },
          dropstart: {
            type: 'boolean',
            default: false,
            description:
              'When set, positions the menu to at the start (left for ltr reading) of the button.',
          },
          dropup: {
            type: 'boolean',
            default: false,
            description: 'When set, positions the menu on the top of the button',
          },
          end: {
            type: 'boolean',
            default: false,
            description:
              'Aligns the dropdown with the end (right for ltr reading) of the button. Default is start (left for ltr reading)',
          },
          floatingMiddleware: {
            type: 'Middleware[]',
            default: undefined,
            description: 'Directly set the floating-ui middleware behavior. See above for details.',
          },
          isNav: {
            type: 'boolean',
            default: false,
            description: 'Indicates the dropdown is a nav dropdown',
          },
          lazy: {
            type: 'boolean',
            default: false,
            description:
              'When set, will only mount the dropdown content into the DOM when the dropdown is open',
          },
          menuClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the menu container',
          },
          modelValue: {
            type: 'boolean',
            default: false,
            description: 'Controls the visibility of the dropdown',
          },
          noCaret: {
            type: 'boolean',
            default: false,
            description: 'Hide the caret indicator on the toggle button',
          },
          noFlip: {
            type: 'boolean',
            default: false,
            description: 'Prevent the menu from auto flipping positions',
          },
          noShift: {
            type: 'boolean',
            default: false,
            description: 'Prevent the menu from automatically shifting positions',
          },
          noSize: {
            type: 'boolean',
            default: false,
            description: 'Prevent the menu from automatically resizing',
          },
          offset: {
            type: 'number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null',
            default: 0,
            description:
              'Specify the number of pixels to shift the menu by. See above for details.',
          },
          skipWrapper: {
            type: 'boolean',
            default: false,
            description: 'Do not render the dropdown wrapper element',
          },
          split: {
            type: 'boolean',
            default: false,
            description: 'When set, renders a split button dropdown',
          },
          splitButtonType: {
            type: 'ButtonType',
            default: 'button',
            description:
              "Value to place in the 'type' attribute on the split button: 'button', 'submit', 'reset'",
          },
          splitClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the split button',
          },
          splitDisabled: {
            type: 'boolean',
            default: undefined,
            description: 'When set, the split button is disabled',
          },
          splitHref: {
            type: 'string',
            default: undefined,
            description: 'Denotes the target URL of the link for the split button',
          },
          splitTo: {
            type: 'RouteLocationRaw',
            default: undefined,
            description:
              'Denotes the target route of the split button. When clicked, the value of the to prop will be passed to router.push() internally, so the value can be either a string or a Location descriptor object',
          },
          splitVariant: {
            type: 'ButtonVariant | null',
            default: undefined,
            description:
              "Applies one of the Bootstrap theme color variants to the split button. Defaults to the 'variant' prop value",
          },
          strategy: {
            type: 'Strategy',
            default: 'absolute',
            description:
              'The strategy used to determine when to hide the dropdown. See above for details.',
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Text to place in the toggle button, or in the split button is split mode',
          },
          toggleClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) to add to the toggle button',
          },
          toggleText: {
            type: 'string',
            default: 'Toggle dropdown',
            description:
              'ARIA label (sr-only) to set on the toggle when in split mode. Overriden by the slot of the same name',
          },
          wrapperClass: {
            type: 'ClassValue',
            default: undefined,
          },
          teleportDisabled: {
            type: 'boolean',
            default: false,
            description: 'Renders the dropdown in the exact place it was defined',
          },
          teleportTo: {
            type: 'string | RendererElement | null | undefined',
            default: undefined,
            description: 'Overrides the default teleport location',
          },
          ...pick(
            buildCommonProps({
              role: {
                default: 'menu',
              },
              variant: {
                default: 'secondary',
              },
            }),
            ['ariaLabel', 'disabled', 'id', 'role', 'size', 'variant']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdown'], PropertyReference>,
      },
      emits: [
        {
          event: 'hide',
          description: 'Emitted just before dropdown is hidden. Cancelable',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Call value.preventDefault() to cancel hide',
            },
          ],
        },
        {
          event: 'hidden',
          description: 'Called after dropdown is hidden',
        },
        {
          event: 'hide-prevented',
          description: 'Emitted when the dropdown tried to close, but was prevented from doing so.',
        },
        {
          event: 'click',
          description: 'Emitted when button is clicked',
          args: [
            {
              arg: 'event',
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          ],
        },
        {
          event: 'show',
          description: 'Emitted just before dropdown is shown. Cancelable',
          args: [
            {
              arg: 'value',
              type: 'BvTriggerableEvent',
              description: 'Call value.preventDefault() to cancel show',
            },
          ],
        },
        {
          event: 'shown',
          description: 'Called after dropdown is shown',
        },
        {
          event: 'show-prevented',
          description: 'Emitted when the dropdown tried to open, but was prevented from doing so.',
        },
        {
          event: 'split-click',
          description: 'Emitted when split button is clicked in split mode',
          args: [
            {
              arg: 'event',
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          ],
        },
        {
          event: 'toggle',
          description: 'Emitted when toggle button is clicked',
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Optionally scoped default slot for dropdown menu content',
          scope: [
            {
              prop: 'hide',
              type: '() => void',
              description: 'Can be used to close the dropdown',
            },
            {
              prop: 'show',
              type: '() => void',
              description: 'Can be used to open the dropdown',
            },
          ],
        },
        {
          name: 'button-content',
          description: 'Can be used to implement custom text with icons and more styling',
        },
        {
          name: 'toggle-text',
          description:
            'ARIA label (sr-only) to set on the toggle when in split mode. Overrides the toggle-text prop',
        },
      ],
    },
    {
      component: 'BDropdownDivider',
      sourcePath: '/BDropdown/BDropdownDivider.vue',
      emits: [],
      slots: [],
      props: {
        '': {
          tag: {
            description: '',
            type: 'string',
            default: 'hr',
          },
        } satisfies Record<keyof BvnComponentProps['BDropdownDivider'], PropertyReference>,
      },
    },
    {
      component: 'BDropdownForm',
      sourcePath: '/BDropdown/BDropdownForm.vue',
      emits: [],
      props: {} satisfies Record<keyof BvnComponentProps['BDropdownForm'], PropertyReference>,
      slots: [
        {
          scope: [],
          description: '',
          name: 'default',
        },
      ],
    },
    {
      component: 'BDropdownGroup',
      sourcePath: '/BDropdown/BDropdownGroup.vue',
      emits: [],
      props: {
        '': {
          ariaDescribedby: {
            type: 'string',
            default: undefined,
          },
          header: {
            type: 'string',
            default: undefined,
          },
          headerClass: {
            type: 'ClassValue',
            default: undefined,
          },
          headerTag: {
            type: 'string',
            default: 'header',
          },
          headerVariant: {
            type: 'ColorVariant | null',
            default: null,
          },
          id: {
            type: 'string',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BDropdownGroup'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          scope: [],
          name: 'default',
        },
        {
          scope: [],
          description: '',
          name: 'header',
        },
      ],
    },
    {
      component: 'BDropdownHeader',
      sourcePath: '/BDropdown/BDropdownHeader.vue',
      emits: [],
      props: {} satisfies Record<keyof BvnComponentProps['BDropdownHeader'], PropertyReference>,
      slots: [
        {
          scope: [],
          description: '',
          name: 'default',
        },
      ],
    },
    {
      component: 'BDropdownItem',
      sourcePath: '/BDropdown/BDropdownItem.vue',
      emits: [
        {
          event: 'click',
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
          description: '',
        },
      ],
      props: {
        '': {
          active: {
            type: 'boolean',
            default: undefined,
          },
          activeClass: {
            type: 'string',
            default: undefined,
          },
          disabled: {
            type: 'boolean',
            default: undefined,
          },
          exactActiveClass: {
            type: 'string',
            default: undefined,
          },
          href: {
            type: 'string',
            default: undefined,
          },
          icon: {
            type: 'boolean',
            default: undefined,
          },
          linkClass: {
            type: 'ClassValue',
            default: undefined,
          },
          noPrefetch: {
            type: 'boolean',
          },
          noRel: {
            type: 'boolean',
          },
          opacity: {
            type: '10 | 25 | 50 | 75 | 100 | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          opacityHover: {
            type: '10 | 25 | 50 | 75 | 100 | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          prefetch: {
            type: 'boolean',
          },
          prefetchedClass: {
            type: 'ClassValue',
          },
          rel: {
            type: 'string',
            default: undefined,
          },
          replace: {
            type: 'boolean',
            default: undefined,
          },
          routerComponentName: {
            type: 'string',
            default: undefined,
          },
          stretched: {
            type: 'boolean',
            default: false,
          },
          target: {
            type: 'LinkTarget',
            default: undefined,
          },
          to: {
            type: 'RouteLocationRaw',
            default: undefined,
          },
          underlineOffset: {
            type: '1 | 2 | 3 | "1" | "2" | "3"',
            default: undefined,
          },
          underlineOffsetHover: {
            type: '1 | 2 | 3 | "1" | "2" | "3"',
            default: undefined,
          },
          underlineOpacity: {
            type: '0 | 10 | 25 | 50 | 75 | 100 | "0" | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          underlineOpacityHover: {
            type: '0 | 10 | 25 | 50 | 75 | 100 | "0" | "10" | "25" | "50" | "75" | "100"',
            default: undefined,
          },
          underlineVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
          wrapperAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
          },
        } satisfies Record<keyof BvnComponentProps['BDropdownItem'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BDropdownItemButton',
      sourcePath: '/BDropdown/BDropdownItemButton.vue',
      emits: [
        {
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
          description: '',
          event: 'click',
        },
      ],
      props: {
        '': {
          active: {
            type: 'boolean',
            default: false,
          },
          activeClass: {
            type: 'ClassValue',
            default: 'active',
          },
          buttonClass: {
            type: 'ClassValue',
            default: undefined,
          },
          disabled: {
            type: 'boolean',
            default: false,
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
        } satisfies Record<keyof BvnComponentProps['BDropdownItemButton'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BDropdownText',
      sourcePath: '/BDropdown/BDropdownText.vue',
      emits: [],
      props: {
        '': {
          text: {
            description: '',
            type: 'string',
            default: '',
          },
        } satisfies Record<keyof BvnComponentProps['BDropdownText'], PropertyReference>,
      },
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}
