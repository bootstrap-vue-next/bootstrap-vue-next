// src/data/components/placeholder.data.ts
var placeholder_data_default = {
  load: () => ({
    BPlaceholder: {
      sourcePath: '/BPlaceholder/BPlaceholder.vue',
      props: {
        animation: {
          type: 'PlaceholderAnimation',
          default: void 0,
        },
        cols: {
          type: 'Numberish',
          default: 12,
          // TODO item not in string format
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
          default: null,
          // TODO item not in string format
        },
        width: {
          type: 'Numberish',
          default: void 0,
        },
        wrapperTag: {
          type: 'string',
          default: 'span',
        },
      },
      emits: {},
      slots: {},
    },
    BPlaceholderCard: {
      styleSpec: {kind: 'OVERRIDE-CLASS' /* OverrideClass */, value: '.card'},
      sourcePath: '/BPlaceholder/BPlaceholderCard.vue',
      props: {
        animation: {
          type: 'PlaceholderAnimation',
          default: void 0,
        },
        footerAnimation: {
          type: 'PlaceholderAnimation',
          default: void 0,
        },
        footerSize: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        footerVariant: {
          type: 'ColorVariant | null',
          default: void 0,
        },
        footerWidth: {
          type: 'Numberish',
          default: 100,
          // TODO item not in string format
        },
        headerAnimation: {
          type: 'PlaceholderAnimation',
          default: void 0,
        },
        headerSize: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        headerVariant: {
          type: 'ColorVariant | null',
          default: void 0,
        },
        headerWidth: {
          type: 'Numberish',
          default: 100,
          // TODO item not in string format
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
          default: 100,
          // TODO item not in string format
        },
        imgSrc: {
          type: 'string',
          default: void 0,
        },
        noButton: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        noFooter: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        noHeader: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        noImg: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        size: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        variant: {
          type: 'ColorVariant | null',
          default: void 0,
        },
      },
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
      styleSpec: {kind: 'NONE' /* None */},
      sourcePath: '/BPlaceholder/BPlaceholderWrapper.vue',
      props: {
        loading: {
          description: 'Determines whether the loading slot is displayed',
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
      },
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
      styleSpec: {kind: 'OVERRIDE-CLASS' /* OverrideClass */, value: '.table'},
      sourcePath: '/BPlaceholder/BPlaceholderTable.vue',
      props: {
        animation: {
          type: 'PlaceholderAnimation',
          default: void 0,
        },
        cellWidth: {
          type: 'Numberish',
          default: 100,
          // TODO item not in string format
        },
        columns: {
          type: 'Numberish',
          default: 5,
          // TODO item not in string format
        },
        footerAnimation: {
          type: 'PlaceholderAnimation',
          default: void 0,
        },
        footerCellWidth: {
          type: 'Numberish',
          default: 100,
          // TODO item not in string format
        },
        footerColumns: {
          type: 'Numberish',
          default: void 0,
        },
        footerSize: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        footerVariant: {
          type: 'ColorVariant | null',
          default: void 0,
        },
        headerAnimation: {
          type: 'PlaceholderAnimation',
          default: void 0,
        },
        headerCellWidth: {
          type: 'Numberish',
          default: 100,
          // TODO item not in string format
        },
        headerColumns: {
          type: 'Numberish',
          default: void 0,
        },
        headerSize: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        headerVariant: {
          type: 'ColorVariant | null',
          default: void 0,
        },
        noHeader: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        rows: {
          type: 'Numberish',
          default: 3,
          // TODO item not in string format
        },
        showFooter: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        size: {
          type: 'PlaceholderSize',
          default: 'md',
        },
        variant: {
          type: 'ColorVariant | null',
          default: void 0,
        },
      },
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
      styleSpec: {kind: 'OVERRIDE-CLASS' /* OverrideClass */, value: '.placeholder.btn'},
      sourcePath: '/BPlaceholder/BPlaceholderButton.vue',
      props: {
        animation: {
          type: 'PlaceholderAnimation',
          default: void 0,
        },
        cols: {
          type: 'Numberish',
          default: void 0,
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
          default: void 0,
        },
      },
      emits: {},
      slots: {},
    },
  }),
}
export {placeholder_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2RhdGEvY29tcG9uZW50cy9wbGFjZWhvbGRlci5kYXRhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9wbGFjZWhvbGRlci5kYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy9kYXRhL2NvbXBvbmVudHMvcGxhY2Vob2xkZXIuZGF0YS50c1wiO2ltcG9ydCB0eXBlIHtcbiAgQlBsYWNlaG9sZGVyQnV0dG9uUHJvcHMsXG4gIEJQbGFjZWhvbGRlckNhcmRQcm9wcyxcbiAgQlBsYWNlaG9sZGVyQ2FyZFNsb3RzLFxuICBCUGxhY2Vob2xkZXJQcm9wcyxcbiAgQlBsYWNlaG9sZGVyVGFibGVQcm9wcyxcbiAgQlBsYWNlaG9sZGVyVGFibGVTbG90cyxcbiAgQlBsYWNlaG9sZGVyV3JhcHBlclByb3BzLFxuICBCUGxhY2Vob2xkZXJXcmFwcGVyU2xvdHMsXG59IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB7dHlwZSBDb21wb25lbnRSZWZlcmVuY2UsIHR5cGUgUHJvcFJlY29yZCwgdHlwZSBTbG90UmVjb3JkLCBTdHlsZUtpbmR9IGZyb20gJy4uLy4uL3R5cGVzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWQ6ICgpOiBDb21wb25lbnRSZWZlcmVuY2UgPT4gKHtcbiAgICBCUGxhY2Vob2xkZXI6IHtcbiAgICAgIHNvdXJjZVBhdGg6ICcvQlBsYWNlaG9sZGVyL0JQbGFjZWhvbGRlci52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ1BsYWNlaG9sZGVyQW5pbWF0aW9uJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbHM6IHtcbiAgICAgICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgICAgICBkZWZhdWx0OiAxMiwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICB0eXBlOiAnUGxhY2Vob2xkZXJTaXplJyxcbiAgICAgICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgICB9LFxuICAgICAgICB0YWc6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiAnc3BhbicsXG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICAgICAgZGVmYXVsdDogbnVsbCwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICB3cmFwcGVyVGFnOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ3NwYW4nLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCUGxhY2Vob2xkZXJQcm9wcz4sXG4gICAgICBlbWl0czoge30sXG4gICAgICBzbG90czoge30sXG4gICAgfSxcbiAgICBCUGxhY2Vob2xkZXJDYXJkOiB7XG4gICAgICBzdHlsZVNwZWM6IHtraW5kOiBTdHlsZUtpbmQuT3ZlcnJpZGVDbGFzcywgdmFsdWU6ICcuY2FyZCd9LFxuICAgICAgc291cmNlUGF0aDogJy9CUGxhY2Vob2xkZXIvQlBsYWNlaG9sZGVyQ2FyZC52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ1BsYWNlaG9sZGVyQW5pbWF0aW9uJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3RlckFuaW1hdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdQbGFjZWhvbGRlckFuaW1hdGlvbicsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJTaXplOiB7XG4gICAgICAgICAgdHlwZTogJ1BsYWNlaG9sZGVyU2l6ZScsXG4gICAgICAgICAgZGVmYXVsdDogJ21kJyxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3RlcldpZHRoOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogMTAwLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyQW5pbWF0aW9uOiB7XG4gICAgICAgICAgdHlwZTogJ1BsYWNlaG9sZGVyQW5pbWF0aW9uJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlclNpemU6IHtcbiAgICAgICAgICB0eXBlOiAnUGxhY2Vob2xkZXJTaXplJyxcbiAgICAgICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJWYXJpYW50OiB7XG4gICAgICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyV2lkdGg6IHtcbiAgICAgICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgICAgICBkZWZhdWx0OiAxMDAsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICB9LFxuICAgICAgICBpbWdCbGFua0NvbG9yOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJyM4NjhlOTYnLFxuICAgICAgICB9LFxuICAgICAgICBpbWdQbGFjZW1lbnQ6IHtcbiAgICAgICAgICB0eXBlOiBcIid0b3AnIHwgJ2JvdHRvbSdcIixcbiAgICAgICAgICBkZWZhdWx0OiAndG9wJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW1nSGVpZ2h0OiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogMTAwLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgfSxcbiAgICAgICAgaW1nU3JjOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBub0J1dHRvbjoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIG5vRm9vdGVyOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgfSxcbiAgICAgICAgbm9IZWFkZXI6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICB9LFxuICAgICAgICBub0ltZzoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICB0eXBlOiAnUGxhY2Vob2xkZXJTaXplJyxcbiAgICAgICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgICB9LFxuICAgICAgICB2YXJpYW50OiB7XG4gICAgICAgICAgdHlwZTogJ0NvbG9yVmFyaWFudCB8IG51bGwnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQlBsYWNlaG9sZGVyQ2FyZFByb3BzPixcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGltZzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGltYWdlIHBsYWNlaG9sZGVyJyxcbiAgICAgICAgICBzY29wZToge30sXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGhlYWRlciBwbGFjZWhvbGRlcicsXG4gICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICB9LFxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdPdmVycmlkZXMgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXJzJyxcbiAgICAgICAgICBzY29wZToge30sXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnT3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGZvb3RlciBwbGFjZWhvbGRlcicsXG4gICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCUGxhY2Vob2xkZXJDYXJkU2xvdHM+LFxuICAgIH0sXG4gICAgQlBsYWNlaG9sZGVyV3JhcHBlcjoge1xuICAgICAgc3R5bGVTcGVjOiB7a2luZDogU3R5bGVLaW5kLk5vbmV9LFxuICAgICAgc291cmNlUGF0aDogJy9CUGxhY2Vob2xkZXIvQlBsYWNlaG9sZGVyV3JhcHBlci52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgbG9hZGluZzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBsb2FkaW5nIHNsb3QgaXMgZGlzcGxheWVkJyxcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCUGxhY2Vob2xkZXJXcmFwcGVyUHJvcHM+LFxuICAgICAgZW1pdHM6IHt9LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBzaG93IHdoZW4gdGhlIGBsb2FkaW5nYCBwcm9wIGlzIGBmYWxzZWAnLFxuICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZGluZzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29udGVudCB0byBzaG93IHdoZW4gdGhlIGBsb2FkaW5nYCBwcm9wIGlzIGB0cnVlYCcsXG4gICAgICAgICAgc2NvcGU6IHt9LFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCUGxhY2Vob2xkZXJXcmFwcGVyU2xvdHM+LFxuICAgIH0sXG4gICAgQlBsYWNlaG9sZGVyVGFibGU6IHtcbiAgICAgIHN0eWxlU3BlYzoge2tpbmQ6IFN0eWxlS2luZC5PdmVycmlkZUNsYXNzLCB2YWx1ZTogJy50YWJsZSd9LFxuICAgICAgc291cmNlUGF0aDogJy9CUGxhY2Vob2xkZXIvQlBsYWNlaG9sZGVyVGFibGUudnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdQbGFjZWhvbGRlckFuaW1hdGlvbicsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBjZWxsV2lkdGg6IHtcbiAgICAgICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgICAgICBkZWZhdWx0OiAxMDAsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICB9LFxuICAgICAgICBjb2x1bW5zOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogNSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIGZvb3RlckFuaW1hdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdQbGFjZWhvbGRlckFuaW1hdGlvbicsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJDZWxsV2lkdGg6IHtcbiAgICAgICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgICAgICBkZWZhdWx0OiAxMDAsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJDb2x1bW5zOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJTaXplOiB7XG4gICAgICAgICAgdHlwZTogJ1BsYWNlaG9sZGVyU2l6ZScsXG4gICAgICAgICAgZGVmYXVsdDogJ21kJyxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVyVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlckFuaW1hdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdQbGFjZWhvbGRlckFuaW1hdGlvbicsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJDZWxsV2lkdGg6IHtcbiAgICAgICAgICB0eXBlOiAnTnVtYmVyaXNoJyxcbiAgICAgICAgICBkZWZhdWx0OiAxMDAsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJDb2x1bW5zOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJTaXplOiB7XG4gICAgICAgICAgdHlwZTogJ1BsYWNlaG9sZGVyU2l6ZScsXG4gICAgICAgICAgZGVmYXVsdDogJ21kJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyVmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIG5vSGVhZGVyOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgfSxcbiAgICAgICAgcm93czoge1xuICAgICAgICAgIHR5cGU6ICdOdW1iZXJpc2gnLFxuICAgICAgICAgIGRlZmF1bHQ6IDMsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICB9LFxuICAgICAgICBzaG93Rm9vdGVyOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgIHR5cGU6ICdQbGFjZWhvbGRlclNpemUnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCUGxhY2Vob2xkZXJUYWJsZVByb3BzPixcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIHRoZWFkOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdPdmVycmlkZXMgdGhlIHRhYmxlIGhlYWRlciAodGhlYWQpIHBsYWNlaG9sZGVyJyxcbiAgICAgICAgICBzY29wZToge30sXG4gICAgICAgIH0sXG4gICAgICAgIHRmb290OiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdPdmVycmlkZXMgdGhlIHRhYmxlIGZvb3RlciAodGZvb3QpIHBsYWNlaG9sZGVyJyxcbiAgICAgICAgICBzY29wZToge30sXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ092ZXJyaWRlcyB0aGUgdGFibGUgYm9keSAodGJvZHkpIHBsYWNlaG9sZGVyJyxcbiAgICAgICAgICBzY29wZToge30sXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJQbGFjZWhvbGRlclRhYmxlU2xvdHM+LFxuICAgIH0sXG4gICAgQlBsYWNlaG9sZGVyQnV0dG9uOiB7XG4gICAgICBzdHlsZVNwZWM6IHtraW5kOiBTdHlsZUtpbmQuT3ZlcnJpZGVDbGFzcywgdmFsdWU6ICcucGxhY2Vob2xkZXIuYnRuJ30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JQbGFjZWhvbGRlci9CUGxhY2Vob2xkZXJCdXR0b24udnVlJyxcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIGFuaW1hdGlvbjoge1xuICAgICAgICAgIHR5cGU6ICdQbGFjZWhvbGRlckFuaW1hdGlvbicsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBjb2xzOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICB0YWc6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiAnZGl2JyxcbiAgICAgICAgfSxcbiAgICAgICAgdmFyaWFudDoge1xuICAgICAgICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiAncHJpbWFyeScsXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgdHlwZTogJ051bWJlcmlzaCcsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCUGxhY2Vob2xkZXJCdXR0b25Qcm9wcz4sXG4gICAgICBlbWl0czoge30sXG4gICAgICBzbG90czoge30sXG4gICAgfSxcbiAgfSksXG59XG4iXSwKICAi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
