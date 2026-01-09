# Deprecation Warning Audit

**Phase 2 of [Deprecation Warning Refactoring](./DEPRECATION_WARNING_REFACTORING.md)**
**Date:** Generated during Phase 1 completion
**Updated:** January 2026 based on [v1 release comment](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1722#issuecomment-3513251311)
**Purpose:** Comprehensive audit of all existing deprecation, NYI, and NYD warnings in documentation

## Summary Statistics

- **Total NotYetImplemented**: 20+ instances
  - **Replace with DeprecatedFeature (13)**: Components/features officially not planned for v1
  - **Keep as NotYetImplemented (7)**: Features that may be added post-v1
- **Total NotYetDocumented**: 6 instances (5 directives + 1 help banner)
- **Total Inline "deprecated" text**: 20+ instances (all should become DeprecatedFeature)
- **Primary Location**: `migration-guide.md` (majority)
- **Other Locations**: `card.md`, `form-rating.md`, `icons.md`

## v1 Release Component Status

Per [@dwgray's comment](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1722#issuecomment-3513251311):

### Fully Deprecated Components (6)

Will **NOT** be implemented. Use `<DeprecatedFeature reason="INSUFFICIENT_DEMAND">`:

- BCalendar, BFormDatepicker, BFormTimepicker (date/time components)
- BSkeletonIcon, BSkeletonImg (specific skeleton variants)
- BTime

### Technically Deprecated (6)

Functionality exists but components deprecated. Use `<DeprecatedFeature reason="BOOTSTRAP_NATIVE">` or similar:

- BCardImgLazy, BImgLazy (use native `loading="lazy"`)
- BInputGroupAddon, BInputGroupPrepend, BInputGroupAppend (Bootstrap 5 simplified)
- BToaster (covered by BToast)

### Won't Implement for v1 (7)

Can be added post-v1 without breaking changes. Use `<DeprecatedFeature reason="INSUFFICIENT_DEMAND">`:

- BAspect (Bootstrap ratios helper)
- BEmbed (embedding helper)
- BJumbotron (example component)
- BMedia, BMediaAside, BMediaBody (flex utilities cover this)
- BPaginationNav (thin wrapper around BPagination)

## Audit Categories

### ✅ = Remove completely (feature now implemented)

### 🔄 = Replace with DeprecatedFeature component

### ⚠️ = Keep NotYetImplemented (may add post-v1)

### 📝 = Keep NotYetDocumented (needs documentation)

### ❓ = Investigate (requires team decision)

---

## 1. NotYetImplemented Instances (20+)

### migration-guide.md

| Line | Component/Section      | Current Usage                                                                                                | Category | Replacement Reason  | Notes                                                                   |
| ---- | ---------------------- | ------------------------------------------------------------------------------------------------------------ | -------- | ------------------- | ----------------------------------------------------------------------- |
| 216  | BAspect                | `<NotYetImplemented/>`                                                                                       | 🔄       | INSUFFICIENT_DEMAND | Won't implement for v1 - Bootstrap ratios helper can be added later     |
| 267  | BCalendar              | `<NotYetImplemented><BLink href="...">See issue #1860</BLink></NotYetImplemented>`                           | 🔄       | INSUFFICIENT_DEMAND | **Fully deprecated** - will NOT be implemented                          |
| 355  | BDropdown              | `<NotYetImplemented>\`toggleAttrs\`</NotYetImplemented>`                                                     | 🔄       | INSUFFICIENT_DEMAND | `toggleAttrs` prop - insufficient demand for v1                         |
| 397  | BDropdownForm          | `<NotYetImplemented/>`                                                                                       | 🔄       | INSUFFICIENT_DEMAND | `form-class` prop - insufficient demand for v1                          |
| 428  | BFormCheckbox          | `<NotYetImplemented><BLink href="...">See issue #1860</BLink></NotYetImplemented>`                           | 🔄       | INSUFFICIENT_DEMAND | Button mode - relates to BCalendar/date pickers (deprecated)            |
| 505  | BFormFile              | "The following features from BootstrapVue are `<NotYetImplemented/>`:"                                       | 🔄       | INSUFFICIENT_DEMAND | Some BFormFile features - see issue #1213 for details                   |
| 549  | BFormRadio             | `<NotYetImplemented><BLink href="...">See issue #1860</BLink></NotYetImplemented>`                           | 🔄       | INSUFFICIENT_DEMAND | Button mode - relates to BCalendar/date pickers (deprecated)            |
| 602  | BFormTags              | `<NotYetImplemented/>`                                                                                       | 🔄       | INSUFFICIENT_DEMAND | `tag-pills` prop - insufficient demand for v1                           |
| 650  | BFormTimepicker        | `<NotYetImplemented/>`                                                                                       | 🔄       | INSUFFICIENT_DEMAND | **Fully deprecated** - will NOT be implemented                          |
| 876  | BNavbarToggle          | `<NotYetImplemented/>`                                                                                       | 🔄       | INSUFFICIENT_DEMAND | `label-*` props - insufficient demand for v1                            |
| 1019 | BTable                 | "The following are `<NotYetImplemented/>` -"                                                                 | 🔄       | Address later       | **BTable refactor in progress** - VividLemon working on this            |
| 1055 | BTable (accessibility) | `<NotYetImplemented/>` The `aria-multiselect` attribute is not added to `<table>`                            | 🔄       | Address later       | **BTable refactor in progress** - VividLemon working on this            |
| 1056 | BTable (accessibility) | `<NotYetImplemented/>` Automatically adding accessibility attributes `role` and `scope` to helper components | 🔄       | Address later       | **BTable refactor in progress** - VividLemon working on this            |
| 1060 | BTable (accessibility) | `<NotYetImplemented/>` Heading and data row accessibility                                                    | 🔄       | Address later       | **BTable refactor in progress** - VividLemon working on this            |
| 1099 | BTable                 | `<NotYetImplemented>\`tbody-transition-props\` and \`tbody-transition-handlers\`</NotYetImplemented>`        | 🔄       | Address later       | **BTable refactor in progress** - see issue #2145, PR #2836 in progress |
| 1120 | BTime                  | `<NotYetImplemented><BLink href="...">See issue #1860</BLink></NotYetImplemented>`                           | 🔄       | INSUFFICIENT_DEMAND | **Fully deprecated** - will NOT be implemented                          |
| 1271 | BToast                 | `<NotYetImplemented/>`                                                                                       | 🔄       | INSUFFICIENT_DEMAND | `href` prop - insufficient demand for v1                                |
| 1295 | BTransition            | `<NotYetImplemented />`                                                                                      | 🔄       | INSUFFICIENT_DEMAND | Entire component - insufficient demand for v1 (use Vue transitions)     |

### card.md

| Line | Component/Section | Current Usage                                                                                         | Category | Replacement Reason  | Notes                                                           |
| ---- | ----------------- | ----------------------------------------------------------------------------------------------------- | -------- | ------------------- | --------------------------------------------------------------- |
| 176  | BCard (layout)    | `<NotYetImplemented>For the time being, these layout options are not responsive.</NotYetImplemented>` | 🔄       | INSUFFICIENT_DEMAND | Card deck/group responsive layouts - insufficient demand for v1 |

### form-rating.md

| Line | Component/Section  | Current Usage           | Category | Replacement Reason | Notes                                                                       |
| ---- | ------------------ | ----------------------- | -------- | ------------------ | --------------------------------------------------------------------------- |
| 156  | BFormRating (icon) | `<NotYetImplemented />` | 🔄       | MODERN_ALTERNATIVE | `icon-empty` and `icon-half` props - BSVN uses unplugin-icons, see icons.md |
| 162  | BFormRating (icon) | `<NotYetImplemented />` | 🔄       | MODERN_ALTERNATIVE | `icon-clear` prop - BSVN uses unplugin-icons, see icons.md                  |

**Summary:**

- **🔄 Replace with DeprecatedFeature (15)**: 3 fully deprecated, 10 INSUFFICIENT_DEMAND, 2 MODERN_ALTERNATIVE (icon props)
- **🔄 Address later (5)**: All BTable-related items (refactor in progress by VividLemon)
- **Total to modify (20)**: 15 become DeprecatedFeature, 5 wait for BTable refactor

---

## 2. NotYetDocumented Instances (6)

### migration-guide.md

| Line | Component/Section        | Current Usage                            | Category | Action                         | Notes                                                               |
| ---- | ------------------------ | ---------------------------------------- | -------- | ------------------------------ | ------------------------------------------------------------------- |
| 35   | Migration Guide (header) | `<NotYetDocumented :help-only="true" />` | 📝       | Keep                           | Call for contributions - appropriate for v1                         |
| 1275 | v-b-hover                | `<NotYetDocumented type="directive"/>`   | 🔄       | Replace with DeprecatedFeature | NOT implemented. VueUse alternative: `useElementHover()`            |
| 1279 | v-b-popover              | `<NotYetDocumented type="directive"/>`   | 📝       | Keep or link to docs           | Per v1 plan: Implemented but undocumented. Check if docs exist now. |
| 1283 | v-b-scrollspy            | `<NotYetDocumented type="directive"/>`   | 📝       | Keep or link to docs           | Per v1 plan: Implemented but undocumented. Check if docs exist now. |
| 1287 | v-b-toggle               | `<NotYetDocumented type="directive"/>`   | 📝       | Keep or link to docs           | Per v1 plan: Implemented but undocumented. Check if docs exist now. |
| 1291 | v-b-tooltip              | `<NotYetDocumented type="directive"/>`   | 📝       | Keep or link to docs           | Per v1 plan: Implemented but undocumented. Check if docs exist now. |

**Per v1 Release Plan:**

- **v-b-hover**: NOT implemented - VueUse provides `useElementHover()` as modern alternative
- **v-b-visible**: NOT implemented (not in migration guide but should add) - VueUse provides `useElementVisibility()` as modern alternative
- **v-b-popover, v-b-scrollspy, v-b-toggle, v-b-tooltip**: Implemented but "almost completely undocumented"
- **Directive status uncertain**: Team discussing whether to deprecate all directives or improve them

**Recommended Actions:**

1. **v-b-hover**: Replace `<NotYetDocumented>` with `<DeprecatedFeature reason="INSUFFICIENT_DEMAND" what="v-b-hover directive">` and mention VueUse `useElementHover()` alternative
2. **v-b-visible**: Add `<DeprecatedFeature reason="MODERN_ALTERNATIVE" what="v-b-visible directive">` if section exists, mention VueUse `useElementVisibility()` alternative
3. **Other 4 directives**: Check if [@VividLemon's directive documentation effort](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2506) is complete
   - If yes: Remove `<NotYetDocumented>` and link to directive docs
   - If no: Keep `<NotYetDocumented>` until directive docs are done

---

## 3. Additional Components Needing Deprecation Warnings

These components don't currently have warnings but should based on v1 release plan:

### Won't Implement for v1 (7 components)

**Add to migration-guide.md sections:**

| Component      | Reason              | What                             | Notes                                                            |
| -------------- | ------------------- | -------------------------------- | ---------------------------------------------------------------- |
| BAspect        | INSUFFICIENT_DEMAND | `` `BAspect` component ``        | Line 216 - Replace `<NotYetImplemented/>` with DeprecatedFeature |
| BEmbed         | INSUFFICIENT_DEMAND | `` `BEmbed` component ``         | May not have section - add if found                              |
| BJumbotron     | INSUFFICIENT_DEMAND | `` `BJumbotron` component ``     | May not have section - add if found                              |
| BMedia         | INSUFFICIENT_DEMAND | `` `BMedia` component ``         | May not have section - add if found                              |
| BMediaAside    | INSUFFICIENT_DEMAND | `` `BMediaAside` component ``    | May not have section - add if found                              |
| BMediaBody     | INSUFFICIENT_DEMAND | `` `BMediaBody` component ``     | May not have section - add if found                              |
| BPaginationNav | INSUFFICIENT_DEMAND | `` `BPaginationNav` component `` | May not have section - add if found                              |

### Technically Deprecated (1 additional component)

| Component | Reason             | What                       | Notes                                                    |
| --------- | ------------------ | -------------------------- | -------------------------------------------------------- |
| BToaster  | MODERN_ALTERNATIVE | `` `BToaster` component `` | Covered by `BToast` - may not have section, add if found |

**Note:** BCardImgLazy, BImgLazy, and BInputGroup components already have inline deprecation text (see section 4).

---

## 4. Inline "Deprecated" Text (20+)

### migration-guide.md - Should Replace with `<DeprecatedFeature>`

| Line | Text                                                                                                                                           | Category | Reason                    | What                                                                               | Plural | Notes                                                               |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------- | ---------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------- |
| 212  | "The `bootstrap-vue` `show` prop is deprecated, use `model-value` instead."                                                                    | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | `` `show` prop on `BAlert` ``                                                      | false  | Context: BAlert section                                             |
| 220  | "Icon support has been deprecated. Icons support can be implemented using the default slot..."                                                 | 🔄       | `MODERN_ALTERNATIVE`      | "Icon support on `BAvatar`"                                                        | false  | Context: BAvatar section, should reference icons.md                 |
| 249  | "The `block` prop is deprecated. See our [`BButton` documentation]..."                                                                         | 🔄       | `BOOTSTRAP_DEPRECATED`    | `` `block` prop on `BButton` ``                                                    | false  | Context: BButton section, includes link to docs                     |
| 257  | "The `content` and `text-variant` props have been deprecated since Bootstrap 5 moved to using an embedded svg..."                              | 🔄       | `BOOTSTRAP_DEPRECATED`    | `` `content` and `text-variant` props on `BButtonClose` ``                         | true   | Context: BButtonClose section                                       |
| 275  | "Similarly, the `top`, `bottom`, `left`, and `right` props on `BCardImg` are deprecated..."                                                    | 🔄       | `BOOTSTRAP_DEPRECATED`    | `` `top`, `bottom`, `left`, and `right` props on `BCardImg` ``                     | true   | Context: BCard section                                              |
| 283  | "props are deprecated and replaced by the generalized props..."                                                                                | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | "Component-specific variant props (e.g. `footer-bg-variant`)"                      | true   | Context: BCard section, follows "Card sub-component specific..."    |
| 310  | "The `accordion` prop is deprecated..."                                                                                                        | 🔄       | `BOOTSTRAP_DEPRECATED`    | `` `accordion` prop on `BCollapse` ``                                              | false  | Context: BCollapse section, mentions BootstrapVue/Bootstrap4        |
| 333  | "The `block` prop is deprecated. See our [`BDropdown` documentation]..."                                                                       | 🔄       | `BOOTSTRAP_DEPRECATED`    | `` `block` prop on `BDropdown` ``                                                  | false  | Context: BDropdown section                                          |
| 339  | "The `html` prop has been deprecated, use the `button-content`."                                                                               | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | `` `html` prop on `BDropdown` ``                                                   | false  | Context: BDropdown section                                          |
| 341  | "$root instance events `bv::dropdown::hide` and `bv::dropdown::show` are deprecated."                                                          | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | "`$root` events `bv::dropdown::hide` and `bv::dropdown::show`"                     | true   | Context: BDropdown section                                          |
| 343  | "The boolean argument to control returning focus to the toggle button on the `hide` scoped property... is deprecated."                         | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | "Boolean argument on `hide` scoped property"                                       | false  | Context: BDropdown section, very specific                           |
| 390  | "`inline` is deprecated, see the [BForm](#bform) migration information..."                                                                     | 🔄       | `BOOTSTRAP_DEPRECATED`    | `` `inline` prop on `BDropdownForm` ``                                             | false  | Context: BDropdownForm section                                      |
| 393  | "The `disabled` prop is deprecated, set the disabled prop on individual components..."                                                         | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | `` `disabled` prop on `BDropdownForm` ``                                           | false  | Context: BDropdownForm section                                      |
| 492  | "`trim`, `lazy`, or `number` properties have been deprecated. We support the native modifiers..."                                              | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | `` `trim`, `lazy`, and `number` props on `BFormInput` ``                           | true   | Context: BFormInput section                                         |
| 514  | "The following icon-related props from BootstrapVue have been deprecated:"                                                                     | 🔄       | `MODERN_ALTERNATIVE`      | "Icon-related props on form components"                                            | true   | Context: BFormInput/etc, should reference icons.md, introduces list |
| 556  | "`BImgLazy` and `BCardImgLazy` are deprecated."                                                                                                | 🔄       | `BOOTSTRAP_NATIVE`        | `` `BImgLazy` and `BCardImgLazy` components ``                                     | true   | Context: BImg section, use native loading="lazy"                    |
| 566  | "Due to this change `<BInputGroupAppend>`, `<BInputGroupPrepend>`, and `<BInputGroupAddon>` are no longer necessary and have been deprecated." | 🔄       | `BOOTSTRAP_DEPRECATED`    | `` `BInputGroupAppend`, `BInputGroupPrepend`, and `BInputGroupAddon` components `` | true   | Context: BInputGroup section                                        |
| 596  | "`trim`, `lazy`, or `number` properties have been deprecated. We support the native modifiers..."                                              | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | `` `trim`, `lazy`, and `number` props on `BFormTextarea` ``                        | true   | Context: BFormTextarea section, duplicate of line 492               |
| 657  | "`footer-tag` and `header-tag` are deprecated, use the `footer` and `title` slots instead..."                                                  | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | `` `footer-tag` and `header-tag` props on `BModal` ``                              | true   | Context: BModal section                                             |
| 662  | "**$bvModal instance methods are deprecated:**"                                                                                                | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | "`$bvModal` instance methods"                                                      | true   | Context: BModal section, introduces list                            |
| 669  | "**$root event system is deprecated:**"                                                                                                        | 🔄       | `VUE3_BOOTSTRAP5_CHANGES` | "`$root` modal event system"                                                       | false  | Context: BModal section, introduces list                            |

### icons.md

| Line | Text                                                                                           | Category | Reason               | What                                | Plural | Notes                                            |
| ---- | ---------------------------------------------------------------------------------------------- | -------- | -------------------- | ----------------------------------- | ------ | ------------------------------------------------ |
| 3    | "The icon components from BootstrapVue are deprecated. While migrating to BootstrapVueNext..." | 🔄       | `MODERN_ALTERNATIVE` | "Icon components from BootstrapVue" | true   | Entire paragraph explaining why and alternatives |

---

## 4. Old Format `<DeprecatedFeature>` Usages

### migration-guide.md

| Line | Usage                      | Category | Notes                                                  |
| ---- | -------------------------- | -------- | ------------------------------------------------------ |
| 48   | `<DeprecatedFeatureTest/>` | ✅       | This is the test component - keep for testing purposes |

**Result:** No old format usages found that need migration. The one instance is the test component itself.

---

## 5. Old Format `<DeprecatedFeature>` Usages

### migration-guide.md

| Line | Usage                      | Category | Notes                                                  |
| ---- | -------------------------- | -------- | ------------------------------------------------------ |
| 48   | `<DeprecatedFeatureTest/>` | ✅       | This is the test component - keep for testing purposes |

**Result:** No old format usages found that need migration. The one instance is the test component itself.

---

## 6. Recommended Actions

### Phase 3: Immediate Actions

#### 3.1 Replace NotYetImplemented with DeprecatedFeature (15 instances)

Replace these `<NotYetImplemented>` with `<DeprecatedFeature reason="INSUFFICIENT_DEMAND">`:

**Fully Deprecated Components (3):**

1. **Line 267** - BCalendar: Replace `<NotYetImplemented><BLink...>`
2. **Line 650** - BFormTimepicker: Replace `<NotYetImplemented/>`
3. **Line 1120** - BTime: Replace `<NotYetImplemented><BLink...>`

**Props with Insufficient Demand (10):** 4. **Line 355** - BDropdown `toggleAttrs` prop 5. **Line 397** - BDropdownForm `form-class` prop 6. **Line 428** - BFormCheckbox button mode (related to deprecated date components) 7. **Line 505** - BFormFile features 8. **Line 549** - BFormRadio button mode (related to deprecated date components) 9. **Line 602** - BFormTags `tag-pills` prop 10. **Line 876** - BNavbarToggle `label-*` props 11. **Line 1271** - BToast `href` prop 12. **Line 1295** - BTransition component 13. **Line 176 (card.md)** - BCard layout responsive options

**Props with Modern Alternatives (2):** 14. **Line 156 (form-rating.md)** - BFormRating `icon-empty` and `icon-half` props (use unplugin-icons, reference icons.md) 15. **Line 162 (form-rating.md)** - BFormRating `icon-clear` prop (use unplugin-icons, reference icons.md)

#### 3.2 Replace Inline Deprecation Text (21+ instances)

Replace inline "deprecated" prose in `migration-guide.md` and `icons.md` with `<DeprecatedFeature>` components:

- Use appropriate `reason` enum values (see table in section 4)
- Add descriptive `what` prop text (preserve backticks for code)
- Set `plural` correctly based on grammar (is/are)
- Move explanatory text into component slot
- **For icon-related deprecations:** Reference [icons.md](/docs/icons) to guide users to unplugin-icons solution

#### 3.3 Handle Directive Documentation (5 instances)

**v-b-hover (line 1275):**

- Replace `<NotYetDocumented type="directive"/>` with `<DeprecatedFeature reason="INSUFFICIENT_DEMAND" what="\`v-b-hover\` directive">`
- Mention VueUse alternative: `useElementHover()` composable

**v-b-visible (if section exists):**

- Add `<DeprecatedFeature reason="MODERN_ALTERNATIVE" what="\`v-b-visible\` directive">`
- Mention VueUse alternative: `useElementVisibility()` composable

**v-b-popover, v-b-scrollspy, v-b-toggle, v-b-tooltip (lines 1279, 1283, 1287, 1291):**

- Check if [@VividLemon's directive documentation](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2506) is complete
- If YES: Remove `<NotYetDocumented>` and link to new directive docs
- If NO: Keep `<NotYetDocumented>` warnings for now

#### 3.4 Add Missing Component Deprecation Warnings (7+ components)

Search for and add `<DeprecatedFeature>` warnings to these component sections if they exist in migration-guide.md:

- BEmbed, BJumbotron, BMedia, BMediaAside, BMediaBody, BPaginationNav (all `INSUFFICIENT_DEMAND`)
- BToaster (`MODERN_ALTERNATIVE` - covered by BToast)

### Keep As-Is / Address Later

- **5 BTable `<NotYetImplemented>` instances** - VividLemon actively refactoring, address after refactor complete
- **Migration guide header** `<NotYetDocumented :help-only="true" />` - community contribution call

---

## 7. Migration Examples

### Example 1: Simple Single Prop

**Before:**

```markdown
The `block` prop is deprecated. See our [`BButton` documentation](/docs/components/button#block-level-buttons)
and [Bootstrap's documentation](https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons) for
details.
```

**After:**

```vue
<DeprecatedFeature
  :reason="DeprecationReason.BOOTSTRAP_DEPRECATED"
  what="`block` prop on `BButton`"
>
  See our <BLink href="/docs/components/button#block-level-buttons">`BButton` documentation</BLink>
  and <BLink href="https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons">Bootstrap's documentation</BLink> for details.
</DeprecatedFeature>
```

### Example 2: Multiple Items (plural=true)

**Before:**

```markdown
The `content` and `text-variant` props have been deprecated since Bootstrap 5 moved to using an
embedded svg for the close icon. See [their migration guide](https://getbootstrap.com/docs/5.3/migration/#close-button-1) for details.
```

**After:**

```vue
<DeprecatedFeature
  :reason="DeprecationReason.BOOTSTRAP_DEPRECATED"
  what="`content` and `text-variant` props on `BButtonClose`"
  :plural="true"
>
  Bootstrap 5 moved to using an embedded SVG for the close icon.
  See <BLink href="https://getbootstrap.com/docs/5.3/migration/#close-button-1">their migration guide</BLink> for details.
</DeprecatedFeature>
```

### Example 3: With Context Explanation

**Before:**

```markdown
Icon support has been deprecated. Icons support can be implemented using the default slot including
either [unplug icons](/docs/icons) or by embedding an `.svg`.
```

**After:**

```vue
<DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE" what="Icon support on `BAvatar`">
  Icons can be implemented using the default slot with either
  <BLink href="/docs/icons">unplug icons</BLink> or by embedding an SVG.
</DeprecatedFeature>
```

### Example 4: Component Won't Be Implemented (INSUFFICIENT_DEMAND)

**Before:**

```markdown
<NotYetImplemented><BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">See issue #1860</BLink></NotYetImplemented>
```

**After:**

```vue
<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND" what="`BCalendar` component">
  This component will not be implemented for v1.
  See <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860#event-14531487213">issue #1860</BLink> for details.
</DeprecatedFeature>
```

### Example 5: Native Browser Feature (BOOTSTRAP_NATIVE)

**Before:**

```markdown
`BImgLazy` and `BCardImgLazy` are deprecated.
```

**After:**

```vue
<DeprecatedFeature
  :reason="DeprecationReason.BOOTSTRAP_NATIVE"
  what="`BImgLazy` and `BCardImgLazy` components"
  :plural="true"
>
  Use the native <code>loading="lazy"</code> attribute on <code>&lt;BImg&gt;</code> and <code>&lt;BCardImg&gt;</code> instead.
</DeprecatedFeature>
```

### Example 6: Directive with VueUse Alternative (INSUFFICIENT_DEMAND)

**Before:**

```markdown
<NotYetDocumented type="directive"/>
```

**After:**

```vue
<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND" what="`v-b-hover` directive">
  This directive will not be implemented. Consider using VueUse's
  <BLink href="https://vueuse.org/core/useElementHover/">`useElementHover()`</BLink>
  composable as a modern alternative.
</DeprecatedFeature>
```

**For v-b-visible (if section exists):**

```vue
<DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE" what="`v-b-visible` directive">
  This directive will not be implemented. Use VueUse's
  <BLink href="https://vueuse.org/core/useElementVisibility/">`useElementVisibility()`</BLink>
  composable instead, which provides the same functionality with better performance.
</DeprecatedFeature>
```

### Example 7: Icon-Related Props (MODERN_ALTERNATIVE)

**Before (BAvatar):**

```markdown
Icon support has been deprecated. Icons support can be implemented using the default slot...
```

**After:**

```vue
<DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE" what="Icon support on `BAvatar`">
  Icons can be implemented using the default slot. See <BLink href="/docs/icons">Icons</BLink> for
  guidance on using unplugin-icons as the recommended modern icon solution.
</DeprecatedFeature>
```

**Before (BFormRating icon props):**

```vue
<NotYetImplemented />
```

**After:**

```vue
<DeprecatedFeature
  :reason="DeprecationReason.MODERN_ALTERNATIVE"
  what="`icon-empty` and `icon-half` props on `BFormRating`"
  :plural="true"
>
  BootstrapVueNext does not include a built-in icon library. See
  <BLink href="/docs/icons">Icons</BLink> for guidance on using unplugin-icons with automatic
  tree-shaking support for all major icon sets.
</DeprecatedFeature>
```

**Before (Form component icon props):**

```markdown
The following icon-related props from BootstrapVue have been deprecated:
```

**After:**

```vue
<DeprecatedFeature
  :reason="DeprecationReason.MODERN_ALTERNATIVE"
  what="Icon-related props on form components"
  :plural="true"
>
  BootstrapVueNext does not include a built-in icon library. See
  <BLink href="/docs/icons">Icons</BLink> for guidance on using unplugin-icons as the recommended
  modern solution with automatic tree-shaking.
</DeprecatedFeature>
```

---

## 8. Summary of Changes

### Total Instances to Modify: ~38

**Replace with DeprecatedFeature:**

- 15 NotYetImplemented → DeprecatedFeature (components and props with INSUFFICIENT_DEMAND)
  - 3 fully deprecated components (BCalendar, BFormTimepicker, BTime)
  - 12 props/features with insufficient demand
- 21 inline deprecation texts → DeprecatedFeature (various props and features)
- 1-2 NotYetDocumented → DeprecatedFeature (v-b-hover directive, possibly v-b-visible if section exists)
- 0-7 missing component warnings to add (BEmbed, BJumbotron, BMedia\*, BPaginationNav, BToaster)

**Address Later (BTable Refactor):**

- 5 BTable NotYetImplemented instances - VividLemon actively refactoring, will address after completion

**Investigate/Conditional:**

- 4 NotYetDocumented → Check for directive docs, remove or keep (v-b-popover, v-b-scrollspy, v-b-toggle, v-b-tooltip)

**Keep As-Is:**

- 1 NotYetDocumented (migration guide header help banner)

### VueUse Alternatives for Directives

- **v-b-hover** → `useElementHover()` composable
- **v-b-visible** → `useElementVisibility()` composable
- 1 NotYetDocumented (migration guide header help banner)

---

## 9. Next Steps

1. ✅ **Phase 2 Complete** - Audit finished with v1 release plan integration
2. 🔄 **Begin Phase 3** - Replace deprecation texts systematically
   - Start with NotYetImplemented → DeprecatedFeature (6 instances)
   - Continue with inline texts → DeprecatedFeature (21 instances)
   - Check directive documentation status (4 instances)
   - Search for and add missing component warnings (7 components)
3. 📝 **Update planning doc** - Mark Phase 2 complete with updated counts

---

## Appendix: Search Queries Used

```bash
# NotYetImplemented
grep -r "<NotYetImplemented" apps/docs/src/docs/**/*.md

# NotYetDocumented
grep -r "<NotYetDocumented" apps/docs/src/docs/**/*.md

# DeprecatedFeature
grep -r "<DeprecatedFeature" apps/docs/src/docs/**/*.md

# Inline deprecated text
grep -rE "is deprecated|are deprecated|has been deprecated|have been deprecated" apps/docs/src/docs/**/*.md
```

## References

- [v1 Release Plan - Issue #1722](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1722)
- [dwgray's v1 Component Status Comment](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1722#issuecomment-3513251311)
- [Directive Documentation Issue #2506](https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/2506)
- [Parity Spreadsheet](https://1drv.ms/x/s!AiUqzkjNYGL6ieBPpQpcR41wo1laZQ?e=DYykFl)
