---
description: 'An input with a dropdown suggestions list. Users can type freely to filter options, and the value is set when an item is selected from the list. Supports single and multiple selection, async fetching, and tags mode.'
---

## Overview

`BAutocomplete` provides a text input with a dropdown list of suggestions. Users can type freely and optionally select a value from the filtered options. It supports single and multiple selection, custom filtering, tags mode, and async data fetching.

<<< DEMO ./demo/AutocompleteOverview.vue

## Options

Options can be provided as a simple array of strings, numbers, or booleans. For objects, use the `text-field` and `value-field` props to specify which properties to use for display text and values.

```ts
// Simple array
const options = ['Apple', 'Banana', 'Cherry']

// Object array with custom fields
const options = [
  { id: 1, label: 'Apple' },
  { id: 2, label: 'Banana' },
]
// Use text-field="label" and value-field="id"
```

## Multiple selection with tags

Enable multiple selection by setting the `multiple` prop. Add the `tags` prop to render selected values as removable tag badges.

In multiple mode, `v-model` is an array of selected values. Press <kbd>Backspace</kbd> twice with an empty search input to remove the last selected tag.

<<< DEMO ./demo/AutocompleteMultiple.vue

## Custom filter function

By default, `BAutocomplete` filters options by checking if the option text contains the search term (case-insensitive). You can override this with the `filter-function` prop.

The filter function receives the normalized options array and the current search term, and should return the filtered array.

<<< DEMO ./demo/AutocompleteCustomFilter.vue

## Async fetching with debounce

`BAutocomplete` is well-suited for async search scenarios. Use `v-model:search` to react to the user's input, the `debounce` prop to limit API calls, and an `AbortController` to cancel stale requests.

Key points for async usage:

- **`v-model:search`** — Bind to the raw search text so you can watch it and trigger fetches
- **`debounce`** — Set to a number of milliseconds (e.g. `300`) to delay emitting search updates until the user stops typing
- **`filter-function`** — Provide a pass-through function (returning all options) to bypass the built-in client-side filter, since the server handles filtering
- **`AbortController`** — Create a new controller for each request and abort the previous one to avoid race conditions

The following example simulates an async lookup with a local list and a 500ms delay. In a real application, replace the simulated `searchUsers` function with an actual API call.

<<< DEMO ./demo/AutocompleteAsync.vue

## Control sizing

Set the form control text size using the `size` prop to `sm` or `lg` for small or large respectively.

## Contextual states

Bootstrap includes validation styles for `valid` and `invalid` states on most form controls.

To apply one of the contextual state icons on `BAutocomplete`, set the `state` prop to `false`
(for invalid), `true` (for valid), or `null` (no validation state).

When `state` is set to `false`, `aria-invalid` will also be set to `true` automatically.

## Dropdown toggle

By default, a toggle button is rendered as an append to the input. Set the `no-toggle` prop to hide it.

## Teleporting the dropdown

Use the `teleport-to` prop to render the dropdown content in a different location in the DOM (e.g. `body`). This is useful when the autocomplete is inside a container with `overflow: hidden`.

## Accessibility

`BAutocomplete` is built on top of [Reka UI's Combobox](https://reka-ui.com/docs/components/combobox) primitives, which adhere to the [WAI-ARIA Combobox design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).

### Keyboard interactions

| Key                            | Description                                                                 |
| ------------------------------ | --------------------------------------------------------------------------- |
| <kbd>Enter</kbd>               | Selects the currently highlighted item                                      |
| <kbd>ArrowDown</kbd>           | Opens the dropdown (when closed) or moves highlight to the next item        |
| <kbd>ArrowUp</kbd>             | Opens the dropdown (when closed) or moves highlight to the previous item    |
| <kbd>Escape</kbd>              | Closes the dropdown and returns focus to the input                          |
| <kbd>Backspace</kbd> (×2)      | In multiple mode with empty input, removes the last selected tag            |
