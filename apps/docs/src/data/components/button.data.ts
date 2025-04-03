import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick} from '../../utils'
import {linkProps, linkTo} from '../../utils/link-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BButton',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn'},
      sourcePath: '/BButton/BButton.vue',
      props: {
        '': {
          loading: {
            type: 'boolean',
            default: false,
            description: 'When set to `true`, renders the button in loading state',
          },
          loadingFill: {
            type: 'boolean',
            default: false,
            description:
              'When set to `true`, fills the button with the loading spinner and ignores `loading-text`',
          },
          loadingText: {
            type: 'string',
            default: 'Loading...',
            description: 'The text to display when the button is in a loading state',
          },
          pill: {
            type: 'boolean',
            default: false,
            description: "Renders the button with the pill style appearance when set to 'true'",
          },
          pressed: {
            type: 'boolean',
            default: undefined,
            description:
              "When set to 'true', gives the button the appearance of being pressed and adds attribute 'aria-pressed=\"true\"'. When set to `false` adds attribute 'aria-pressed=\"false\"'. Tri-state prop. Syncable with the .sync modifier",
          },
          squared: {
            type: 'boolean',
            default: false,
            description: "Renders the button with non-rounded corners when set to 'true'",
          },
          type: {
            type: 'ButtonType',
            default: 'button',
            description:
              "The value to set the button's 'type' attribute to. Can be one of 'button', 'submit', or 'reset'",
          },
          ...pick(
            buildCommonProps({
              variant: {
                default: 'secondary',
              },
            }),
            ['bgVariant', 'size', 'tag', 'textVariant', 'variant']
          ),
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BButton'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _linkTo: {
            type: linkTo,
          },
          ...pick(linkProps, [
            'activeClass',
            'exactActiveClass',
            'replace',
            'routerComponentName',
            'routerTag',
          ]),
        },
      },
      emits: [
        {
          args: [
            {
              arg: 'click',
              description: '',
              type: 'MouseEvent',
            },
          ],
          description: 'On click event',
          event: 'click',
        },
        {
          event: 'update:pressed',
          description: 'Emitted when the `pressed` prop is changed',
          args: [
            {
              arg: 'value',
              type: 'boolean',
              description: 'The new value of the `pressed` prop',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Content to place in the button',
        },
        {
          name: 'loading',
          description: 'The content to replace the default loader',
        },
        {
          name: 'loading-spinner',
          description: 'The content to replace the default loading spinner',
        },
      ],
    },
    {
      component: 'BCloseButton',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn-close'},
      sourcePath: '/BButton/BCloseButton.vue',
      props: {
        '': {
          type: {
            type: 'ButtonType',
            default: 'button',
            description:
              "The value to set the button's 'type' attribute to. Can be one of 'button', 'submit', or 'reset'",
          },
          ...pick(
            buildCommonProps({
              ariaLabel: {
                default: 'Close',
              },
            }),
            ['ariaLabel', 'disabled']
          ),
        } satisfies Record<keyof BvnComponentProps['BCloseButton'], PropertyReference>,
      },
      emits: [
        {
          event: 'click',
          description: 'Emitted when non-disabled button clicked',
          args: [
            {
              arg: 'click',
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          ],
        },
      ],
    },
  ],
}
