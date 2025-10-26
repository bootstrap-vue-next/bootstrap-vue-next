---
description: 'File input control that supports single and multiple file modes, drag and drop, file type restrictions, and directory selection with contextual state feedback.'
---

<BAlert :model-value="true" variant="danger">
The current variation is subject to change pre v1.0. The implementation may change to become closer to the Bootstrap-vue implementation based on feedback <BLink target="_blank" href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/discussions/1213" rel="noopener">vote here</BLink>
</BAlert>

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

## Directory Mode

By adding the `directory` prop, a user can select directories instead of files

<BAlert variant="danger" :model-value="true">
  Directory mode is a non-standard attribute in the HTML spec. All major browsers have chosen too support it, but it may not function correctly for browsers that have chosen not to implement it. Use with caution
</BAlert>

### Example to be Written

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

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/formFile.data'
</script>
