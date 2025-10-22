<ComposableHeader path="useColorMode/index.ts" title="useColorMode" />

<div class="lead mb-5">

`useColorMode` provides a convenient utility to adjust the global color theme of your application. You can also use it to target specific components by using a [template ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) or a selector. Bootstrap's default behavior dictates that color modes are applied to all children in the branch. `useColorMode` is simply a wrapper for the [vueuse](https://vueuse.org/core/useColorMode/#usecolormode) utility.

</div>

## Demo

<<< DEMO ./demo/UseColorModeBasic.vue

<script setup lang="ts">
import ComposableHeader from './ComposableHeader.vue'
</script>
