<template>
  <div class="deprecation-feature-test">
    <h2>DeprecatedFeature Component Test</h2>
    <p>Testing all deprecation reason types:</p>

    <h3>1. Bootstrap Deprecated</h3>
    <DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_DEPRECATED" />

    <h3>2. Vue 3/Bootstrap 5 Changes</h3>
    <DeprecatedFeature :reason="DeprecationReason.VUE3_BOOTSTRAP5_CHANGES" />

    <h3>3. Bootstrap Native</h3>
    <DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_NATIVE" />

    <h3>4. Modern Alternative</h3>
    <DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE" />

    <h3>5. Insufficient Demand</h3>
    <DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND" />

    <h3>6. With Slot Content (Issue Link)</h3>
    <DeprecatedFeature :reason="DeprecationReason.INSUFFICIENT_DEMAND">
      <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860"
        >See issue #1860</BLink
      >
    </DeprecatedFeature>

    <h3>7. With Slot Content (Parity Feature)</h3>
    <DeprecatedFeature :reason="DeprecationReason.MODERN_ALTERNATIVE">
      Use <BLink href="/docs/components/accordion">BAccordion</BLink> instead.
    </DeprecatedFeature>

    <h3>8. With Slot Content (Multiple Links)</h3>
    <DeprecatedFeature :reason="DeprecationReason.BOOTSTRAP_DEPRECATED">
      See
      <BLink href="https://getbootstrap.com/docs/5.3/migration/">Bootstrap's migration guide</BLink>
      and
      <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/123"
        >issue #123</BLink
      >
      for details.
    </DeprecatedFeature>

    <h2 style="margin-top: 3rem">Testing `what` Prop</h2>

    <h3>9. Specific Prop (Singular)</h3>
    <DeprecatedFeature what="The `block` prop" :reason="DeprecationReason.BOOTSTRAP_NATIVE">
      See our
      <BLink href="/docs/components/button#block-level-buttons">BButton documentation</BLink>
      for details.
    </DeprecatedFeature>

    <h3>10. Component (Singular)</h3>
    <DeprecatedFeature what="BCalendar" :reason="DeprecationReason.VUE3_BOOTSTRAP5_CHANGES">
      <BLink href="https://github.com/bootstrap-vue-next/bootstrap-vue-next/issues/1860"
        >See issue #1860</BLink
      >
    </DeprecatedFeature>

    <h3>11. Multiple Props (using plural prop)</h3>
    <DeprecatedFeature
      what="The `imgBottom`, `imgEnd`, `imgLeft`, `imgRight`, `imgStart`, and `imgTop` props"
      :reason="DeprecationReason.MODERN_ALTERNATIVE"
      plural
    >
      Use the `img-placement` prop instead.
    </DeprecatedFeature>

    <h3>12. Generic Plural (using plural prop)</h3>
    <DeprecatedFeature
      what="The following properties"
      :reason="DeprecationReason.INSUFFICIENT_DEMAND"
      plural
    >
      <ul style="margin-top: 0.5rem; margin-bottom: 0">
        <li><code>disabled</code></li>
        <li><code>name</code></li>
        <li><code>input-groups</code></li>
      </ul>
    </DeprecatedFeature>

    <h3>13. Feature Description (Singular)</h3>
    <DeprecatedFeature what="Icon support" :reason="DeprecationReason.MODERN_ALTERNATIVE">
      Use the default slot with
      <BLink href="/docs/icons">unplugin icons</BLink> or embed an SVG instead.
    </DeprecatedFeature>
  </div>
</template>

<script setup lang="ts">
import {BLink} from 'bootstrap-vue-next'
import DeprecatedFeature from './DeprecatedFeature.vue'
import {DeprecationReason} from '../types/deprecation'
</script>

<style scoped>
.deprecation-feature-test {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 1.5rem;
}

h3 {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
</style>
