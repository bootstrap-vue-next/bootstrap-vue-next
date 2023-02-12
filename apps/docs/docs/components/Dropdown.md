# Dropdown

> Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format

`<b-dropdown>` components are toggleable, contextual overlays for displaying lists of links, and more. They're toggled by clicking (or pressing space or enter when focused), not by hovering; this is an [intentional design decision](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/)

<b-card>
  <b-dropdown v-model="show1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="Dropdown Button" class="m-md-2">
  <b-dropdown-item>First Action</b-dropdown-item>
  <b-dropdown-item>Second Action</b-dropdown-item>
  <b-dropdown-item>Third Action</b-dropdown-item>
  <b-dropdown-divider></b-dropdown-divider>
  <b-dropdown-item active>Active action</b-dropdown-item>
  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

## Button content

You can customize the text of the dropdown button by using either the `text` prop (shown in previous examples), or use the `button-content` slot instead of the `text` prop. The `button-content` slot allows you to use basic HTML and icons in the button content

If both the prop `text` and slot `button-content` are present, the slot `button-content` will take precedence

<b-card>
  <b-dropdown v-model="show2" text="Button text via Prop" class="m-1">
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
  </b-dropdown>
  <b-dropdown v-model="show3" class="m-1">
    <template #button-content>
    Custom <strong>Content</strong> with <em>HTML</em> via Slot
    </template>
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show1" text="Button text via Prop" class="m-1">
  <b-dropdown-item href="#">An item</b-dropdown-item>
  <b-dropdown-item href="#">Another item</b-dropdown-item>
</b-dropdown>

<b-dropdown v-model="show2" class="m-1">
  <template #button-content>
    Custom <strong>Content</strong> with <em>HTML</em> via Slot
  </template>
  <b-dropdown-item href="#">An item</b-dropdown-item>
  <b-dropdown-item href="#">Another item</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show1 = ref(false)
const show2 = ref(false)
</script>
```

## Positioning

Dropdown supports various positioning such as left and right aligned, dropdown and dropup, and supports auto-flipping dropdown to dropup, and vice-versa) when the menu would overflow off of the visible screen area

### Menu alignment

The dropdown menu can either be _start_ aligned (default) or _end_ aligned to the button above it. To have the dropdown aligned on the _end_, set the `alignEnd` prop

<b-card>
  <b-dropdown v-model="show4" text="Default Alignment" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
  <b-dropdown v-model="show5" alignStart text="Start Alignment" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
  <b-dropdown v-model="show6" alignEnd text="End Align" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show1" text="Default Alignment" variant="primary" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>
<b-dropdown v-model="show2" alignStart text="Start Alignment" variant="primary" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>
<b-dropdown v-model="show3" alignEnd text="End Align" variant="primary" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
</script>
```

### Dropup

Turn your dropdown menu into a drop-up menu by setting the `dropup` prop.

<b-card>
  <b-dropdown v-model="show7" dropup text="Drop-Up" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" dropup text="Drop-up" variant="primary" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### Drop start or end

Turn your dropdown menu into a drop-end menu by setting the `dropend` prop. Or, turn it into a drop-start menu by setting the `dropstart` prop to true

The order of precedence is top -> start -> end -> bottom

<b-card>
  <b-dropdown v-model="show8" dropend text="Drop-end" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
  <b-dropdown v-model="show9" dropstart text="Drop-start" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
      <b-dropdown-item href="#">Another action</b-dropdown-item>
      <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show1" dropend text="Drop-end" variant="primary" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<b-dropdown v-model="show2" dropstart text="Drop-start" variant="primary" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show1 = ref(false)
const show2 = ref(false)
</script>
```

### Auto "flipping"

By default, dropdowns may flip to the top, or the bottom, based on their current position in the viewport. To disable this auto-flip feature, set the `no-flip` prop

<b-card>
  <b-dropdown v-model="show10" text="No flipping" no-flip>
    <b-dropdown-item href="#">An item</b-dropdown-item>
    <b-dropdown-item href="#">Another item</b-dropdown-item>
    <b-dropdown-item href="#">Yet Another item</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="No flipping" no-flip>
  <b-dropdown-item href="#">An item</b-dropdown-item>
  <b-dropdown-item href="#">Another item</b-dropdown-item>
  <b-dropdown-item href="#">Yet Another item</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### Menu offset

Like to move your menu away from the toggle buttons a bit? Then use the `offset` prop to specify the number of pixels to push right (or left when negative) from the toggle button:

<b-card>
  <b-dropdown v-model="show11" offset="25" text="Offset Dropdown" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
  <b-dropdown v-model="show12" :offset="{alignmentAxis: 50, crossAxis: 60, mainAxis: 70}" text="Offset Dropdown 2 dimensions" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show1" offset="25" text="Offset Dropdown" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<b-dropdown v-model="show2" :offset="{alignmentAxis: 50, crossAxis: 60, mainAxis: 70}" text="Offset Dropdown 2 dimensions" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show1 = ref(false)
const show2 = ref(false)
</script>
```

### Floating Strategy

By default, the floating element will render using _absolute_. You can change this using the `strategy` prop. The only other option is `fixed`

<b-card>
  <b-dropdown v-model="show13" text="Strategy fixed" strategy="fixed" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-card>
  <b-dropdown v-model="show" text="Strategy fixed" strategy="fixed" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</b-card>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

<!-- TODO build this system -->
<!-- ### Boundary constraint

By default, dropdowns are visually constrained to their scroll parent, which will suffice in most situations. However, if you place a dropdown inside an element that has `overflow: scroll` (or similar) set, the dropdown menu may - in some situations - get cut off. To get around this, you can specify a boundary element via the `boundary` prop. Supported values are `'scrollParent'` (the
default), `'viewport'`, `'window'`, or a reference to an HTML element. The boundary value is passed directly to Popper.js's `boundariesElement` configuration option

**Note:** When `boundary` is any value other than the default of `'scrollParent'`, the style `position: static` is applied to the dropdown component's root element to allow the menu to "break out" of its scroll container. In some situations, this may affect your layout or positioning of the dropdown trigger button. In these cases, you may need to wrap your dropdown inside
another element -->

### Dropdown auto close behavior

By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the `auto-close` property to change this behavior of the dropdown

The `auto-close`property has 4 options

- `true` : the dropdown will be closed by clicking outside or inside the dropdown menu.
- `false` : the dropdown will be closed by clicking the toggle button and manually calling the hide method. (Also will not be closed by pressing <kbd>esc</kbd> key)
- `inside` : the dropdown will be closed (only) by clicking inside the dropdown menu.
- `outside` : the dropdown will be closed (only) by clicking outside the dropdown menu.

<b-card>
  <b-dropdown v-model="show14" text="Default Dropdown" class="m-2">
    <b-dropdown-item-button>Action</b-dropdown-item-button>
    <b-dropdown-item-button>Another action</b-dropdown-item-button>
    <b-dropdown-item-button>Something else here</b-dropdown-item-button>
  </b-dropdown>
  <b-dropdown v-model="show15" text="Clickable outside (auto-close=inside)" auto-close="inside" class="m-2">
    <b-dropdown-item-button>Action</b-dropdown-item-button>
    <b-dropdown-item-button>Another action</b-dropdown-item-button>
    <b-dropdown-item-button>Something else here</b-dropdown-item-button>
  </b-dropdown>
  <b-dropdown v-model="show16" text="Clickable inside (auto-close=outside)" auto-close="outside" class="m-2">
    <b-dropdown-item-button>Action</b-dropdown-item-button>
    <b-dropdown-item-button>Another action</b-dropdown-item-button>
    <b-dropdown-item-button>Something else here</b-dropdown-item-button>
  </b-dropdown>
  <b-dropdown v-model="show17" text="Manual close (auto-close=false)" :auto-close="false" class="m-2">
    <b-dropdown-item-button>Action</b-dropdown-item-button>
    <b-dropdown-item-button>Another action</b-dropdown-item-button>
    <b-dropdown-item-button>Something else here</b-dropdown-item-button>
  </b-dropdown>
</b-card>

```html
<b-dropdown
  v-model="show1"
  text="Default Dropdown" 
  class="m-2"
>
  <b-dropdown-item-button>Action</b-dropdown-item-button>
  <b-dropdown-item-button>Another action</b-dropdown-item-button>
  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
</b-dropdown>
<b-dropdown
  v-model="show2"
  text="Clickable outside (auto-close=inside)"
  auto-close="inside"
  class="m-2"
>
  <b-dropdown-item-button>Action</b-dropdown-item-button>
  <b-dropdown-item-button>Another action</b-dropdown-item-button>
  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
</b-dropdown>
<b-dropdown
  v-model="show3"
  text="Clickable inside (auto-close=outside)"
  auto-close="outside"
  class="m-2"
>
  <b-dropdown-item-button>Action</b-dropdown-item-button>
  <b-dropdown-item-button>Another action</b-dropdown-item-button>
  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
</b-dropdown>
<b-dropdown
  v-model="show4"
  text="Manual close (auto-close=false)"
  :auto-close="false"
  class="m-2"
>
  <b-dropdown-item-button>Action</b-dropdown-item-button>
  <b-dropdown-item-button>Another action</b-dropdown-item-button>
  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
</script>
```

### Advanced floating-ui configuration

Occasionally you may want to modify the floating-ui behavior. We already expose some configurations through the `no-flip`, `no-shift`, `strategy`, and `offset` props. However, lower-level access to the API may sometimes be required. You can use the `floatingMiddleware` prop to define middleware to pass through to the floating-ui element

You can view the [Floating-ui docs](https://floating-ui.com/docs/middleware) to learn more about their middleware. Note: You will likely want to install `@floating-ui/vue` to use their middleware directly, rather than rebuilding middleware options

**Note**: Using the `floatingMiddleware` prop will overwrite other defined middleware such as `offset`, `noFlip`, and `noShift`. They are not merged

## Split button support

Create a split dropdown button, where the left button provides standard `click` event and link support, while the right-hand side is the dropdown menu toggle button

<b-card>
  <b-dropdown v-model="show18" split text="Split Dropdown" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" split text="Split Dropdown" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### Split button link support

The left split button defaults to an element of type `<button>` (a `<b-button>` to be exact). To convert this button into a link or `<router-link>`, specify the href via the `split-href` prop or a router link `to` value via the `split-to` prop, while maintaining the look of a button

<b-card>
  <b-dropdown v-model="show19" split split-href="#foo/bar" text="Split Link" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" split split-href="#foo/bar" text="Split Link" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### Split button type

The split button defaults to a button `type` of `button`. You can specify an alternate type via the `split-button-type` prop. Supported values are: `button`, `submit`, and `reset`

If props `split-to` or `split-href` are set, the `split-button-type` prop will be ignored

## Styling options

Dropdowns support various props for styling the dropdown trigger button

### Sizing

Dropdowns work with trigger buttons of all sizes, including default and split dropdown buttons

Set the `size` prop to either `sm` for a small button, or `lg` for a large button

<b-card>
  <b-dropdown v-model="show20" size="lg" text="Large" class="m-2">
    <b-dropdown-item-button>Action</b-dropdown-item-button>
    <b-dropdown-item-button>Another action</b-dropdown-item-button>
    <b-dropdown-item-button>Something else here</b-dropdown-item-button>
    </b-dropdown>
    <b-dropdown v-model="show21" size="lg" split text="Large Split" class="m-2">
    <b-dropdown-item-button>Action</b-dropdown-item-button>
    <b-dropdown-item-button>Another action</b-dropdown-item-button>
    <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
  </b-dropdown>
  <b-dropdown v-model="show22" size="sm" text="Small" class="m-2">
    <b-dropdown-item-button>Action</b-dropdown-item-button>
    <b-dropdown-item-button>Another action</b-dropdown-item-button>
    <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
  </b-dropdown>
  <b-dropdown v-model="show23" size="sm" split text="Small Split" class="m-2">
    <b-dropdown-item-button>Action</b-dropdown-item-button>
    <b-dropdown-item-button>Another action</b-dropdown-item-button>
    <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show1" size="lg" text="Large" class="m-2">
  <b-dropdown-item-button>Action</b-dropdown-item-button>
  <b-dropdown-item-button>Another action</b-dropdown-item-button>
  <b-dropdown-item-button>Something else here</b-dropdown-item-button>
</b-dropdown>

<b-dropdown v-model="show2" size="lg" split text="Large Split" class="m-2">
  <b-dropdown-item-button>Action</b-dropdown-item-button>
  <b-dropdown-item-button>Another action</b-dropdown-item-button>
  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
</b-dropdown>
<b-dropdown v-model="show3" size="sm" text="Small" class="m-2">
  <b-dropdown-item-button>Action</b-dropdown-item-button>
  <b-dropdown-item-button>Another action</b-dropdown-item-button>
  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
</b-dropdown>

<b-dropdown v-model="show4" size="sm" split text="Small Split" class="m-2">
  <b-dropdown-item-button>Action</b-dropdown-item-button>
  <b-dropdown-item-button>Another action</b-dropdown-item-button>
  <b-dropdown-item-button>Something else here...</b-dropdown-item-button>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
const show4 = ref(false)
</script>
```

**Note:** _changing the size of the button(s) does not affect the size of the menu items!_

### Dropdown color variants

The dropdown toggle button can have one of the standard Bootstrap contextual variants applied by setting the prop `variant` to `success`, `primary`, `info`, `danger`, `link`, `outline-dark`, etc. (or custom variants, if defined). The default variant is `secondary`

See the [Variant Reference](/docs/reference/color-variants) for a full list of built-in contextual variants

<b-card>
  <b-dropdown v-model="show24" text="Primary" variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
  <b-dropdown v-model="show25" text="Success" variant="success" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
  <b-dropdown v-model="show26" text="Outline Danger" variant="outline-danger" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show1" text="Primary" variant="primary" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<b-dropdown v-model="show2" text="Success" variant="success" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<b-dropdown v-model="show3" text="Outline Danger" variant="outline-danger" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
</script>
```

You can also apply arbitrary classes to the toggle button via the `toggle-class` prop

### Split button color variant

By default, the left split button uses the same `variant` as the `toggle` button. You can give the
split button its variant via the `split-variant` prop

<b-card>
  <b-dropdown
      v-model="show27"
      split
      split-variant="outline-primary"
      variant="primary"
      text="Split Variant Dropdown"
      class="m-2"
  >
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown
  v-model="show"
  split
  split-variant="outline-primary"
  variant="primary"
  text="Split Variant Dropdown"
  class="m-2"
>
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### Dark mode

### Deprecated Bootstrap v5.3

You can render the dropdown menu in dark mode by setting the `dark` property

<b-card>
  <b-dropdown v-model="show28" text="Dropdown Button" dark class="m-md-2">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="Dropdown Button" dark class="m-md-2">
  <b-dropdown-item>First Action</b-dropdown-item>
  <b-dropdown-item>Second Action</b-dropdown-item>
  <b-dropdown-item>Third Action</b-dropdown-item>
  <b-dropdown-divider></b-dropdown-divider>
  <b-dropdown-item active>Active action</b-dropdown-item>
  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### Block level dropdowns

By default, dropdowns act like buttons and are displayed inline. To create block-level dropdowns (that span to the full width of a parent) set the `block` prop. Both, regular and split button dropdowns are supported

<b-card>
  <b-dropdown v-model="show29" text="Block Level Dropdown" block variant="primary" class="m-2">
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
  <b-dropdown
    v-model="show30"
    text="Block Level Split Dropdown"
    block
    split
    split-variant="outline-primary"
    variant="primary"
    class="m-2"
  >
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show1" text="Block Level Dropdown" block variant="primary" class="m-2">
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<b-dropdown
  v-model="show2"
  text="Block Level Split Dropdown"
  block
  split
  split-variant="outline-primary"
  variant="primary"
  class="m-2"
>
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show1 = ref(false)
const show2 = ref(false)
</script>
```

If you want the dropdown menu to span to the full width of the parent container too, add the `w-100`
utility class to the `menu-class` prop

<b-card>
  <b-dropdown
    v-model="show31"
    text="Block Level Dropdown Menu"
    block
    variant="primary"
    class="m-2"
    menu-class="w-100"
  >
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown
  v-model="show"
  text="Block Level Dropdown Menu"
  block
  variant="primary"
  class="m-2"
  menu-class="w-100"
>
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### Dropdown sub-component color variants

Many of the supported dropdown [sub-components](#dropdown-supported-sub-components) provide a
`variant` prop for controlling their text color

### Hidden caret

The dropdown can be created with the toggle's caret visually hidden by setting the `no-caret` prop to `true`. This is useful when the dropdown is to be displayed as an icon

<b-card>
  <b-dropdown v-model="show32" size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
    <template #button-content> &#x1f50d;<span class="visually-hidden">Search</span> </template>
    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
  <template #button-content> &#x1f50d;<span class="visually-hidden">Search</span> </template>
  <b-dropdown-item href="#">Action</b-dropdown-item>
  <b-dropdown-item href="#">Another action</b-dropdown-item>
  <b-dropdown-item href="#">Something else here...</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

**Note:** The caret will always be shown when using `split` mode

## Dropdown supported sub-components

The following components can be placed inside your dropdowns. Using any other component or markup
may break layout and/or keyboard navigation
| Sub-component | Description |
| ----------------- | ---------------------------- |
| `<b-dropdown-item>` | Action items that provide click, link, and `<router-link>`/`<nuxt-link>` functionality. Renders as an `<a>` element by default |
| <span style="white-space:nowrap;">`<b-dropdown-item-button>`</span> | An alternative to `<b-dropdown-item>` that renders a menu item using a `<button>` element |
| `<b-dropdown-divider>` | A divider/spacer which can be used to separate dropdown items |
| `<b-dropdown-text>` | Free flowing text content in a menu |
| `<b-dropdown-group>` | For grouping dropdown sub-components with an optional header |
| `<b-dropdown-header>` | A header item, used to help identify a group of dropdown items |

**Note:** _Nested sub-menus are **not** supported._

### `<b-dropdown-item>`

The `<b-dropdown-item>` is typically used to create a navigation link inside your menu. Use either the `href` prop or the `to` prop (for router link support) to generate the appropriate navigation link. If neither `href` nor `to` are provided, a standard `<a>` link will be generated with an `href` of `#` (with an event handler that will prevent scroll to top behavior by preventing the default link action)

Disabled the dropdown item by setting the `disabled` prop

<b-card>
  <b-dropdown v-model="show33" text="Dropdown" class="m-md-2">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item variant="primary">Second Action</b-dropdown-item>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
    <b-dropdown-item href="Badge">Badge</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="Dropdown Button" class="m-md-2">
  <b-dropdown-item>First Action</b-dropdown-item>
  <b-dropdown-item variant="primary">Second Action</b-dropdown-item>
  <b-dropdown-item active>Active action</b-dropdown-item>
  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  <b-dropdown-item href="Badge">Badge</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### `<b-dropdown-item-button>`

Historically dropdown menu contents had to be links (`<b-dropdown-item>`), but that's no longer the
case with Bootstrap v5. Now you can optionally create `<button>` elements in your dropdowns by using
the `<b-dropdown-item-button>` sub-component. `<b-dropdown-item-button>` does not support the `href`
or `to` props

Disabled the dropdown item button by setting the `disabled` prop

<b-card>
  <b-dropdown v-model="show34" text="Dropdown using buttons as menu items" class="m-2">
    <b-dropdown-item-button>I'm a button</b-dropdown-item-button>
    <b-dropdown-item-button active>I'm a active button</b-dropdown-item-button>
    <b-dropdown-item-button disabled>I'm a button, but disabled!</b-dropdown-item-button>
    <b-dropdown-item-button>I don't look like a button, but I am!</b-dropdown-item-button>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="Dropdown using buttons as menu items" class="m-2">
  <b-dropdown-item-button>I'm a button</b-dropdown-item-button>
  <b-dropdown-item-button active>I'm an active button</b-dropdown-item-button>
  <b-dropdown-item-button disabled>I'm a button, but disabled!</b-dropdown-item-button>
  <b-dropdown-item-button>I don't look like a button, but I am!</b-dropdown-item-button>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

When the menu item doesn't trigger navigation, it is recommended to use the
`<b-dropdown-item-button>` sub-component

### `<b-dropdown-divider>`

Separate groups of related menu items with `<b-dropdown-divider>`

<b-card>
  <b-dropdown v-model="show35" text="Dropdown with divider" class="m-2">
    <b-dropdown-item-button>First item</b-dropdown-item-button>
    <b-dropdown-item-button>Second item</b-dropdown-item-button>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item-button>Separated Item</b-dropdown-item-button>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="Dropdown with divider" class="m-2">
  <b-dropdown-item-button>First item</b-dropdown-item-button>
  <b-dropdown-item-button>Second item</b-dropdown-item-button>
  <b-dropdown-divider></b-dropdown-divider>
  <b-dropdown-item-button>Separated Item</b-dropdown-item-button>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### `<b-dropdown-text>`

Place any freeform text within a dropdown menu using the `<b-dropdown-text>` sub-component or use
text and use spacing utilities. Note that you'll likely need additional sizing styles to
constrain/set the menu width.

<b-card>
  <b-dropdown v-model="show36" text="Dropdown with text" class="m-2">
    <b-dropdown-text style="width: 240px;">
      Some example text that's free-flowing within the dropdown menu.
    </b-dropdown-text>
    <b-dropdown-text  tag="span">And this is more example text.</b-dropdown-text>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item-button>First item</b-dropdown-item-button>
    <b-dropdown-item-button>Second Item</b-dropdown-item-button>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="Dropdown with text" class="m-2">
  <b-dropdown-text style="width: 240px;">
    Some example text that's free-flowing within the dropdown menu.
  </b-dropdown-text>
  <b-dropdown-text>And this is more example text.</b-dropdown-text>
  <b-dropdown-divider></b-dropdown-divider>
  <b-dropdown-item-button>First item</b-dropdown-item-button>
  <b-dropdown-item-button>Second Item</b-dropdown-item-button>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

`<b-dropdown-text>` has the BootstrapVueNext custom class `.b-dropdown-text` applied to it which sets some basic styles which are suitable in most situations. By default, its width will be the same as the widest `<b-dropdown-item>` content. You may need to place additional styles or helper classes on the component

~~By default, `<b-dropdown-text>` renders using tag `<p>`. You can change the rendered tag by setting the `tag` prop to any valid HTML5 tag on the `<b-dropdown-text>` sub-component~~

### `<b-dropdown-group>`

Group a set of dropdown sub-components with an optional associated header. Place a `<b-dropdown-divider>` between your `<b-dropdown-group>` and other groups or non-grouped dropdown contents

<b-card>
  <b-dropdown v-model="show37" text="Dropdown with group" class="m-2">
    <b-dropdown-item-button> Non-grouped Item </b-dropdown-item-button>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-group header="Group 1">
      <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
      <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
    </b-dropdown-group>
    <b-dropdown-group header="Group 2" header-variant="primary">
      <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
      <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
    </b-dropdown-group>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item-button> Another Non-grouped Item </b-dropdown-item-button>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="Dropdown with group" class="m-2">
  <b-dropdown-item-button> Non-grouped Item </b-dropdown-item-button>
  <b-dropdown-divider></b-dropdown-divider>
  <b-dropdown-group header="Group 1">
    <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
    <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
  </b-dropdown-group>
  <b-dropdown-group header="Group 2" header-variant="primary">
    <b-dropdown-item-button>First Grouped item</b-dropdown-item-button>
    <b-dropdown-item-button>Second Grouped Item</b-dropdown-item-button>
  </b-dropdown-group>
  <b-dropdown-divider></b-dropdown-divider>
  <b-dropdown-item-button> Another Non-grouped Item </b-dropdown-item-button>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

### `<b-dropdown-header>`

Add a header to label sections of actions in any dropdown menu

<b-card>
  <b-dropdown v-model="show38" text="Dropdown with header" class="m-2">
    <b-dropdown-header> Dropdown header </b-dropdown-header>
    <b-dropdown-item-button aria-describedby="dropdown-header-label">
      First item
    </b-dropdown-item-button>
    <b-dropdown-item-button aria-describedby="dropdown-header-label">
      Second Item
    </b-dropdown-item-button>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="Dropdown with header" class="m-2">
  <b-dropdown-header> Dropdown header </b-dropdown-header>
  <b-dropdown-item-button aria-describedby="dropdown-header-label">
    First item
  </b-dropdown-item-button>
  <b-dropdown-item-button aria-describedby="dropdown-header-label">
    Second Item
  </b-dropdown-item-button>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

See Section [Dropdown headers and accessibility](#headers-and-accessibility) for details on making headers more accessible for users of assistive technologies

Using the `<b-dropdown-group>` sub-component simplifies creating accessible grouped dropdown items with an associated header

## Accessibility

Providing a unique `id` prop ensures ARIA compliance by automatically adding the appropriate `aria-*` attributes in the rendered markup. By default, the dropdown will render a unique id for every dropdown. However, this can be overwritten with the prop `id`

The default ARIA role is set to `menu`, but you can change this default to another role (such as `navigation`) via the `role` prop, depending on your use case

When a menu item doesn't trigger navigation, it is recommended to use the `<b-dropdown-item-button>` sub-component (which is not announced as a link) instead of `<b-dropdown-item>` (which is presented as a link to the user)

### Headers and accessibility

When using `<b-dropdown-header>` components in the dropdown menu, it is recommended to add an `id` attribute to each of the headers, and then set the `aria-describedby` attribute (set to the `id` value of the associated header) on each following dropdown items under that header. This will provide users of assistive technologies (i.e. sight-impaired users) additional context about the dropdown item:

<b-card>
  <b-dropdown v-model="show39" text="Dropdown ARIA" variant="primary" class="m-2">
    <b-dropdown-header id="dropdown-header-1">Groups</b-dropdown-header>
    <b-dropdown-item-button aria-describedby="dropdown-header-1">Add</b-dropdown-item-button>
    <b-dropdown-item-button aria-describedby="dropdown-header-1">Delete</b-dropdown-item-button>
    <b-dropdown-header id="dropdown-header-2">Users</b-dropdown-header>
    <b-dropdown-item-button aria-describedby="dropdown-header-2">Add</b-dropdown-item-button>
    <b-dropdown-item-button aria-describedby="dropdown-header-2">Delete</b-dropdown-item-button>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item-button>
      Something <strong>not</strong> associated with Users
    </b-dropdown-item-button>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" text="Dropdown ARIA" variant="primary" class="m-2">
  <b-dropdown-header id="dropdown-header-1">Groups</b-dropdown-header>
  <b-dropdown-item-button aria-describedby="dropdown-header-1">Add</b-dropdown-item-button>
  <b-dropdown-item-button aria-describedby="dropdown-header-1">Delete</b-dropdown-item-button>

  <b-dropdown-header id="dropdown-header-2">Users</b-dropdown-header>
  <b-dropdown-item-button aria-describedby="dropdown-header-2">Add</b-dropdown-item-button>
  <b-dropdown-item-button aria-describedby="dropdown-header-2">Delete</b-dropdown-item-button>

  <b-dropdown-divider></b-dropdown-divider>

  <b-dropdown-item-button>
    Something <strong>not</strong> associated with Users
  </b-dropdown-item-button>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

As a simplified alternative, use the `<b-dropdown-group>` instead to easily associate header text to the contained dropdown sub-components

### Keyboard navigation

Dropdowns support keyboard navigation, emulating native `<select>` behavior.

Note that <kbd>Down</kbd> and <kbd>Up</kbd> will not move focus into `<b-dropdown-form>` sub-components, but users can still use <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> to move into form controls within the menu

## Lazy

Dropdown menus can have their inner content rendered lazily through the `lazy` prop. By default, this is turned off. For navigation elements, it may be beneficial to keep lazy off, so web crawlers can properly comb through your sites navigation

<b-card>
  <b-dropdown v-model="show40" lazy text="Dropdown">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider />
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</b-card>

```html
<b-dropdown v-model="show" lazy text="Dropdown">
  <b-dropdown-item>First Action</b-dropdown-item>
  <b-dropdown-item>Second Action</b-dropdown-item>
  <b-dropdown-item>Third Action</b-dropdown-item>
  <b-dropdown-divider />
  <b-dropdown-item active>Active action</b-dropdown-item>
  <b-dropdown-item disabled>Disabled action</b-dropdown-item>
</b-dropdown>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)
</script>
```

## Implementation notes

The dropdown menu is rendered with semantic `<ul>` and `<li>` elements for accessibility reasons. The `.dropdown-menu` is the `<ul>` element, while dropdown items (items, buttons, text, form, headers, and dividers) are wrapped in an `<li>` element. If creating custom items to place inside the dropdown menu, ensure they are wrapped with a plain `<li>`

## See also

- [`<b-nav-item-dropdown>`](/bootstrap-vue-next/components/nav#dropdown-support) for dropdown support inside `<b-nav>` and `<n-navbar>`
- [Router Link Support](/bootstrap-vue-next/reference/router-links) reference for information about router-link specific props available on `<b-dropdown-item>`

<ClientOnly>
  <ComponentReference></ComponentReference>
</ClientOnly>

<script setup lang="ts">
import {ref} from 'vue'

const show = ref(false)

const show1 = ref(false)

const show2 = ref(false)
const show3 = ref(false)

const show4 = ref(false)
const show5 = ref(false)
const show6 = ref(false)

const show7 = ref(false)

const show8 = ref(false)
const show9 = ref(false)

const show10 = ref(false)

const show11 = ref(false)
const show12 = ref(false)

const show13 = ref(false)
const show14 = ref(false)
const show15 = ref(false)
const show16 = ref(false)

const show17 = ref(false)

const show18 = ref(false)
const show19 = ref(false)
const show20 = ref(false)
const show21 = ref(false)
const show22 = ref(false)
const show23 = ref(false)

const show24 = ref(false)
const show25 = ref(false)
const show26 = ref(false)

const show27 = ref(false)

const show28 = ref(false)

const show29 = ref(false)
const show30 = ref(false)
const show31 = ref(false)

const show32 = ref(false)

const show33 = ref(false)

const show34 = ref(false)
const show35 = ref(false)
const show36 = ref(false)
const show37 = ref(false)
const show38 = ref(false)

const show39 = ref(false)

const show40 = ref(false)
</script>
