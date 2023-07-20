# Docs

The documentation requires a specific style guide for consistency purposes. You can review the styles required here

1. It is recommended to have <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint> rules should be followed strictly -- besides HTML in markdown. Which you can disable in `.vscode/settings.json`
2. Lines should never contain ending periods
3. All components should have a description directly after the first top-level h1. You should always use `>` for these top level descriptions
4. Code _examples_ -- ie those that use code highlighting, should never contain a wrapper div, card, or other element. The _only_ exception is #5
5. Code examples should always contain a `<template>` if they require a `<script>` tag.
6. `<script>` tags should always be `<script setup lang="ts">` in that exact format
7. Rendered Vue code must be directly _before_ the code example from above. This code example must always be wrapped in a `<BCard>`
8. Use PascalCase for components. In Vue code or example code
9. Headers should be APA Title Case <https://capitalizemytitle.com/style/APA/>
10. Props should always be kebab case, ex modelValue => model-value
11. Unordered lists should always use `-`, not any alternative (ie never `*`, `+`)
12. There should not be excess lines in markdown files. Either in `<script>` tags, or between elements in examples. This may affect readability, but assuming you've followed the Vue eslint rulings (read below), then it should be fine

It is recommended to put Vue code that is md into a real Vue file first, let it auto lint so we keep regular styling of Vue examples
