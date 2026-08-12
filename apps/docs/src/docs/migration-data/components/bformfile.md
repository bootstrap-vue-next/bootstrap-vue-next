---
id: bformfile
title: BFormFile Migration
description: 'Migration notes for BFormFile from BootstrapVue to BootstrapVueNext.'
category: components
components:
  - BFormFile
match:
  - BFormFile
  - useFileDialog
  - useDropZone
  - $path
  - drop-placeholder
  - <BFormFile>
tags:
  - migration
  - components
  - bformfile
safeRewrite: true
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# BFormFile Migration

## Summary

Migration notes for BFormFile from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BFormFile

## Breaking Change

BootstrapVueNext has completely rewritten `BFormFile` using [VueUse](https://vueuse.org/) composables (`useFileDialog` and `useDropZone`), resulting in a more modern, maintainable implementation.

The `capture` prop no longer accepts a boolean value. Modern browser specifications require `capture` to be either `'user'` (for front-facing camera) or `'environment'` (for rear-facing camera).

### Directory Mode

The `noTraverse` prop has been **removed**. BootstrapVueNext directory mode always returns files as a flat array, which matches the behavior of the browser's native file input with the `webkitdirectory` attribute.

When using `directory` mode, each `File` object includes the standard `webkitRelativePath` property containing the relative path from the selected directory root. This is a native browser property that's automatically available when using directory selection. This has replaced the deprecated `$path` property.

**Example:**

<<< FRAGMENT ../../demo/FormFileDirectoryPathExample.ts

The `webkitRelativePath` property allows you to reconstruct directory structure or group files by folder as needed.

**BootstrapVue code:**

<<< FRAGMENT ../../demo/FormFileDirectoryBSV.vue#template{vue-html}

**BootstrapVueNext equivalent:**

<<< DEMO ../../components/demo/FormFileDirectoryMigration.vue

### Drop Placeholder Slot

The `drop-placeholder` slot no longer receives a `dropAllowed` scope property. VueUse's `useDropZone` handles file type validation internally, and we don't have access to its validation state. The slot now simply displays the drop placeholder text.

The `noDropPlaceholder` prop has been removed as it was only used when `dropAllowed` was `false`, which never occurred.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.

## Safe Automatic Rewrite

Yes. This entry is mostly mechanical, but review the result when surrounding behavior or adjacent props may affect the final markup.

## Related Migrations

- None
