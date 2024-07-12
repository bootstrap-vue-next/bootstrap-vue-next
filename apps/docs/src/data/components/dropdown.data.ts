import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BDropdown',
      props: {
        '': {
          ariaLabel: {
            type: 'string',
            default: undefined,
          },
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
          disabled: {
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
          id: {
            type: 'string',
            default: undefined,
          },
          isNav: {
            type: 'boolean',
            default: false,
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
            type: 'number | string | {mainAxis?: number; crossAxis?: number; alignmentAxis?: number | null',
            default: 0,
          },
          role: {
            type: 'string',
            default: 'menu',
          },
          size: {
            type: 'Size',
            default: 'md',
          },
          skipWrapper: {
            type: 'boolean',
            default: false,
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
            default: 'secondary',
          },
          wrapperClass: {
            type: 'ClassValue',
            default: undefined,
          },
        },
      },
      emits: [
        {
          args: [],
          event: 'show',
          description: '',
        },
        {
          args: [],
          event: 'shown',
          description: '',
        },
        {
          args: [],
          event: 'show-prevented',
          description: '',
        },
        {
          args: [],
          event: 'hide',
          description: '',
        },
        {
          args: [],
          event: 'hidden',
          description: '',
        },
        {
          args: [],
          event: 'hide-prevented',
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
        {
          args: [],
          event: 'toggle',
          description: '',
        },
      ],
      slots: [
        {
          description: '',
          scope: [],
          name: 'button-content',
        },
        {
          description: '',
          scope: [],
          name: 'toggle-text',
        },
        {
          scope: [],
          description: '',
          name: 'default',
        },
      ],
    },
    {
      component: 'BDropdownDivider',
      emits: [],
      slots: [],
      props: {
        '': {
          tag: {
            description: '',
            type: 'string',
            default: 'hr',
          },
        },
      },
    },
    {
      component: 'BDropdownForm',
      emits: [],
      props: {},
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
        },
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
      emits: [],
      props: {},
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
        },
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
        },
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
      emits: [],
      props: {
        '': {
          text: {
            description: '',
            type: 'string',
            default: '',
          },
        },
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
