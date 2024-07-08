import type {ComponentReference} from '../../types'
import {buildCommonProps, pick} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BForm',
      props: {
        '': {
          floating: {
            type: 'boolean',
            default: false,
            description:
              'When set, renders a single control form with a floating label. This only works for forms where the immediate children are a label and one of the supported controls. See above for details.',
          },
          novalidate: {
            type: 'boolean',
            default: false,
            description:
              'When set, disables browser native HTML5 validation on controls in the form',
          },
          validated: {
            type: 'boolean',
            default: false,
            description:
              "When set, adds the Bootstrap class 'was-validated' on the form, triggering the native browser validation states",
          },
          ...pick(buildCommonProps(), ['id']),
        },
      },
      emits: [
        {
          event: 'submit',
          description: 'Emitted when the form is submitted',
          args: [
            {
              arg: 'submit',
              type: 'Event',
              description: 'Native submit event',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Contet to place in the form',
        },
      ],
    },
    {
      component: 'BFormFloatingLabel',
      props: {
        '': {
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
        },
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'The input control that contains the floating label',
        },
        {
          name: 'label',
          description: 'The content to display in the floating label',
        },
      ],
    },
    {
      component: 'BFormInvalidFeedback',
      props: {
        '': {
          forceShow: {
            type: 'boolean',
            default: false,
            description: "Shows the feedback text, regardless of the value of the 'state' prop",
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'The feedback text to display',
          },
          tooltip: {
            type: 'boolean',
            default: false,
            description: 'Renders the feedback text in a rudimentary tooltip style',
          },
          ...pick(buildCommonProps(), ['ariaLive', 'id', 'role', 'state', 'tag']),
        },
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form invalid feedback',
        },
      ],
    },
    {
      component: 'BFormRow',
      props: {
        '': {
          ...pick(buildCommonProps(), ['tag']),
        },
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form row',
        },
      ],
    },
    {
      component: 'BFormText',
      props: {
        '': {
          inline: {
            type: 'boolean',
            default: false,
            description:
              'When set, renders the help text as an inline element, rather than a block element',
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'The text to display',
          },
          ...pick(buildCommonProps(), ['id', 'tag', 'textVariant']),
        },
      },
      emits: [],
      slots: [
        {
          description: '',
          name: 'Content to place in the form text',
        },
      ],
    },
    {
      component: 'BFormValidFeedback',
      props: {
        '': {
          forceShow: {
            type: 'boolean',
            default: false,
            description: "Shows the feedback text, regardless of the value of the 'state' prop",
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'The feedback text to display',
          },
          tooltip: {
            type: 'boolean',
            default: false,
            description: 'Renders the feedback text in a rudimentary tooltip style',
          },
          ...pick(buildCommonProps(), ['ariaLive', 'id', 'role', 'state', 'tag']),
        },
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the form invalid feedback',
        },
      ],
    },
  ],
}
