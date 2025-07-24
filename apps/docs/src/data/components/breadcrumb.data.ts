import type {
  BBreadcrumbItemEmits,
  BBreadcrumbItemSlots,
  BBreadcrumbSlots,
  BvnComponentProps,
} from 'bootstrap-vue-next'
import {
  type ComponentReference,
  defaultPropSectionSymbol,
  type EmitReference,
  type PropertyReference,
  type SlotsReference,
} from '../../types'
import {linkedBLinkSection, linkProps} from '../../utils/linkProps'

export default {
  load: (): ComponentReference => ({
    BBreadcrumb: {
      sourcePath: '/BBreadcrumb/BBreadcrumb.vue',
      props: {
        items: {
          type: 'BreadcrumbItemRaw[]',
          default: undefined,
          description: 'Array of `BreadCrumbItem`s or strings to render. See above for details.',
        },
        id: {
          type: 'string',
          default: undefined,
          description:
            'ID of the breadcrumb component. When combined with the `useBreadcrumb` composable, it will use this id as a breadcrumb trail instead of the global trail.',
        },
      } satisfies Record<keyof BvnComponentProps['BBreadcrumb'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content (breadcrumb items) to place in the breadcrumb',
        },
        append: {
          description: 'Content to append to the breadcrumb',
        },
        prepend: {
          description: 'Content to prepend to the breadcrumb',
        },
      } satisfies Record<keyof BBreadcrumbSlots, SlotsReference>,
    },
    BBreadcrumbItem: {
      sourcePath: '/BBreadcrumb/BBreadcrumbItem.vue',
      props: {
        [defaultPropSectionSymbol]: {
          ariaCurrent: {
            type: 'string',
            default: 'location',
            description:
              "Sets the value of the 'aria-current' attribute (when the item is the active item). Supported string values are 'location', 'page', or 'true'",
          },
          text: {
            type: 'string',
            default: undefined,
            description: 'Text to render in the breadcrumb item',
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BBreadcrumbItem'], keyof typeof linkProps>,
          PropertyReference
        >,
        'BLink props': linkedBLinkSection,
      },
      emits: {
        click: {
          description: 'Emitted when the breadcrumb item is clicked',
          args: {
            click: {
              type: 'MouseEvent',
              description: 'Native click event object',
            },
          },
        },
      } satisfies Record<keyof BBreadcrumbItemEmits, EmitReference>,
      slots: {
        default: {
          description: 'Content to place in the breadcrumb item',
        },
      } satisfies Record<keyof BBreadcrumbItemSlots, SlotsReference>,
    },
  }),
}
