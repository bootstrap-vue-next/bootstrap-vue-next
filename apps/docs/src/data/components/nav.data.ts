import type {
  BNavFormEmits,
  BNavFormProps,
  BNavFormSlots,
  BNavItemEmits,
  BNavItemProps,
  BNavItemSlots,
  BNavProps,
  BNavSlots,
  BNavTextProps,
  BNavTextSlots,
} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
  StyleKind,
} from '../../types'
import {linkProps, linkTo} from '../../utils/linkProps'
import {buildCommonProps} from '../../utils/commonProps'
import {omit, pick} from '../../utils/objectUtils'
import {dropdownEmits, dropdownProps, dropdownSlots} from '../../utils/dropdownCommon'

export default {
  load: (): ComponentReference => ({
    BNav: {
      sourcePath: '/BNav/BNav.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'ul',
            },
          }),
          ['tag']
        ),
        align: {
          type: 'AlignmentJustifyContent',
          default: undefined,
          description: 'Aligns the nav items to any value of AlignmentJustifyContent', // TODO grammar check (rephrased for clarity and consistency)
        },
        cardHeader: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Indicates the nav is placed inside a card header', // TODO grammar check (rephrased for clarity)
        },
        fill: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description:
            'Fills all horizontal space with nav items proportionally, with varying widths', // TODO grammar check (rephrased for clarity and brevity)
        },
        justified: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Fills all horizontal space with nav items, each having equal width', // TODO grammar check (rephrased for clarity and brevity)
        },
        pills: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Styles nav items as pill buttons', // TODO grammar check (rephrased for brevity)
        },
        small: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Reduces the nav size', // TODO grammar check (rephrased for brevity)
        },
        tabs: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Styles nav items as tabs', // TODO grammar check (rephrased for brevity)
        },
        underline: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Underlines the active nav item', // TODO grammar check (rephrased for brevity)
        },
        vertical: {
          type: 'boolean',
          default: false, // TODO item not in string format
          description: 'Stacks nav items vertically', // TODO grammar check (rephrased for brevity)
        },
      } satisfies PropRecord<keyof BNavProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content for the nav',
          scope: {},
        },
      } satisfies SlotRecord<keyof BNavSlots>,
    },
    BNavForm: {
      styleSpec: {kind: StyleKind.Tag, value: 'li > form'},
      sourcePath: '/BNav/BNavForm.vue',
      props: {
        ...pick(buildCommonProps(), [
          'floating',
          'id',
          'novalidate',
          'role',
          'validated',
          'wrapperAttrs',
        ]),
        formClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'CSS class (or classes) to apply to the form element', // TODO grammar check (rephrased for clarity)
        },
      } satisfies PropRecord<keyof BNavFormProps>,
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
      } satisfies EmitRecord<keyof BNavFormEmits>,
      slots: {
        default: {
          description: 'Content for the nav form',
          scope: {},
        },
      } satisfies SlotRecord<keyof BNavFormSlots>,
    },
    BNavItem: {
      sourcePath: '/BNav/BNavItem.vue',
      props: {
        [defaultPropSectionSymbol]: {
          linkAttrs: {
            type: 'Readonly<AttrsValue>',
            default: undefined,
            description: 'Additional attributes for the nested link element', // TODO grammar check (rephrased for clarity)
          },
          linkClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS class (or classes) for the nested link element', // TODO grammar check (rephrased for clarity)
          },
        } satisfies PropRecord<Exclude<keyof BNavItemProps, keyof typeof linkProps>>,
        'BLink props': {
          _opts: {
            linkTo,
          },
          _data: omit(linkProps, ['routerTag']),
        },
      },
      emits: {
        click: {
          description: 'Emitted when a non-disabled nav item is clicked', // TODO grammar check (rephrased for clarity)
          args: {
            click: {
              type: 'MouseEvent',
              description: 'Click event details', // TODO grammar check (rephrased for clarity)
            },
          },
        },
      } satisfies EmitRecord<keyof BNavItemEmits>,
      slots: {
        after: {
          description: 'Content placed after the nav item link (useful for nested navs)', // TODO grammar check (rephrased for clarity)
          scope: {},
        },
        default: {
          description: 'Content for the nav item',
          scope: {},
        },
      } satisfies SlotRecord<keyof BNavItemSlots>,
    },
    BNavItemDropdown: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.nav-item.dropdown'},
      sourcePath: '/BNav/BNavItemDropdown.vue',
      props: dropdownProps,
      emits: dropdownEmits,
      slots: dropdownSlots,
    },
    BNavText: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.navbar-text'},
      sourcePath: '/BNav/BNavText.vue',
      props: {
        text: {
          type: 'string',
          default: undefined,
          description: 'Plain text to display in the nav', // TODO grammar check (rephrased for consistency)
        },
      } satisfies PropRecord<keyof BNavTextProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to display in the nav', // TODO grammar check (rephrased for consistency)
          scope: {},
        },
      } satisfies SlotRecord<keyof BNavTextSlots>,
    },
  }),
}
