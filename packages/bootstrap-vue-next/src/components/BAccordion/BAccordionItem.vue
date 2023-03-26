<template>
  <div class="accordion-item">
    <b-collapse
      :id="computedId"
      v-model="open"
      class="accordion-collapse"
      :visible="visible"
      :accordion="parentData ?? undefined"
      :aria-labelledby="`heading${computedId}`"
    >
      <template #header="{visible: toggleVisible, toggle}">
        <component :is="headerTag" :id="`heading${computedId}`" class="accordion-header">
          <button
            class="accordion-button"
            :class="{collapsed: !toggleVisible}"
            type="button"
            :aria-expanded="toggleVisible ? 'true' : 'false'"
            :aria-controls="computedId"
            @click="toggle"
          >
            <slot name="title"> {{ title }} </slot>
          </button>
        </component>
      </template>
      <div class="accordion-body">
        <slot />
      </div>
    </b-collapse>
  </div>
</template>

<script setup lang="ts">
import {inject, onMounted, toRef, watchEffect} from 'vue'
import {useVModel} from '@vueuse/core'
import BCollapse from '../BCollapse.vue'
import {accordionInjectionKey} from '../../utils'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish} from '../../types'
// import type {BAccordionItemProps} from '../types/components'

interface BAccordionItemProps {
  id?: string
  title?: string
  modelValue?: boolean
  visible?: Booleanish
  headerTag?: string
}

const props = withDefaults(defineProps<BAccordionItemProps>(), {
  headerTag: 'h2',
})

const emit = defineEmits<(e: 'update:modelValue', value: boolean) => void>()
const open = useVModel(props, 'modelValue', emit, {passive: true})

const visibleBoolean = useBooleanish(toRef(props, 'visible'))

onMounted(() => {
  if (visibleBoolean.value) {
    open.value = true
  }
})

watchEffect(() => (open.value = visibleBoolean.value))

const parentData = inject(accordionInjectionKey, null)

const computedId = useId(toRef(props, 'id'), 'accordion_item')
</script>
