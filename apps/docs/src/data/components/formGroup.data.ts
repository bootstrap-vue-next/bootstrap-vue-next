import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormGroup',
      props: [
        {
          prop: 'contentCols',
          type: 'boolean | string | number',
        },
        {
          prop: 'contentColsLg',
          type: 'boolean | string | number',
        },
        {
          prop: 'contentColsMd',
          type: 'boolean | string | number',
        },
        {
          prop: 'contentColsSm',
          type: 'boolean | string | number',
        },
        {
          prop: 'contentColsXl',
          type: 'boolean | string | number',
        },
        {
          prop: 'description',
          type: 'string',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'feedbackAriaLive',
          type: 'string',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'invalidFeedback',
          type: 'string',
        },
        {
          prop: 'label',
          type: 'string',
        },
        {
          prop: 'labelAlign',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelAlignLg',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelAlignMd',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelAlignSm',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelAlignXl',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelClass',
          type: 'string[] | Record<string, unknown> | string',
        },
        {
          prop: 'labelCols',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelColsLg',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelColsMd',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelColsSm',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelColsXl',
          type: 'boolean | string | number',
        },
        {
          prop: 'labelFor',
          type: 'string',
        },
        {
          prop: 'labelSize',
          type: 'string',
        },
        {
          prop: 'labelSrOnly',
          type: 'Booleanish',
        },
        {
          prop: 'state',
          type: 'Booleanish',
        },
        {
          prop: 'tooltip',
          type: 'Booleanish',
        },
        {
          prop: 'validFeedback',
          type: 'string',
        },
        {
          prop: 'validated',
          type: 'Booleanish',
        },
        {
          prop: 'floating',
          type: 'Booleanish',
        },
      ],
      emits: [],
      slots: [],
    },
  ],
}
