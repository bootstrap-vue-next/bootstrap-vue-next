<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="computedKind !== StyleKind.None">
    <a href="../configurations/customizing-styles#adding-styles">Adding styles</a>:
    <code v-html="computedValue" />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {StyleKind, type StyleSpec} from '../types'
import {kebabCase} from '../utils/objectUtils'

const props = defineProps<{name: string; styleSpec: StyleSpec | undefined}>()

const computedKind = computed(() => props.styleSpec?.kind ?? StyleKind.BootstrapClass)

const formatClass = (value: string) => `.${repalceDashes(kebabCase(value))}`

const repalceDashes = (value: string) => value.replaceAll('-', '&#8209;')

const computedValue = computed(() => {
  const componentName = props.name

  switch (computedKind.value) {
    case StyleKind.BootstrapClass:
      return formatClass(componentName.substring(1))
    case StyleKind.BsvnClass:
      return formatClass(componentName.substring(1))
    case StyleKind.OverrideClass:
    case StyleKind.Tag:
      return repalceDashes(props.styleSpec?.value ?? 'UNDEFINED')
    default:
      return 'UNDEFINED'
  }
})
</script>
