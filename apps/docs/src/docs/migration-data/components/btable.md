---
id: btable
title: BTable Migration
category: components
components:
  - BTable
  - BTbody
  - BThead
  - BTfoot
  - BTr
  - BTh
  - BTd
match:
  - BTable
  - empty-filtered
  - filter-included-fields
  - filter-ignored-fields
  - filter-debounce
  - no-sort-reset
  - must-sort
  - selected-variant
  - selection-variant
  - sort-changed
  - "update:sort-by"
  - sort-direction
  - initial-sort-direction
  - sort-compare
  - multi-sort
  - table-variant
tags:
  - migration
  - components
  - btable
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
replacement:
  clearSelected(): selection.clearSelected()
  selectAll(): selection.selectAll()
  toggleSelectAll(): selection.toggleSelectAll()
  selectedItems: selection.selectedItems
  expandedItems: expansion.expandedItems
manualReviewRequired: true
deprecated:
  - clearSelected()
  - selectAll()
  - toggleSelectAll()
  - selectedItems
  - expandedItems
related:
  - v-html-props
confidence: high
---

# BTable Migration

## Summary

Migration notes for BTable from BootstrapVue to BootstrapVueNext.

## Affected APIs

- BTable
- BTbody
- BThead
- BTfoot
- BTr
- BTh
- BTd

## Breaking Change

See the [v-html](/docs/migration-data/patterns/v-html-props) section for information on deprecation of the `html` prop.

The slot `emptyfiltered` has been renamed to `empty-filtered` for consistency.

The following features are not included in v1:

<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND">
  The <code>no-footer-sorting</code> prop. Footer sorting can be controlled through table structure.
</DeprecatedFeature>

<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND">
  RegExp support for the <code>filter</code> prop. Use the <code>filterFunction</code> prop for complex filtering logic.
</DeprecatedFeature>

<DeprecatedFeature :reason="DeprecationReason.VUE3_BOOTSTRAP5_CHANGES">
  The <code>context-changed</code> event. Use the <code>change</code> event and the exposed <code>displayItems</code> function as demonstrated in [the documentation](/docs/components/table#complete-example).
</DeprecatedFeature>

<DeprecatedFeature :reason="DeprecationReason.VUE3_BOOTSTRAP5_CHANGES">
  The <code>refreshed</code> event. Call the exposed <code>refresh()</code> method and watch <code>change</code> or <code>filtered</code> events.
</DeprecatedFeature>

`filter-included-fields` and `filter-ignored-fields` have been replaced by a single `filterable` prop.

`filter-debounce` has been replaced by `debounce`.

`no-sort-reset` is deprecated. Use `must-sort`. By default, sortability can be reset by clicking (3) times [asc => desc => undefined => asc...]

`selected-variant` has been renamed to `selection-variant` for internal consistency.

Sorting has been significantly reworked. Read the [sorting section](/docs/components/table#sorting) of our documentation. Some specific changes include the following:

- `sort-changed` event is replaced by the `update:sort-by` event.
- `sort-direction` has been renamed `initial-sort-direction` for clarity.
- The sort icons have been changed.
- The internal `sort-compare` routine has been simplified, if you need to customize sorting for localization, the documentation on [custom sort comparers](/docs/components/table#custom-sort-comparers) for details.
- `multi-sort` functionality has been implemented.

`table-variant` is replaced with `variant` for consistency.

The slot scope for `table-colgroup` slot now only contains the `fields` prop, with the `columns` prop removed.

BootstrapVue used the main v-model binding to expose a readonly version of the displayed items. This is deprecated. Instead,
use the exposed function `displayedItems` as demonstrated in [the documentation](/docs/components/table#complete-example).

The semantics of the `row-selected` event have changed. `row-selected` is now emitted for each selected
row and sends the single row's item as it's parameter. There is a new matching event called `row-unselected`
that is emitted for each row that is unselected. There is also a named model `selectedItems` that behaves
like the BSV `row-selected` event, emitting an array of all seleted rows. An example of this is available
in [the documentation](/docs/components/table#row-select-support)

All row-level events (`row-clicked`, `row-dblclicked`, `row-hovered`, `row-unhovered`,
`row-contextmenu`, `row-middle-clicked`) now emit a single payload object with `{item, index, event}`
instead of positional arguments. The `head-clicked` event likewise now emits
`{key, field, event, isFooter}` as one object payload.

BootstrapVue adds utility classes to the `<table>` including `b-table-select-single`,`b-table-select-multi`, and `b-table-select-range`, these have been deprecated, as the functionality should be easily replicated by the developer without adding to the API surface.

<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND">
  The <code>aria-multiselect</code> attribute. Modern screen readers handle table selection adequately.
</DeprecatedFeature>

<DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE">
  The <code>label-sort-clear</code>, <code>label-sort-asc</code>, and <code>label-sort-desc</code> props. These provided hidden text for screen readers to indicate sorting actions. BTable now uses proper ARIA attributes (<code>aria-label</code>, <code>aria-sort</code>) on header elements which provide the same accessibility information in a modern, standards-compliant way.
</DeprecatedFeature>

Helper components (`BTbody`, `BThead`, `BTfoot`, `BTr`, `BTh`, `BTd`) use semantic HTML elements that provide implicit ARIA roles. `BTh` automatically calculates the `scope` attribute based on `colspan` and `rowspan` props.

The `filtered` event has a single argument `Item[]` rather than two arguments with an array and length. The semantics haven't changed.

Heading and data row accessibility is implemented via keyboard navigation (tab and arrow keys for sortable headers and selectable rows) and proper semantic HTML structure.

### Row Expansion (formerly Row Details)

**Terminology changes:** BootstrapVue used "details" terminology for expanding rows, which has been changed to "expansion" for clarity and linguistic correctness. The following changes have been made:

- Scoped slot variable `detailsShowing` is now `expansionShowing`
- Scoped slot function `toggleDetails` is now `toggleExpansion`
- The concept of "detailed items" is now "expanded items"

**v-model instead of object property:** The expansion state is no longer tracked using a property on item objects. Instead, use the `v-model:expanded-items` binding to manage which rows are expanded.

**Before (BootstrapVue):**

<<< DEMO ../../demo/TableRowExpansionBefore.vue

**After (BootstrapVueNext):**

<<< DEMO ../../demo/TableRowExpansionAfter.vue

**Using with Primary Key:**

When using a `primary-key`, expansion state persists across item array updates (like pagination or "Load more"). To set default expanded items with a `primary-key`, you must use the table's template ref `expansion.get()` function:

<<< DEMO ../../demo/TableRowExpansionPrimaryKey.vue

The slot name remains `row-expansion` (changed from `row-details` in earlier versions).

### Template Ref API

**BREAKING: Template ref API reorganized into namespaced structure**

The BTable template ref API has been reorganized from a flat structure to a namespaced structure with `expansion` and `selection` properties. This improves organization and makes it clearer which methods and properties relate to which feature.

**Selection API changes:**

Methods and properties related to row selection are now accessed via `ref.selection.*`:

- `clearSelected()` → `selection.clearSelected()`
- `selectAll()` → `selection.selectAll()`
- `toggleSelectAll()` → `selection.toggleSelectAll()`
- `selectedItems` → `selection.selectedItems`

**Expansion API changes:**

Methods and properties related to row expansion are now accessed via `ref.expansion.*`:

- `expandedItems` → `expansion.expandedItems`
- New methods available: `expansion.expandAll()`, `expansion.collapseAll()`, `expansion.toggleExpandAll()`

**Before (flat structure):**

<<< DEMO ../../demo/TableRefApiBefore.vue

**After (namespaced structure):**

<<< DEMO ../../demo/TableRefApiAfter.vue

**Expansion API example:**

<<< DEMO ../../demo/TableExpansionApi.vue

### Item Provider Functions

To use an items provider, set the `provider` prop to a provider function and leave the
`items` prop undefined (unlike in BootstrapVue, where the `items` prop was overloaded). See
our [documentation](/docs/components/table#using-items-provider-functions) for details.

The items provider function `ctx` parameter now contains `sortBy` array rather than `sortBy` and `sortDesc` fields -
see the [sorting docs](/docs/components/table#sorting) for details

The table prop `api-url` and the items provider function `ctx` parameter `apiUrl` field are both deperecdated
as they are easily replaced by direct management of the api call by the user.

The items provider no longer includes an optional callback parameter, use the async method of calling instead.

### Field Definitions

**BREAKING: `field.key` no longer supports nested paths**

In BootstrapVue, the `field.key` property could be set to nested string paths like `name.firstName` to access nested properties. This is no longer supported. The `key` property must now be a simple string identifier used only for column identification and slot names.

**New `accessor` property for data access**

To access nested or computed data, use the new optional `accessor` property:

- For root-level properties: The `accessor` can be a string matching a root property name (e.g., `'email'`)
- For nested or computed values: The `accessor` should be a function that receives the row item and returns the value
- If omitted, the `key` property is used by default (for root-level properties only)

**Before (BootstrapVue):**

<<< FRAGMENT ../../demo/TableFieldDefinitionsBefore.ts#snippet{typescript}

**After (BootstrapVueNext):**

<<< FRAGMENT ../../demo/TableFieldDefinitionsAfter.ts#snippet{typescript}

**BREAKING: Function signatures changed to use single parameter objects**

The following TableField properties now accept a single parameter object instead of multiple positional parameters:

- `formatter`: Now receives `{value, key, item}` instead of `(value, key, item)`
- `tdAttr`: Now receives `{value, key, item}` instead of `(value, key, item)`
- `thAttr`: Now receives `{value, key, item, type}` instead of `(value, key, item, type)`

**Before (BootstrapVue):**

<<< FRAGMENT ../../demo/TableFieldFunctionsBefore.ts#snippet{typescript}

**After (BootstrapVueNext):**

<<< FRAGMENT ../../demo/TableFieldFunctionsAfter.ts#snippet{typescript}

`formatter` Only the callback function value for this field is implemented, adding the name
of a method in the component is deprecated.

`sortKey` and `sortDirection` are deprecated, use the table's `sortBy` model as documented [here](/docs/components/table#sorting) instead.

`filterByFormatted` is implemented, but does not take a format function as an argument.

## Migration Notes

- Extracted from the canonical BootstrapVue → BootstrapVueNext migration guide.
- Review related migrations for shared prop, event, and slot changes.

## Safe Automatic Rewrite

No. This entry includes behavioral or structural changes and should be reviewed manually before applying automated transforms.

## Related Migrations

- [v-html-props](/docs/migration-data/patterns/v-html-props)

<script setup lang="ts">
import {DeprecationReason} from '../../types/deprecation'
</script>
