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
    <BRow id="card">
      <BCol>
        <BCard>
          <BButton @click="toggleMode">Toggle {{ computedMode }}</BButton>
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
const mode = useColorMode({
  selector: '#card',
  persist: false,
})

const toggleMode = () => (mode.value !== 'dark' ? (mode.value = 'dark') : (mode.value = 'light'))

const computedMode = computed(() => (mode.value === 'dark' ? 'light' : 'dark'))
</script>
