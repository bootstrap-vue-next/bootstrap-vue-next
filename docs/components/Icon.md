# Icons

> Bootstrap Icons are designed to work with Bootstrap components, from form controls to navigation.
> Bootstrap Icons are SVGs, so they scale quickly and easily and can be styled with CSS. While they
> are built for Bootstrap, they will work in any project.
> BootstrapVue icon components are built from
> [`bootstrap-icons` v1.5.0](https://icons.getbootstrap.com/) source SVGs.

## Usage

### Icon components

**Using the `<b-icon>` helper component:**

<ClientOnly>
  <b-card>
  <div class="h2 mb-0">
    <b-icon icon="arrow-up"></b-icon>
    <b-icon icon="exclamation-triangle"></b-icon>
  </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div class="h2 mb-0">
    <b-icon icon="arrow-up"></b-icon>
    <b-icon icon="exclamation-triangle"></b-icon>
  </div>
</template>
```

## Variants

By default, icons inherit the current text color of their parent element. All icon components
provide a `variant` prop to apply one of the Bootstrap contextual text variant colors:

<ClientOnly>
  <b-card>
    <div class="h2 mb-0 d-flex" style="column-gap: 1%;">
      <b-icon icon="exclamation-circle-fill" variant="success"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="info"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="secondary"></b-icon>
      <b-icon icon="exclamation-circle-fill" variant="dark"></b-icon>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div class="h2 mb-0">
    <b-icon icon="exclamation-circle-fill" variant="success"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="warning"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="info"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="primary"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="secondary"></b-icon>
    <b-icon icon="exclamation-circle-fill" variant="dark"></b-icon>
  </div>
</template>
```

You can also use custom CSS to set the icon color, either via direct `style` attribute, or via
custom classes:

<ClientOnly>
  <b-card>
    <div class="h2 mb-0">
      <b-icon icon="battery-full" style="color: #7952b3;"></b-icon>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div class="h2 mb-0">
    <b-icon icon="battery-full" style="color: #7952b3;"></b-icon>
  </div>
</template>
```

The `variant` prop places the [color utility class](/docs/reference/color-variants) `text-{variant}`
on the icon's root element.

## Sizing

Icons have a default width and height of `1em`, which means they will scale with the size of the
current font size:

<ClientOnly>
  <b-card>
    <div>
      <p class="h1 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h2 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h3 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h4 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
      <p class="h5 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <p class="h1 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h2 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h3 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h4 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
    <p class="h5 mb-2">Icon <b-icon icon="exclamation-circle-fill"></b-icon></p>
  </div>
</template>
```

You can also use custom CSS to set the icon size, either via direct `style` attribute, or via custom
classes:

<ClientOnly>
  <b-card>
    <div>
      <b-icon icon="exclamation-circle" style="width: 120px; height: 120px;"></b-icon>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-icon icon="exclamation-circle" style="width: 120px; height: 120px;"></b-icon>
  </div>
</template>
```

You can also use the prop `font-scale` to scale the icon's current font size by the specified
factor:

<ClientOnly>
  <b-card>
    <div>
      <b-icon icon="camera" font-scale="0.5"></b-icon>
      <b-icon icon="camera" font-scale="1"></b-icon>
      <b-icon icon="camera" font-scale="2"></b-icon>
      <b-icon icon="camera" font-scale="3"></b-icon>
      <b-icon icon="camera" font-scale="4"></b-icon>
      <b-icon icon="camera" font-scale="5"></b-icon>
      <b-icon icon="camera" font-scale="7.5"></b-icon>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-icon icon="camera" font-scale="0.5"></b-icon>
    <b-icon icon="camera" font-scale="1"></b-icon>
    <b-icon icon="camera" font-scale="2"></b-icon>
    <b-icon icon="camera" font-scale="3"></b-icon>
    <b-icon icon="camera" font-scale="4"></b-icon>
    <b-icon icon="camera" font-scale="5"></b-icon>
    <b-icon icon="camera" font-scale="7.5"></b-icon>
  </div>
</template>
```

You can also use the prop `size` to set the icon size. This property is new to Bootstrap-Vue-3.
Valid `size` values are : `sm`, `md`, `lg`, `2x`, `3x`, `4x`, `5x`

<ClientOnly>
  <b-card>
    <div>
      <b-icon icon="camera" size="sm"></b-icon>
      <b-icon icon="camera" size="md"></b-icon>
      <b-icon icon="camera" size="lg"></b-icon>
      <b-icon icon="camera" size="2x"></b-icon>
      <b-icon icon="camera" size="3x"></b-icon>
      <b-icon icon="camera" size="4x"></b-icon>
      <b-icon icon="camera" size="5x"></b-icon>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-icon icon="camera" size="sm"></b-icon>
    <b-icon icon="camera" size="md"></b-icon>
    <b-icon icon="camera" size="lg"></b-icon>
    <b-icon icon="camera" size="2x"></b-icon>
    <b-icon icon="camera" size="3x"></b-icon>
    <b-icon icon="camera" size="4x"></b-icon>
    <b-icon icon="camera" size="5x"></b-icon>
  </div>
</template>
```

Also see the [scaling transforms](#scale) section below for additional sizing options.

## Styling

With the use of Bootstrap's border, background and padding
[utility classes](/docs/reference/utility-classes), you can create various styling effects:

<ClientOnly>
  <b-card>
    <div style="font-size: 4rem;">
      <b-icon icon="bell-fill" class="border rounded p-2"></b-icon>
      <b-icon icon="bell-fill" class="border border-info rounded p-2" variant="info"></b-icon>
      <b-icon icon="bell-fill" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
      <b-icon icon="unlock-fill" class="rounded bg-primary p-1" variant="light"></b-icon>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div style="font-size: 4rem;">
    <b-icon icon="bell-fill" class="border rounded p-2"></b-icon>
    <b-icon icon="bell-fill" class="border border-info rounded p-2" variant="info"></b-icon>
    <b-icon icon="bell-fill" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
    <b-icon icon="unlock-fill" class="rounded bg-primary p-1" variant="light"></b-icon>
  </div>
</template>
```

## SVG transforms

BootstrapVue icons provide several props for applying basic SVG transforms to the `<svg>`. All
transforms can be combined for added effect. Note that the transforms are applied to the `<svg>`
_content_ and not the `<svg>` bounding box.

### Flipping

Flip the icon horizontally and/or vertically via the `flip-h` and `flip-v` props.

<ClientOnly>
  <b-card>
    <div class="d-flex" style="font-size: 4rem; column-gap: 2%;">
      <b-icon icon="bar-chart-fill"></b-icon>
      <b-icon icon="bar-chart-fill" flip-h></b-icon>
      <b-icon icon="bar-chart-fill" flip-v></b-icon>
      <b-icon icon="bar-chart-fill" flip-h flip-v></b-icon>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div style="font-size: 4rem;">
    <b-icon icon="bar-chart-fill"></b-icon>
    <b-icon icon="bar-chart-fill" flip-h></b-icon>
    <b-icon icon="bar-chart-fill" flip-v></b-icon>
    <b-icon icon="bar-chart-fill" flip-h flip-v></b-icon>
  </div>
</template>
```

### Rotate

Rotate the icon by a specified number of degrees via the `rotate` prop. Positive values will rotate
the icon clockwise, while negative values will rotate the icon counterclockwise.

<ClientOnly>
  <b-card>
    <div class="d-flex" style="font-size: 4rem; column-gap: 2%;">
      <b-icon icon="camera"></b-icon>
      <b-icon icon="camera" rotate="45"></b-icon>
      <b-icon icon="camera" rotate="90"></b-icon>
      <b-icon icon="camera" rotate="180"></b-icon>
      <b-icon icon="camera" rotate="270"></b-icon>
      <b-icon icon="camera" rotate="-45"></b-icon>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div style="font-size: 4rem;">
    <b-icon icon="camera"></b-icon>
    <b-icon icon="camera" rotate="45"></b-icon>
    <b-icon icon="camera" rotate="90"></b-icon>
    <b-icon icon="camera" rotate="180"></b-icon>
    <b-icon icon="camera" rotate="270"></b-icon>
    <b-icon icon="camera" rotate="-45"></b-icon>
  </div>
</template>
```

### Scale

Scale the icon by any positive factor via the `scale` prop. Note this changes the icon's visual size
but not its physical font size. To illustrate this we have added a background color to the icons.

<ClientOnly>
  <b-card>
    <b-row cols="2" cols-sm="4" class="text-center" style="font-size: 4rem;">
      <b-col class="mb-2">
        <b-icon icon="exclamation-circle" scale="0.5" class="bg-info"></b-icon>
      </b-col>
      <b-col class="mb-2">
        <b-icon icon="exclamation-circle" class="bg-info"></b-icon>
      </b-col>
      <b-col class="mb-2">
        <b-icon icon="exclamation-circle" scale="1.5" class="bg-info"></b-icon>
      </b-col>
      <b-col class="mb-2">
        <b-icon icon="exclamation-circle" scale="2" class="bg-info"></b-icon>
      </b-col>
    </b-row>
  </b-card>
</ClientOnly>

```html
<template>
  <b-row cols="2" cols-sm="4" class="text-center" style="font-size: 4rem;">
    <b-col class="mb-2">
      <b-icon icon="exclamation-circle" scale="0.5" class="bg-info"></b-icon>
    </b-col>
    <b-col class="mb-2">
      <b-icon icon="exclamation-circle" class="bg-info"></b-icon>
    </b-col>
    <b-col class="mb-2">
      <b-icon icon="exclamation-circle" scale="1.5" class="bg-info"></b-icon>
    </b-col>
    <b-col class="mb-2">
      <b-icon icon="exclamation-circle" scale="2" class="bg-info"></b-icon>
    </b-col>
  </b-row>
</template>
```

If you need to have the background and/or border scale with the icon, use the `font-scale` prop
instead.

### Shifting

Shifting affects icon location without changing or moving the svg container. To move icons on the
horizontal and/or vertical axis, use the `shift-h` and `shift-v` props with any arbitrary numeric
value, including decimals.

For `shift-v`, positive values will move the icon upwards, while negative values will move the icon
downwards. For `shift-h`, positive values will move the icon to the right, while negative values
will move it left. Both props accept values that are in units of 1/16em (relative to the icon's
current _font size_).

For clarity in the example, we’ve added a background color on the icon so you can see the effect.

<ClientOnly>
  <b-card>
    <b-row cols="2" cols-sm="4" class="text-center" style="font-size: 4rem;">
      <b-col class="py-4 mb-2">
        <b-icon icon="exclamation-circle" class="bg-info"></b-icon>
      </b-col>
      <b-col class="py-4 mb-2">
        <b-icon icon="exclamation-circle" shift-v="8" class="bg-info"></b-icon>
      </b-col>
      <b-col class="py-4 mb-2">
        <b-icon icon="exclamation-circle" shift-v="-8" class="bg-info"></b-icon>
      </b-col>
      <b-col class="py-4 mb-2">
        <b-icon icon="exclamation-circle" shift-h="8" class="bg-info"></b-icon>
      </b-col>
      <b-col class="py-4 mb-2">
        <b-icon icon="exclamation-circle" shift-h="-8" class="bg-info"></b-icon>
      </b-col>
      <b-col class="py-4 mb-2">
        <b-icon icon="exclamation-circle" shift-v="16" class="bg-info"></b-icon>
      </b-col>
      <b-col class="py-4 mb-2">
        <b-icon icon="exclamation-circle" shift-h="-8" shift-v="-8" class="bg-info"></b-icon>
      </b-col>
      <b-col class="py-4 mb-2">
        <b-icon
            icon="exclamation-circle"
            scale="0.5"
            rotate="45"
            shift-h="-4"
            shift-v="4"
            class="bg-info"
        ></b-icon>
      </b-col>
    </b-row>
  </b-card>
</ClientOnly>

```html
<template>
  <b-row cols="2" cols-sm="4" class="text-center" style="font-size: 4rem;">
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-v="8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-v="-8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-h="8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-h="-8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-v="16" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon icon="exclamation-circle" shift-h="-8" shift-v="-8" class="bg-info"></b-icon>
    </b-col>
    <b-col class="py-4 mb-2">
      <b-icon
        icon="exclamation-circle"
        scale="0.5"
        rotate="45"
        shift-h="-4"
        shift-v="4"
        class="bg-info"
      ></b-icon>
    </b-col>
  </b-row>
</template>
```

Shifting is applied after any rotation transforms. As with scaling, backgrounds and borders are not
affected. If you need to shift the border/background with the icon, use Bootstrap's margin
[spacing utility classes](/docs/reference/utility-classes).

## Animated icons

<span class="badge badge-info small">v2.7.0+</span>

BootstrapVue3 includes the following built-in animations for icons:

- `'cylon'` slides the icon left-right
- `'cylon-vertical'` slides the icon up-down
- `'fade'` fades the icon in and out
- `'spin'` smoothly spins the icon clockwise
- `'spin-reverse'` smoothly spins the icon counter-clockwise
- `'spin-pulse'` spins the icon clockwise, but in a pulsed step style
- `'spin-reverse-pulse'` spins the icon counter-clockwise, but in a pulsed step style
- `'throb'` scales the icon in and out

To use the animation, set the `animation` prop to one of the animation names above.

<ClientOnly>
  <b-card>
    <b-row class="text-md-center">
      <b-col md="6" class="mb-3">
        <p>Cylon animation:</p>
        <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Vertical cylon animation:</p>
        <b-icon icon="three-dots-vertical" animation="cylon-vertical" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Fade animation:</p>
        <b-icon icon="star-fill" animation="fade" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Spinning animation:</p>
        <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Reverse spinning animation:</p>
        <b-icon icon="arrow-counterclockwise" animation="spin-reverse" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Pulsing spin animation:</p>
        <b-icon icon="arrow-clockwise" animation="spin-pulse" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Reversed pulsing spin animation:</p>
        <b-icon icon="arrow-counterclockwise" animation="spin-reverse-pulse" font-scale="4"></b-icon>
      </b-col>
      <b-col md="6" class="mb-3">
        <p>Throb animation:</p>
        <b-icon icon="circle-fill" animation="throb" font-scale="4"></b-icon>
      </b-col>
    </b-row>
  </b-card>
</ClientOnly>

```html
<template>
  <b-row class="text-md-center">
    <b-col md="6" class="mb-3">
      <p>Cylon animation:</p>
      <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Vertical cylon animation:</p>
      <b-icon icon="three-dots-vertical" animation="cylon-vertical" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Fade animation:</p>
      <b-icon icon="star-fill" animation="fade" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Spinning animation:</p>
      <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Reverse spinning animation:</p>
      <b-icon icon="arrow-counterclockwise" animation="spin-reverse" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Pulsing spin animation:</p>
      <b-icon icon="arrow-clockwise" animation="spin-pulse" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Reversed pulsing spin animation:</p>
      <b-icon icon="arrow-counterclockwise" animation="spin-reverse-pulse" font-scale="4"></b-icon>
    </b-col>
    <b-col md="6" class="mb-3">
      <p>Throb animation:</p>
      <b-icon icon="circle-fill" animation="throb" font-scale="4"></b-icon>
    </b-col>
  </b-row>
</template>
```

As the animations are CSS based, they are applied _after_ any SVG transforms have taken place:

<ClientOnly>
  <b-card>
    <div class="p-4">
      <b-icon icon="clock" animation="spin" font-scale="4" shift-v="8"></b-icon>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div class="p-4">
    <b-icon icon="clock" animation="spin" font-scale="4" shift-v="8"></b-icon>
  </div>
</template>
```

The BootstrapVue3 defined icon animation effects require BootstrapVue3's custom CSS. The `animation`
prop translates to the class name `b-icon-animation-{animationName}`.

Need a different style animation? Just create a custom class defining the animation, and apply that
class to the icon component, or create a new animation class in the form of
`b-icon-animation-{animationName}` and pass the custom animation name to the `animation` prop.

**Animation notes:**

- With the `cylon` animations, the left-right movement (or up-down movement) extends _past_ the
  icon's bounding box by `+/- 25%`, so you may need to adjust padding or margins to compensate for
  your use case.
- Animation durations can be [configured via SASS SCSS variables](/docs/reference/theming)
- The BootstrapVue defined animation effects of this component is dependent on the
  `prefers-reduced-motion` media query. See the
  [reduced motion section of our accessibility documentation](/docs/reference/accessibility#reduced-motion)
  for additional details.
- The `cylon` animation gets its name from the "eye" of the Cylons from the _original_
  [1978 Battlestar Galactica TV series](https://www.youtube.com/watch?v=5a5bEIf0UaU).

## Stacking icons

Combine icons together via the use of the component `<b-iconstack>` and the `stacked` prop on
individual icons (`<b-icon>` or `<b-icon-{icon-name}>`) to create complex icons:

<ClientOnly>
  <b-card>
    <div class="d-flex" style="column-gap: 2%">
      <b-iconstack font-scale="5">
        <b-icon stacked icon="camera" variant="info" scale="0.75"></b-icon>
        <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
      </b-iconstack>
      <b-iconstack font-scale="5" rotate="90">
        <b-icon stacked icon="chevron-right" shift-h="-4" variant="danger"></b-icon>
        <b-icon stacked icon="chevron-right" shift-h="0" variant="success"></b-icon>
        <b-icon stacked icon="chevron-right" shift-h="4" variant="primary"></b-icon>
      </b-iconstack>
      <b-iconstack font-scale="5">
        <b-icon stacked icon="circle-fill" variant="info"></b-icon>
        <b-icon stacked icon="bell-fill" scale="0.5" variant="white"></b-icon>
        <b-icon stacked icon="circle" variant="danger"></b-icon>
      </b-iconstack>
      <b-iconstack font-scale="5" variant="white">
        <b-icon stacked icon="square-fill" variant="dark"></b-icon>
        <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="3" shift-h="-3"></b-icon>
        <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="3" shift-h="3" rotate="90"></b-icon>
        <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="-3" shift-h="3" rotate="180"></b-icon>
        <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="-3" shift-h="-3" rotate="270"></b-icon>
      </b-iconstack>
      <b-iconstack font-scale="5">
        <b-icon stacked icon="square"></b-icon>
        <b-icon stacked icon="check"></b-icon>
      </b-iconstack>
      <b-iconstack font-scale="5">
        <b-icon stacked icon="square"></b-icon>
        <b-icon stacked icon="dot" shift-h="-3" shift-v="4"></b-icon>
        <b-icon stacked icon="dot" shift-h="-3"></b-icon>
        <b-icon stacked icon="dot" shift-h="-3" shift-v="-4"></b-icon>
        <b-icon stacked icon="dot" shift-h="3" shift-v="4"></b-icon>
        <b-icon stacked icon="dot" shift-h="3"></b-icon>
        <b-icon stacked icon="dot" shift-h="3" shift-v="-4"></b-icon>
      </b-iconstack>
    </div>  
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-iconstack font-scale="5">
      <b-icon stacked icon="camera" variant="info" scale="0.75"></b-icon>
      <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5" rotate="90">
      <b-icon stacked icon="chevron-right" shift-h="-4" variant="danger"></b-icon>
      <b-icon stacked icon="chevron-right" shift-h="0" variant="success"></b-icon>
      <b-icon stacked icon="chevron-right" shift-h="4" variant="primary"></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5">
      <b-icon stacked icon="circle-fill" variant="info"></b-icon>
      <b-icon stacked icon="bell-fill" scale="0.5" variant="white"></b-icon>
      <b-icon stacked icon="circle" variant="danger"></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5" variant="white">
      <b-icon stacked icon="square-fill" variant="dark"></b-icon>
      <b-icon stacked icon="arrow-up-short" scale="0.5" shift-v="3" shift-h="-3"></b-icon>
      <b-icon
        stacked
        icon="arrow-up-short"
        scale="0.5"
        shift-v="3"
        shift-h="3"
        rotate="90"
      ></b-icon>
      <b-icon
        stacked
        icon="arrow-up-short"
        scale="0.5"
        shift-v="-3"
        shift-h="3"
        rotate="180"
      ></b-icon>
      <b-icon
        stacked
        icon="arrow-up-short"
        scale="0.5"
        shift-v="-3"
        shift-h="-3"
        rotate="270"
      ></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5">
      <b-icon stacked icon="square"></b-icon>
      <b-icon stacked icon="check"></b-icon>
    </b-iconstack>

    <b-iconstack font-scale="5">
      <b-icon stacked icon="square"></b-icon>
      <b-icon stacked icon="dot" shift-h="-3" shift-v="4"></b-icon>
      <b-icon stacked icon="dot" shift-h="-3"></b-icon>
      <b-icon stacked icon="dot" shift-h="-3" shift-v="-4"></b-icon>
      <b-icon stacked icon="dot" shift-h="3" shift-v="4"></b-icon>
      <b-icon stacked icon="dot" shift-h="3"></b-icon>
      <b-icon stacked icon="dot" shift-h="3" shift-v="-4"></b-icon>
    </b-iconstack>
  </div>
</template>
```

`<b-iconstack>` supports the same `variant`, `font-size`, `animation` and transformation props
available on individual icons.

Stacked icon notes:

- Remember to set the `stacked` prop on the inner icon components!
- The `font-scale` prop cannot be used on the inner icon components
- The `width` and `height` attributes cannot be applied to the inner icon components
- Stacked icons **cannot** be stacked inside another `<b-iconstack>`

### Stacked icon animation

The `<b-iconstack>` component supports the same animations as individual icons:

<ClientOnly>
  <b-card>
    <div>
      <b-iconstack font-scale="5" animation="spin">
        <b-icon stacked icon="camera" variant="info" scale="0.75" shift-v="-0.25"></b-icon>
        <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
      </b-iconstack>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-iconstack font-scale="5" animation="spin">
      <b-icon stacked icon="camera" variant="info" scale="0.75" shift-v="-0.25"></b-icon>
      <b-icon stacked icon="slash-circle" variant="danger"></b-icon>
    </b-iconstack>
  </div>
</template>
```

Individual icons within the icon stack can also be animated (except on IE 11):

<ClientOnly>
  <b-card>
    <div>
      <b-iconstack font-scale="5" animation="cylon">
        <b-icon
            stacked
            icon="camera"
            animation="throb"
            variant="info"
            scale="0.75"
        ></b-icon>
        <b-icon
            stacked
            icon="slash-circle"
            animation="spin-reverse"
            variant="danger"
        ></b-icon>
      </b-iconstack>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-iconstack font-scale="5" animation="cylon">
      <b-icon stacked icon="camera" animation="throb" variant="info" scale="0.75"></b-icon>
      <b-icon stacked icon="slash-circle" animation="spin-reverse" variant="danger"></b-icon>
    </b-iconstack>
  </div>
</template>
```

**Notes:**

- The BootstrapVue3 defined animation effects of this component is dependent on the
  `prefers-reduced-motion` media query. See the
  [reduced motion section of our accessibility documentation](/docs/reference/accessibility) for
  additional details.

## Using in components

Easily place icons as content in other components.

Note that icons placed in BootstrapVue components use BootstrapVue's custom CSS for additional
styling compensation due to current issues with Bootstrap Icons `<svg>` alignment implementation,
and for additional aesthetic scaling (icons placed in the components listed below will have their
font scaled by 125%).

### Buttons

<ClientOnly>
  <b-card>
    <div>
      <b-button size="sm" class="mb-2">
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
      </b-button>
      <br>
      <b-button variant="primary" class="mb-2">
        Pay now <b-icon icon="credit-card" aria-hidden="true"></b-icon>
      </b-button>
      <br>
      <b-button variant="outline-info" class="mb-2">
        <b-icon icon="power" aria-hidden="true"></b-icon> Logout
      </b-button>
      <br>
      <b-button size="lg" variant="primary" class="mb-2">
        <b-icon icon="question-circle-fill" aria-label="Help"></b-icon>
      </b-button>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-button size="sm" class="mb-2">
      <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
    </b-button>
    <br />
    <b-button variant="primary" class="mb-2">
      Pay now <b-icon icon="credit-card" aria-hidden="true"></b-icon>
    </b-button>
    <br />
    <b-button variant="outline-info" class="mb-2">
      <b-icon icon="power" aria-hidden="true"></b-icon> Logout
    </b-button>
    <br />
    <b-button size="lg" variant="primary" class="mb-2">
      <b-icon icon="question-circle-fill" aria-label="Help"></b-icon>
    </b-button>
  </div>
</template>
```

### Button Groups and toolbars

#### Button Group

<ClientOnly>
  <b-card>
    <div>
      <b-button-group>
        <b-button variant="outline-primary">
          <b-icon icon="tools"></b-icon> Settings
        </b-button>
        <b-button variant="outline-primary">
          <b-icon icon="person-fill"></b-icon> Account
        </b-button>
        <b-button variant="outline-primary">
          <b-icon icon="inbox-fill"></b-icon> Messages
        </b-button>
      </b-button-group>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-button-group>
      <b-button variant="outline-primary"> <b-icon icon="tools"></b-icon> Settings </b-button>
      <b-button variant="outline-primary"> <b-icon icon="person-fill"></b-icon> Account </b-button>
      <b-button variant="outline-primary"> <b-icon icon="inbox-fill"></b-icon> Messages </b-button>
    </b-button-group>
  </div>
</template>
```

#### Button Toolbar

<ClientOnly>
  <b-card>
  <div>
    <b-button-toolbar >
      <b-button-group class="mr-1">
        <b-button title="Save file">
          <b-icon icon="cloud-upload" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Load file">
          <b-icon icon="cloud-download" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="New document">
          <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
      <b-button-group class="mr-1">
        <b-button title="Align left">
          <b-icon icon="text-left" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Align center">
          <b-icon icon="text-center" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Align right">
          <b-icon icon="text-right" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
      <b-button-group>
        <b-button title="Bold">
          <b-icon icon="type-bold" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Italic">
          <b-icon icon="type-italic" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Underline">
          <b-icon icon="type-underline" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Strikethrough">
          <b-icon icon="type-strikethrough" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
    </b-button-toolbar>
  </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-button-toolbar>
      <b-button-group class="mr-1">
        <b-button title="Save file">
          <b-icon icon="cloud-upload" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Load file">
          <b-icon icon="cloud-download" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="New document">
          <b-icon icon="file-earmark" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
      <b-button-group class="mr-1">
        <b-button title="Align left">
          <b-icon icon="text-left" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Align center">
          <b-icon icon="text-center" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Align right">
          <b-icon icon="text-right" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
      <b-button-group>
        <b-button title="Bold">
          <b-icon icon="type-bold" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Italic">
          <b-icon icon="type-italic" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Underline">
          <b-icon icon="type-underline" aria-hidden="true"></b-icon>
        </b-button>
        <b-button title="Strikethrough">
          <b-icon icon="type-strikethrough" aria-hidden="true"></b-icon>
        </b-button>
      </b-button-group>
    </b-button-toolbar>
  </div>
</template>
```

### Input Groups

```html
<template>
  <div>
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="search" placeholder="Search terms"></b-form-input>
    </b-input-group>
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="tag-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-tags
        separator=" ,;"
        tag-variant="primary"
        placeholder="Enter new tags separated by space, comma or semicolon"
        no-add-on-enter
      ></b-form-tags>
    </b-input-group>
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="User ID"></b-form-input>
    </b-input-group>
    <b-input-group size="lg">
      <b-input-group-prepend is-text>
        <b-icon icon="envelope"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="email" placeholder="me@example.com"></b-form-input>
    </b-input-group>
  </div>
</template>
```

### List Groups

<ClientOnly>
  <b-card class="bd-example">
    <b-list-group>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
        Cras justo odio
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <b-icon icon="exclamation-triangle-fill" scale="2" variant="warning"></b-icon>
        Dapibus ac facilisis in
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <b-icon icon="info-circle-fill" scale="2" variant="info"></b-icon>
        Morbi leo risus
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        <b-icon icon="check-square" scale="2" variant="success"></b-icon>
        Incididunt veniam velit
      </b-list-group-item>
    </b-list-group>
  </b-card>
</ClientOnly>

```html
<template>
  <b-list-group>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-icon icon="x-circle" scale="2" variant="danger"></b-icon>
      Cras justo odio
    </b-list-group-item>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-icon icon="exclamation-triangle-fill" scale="2" variant="warning"></b-icon>
      Dapibus ac facilisis in
    </b-list-group-item>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-icon icon="info-circle-fill" scale="2" variant="info"></b-icon>
      Morbi leo risus
    </b-list-group-item>
    <b-list-group-item class="d-flex justify-content-between align-items-center">
      <b-icon icon="check-square" scale="2" variant="success"></b-icon>
      Incididunt veniam velit
    </b-list-group-item>
  </b-list-group>
</template>
```

### Dropdowns

<ClientOnly>
  <b-card>
    <div>
      <b-dropdown variant="primary">
        <template #button-content>
          <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
        </template>
        <b-dropdown-item-button>
          <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
          Locked <span class="visually-hidden">(Click to unlock)</span>
        </b-dropdown-item-button>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-group header="Choose options" class="small">
          <b-dropdown-item-button>
            <b-icon icon="blank" aria-hidden="true"></b-icon>
            Option A <span class="visually-hidden">(Not selected)</span>
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <b-icon icon="check" aria-hidden="true"></b-icon>
            Option B <span class="visually-hidden">(Selected)</span>
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <b-icon icon="blank" aria-hidden="true"></b-icon>
            Option C <span class="visually-hidden">(Not selected)</span>
          </b-dropdown-item-button>
        </b-dropdown-group>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item-button>Some action</b-dropdown-item-button>
        <b-dropdown-item-button>Some other action</b-dropdown-item-button>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item-button variant="danger">
          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
          Delete
        </b-dropdown-item-button>
      </b-dropdown>
    </div>
  </b-card>
</ClientOnly>

```html
<template>
  <div>
    <b-dropdown variant="primary">
      <template #button-content>
        <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Settings
      </template>
      <b-dropdown-item-button>
        <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
        Locked <span class="visually-hidden">(Click to unlock)</span>
      </b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-group header="Choose options" class="small">
        <b-dropdown-item-button>
          <b-icon icon="blank" aria-hidden="true"></b-icon>
          Option A <span class="visually-hidden">(Not selected)</span>
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="check" aria-hidden="true"></b-icon>
          Option B <span class="visually-hidden">(Selected)</span>
        </b-dropdown-item-button>
        <b-dropdown-item-button>
          <b-icon icon="blank" aria-hidden="true"></b-icon>
          Option C <span class="visually-hidden">(Not selected)</span>
        </b-dropdown-item-button>
      </b-dropdown-group>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button>Some action</b-dropdown-item-button>
      <b-dropdown-item-button>Some other action</b-dropdown-item-button>
      <b-dropdown-divider></b-dropdown-divider>
      <b-dropdown-item-button variant="danger">
        <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
        Delete
      </b-dropdown-item-button>
    </b-dropdown>
  </div>
</template>
```

## Working with SVGs

SVGs are awesome to work with, but they do have some known quirks to work around.

- **Focus handling is broken in Edge.** We have added the attribute
  `focusable="false"` to the `<svg>` element. You can override this by setting the attribute
  `focusable="false"` on the icon component.
- **Browsers inconsistently announce SVGs as `<img>` tags with voice assistance.** Hence, we have
  added added the attributes `role="img"` and `alt="icon"`. You can override these attributes if
  needed.
- **Safari skips `aria-label` when used on non-focusable SVGs.** As such, use the attribute
  `aria-hidden="true"` when using the icon and use CSS to visually hide the equivalent label.

<style lang="scss" scoped>
    .bd-example > .card-body > .list-group {
        max-width: 400px;
    }
</style>

## Component reference

### `<b-icon>`

#### Properties

| Property     | Type                 | Default | Description                                                                                                                          |
| ------------ | -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `animation`  | `String`             |         | Animate the icon. Supported built-in animations are 'cylon', 'fade', 'pulse', 'spin' and 'throb'                                     |
| `flip-h`     | `Boolean`            | `false` | Flips the icon horizontally                                                                                                          |
| `flip-v`     | `Boolean`            | `false` | Flips the icon vertically                                                                                                            |
| `font-scale` | `Number` or `String` | `1`     | Scale the icons current font size                                                                                                    |
| `icon`       | `String`             |         | Name of icon to render. The corresponding icon component must be installed                                                           |
| `rotate`     | `Number` or `String` | `0`     | Rotates the icon by the specified number of degrees. Positive values rotate clockwise, while negative values rotate counterclockwise |
| `scale`      | `Number` or `String` | `1`     | Scales the icon's SVG, without increasing the font size                                                                              |
| `shift-h`    | `Number` or `String` | `0`     | Moves the icon horizontally. Positive numbers will shift the icon right, negative left. Value is in 1/16em units                     |
| `shift-v`    | `Number` or `String` | `0`     | Moves the icon vertically. Positive numbers will shift the icon up, negative down. Value is in 1/16em units                          |
| `size`       | `String`             |         | Sets the icon size. Possible values : `sm`, `md`, `lg`, `2x`, `3x`, `4x`, `5x`                                                       |
| `stacked`    | `Boolean`            | `false` | Set this prop to true when placing inside a BIconstack component                                                                     |
| `title`      | `String`             |         | Text content to place in the title                                                                                                   |
| `variant`    | `String`             |         | Contextual color variant. By default the icon inherits the current text color                                                        |

### `<b-iconstack>`

#### Properties

| Property     | Type                 | Default | Description                                                                                                                          |
| ------------ | -------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `animation`  | `String`             |         | Animate the icon. Supported built-in animations are 'cylon', 'fade', 'pulse', 'spin' and 'throb'                                     |
| `flip-h`     | `Boolean`            | `false` | Flips the icon horizontally                                                                                                          |
| `flip-v`     | `Boolean`            | `false` | Flips the icon vertically                                                                                                            |
| `font-scale` | `Number` or `String` | `1`     | Scale the icons current font size                                                                                                    |
| `rotate`     | `Number` or `String` | `0`     | Rotates the icon by the specified number of degrees. Positive values rotate clockwise, while negative values rotate counterclockwise |
| `scale`      | `Number` or `String` | `1`     | Scales the icon's SVG, without increasing the font size                                                                              |
| `shift-h`    | `Number` or `String` | `0`     | Moves the icon horizontally. Positive numbers will shift the icon right, negative left. Value is in 1/16em units                     |
| `shift-v`    | `Number` or `String` | `0`     | Moves the icon vertically. Positive numbers will shift the icon up, negative down. Value is in 1/16em units                          |
| `size`       | `String`             |         | Sets the icon size. Possible values : `sm`, `md`, `lg`, `2x`, `3x`, `4x`, `5x`                                                       |
| `title`      | `String`             |         | Text content to place in the title                                                                                                   |
| `variant`    | `String`             |         | Contextual color variant. By default the icon inherits the current text color                                                        |
