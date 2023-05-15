import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTab',
      props: [
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'title',
          type: 'string',
        },
        {
          prop: 'active',
          type: 'Booleanish',
        },
        {
          prop: 'buttonId',
          type: 'string',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
        },
        {
          prop: 'noBody',
          type: 'boolean | string',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'titleItemClass',
          type: 'ClassValue',
        },
        {
          prop: 'titleLinkAttributes',
          type: 'Record<string, unknown>',
        },
        {
          prop: 'titleLinkClass',
          type: 'ClassValue',
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
        },
        {
          prop: 'activeTabClass',
          type: 'ClassValue',
        },
        {
          prop: 'align',
          type: 'AlignmentJustifyContent',
        },
        {
          prop: 'card',
          type: 'Booleanish',
        },
        {
          prop: 'contentClass',
          type: 'ClassValue',
        },
        {
          prop: 'end',
          type: 'Booleanish',
        },
        {
          prop: 'fill',
          type: 'Booleanish',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'justified',
          type: 'Booleanish',
        },
        {
          prop: 'lazy',
          type: 'Booleanish',
        },
        {
          prop: 'navClass',
          type: 'ClassValue',
        },
        {
          prop: 'navWrapperClass',
          type: 'ClassValue',
        },
        {
          prop: 'noFade',
          type: 'Booleanish',
        },
        {
          prop: 'noNavStyle',
          type: 'Booleanish',
        },
        {
          prop: 'pills',
          type: 'Booleanish',
        },
        {
          prop: 'small',
          type: 'Booleanish',
        },
        {
          prop: 'tag',
          type: 'string',
        },
        {
          prop: 'vertical',
          type: 'Booleanish',
        },
        {
          prop: 'modelValue',
          type: 'number',
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
