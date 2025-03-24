<template>
  <div>
    <BOffcanvas ref="off-canvas" v-model="showOffcanvas" title="Title"
      ><div ref="_content">Testing some content</div>
    </BOffcanvas>

    <BButton @click="showOffcanvas = !showOffcanvas">Toggle Offcanvas</BButton>
  </div>
</template>

<script setup lang="ts">
import {type ComponentPublicInstance, ref, useTemplateRef} from 'vue'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const content = useTemplateRef<ComponentPublicInstance<HTMLElement>>('_content')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const offCanvas = useTemplateRef<ComponentPublicInstance<HTMLElement>>('off-canvas')

const showOffcanvas = ref(false)
</script>
