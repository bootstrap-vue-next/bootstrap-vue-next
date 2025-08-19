// src/utils/linkProps.ts
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

// src/data/components/link.data.ts
var link_data_default = {
  load: () => ({
    BLink: {
      styleSpec: {kind: 'TAG' /* Tag */, value: 'a, router-link'},
      sourcePath: '/BLink/BLink.vue',
      props: linkProps,
      emits: {
        click: {
          description: 'Emitted when link was clicked',
          // TODO grammar check (should say "the link is clicked" instead of "link was clicked" for consistency)
          args: {
            value: {
              type: 'MouseEvent',
              description: 'Native click event',
            },
          },
        },
      },
      slots: {
        default: {
          description: 'Content to place in the link',
        },
      },
    },
  }),
}
export {link_data_default as default}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3V0aWxzL2xpbmtQcm9wcy50cyIsICJzcmMvZGF0YS9jb21wb25lbnRzL2xpbmsuZGF0YS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9ob21lL3J1bm5lci93b3JrL2Jvb3RzdHJhcC12dWUtbmV4dC9ib290c3RyYXAtdnVlLW5leHQvYXBwcy9kb2NzL3NyYy91dGlsc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvcnVubmVyL3dvcmsvYm9vdHN0cmFwLXZ1ZS1uZXh0L2Jvb3RzdHJhcC12dWUtbmV4dC9hcHBzL2RvY3Mvc3JjL3V0aWxzL2xpbmtQcm9wcy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvdXRpbHMvbGlua1Byb3BzLnRzXCI7aW1wb3J0IHR5cGUge0JMaW5rUHJvcHN9IGZyb20gJ2Jvb3RzdHJhcC12dWUtbmV4dCdcbmltcG9ydCB0eXBlIHtQcm9wUmVjb3JkLCBQcm9wUmVjb3JkV2l0aE9wdGlvbnN9IGZyb20gJy4uL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgbGlua1RvID0gJy9kb2NzL2NvbXBvbmVudHMvbGluaydcblxuZXhwb3J0IGNvbnN0IGxpbmtQcm9wcyA9IHtcbiAgYWN0aXZlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIGB0cnVlYCwgcGxhY2VzIHRoZSBjb21wb25lbnQgaW4gdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGFjdGl2ZSBzdHlsaW5nJyxcbiAgfSxcbiAgYWN0aXZlQ2xhc3M6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiAncm91dGVyLWxpbmstYWN0aXZlJyxcbiAgICBkZXNjcmlwdGlvbjogJ0NvbmZpZ3VyZSB0aGUgYWN0aXZlIENTUyBjbGFzcyBhcHBsaWVkIHdoZW4gdGhlIGxpbmsgaXMgYWN0aXZlLicsXG4gIH0sXG4gIGRpc2FibGVkOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJXaGVuIHNldCB0byBgdHJ1ZWAsIGRpc2FibGVzIHRoZSBsaW5rJ3MgZnVuY3Rpb25hbGl0eS4gU2VlIGFib3ZlIGZvciBkZXRhaWxzIGFuZCBsaW1pdGF0aW9uc1wiLFxuICB9LFxuICBleGFjdEFjdGl2ZUNsYXNzOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3JvdXRlci1saW5rLWV4YWN0LWFjdGl2ZScsXG4gICAgZGVzY3JpcHRpb246ICdDb25maWd1cmUgdGhlIGFjdGl2ZSBDU1MgY2xhc3MgYXBwbGllZCB3aGVuIHRoZSBsaW5rIGlzIGFjdGl2ZSB3aXRoIGV4YWN0IG1hdGNoLicsXG4gIH0sXG4gIGhyZWY6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdEZW5vdGVzIHRoZSB0YXJnZXQgVVJMIG9mIHRoZSBsaW5rIGZvciBzdGFuZGFyZCBhIGxpbmtzJyxcbiAgfSxcbiAgaWNvbjoge1xuICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICBkZXNjcmlwdGlvbjogJ1doZW4gc2V0IHRvIGB0cnVlYCwgc3R5bGVzIGFuIGljb24gYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIGxpbmsgdGV4dCcsXG4gIH0sXG4gIG5vUHJlZmV0Y2g6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnVG8gaW1wcm92ZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgeW91ciBOdXh0LmpzIGFwcGxpY2F0aW9ucywgd2hlbiB0aGUgbGluayB3aWxsIGJlIGRpc3BsYXllZCB3aXRoaW4gdGhlIHZpZXdwb3J0LCBOdXh0LmpzIHdpbGwgYXV0b21hdGljYWxseSBwcmVmZXRjaCB0aGUgY29kZSBzcGxpdHRlZCBwYWdlLiBTZXR0aW5nIGBuby1wcmVmZXRjaGAgd2lsbCBkaXNhYmxlZCB0aGlzIGZlYXR1cmUgZm9yIHRoZSBzcGVjaWZpYyBsaW5rJyxcbiAgICBub3RZZXRJbXBsZW1lbnRlZDogdHJ1ZSxcbiAgfSxcbiAgb3BhY2l0eToge1xuICAgIHR5cGU6IFwiMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGFscGhhIG9wYWNpdHkgb2YgdGhlIGxpbmsgYHJnYmEoKWAgY29sb3IgdmFsdWUnLFxuICB9LFxuICBvcGFjaXR5SG92ZXI6IHtcbiAgICB0eXBlOiBcIjEwIHwgMjUgfCA1MCB8IDc1IHwgMTAwIHwgJzEwJyB8ICcyNScgfCAnNTAnIHwgJzc1JyB8ICcxMDAnXCIsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiAnQ2hhbmdlIHRoZSBhbHBoYSBvcGFjaXR5IG9mIHRoZSBsaW5rIGByZ2JhKClgIGNvbG9yIHZhbHVlIG9uIGhvdmVyJyxcbiAgfSxcbiAgcHJlZmV0Y2g6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1RvIGltcHJvdmUgdGhlIHJlc3BvbnNpdmVuZXNzIG9mIHlvdXIgTnV4dC5qcyBhcHBsaWNhdGlvbnMsIHdoZW4gdGhlIGxpbmsgd2lsbCBiZSBkaXNwbGF5ZWQgd2l0aGluIHRoZSB2aWV3cG9ydCwgTnV4dC5qcyB3aWxsIGF1dG9tYXRpY2FsbHkgcHJlZmV0Y2ggdGhlIGNvZGUgc3BsaXR0ZWQgcGFnZS4gU2V0dGluZyBgcHJlZmV0Y2hgIHRvIGB0cnVlYCBvciBgZmFsc2VgIHdpbGwgb3ZlcndyaXRlIHRoZSBkZWZhdWx0IHZhbHVlIG9mIGByb3V0ZXIucHJlZmV0Y2hMaW5rc2AnLFxuICB9LFxuICBwcmVmZXRjaGVkQ2xhc3M6IHtcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdOb3QgWWV0IEltcGxtZW50ZWQ6IEEgY2xhc3MgdG8gYXBwbHkgdG8gbGlua3MgdGhhdCBoYXZlIGJlZW4gcHJlZmV0Y2hlZC4nLFxuICB9LFxuICBwcmVmZXRjaE9uOiB7XG4gICAgdHlwZTogJ1BhcnRpYWw8e3Zpc2liaWxpdHk6IGJvb2xlYW4sIGludGVyYWN0aW9uOiBib29sZWFufT4nLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiQWxsb3dzIGN1c3RvbSBjb250cm9sIG9mIHdoZW4gdG8gcHJlZmV0Y2ggbGlua3MuIFBvc3NpYmxlIG9wdGlvbnMgYXJlICdpbnRlcmFjdGlvbicgYW5kICd2aXNpYmlsaXR5JyAoZGVmYXVsdCkuXCIsXG4gIH0sXG4gIG5vUmVsOiB7fSxcbiAgcmVsOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNldHMgdGhlICdyZWwnIGF0dHJpYnV0ZSBvbiB0aGUgcmVuZGVyZWQgbGlua1wiLFxuICB9LFxuICByZXBsYWNlOiB7XG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ1NldHRpbmcgcmVwbGFjZSBwcm9wIHdpbGwgY2FsbCByb3V0ZXIucmVwbGFjZSgpIGluc3RlYWQgb2Ygcm91dGVyLnB1c2goKSB3aGVuIGNsaWNrZWQnLFxuICB9LFxuICByb3V0ZXJDb21wb25lbnROYW1lOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ3JvdXRlci1saW5rJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdCb290c3RyYXBWdWUgYXV0byBkZXRlY3RzIGJldHdlZW4gYDxyb3V0ZXItbGluaz5gIGFuZCBgPG51eHQtbGluaz5gLiBTZXQgdGhpcyB0aGlzIHByb3BlcnR5IHRvIGV4cGxpY2l0eSBzZXQgdGhlIG5hbWUgb2YgdGhlIHJvdXRlciBjb21wb25lbnQuJyxcbiAgfSxcbiAgcm91dGVyVGFnOiB7XG4gICAgdHlwZTogJ3N0cmluZycsXG4gICAgZGVmYXVsdDogJ2EnLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSB0YWcgdHlwZSBmb3IgdGhlIGxpbmsnLFxuICB9LFxuICBzdHJldGNoZWQ6IHtcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gICAgZGVmYXVsdDogZmFsc2UsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIldoZW4gc2V0IHRvIGB0cnVlYCwgbWFrZXMgdGhlIGxpbmsncyBgY29udGFpbmluZyBibG9ja2AgY2xpY2thYmxlIHZpYSBhbiBgOjphZnRlcmAgcHNldWRvIGVsZW1lbnRcIixcbiAgfSxcbiAgdGFyZ2V0OiB7XG4gICAgdHlwZTogJ0xpbmtUYXJnZXQnLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogXCJTZXRzIHRoZSAndGFyZ2V0JyBhdHRyaWJ1dGUgb24gdGhlIHJlbmRlcmVkIGxpbmtcIixcbiAgfSxcbiAgdG86IHtcbiAgICB0eXBlOiAnUm91dGVMb2NhdGlvblJhdycsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0Rlbm90ZXMgdGhlIHRhcmdldCByb3V0ZSBvZiB0aGUgbGluay4gV2hlbiBjbGlja2VkLCB0aGUgdmFsdWUgb2YgdGhlIHRvIHByb3Agd2lsbCBiZSBwYXNzZWQgdG8gYHJvdXRlci5wdXNoKClgIGludGVybmFsbHknLFxuICB9LFxuICB1bmRlcmxpbmVPZmZzZXQ6IHtcbiAgICB0eXBlOiBcIjEgfCAyIHwgMyB8ICcxJyB8ICcyJyB8ICczJ1wiLFxuICAgIGRlZmF1bHQ6IHVuZGVmaW5lZCxcbiAgICBkZXNjcmlwdGlvbjogJ0NoYW5nZSB0aGUgZGlzdGFuY2Ugb2YgdGhlIHVuZGVybGluZSBmcm9tIHRoZSBib3R0b20gb2YgdGhlIGxpbmsgdGV4dCcsXG4gIH0sXG4gIHVuZGVybGluZU9mZnNldEhvdmVyOiB7XG4gICAgdHlwZTogXCIxIHwgMiB8IDMgfCAnMScgfCAnMicgfCAnMydcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246ICdDaGFuZ2UgdGhlIGRpc3RhbmNlIG9mIHRoZSB1bmRlcmxpbmUgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBsaW5rIHRleHQgb24gaG92ZXInLFxuICB9LFxuICB1bmRlcmxpbmVPcGFjaXR5OiB7XG4gICAgdHlwZTogXCIwIHwgMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMCcgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0J3MgdGhlIG9wYWNpdHkgb2YgdGhlIGxpbmsncyB1bmRlcmxpbmVcIixcbiAgfSxcbiAgdW5kZXJsaW5lT3BhY2l0eUhvdmVyOiB7XG4gICAgdHlwZTogXCIwIHwgMTAgfCAyNSB8IDUwIHwgNzUgfCAxMDAgfCAnMCcgfCAnMTAnIHwgJzI1JyB8ICc1MCcgfCAnNzUnIHwgJzEwMCdcIixcbiAgICBkZWZhdWx0OiB1bmRlZmluZWQsXG4gICAgZGVzY3JpcHRpb246IFwiU2V0J3MgdGhlIG9wYWNpdHkgb2YgdGhlIGxpbmsncyB1bmRlcmxpbmUgb24gaG92ZXJcIixcbiAgfSxcbiAgdW5kZXJsaW5lVmFyaWFudDoge1xuICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICBkZWZhdWx0OiBudWxsLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSBjb2xvciB2YXJpYW50IGZvciB0aGUgbGluayB1bmRlcmxpbmUgaW5kZXBlbmRlbnRseSBvZiB0aGUgbGluayB0ZXh0JyxcbiAgfSxcbiAgdmFyaWFudDoge1xuICAgIHR5cGU6ICdDb2xvclZhcmlhbnQgfCBudWxsJyxcbiAgICBkZWZhdWx0OiBudWxsLFxuICAgIGRlc2NyaXB0aW9uOiAnU2V0IHRoZSBjb2xvciB2YXJpYW50IGZvciB0aGUgbGluaycsXG4gIH0sXG4gIC8vIFRPRE86IHJlbW92ZSB0aGUgaGFyZC1jb2RlZCBOWUkgcHJvcHMgYmVsb3cgd2hlbiB0aGV5IGFyZSBpbXBsZW1lbnRlZFxufSBhcyBjb25zdCBzYXRpc2ZpZXMgUHJvcFJlY29yZDxrZXlvZiBCTGlua1Byb3BzIHwgJ25vUHJlZmV0Y2gnIHwgJ3ByZWZldGNoJyB8ICdwcmVmZXRjaGVkQ2xhc3MnPlxuXG5leHBvcnQgY29uc3QgbGlua2VkQkxpbmtTZWN0aW9uID0ge1xuICBfb3B0czoge1xuICAgIGxpbmtUbyxcbiAgfSxcbiAgX2RhdGE6IGxpbmtQcm9wcyxcbn0gYXMgY29uc3Qgc2F0aXNmaWVzIFByb3BSZWNvcmRXaXRoT3B0aW9uc1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2xpbmsuZGF0YS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9ydW5uZXIvd29yay9ib290c3RyYXAtdnVlLW5leHQvYm9vdHN0cmFwLXZ1ZS1uZXh0L2FwcHMvZG9jcy9zcmMvZGF0YS9jb21wb25lbnRzL2xpbmsuZGF0YS50c1wiO2ltcG9ydCB7bGlua1Byb3BzfSBmcm9tICcuLi8uLi91dGlscy9saW5rUHJvcHMnXG5pbXBvcnQge3R5cGUgQ29tcG9uZW50UmVmZXJlbmNlLCB0eXBlIEVtaXRSZWNvcmQsIHR5cGUgU2xvdFJlY29yZCwgU3R5bGVLaW5kfSBmcm9tICcuLi8uLi90eXBlcydcbmltcG9ydCB0eXBlIHtCTGlua0VtaXRzLCBCTGlua1Nsb3RzfSBmcm9tICdib290c3RyYXAtdnVlLW5leHQnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbG9hZDogKCk6IENvbXBvbmVudFJlZmVyZW5jZSA9PiAoe1xuICAgIEJMaW5rOiB7XG4gICAgICBzdHlsZVNwZWM6IHtraW5kOiBTdHlsZUtpbmQuVGFnLCB2YWx1ZTogJ2EsIHJvdXRlci1saW5rJ30sXG4gICAgICBzb3VyY2VQYXRoOiAnL0JMaW5rL0JMaW5rLnZ1ZScsXG4gICAgICBwcm9wczogbGlua1Byb3BzLFxuICAgICAgZW1pdHM6IHtcbiAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0VtaXR0ZWQgd2hlbiBsaW5rIHdhcyBjbGlja2VkJywgLy8gVE9ETyBncmFtbWFyIGNoZWNrIChzaG91bGQgc2F5IFwidGhlIGxpbmsgaXMgY2xpY2tlZFwiIGluc3RlYWQgb2YgXCJsaW5rIHdhcyBjbGlja2VkXCIgZm9yIGNvbnNpc3RlbmN5KVxuICAgICAgICAgIGFyZ3M6IHtcbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgIHR5cGU6ICdNb3VzZUV2ZW50JyxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOYXRpdmUgY2xpY2sgZXZlbnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgRW1pdFJlY29yZDxrZXlvZiBCTGlua0VtaXRzPixcbiAgICAgIHNsb3RzOiB7XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbnRlbnQgdG8gcGxhY2UgaW4gdGhlIGxpbmsnLFxuICAgICAgICB9LFxuICAgICAgfSBzYXRpc2ZpZXMgU2xvdFJlY29yZDxrZXlvZiBCTGlua1Nsb3RzPixcbiAgICB9LFxuICB9KSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFLTyxJQUFNLFlBQVk7QUFBQSxFQUN2QixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsYUFBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQ0U7QUFBQSxFQUNKO0FBQUEsRUFDQSxrQkFBa0I7QUFBQSxJQUNoQixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsRUFDZjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxhQUNFO0FBQUEsSUFDRixtQkFBbUI7QUFBQSxFQUNyQjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNaLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULGFBQWE7QUFB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
