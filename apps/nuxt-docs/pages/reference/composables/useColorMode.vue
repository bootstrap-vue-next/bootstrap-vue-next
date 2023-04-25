<template>
  <BContainer>
    <BRow>
      <BCol>
        <h1>useColorMode</h1>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BBadge variant="info">New in v0.8.0</BBadge>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <HighlightedText>useColorMode</HighlightedText> makes creating application color modes easy.
        Bootstrap includes defaults for <HighlightedText>Light</HighlightedText> and
        <HighlightedText>Dark</HighlightedText> modes. To create more modes, you will need to
        manually add <HighlightedText>SCSS</HighlightedText>. Read more
        <ExternalLink
          href="https://getbootstrap.com/docs/5.3/customize/color-modes/#custom-color-modes"
        >
          here
        </ExternalLink>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <h2>Demo</h2>
      </BCol>
    </BRow>
    <BRow ref="el">
      <BCol>
        <BCard>
          <BButton @click="toggleMode">Toggle {{ computedMode }}</BButton>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <BCard>
          <code>
            <pre>
&lt;template&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
import { ref, computed } from 'vue'
import { useColorMode } from 'bootstrap-vue-next'

const el = ref&lt;HTMLElement | null&gt;(null)

const mode = useColorMode({
  selector: el as unknown as HTMLElement,
  persist: false,
})

const toggleMode = () => (mode.value !== 'dark' ? (mode.value = 'dark') : (mode.value = 'light'))

const computedMode = computed(() => (mode.value === 'dark' ? 'light' : 'dark'))
&lt;/script&gt;
            </pre>
          </code>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <HighlightedText>useColorMode</HighlightedText> is simply a wrapper for
        <BLink href="https://vueuse.org/core/useColorMode/#usecolormode">vueuse</BLink> with
        Bootstrap specific defaults. You can view their implementation for some further details if
        needed.
      </BCol>
    </BRow>
    <BRow>
      <BCol>
        <!-- <CodeBlock>  </CodeBlock> -->
      </BCol>
    </BRow>
  </BContainer>
</template>

<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

const mode = useColorMode({
  selector: el as unknown as HTMLElement,
  persist: false,
})

const toggleMode = () => (mode.value !== 'dark' ? (mode.value = 'dark') : (mode.value = 'light'))

const computedMode = computed(() => (mode.value === 'dark' ? 'light' : 'dark'))
</script>
