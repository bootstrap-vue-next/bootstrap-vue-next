import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTab',
      props: {
        '': {
          id: {
            type: 'string',
            default: undefined,
          },
          title: {
            type: 'string',
            default: undefined,
          },
          active: {
            type: 'boolean',
            default: false,
          },
          buttonId: {
            type: 'string',
            default: undefined,
          },
          disabled: {
            type: 'boolean',
            default: false,
          },
          lazy: {
            type: 'boolean',
            default: undefined,
          },
          lazyOnce: {
            type: 'boolean',
            default: undefined,
          },
          noBody: {
            type: 'boolean | string',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          titleItemClass: {
            type: 'ClassValue',
            default: undefined,
          },
          titleLinkAttributes: {
            type: 'Record<string, unknown>',
            default: undefined,
          },
          titleLinkClass: {
            type: 'ClassValue',
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
    {
      component: 'BTabs',
      props: {
        '': {
          activeNavItemClass: {
            type: 'ClassValue',
            default: undefined,
          },
          activeTabClass: {
            type: 'ClassValue',
            default: undefined,
          },
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
          },
          contentClass: {
            type: 'ClassValue',
            default: undefined,
          },
          card: {
            type: 'boolean',
            default: false,
          },
          end: {
            type: 'boolean',
            default: false,
          },
          fill: {
            type: 'boolean',
            default: false,
          },
          id: {
            type: 'string',
            default: undefined,
          },
          inactiveNavItemClass: {
            type: 'ClassValue',
            default: undefined,
          },
          inactiveTabClass: {
            type: 'ClassValue',
            default: undefined,
          },
          justified: {
            type: 'boolean',
            default: false,
          },
          lazy: {
            type: 'boolean',
            default: false,
          },
          navClass: {
            type: 'ClassValue',
            default: undefined,
          },
          navItemClass: {
            type: 'ClassValue',
            default: undefined,
          },
          navWrapperClass: {
            type: 'ClassValue',
            default: undefined,
          },
          noFade: {
            type: 'boolean',
            default: false,
          },
          noNavStyle: {
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
          tag: {
            type: 'string',
            default: 'div',
          },
          vertical: {
            type: 'boolean',
            default: false,
          },
          modelValue: {
            type: 'number',
            default: -1,
          },
        },
      },
      emits: [
        {
          args: [
            {
              arg: 'update:modelValue',
              description: '',
              type: 'number',
            },
          ],
          description: '',
          event: 'update:modelValue',
        },
        {
          args: [
            {
              arg: 'v1',
              description: '',
              type: 'number',
            },
            {
              arg: 'v2',
              description: '',
              type: 'number',
            },
            {
              arg: 'v3',
              description: '',
              type: 'BvEvent',
            },
          ],
          description: '',
          event: 'activate-tab',
        },
        {
          event: 'click',
          description: '',
          args: [],
        },
      ],
      slots: [
        {
          description: '',
          name: 'empty',
          scope: [],
        },
        {
          description: '',
          name: 'tabs-start',
          scope: [],
        },
        {
          description: '',
          name: 'tabs-end',
          scope: [],
        },
        {
          description: '',
          name: 'empty',
          scope: [],
        },
      ],
    },
  ],
}
