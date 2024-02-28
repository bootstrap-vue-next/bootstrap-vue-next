import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTab',
      props: [
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'title',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'active',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'buttonId',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'disabled',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'lazyOnce',
          type: 'boolean',
          default: undefined,
        },
        {
          prop: 'noBody',
          type: 'boolean | string',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'titleItemClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'titleLinkAttributes',
          type: 'Record<string, unknown>',
          default: undefined,
        },
        {
          prop: 'titleLinkClass',
          type: 'ClassValue',
          default: undefined,
        },
      ],
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
      props: [
        {
          prop: 'activeNavItemClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'activeTabClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'align',
          type: 'AlignmentJustifyContent',
          default: undefined,
        },
        {
          prop: 'contentClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'card',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'end',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'fill',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'id',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'inactiveNavItemClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'inactiveTabClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'justified',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'lazy',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'navClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'navItemClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'navWrapperClass',
          type: 'ClassValue',
          default: undefined,
        },
        {
          prop: 'noFade',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'noNavStyle',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'pills',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'small',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'vertical',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'modelValue',
          type: 'number',
          default: -1,
        },
      ],
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
