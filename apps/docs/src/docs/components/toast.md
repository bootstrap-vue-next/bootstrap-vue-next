# Toast

<ClientOnly>
  <Teleport to=".bd-toc">

[[toc]]

  </Teleport>
</ClientOnly>

<div class="lead mb-5">

Push notifications to your visitors with a `BToast` and `BToaster`, lightweight components which are easily customizable for generating alert messages.

</div>

Toasts are lightweight notifications designed to mimic the push notifications that have been popularized by mobile and desktop operating systems.

Toasts are intended to be small interruptions to your visitors or users, and therefore should contain minimal, to-the-point, non-interactive content. Please refer to the Accessibility tips section below for important usage information.

## Overview

To encourage extensible and predictable toasts, we recommend providing a header (title) and body. Toast headers use the style `display: flex`, allowing easy alignment of content thanks to Bootstrap's margin and flexbox utility classes.

Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the `backdrop-filter` CSS property, they also attempt to blur the elements under the toast.

## Docs to be completed

<ComponentReference :data="data" />

<script setup lang="ts">
import {data} from '../../data/components/toast.data'
import ComponentReference from '../../components/ComponentReference.vue'
import {BButtonGroup, BButton, BToast} from 'bootstrap-vue-next'
</script>
