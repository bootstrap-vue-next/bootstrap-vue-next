import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormTextarea',
      props: {
        '': {
          autoComplete: {
            type: 'string',
            default: undefined,
          },
          debounce: {
            type: 'Numberish',
            default: 0,
          },
          debounceMaxWait: {
            type: 'Numberish',
            default: 'NaN',
          },
          formatter: {
            type: '(val: string, evt: Event) => string',
            default: undefined,
          },
          lazyFormatter: {
            type: 'boolean',
            default: false,
          },
          list: {
            type: 'string',
            default: undefined,
          },
          modelValue: {
            type: 'Numberish | null',
            default: '""',
          },
          noResize: {
            type: 'boolean',
            default: false,
          },
          rows: {
            type: 'Numberish',
            default: 2,
          },
          wrap: {
            type: 'string',
            default: 'soft',
          },
          ...pick(buildCommonProps(), [
            'ariaInvalid',
            'autofocus',
            'disabled',
            'form',
            'id',
            'name',
            'placeholder',
            'plaintext',
            'readonly',
            'required',
            'size',
            'state',
          ]),
        },
      },
      emits: [
        {
          event: 'update:modelValue',
          args: [],
          description: '',
        },
        {
          event: 'change',
          args: [
            {
              arg: 'change',
              description: '',
              type: 'Event',
            },
          ],
          description: '',
        },
        {
          event: 'blur',
          args: [
            {
              arg: 'blur',
              description: '',
              type: 'FocusEvent',
            },
          ],
          description: '',
        },
        {
          event: 'input',
          description: '',
          args: [
            {
              arg: 'input',
              description: '',
              type: 'Event',
            },
          ],
        },
      ],
      slots: [],
    },
  ],
}
