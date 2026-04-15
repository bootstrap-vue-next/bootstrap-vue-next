---
description: >
  The <BAspect> component can be used to maintain a minimum responsive aspect ratio for content. When the content is longer than the available height, then the component will expand vertically to fit all content. If the content is shorter than the computed aspect height, the component will ensure a minimum height is maintained.
---

## Overview

The default aspect ratio is 1:1 (ratio of 1), which makes the height always be at least the same as the width. 
The aspect prop can be used to specify an arbitrary aspect ratio (i.e. 1.5) or a ratio as a string such as '16:9' or '4:3'.

The width will always be 100% of the available width in the parent element/component.

<<< DEMO ./demo/AspectOverview.vue#template{vue-html}
