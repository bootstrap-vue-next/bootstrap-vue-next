import type {ComponentReference} from './ComponentReference'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BPlaceholder',
      props: [
        {
          prop: 'tag',
          type: 'string',
          default: 'span',
        },
        {
          prop: 'wrapperTag',
          type: 'string',
          default: 'span',
        },
        {
          prop: 'width',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'cols',
          type: 'string | number',
          default: 12,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: null,
        },
        {
          prop: 'size',
          type: 'PlaceholderSize',
          default: 'md',
        },
        {
          prop: 'animation',
          type: 'PlaceholderAnimation',
          default: undefined,
        },
      ],
      emits: [],
      slots: [],
    },
    {
      component: 'BPlaceholderCard',
      emits: [],
      props: [
        {
          prop: 'noHeader',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'headerWidth',
          type: 'string | number',
          default: 100,
        },
        {
          prop: 'headerVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'headerAnimation',
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        {
          prop: 'headerSize',
          type: 'PlaceholderSize',
          default: 'md',
        },
        {
          prop: 'noFooter',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'footerWidth',
          type: 'string | number',
          default: 100,
        },
        {
          prop: 'footerVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'footerAnimation',
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        {
          prop: 'footerSize',
          type: 'PlaceholderSize',
          default: 'md',
        },
        {
          prop: 'animation',
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        {
          prop: 'size',
          type: 'PlaceholderSize',
          default: 'md',
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'noButton',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'imgBottom',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'imgSrc',
          type: 'string',
          default: undefined,
        },
        {
          prop: 'imgBlankColor',
          type: 'string',
          default: '#868e96',
        },
        {
          prop: 'imgHeight',
          type: 'string | number',
          default: 100,
        },
        {
          prop: 'noImg',
          type: 'boolean',
          default: false,
        },
      ],
      slots: [
        {
          description: 'Overrides the img default',
          name: 'img',
          scope: [],
        },
        {
          description: 'Overrides the header default',
          name: 'header',
          scope: [],
        },
        {
          description: 'Overrides the default placeholders',
          name: 'default',
          scope: [],
        },
        {
          description: 'Overrides the footer default',
          name: 'footer',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderWrapper',
      emits: [],
      props: [
        {
          description: 'Determines whether the loading slot should be displayed',
          prop: 'loading',
          type: 'boolean',
          default: false,
        },
      ],
      slots: [
        {
          description: 'Content to show when the `loading` prop is `false`',
          name: 'default',
          scope: [],
        },
        {
          description: 'Content to show when the `loading` prop is `true`',
          name: 'loading',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderTable',
      emits: [],
      props: [
        {
          prop: 'rows',
          type: 'string | number',
          default: 3,
        },
        {
          prop: 'columns',
          type: 'string | number',
          default: 5,
        },
        {
          prop: 'cellWidth',
          type: 'string | number',
          default: 100,
        },
        {
          prop: 'size',
          type: 'PlaceholderSize',
          default: 'md',
        },
        {
          prop: 'animation',
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'headerColumns',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'hideHeader',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'headerCellWidth',
          type: 'string | number',
          default: 100,
        },
        {
          prop: 'headerSize',
          type: 'PlaceholderSize',
          default: 'md',
        },
        {
          prop: 'headerAnimation',
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        {
          prop: 'headerVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
        {
          prop: 'footerColumns',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'showFooter',
          type: 'boolean',
          default: false,
        },
        {
          prop: 'footerCellWidth',
          type: 'string | number',
          default: 100,
        },
        {
          prop: 'footerSize',
          type: 'PlaceholderSize',
          default: 'md',
        },
        {
          prop: 'footerAnimation',
          type: 'PlaceholderAnimation',
          default: undefined,
        },
        {
          prop: 'footerVariant',
          type: 'ColorVariant | null',
          default: undefined,
        },
      ],
      slots: [
        {
          description: 'Overwrites the thead of the table',
          name: 'thead',
          scope: [],
        },
        {
          description: 'Overwrites the tfoot of the table',
          name: 'tfoot',
          scope: [],
        },
        {
          description: 'Overwrites the tbody of the table',
          name: 'default',
          scope: [],
        },
      ],
    },
    {
      component: 'BPlaceholderButton',
      emits: [],
      slots: [],
      props: [
        {
          prop: 'tag',
          type: 'string',
          default: 'div',
        },
        {
          prop: 'width',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'cols',
          type: 'string | number',
          default: undefined,
        },
        {
          prop: 'variant',
          type: 'ColorVariant | null',
          default: 'primary',
        },
        {
          prop: 'animation',
          type: 'PlaceholderAnimation',
          default: undefined,
        },
      ],
    },
  ],
}
