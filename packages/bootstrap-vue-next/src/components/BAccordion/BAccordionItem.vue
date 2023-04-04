<template>
  <div class="accordion-item">
    <b-collapse
      :id="computedId"
      v-model="modelValue"
      class="accordion-collapse"
      v-bind="$attrs"
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

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>
<script setup lang="ts">
import {inject, onMounted, ref, toRef, watch} from 'vue'
import {useVModel} from '@vueuse/core'
import {default as BCollapse, type BCollapseEmits, type BCollapseProps} from '../BCollapse.vue'
// import  from '../BCollapse.vue'
import {accordionInjectionKey} from '../../utils'
import {useId} from '../../composables'
import type {Booleanish} from '../../types'

interface BAccordionItemProps extends BCollapseProps {
  id?: string
  title?: string
  modelValue?: Booleanish
  headerTag?: string
}

const props = withDefaults(defineProps<BAccordionItemProps>(), {
  headerTag: 'h2',
  id: undefined,
  title: undefined,
  modelValue: false,
  visible: false,
})

interface BAccordionItemEmits extends BCollapseEmits {
  (e: 'update:modelValue', value: boolean): void
}

const emit = defineEmits<BAccordionItemEmits>()

const modelValue = useVModel(props, 'modelValue', emit, {passive: true})

const {openItem, free} = inject(accordionInjectionKey, {
  openItem: ref(''),
  free: ref(false),
})

const computedId = useId(toRef(props, 'id'), 'accordion_item')

onMounted(() => {
  if (modelValue.value && !free.value) {
    openItem.value = computedId.value
  }
  if (!modelValue.value && openItem.value === computedId.value) {
    modelValue.value = true
  }
})

watch(openItem, () => (modelValue.value = openItem.value === computedId.value && !free.value))
watch(modelValue, () => {
  if (modelValue.value && !free.value) openItem.value = computedId.value
})
</script>
