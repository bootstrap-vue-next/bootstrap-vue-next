import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BNav',
      props: {
        '': {
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
          },
          cardHeader: {
            type: 'boolean',
            default: false,
          },
          fill: {
            type: 'boolean',
            default: false,
          },
          justified: {
            type: 'boolean',
            default: false,
          },
          pills: {
            type: 'boolean',
            default: false,
          },
          small: {
            type: 'boolean',
            default: false,
          },
          tabs: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'ul',
          },
          underline: {
            type: 'boolean',
            default: false,
          },
          vertical: {
            type: 'boolean',
            default: false,
          },
        },
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BNavForm',
      props: {
        '': {
          floating: {
            type: 'boolean',
            default: undefined,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          noValidate: {
            type: 'boolean',
            default: undefined,
          },
          role: {
            type: 'string',
            default: undefined,
          },
          validated: {
            type: 'boolean',
            default: undefined,
          },
        },
      },
      emits: [
        {
          args: [
            {
              arg: 'submit',
              description: '',
              type: 'Event',
            },
          ],
          description: '',
          event: 'submit',
        },
      ],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BNavItem',
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
          linkAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
          },
          linkClass: {
            type: 'ClassValue',
            default: undefined,
          },
          opacity: {
            type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          opacityHover: {
            type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
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
            type: "1 | 2 | 3 | '1' | '2' | '3'",
            default: undefined,
          },
          underlineOffsetHover: {
            type: "1 | 2 | 3 | '1' | '2' | '3'",
            default: undefined,
          },
          underlineOpacity: {
            type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          underlineOpacityHover: {
            type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
            default: undefined,
          },
          underlineVariant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
          variant: {
            type: 'ColorVariant | null',
            default: undefined,
          },
        },
      },
      emits: [
        {
          event: 'click',
          description: '',
          args: [
            {
              arg: 'click',
              description: 'On click event',
              type: 'MouseEvent',
            },
          ],
        },
      ],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BNavItemDropdown',
      props: {
        '': {
          autoClose: {
            type: "boolean | 'inside' | 'outside'",
            default: true,
          },
          boundary: {
            type: 'Boundary | RootBoundary',
            default: 'clippingAncestors',
          },
          boundaryPadding: {
            type: 'Padding',
            default: undefined,
          },
          center: {
            type: 'boolean',
            default: false,
          },
          dropend: {
            type: 'boolean',
            default: false,
          },
          dropstart: {
            type: 'boolean',
            default: false,
          },
          dropup: {
            type: 'boolean',
            default: false,
          },
          end: {
            type: 'boolean',
            default: false,
          },
          floatingMiddleware: {
            type: 'Middleware[]',
            default: undefined,
          },
          isNav: {
            type: 'boolean',
            default: true,
          },
          lazy: {
            type: 'boolean',
            default: false,
          },
          menuClass: {
            type: 'ClassValue',
            default: undefined,
          },
          modelValue: {
            type: 'boolean',
            default: false,
          },
          noCaret: {
            type: 'boolean',
            default: false,
          },
          noFlip: {
            type: 'boolean',
            default: false,
          },
          noShift: {
            type: 'boolean',
            default: false,
          },
          noSize: {
            type: 'boolean',
            default: false,
          },
          offset: {
            type: 'number | string | {mainAxis?: number | string; crossAxis?: number; alignmentAxis?: number | null}',
            default: 0,
          },
          skipWrapper: {
            type: 'boolean',
          },
          split: {
            type: 'boolean',
            default: false,
          },
          splitButtonType: {
            type: 'ButtonType',
            default: 'button',
          },
          splitClass: {
            type: 'ClassValue',
            default: undefined,
          },
          splitDisabled: {
            type: 'boolean',
            default: undefined,
          },
          splitHref: {
            type: 'string',
            default: undefined,
          },
          splitTo: {
            type: 'RouteLocationRaw',
            default: undefined,
          },
          splitVariant: {
            type: 'ButtonVariant | null',
            default: undefined,
          },
          strategy: {
            type: 'Strategy',
            default: 'absolute',
          },
          teleportDisabled: {
            type: 'boolean',
            default: false,
          },
          teleportTo: {
            type: 'string | RendererElement | null | undefined',
            default: undefined,
          },
          text: {
            type: 'string',
            default: undefined,
          },
          toggleClass: {
            type: 'ClassValue',
            default: undefined,
          },
          toggleText: {
            type: 'string',
            default: 'Toggle dropdown',
          },
          variant: {
            type: 'ButtonVariant | null',
            default: 'link',
          },
          wrapperClass: {
            type: 'ClassValue',
          },
          ...pick(buildCommonProps(), ['ariaLabel', 'disabled', 'id', 'size', 'role']),
        },
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              description: "The new value of the dropdown's state",
              type: 'boolean',
            },
          ],
          description: 'Emitted when the dropdown state changes',
        },
        {
          event: 'show',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
        },
        {
          event: 'shown',
          args: [],
          description: '',
        },
        {
          event: 'hide',
          args: [
            {
              arg: 'value',
              description: '',
              type: 'BvTriggerableEvent',
            },
          ],
          description: '',
        },
        {
          event: 'hidden',
          args: [],
          description: '',
        },
        {
          event: 'hide-prevented',
          args: [],
          description: 'Emitted when the dropdown tried to close, but was prevented from doing so.',
        },
        {
          event: 'show-prevented',
          args: [],
          description: 'Emitted when the dropdown tried to open, but was prevented from doing so.',
        },
        {
          event: 'toggle',
          args: [],
          description: '',
        },
        {
          event: 'click',
          description: '',
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
        },
      ],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
        {
          description: '',
          name: 'button-content',
          scope: [],
        },
        {
          description: '',
          name: 'toggle-text',
          scope: [
            {
              prop: 'hide',
              type: '() => void',
            },
            {
              prop: 'show',
              type: '() => void',
            },
          ],
        },
      ],
    },
    {
      component: 'BNavText',
      props: {
        '': {
          text: {
            description: '',
            type: 'string',
            default: undefined,
          },
        },
      },
      emits: [],
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
