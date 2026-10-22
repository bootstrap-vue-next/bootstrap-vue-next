---
title: Form OTP
description: 'A single-input OTP field with decorative slots for entering OTP codes, PINs, and verification codes, following the Bootstrap 6 OTP input.'
---

## Overview

`BFormOtp` implements the [Bootstrap 6 OTP input](https://getbootstrap.com/docs/6.0/forms/otp-input/). It renders a **single real `<input>`** with decorative slots on top, so the browser's native selection, autofill (`autocomplete="one-time-code"`), paste, and form submission all work on one field.

<<< DEMO ./demo/FormOtpOverview.vue

### `v-model` Support

The `v-model` binds to a single `string` containing the whole code. Separators are visual only and are never part of the value.

## Input length

By default, `BFormOtp` renders 6 slots. Use the `length` prop to customize the number of slots. Invalid values fall back to 6.

<<< DEMO ./demo/FormOtpLength.vue#template{vue-html}

## Input types

Use `type` to control the accepted characters, the mobile keyboard (`inputmode`), and the validation `pattern`. Disallowed characters are stripped from typed and pasted input.

- `numeric` (default): digits only
- `alphanumeric`: letters and digits
- `alpha`: letters only

<<< DEMO ./demo/FormOtpType.vue#template{vue-html}

## Groups and separators

Use `groups` to split slots into groups, and `separator` to change the text rendered between them (default `·`). The last group size repeats until `length` is filled. Use `connected` to merge the slot borders.

<<< DEMO ./demo/FormOtpGroups.vue#template{vue-html}

## Masked input

Use the `mask` prop to render `•` in filled slots. This is visual only; the input value is unchanged.

<<< DEMO ./demo/FormOtpMask.vue

## Sizing

Use the `size` prop with `sm` or `lg`. The default size has no modifier.

<<< DEMO ./demo/FormOtpSize.vue#template{vue-html}

## Validation states

Use the `state` prop to apply `is-valid` or `is-invalid`. Set to `null` or omit for no validation state.

<<< DEMO ./demo/FormOtpState.vue#template{vue-html}

## Disabled and readonly states

Set the `disabled` prop to prevent user interaction, or the `readonly` prop to prevent changes while keeping the input focusable.

<<< DEMO ./demo/FormOtpDisabled.vue#template{vue-html}

## Complete event

The `complete` event is emitted with the code string when the value reaches `length`.

<<< DEMO ./demo/FormOtpComplete.vue

## Accessibility

The slots are `aria-hidden`; assistive technology interacts with the single input. Provide an accessible name with the `aria-label` prop or a `<label for>` that targets the component `id`.

### Keyboard Interactions

The input uses native text-input behavior, with overwrite-in-place typing:

- Typing a character replaces the character in the active slot and advances
- <kbd>Backspace</kbd> removes the previous character (or the selection)
- <kbd>ArrowLeft</kbd> / <kbd>ArrowRight</kbd> / <kbd>Home</kbd> / <kbd>End</kbd> move the caret
- <kbd>Ctrl</kbd> + <kbd>V</kbd> pastes; the clipboard is sanitized first, then limited to `length`

## Exposed methods

`focus()`, `blur()`, `clear()` (clears the value and focuses), and `element` (the underlying input).
