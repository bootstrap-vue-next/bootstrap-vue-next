// src/utils/showHideData.ts
var showHideEmits = {
  'hide': {
    description:
      "Always emits just before the component has hidden. Cancelable (as long as component wasn't forcibly hidden)",
    args: {
      value: {
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel hide',
      },
    },
  },
  'hide-prevented': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description:
      'Emitted when the component tried to close, but was prevented from closing.  This occurs when preventDefault() is called on the event, the user clicks escape and no-close-onbackdrop is set to true, or the user clicks on the backdrop and no-close-onbackdrop is set to true.',
  },
  'hidden': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description: 'Always emits after the component is hidden',
  },
  'show': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel show',
      },
    },
    description: 'Always emits just before the component is shown. Cancelable',
  },
  'show-prevented': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description:
      'Emitted when the component tried to open, but was prevented from opening. This occurs when preventDefault() is called on the event',
  },
  'shown': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description: 'Always emits just after component is shown.',
  },
  'toggle': {
    description:
      "Always emits just before the component is toggled via the exposed 'toggle()' function or useToggle composable . Cancelable (as long as component wasn't forcibly hidden)",
    args: {
      value: {
        type: 'BvTriggerableEvent',
        description: 'Call value.preventDefault() to cancel hide',
      },
    },
  },
  'toggle-prevented': {
    args: {
      value: {
        type: 'BvTriggerableEvent',
      },
    },
    description:
      'Emitted when the component tried to toggle, but was prevented from doing so.  This occurs when preventDefault() is called on the event, the user clicks escape and no-close-onbackdrop is set to true, or the user clicks on the backdrop and no-close-onbackdrop is set to true.',
  },
}
var showHideProps = {
  initialAnimation: {
    type: 'boolean',
    default: false,
    description: 'When set, enables the initial animation on mount',
  },
  lazy: {
    type: 'boolean',
    default: false,
    description: 'When set, the content will not be mounted until opened',
  },
  modelValue: {
    type: 'boolean',
    default: false,
    description: 'Controls the visibility of the component',
  },
  noFade: {
    type: 'boolean',
    default: false,
    description: 'Alias for `noAnimation`',
  },
  noAnimation: {
    type: 'boolean',
    default: false,
    description: 'When set, disables the animation',
  },
  show: {
    type: 'boolean',
    default: false,
    description:
      "When set, and prop 'visible' is false on mount, will animate from closed to open on initial mount. Mainly to help with template show. Use model-value for reactive show/hide",
  },
  transProps: {
    type: 'TransitionProps',
    default: void 0,
    description: 'Transition properties',
  },
  unmountLazy: {
    type: 'boolean',
    default: false,
    description: 'When set and `lazy` is true, the content will be unmounted when closed',
  },
  visible: {
    type: 'boolean',
    default: false,
    description: "When 'true', open without animation",
  },
}

// src/data/components/offcanvas.data.ts
var offcanvas_data_default = {
  load: () => ({
    BOffcanvas: {
      styleSpec: {kind: 'OVERRIDE-CLASS' /* OverrideClass */, value: '.offcanvas[-*]'},
      sourcePath: '/BOffcanvas/BOffcanvas.vue',
      props: {
        ...showHideProps,
        backdropFirst: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description:
            'Animate the backdrop before the offcanvas, and on leave animate the offcanvas before the backdrop',
        },
        bodyAttrs: {
          type: 'Readonly<AttrsValue>',
          default: void 0,
        },
        bodyClass: {
          type: 'ClassValue',
          default: void 0,
        },
        bodyScrolling: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        focus: {
          type: "'ok' | 'cancel' | 'close' | string | ComponentPublicInstance | HTMLElement | null",
          default: void 0,
          description:
            "Specify where to focus once offcanvas opens. Can be built-in button 'close'. Can be ref, HTMLElement, id or selector string. If set to 'false', no focus will be set (if noTrap isn't set the focus trap will focus the modal element or failback element). If set to a string, the element with that id will be focused. If set to a ComponentPublicInstance, the $el property of the instance will be focused.",
          // TODO grammar check (should say "fallback" instead of "failback")
        },
        footerClass: {
          type: 'string',
          default: void 0,
        },
        headerClass: {
          type: 'string',
          default: void 0,
        },
        headerCloseClass: {
          type: 'ClassValue',
          default: void 0,
        },
        headerCloseLabel: {
          type: 'string',
          default: 'Close',
        },
        headerCloseVariant: {
          type: 'ButtonVariant | null',
          default: 'secondary',
        },
        noBackdrop: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        id: {
          type: 'string',
          default: void 0,
        },
        noCloseOnBackdrop: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        noCloseOnEsc: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        noHeader: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        noHeaderClose: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        noTrap: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
          description: 'Disables the focus trap feature',
        },
        placement: {
          type: 'Placement',
          default: 'start',
        },
        responsive: {
          type: 'Breakpoint',
        },
        shadow: {
          type: 'Size | boolean',
          default: false,
          // TODO item not in string format
        },
        teleportDisabled: {
          type: 'boolean',
          default: false,
          // TODO item not in string format
        },
        teleportTo: {
          type: 'string | RendererElement | null | undefined',
          default: 'body',
        },
        title: {
          type: 'string',
          default: void 0,
        },
        width: {
          type: 'string',
          default: void 0,
        },
      },
      emits: {
        ...showHideEmits,
        'update:model-value': {
          args: {
            'update:model-value': {
              description: '',
              // TODO missing description
              type: 'boolean',
            },
          },
          description: '',
          // TODO missing description
        },
        'breakpoint': {
          args: {
            value: {
              type: 'BvTriggerableEvent',
              description: 'The event',
            },
            opened: {
              type: 'boolean',
              description: 'Whether or not the offcanvas is above the breakpoint and is open by it',
            },
          },
          description: "Emitted when the offcanvas' breakpoint state changes",
          // TODO grammar check (should say "offcanvas's" instead of "offcanvas'")
        },
        'close': {
          description: '',
          // TODO missing description
          args: {
            value: {
              description: '',
              // TODO missing description
              type: 'BvTriggerableEvent',
            },
          },
        },
        'esc': {
          description: '',
          // TODO missing description
          args: {
            value: {
              description: '',
              // TODO missing description
              type: 'BvTriggerableEvent',
            },
          },
        },
        'backdrop': {
          args: void 0,
          description: void 0,
        },
        'cancel': {
          args: void 0,
          description: void 0,
        },
        'ok': {
          args: void 0,
          description: void 0,
        },
      },
      slots: {
        'title': {
          description: '',
          // TODO missing description
          scope: {
            visible: {
              type: 'boolean',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            hide: {
              type: '(trigger?: string) => void',
            },
          },
        },
        'default': {
          description: '',
          // TODO missing description
          scope: {
            visible: {
              type: 'boolean',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            hide: {
              type: '(trigger?: string) => void',
            },
          },
        },
        'backdrop': {
          description: '',
          // TODO missing description
          scope: {},
        },
        'footer': {
          description: '',
          // TODO missing description
          scope: {
            visible: {
              type: 'boolean',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            hide: {
              type: '(trigger?: string) => void',
            },
          },
        },
        'header': {
          description: '',
          // TODO missing description
          scope: {
            visible: {
              type: 'boolean',
            },
            placement: {
              type: "'top' | 'bottom' | 'start' | 'end'",
            },
            hide: {
              type: '(trigger?: string) => void',
            },
          },
        },
        'header-close': {
          description: '',
          // TODO missing description
          scope: {},
        },
      },
    },
  }),
}
export {offcanvas_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL3Nob3dIaWRlRGF0YS50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL29mZmNhbnZhcy5kYXRhLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvc2hvd0hpZGVEYXRhLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9zaG93SGlkZURhdGEudHNcIjtpbXBvcnQgdHlwZSB7c2hvd0hpZGV9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB0eXBlIHtFbWl0UmVjb3JkLCBQcm9wUmVjb3JkLCBTbG90U2NvcGVSZWZlcmVuY2V9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVFbWl0cyA9IHtcbiAgJ2hpZGUnOiB7XG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFsd2F5cyBlbWl0cyBqdXN0IGJlZm9yZSB0aGUgY29tcG9uZW50IGhhcyBoaWRkZW4uIENhbmNlbGFibGUgKGFzIGxvbmcgYXMgY29tcG9uZW50IHdhc24ndCBmb3JjaWJseSBoaWRkZW4pXCIsXG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBoaWRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgJ2hpZGUtcHJldmVudGVkJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VtaXR0ZWQgd2hlbiB0aGUgY29tcG9uZW50IHRyaWVkIHRvIGNsb3NlLCBidXQgd2FzIHByZXZlbnRlZCBmcm9tIGNsb3NpbmcuICBUaGlzIG9jY3VycyB3aGVuIHByZXZlbnREZWZhdWx0KCkgaXMgY2FsbGVkIG9uIHRoZSBldmVudCwgdGhlIHVzZXIgY2xpY2tzIGVzY2FwZSBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZSwgb3IgdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBiYWNrZHJvcCBhbmQgbm8tY2xvc2Utb25iYWNrZHJvcCBpcyBzZXQgdG8gdHJ1ZS4nLFxuICB9LFxuICAnaGlkZGVuJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiAnQWx3YXlzIGVtaXRzIGFmdGVyIHRoZSBjb21wb25lbnQgaXMgaGlkZGVuJyxcbiAgfSxcbiAgJ3Nob3cnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBzaG93JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjogJ0Fsd2F5cyBlbWl0cyBqdXN0IGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHNob3duLiBDYW5jZWxhYmxlJyxcbiAgfSxcbiAgJ3Nob3ctcHJldmVudGVkJzoge1xuICAgIGFyZ3M6IHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0VtaXR0ZWQgd2hlbiB0aGUgY29tcG9uZW50IHRyaWVkIHRvIG9wZW4sIGJ1dCB3YXMgcHJldmVudGVkIGZyb20gb3BlbmluZy4gVGhpcyBvY2N1cnMgd2hlbiBwcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQnLFxuICB9LFxuICAnc2hvd24nOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246ICdBbHdheXMgZW1pdHMganVzdCBhZnRlciBjb21wb25lbnQgaXMgc2hvd24uJyxcbiAgfSxcbiAgJ3RvZ2dsZSc6IHtcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWx3YXlzIGVtaXRzIGp1c3QgYmVmb3JlIHRoZSBjb21wb25lbnQgaXMgdG9nZ2xlZCB2aWEgdGhlIGV4cG9zZWQgJ3RvZ2dsZSgpJyBmdW5jdGlvbiBvciB1c2VUb2dnbGUgY29tcG9zYWJsZSAuIENhbmNlbGFibGUgKGFzIGxvbmcgYXMgY29tcG9uZW50IHdhc24ndCBmb3JjaWJseSBoaWRkZW4pXCIsXG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQ2FsbCB2YWx1ZS5wcmV2ZW50RGVmYXVsdCgpIHRvIGNhbmNlbCBoaWRlJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgJ3RvZ2dsZS1wcmV2ZW50ZWQnOiB7XG4gICAgYXJnczoge1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRW1pdHRlZCB3aGVuIHRoZSBjb21wb25lbnQgdHJpZWQgdG8gdG9nZ2xlLCBidXQgd2FzIHByZXZlbnRlZCBmcm9tIGRvaW5nIHNvLiAgVGhpcyBvY2N1cnMgd2hlbiBwcmV2ZW50RGVmYXVsdCgpIGlzIGNhbGxlZCBvbiB0aGUgZXZlbnQsIHRoZSB1c2VyIGNsaWNrcyBlc2NhcGUgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUsIG9yIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgYmFja2Ryb3AgYW5kIG5vLWNsb3NlLW9uYmFja2Ryb3AgaXMgc2V0IHRvIHRydWUuJyxcbiAgfSxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIEVtaXRSZWNvcmRcblxuZXhwb3J0IGNvbnN0IHNob3dIaWRlUHJvcHMgPSB7XG4gIGluaXRpYWxBbmltYXRpb246IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCwgZW5hYmxlcyB0aGUgaW5pdGlhbCBhbmltYXRpb24gb24gbW91bnQnLFxuICB9LFxuICBsYXp5OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIHRoZSBjb250ZW50IHdpbGwgbm90IGJlIG1vdW50ZWQgdW50aWwgb3BlbmVkJyxcbiAgfSxcbiAgbW9kZWxWYWx1ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbnRyb2xzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBub0ZhZGU6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdBbGlhcyBmb3IgYG5vQW5pbWF0aW9uYCcsXG4gIH0sXG4gIG5vQW5pbWF0aW9uOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiAnV2hlbiBzZXQsIGRpc2FibGVzIHRoZSBhbmltYXRpb24nLFxuICB9LFxuICBzaG93OiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCwgYW5kIHByb3AgJ3Zpc2libGUnIGlzIGZhbHNlIG9uIG1vdW50LCB3aWxsIGFuaW1hdGUgZnJvbSBjbG9zZWQgdG8gb3BlbiBvbiBpbml0aWFsIG1vdW50LiBNYWlubHkgdG8gaGVscCB3aXRoIHRlbXBsYXRlIHNob3cuIFVzZSBtb2RlbC12YWx1ZSBmb3IgcmVhY3RpdmUgc2hvdy9oaWRlXCIsXG4gIH0sXG4gIHRyYW5zUHJvcHM6IHtcbiAgICB0eXBlOiAnVHJhbnNpdGlvblByb3BzJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdUcmFuc2l0aW9uIHByb3BlcnRpZXMnLFxuICB9LFxuICB1bm1vdW50TGF6eToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IGFuZCBgbGF6eWAgaXMgdHJ1ZSwgdGhlIGNvbnRlbnQgd2lsbCBiZSB1bm1vdW50ZWQgd2hlbiBjbG9zZWQnLFxuICB9LFxuICB2aXNpYmxlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOiBcIldoZW4gJ3RydWUnLCBvcGVuIHdpdGhvdXQgYW5pbWF0aW9uXCIsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQcm9wUmVjb3JkPGtleW9mIHNob3dIaWRlIHwgJ21vZGVsVmFsdWUnPlxuXG5leHBvcnQgY29uc3Qgc2hvd0hpZGVTbG90c0RhdGEgPSB7XG4gIGlkOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVzY3JpcHRpb246ICdVbmlxdWUgSUQgZm9yIHRoZSBjb21wb25lbnQnLFxuICB9LFxuICBzaG93OiB7XG4gICAgdHlwZTogJygpID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnVuY3Rpb24gdG8gc2hvdyB0aGUgY29tcG9uZW50JyxcbiAgfSxcbiAgaGlkZToge1xuICAgIHR5cGU6ICcodHJpZ2dlcj86IHN0cmluZywgbm9UcmlnZ2VyRW1pdD86IGJvb2xlYW4pID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Z1bmN0aW9uIHRvIGhpZGUgdGhlIGNvbXBvbmVudC4gYHRyaWdnZXJgIGlzIHRoZSB0cmlnZ2VyIHRoYXQgY2F1c2VkIHRoZSBoaWRlLiBgbm9UcmlnZ2VyRW1pdGAgcHJldmVudHMgdGhlIGVtaXQgb2YgdGhlIHRyaWdnZXIgZXZlbnQuJyxcbiAgfSxcbiAgdG9nZ2xlOiB7XG4gICAgdHlwZTogJygpID0+IHZvaWQnLFxuICAgIGRlc2NyaXB0aW9uOiAnRnVuY3Rpb24gdG8gdG9nZ2xlIHRoZSBjb21wb25lbnQgdmlzaWJpbGl0eScsXG4gIH0sXG4gIGFjdGl2ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRlcyBpZiB0aGUgY29tcG9uZW50IGlzIGFjdGl2ZSAoc3RhcnRpbmcgc2hvdywgYmVmb3JlL2FmdGVyIGFuaW1hdGlvbnMpJyxcbiAgfSxcbiAgdmlzaWJsZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZXNjcmlwdGlvbjogJ0luZGljYXRlcyBpZiB0aGUgY29tcG9uZW50IGlzIHZpc2libGUgKHNob3duKScsXG4gIH0sXG59IGFzIGNvbnN0IHNhdGlzZmllcyBTbG90U2NvcGVSZWZlcmVuY2VcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9vZmZjYW52YXMuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL29mZmNhbnZhcy5kYXRhLnRzXCI7aW1wb3J0IHR5cGUge0JPZmZjYW52YXNFbWl0cywgQk9mZmNhbnZhc1Byb3BzLCBCT2ZmY2FudmFzU2xvdHN9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB7XG4gIHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlLFxuICB0eXBlIEVtaXRSZWNvcmQsXG4gIHR5cGUgUHJvcFJlY29yZCxcbiAgdHlwZSBTbG90UmVjb3JkLFxuICBTdHlsZUtpbmQsXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHtzaG93SGlkZUVtaXRzLCBzaG93SGlkZVByb3BzfSBmcm9tICcuLi8uLi91dGlscy9zaG93SGlkZURhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZDogKCk6IENvbXBvbmVudFJlZmVyZW5jZSA9PiAoe1xuICAgIEJPZmZjYW52YXM6IHtcbiAgICAgIHN0eWxlU3BlYzoge2tpbmQ6IFN0eWxlS2luZC5PdmVycmlkZUNsYXNzLCB2YWx1ZTogJy5vZmZjYW52YXNbLSpdJ30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JPZmZjYW52YXMvQk9mZmNhbnZhcy52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgLi4uc2hvd0hpZGVQcm9wcyxcbiAgICAgICAgYmFja2Ryb3BGaXJzdDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAnQW5pbWF0ZSB0aGUgYmFja2Ryb3AgYmVmb3JlIHRoZSBvZmZjYW52YXMsIGFuZCBvbiBsZWF2ZSBhbmltYXRlIHRoZSBvZmZjYW52YXMgYmVmb3JlIHRoZSBiYWNrZHJvcCcsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHlBdHRyczoge1xuICAgICAgICAgIHR5cGU6ICdSZWFkb25seTxBdHRyc1ZhbHVlPicsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBib2R5Q2xhc3M6IHtcbiAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBib2R5U2Nyb2xsaW5nOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgfSxcbiAgICAgICAgZm9jdXM6IHtcbiAgICAgICAgICB0eXBlOiBcIidvaycgfCAnY2FuY2VsJyB8ICdjbG9zZScgfCBzdHJpbmcgfCBDb21wb25lbnRQdWJsaWNJbnN0YW5jZSB8IEhUTUxFbGVtZW50IHwgbnVsbFwiLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiU3BlY2lmeSB3aGVyZSB0byBmb2N1cyBvbmNlIG9mZmNhbnZhcyBvcGVucy4gQ2FuIGJlIGJ1aWx0LWluIGJ1dHRvbiAnY2xvc2UnLiBDYW4gYmUgcmVmLCBIVE1MRWxlbWVudCwgaWQgb3Igc2VsZWN0b3Igc3RyaW5nLiBJZiBzZXQgdG8gJ2ZhbHNlJywgbm8gZm9jdXMgd2lsbCBiZSBzZXQgKGlmIG5vVHJhcCBpc24ndCBzZXQgdGhlIGZvY3VzIHRyYXAgd2lsbCBmb2N1cyB0aGUgbW9kYWwgZWxlbWVudCBvciBmYWlsYmFjayBlbGVtZW50KS4gSWYgc2V0IHRvIGEgc3RyaW5nLCB0aGUgZWxlbWVudCB3aXRoIHRoYXQgaWQgd2lsbCBiZSBmb2N1c2VkLiBJZiBzZXQgdG8gYSBDb21wb25lbnRQdWJsaWNJbnN0YW5jZSwgdGhlICRlbCBwcm9wZXJ0eSBvZiB0aGUgaW5zdGFuY2Ugd2lsbCBiZSBmb2N1c2VkLlwiLCAvLyBUT0RPIGdyYW1tYXIgY2hlY2sgKHNob3VsZCBzYXkgXCJmYWxsYmFja1wiIGluc3RlYWQgb2YgXCJmYWlsYmFja1wiKVxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJDbGFzczoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyQ2xhc3M6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlckNsb3NlQ2xhc3M6IHtcbiAgICAgICAgICB0eXBlOiAnQ2xhc3NWYWx1ZScsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXJDbG9zZUxhYmVsOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogJ0Nsb3NlJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyQ2xvc2VWYXJpYW50OiB7XG4gICAgICAgICAgdHlwZTogJ0J1dHRvblZhcmlhbnQgfCBudWxsJyxcbiAgICAgICAgICBkZWZhdWx0OiAnc2Vjb25kYXJ5JyxcbiAgICAgICAgfSxcbiAgICAgICAgbm9CYWNrZHJvcDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgICBub0Nsb3NlT25CYWNrZHJvcDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIG5vQ2xvc2VPbkVzYzoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIG5vSGVhZGVyOiB7XG4gICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLCAvLyBUT0RPIGl0ZW0gbm90IGluIHN0cmluZyBmb3JtYXRcbiAgICAgICAgfSxcbiAgICAgICAgbm9IZWFkZXJDbG9zZToge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIG5vVHJhcDoge1xuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdEaXNhYmxlcyB0aGUgZm9jdXMgdHJhcCBmZWF0dXJlJyxcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VtZW50OiB7XG4gICAgICAgICAgdHlwZTogJ1BsYWNlbWVudCcsXG4gICAgICAgICAgZGVmYXVsdDogJ3N0YXJ0JyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgIHR5cGU6ICdCcmVha3BvaW50JyxcbiAgICAgICAgfSxcbiAgICAgICAgc2hhZG93OiB7XG4gICAgICAgICAgdHlwZTogJ1NpemUgfCBib29sZWFuJyxcbiAgICAgICAgICBkZWZhdWx0OiBmYWxzZSwgLy8gVE9ETyBpdGVtIG5vdCBpbiBzdHJpbmcgZm9ybWF0XG4gICAgICAgIH0sXG4gICAgICAgIHRlbGVwb3J0RGlzYWJsZWQ6IHtcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsIC8vIFRPRE8gaXRlbSBub3QgaW4gc3RyaW5nIGZvcm1hdFxuICAgICAgICB9LFxuICAgICAgICB0ZWxlcG9ydFRvOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZyB8IFJlbmRlcmVyRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQnLFxuICAgICAgICAgIGRlZmF1bHQ6ICdib2R5JyxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCT2ZmY2FudmFzUHJvcHM+LFxuICAgICAgZW1pdHM6IHtcbiAgICAgICAgLi4uc2hvd0hpZGVFbWl0cyxcbiAgICAgICAgJ3VwZGF0ZTptb2RlbC12YWx1ZSc6IHtcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICAndXBkYXRlOm1vZGVsLXZhbHVlJzoge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLCAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgfSxcbiAgICAgICAgJ2JyZWFrcG9pbnQnOiB7XG4gICAgICAgICAgYXJnczoge1xuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ0J2VHJpZ2dlcmFibGVFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnVGhlIGV2ZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcGVuZWQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1doZXRoZXIgb3Igbm90IHRoZSBvZmZjYW52YXMgaXMgYWJvdmUgdGhlIGJyZWFrcG9pbnQgYW5kIGlzIG9wZW4gYnkgaXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkVtaXR0ZWQgd2hlbiB0aGUgb2ZmY2FudmFzJyBicmVha3BvaW50IHN0YXRlIGNoYW5nZXNcIiwgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgc2F5IFwib2ZmY2FudmFzJ3NcIiBpbnN0ZWFkIG9mIFwib2ZmY2FudmFzJ1wiKVxuICAgICAgICB9LFxuICAgICAgICAnY2xvc2UnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLCAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICB0eXBlOiAnQnZUcmlnZ2VyYWJsZUV2ZW50JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2VzYyc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJywgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIHR5cGU6ICdCdlRyaWdnZXJhYmxlRXZlbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnYmFja2Ryb3AnOiB7XG4gICAgICAgICAgYXJnczogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgICdjYW5jZWwnOiB7XG4gICAgICAgICAgYXJnczogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgIH0sXG4gICAgICAgICdvayc6IHtcbiAgICAgICAgICBhcmdzOiB1bmRlZmluZWQsXG4gICAgICAgICAgZGVzY3JpcHRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgIH0gc2F0aXNmaWVzIEVtaXRSZWNvcmQ8a2V5b2YgQk9mZmNhbnZhc0VtaXRzIHwgJ3VwZGF0ZTptb2RlbC12YWx1ZSc+LFxuICAgICAgc2xvdHM6IHtcbiAgICAgICAgJ3RpdGxlJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJywgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHZpc2libGU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlbWVudDoge1xuICAgICAgICAgICAgICB0eXBlOiBcIid0b3AnIHwgJ2JvdHRvbScgfCAnc3RhcnQnIHwgJ2VuZCdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWRlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICcodHJpZ2dlcj86IHN0cmluZykgPT4gdm9pZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdkZWZhdWx0Jzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJywgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHZpc2libGU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlbWVudDoge1xuICAgICAgICAgICAgICB0eXBlOiBcIid0b3AnIHwgJ2JvdHRvbScgfCAnc3RhcnQnIHwgJ2VuZCdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWRlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICcodHJpZ2dlcj86IHN0cmluZykgPT4gdm9pZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdiYWNrZHJvcCc6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICAgIHNjb3BlOiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgJ2Zvb3Rlcic6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJycsIC8vIFRPRE8gbWlzc2luZyBkZXNjcmlwdGlvblxuICAgICAgICAgIHNjb3BlOiB7XG4gICAgICAgICAgICB2aXNpYmxlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgICAgdHlwZTogXCIndG9wJyB8ICdib3R0b20nIHwgJ3N0YXJ0JyB8ICdlbmQnXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlkZToge1xuICAgICAgICAgICAgICB0eXBlOiAnKHRyaWdnZXI/OiBzdHJpbmcpID0+IHZvaWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICAnaGVhZGVyJzoge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJywgLy8gVE9ETyBtaXNzaW5nIGRlc2NyaXB0aW9uXG4gICAgICAgICAgc2NvcGU6IHtcbiAgICAgICAgICAgIHZpc2libGU6IHtcbiAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYWNlbWVudDoge1xuICAgICAgICAgICAgICB0eXBlOiBcIid0b3AnIHwgJ2JvdHRvbScgfCAnc3RhcnQnIHwgJ2VuZCdcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaWRlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICcodHJpZ2dlcj86IHN0cmluZykgPT4gdm9pZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgICdoZWFkZXItY2xvc2UnOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICcnLCAvLyBUT0RPIG1pc3NpbmcgZGVzY3JpcHRpb25cbiAgICAgICAgICBzY29wZToge30sXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJPZmZjYW52YXNTbG90cz4sXG4gICAgfSxcbiAgfSksXG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBR08sSUFBTSxnQkFBZ0I7QUFBQSxFQUMzQixRQUFRO0FBQUEsSUFDTixhQUNFO0FBQUEsSUFDRixNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDTCxNQUFN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
