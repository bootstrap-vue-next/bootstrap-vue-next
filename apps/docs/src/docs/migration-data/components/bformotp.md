---
id: bformotp
title: BFormOtp Migration
description: 'Migration notes for BFormOtp from the Bootstrap 5 multi-input implementation to the Bootstrap 6 single-input OTP.'
category: components
components:
  - BFormOtp
match:
  - BFormOtp
  - <BFormOtp>
tags:
  - migration
  - components
  - bformotp
safeRewrite: false
migrationType: component-migration
introducedIn: bootstrap-vue-next
manualReviewRequired: true
confidence: high
---

# BFormOtp Migration

## Summary

`BFormOtp` now follows the Bootstrap 6 OTP input: one real `<input class="otp-input">` plus decorative `.otp-slot` elements. It no longer renders one input per character and no longer uses Reka UI PinInput.

## Affected APIs

- BFormOtp

## Breaking Change

| Before (v1)                            | After (v100)                                                  |
| -------------------------------------- | ------------------------------------------------------------- |
| `v-model` is `string[]`                | `v-model` is a `string`                                       |
| `complete` emits `string[]`            | `complete` emits a `string`                                   |
| `type="text"` (default) / `"number"`   | `type="numeric"` (default) / `"alphanumeric"` / `"alpha"`     |
| `otp` prop enables autocomplete        | Removed; `autocomplete="one-time-code"` is always set         |
| `placeholder`, `plaintext`, `dir`      | Removed; no Bootstrap 6 equivalent                            |
| `separator` (documented, non-working)  | Works with new `groups` prop; visual only                     |
| `mask` switched inputs to password     | `mask` renders `•` in slots; the value is unchanged           |
| Per-input `aria-label` "Pin n of m"    | Single `aria-label` on the input; slots are `aria-hidden`     |
| `.b-form-otp`, `.b-form-otp-field`     | `.otp`, `.otp-input`, `.otp-slots`, `.otp-slot`, `.otp-sm/lg` |
| N/A                                    | New `connected` prop, `focus()`, `blur()`, `clear()` methods  |

Before:

```vue-html
<BFormOtp v-model="code" type="number" otp />
```

After (`code` is now a `string`):

```vue-html
<BFormOtp v-model="code" type="numeric" />
```

## Migration Notes

- Replace array models with a string and update `complete` handlers.
- Per-field keyboard navigation (arrow keys between inputs) is replaced by native caret movement in one input.
- Tests that queried multiple inputs must query the single `input.otp-input`.

## Safe Automatic Rewrite

No. The model type change requires manual review.

## Related Migrations

- [BFormInput Migration](/docs/migration-data/components/bforminput)
