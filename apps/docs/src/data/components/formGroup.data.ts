import type {ComponentReference} from '../../types'

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
          type: 'boolean',
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
          type: 'boolean',
        },
        {
          prop: 'state',
          type: 'boolean',
        },
        {
          prop: 'tooltip',
          type: 'boolean',
        },
        {
          prop: 'validFeedback',
          type: 'string',
        },
        {
          prop: 'validated',
          type: 'boolean',
        },
        {
          prop: 'floating',
          type: 'boolean',
        },
      ],
      emits: [],
      slots: [],
    },
  ],
}
