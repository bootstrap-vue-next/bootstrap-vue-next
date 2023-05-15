import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BFormSelect',
      props: [
        {
          prop: 'ariaInvalid',
          type: 'AriaInvalid',
        },
        {
          prop: 'autofocus',
          type: 'Booleanish',
        },
        {
          prop: 'disabled',
          type: 'Booleanish',
        },
        {
          prop: 'disabledField',
          type: 'string',
        },
        {
          prop: 'form',
          type: 'string',
        },
        {
          prop: 'htmlField',
          type: 'string',
        },
        {
          prop: 'id',
          type: 'string',
        },
        {
          prop: 'labelField',
          type: 'string',
        },
        {
          prop: 'multiple',
          type: 'Booleanish',
        },
        {
          prop: 'name',
          type: 'string',
        },
        {
          prop: 'options',
          type: 'unknown[] | Record<string, unknown>',
        },
        {
          prop: 'optionsField',
          type: 'string',
        },
        {
          prop: 'plain',
          type: 'Booleanish',
        },
        {
          prop: 'required',
          type: 'Booleanish',
        },
        {
          prop: 'selectSize',
          type: 'number',
        },
        {
          prop: 'size',
          type: 'Size',
        },
        {
          prop: 'state',
          type: 'Booleanish',
        },
        {
          prop: 'textField',
          type: 'string',
        },
        {
          prop: 'valueField',
          type: 'string',
        },
        {
          prop: 'modelValue',
          type: 'string | unknown[] | Record<string, unknown> | number',
        },
      ],
      emits: [
        {
          args: [
            {
              arg: 'input',
              description: '',
              type: 'unknown',
            },
          ],
          description: '',
          event: 'input',
        },
        {
          args: [
            {
              arg: 'update:modelValue',
              description: '',
              type: 'unknown',
            },
          ],
          description: '',
          event: 'update:modelValue',
        },
        {
          args: [
            {
              arg: 'change',
              description: '',
              type: 'unknown',
            },
          ],
          description: '',
          event: 'change',
        },
      ],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
        {
          description: '',
          name: 'first',
          scope: [],
        },
      ],
    },
    {
      component: 'BFormSelectOption',
      emits: [],
      props: [
        {
          description: '',
          prop: 'value',
          type: 'unknown',
        },
        {
          description: '',
          prop: 'disabled',
          type: 'Booleanish',
        },
      ],
      slots: [
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BFormSelectOptionGroup',
      props: [
        {
          prop: 'label',
          type: 'string',
        },
        {
          prop: 'disabledField',
          type: 'string',
        },
        {
          prop: 'htmlField',
          type: 'string',
        },
        {
          prop: 'options',
          type: 'unknown[] | Record<string, unknown>',
        },
        {
          prop: 'textField',
          type: 'string',
        },
        {
          prop: 'valueField',
          type: 'string',
        },
      ],
      emits: [],
      slots: [
        {
          description: '',
          name: 'first',
          scope: [],
        },
        {
          description: '',
          name: 'default',
          scope: [],
        },
      ],
    },
  ],
}
