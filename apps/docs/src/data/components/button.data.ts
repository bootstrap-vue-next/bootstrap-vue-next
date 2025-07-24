import type {
  BButtonEmits,
  BButtonSlots,
  BCloseButtonEmits,
  BvnComponentProps,
} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitReference,
  type PropertyReference,
  type SlotsReference,
  StyleKind,
} from '../../types'
import {pick} from '../../utils/objectUtils'
import {linkProps, linkTo} from '../../utils/linkProps'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BButton: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn'},
      sourcePath: '/BButton/BButton.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ...pick(
            buildCommonProps({
              variant: {
                default: 'secondary',
              },
            }),
            ['size', 'tag', 'variant']
          ),
          loading: {
            type: 'boolean',
            default: false, // TODO item not in string format
            description: 'When set to `true`, renders the button in loading state',
          },
          loadingFill: {
            type: 'boolean',
            default: false, // TODO item not in string format
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
            default: false, // TODO item not in string format
            description: "Renders the button with the pill style appearance when set to 'true'", // TODO similar content to BBadge/pill (similar description for pill styling)
          },
          pressed: {
            type: 'boolean',
            default: undefined,
            description:
              "When set to 'true', gives the button the appearance of being pressed and adds attribute 'aria-pressed=\"true\"'. When set to `false` adds attribute 'aria-pressed=\"false\"'. Tri-state prop. Syncable with the .sync modifier",
          },
          squared: {
            type: 'boolean',
            default: false, // TODO item not in string format
            description: "Renders the button with non-rounded corners when set to 'true'",
          },
          type: {
            type: 'ButtonType',
            default: 'button',
            description:
              "The value to set the button's 'type' attribute to. Can be one of 'button', 'submit', or 'reset'", // TODO similar content to BCloseButton/type (identical description)
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BButton'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': {
          _opts: {
            linkTo,
          },
          _data: pick(linkProps, [
            'activeClass',
            'exactActiveClass',
            'replace',
            'routerComponentName',
            'routerTag',
          ]),
        },
      },
      emits: {
        'click': {
          description: 'On click event',
          args: {
            click: {
              description: '', // TODO missing description
              type: 'MouseEvent',
            },
          },
        },
        'update:pressed': {
          description: 'Emitted when the `pressed` prop is changed',
          args: {
            value: {
              type: 'boolean',
              description: 'The new value of the `pressed` prop',
            },
          },
        },
      } satisfies Record<keyof BButtonEmits | 'update:pressed', EmitReference>,
      slots: {
        'default': {
          description: 'Content to place in the button',
        },
        'loading': {
          description: 'The content to replace the default loader',
        },
        'loading-spinner': {
          description: 'The content to replace the default loading spinner',
        },
      } satisfies Record<keyof BButtonSlots, SlotsReference>,
    },
    BCloseButton: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.btn-close'},
      sourcePath: '/BButton/BCloseButton.vue',
      props: {
        ...pick(
          buildCommonProps({
            ariaLabel: {
              default: 'Close',
            },
          }),
          ['ariaLabel', 'disabled']
        ),
        type: {
          type: 'ButtonType',
          default: 'button',
          description:
            "The value to set the button's 'type' attribute to. Can be one of 'button', 'submit', or 'reset'", // TODO similar content to BButton/type (identical description)
        },
      } satisfies Record<keyof BvnComponentProps['BCloseButton'], PropertyReference>,
      emits: {
        click: {
          description: 'Emitted when non-disabled button clicked',
          args: {
            click: {
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          },
        },
      } satisfies Record<keyof BCloseButtonEmits, EmitReference>,
    },
  }),
}
