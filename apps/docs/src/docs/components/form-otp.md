---
description: 'A sequence of one-character inputs for entering OTP codes, PINs, and verification codes. Built on top of Reka UI PinInput with Bootstrap styling.'
---

## Overview

`BFormOtp` renders a configurable number of single-character input fields, commonly used for entering OTP (One-Time Password) codes, PINs, and verification codes. It wraps `BFormInput` fields with Reka UI's PinInput primitives, providing full keyboard navigation, clipboard paste support, and mobile OTP autodetection.

<<< DEMO ./demo/FormOtpOverview.vue

### `v-model` Support

The `v-model` binds to an array of strings, where each element represents the value of one input field. You can use it to set initial values or read the current state of the inputs.

## Input length

By default, `BFormOtp` renders 6 input fields. Use the `length` prop to customize the number of fields.

<<< DEMO ./demo/FormOtpLength.vue#template{vue-html}

## Input types

### Text mode

By default, `BFormOtp` accepts any alphanumeric character. This is the default `type="text"` mode.

### Numeric mode

Set the `type` prop to `number` to restrict input to numeric characters only. This is useful for numeric PINs and verification codes.

<<< DEMO ./demo/FormOtpNumeric.vue#template{vue-html}

## OTP mode

Set the `otp` prop to `true` to enable OTP autodetection on mobile devices. This allows mobile devices to automatically detect the OTP from messages or clipboard, and enables the autocomplete field.

<<< DEMO ./demo/FormOtpOtp.vue#template{vue-html}

## Masked input

Use the `mask` prop to treat the inputs as password fields, hiding entered characters. This is useful for sensitive codes such as PINs.

<<< DEMO ./demo/FormOtpMask.vue

## Sizing

Control the size of the input fields using the `size` prop. Supports `sm`, `md` (default), and `lg`.

<<< DEMO ./demo/FormOtpSize.vue#template{vue-html}

## Validation states

Use the `state` prop to apply contextual validation styles to the component. Set to `true` for valid, `false` for invalid, or `null` for no validation state.

<<< DEMO ./demo/FormOtpState.vue#template{vue-html}

## Disabled and readonly states

Set the `disabled` prop to prevent user interaction, or the `readonly` prop to make the inputs read-only while keeping them focusable.

<<< DEMO ./demo/FormOtpDisabled.vue#template{vue-html}

## Complete event

The `complete` event is emitted when all input fields have been filled. This is useful for triggering validation or submission once the user has entered the full code.

<<< DEMO ./demo/FormOtpComplete.vue

## Accessibility

Each input field is automatically labeled with an `aria-label` in the format `"Pin {n} of {total}"` (e.g., "Pin 1 of 6"). You can customize the prefix using the `aria-label` prop (e.g., setting it to `"Code"` produces "Code 1 of 6").

### Keyboard Interactions

- <kbd>ArrowLeft</kbd> Focus on previous input
- <kbd>ArrowRight</kbd> Focus on next input
- <kbd>Home</kbd> Focus on the first input
- <kbd>End</kbd> Focus on the last input
- <kbd>Backspace</kbd> Deletes the value of the current input. If the input is empty, moves to the previous input and deletes that value as well
- <kbd>Delete</kbd> Deletes the value of the current input
- <kbd>Ctrl</kbd> + <kbd>V</kbd> Pastes the contents of the clipboard into the pin input. If the number of characters in the clipboard equals or exceeds the number of inputs, the contents are pasted from the first input. Otherwise, the contents are pasted from the current input onwards
