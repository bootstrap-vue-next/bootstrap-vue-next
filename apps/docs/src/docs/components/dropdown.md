# Dropdown

<PageHeader>

Dropdowns are toggleable, contextual overlays for displaying lists of links and actions in a dropdown menu format.

</PageHeader>

`BDropdown` components are toggleable, contextual overlays for displaying lists of links, and more. They're toggled by clicking (or pressing space or enter when focused), not by hovering; this is an [intentional design decision](https://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/).

<<< DEMO ./demo/DropdownOverview.vue#template{vue-html}

## Button content

You can customize the text of the dropdown button by using either the `text` prop (shown in previous examples), or use the `button-content` slot instead of the `text` prop. The `button-content` slot allows you to use basic HTML and icons in the button content.

If both the prop `text` and slot `button-content` are present, the slot `button-content` will take precedence.

<<< DEMO ./demo/DropdownButtonContent.vue#template{vue-html}

## Positioning

Dropdown supports various positioning such as left (start) and right (end) aligned, dropdown and dropup, and supports auto-flipping dropdown to dropup, and vice-versa) when the menu would overflow off of the visible screen area.

### Menu alignment

The dropdown menu can either be _start_ aligned (default) or _end_ aligned to the button above it. To have the dropdown aligned on the _end_, set the `end` prop.

<<< DEMO ./demo/DropdownMenuAlignment.vue#template{vue-html}

### Dropup

Turn your dropdown menu into a drop-up menu by setting the `placement` prop.

<<< DEMO ./demo/DropdownDropup.vue#template{vue-html}

### Drop placement

Turn your dropdown menu into a drop left, right or other menu by setting the `placement` prop.

Values for `placement` come from [floating-ui's placement definition](https://floating-ui.com/docs/computeposition#placement).

<<< DEMO ./demo/DropdownPlacement.vue#template{vue-html}

### Auto "flipping"

By default, dropdowns may flip to the top, or the bottom, based on their current position in the viewport. To disable this auto-flip feature, set the `no-flip` prop.

<<< DEMO ./demo/DropdownNoFlip.vue#template{vue-html}

### Menu offset

Like to move your menu away from the toggle buttons a bit? Then use the `offset` prop to specify the number of pixels to push right (or left when negative) from the toggle button:

<<< DEMO ./demo/DropdownMenuOffset.vue#template{vue-html}

### Floating Strategy

By default, the floating element will render using _absolute_. You can change this using the `strategy` prop. The only other option is `fixed`.
See the [floating-ui documentation](https://floating-ui.com/docs/hide#strategy) for details.

<<< DEMO ./demo/DropdownFloating.vue#template{vue-html}

### Boundary constraint

By default, dropdowns are visually constrained to their clipping ancestors, which will suffice in most situations. However, if you place a dropdown inside an element that has `overflow: scroll` (or similar) set, the dropdown menu may - in some situations - get cut off. To get around this, you can specify a boundary element via the `boundary` prop. Supported values any values from [floating-ui](https://floating-ui.com/)
[Boundary](https://floating-ui.com/docs/detectoverflow#boundary) or [RootBoundary](https://floating-ui.com/docs/detectoverflow#rootboundary) types. The default value is `clippingAncestors`.

**Note:** When `boundary` is any value other than the default of `clippingAncestors`, the style `position: static` is applied to the dropdown component's root element to allow the menu to "break out" of its scroll container. In some situations, this may affect your layout or positioning of the dropdown trigger button. In these cases, you may need to wrap your dropdown inside another element

**Note:** BootstrapVueNext uses [floating-ui](https://floating-ui.com/) under the hood, so please read [their options documnetation](https://floating-ui.com/docs/detectoverflow#options) for details on `boundary` and `boundary-padding`.

### Container element

By default, dropdowns are next to the toggle button. However, you can specify a container element via the `container` prop where dropdowns will be teleported to instead. Supported values are CSS selector string, an actual DOM node or a reference to an HTML element.

### Dropdown auto close behavior

By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the `auto-close` property to change this behavior of the dropdown.

The `auto-close`property has 4 options.

- `true` : the dropdown will be closed by clicking outside or inside the dropdown menu
- `false` : the dropdown will be closed by clicking the toggle button and manually calling the hide method. (Also will not be closed by pressing <kbd>esc</kbd> key)
- `inside` : the dropdown will be closed (only) by clicking inside the dropdown menu
- `outside` : the dropdown will be closed (only) by clicking outside the dropdown menu

<<< DEMO ./demo/DropdownAutoClose.vue#template{vue-html}

### Advanced floating-ui configuration

Occasionally you may want to modify the floating-ui behavior. We already expose some configurations through the `no-flip`, `no-shift`, `strategy`, and `offset` props. However, lower-level access to the API may sometimes be required. You can use the `floatingMiddleware` prop to define middleware to pass through to the floating-ui element.

You can view the [Floating-ui docs](https://floating-ui.com/docs/middleware) to learn more about their middleware. Note: You will likely want to install `@floating-ui/vue` to use their middleware directly, rather than rebuilding middleware options.

**Note**: Using the `floatingMiddleware` prop will overwrite other defined middleware such as `offset`, `noFlip`, and `noShift`. They are not merged.

## Split button support

Create a split dropdown button, where the left button provides a `split-click` event and link support, while the right-hand side is the dropdown menu toggle button.

<<< DEMO ./demo/DropdownSplitButton.vue#template{vue-html}

### Split button link support

The left split button defaults to an element of type `<button>` (a `BButton` to be exact). To convert this button into a link or `RouterLink`, specify the href via the `split-href` prop or a router link `to` value via the `split-to` prop, while maintaining the look of a button.

<<< DEMO ./demo/DropdownSplitButtonLink.vue#template{vue-html}

### Split button type

The split button defaults to a button `type` of `button`. You can specify an alternate type via the `split-button-type` prop. Supported values are: `button`, `submit`, and `reset`.

If props `split-to` or `split-href` are set, the `split-button-type` prop will be ignored.

## Styling options

Dropdowns support various props for styling the dropdown trigger button.

### Sizing

Dropdowns work with trigger buttons of all sizes, including default and split dropdown buttons.

Set the `size` prop to either `sm` for a small button, or `lg` for a large button.

<<< DEMO ./demo/DropdownSizing.vue#template{vue-html}

**Note:** _changing the size of the button(s) does not affect the size of the menu items!_

### Dropdown color variants

The dropdown toggle button can have one of the standard Bootstrap contextual variants applied by setting the prop `variant` to `success`, `primary`, `info`, `danger`, `link`, `outline-dark`, etc. (or custom variants, if defined). The default variant is `secondary`.

See the [Variant Reference](/docs/reference/color-variants) for a full list of built-in contextual variants.

<<< DEMO ./demo/DropdownColorVariants.vue#template{vue-html}

You can also apply arbitrary classes to the toggle button via the `toggle-class` prop.

### Split button color variant

By default, the left split button uses the same `variant` as the `toggle` button. You can give the
split button its variant via the `split-variant` prop.

<<< DEMO ./demo/DropdownSplitButtonVariant.vue#template{vue-html}

### Dark mode

Dark variants for components were deprecated in Bootstrap v5.3.0. See
[their documentation](https://getbootstrap.com/docs/5.3/components/dropdowns/#dark-dropdowns) for details.

### Block level dropdowns

By default, dropdowns act like buttons and are displayed inline. Create a full-width, “block button”
by adding the classes `d-grid` and `gap-2` to the `BDropdown`. For split buttons, wrap the `BDropdown` in a div
that has the `d-grid` and `gap-2` classes and add `split-class="w-100"` to the `BDropdown` itself.
See the [Bootstrap 5](https://getbootstrap.com/docs/5.3/components/buttons/#block-buttons) button documentation for details

<<< DEMO ./demo/DropdownBlockToggle.vue#template{vue-html}

If you want the dropdown menu to span to the full width of the parent container too, add the `w-100`
utility class to the `menu-class` prop.

<<< DEMO ./demo/DropdownBlockMenu.vue#template{vue-html}

### Dropdown sub-component color variants

Many of the supported dropdown [sub-components](#dropdown-supported-sub-components) provide a
`variant` prop for controlling their text color.

### Hidden caret

The dropdown can be created with the toggle's caret visually hidden by setting the `no-caret` prop to `true`. This is useful when the dropdown is to be displayed as an icon.

<<< DEMO ./demo/DropdownHiddenCaret.vue#template{vue-html}

**Note:** The caret will always be shown when using `split` mode.

## v-model support

The dropdown's opened state is bound to the component's `v-model`. Programatic control of the state of the dropdown can be
managed via the model. The model can also be used to observe the state of the dropdown.

<<< DEMO ./demo/DropdownModel.vue

## Exposed Methods

You are also able to use the built in methods for showing, hiding or toggling the dropdown via[template refs](https://vuejs.org/guide/essentials/template-refs.html#template-refs).

1. `show`: shows the dropdown
2. `hide`: hides the dropdown
3. `toggle`: toggles the dropdown

<<< DEMO ./demo/DropdownMethods.vue

## Dropdown supported sub-components

The following components can be placed inside your dropdowns. Using any other component or markup
may break layout and/or keyboard navigation.

| Sub-component                                                  | Description                                                                                                              |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `BDropdownItem`                                                | Action items that provide click, link, and `RouterLink`/`NuxtLink` functionality. Renders as an `<a>` element by default |
| <span style="white-space:nowrap;">`BDropdownItemButton`</span> | An alternative to `BDropdownItem` that renders a menu item using a `<button>` element                                    |
| `BDropdownDivider`                                             | A divider/spacer which can be used to separate dropdown items                                                            |
| `BDropdownText`                                                | Free flowing text content in a menu                                                                                      |
| `BDropdownGroup`                                               | For grouping dropdown sub-components with an optional header                                                             |
| `BDropdownHeader`                                              | A header item, used to help identify a group of dropdown items                                                           |
| `BDropdownForm`                                                | For placing form controls within a dropdown menu.                                                                        |

::: warning
_Nested sub-menus are **not** supported._
:::

::: tip
There are small differences in how the sub-components behave, please read our [migration guide](/docs/migration-guide#dropdown-sub-components)
if you are converting from `bootstrap-vue`.
:::

### BDropdownItem

The `BDropdownItem` is typically used to create a navigation link inside your menu. Use either the `href` prop or the `to` prop (for router link support) to generate the appropriate navigation link. If neither `href` nor `to` are provided, a standard `<a>` link will be generated with an `href` of `#` (with an event handler that will prevent scroll to top behavior by preventing the default link action).

Disabled the dropdown item by setting the `disabled` prop.

<<< DEMO ./demo/DropdownItem.vue#template{vue-html}

### BDropdownItemButton

Historically dropdown menu contents had to be links (`BDropdownItem`), but that is no longer the
case with Bootstrap v5. Now you can optionally create `<button>` elements in your dropdowns by using
the `BDropdownItemButton` sub-component. `BDropdownItemButton` does not support the `href`
or `to` props.

Disabled the dropdown item button by setting the `disabled` prop.

<<< DEMO ./demo/DropdownItemButton.vue#template{vue-html}

When the menu item does not trigger navigation, it is recommended to use the
`BDropdownItemButton` sub-component.

### BDropdownDivider

Separate groups of related menu items with `BDropdownDivider`.

<<< DEMO ./demo/DropdownDivider.vue#template{vue-html}

### BDropdownText

Place any freeform text within a dropdown menu using the `BDropdownText` sub-component or use
text combined with spacing utilities. Note that you'll likely need additional sizing styles to
constrain/set the menu width.

<<< DEMO ./demo/DropdownText.vue#template{vue-html}

`BDropdownText` has the BootstrapVueNext custom class `.b-dropdown-text` applied to it which sets some basic styles which are suitable in most situations. By default, its width will be the same as the widest `BDropdownItem` content. You may need to place additional styles or helper classes on the component.

`variant`)

### BDropdownGroup

Group a set of dropdown sub-components with an optional associated header. Place a `BDropdownDivider` between your `BDropdownGroup` and other groups or non-grouped dropdown contents.

<<< DEMO ./demo/DropdownGroup.vue#template{vue-html}

### BDropdownHeader

Add a header to label sections of actions in any dropdown menu.

<<< DEMO ./demo/DropdownHeader.vue#template{vue-html}

See Section [Headers and accessibility](#headers-and-accessibility) for details on making headers more accessible for users of assistive technologies.

Using the `BDropdownGroup` sub-component simplifies creating accessible grouped dropdown items with an associated header.

### BDropdownForm

Add a form into your dropdown with `BDropdownForm`.

<<< DEMO ./demo/DropdownForm.vue#template{vue-html}

Or make it inline.

<<< DEMO ./demo/DropdownInlineForm.vue#template{vue-html}

## Accessibility

Providing a unique `id` prop ensures ARIA compliance by automatically adding the appropriate `aria-*` attributes in the rendered markup. By default, the dropdown will render a unique id for every dropdown. However, this can be overwritten with the prop `id`.

The default ARIA role is set to `menu`, but you can change this default to another role (such as `navigation`) via the `role` prop, depending on your use case.

When a menu item does not trigger navigation, it is recommended to use the `BDropdownItemButton` sub-component (which is not announced as a link) instead of `BDropdownItem` (which is presented as a link to the user).

### Headers and accessibility

When using `BDropdownHeader` components in the dropdown menu, it is recommended to add an `id` attribute to each of the headers, and then set the `aria-describedby` attribute (set to the `id` value of the associated header) on each following dropdown items under that header. This will provide users of assistive technologies (i.e. sight-impaired users) additional context about the dropdown item:

<<< DEMO ./demo/DropdownAccessibility.vue#template{vue-html}

As a simplified alternative, use the `BDropdownGroup` instead to easily associate header text to the contained dropdown sub-components.

### Keyboard navigation

Dropdowns support keyboard navigation, emulating native `<select>` behavior.

Note that <kbd>Down</kbd> and <kbd>Up</kbd> will not move focus into `BDropdownForm` sub-components, but users can still use <kbd>Tab</kbd> or <kbd>Shift</kbd>+<kbd>Tab</kbd> to move into form controls within the menu.

## Lazy

Dropdown menus can have their inner content rendered lazily through the `lazy` prop. By default, this is turned off. For navigation elements, it may be beneficial to keep lazy off, so web crawlers can properly comb through your sites navigation.

<<< DEMO ./demo/DropdownLazy.vue#template{vue-html}

## Implementation notes

The dropdown menu is rendered with semantic `<ul>` and `<li>` elements for accessibility reasons. The `.dropdown-menu` is the `<ul>` element, while dropdown items (items, buttons, text, form, headers, and dividers) are wrapped in an `<li>` element. If creating custom items to place inside the dropdown menu, ensure they are wrapped with a plain `<li>`.

## See also

- [`BNavItemDropdown`](/docs/components/nav#dropdown) for dropdown support inside `BNav` and `BNavbar`
- [Router Link Support](/docs/reference/router-links) reference for information about router-link specific props available on `BDropdownItem`

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/dropdown.data'
</script>
