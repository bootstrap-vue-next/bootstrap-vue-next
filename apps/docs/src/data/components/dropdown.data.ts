import type {BvnComponentProps} from 'bootstrap-vue-next'
import type {ComponentReference, PropertyReference} from '../../types'
import {buildCommonProps, omit, pick} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

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
              'ARIA label (visually-hidden) to set on the toggle when in split mode. Overriden by the slot of the same name',
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
            ['ariaLabel', 'disabled', 'id', 'role', 'size', 'variant', 'placement']
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
            'ARIA label (visually-hidden) to set on the toggle when in split mode. Overrides the toggle-text prop',
        },
      ],
    },
    {
      component: 'BDropdownDivider',
      sourcePath: '/BDropdown/BDropdownDivider.vue',
      props: {
        '': {
          dividerClass: {
            default: undefined,
            type: 'ClassValue',
            description: 'CSS class (or classes) to add to the divider component',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'hr',
              },
            }),
            ['tag', 'variant', 'wrapperAttrs']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdownDivider'], PropertyReference>,
      },
    },
    {
      component: 'BDropdownForm',
      sourcePath: '/BDropdown/BDropdownForm.vue',
      props: {
        '': {
          formClass: {
            default: undefined,
            type: 'ClassValue',
            description: 'CSS class (or classes) to add to the form component',
          },
          novalidate: {notYetImplemented: true},
          validated: {notYetImplemented: true},
          ...pick(buildCommonProps({}), ['wrapperAttrs']),
        } satisfies Record<keyof BvnComponentProps['BDropdownForm'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown form',
        },
      ],
    },
    {
      component: 'BDropdownGroup',
      sourcePath: '/BDropdown/BDropdownGroup.vue',
      emits: [],
      props: {
        '': {
          header: {
            type: 'string',
            default: undefined,
          },
          ...pick(
            buildCommonProps({
              headerTag: {
                default: 'header',
              },
            }),
            ['ariaDescribedby', 'headerClass', 'headerTag', 'headerVariant', 'id']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdownGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content (items) to place in the dropdown group',
        },
        {
          name: 'header',
          description: 'Optional header content for the dropdown group',
        },
      ],
    },
    {
      component: 'BDropdownHeader',
      sourcePath: '/BDropdown/BDropdownHeader.vue',
      emits: [],
      props: {
        '': {
          text: {
            default: undefined,
            description: 'Content to place in the dropdown text. Default slot takes precedence',
            type: 'string',
          },
          ...pick(buildCommonProps({}), ['headerClass', 'tag', 'variant', 'wrapperAttrs']),
        } satisfies Record<keyof BvnComponentProps['BDropdownHeader'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown header',
        },
      ],
    },
    {
      component: 'BDropdownItem',
      sourcePath: '/BDropdown/BDropdownItem.vue',
      props: {
        '': {
          ...pick(buildCommonProps({}), ['linkClass', 'wrapperAttrs']),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BDropdownItem'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...omit(linkProps, ['routerTag']),
        },
      },
      emits: [
        {
          event: 'click',
          description: 'Emitted when item is clicked',
          args: [
            {
              arg: 'value',
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown item',
        },
      ],
    },
    {
      component: 'BDropdownItemButton',
      sourcePath: '/BDropdown/BDropdownItemButton.vue',
      props: {
        '': {
          buttonClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'Class or classes to apply to the inner button element',
          },
          ...pick(buildCommonProps({}), [
            'active',
            'activeClass',
            'disabled',
            'variant',
            'wrapperAttrs',
          ]),
        } satisfies Record<keyof BvnComponentProps['BDropdownItemButton'], PropertyReference>,
      },
      emits: [
        {
          event: 'click',
          description: 'Emitted when item is clicked',
          args: [
            {
              arg: 'value',
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown item button',
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
            default: undefined,
            description: 'Content to place in the dropdown text. Default slot takes precedence',
            type: 'string',
          },
          textClass: {
            default: undefined,
            type: 'ClassValue',
            description: 'CSS class (or classes) to add to the text component',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'span',
              },
            }),
            ['tag', 'variant', 'wrapperAttrs']
          ),
        } satisfies Record<keyof BvnComponentProps['BDropdownText'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Content to place in the dropdown text',
        },
      ],
    },
  ],
}
