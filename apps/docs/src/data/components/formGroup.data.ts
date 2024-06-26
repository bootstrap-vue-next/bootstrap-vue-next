import type {ComponentReference} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormGroup',
      props: {
        '': {
          contentCols: {
            type: 'boolean | string | number',
          },
          contentColsLg: {
            type: 'boolean | string | number',
          },
          contentColsMd: {
            type: 'boolean | string | number',
          },
          contentColsSm: {
            type: 'boolean | string | number',
          },
          contentColsXl: {
            type: 'boolean | string | number',
          },
          description: {
            type: 'string',
          },
          disabled: {
            type: 'boolean',
          },
          feedbackAriaLive: {
            type: 'string',
          },
          id: {
            type: 'string',
          },
          invalidFeedback: {
            type: 'string',
          },
          label: {
            type: 'string',
          },
          labelAlign: {
            type: 'boolean | string | number',
          },
          labelAlignLg: {
            type: 'boolean | string | number',
          },
          labelAlignMd: {
            type: 'boolean | string | number',
          },
          labelAlignSm: {
            type: 'boolean | string | number',
          },
          labelAlignXl: {
            type: 'boolean | string | number',
          },
          labelClass: {
            type: 'string[] | Record<string, unknown> | string',
          },
          labelCols: {
            type: 'boolean | string | number',
          },
          labelColsLg: {
            type: 'boolean | string | number',
          },
          labelColsMd: {
            type: 'boolean | string | number',
          },
          labelColsSm: {
            type: 'boolean | string | number',
          },
          labelColsXl: {
            type: 'boolean | string | number',
          },
          labelFor: {
            type: 'string',
          },
          labelSize: {
            type: 'string',
          },
          labelSrOnly: {
            type: 'boolean',
          },
          state: {
            type: 'boolean',
          },
          tooltip: {
            type: 'boolean',
          },
          validFeedback: {
            type: 'string',
          },
          validated: {
            type: 'boolean',
          },
          floating: {
            type: 'boolean',
          },
        },
      },
      emits: [],
      slots: [],
    },
  ],
}
