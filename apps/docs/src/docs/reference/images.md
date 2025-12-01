---
description: >
  Information on including images in your components. The src prop and blank-src prop work only with absolute
  or fully-qualified URLs. If using project assets as image sources, you'll need to configure your build tool
  to transform asset URLs.
---

The `src` prop and `blank-src` prop, out of the box, works only with absolute or fully-qualified-domain-name URLs. If you are using project assets as image sources, please refer to [Asset URL handling](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#asset-url-handling) to configure Vite to transform asset urls. If using a different build tool, you will need to find the relevant documentation to transform assets.
