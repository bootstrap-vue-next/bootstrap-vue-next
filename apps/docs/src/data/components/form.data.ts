import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BForm: {
      styleSpec: {kind: StyleKind.Tag, value: 'form'},
      sourcePath: '/BForm/BForm.vue',
      props: pick(buildCommonProps(), [
        'floating',
        'id',
        'novalidate',
        'validated',
      ]) satisfies Record<keyof BvnComponentProps['BForm'], PropertyReference>,
      emits: {
        submit: {
          description: 'Emitted when the form is submitted',
          args: {
            submit: {
              type: 'Event',
              description: 'Native submit event',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Contet to place in the form', // TODO grammar check (typo: "Contet" should be "Content")
        },
      },
    },
    BFormDatalist: {
      styleSpec: {kind: StyleKind.Tag, value: 'datalist'},
      sourcePath: '/BForm/BFormDatalist.vue',
      props: pick(
        buildCommonProps({
          options: {
            type: 'readonly (unknown | Record<string, unknown>)[]',
            description:
              'Array of items to render in the component. Note that BFormDatalist only supports Options, not OptionsGroups',
          },
        }),
        ['disabledField', 'id', 'options', 'textField', 'valueField']
      ) satisfies Record<keyof BvnComponentProps['BFormDatalist'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the from datalist', // TODO grammar check (typo: "from" should be "form")
        },
        first: {
          description: "Slot to place options above options provided via the 'options' prop",
        },
        option: {
          description:
            'Use this slot to have finer control over the content render inside each data item', // TODO grammar check (should say "rendered" instead of "render")
          scope: {
            value: {
              type: 'any (T)',
              description: 'The value of the option',
            },
            text: {
              type: 'string',
              description: 'The text of the option',
            },
            disabled: {
              type: 'boolean',
              description: 'Is the option disabled',
            },
          },
        },
      },
    },
    BFormFloatingLabel: {
      styleSpec: {kind: StyleKind.OverrideClass, value: 'floating-label'},
      sourcePath: '/BForm/BFormFloatingLabel.vue',
      props: {
        label: {
          type: 'string',
          default: undefined,
          description: 'The text of the floating label',
        },
        labelFor: {
          type: 'string',
          default: undefined,
          description: 'The id of the input control that the floating label is for',
        },
      } satisfies Record<keyof BvnComponentProps['BFormFloatingLabel'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'The input control that contains the floating label',
        },
        label: {
          description: 'The content to display in the floating label',
        },
      },
    },
    BFormInvalidFeedback: {
      styleSpec: {kind: StyleKind.OverrideClass, value: 'invalid-feedback, invalid-tooltip'},
      sourcePath: '/BForm/BFormInvalidFeedback.vue',
      props: {
        ...pick(buildCommonProps(), ['ariaLive', 'id', 'role', 'state', 'tag', 'tooltip']),
        forceShow: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: "Shows the feedback text, regardless of the value of the 'state' prop",
        },
        text: {
          type: 'string',
          default: undefined,
          description: 'The feedback text to display',
        },
      } satisfies Record<keyof BvnComponentProps['BFormInvalidFeedback'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the form invalid feedback',
        },
      },
    },
    BFormRow: {
      styleSpec: {kind: StyleKind.OverrideClass, value: 'row'},
      sourcePath: '/BForm/BFormRow.vue',
      props: pick(buildCommonProps(), ['tag']) satisfies Record<
        keyof BvnComponentProps['BFormRow'],
        PropertyReference
      >,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the form row',
        },
      },
    },
    BFormText: {
      sourcePath: '/BForm/BFormText.vue',
      props: {
        ...pick(buildCommonProps(), ['id', 'tag', 'textVariant']),
        inline: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'When set, renders the help text as an inline element, rather than a block element',
        },
        text: {
          type: 'string',
          default: undefined,
          description: 'The text to display',
        },
      } satisfies Record<keyof BvnComponentProps['BFormText'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the form text',
        },
      },
    },
    BFormValidFeedback: {
      styleSpec: {kind: StyleKind.OverrideClass, value: 'valid-feedback, valid-tooltip'},
      sourcePath: '/BForm/BFormValidFeedback.vue',
      props: {
        ...pick(buildCommonProps(), ['ariaLive', 'id', 'role', 'state', 'tag', 'tooltip']),
        forceShow: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: "Shows the feedback text, regardless of the value of the 'state' prop",
        },
        text: {
          type: 'string',
          default: undefined,
          description: 'The feedback text to display',
        },
      } satisfies Record<keyof BvnComponentProps['BFormValidFeedback'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the form invalid feedback', // TODO grammar check (should say "form valid feedback" instead of "form invalid feedback")
        },
      },
    },
  }),
}
