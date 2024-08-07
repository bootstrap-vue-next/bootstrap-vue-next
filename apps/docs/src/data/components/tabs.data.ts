import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTab',
      props: {
        '': {
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
          id: {
            type: 'string',
            default: undefined,
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
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'div',
          },
          title: {
            type: 'string',
            default: undefined,
          },
          titleItemClass: {
            type: 'ClassValue',
            default: undefined,
          },
          titleLinkAttributes: {
            type: 'AttrsValue',
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
        {
          name: 'title',
          description: '',
          scope: [],
        },
      ],
    },
    {
      component: 'BTabs',
      props: {
        '': {
          activeId: {
            type: 'string',
            default: undefined,
          },
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
          card: {
            type: 'boolean',
            default: false,
          },
          contentClass: {
            type: 'ClassValue',
            default: undefined,
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
          modelValue: {
            type: 'number',
            default: -1,
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
          tabClass: {
            type: 'ClassValue',
            default: undefined,
          },
          vertical: {
            type: 'boolean',
            default: false,
          },
        },
      },
      emits: [
        {
          args: [
            {
              arg: 'update:model-value',
              description: '',
              type: 'number',
            },
          ],
          description: '',
          event: 'update:model-value',
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
