# Badge

Documentation and examples for badges, our small count and labeling component.

## Examples

Badges scale to match the size of the immediate parent element by using relative font sizing and em units. As of v5, badges no longer have focus or hover styles for links

### Headings

<ClientOnly>
    <b-card class="mt-2">
        <h1>Example heading <b-badge>New</b-badge></h1>
        <h2 class="border-0 pb-0">Example heading <b-badge>New</b-badge></h2>
        <h3>Example heading <b-badge>New</b-badge></h3>
        <h4>Example heading <b-badge>New</b-badge></h4>
        <h5>Example heading <b-badge>New</b-badge></h5>
        <h6>Example heading <b-badge>New</b-badge></h6>
    </b-card>
</ClientOnly>

``` html
<h1>Example heading <b-badge>New</b-badge></h1>
<h2>Example heading <b-badge>New</b-badge></h2>
<h3>Example heading <b-badge>New</b-badge></h3>
<h4>Example heading <b-badge>New</b-badge></h4>
<h5>Example heading <b-badge>New</b-badge></h5>
<h6>Example heading <b-badge>New</b-badge></h6>
```

### Buttons

Badges can be used as part of links or buttons to provide a counter.

<ClientOnly>
    <b-card>
        <b-button variant="primary">
            Notifications <b-badge>4</b-badge>
        </b-button>
    </b-card>
</ClientOnly>

``` html
<b-button variant="primary">
    Notifications <b-badge>4</b-badge>
</b-button>
```

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.

### Positioned

Use utilities to modify a `.badge` and position it in the corner of a link or button.

<ClientOnly>
    <b-card>
        <b-button variant="primary" class="position-relative">
            Inbox
            <b-badge variant="danger" text-indicator>
                99+
                <span class="visually-hidden">unread messages</span>
            </b-badge>
        </b-button>
    </b-card>
</ClientOnly>

``` html
<b-button variant="primary" class="position-relative">
    Inbox
    <b-badge variant="danger" text-indicator>
        99+
        <span class="visually-hidden">unread messages</span>
    </b-badge>
</b-button>
```

You can also replace the `.badge` class with a few more utilities without a count for a more generic indicator.

<ClientOnly>
    <b-card>
        <b-button variant="primary" class="position-relative">
            Inbox
            <b-badge variant="danger" dot-indicator>
                <span class="visually-hidden">New alerts</span>
            </b-badge>
        </b-button>
    </b-card>
</ClientOnly>

``` html
<b-button variant="primary" class="position-relative">
    Inbox
    <b-badge variant="danger" dot-indicator>
        <span class="visually-hidden">New alerts</span>
    </b-badge>
</b-button>
```

## Background colors

Use our background utility classes to quickly change the appearance of a badge. Please note that when using Bootstrap’s default .bg-light, you’ll likely need a text color utility like .text-dark for proper styling. This is because background utilities do not set anything but background-color.

<ClientOnly>
    <b-card>
        <b-badge variant="primary">Primary</b-badge>
        <b-badge variant="secondary">Secondary</b-badge>
        <b-badge variant="success">Success</b-badge>
        <b-badge variant="danger">Danger</b-badge>
        <b-badge variant="warning">Warning</b-badge>
        <b-badge variant="info">Info</b-badge>
        <b-badge variant="light">Light</b-badge>
        <b-badge variant="dark">Dark</b-badge>
    </b-card>
</ClientOnly>

``` html
<b-badge variant="primary">Primary</b-badge>
<b-badge variant="secondary">Secondary</b-badge>
<b-badge variant="success">Success</b-badge>
<b-badge variant="danger">Danger</b-badge>
<b-badge variant="warning">Warning</b-badge>
<b-badge variant="info">Info</b-badge>
<b-badge variant="light">Light</b-badge>
<b-badge variant="dark">Dark</b-badge>
```

## Pill badges

Use the `pill` prop to make badges more rounded with a larger border-radius.

<ClientOnly>
    <b-card>
        <b-badge variant="primary" pill>Primary</b-badge>
        <b-badge variant="secondary" pill>Secondary</b-badge>
        <b-badge variant="success" pill>Success</b-badge>
        <b-badge variant="danger" pill>Danger</b-badge>
        <b-badge variant="warning" pill>Warning</b-badge>
        <b-badge variant="info" pill>Info</b-badge>
        <b-badge variant="light" pill>Light</b-badge>
        <b-badge variant="dark" pill>Dark</b-badge>
    </b-card>
</ClientOnly>

``` html
<b-badge variant="primary" pill>Primary</b-badge>
<b-badge variant="secondary" pill>Secondary</b-badge>
<b-badge variant="success" pill>Success</b-badge>
<b-badge variant="danger" pill>Danger</b-badge>
<b-badge variant="warning" pill>Warning</b-badge>
<b-badge variant="info" pill>Info</b-badge>
<b-badge variant="light" pill>Light</b-badge>
<b-badge variant="dark" pill>Dark</b-badge>
```