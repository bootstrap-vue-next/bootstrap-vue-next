---
description: '`useBreadcrumb` is a helper utility for the `BBreadcrumb` component. It provides a **globally** changable context so you can modify a breadcrumb. It should be noted that the breadcrumb component will automatically use the global context by default. `useBreadcrumb` is shared globally, one modification to the state will be recognized throughout the app. As noted in the BBreadcrumb documentation, the items prop for the component takes precedence over `useBreadcrumb`'
---

# useBreadcrumb

<PageHeader base="githubComposablesDirectory" />

<UsePluginAlert />

## Demo

<<< DEMO ./demo/UseBreadcrumbBasic.vue

You can also pass in an id to the component and composable to create a unique breadcrumb trail.

<<< DEMO ./demo/UseBreadcrumbWithId.vue
