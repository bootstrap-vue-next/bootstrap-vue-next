<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="computedKind !== StyleKind.None">
    <a href="../configurations/customizing-styles#adding-styles">Adding styles</a>:
    <code v-html="computedValue" />
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {type MappedComponentReference, StyleKind} from '../types'
import {kebabCase} from '../utils'

const props = defineProps<{component: MappedComponentReference}>()

const computedKind = computed(() => props.component.styleSpec?.kind ?? StyleKind.BootstrapClass)

const computedValue = computed(() => {
  const componentName = props.component.component

  switch (computedKind.value) {
    case StyleKind.BootstrapClass:
      return formatClass(componentName.substring(1))
    case StyleKind.BsvnClass:
      return formatClass(componentName.substring(1))
    case StyleKind.OverrideClass:
    case StyleKind.Tag:
      return repalceDashes(props.component.styleSpec?.value ?? 'UNDEFINED')
    default:
      return 'UNDEFINED'
  }
})

const formatClass = (value: string) => `.${repalceDashes(kebabCase(value))}`

const repalceDashes = (value: string) => value.replaceAll('-', '&#8209;')
</script>
