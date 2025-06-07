# List Group

<PageHeader>

List Groups are a flexible and powerful component for displaying a series of content. List Group items can be modified to support just about any content within. They can also be used as navigation via various props.

</PageHeader>

<<< DEMO ./demo/ListGroupOverview.vue#template{vue-html}

## Active items

Set the `active` prop on a `BListGroupItem` to indicate the current active selection.

<<< DEMO ./demo/ListGroupActive.vue#template{vue-html}

## Disabled items

Set the `disabled` prop on a `BListGroupItem` to make it appear disabled (also works with
actionable items. see below).

<<< DEMO ./demo/ListGroupDisabled.vue#template{vue-html}

## Actionable list group items

Turn a `BListGroupItem` into an actionable _link_ (`<a href="...">`) by specifying either an
`href` prop or [router-link](/docs/reference/router-links) `to` prop.

<<< DEMO ./demo/ListGroupActionable.vue#template{vue-html}

Or if you prefer `<button>` elements over links, set the `button` prop to `true`.

<<< DEMO ./demo/ListGroupActionableButton.vue#template{vue-html}

**Notes:**

- When the prop `button` is `true`, all [link related props](/docs/components/link) (other than
  `active`) and the `tag` prop will have no effect
- When `href` or `to` are set, the `tag` prop has no effect

Refer to the [Router support](/docs/reference/router-links) reference page for router-link specific
props.

## Contextual variants

Use contextual variants to style list items with a stateful background and color, via the `variant`
prop.

<<< DEMO ./demo/ListGroupVariants.vue#template{vue-html}

Contextual variants also work with action items. Note the addition of the hover styling here not
present in the previous example. Also supported is the `active` state; set it to indicate an active
selection on a contextual list group item.

<<< DEMO ./demo/ListGroupActionableVariants.vue#template{vue-html}

### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of
assistive technologies – such as screen readers. Ensure that information denoted by the color is
either obvious from the content itself (e.g. the visible text), or is included through alternative
means, such as additional text hidden using the `.visually-hidden` class.

## With badges

Add [badges](/docs/components/badge) to any list group item to show unread counts, activity, and
more with the help of some [flex utility classes](/docs/reference/utility-classes).

<<< DEMO ./demo/ListGroupBadges.vue#template{vue-html}

## Numbered

Add the `numbered` property to opt into numbered list group items. Numbers are generated via CSS (as opposed to a `<ol>s` default browser styling) for better placement inside list group items and to allow for better customization.

<<< DEMO ./demo/ListGroupNumbered.vue#template{vue-html}

These work great with custom content as well.

<<< DEMO ./demo/ListGroupNumberedCustom.vue#template{vue-html}

**Note:** When using the numbered property, it supersedes the tag property on `BListGroup` and `BListGroupItem`.
With numbered set, the `BListGroup`is always rendered as a `ol`, while the `BListGroupItem` is rendered as a `li`.

## Checkboxes and radios

Place []checkboxes and radios within list group items and customize as needed. You can use them without `<label>`s, but please remember to include an aria-label attribute and value for accessibility

<<< DEMO ./demo/ListGroupCheckbox.vue#template{vue-html}

<<< DEMO ./demo/ListGroupRadio.vue#template{vue-html}

## List Groups inside cards

Incorporate list groups into [cards](/docs/components/card). Use the `BListGroup` prop `flush`
prop when using cards with `no-body` to make the sides of the list group flush with the card.

<<< DEMO ./demo/ListGroupCard.vue#template{vue-html}

## Horizontal list groups

Set the prop `horizontal` to `true` to change the layout of list group items from vertical to
horizontal across all breakpoints. Alternatively, set `horizontal` to a responsive breakpoint (`sm`,
`md`, `lg` or `xl`) to make a list group horizontal starting at that breakpoint's min-width.
Currently, horizontal list groups cannot be combined with `flush` list groups.

**ProTip:** Want equal-width list group items when horizontal? Add the class `flex-fill` to each
list group item.

**Always horizontal:**

<<< DEMO ./demo/ListGroupHorizontal.vue#template{vue-html}

**Horizontal at breakpoint `md` and above:**

<<< DEMO ./demo/ListGroupHorizontalMd.vue#template{vue-html}

## Custom content

Add nearly any HTML or component within, even for linked list groups like the one below, with the
help of [flexbox utility classes](/docs/reference/utility-classes).

<<< DEMO ./demo/ListGroupCustom.vue#template{vue-html}

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/listGroup.data'
</script>
