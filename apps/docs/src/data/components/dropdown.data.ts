import type {
  BDropdownDividerProps,
  BDropdownFormProps,
  BDropdownFormSlots,
  BDropdownGroupProps,
  BDropdownGroupSlots,
  BDropdownHeaderProps,
  BDropdownHeaderSlots,
  BDropdownItemButtonEmits,
  BDropdownItemButtonProps,
  BDropdownItemButtonSlots,
  BDropdownItemEmits,
  BDropdownItemProps,
  BDropdownItemSlots,
  BDropdownTextProps,
  BDropdownTextSlots,
} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitRecord,
  type PropRecord,
  type SlotRecord,
} from '../../types'
import {linkProps, linkTo} from '../../utils/linkProps'
import {dropdownEmits, dropdownProps, dropdownSlots} from '../../utils/dropdownCommon'
import {omit, pick} from '../../utils/objectUtils'
import {buildCommonProps} from '../../utils/commonProps'

export default {
  load: (): ComponentReference => ({
    BDropdown: {
      sourcePath: '/BDropdown/BDropdown.vue',
      props: dropdownProps,
      emits: dropdownEmits,
      slots: dropdownSlots,
    },
    BDropdownDivider: {
      sourcePath: '/BDropdown/BDropdownDivider.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'hr',
            },
          }),
          ['tag', 'variant', 'wrapperAttrs']
        ),
        dividerClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'CSS class (or classes) to add to the divider component',
        },
      } satisfies PropRecord<keyof BDropdownDividerProps>,
    },
    BDropdownForm: {
      sourcePath: '/BDropdown/BDropdownForm.vue',
      props: {
        ...pick(buildCommonProps(), ['wrapperAttrs']),
        formClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'CSS class (or classes) to add to the form component',
        },
        novalidate: {
          notYetImplemented: true,
          // description: 'Disables HTML5 form validation' // TODO missing description
        },
        validated: {
          notYetImplemented: true,
          // description: 'Marks the form as validated' // TODO missing description
        },
      } satisfies PropRecord<keyof BDropdownFormProps>,
      slots: {
        default: {
          description: 'Content to place in the dropdown form',
        },
      } satisfies SlotRecord<keyof BDropdownFormSlots>,
    },
    BDropdownGroup: {
      sourcePath: '/BDropdown/BDropdownGroup.vue',
      props: {
        ...pick(
          buildCommonProps({
            headerTag: {
              default: 'header',
            },
          }),
          ['ariaDescribedby', 'headerClass', 'headerTag', 'headerVariant', 'id']
        ),
        header: {
          type: 'string',
          default: undefined,
          // description: 'Text content for the dropdown group header' // TODO missing description
        },
      } satisfies PropRecord<keyof BDropdownGroupProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content (items) to place in the dropdown group',
        },
        header: {
          description: 'Optional header content for the dropdown group',
        },
      } satisfies SlotRecord<keyof BDropdownGroupSlots>,
    },
    BDropdownHeader: {
      sourcePath: '/BDropdown/BDropdownHeader.vue',
      props: {
        ...pick(buildCommonProps(), ['headerClass', 'tag', 'variant', 'wrapperAttrs']),
        text: {
          type: 'string',
          default: undefined,
          description: 'Content to place in the dropdown text. Default slot takes precedence', // TODO grammar check (should say "dropdown header" instead of "dropdown text") // TODO similar content to BDropdownText/text (similar description structure)
        },
      } satisfies PropRecord<keyof BDropdownHeaderProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the dropdown header',
        },
      } satisfies SlotRecord<keyof BDropdownHeaderSlots>,
    },
    BDropdownItem: {
      sourcePath: '/BDropdown/BDropdownItem.vue',
      props: {
        [defaultPropSectionSymbol]: pick(buildCommonProps(), [
          'linkClass',
          'wrapperAttrs',
        ]) satisfies PropRecord<Exclude<keyof BDropdownItemProps, keyof typeof linkProps>>,
        'BLink props': {
          _opts: {
            linkTo,
          },
          _data: omit(linkProps, ['routerTag']),
        },
      },
      emits: {
        click: {
          description: 'Emitted when item is clicked',
          args: {
            value: {
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          },
        },
      } satisfies EmitRecord<keyof BDropdownItemEmits>,
      slots: {
        default: {
          description: 'Content to place in the dropdown item',
        },
      } satisfies SlotRecord<keyof BDropdownItemSlots>,
    },
    BDropdownItemButton: {
      sourcePath: '/BDropdown/BDropdownItemButton.vue',
      props: {
        ...pick(buildCommonProps(), [
          'active',
          'activeClass',
          'disabled',
          'variant',
          'wrapperAttrs',
        ]),
        buttonClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'Class or classes to apply to the inner button element',
        },
      } satisfies PropRecord<keyof BDropdownItemButtonProps>,
      emits: {
        click: {
          description: 'Emitted when item is clicked',
          args: {
            value: {
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          },
        },
      } satisfies EmitRecord<keyof BDropdownItemButtonEmits>,
      slots: {
        default: {
          description: 'Content to place in the dropdown item button',
        },
      } satisfies SlotRecord<keyof BDropdownItemButtonSlots>,
    },
    BDropdownText: {
      sourcePath: '/BDropdown/BDropdownText.vue',
      props: {
        ...pick(
          buildCommonProps({
            tag: {
              default: 'span',
            },
          }),
          ['tag', 'variant', 'wrapperAttrs']
        ),
        text: {
          type: 'string',
          default: undefined,
          description: 'Content to place in the dropdown text. Default slot takes precedence', // TODO similar content to BDropdownHeader/text (similar description structure)
        },
        textClass: {
          type: 'ClassValue',
          default: undefined,
          description: 'CSS class (or classes) to add to the text component',
        },
      } satisfies PropRecord<keyof BDropdownTextProps>,
      emits: {},
      slots: {
        default: {
          description: 'Content to place in the dropdown text',
        },
      } satisfies SlotRecord<keyof BDropdownTextSlots>,
    },
  }),
}
