---
description: 'File input control that supports single and multiple file modes, drag and drop, file type restrictions, and directory selection with contextual state feedback.'
---

::: info NOTE
BootstrapVueNext's implementation of `BFormFile` is built on the browser native control with Bootstrap 5 styling. This is a significant
departure from BootstrapVue. Please check the [migration documentation] for details and [contribute to the discussion](https://github.com/bootstrap-vue-next/bootstrap-vue-next/discussions/1213)
if you would like to see additional features.
:::

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

## File Name Display

By default, the file input doesn't show the selected file names externally. While the native browser control displays the file name for single file selection, it only shows a count (e.g., "3 files") in multiple file mode. You can enable external file name display using the `showFileNames` prop to show all selected file names, which is particularly useful in multiple file mode. You can also customize the placeholder text shown when no files are selected.

<<< DEMO ./demo/FormFileShowNames.vue

## Custom File Name Formatting

Use the `fileNameFormatter` prop to customize how file names are displayed. The formatter receives an array of File objects and should return a string.

<<< DEMO ./demo/FormFileFormatter.vue

## Drag and Drop Feedback

When dragging files over the input, visual feedback is automatically shown. You can customize the messages displayed during drag operations using the `dropPlaceholder` and `noDropPlaceholder` props.

<<< DEMO ./demo/FormFileDragFeedback.vue

## Scoped Slots

For complete customization, use the scoped slots to control exactly how file information and drag feedback are displayed.

- **`file-name`** - Customize the file name display with access to files, names, and filesTraversed
- **`placeholder`** - Custom content when no files are selected
- **`drop-placeholder`** - Custom drag overlay content with dropAllowed state

<<< DEMO ./demo/FormFileSlots.vue

## Directory Mode

By adding the `directory` prop, a user can select directories instead of files.

::: warning CAUTION
Directory mode is a <em>non-standard</em> feature. While being supported by all modern browsers, it should not be relied upon for production environments without thorough testing. Read more on <BLink href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory" target="_blank" rel="noopener">MDN</BLink> and <BLink href="https://caniuse.com/input-file-directory" target="_blank" rel="noopener">Can I use</BLink>.
:::

### Directory Selection

When a directory is selected, the directory and its entire hierarchy of contents are included in the set of selected items. Each file entry includes a special `$path` property containing the relative path of the file.

### Nested vs Flat Structure

By default, files are returned in a nested array structure reflecting the directory hierarchy. You can flatten this structure using the `no-traverse` prop, which returns all files in a single flat array.

<<< DEMO ./demo/FormFileDirectory.vue

### Browser Support and Limitations

**Important considerations for directory mode:**

- **Non-standard feature**: The `webkitdirectory` attribute is not part of the HTML standard, though it's widely supported
- **Modern browser requirement**: Requires browsers with `Promise` support. If targeting older browsers (IE 11), include a Promise polyfill
- **Chromium limitation**: Nested directory structures are currently only fully supported when directories are **dropped** on the file input. When using the "Browse" dialog in Chromium-based browsers, files may be returned in a flattened structure due to a [known Chromium issue](https://bugs.chromium.org/p/chromium/issues/detail?id=138987)
- **Mozilla behavior**: Firefox implements directory selection [the same way as Chromium](https://bugzilla.mozilla.org/show_bug.cgi?id=1326031)
- **Drag and drop recommended**: For best cross-browser support with nested structures, use drag and drop instead of the file browser dialog

### Path Information

Each file object includes a `$path` property:

- Uses the browser's native `File.webkitRelativePath` property when available
- Falls back to just the file name if `webkitRelativePath` is not set

Directory mode works in both custom and plain mode on most modern browsers.

## Autofocus

If you set the `autofocus` prop to true, the input will be focused when the component is inserted

<<< DEMO ./demo/FormFileAutofocus.vue#template{vue-html}

## Contextual State

You can use the `state` prop to provide visual feedback on the state of the input

<<< DEMO ./demo/FormFileState.vue#template{vue-html}

## Modifying the file selection

With inputs that are of type `file`, the value is strictly `uni-directional`. Meaning that you cannot change the value of the input via JavaScript. You can change the value of the `v-model`, and this will work for an "outside view", however, the actual `input` element will not have its [FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList) changed. This is for security reasons as a malicious script could attempt to read and steal documents

## Exposed functions

The BFormFile exposes functions to control the component: `focus(), blur(), reset()`. These are accessed through the [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs).

1. Focus: focuses the file input
2. Blur: blurs the file input focus
3. Reset: Resets the file selection so that no file is selected
