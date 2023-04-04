<template>
  <div class="accordion-item">
    <b-collapse
      :id="computedId"
      v-model="modelValue"
      class="accordion-collapse"
      :visible="visible"
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
import {inject, onMounted, ref, toRef, watch, watchEffect} from 'vue'
import {useVModel} from '@vueuse/core'
import BCollapse from '../BCollapse.vue'
import {accordionInjectionKey} from '../../utils'
import {useBooleanish, useId} from '../../composables'
import type {Booleanish} from '../../types'

interface BAccordionItemProps {
  id?: string
  title?: string
  modelValue?: Booleanish
  visible?: Booleanish
  headerTag?: string
}

const props = withDefaults(defineProps<BAccordionItemProps>(), {
  headerTag: 'h2',
  id: undefined,
  title: undefined,
  modelValue: false,
  visible: false,
})

const emit = defineEmits<(e: 'update:modelValue', value: boolean) => void>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const visibleBoolean = useBooleanish(toRef(props, 'visible'))

const {
  id: parentId,
  openItem,
  free,
} = inject(accordionInjectionKey, {
  id: ref(''),
  openItem: ref(''),
  free: ref(false),
})

const computedId = useId(toRef(props, 'id'), 'accordion_item')

onMounted(() => {
  if (visibleBoolean.value) {
    modelValue.value = true
  }
  if (modelValue.value && !free.value) {
    openItem.value = computedId.value
  }
})

watchEffect(() => (modelValue.value = visibleBoolean.value))
watch(openItem, () => (modelValue.value = openItem.value === computedId.value && !free.value))
watch(modelValue, () => {
  if (modelValue.value && !free.value) openItem.value = computedId.value
})
</script>
