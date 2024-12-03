import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BSpinner',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.spinner-*'},
      sourcePath: '/BSpinner/BSpinner.vue',
      props: {
        '': {
          label: {
            type: 'string',
            default: undefined,
          },
          role: {
            type: 'string',
            default: 'status',
          },
          small: {
            type: 'boolean',
            default: false,
          },
          tag: {
            type: 'string',
            default: 'span',
          },
          type: {
            type: 'SpinnerType',
            default: 'border',
          },
          variant: {
            type: 'ColorVariant | null',
            default: null,
          },
        } satisfies Record<keyof BvnComponentProps['BSpinner'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'label',
          scope: [],
        },
      ],
    },
  ],
}
