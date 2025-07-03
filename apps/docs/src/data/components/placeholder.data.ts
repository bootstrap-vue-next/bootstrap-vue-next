import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'

export default {
  load: (): ComponentReference => ({
    BPlaceholder: {
      sourcePath: '/BPlaceholder/BPlaceholder.vue',
      props: {
        animation: {
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        cols: {
          type: 'Numberish',
          default: 12, // TODO item not in string format
        },
        size: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        tag: {
          type: 'string',
          default: 'span',
        },
        variant: {
          type: 'ColorVariant | null',
          default: null, // TODO item not in string format
        },
        width: {
          type: 'Numberish',
          default: undefined,
        },
        wrapperTag: {
          type: 'string',
          default: 'span',
        },
      } satisfies Record<keyof BvnComponentProps['BPlaceholder'], PropertyReference>,
      emits: {},
      slots: {},
    },
    BPlaceholderCard: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.card'},
      sourcePath: '/BPlaceholder/BPlaceholderCard.vue',
      props: {
        animation: {
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        footerAnimation: {
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        footerSize: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        footerVariant: {
          type: 'ColorVariant | null',
          default: undefined,
        },
        footerWidth: {
          type: 'Numberish',
          default: 100, // TODO item not in string format
        },
        headerAnimation: {
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        headerSize: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        headerVariant: {
          type: 'ColorVariant | null',
          default: undefined,
        },
        headerWidth: {
          type: 'Numberish',
          default: 100, // TODO item not in string format
        },
        imgBlankColor: {
          type: 'string',
          default: '#868e96',
        },
        imgPlacement: {
          type: "'top' | 'bottom'",
          default: 'top',
        },
        imgHeight: {
          type: 'Numberish',
          default: 100, // TODO item not in string format
        },
        imgSrc: {
          type: 'string',
          default: undefined,
        },
        noButton: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noFooter: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noHeader: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        noImg: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        size: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        variant: {
          type: 'ColorVariant | null',
          default: undefined,
        },
      } satisfies Record<keyof BvnComponentProps['BPlaceholderCard'], PropertyReference>,
      emits: {},
      slots: {
        img: {
          description: 'Overrides the default image placeholder',
          scope: {},
        },
        header: {
          description: 'Overrides the default header placeholder',
          scope: {},
        },
        default: {
          description: 'Overrides the default placeholders',
          scope: {},
        },
        footer: {
          description: 'Overrides the default footer placeholder',
          scope: {},
        },
      },
    },
    BPlaceholderWrapper: {
      styleSpec: {kind: StyleKind.None},
      sourcePath: '/BPlaceholder/BPlaceholderWrapper.vue',
      props: {
        loading: {
          description: 'Determines whether the loading slot is displayed',
          type: 'boolean',
          default: false, // TODO item not in string format
        },
      } satisfies Record<keyof BvnComponentProps['BPlaceholderWrapper'], PropertyReference>,
      emits: {},
      slots: {
        default: {
          description: 'Content to show when the `loading` prop is `false`',
          scope: {},
        },
        loading: {
          description: 'Content to show when the `loading` prop is `true`',
          scope: {},
        },
      },
    },
    BPlaceholderTable: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.table'},
      sourcePath: '/BPlaceholder/BPlaceholderTable.vue',
      props: {
        animation: {
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        cellWidth: {
          type: 'Numberish',
          default: 100, // TODO item not in string format
        },
        columns: {
          type: 'Numberish',
          default: 5, // TODO item not in string format
        },
        footerAnimation: {
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        footerCellWidth: {
          type: 'Numberish',
          default: 100, // TODO item not in string format
        },
        footerColumns: {
          type: 'Numberish',
          default: undefined,
        },
        footerSize: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        footerVariant: {
          type: 'ColorVariant | null',
          default: undefined,
        },
        headerAnimation: {
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        headerCellWidth: {
          type: 'Numberish',
          default: 100, // TODO item not in string format
        },
        headerColumns: {
          type: 'Numberish',
          default: undefined,
        },
        headerSize: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        headerVariant: {
          type: 'ColorVariant | null',
          default: undefined,
        },
        noHeader: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        rows: {
          type: 'Numberish',
          default: 3, // TODO item not in string format
        },
        showFooter: {
          type: 'boolean',
          default: false, // TODO item not in string format
        },
        size: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        variant: {
          type: 'ColorVariant | null',
          default: undefined,
        },
      } satisfies Record<keyof BvnComponentProps['BPlaceholderTable'], PropertyReference>,
      emits: {},
      slots: {
        thead: {
          description: 'Overrides the table header (thead) placeholder',
          scope: {},
        },
        tfoot: {
          description: 'Overrides the table footer (tfoot) placeholder',
          scope: {},
        },
        default: {
          description: 'Overrides the table body (tbody) placeholder',
          scope: {},
        },
      },
    },
    BPlaceholderButton: {
      styleSpec: {kind: StyleKind.OverrideClass, value: '.placeholder.btn'},
      sourcePath: '/BPlaceholder/BPlaceholderButton.vue',
      props: {
        animation: {
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        cols: {
          type: 'Numberish',
          default: undefined,
        },
        tag: {
          type: 'string',
          default: 'div',
        },
        variant: {
          type: 'ColorVariant | null',
          default: 'primary',
        },
        width: {
          type: 'Numberish',
          default: undefined,
        },
      } satisfies Record<keyof BvnComponentProps['BPlaceholderButton'], PropertyReference>,
      emits: {},
      slots: {},
    },
  }),
}
