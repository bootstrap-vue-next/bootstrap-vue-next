// src/types/index.ts
var defaultPropSectionSymbol = '_defaultPropSection'

// src/utils/linkProps.ts
var linkTo = '/docs/components/link'
var linkProps = {
  active: {
    type: 'boolean',
    default: void 0,
    description: 'When set to `true`, places the component in the active state with active styling',
  },
  activeClass: {
    type: 'string',
    default: 'router-link-active',
    description: 'Configure the active CSS class applied when the link is active.',
  },
  disabled: {
    type: 'boolean',
    default: false,
    description:
      "When set to `true`, disables the link's functionality. See above for details and limitations",
  },
  exactActiveClass: {
    type: 'string',
    default: 'router-link-exact-active',
    description: 'Configure the active CSS class applied when the link is active with exact match.',
  },
  href: {
    type: 'string',
    default: void 0,
    description: 'Denotes the target URL of the link for standard a links',
  },
  icon: {
    type: 'boolean',
    default: false,
    description: 'When set to `true`, styles an icon at the beginning or end of the link text',
  },
  noPrefetch: {
    type: 'boolean',
    default: false,
    description:
      'To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within the viewport, Nuxt.js will automatically prefetch the code splitted page. Setting `no-prefetch` will disabled this feature for the specific link',
    notYetImplemented: true,
  },
  opacity: {
    type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
    default: void 0,
    description: 'Change the alpha opacity of the link `rgba()` color value',
  },
  opacityHover: {
    type: "10 | 25 | 50 | 75 | 100 | '10' | '25' | '50' | '75' | '100'",
    default: void 0,
    description: 'Change the alpha opacity of the link `rgba()` color value on hover',
  },
  prefetch: {
    type: 'boolean',
    default: void 0,
    description:
      'To improve the responsiveness of your Nuxt.js applications, when the link will be displayed within the viewport, Nuxt.js will automatically prefetch the code splitted page. Setting `prefetch` to `true` or `false` will overwrite the default value of `router.prefetchLinks`',
  },
  prefetchedClass: {
    type: 'string',
    default: void 0,
    description: 'Not Yet Implmented: A class to apply to links that have been prefetched.',
  },
  prefetchOn: {
    type: 'Partial<{visibility: boolean, interaction: boolean}>',
    default: void 0,
    description:
      "Allows custom control of when to prefetch links. Possible options are 'interaction' and 'visibility' (default).",
  },
  noRel: {},
  rel: {
    type: 'string',
    default: void 0,
    description: "Sets the 'rel' attribute on the rendered link",
  },
  replace: {
    type: 'boolean',
    default: false,
    description:
      'Setting replace prop will call router.replace() instead of router.push() when clicked',
  },
  routerComponentName: {
    type: 'string',
    default: 'router-link',
    description:
      'BootstrapVue auto detects between `<router-link>` and `<nuxt-link>`. Set this this property to explicity set the name of the router component.',
  },
  routerTag: {
    type: 'string',
    default: 'a',
    description: 'Set the tag type for the link',
  },
  stretched: {
    type: 'boolean',
    default: false,
    description:
      "When set to `true`, makes the link's `containing block` clickable via an `::after` pseudo element",
  },
  target: {
    type: 'LinkTarget',
    default: void 0,
    description: "Sets the 'target' attribute on the rendered link",
  },
  to: {
    type: 'RouteLocationRaw',
    default: void 0,
    description:
      'Denotes the target route of the link. When clicked, the value of the to prop will be passed to `router.push()` internally',
  },
  underlineOffset: {
    type: "1 | 2 | 3 | '1' | '2' | '3'",
    default: void 0,
    description: 'Change the distance of the underline from the bottom of the link text',
  },
  underlineOffsetHover: {
    type: "1 | 2 | 3 | '1' | '2' | '3'",
    default: void 0,
    description: 'Change the distance of the underline from the bottom of the link text on hover',
  },
  underlineOpacity: {
    type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
    default: void 0,
    description: "Set's the opacity of the link's underline",
  },
  underlineOpacityHover: {
    type: "0 | 10 | 25 | 50 | 75 | 100 | '0' | '10' | '25' | '50' | '75' | '100'",
    default: void 0,
    description: "Set's the opacity of the link's underline on hover",
  },
  underlineVariant: {
    type: 'ColorVariant | null',
    default: null,
    description: 'Set the color variant for the link underline independently of the link text',
  },
  variant: {
    type: 'ColorVariant | null',
    default: null,
    description: 'Set the color variant for the link',
  },
  // TODO: remove the hard-coded NYI props below when they are implemented
}
var linkedBLinkSection = {
  _opts: {
    linkTo,
  },
  _data: linkProps,
}

// src/data/components/breadcrumb.data.ts
var breadcrumb_data_default = {
  load: () => ({
    BBreadcrumb: {
      sourcePath: '/BBreadcrumb/BBreadcrumb.vue',
      props: {
        items: {
          type: 'BreadcrumbItemRaw[]',
          default: void 0,
          description: 'Array of `BreadCrumbItem`s or strings to render. See above for details.',
        },
        id: {
          type: 'string',
          default: void 0,
          description:
            'ID of the breadcrumb component. When combined with the `useBreadcrumb` composable, it will use this id as a breadcrumb trail instead of the global trail.',
        },
      },
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
      },
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
            default: void 0,
            description: 'Text to render in the breadcrumb item',
          },
        },
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
      },
      slots: {
        default: {
          description: 'Content to place in the breadcrumb item',
        },
      },
    },
  }),
}
export {breadcrumb_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3R5cGVzL2luZGV4LnRzIiwgInNyYy91dGlscy9saW5rUHJvcHMudHMiLCAic3JjL2RhdGEvY29tcG9uZW50cy9icmVhZGNydW1iLmRhdGEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy90eXBlcy9pbmRleC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdHlwZXMvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7dXNlU2Nyb2xsc3B5fSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudEl0ZW0gPSBFeGNsdWRlPGtleW9mIENvbXBvbmVudFJlZmVyZW5jZSwgJ2NvbXBvbmVudCcgfCAnc2VjdGlvbnMnPlxuXG5leHBvcnQgaW50ZXJmYWNlIFByb3BSZWZlcmVuY2Uge1xuICB0eXBlPzogc3RyaW5nXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gIGRlZmF1bHQ/OiB1bmtub3duXG4gIG5vdFlldEltcGxlbWVudGVkPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcm9wUmVjb3JkV2l0aE9wdGlvbnMgPSB7XG4gIF9kYXRhOiBQcm9wUmVjb3JkIC8vIEFsbG93cyBmb3IgYSBzaW5nbGUgc2VjdGlvbiBvciBtdWx0aXBsZSBzZWN0aW9uc1xuICBfb3B0cz86IHtsaW5rVG8/OiBzdHJpbmd9XG59XG4vLyBGbGF0IHZhcmlhbnRcbmV4cG9ydCB0eXBlIFByb3BSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgUHJvcFJlZmVyZW5jZT5cbi8vIE11bHRpcGxlIHNlY3Rpb25zIHZhcmlhbnRcbmV4cG9ydCB0eXBlIFByb3BSZWNvcmRXaXRoTXVsdGlwbGVTZWN0aW9ucyA9IHtcbiAgW2RlZmF1bHRQcm9wU2VjdGlvblN5bWJvbF06IFByb3BSZWNvcmQgfCBQcm9wUmVjb3JkV2l0aE9wdGlvbnNcbn0gJiB7W2tleTogc3RyaW5nXTogUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoT3B0aW9uc31cbi8vIE9wdGlvbnMgdmFyaWFudFxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm9wU2VjdGlvblN5bWJvbCA9ICdfZGVmYXVsdFByb3BTZWN0aW9uJ1xuXG5leHBvcnQgdHlwZSBFbWl0QXJnUmVmZXJlbmNlID0gUmVjb3JkPHN0cmluZywge3R5cGU6IHN0cmluZzsgZGVzY3JpcHRpb24/OiBzdHJpbmd9PlxuZXhwb3J0IHR5cGUgRW1pdFJlZmVyZW5jZSA9IHtcbiAgYXJncz86IEVtaXRBcmdSZWZlcmVuY2VcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmdcbn1cbmV4cG9ydCB0eXBlIEVtaXRSZWNvcmQ8VCBleHRlbmRzIHN0cmluZyA9IHN0cmluZz4gPSBSZWNvcmQ8VCwgRW1pdFJlZmVyZW5jZT5cblxuZXhwb3J0IHR5cGUgU2xvdFNjb3BlUmVmZXJlbmNlID0gUmVjb3JkPFxuICBzdHJpbmcsXG4gIHtcbiAgICB0eXBlOiBzdHJpbmcgfCBzdHJpbmdbXVxuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nXG4gICAgbm90WWV0SW1wbGVtZW50ZWQ/OiBib29sZWFuXG4gIH1cbj5cbmV4cG9ydCB0eXBlIFNsb3RSZWZlcmVuY2UgPSB7XG4gIHNjb3BlPzogU2xvdFNjb3BlUmVmZXJlbmNlXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59XG5leHBvcnQgdHlwZSBTbG90UmVjb3JkPFQgZXh0ZW5kcyBzdHJpbmcgPSBzdHJpbmc+ID0gUmVjb3JkPFQsIFNsb3RSZWZlcmVuY2U+XG5cbmV4cG9ydCBjb25zdCBlbnVtIFN0eWxlS2luZCB7XG4gIEJvb3RzdHJhcENsYXNzID0gJ0JPT1RTVFJBUC1DTEFTUycsXG4gIEJzdm5DbGFzcyA9ICdCU1ZOLUNMQVNTJyxcbiAgT3ZlcnJpZGVDbGFzcyA9ICdPVkVSUklERS1DTEFTUycsXG4gIFRhZyA9ICdUQUcnLFxuICBOb25lID0gJ05PTkUnLFxufVxuZXhwb3J0IGludGVyZmFjZSBTdHlsZVNwZWMge1xuICBraW5kOiBTdHlsZUtpbmRcbiAgdmFsdWU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50U2VjdGlvbiA9ICdQcm9wZXJ0aWVzJyB8ICdFdmVudHMnIHwgJ1Nsb3RzJ1xuZXhwb3J0IHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlID0gUmVjb3JkPFxuICBzdHJpbmcsXG4gIHtcbiAgICBzdHlsZVNwZWM/OiBTdHlsZVNwZWNcbiAgICAvKipcbiAgICAgKiBVc2UgcGFja2FnZSBkaXJlY3RvcnkgcmVsYXRpdmUgbGlua3MuIGV4OiBCQWNjb3JkaW9uLnZ1ZSA9PiAvQkFjY29yZGlvbi9CQWNjb3JkaW9uLnZ1ZSAoc2xhc2ggcmVxdWlyZWQpXG4gICAgICpcbiAgICAgKiBJZiBwYXRoIGlzIGVtcHR5IHN0cmluZywgaXQgZGVmYXVsdHMgdG8gdGhlIHBhY2thZ2UgZGlyZWN0b3J5LiBJZiBudWxsLCBpdCBkb2VzIG5vdCByZW5kZXIgdGhlIGJ1dHRvblxuICAgICAqL1xuICAgIHNvdXJjZVBhdGg6IHN0cmluZyB8IG51bGxcbiAgICBwcm9wczogUHJvcFJlY29yZFdpdGhPcHRpb25zIHwgUHJvcFJlY29yZCB8IFByb3BSZWNvcmRXaXRoTXVsdGlwbGVTZWN0aW9uc1xuICAgIGVtaXRzPzogRW1pdFJlY29yZFxuICAgIHNsb3RzPzogU2xvdFJlY29yZFxuICAgIHNlY3Rpb25zPzogQ29tcG9uZW50U2VjdGlvbltdXG4gIH1cbj5cblxuZXhwb3J0IHR5cGUgQ29sbGVjdGl2ZU1lbWJlcnNSZXNwb25zZSA9IHtcbiAgTWVtYmVySWQ6IG51bWJlclxuICBjcmVhdGVkQXQ6IHN0cmluZ1xuICB0eXBlOiBzdHJpbmdcbiAgcm9sZTogc3RyaW5nXG4gIHRpZXI6IHN0cmluZ1xuICBpc0FjdGl2ZTogYm9vbGVhblxuICB0b3RhbEFtb3VudERvbmF0ZWQ6IG51bWJlclxuICBjdXJyZW5jeTogc3RyaW5nXG4gIGxhc3RUcmFuc2FjdGlvbkF0OiBzdHJpbmdcbiAgbGFzdFRyYW5zYWN0aW9uQW1vdW50OiBudW1iZXJcbiAgcHJvZmlsZTogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBjb21wYW55OiBudWxsIHwgbnVsbFxuICBkZXNjcmlwdGlvbjogc3RyaW5nIHwgbnVsbFxuICBpbWFnZTogc3RyaW5nIHwgbnVsbFxuICBlbWFpbDogbnVsbCB8IHN0cmluZ1xuICB0d2l0dGVyOiBudWxsIHwgc3RyaW5nXG4gIGdpdGh1Yjogc3RyaW5nIHwgbnVsbFxuICB3ZWJzaXRlOiBudWxsIHwgc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIENvbGxlY3RpdmVQYXJ0aWFsUmVzcG9uc2UgPSB7XG4gIG1lbWJlcnM6IENvbGxlY3RpdmVNZW1iZXJzUmVzcG9uc2VbXVxufVxuXG5leHBvcnQgdHlwZSBTY3JvbGxzcHlJdGVtID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlU2Nyb2xsc3B5PlsnbGlzdCddWyd2YWx1ZSddWzBdXG5leHBvcnQgdHlwZSBIZWFkZXJJdGVtID0gU2Nyb2xsc3B5SXRlbSAmIHt0YWc6IHN0cmluZzsgbGV2ZWw6IG51bWJlcn1cbmV4cG9ydCB0eXBlIENvbnRlbnRzSXRlbSA9IEhlYWRlckl0ZW0gJiB7Y2hpbGRyZW46IENvbnRlbnRzSXRlbVtdfVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlscy9saW5rUHJvcHMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2xpbmtQcm9wcy50c1wiO2ltcG9ydCB0eXBlIHtCTGlua1Byb3BzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5pbXBvcnQgdHlwZSB7UHJvcFJlY29yZCwgUHJvcFJlY29yZFdpdGhPcHRpb25zfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGxpbmtUbyA9ICcvZG9jcy9jb21wb25lbnRzL2xpbmsnXG5cbmV4cG9ydCBjb25zdCBsaW5rUHJvcHMgPSB7XG4gIGFjdGl2ZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byBgdHJ1ZWAsIHBsYWNlcyB0aGUgY29tcG9uZW50IGluIHRoZSBhY3RpdmUgc3RhdGUgd2l0aCBhY3RpdmUgc3R5bGluZycsXG4gIH0sXG4gIGFjdGl2ZUNsYXNzOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3JvdXRlci1saW5rLWFjdGl2ZScsXG4gICAgZGVzY3JpcHRpb246ICdDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZS4nLFxuICB9LFxuICBkaXNhYmxlZDoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2hlbiBzZXQgdG8gYHRydWVgLCBkaXNhYmxlcyB0aGUgbGluaydzIGZ1bmN0aW9uYWxpdHkuIFNlZSBhYm92ZSBmb3IgZGV0YWlscyBhbmQgbGltaXRhdGlvbnNcIixcbiAgfSxcbiAgZXhhY3RBY3RpdmVDbGFzczoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdyb3V0ZXItbGluay1leGFjdC1hY3RpdmUnLFxuICAgIGRlc2NyaXB0aW9uOiAnQ29uZmlndXJlIHRoZSBhY3RpdmUgQ1NTIGNsYXNzIGFwcGxpZWQgd2hlbiB0aGUgbGluayBpcyBhY3RpdmUgd2l0aCBleGFjdCBtYXRjaC4nLFxuICB9LFxuICBocmVmOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnRGVub3RlcyB0aGUgdGFyZ2V0IFVSTCBvZiB0aGUgbGluayBmb3Igc3RhbmRhcmQgYSBsaW5rcycsXG4gIH0sXG4gIGljb246IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246ICdXaGVuIHNldCB0byBgdHJ1ZWAsIHN0eWxlcyBhbiBpY29uIGF0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSBsaW5rIHRleHQnLFxuICB9LFxuICBub1ByZWZldGNoOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RvIGltcHJvdmUgdGhlIHJlc3BvbnNpdmVuZXNzIG9mIHlvdXIgTnV4dC5qcyBhcHBsaWNhdGlvbnMsIHdoZW4gdGhlIGxpbmsgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSB2aWV3cG9ydCwgTnV4dC5qcyB3aWxsIGF1dG9tYXRpY2FsbHkgcHJlZmV0Y2ggdGhlIGNvZGUgc3BsaXR0ZWQgcGFnZS4gU2V0dGluZyBgbm8tcHJlZmV0Y2hgIHdpbGwgZGlzYWJsZWQgdGhpcyBmZWF0dXJlIGZvciB0aGUgc3BlY2lmaWMgbGluaycsXG4gICAgbm90WWV0SW1wbGVtZW50ZWQ6IHRydWUsXG4gIH0sXG4gIG9wYWNpdHk6IHtcbiAgICB0eXBlOiBcIjEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBhbHBoYSBvcGFjaXR5IG9mIHRoZSBsaW5rIGByZ2JhKClgIGNvbG9yIHZhbHVlJyxcbiAgfSxcbiAgb3BhY2l0eUhvdmVyOiB7XG4gICAgdHlwZTogXCIxMCB8IDI1IHwgNTAgfCA3NSB8IDEwMCB8ICcxMCcgfCAnMjUnIHwgJzUwJyB8ICc3NScgfCAnMTAwJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgYWxwaGEgb3BhY2l0eSBvZiB0aGUgbGluayBgcmdiYSgpYCBjb2xvciB2YWx1ZSBvbiBob3ZlcicsXG4gIH0sXG4gIHByZWZldGNoOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdUbyBpbXByb3ZlIHRoZSByZXNwb25zaXZlbmVzcyBvZiB5b3VyIE51eHQuanMgYXBwbGljYXRpb25zLCB3aGVuIHRoZSBsaW5rIHdpbGwgYmUgZGlzcGxheWVkIHdpdGhpbiB0aGUgdmlld3BvcnQsIE51eHQuanMgd2lsbCBhdXRvbWF0aWNhbGx5IHByZWZldGNoIHRoZSBjb2RlIHNwbGl0dGVkIHBhZ2UuIFNldHRpbmcgYHByZWZldGNoYCB0byBgdHJ1ZWAgb3IgYGZhbHNlYCB3aWxsIG92ZXJ3cml0ZSB0aGUgZGVmYXVsdCB2YWx1ZSBvZiBgcm91dGVyLnByZWZldGNoTGlua3NgJyxcbiAgfSxcbiAgcHJlZmV0Y2hlZENsYXNzOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnTm90IFlldCBJbXBsbWVudGVkOiBBIGNsYXNzIHRvIGFwcGx5IHRvIGxpbmtzIHRoYXQgaGF2ZSBiZWVuIHByZWZldGNoZWQuJyxcbiAgfSxcbiAgcHJlZmV0Y2hPbjoge1xuICAgIHR5cGU6ICdQYXJ0aWFsPHt2aXNpYmlsaXR5OiBib29sZWFuLCBpbnRlcmFjdGlvbjogYm9vbGVhbn0+JyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkFsbG93cyBjdXN0b20gY29udHJvbCBvZiB3aGVuIHRvIHByZWZldGNoIGxpbmtzLiBQb3NzaWJsZSBvcHRpb25zIGFyZSAnaW50ZXJhY3Rpb24nIGFuZCAndmlzaWJpbGl0eScgKGRlZmF1bHQpLlwiLFxuICB9LFxuICBub1JlbDoge30sXG4gIHJlbDoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAncmVsJyBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGxpbmtcIixcbiAgfSxcbiAgcmVwbGFjZToge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdTZXR0aW5nIHJlcGxhY2UgcHJvcCB3aWxsIGNhbGwgcm91dGVyLnJlcGxhY2UoKSBpbnN0ZWFkIG9mIHJvdXRlci5wdXNoKCkgd2hlbiBjbGlja2VkJyxcbiAgfSxcbiAgcm91dGVyQ29tcG9uZW50TmFtZToge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdyb3V0ZXItbGluaycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnQm9vdHN0cmFwVnVlIGF1dG8gZGV0ZWN0cyBiZXR3ZWVuIGA8cm91dGVyLWxpbms+YCBhbmQgYDxudXh0LWxpbms+YC4gU2V0IHRoaXMgdGhpcyBwcm9wZXJ0eSB0byBleHBsaWNpdHkgc2V0IHRoZSBuYW1lIG9mIHRoZSByb3V0ZXIgY29tcG9uZW50LicsXG4gIH0sXG4gIHJvdXRlclRhZzoge1xuICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIGRlZmF1bHQ6ICdhJyxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB0aGUgdGFnIHR5cGUgZm9yIHRoZSBsaW5rJyxcbiAgfSxcbiAgc3RyZXRjaGVkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIG1ha2VzIHRoZSBsaW5rJ3MgYGNvbnRhaW5pbmcgYmxvY2tgIGNsaWNrYWJsZSB2aWEgYW4gYDo6YWZ0ZXJgIHBzZXVkbyBlbGVtZW50XCIsXG4gIH0sXG4gIHRhcmdldDoge1xuICAgIHR5cGU6ICdMaW5rVGFyZ2V0JyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0cyB0aGUgJ3RhcmdldCcgYXR0cmlidXRlIG9uIHRoZSByZW5kZXJlZCBsaW5rXCIsXG4gIH0sXG4gIHRvOiB7XG4gICAgdHlwZTogJ1JvdXRlTG9jYXRpb25SYXcnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdEZW5vdGVzIHRoZSB0YXJnZXQgcm91dGUgb2YgdGhlIGxpbmsuIFdoZW4gY2xpY2tlZCwgdGhlIHZhbHVlIG9mIHRoZSB0byBwcm9wIHdpbGwgYmUgcGFzc2VkIHRvIGByb3V0ZXIucHVzaCgpYCBpbnRlcm5hbGx5JyxcbiAgfSxcbiAgdW5kZXJsaW5lT2Zmc2V0OiB7XG4gICAgdHlwZTogXCIxIHwgMiB8IDMgfCAnMScgfCAnMicgfCAnMydcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGRpc3RhbmNlIG9mIHRoZSB1bmRlcmxpbmUgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBsaW5rIHRleHQnLFxuICB9LFxuICB1bmRlcmxpbmVPZmZzZXRIb3Zlcjoge1xuICAgIHR5cGU6IFwiMSB8IDIgfCAzIHwgJzEnIHwgJzInIHwgJzMnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBkaXN0YW5jZSBvZiB0aGUgdW5kZXJsaW5lIGZyb20gdGhlIGJvdHRvbSBvZiB0aGUgbGluayB0ZXh0IG9uIGhvdmVyJyxcbiAgfSxcbiAgdW5kZXJsaW5lT3BhY2l0eToge1xuICAgIHR5cGU6IFwiMCB8IDEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzAnIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCdzIHRoZSBvcGFjaXR5IG9mIHRoZSBsaW5rJ3MgdW5kZXJsaW5lXCIsXG4gIH0sXG4gIHVuZGVybGluZU9wYWNpdHlIb3Zlcjoge1xuICAgIHR5cGU6IFwiMCB8IDEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzAnIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldCdzIHRoZSBvcGFjaXR5IG9mIHRoZSBsaW5rJ3MgdW5kZXJsaW5lIG9uIGhvdmVyXCIsXG4gIH0sXG4gIHVuZGVybGluZVZhcmlhbnQ6IHtcbiAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB0aGUgY29sb3IgdmFyaWFudCBmb3IgdGhlIGxpbmsgdW5kZXJsaW5lIGluZGVwZW5kZW50bHkgb2YgdGhlIGxpbmsgdGV4dCcsXG4gIH0sXG4gIHZhcmlhbnQ6IHtcbiAgICB0eXBlOiAnQ29sb3JWYXJpYW50IHwgbnVsbCcsXG4gICAgZGVmYXVsdDogbnVsbCxcbiAgICBkZXNjcmlwdGlvbjogJ1NldCB0aGUgY29sb3IgdmFyaWFudCBmb3IgdGhlIGxpbmsnLFxuICB9LFxuICAvLyBUT0RPOiByZW1vdmUgdGhlIGhhcmQtY29kZWQgTllJIHByb3BzIGJlbG93IHdoZW4gdGhleSBhcmUgaW1wbGVtZW50ZWRcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmQ8a2V5b2YgQkxpbmtQcm9wcyB8ICdub1ByZWZldGNoJyB8ICdwcmVmZXRjaCcgfCAncHJlZmV0Y2hlZENsYXNzJz5cblxuZXhwb3J0IGNvbnN0IGxpbmtlZEJMaW5rU2VjdGlvbiA9IHtcbiAgX29wdHM6IHtcbiAgICBsaW5rVG8sXG4gIH0sXG4gIF9kYXRhOiBsaW5rUHJvcHMsXG59IGFzIGNvbnN0IHNhdGlzZmllcyBQcm9wUmVjb3JkV2l0aE9wdGlvbnNcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9icmVhZGNydW1iLmRhdGEudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL2RhdGEvY29tcG9uZW50cy9icmVhZGNydW1iLmRhdGEudHNcIjtpbXBvcnQgdHlwZSB7XG4gIEJCcmVhZGNydW1iSXRlbUVtaXRzLFxuICBCQnJlYWRjcnVtYkl0ZW1Qcm9wcyxcbiAgQkJyZWFkY3J1bWJJdGVtU2xvdHMsXG4gIEJCcmVhZGNydW1iUHJvcHMsXG4gIEJCcmVhZGNydW1iU2xvdHMsXG59IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB7XG4gIHR5cGUgQ29tcG9uZW50UmVmZXJlbmNlLFxuICBkZWZhdWx0UHJvcFNlY3Rpb25TeW1ib2wsXG4gIHR5cGUgRW1pdFJlY29yZCxcbiAgdHlwZSBQcm9wUmVjb3JkLFxuICB0eXBlIFNsb3RSZWNvcmQsXG59IGZyb20gJy4uLy4uL3R5cGVzJ1xuaW1wb3J0IHtsaW5rZWRCTGlua1NlY3Rpb24sIGxpbmtQcm9wc30gZnJvbSAnLi4vLi4vdXRpbHMvbGlua1Byb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxvYWQ6ICgpOiBDb21wb25lbnRSZWZlcmVuY2UgPT4gKHtcbiAgICBCQnJlYWRjcnVtYjoge1xuICAgICAgc291cmNlUGF0aDogJy9CQnJlYWRjcnVtYi9CQnJlYWRjcnVtYi52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICB0eXBlOiAnQnJlYWRjcnVtYkl0ZW1SYXdbXScsXG4gICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQXJyYXkgb2YgYEJyZWFkQ3J1bWJJdGVtYHMgb3Igc3RyaW5ncyB0byByZW5kZXIuIFNlZSBhYm92ZSBmb3IgZGV0YWlscy4nLFxuICAgICAgICB9LFxuICAgICAgICBpZDoge1xuICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICdJRCBvZiB0aGUgYnJlYWRjcnVtYiBjb21wb25lbnQuIFdoZW4gY29tYmluZWQgd2l0aCB0aGUgYHVzZUJyZWFkY3J1bWJgIGNvbXBvc2FibGUsIGl0IHdpbGwgdXNlIHRoaXMgaWQgYXMgYSBicmVhZGNydW1iIHRyYWlsIGluc3RlYWQgb2YgdGhlIGdsb2JhbCB0cmFpbC4nLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCQnJlYWRjcnVtYlByb3BzPixcbiAgICAgIGVtaXRzOiB7fSxcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgKGJyZWFkY3J1bWIgaXRlbXMpIHRvIHBsYWNlIGluIHRoZSBicmVhZGNydW1iJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXBwZW5kOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdDb250ZW50IHRvIGFwcGVuZCB0byB0aGUgYnJlYWRjcnVtYicsXG4gICAgICAgIH0sXG4gICAgICAgIHByZXBlbmQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcHJlcGVuZCB0byB0aGUgYnJlYWRjcnVtYicsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJCcmVhZGNydW1iU2xvdHM+LFxuICAgIH0sXG4gICAgQkJyZWFkY3J1bWJJdGVtOiB7XG4gICAgICBzb3VyY2VQYXRoOiAnL0JCcmVhZGNydW1iL0JCcmVhZGNydW1iSXRlbS52dWUnLFxuICAgICAgcHJvcHM6IHtcbiAgICAgICAgW2RlZmF1bHRQcm9wU2VjdGlvblN5bWJvbF06IHtcbiAgICAgICAgICBhcmlhQ3VycmVudDoge1xuICAgICAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbG9jYXRpb24nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiU2V0cyB0aGUgdmFsdWUgb2YgdGhlICdhcmlhLWN1cnJlbnQnIGF0dHJpYnV0ZSAod2hlbiB0aGUgaXRlbSBpcyB0aGUgYWN0aXZlIGl0ZW0pLiBTdXBwb3J0ZWQgc3RyaW5nIHZhbHVlcyBhcmUgJ2xvY2F0aW9uJywgJ3BhZ2UnLCBvciAndHJ1ZSdcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRleHQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUZXh0IHRvIHJlbmRlciBpbiB0aGUgYnJlYWRjcnVtYiBpdGVtJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9IHNhdGlzZmllcyBQcm9wUmVjb3JkPEV4Y2x1ZGU8a2V5b2YgQkJyZWFkY3J1bWJJdGVtUHJvcHMsIGtleW9mIHR5cGVvZiBsaW5rUHJvcHM+PixcbiAgICAgICAgJ0JMaW5rIHByb3BzJzogbGlua2VkQkxpbmtTZWN0aW9uLFxuICAgICAgfSxcbiAgICAgIGVtaXRzOiB7XG4gICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFbWl0dGVkIHdoZW4gdGhlIGJyZWFkY3J1bWIgaXRlbSBpcyBjbGlja2VkJyxcbiAgICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICB0eXBlOiAnTW91c2VFdmVudCcsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTmF0aXZlIGNsaWNrIGV2ZW50IG9iamVjdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBFbWl0UmVjb3JkPGtleW9mIEJCcmVhZGNydW1iSXRlbUVtaXRzPixcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGJyZWFkY3J1bWIgaXRlbScsXG4gICAgICAgIH0sXG4gICAgICB9IHNhdGlzZmllcyBTbG90UmVjb3JkPGtleW9mIEJCcmVhZGNydW1iSXRlbVNsb3RzPixcbiAgICB9LFxuICB9KSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFzQk8sSUFBTSwyQkFBMkI7OztBQ25CakMsSUFBTSxTQUFTO0FBRWYsSUFBTSxZQUFZO0FBQUEsRUFDdkIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0Esa0JBQWtCO0FBQUEsSUFDaEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLElBQ0YsbUJBQW1CO0FBQUEsRUFDckI7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxjQUFjO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLGlCQUFpQjtBQUFBLElBQ2YsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPLENBQUM7QUFBQSxFQUNSLEtBQUs7QUFBQSxJQUNILE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EscUJBQXFCO0FBQUEsSUFDbkIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFDRTtBQUFBLEVBQ0o7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLElBQUk7QUFBQSxJQUNGLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxJQUNmLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxzQkFBc0I7QUFBQSxJQUNwQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0Esa0JBQWtCO0FBQUEsSUFDaEIsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLHVCQUF1QjtBQUFBLElBQ3JCLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxrQkFBa0I7QUFBQSxJQUNoQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQTtBQUVGO0FBRU8sSUFBTSxxQkFBcUI7QUFBQSxFQUNoQyxPQUFPO0FBQUEsSUFDTDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFDVDs7O0FDcklBLElBQU8sMEJBQVE7QUFBQSxFQUNiLE1BQU0sT0FBMkI7QUFBQSxJQUMvQixhQUFhO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixPQUFPO0FBQUEsUUFDTCxPQUFPO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixTQUFTO0FBQUEsVUFDVCxhQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0EsSUFBSTtBQUFBLFVBQ0YsTUFBTTtBQUFBLFVBQ04sU0FBUztBQUFBLFVBQ1QsYUFDRTtBQUFBLFFBQ0o7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPLENBQUM7QUFBQSxNQUNSLE9BQU87QUFBQSxRQUNMLFNBQVM7QUFBQSxVQUNQLGFBQWE7QUFBQSxRQUNmO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTixhQUFhO0FBQUEsUUFDZjtBQUFBLFFBQ0EsU0FBUztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsaUJBQWlCO0FBQUEsTUFDZixZQUFZO0FBQUEsTUFDWixPQUFPO0FBQUEsUUFDTCxDQUFDLHdCQUF3QixHQUFHO0FBQUEsVUFDMUIsYUFBYTtBQUFBLFlBQ1gsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFlBQ1QsYUFDRTtBQUFBLFVBQ0o7QUFBQSxVQUNBLE1BQU07QUFBQSxZQUNKLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxZQUNULGFBQWE7QUFBQSxVQUNmO0FBQUEsUUFDRjtBQUFBLFFBQ0EsZUFBZTtBQUFBLE1BQ2pCO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxPQUFPO0FBQUEsVUFDTCxhQUFhO0FBQUEsVUFDYixNQUFNO0FBQUEsWUFDSixPQUFPO0FBQUEsY0FDTCxNQUFNO0FBQUEsY0FDTixhQUFhO0FBQUEsWUFDZjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1AsYUFBYTtBQUFBLFFBQ2Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
