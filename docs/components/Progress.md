# Progress

Documentation and examples for using Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels.

<ClientOnly>
    <b-card>
        <b-progress :value="0" />
        <b-progress class="mt-3" :value="25" />
        <b-progress class="mt-3" :value="50" />
        <b-progress class="mt-3" :value="75" />
        <b-progress class="mt-3" :value="100" />
    </b-card>
</ClientOnly>

```html
<b-progress :value="0"></b-progress>
<b-progress :value="25"></b-progress>
<b-progress :value="50"></b-progress>
<b-progress :value="75"></b-progress>
<b-progress :value="100"></b-progress>
```

## Value

Set the maximum value with the `max` prop (default is `100`), and the current value via the `value` prop (default `0`).

When creating multiple bars in a single process, place the value prop on the individual `<b-progress-bar>` sub components (see the Multiple Bars section below for more details)

## Labels

Add labels to your progress bars by either enabling `show-progress` (percentage of max) or `show-value` for the current absolute value. You may also set the precision (number of digits after the decimal) via the `precision` prop (default is `0` digits after the decimal).

<ClientOnly>
    <b-card class="text-dark">
        <h5>No label</h5>
        <b-progress :value="33.3333" :max="50" class="mb-3"></b-progress>
        <h5>Value label</h5>
        <b-progress :value="33.3333" :max="50" show-value class="mb-3"></b-progress>
        <h5>Progress label</h5>
        <b-progress :value="33.3333" :max="50" show-progress class="mb-3"></b-progress>
        <h5>Value label with precision</h5>
        <b-progress :value="33.3333" :max="50" :precision="2" show-value class="mb-3"></b-progress>
        <h5>Progress label with precision</h5>
        <b-progress :value="33.3333" :max="50" :precision="2" show-progress class="mb-3"></b-progress>
    </b-card>
</ClientOnly>

```html
<h5>No label</h5>
<b-progress :value="33.3333" :max="50"></b-progress>

<h5>Value label</h5>
<b-progress :value="33.3333" :max="50" show-value></b-progress>

<h5>Progress label</h5>
<b-progress :value="33.3333" :max="50" show-progress></b-progress>

<h5>Value label with precision</h5>
<b-progress :value="33.3333" :max="50" :precision="2" show-value></b-progress>

<h5>Progress label with precision</h5>
<b-progress :value="33.3333" :max="50" :precision="2" show-progress></b-progress>
```

### Custom progress label

Need more control over the label? Provide your own label by using the default slot within a `<b-progress-bar>` sub-component, or by using the `label` or `label-html` property on `<b-progress-bar>`:

<ClientOnly>
    <b-card class="text-dark">
        <h5>Custom label via default slot</h5>
        <b-progress :max="50" height="2rem">
          <b-progress-bar :value="33.333333">
            <span>Progress: <strong>{{ (33.333333).toFixed(2) }} / {{ 50 }}</strong></span>
          </b-progress-bar>
        </b-progress>
        <h5 class="mt-3">Custom label via property</h5>
        <b-progress :max="50">
          <b-progress-bar :value="33.333333" :label="`${((33.333333 / 50) * 100).toFixed(2)}%`"></b-progress-bar>
        </b-progress>
        <h5 class="mt-3">Custom label via property (HTML support)</h5>
        <b-progress :max="50">
          <b-progress-bar :value="33.333333" :label-html="`<del>${33.333333}</del>`"></b-progress-bar>
        </b-progress>
    </b-card>
</ClientOnly>

```html
<h5>Custom label via default slot</h5>
<b-progress :max="50" height="2rem">
  <b-progress-bar :value="33.333333">
    <span>Progress: <strong>{{ (33.333333).toFixed(2) }} / {{ 50 }}</strong></span>
  </b-progress-bar>
</b-progress>

<h5 class="mt-3">Custom label via property</h5>
<b-progress :max="50">
  <b-progress-bar
    :value="33.333333"
    :label="`${((33.333333 / 50) * 100).toFixed(2)}%`"
  ></b-progress-bar>
</b-progress>

<h5 class="mt-3">Custom label via property (HTML support)</h5>
<b-progress :max="50">
  <b-progress-bar :value="33.333333" :label-html="`<del>${33.333333}</del>`"></b-progress-bar>
</b-progress>
```

## Height

The height of the progress bar can be controlled with the height prop. The height value should be a standard CSS dimension (px, rem, em, etc.). The default height is 1rem.

<ClientOnly>
    <b-card>
        <b-progress :value="25" height="1px"></b-progress>
        <b-progress class="mt-3" :value="25" height="20px"></b-progress>
    </b-card>
</ClientOnly>

```html
<b-progress :value="25" height="1px"></b-progress>
<b-progress :value="25" height="20px"></b-progress>
```

## Backgrounds

Use background variants to change the appearance of individual progress bars. The default variant is `primary`.

<ClientOnly>
    <b-card>
        <b-progress variant="success" :value="25" />
        <b-progress class="mt-3" variant="info" :value="50" />
        <b-progress class="mt-3" variant="warning" :value="75" />
        <b-progress class="mt-3" variant="danger" :value="100" />
    </b-card>
</ClientOnly>

```html
<b-progress variant="success" :value="25" />
<b-progress variant="info" :value="50" />
<b-progress variant="warning" :value="75" />
<b-progress variant="danger" :value="100" />
```

## Multiple bars

Include multiple `<b-progress-bar>` sub-components in a `<b-progress>` component to build a horizontally stacked set of progress bars.

<ClientOnly>
    <b-card>
        <b-progress>
            <b-progress-bar :value="15" />
            <b-progress-bar :value="30" variant="success" />
            <b-progress-bar :value="20" variant="info" />
        </b-progress>
    </b-card>
</ClientOnly>

```html
<b-progress>
  <b-progress-bar :value="15" />
  <b-progress-bar :value="30" variant="success" />
  <b-progress-bar :value="20" variant="info" />
</b-progress>
```

## Striped

Set `striped` to apply a stripe via CSS gradient over the progress bar's background variant.

<ClientOnly>
    <b-card>
        <b-progress striped :value="10" />
        <b-progress striped class="mt-3" variant="success" :value="25" />
        <b-progress striped class="mt-3" variant="info" :value="50" />
        <b-progress striped class="mt-3" variant="warning" :value="75" />
        <b-progress striped class="mt-3" variant="danger" :value="100" />
    </b-card>
</ClientOnly>

```html
<b-progress striped :value="10"></b-progress>
<b-progress striped :value="25" variant="success"></b-progress>
<b-progress striped :value="50" variant="info"></b-progress>
<b-progress striped :value="75" variant="warning"></b-progress>
<b-progress striped :value="100" variant="danger"></b-progress>
```

## Animated stripes

The striped gradient can also be animated by setting the `animated` prop.

<ClientOnly>
    <b-card>
        <b-progress :value="75" striped :animated="animate"></b-progress>
        <b-button class="mt-3" @click="animate = !animate">Toggle animation</b-button>
    </b-card>
</ClientOnly>

## Component reference

### `<b-progress>`

#### Properties

| Property        | Type                 | Default | Description                                                        |
| --------------- | -------------------- | ------- | ------------------------------------------------------------------ |
| `animated`      | `Boolean`            | `false` | Enable the animated background. Also automatically sets 'striped'  |
| `max`           | `Number` or `String` | `100`   | Set the maximum value                                              |
| `precision`     | `Number` or `String` | 0       | The number of digits after the decimal to round the value to       |
| `show-progress` | `Boolean`            | `false` | Displays the current progress value as a percentage                |
| `show-value`    | `Boolean`            | `false` | Displays the current progress value                                |
| `striped`       | `Boolean`            | `false` | Enable the striped background                                      |
| `value`         | `Number` or `String` | 0       | The current value of the progress bar                              |
| `variant`       | `String`             |         | Applies one of the Bootstrap theme color variants to the component |

#### Slots

| Name      | Description                                              |
| --------- | -------------------------------------------------------- |
| `default` | Content (progress bars) to place in the progress element |

### `<b-progress-bar>`

#### Properties

| Property                                                                         | Type                 | Default | Description                                                        |
| -------------------------------------------------------------------------------- | -------------------- | ------- | ------------------------------------------------------------------ |
| `animated`                                                                       | `Boolean`            | `false` | Enable the animated background. Also automatically sets 'striped'  |
| `label`                                                                          | `String`             |         | Text string to explicitly set the label as                         |
| `label-html`<br><badge class="text-dark" type="warning">Use with caution</badge> | `String`             |         | HTML string to explicitly set the label as                         |
| `max`                                                                            | `Number` or `String` | `100`   | Set the maximum value                                              |
| `precision`                                                                      | `Number` or `String` | 0       | The number of digits after the decimal to round the value to       |
| `show-progress`                                                                  | `Boolean`            | `false` | Displays the current progress value as a percentage                |
| `show-value`                                                                     | `Boolean`            | `false` | Displays the current progress value                                |
| `striped`                                                                        | `Boolean`            | `false` | Enable the striped background                                      |
| `value`                                                                          | `Number` or `String` | 0       | The current value of the progress bar                              |
| `variant`                                                                        | `String`             |         | Applies one of the Bootstrap theme color variants to the component |

#### Slots

| Name      | Description                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------- |
| `default` | Content to place in the progress bar. Overrides the `label`, `label-html`, `show-progress` and `show-value` props |

<script>
import { ref } from 'vue';

export default {
    setup() {
        const animate = ref(false);

        return {
            animate
        }
    },
}
</script>
