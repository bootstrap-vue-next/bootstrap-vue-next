---
description: 'File input control that supports single and multiple file modes, drag and drop, file type restrictions, and directory selection with contextual state feedback.'
---

## Overview

BFormFile provides a customized, cross-browser consistent file input control with support for:

- Single and multiple file selection
- Drag and drop file upload
- Directory selection (browser support required)
- File type filtering via accept attribute
- Custom text and placeholders
- Bootstrap validation states

## Single File Mode

The default behavior is single file mode. While using single file mode the `modelValue` will be a single `File` object

<<< DEMO ./demo/FormFileSingle.vue

## Multiple File Mode

To toggle multiple file mode, simply set the `multiple` prop to `true`. While in multiple file mode, the `modelValue` will be a `File[]`, even if only one file is selected

<<< DEMO ./demo/FormFileMultiple.vue

## Limiting to certain file types

You can limit the file types by setting the `accept` prop. The `accept` attribute is a csv list of acceptable types. This can be a `string` or `string[]`. If a `string[]` is inputted, it simply gets joined as a csv list

<<< DEMO ./demo/FormFileAccept.vue

## Drag and Drop Support

Drag and drop support uses the browsers default behavior. You can explicitly disable drag and drop by using the `noDrop` prop

<<< DEMO ./demo/FormFileNoDrop.vue

## Sizing

You can modify the size of the form control by using the `size` prop

<<< DEMO ./demo/FormFileSizing.vue#template{vue-html}

## Label

You can add a label above the input by using the `label` prop or the `label` slot

<<< DEMO ./demo/FormFileLabel.vue#template{vue-html}

## Customizing Text and Placeholders

### Browse Button Text

Customize the browse button text using the `browseText` prop (custom mode only):

<<< DEMO ./demo/FormFileCustomText.vue

### Drop Zone Placeholders

Customize the placeholder text shown in different states (custom mode only):

<<< DEMO ./demo/FormFileDropPlaceholder.vue

## File Name Formatting

Use the `fileNameFormatter` prop to customize how selected file names are displayed (custom mode only):

<<< DEMO ./demo/FormFileFormatter.vue

## Plain Mode

Use the `plain` prop to render a native HTML file input without custom styling. This provides 100% backward compatibility with the original implementation:

<<< DEMO ./demo/FormFilePlain.vue

<BAlert variant="info" :model-value="true">
  Plain mode uses the native browser file input, which has limited styling options but provides maximum compatibility. Custom mode (default) provides drag-and-drop support and better visual customization.
</BAlert>

## Directory Mode

By adding the `directory` prop, a user can select directories instead of files.

<BAlert variant="danger" :model-value="true">
  Directory mode uses the non-standard `webkitdirectory` attribute. Supported browsers include Chrome, Edge, Safari, Opera, and Firefox (desktop). Mobile browser support varies. The component gracefully degrades to standard file selection if unsupported. Use with caution in production environments requiring broad compatibility.
</BAlert>

<<< DEMO ./demo/FormFileDirectory.vue

### Accessing File Paths

When using `directory` mode, each `File` object includes the standard `webkitRelativePath` property containing the relative path from the selected directory root:

<<< FRAGMENT ./demo/FormFileDirectoryPathExample.ts

The `webkitRelativePath` property allows you to:

- Display the full file path to users
- Reconstruct directory structure in your application
- Group files by folder
- Preserve directory hierarchy when processing files

::: tip Browser Compatibility
The `webkitRelativePath` property is available in all browsers that support directory selection. It's part of the standard File API when using the `webkitdirectory` attribute.
:::

## Autofocus

If you set the `autofocus` prop to true, the input will be focused when the component is inserted

<<< DEMO ./demo/FormFileAutofocus.vue#template{vue-html}

## Contextual State

You can use the `state` prop to provide visual feedback on the state of the input

<<< DEMO ./demo/FormFileState.vue#template{vue-html}

## Important Notes

### Prop Reactivity

The `accept`, `multiple`, and `directory` props support runtime changes. The file dialog and drop zone will automatically reflect updated values when these props change.

::: info Drop Zone Multiple Limitation
The drop zone's `multiple` validation is set at component initialization and will not update if the `multiple` prop changes at runtime. However, the actual file handling logic respects the current `multiple` prop value, so files will be processed correctly. If you need the drop zone validation to update, remount the component with a new `key` attribute when changing the `multiple` prop.
:::

### Modifying the file selection

With inputs that are of type `file`, the value is strictly `uni-directional`. Meaning that you cannot change the value of the input via JavaScript. You can change the value of the `v-model`, and this will work for an "outside view", however, the actual `input` element will not have its [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) changed. This is for security reasons as a malicious script could attempt to read and steal documents

## Exposed functions

`BFormFile` exposes functions through template refs. See the [Component Reference Exposed section](#comp-reference-bformfile-exposed) for details.
