# DeprecatedFeature Component Usage

## Overview

The `DeprecatedFeature` component displays a compact deprecation warning with an automatic link to the full deprecation rationale in the migration guide.

## Props

### `reason` (required)

Type: `DeprecationReason` enum

The reason why this feature is deprecated. Available values:

- `DeprecationReason.BOOTSTRAP_DEPRECATED` - Feature deprecated by Bootstrap
- `DeprecationReason.VUE3_BOOTSTRAP5_CHANGES` - Vue 3/Bootstrap 5 made this less relevant
- `DeprecationReason.BOOTSTRAP_NATIVE` - Achievable using Bootstrap classes natively
- `DeprecationReason.MODERN_ALTERNATIVE` - A modern alternative exists
- `DeprecationReason.INSUFFICIENT_DEMAND` - Insufficient demand for initial release

## Slots

### `default` (optional)

Additional context about this specific deprecation (e.g., issue links, parity features, alternatives)

## Examples

### Basic Usage

```vue
<script setup>
import {DeprecationReason} from '../types/deprecation'
</script>

<template>
  <DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_DEPRECATED" />
</template>
```

### With Issue Link

```vue
<DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND">
  <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860">
    See issue #1860
  </BLink>
</DeprecatedFeature>
```

### With Parity Feature Reference

```vue
<DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE">
  Use <BLink href="/docs/components/accordion">BAccordion</BLink> instead.
</DeprecatedFeature>
```

### With Multiple Links

```vue
<DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_DEPRECATED">
  See <BLink href="https://getbootstrap.com/docs/5.3/migration/">Bootstrap's migration guide</BLink>
  and <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/123">issue #123</BLink>
  for details.
</DeprecatedFeature>
```

## Migration from Old Format

### Before

```vue
<DeprecatedFeature kind="component" reason="1b">
  <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860">
    See issue #1860
  </BLink>
</DeprecatedFeature>
```

### After

```vue
<script setup>
import {DeprecationReason} from '../types/deprecation'
</script>

<template>
  <DeprecatedFeature :reason="DeprecationReason.VUE3_BOOTSTRAP5_CHANGES">
    <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860">
      See issue #1860
    </BLink>
  </DeprecatedFeature>
</template>
```

## Reason Code Mapping (Old → New)

- `"1a"` or `reason="1a"` → `:reason="DeprecationReason.BOOTSTRAP_DEPRECATED"`
- `"1b"` or `reason="1b"` → `:reason="DeprecationReason.VUE3_BOOTSTRAP5_CHANGES"`
- `"1c"` or `reason="1c"` → `:reason="DeprecationReason.BOOTSTRAP_NATIVE"`
- `"1d"` or `reason="1d"` → `:reason="DeprecationReason.MODERN_ALTERNATIVE"`
- `"2"` or `reason="2"` → `:reason="DeprecationReason.INSUFFICIENT_DEMAND"`

## Visual Appearance

The component renders as a compact yellow/warning alert with:

- Bold "Deprecated:" prefix
- Reason text in regular weight
- "Learn more" link to migration guide
- Optional slot content separated by " – "

## Testing

A test file is available at `apps/docs/src/components/DeprecatedFeatureTest.vue` that demonstrates all deprecation reason types with and without slot content.

To view the test component, add it to a page temporarily:

```vue
<DeprecatedFeatureTest />
```
